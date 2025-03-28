<?php

namespace App\Models;

use App\Traits\Searchable;

class Reparation extends InertiaBaseModel
{
    use Searchable;
    protected $table = "reparations";
    protected $fillable = ["chaufeur_id" , "camion_id" , "date" ,'fournisseur' , "reparation" ,"prix" ,"nature","type","n_bon"];
     /**
     * Get the searchable fields
     */
    public function getSearchableFields(): array
    {
        return [
            'n_bon',
            "date"
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
