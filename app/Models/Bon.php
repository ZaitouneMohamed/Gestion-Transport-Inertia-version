<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Bon extends Model
{
    protected $table = "bons";

    protected $fillable = [
        "consomation_id",
        "date",
        "qte_litre",
        "description",
        "prix",
        "station_id",
        "numero_bon",
        "km",
        "nature"
    ];

    public function scopeGazole($query)
    {
        return $query->where("nature", 'gazole');
    }

    public function consumption()
    {
        return $this->belongsTo(Consumption::class , 'consomation_id');
    }
    public function Station()
    {
        return $this->belongsTo(Station::class);
    }

}
