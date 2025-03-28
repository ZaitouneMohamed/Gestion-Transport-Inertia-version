<?php

namespace App\Models;

use App\Traits\Searchable;

class ReparationInfo extends InertiaBaseModel
{
    //
    use Searchable;

    protected $table = "reparation_infos";

    protected $fillable = ["reparation_id" , "chaufeur_id" , "camion_id" , "prix" , "date" , "nature" , "type_id"];


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
}
