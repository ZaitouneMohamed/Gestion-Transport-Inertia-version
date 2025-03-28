<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\InertiaBaseController;
use App\Http\Resources\Reparation\ReparationResource;
use App\Models\Reparation;

class ReparationController extends InertiaBaseController
{
    protected $model = Reparation::class;
    protected $routeName = "reparations";
    protected $folderPath = "Reparation";
    protected $resourceClass = ReparationResource::class;
}
