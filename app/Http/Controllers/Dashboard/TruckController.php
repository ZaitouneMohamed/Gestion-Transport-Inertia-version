<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\InertiaBaseController;
use App\Http\Requests\Truck\StoreTruckRequest;
use App\Http\Requests\Truck\UpdateTruckRequest;
use App\Http\Resources\Truck\TruckResource;
use App\Models\Truck;

class TruckController extends InertiaBaseController
{
    protected $model = Truck::class;
    protected $folderPath = "Trucks";
    protected $storeRequestClass = StoreTruckRequest::class;
    protected $updateRequestClass = UpdateTruckRequest::class;
    protected $routeName = "trucks.index";
    protected $resourceClass = TruckResource::class;
}