<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Facture extends Model
{

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
}
