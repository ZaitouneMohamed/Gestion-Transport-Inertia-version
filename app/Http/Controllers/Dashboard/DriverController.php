<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\InertiaBaseController;
use App\Http\Requests\Driver\StoreDriverRequest;
use App\Http\Requests\Driver\UpdateDriverRequest;
use App\Http\Resources\Driver\DriverResource;
use App\Models\Driver;

class DriverController extends InertiaBaseController
{
    protected $model = Driver::class;
    protected $folderPath= "Drivers";
    protected $storeRequestClass = StoreDriverRequest::class;
    protected $updateRequestClass = UpdateDriverRequest::class;
    protected $resourceClass = DriverResource::class;
    protected $routeName = "drivers.index";
}
