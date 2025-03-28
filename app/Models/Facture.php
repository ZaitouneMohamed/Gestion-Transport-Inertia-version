<?php

namespace App\Models;

use App\Traits\Searchable;
use Illuminate\Database\Eloquent\Model;

class Facture extends InertiaBaseModel
{
    use Searchable;
    protected $table = "factures";

    protected $fillable = [
        "date",
        "prix",
        "station_id",
        "type",
        "n_bon",
    ];

    public function Station()
    {
        return $this->belongsTo(Station::class);
    }

     /**
     * Get the searchable fields
     */
    public function getSearchableFields(): array
    {
        return [
            'prix',
            "n_bon"
        ];
    }

    /**
     * Get relations to load with search
     */
    public function getSearchRelations(): array
    {
        return [
            // your relations like 'trucks', 'stations', etc...
        ];
    }
}
