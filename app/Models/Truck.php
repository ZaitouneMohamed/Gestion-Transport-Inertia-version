<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Truck extends InertiaBaseModel
{
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

    protected $searchFillables = ['matricule'];

    public function scopeActive($query)
    {
        return $query->where("statue", 1);
    }
}
