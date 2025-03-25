<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Station extends InertiaBaseModel
{
    protected $table = "stations";

    protected $fillable = [
        "name",
        "solde",
        "gerant_name",
        "gerant_phone",
        "gerant_rep_name",
        "gerant_rep_phone",
        "ville"
    ];

    protected $searchFillables = ['name'];
}
