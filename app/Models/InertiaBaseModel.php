<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

abstract class InertiaBaseModel extends Model
{
    protected $searchFillables;
    public function scopeFilter($query, array $filters)
    {
        // Apply search if provided and searchable fields exist
        if (isset($filters['search']) && !empty($filters['search']) && !empty($this->searchable)) {
            $query->where(function($query) use ($filters) {
                foreach ($this->searchable as $field) {
                    $query->orWhere($field, 'LIKE', "%{$filters['search']}%");
                }
            });
        }

        return $query;
    }
}
