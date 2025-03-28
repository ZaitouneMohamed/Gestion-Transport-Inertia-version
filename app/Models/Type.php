<?php

namespace App\Models;

use App\Traits\Searchable;

class Type extends InertiaBaseModel
{
    //
    use Searchable;

    //protected $table = "";

    protected $fillable = [];


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
