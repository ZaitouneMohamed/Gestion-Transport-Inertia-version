<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Http\Controllers\InertiaBaseController;
use App\Http\Requests\Bon\StoreBonRequest;
use App\Http\Requests\Bon\UpdateBonRequest;
use App\Models\Bon;
use Illuminate\Http\Request;

class BonController extends InertiaBaseController
{
    protected $model = Bon::class;
    protected $folderPath = "Consumption";
    //protected $storeRequestClass = StoreConsumptionRequest::class;
    protected $updateRequestClass = UpdateBonRequest::class;
    protected $storeRequestClass = StoreBonRequest::class;
   // protected $routeName = "consumption.index";
   // protected $resourceClass = ConsumptionResource::class;

}
