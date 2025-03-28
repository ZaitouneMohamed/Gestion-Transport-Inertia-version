<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\InertiaBaseController;
use App\Http\Requests\Facture\StoreFactureRequest;
use App\Http\Resources\Facture\FactureResource;
use App\Models\Facture;

class FactureController extends InertiaBaseController
{
    protected $model = Facture::class;
    protected $resourceClass = FactureResource::class;
    protected $storeRequestClass = StoreFactureRequest::class;
    protected $folderPath = 'Factures';
    protected $routeName = 'factures.index';

}