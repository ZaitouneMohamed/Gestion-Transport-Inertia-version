<?php

namespace App\Models;

use App\Traits\Searchable;
use Illuminate\Database\Eloquent\Model;
use App\Services\ConsumptionCalculatorService;

class Consumption extends InertiaBaseModel
{
    use Searchable;
    protected $table = "consomations";

    protected $fillable = [
        "chaufeur_id",
        "camion_id",
        "date",
        "description",
        "status",
        "ville",
        "km_proposer",
        "n_magasin"
    ];

    public function driver()
    {
        return $this->belongsTo(Driver::class , "chaufeur_id");
    }
    public function truck()
    {
        return $this->belongsTo(Truck::class , "camion_id");
    }
    public function Bons()
    {
        return $this->hasMany(Bon::class , "consomation_id");
    }

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


     // Calculated Attributes
     public function getQtyLittreAttribute()
     {
         return app(ConsumptionCalculatorService::class)->calculateQtyLitre($this);
     }

     public function getKmTotalAttribute()
     {
         return app(ConsumptionCalculatorService::class)->calculateKmTotal($this);
     }

     public function getTauxAttribute()
     {
         return app(ConsumptionCalculatorService::class)->calculateTaux($this);
     }
     public function getPrixAttribute()
    {
        return app(ConsumptionCalculatorService::class)->calculatePrix($this);
    }

    public function getFullPrixAttribute()
    {
        return app(ConsumptionCalculatorService::class)->calculateFullPrix($this);
    }

    public function getStatueAttribute()
    {
        return app(ConsumptionCalculatorService::class)->calculateStatus($this);
    }
}
