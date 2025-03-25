<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class City extends Model
{
    protected $table = "villes";
    protected $fillable = [
        "name",
        "km_proposer"
    ];
    public function Missions()
    {
        //return $this->hasMany(Mission::class);
    }
}
