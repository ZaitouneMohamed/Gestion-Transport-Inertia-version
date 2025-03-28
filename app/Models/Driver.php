<?php

namespace App\Models;

use App\Traits\Searchable;
use Illuminate\Database\Eloquent\Model;

class Driver extends InertiaBaseModel
{
    use Searchable;
    protected $table = "chaufeurs";
    protected $fillable = ['full_name', "phone", "code", "numero_2", "adresse", "cnss", 'email', "cni", "status"];

    /**
     * Get the searchable fields
     */
    public function getSearchableFields(): array
    {
        return [
            'full_name',
            'code',
            "phone"
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

    public function scopeActive($query)
    {
        return $query->where("statue", 1);
    }
}
