<?php

namespace App\Models;

use App\Traits\Searchable;
use Illuminate\Database\Eloquent\Model;

class Station extends InertiaBaseModel
{
    use Searchable;
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

    public function getSearchableFields(): array
    {
        return [
            'name',
        ];
    }
    public function getSearchRelations(): array
    {
        return [
            // your relations like 'trucks', 'stations', etc...
        ];
    }

    protected $searchFillables = ['name'];
}
