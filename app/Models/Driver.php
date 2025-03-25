<?php

namespace App\Models;

class Driver extends InertiaBaseModel
{
    protected $table = "chaufeurs";

    protected $fillable = ['full_name',"phone","code","numero_2","adresse","cnss",'email',"cni","status"];

    protected $searchFillables = ['full_name','phone','email','code','cni'];

    public function scopeActive($query)
    {
        return $query->where("statue", 1);
    }
}
