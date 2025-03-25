<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\InertiaBaseController;
use App\Http\Requests\Station\StoreStationRequest;
use App\Http\Requests\Station\UpdateStationRequest;
use App\Http\Resources\Station\StationResource;
use App\Models\Station;

class StationController extends InertiaBaseController
{
    protected $model = Station::class;
    protected $folderPath = "Station";
    protected $storeRequestClass = StoreStationRequest::class;
    protected $updateRequestClass = UpdateStationRequest::class;
    protected $routeName = "stations.index";
    protected $resourceClass = StationResource::class;
}
