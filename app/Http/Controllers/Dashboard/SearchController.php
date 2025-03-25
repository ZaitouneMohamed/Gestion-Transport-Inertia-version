<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Http\Resources\Consumption\ConsumptionResource;
use App\Models\Consumption;
use App\Models\Driver;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SearchController extends Controller
{
    public function bonsSearch(Request $request)
    {
        return Inertia::render('search/Bons');
    }
    public function driversSearch(Request $request)
    {
        $query = Consumption::query();

        if ($request->filled('driver')) {
            $query->where('chaufeur_id', $request->driver);
        }

        if ($request->filled(['startDate', 'endDate'])) {
            $query->whereBetween('date', [$request->startDate, $request->endDate]);
        }

        $trajets = $query->latest()->with(["driver:id,full_name", 'truck:id,matricule,consommation' ,"Bons"])->paginate(25);
        return Inertia::render('search/Drivers', [
            'trajets' => ConsumptionResource::collection($trajets),
            'drivers' => Driver::active()->get(['id', 'full_name']),
            'filters' => $request->only(['chaufeur', 'startDate', 'endDate'])
        ]);
    }
    public function trucksSearch(Request $request)
    {
        return Inertia::render('search/Trucks');
    }
    public function stationsSearch(Request $request)
    {
        return Inertia::render('search/Station');
    }
    public function consumptionSearch(Request $request)
    {
        return Inertia::render('search/Consumption');
    }
    public function missionSearch(Request $request)
    {
        return Inertia::render('search/Mission');
    }
}
