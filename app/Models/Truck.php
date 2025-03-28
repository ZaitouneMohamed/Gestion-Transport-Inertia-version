<?php

namespace App\Models;

use App\Traits\Searchable;

class Truck extends InertiaBaseModel
{
    use Searchable;
    protected $table = "camions";
    protected $fillable = [
        "matricule",
        "statue",
        "is_for_aej",
        "marque",
        "genre",
        "type_carburant",
        "n_chasie",
        "puissanse_fiscale",
        "premier_mise",
        "consommation"
    ];

    public function getSearchableFields(): array
    {
        return [
            'matricule',
        ];
    }
    public function getSearchRelations(): array
    {
        return [
            // your relations like 'trucks', 'stations', etc...
        ];
    }
    public function scopeActive($query)
    {
        return $query->where("statue", 1);
    }
}
