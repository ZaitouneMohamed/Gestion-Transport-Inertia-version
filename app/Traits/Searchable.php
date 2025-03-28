<?php

namespace App\Traits;

trait Searchable
{
    /**
     * Get the searchable fields - implement this in your model
     */
    abstract public function getSearchableFields(): array;

    /**
     * Get relations to load with search - implement this in your model
     */
    abstract public function getSearchRelations(): array;

    private function searchByMultiColumnsWithOneValue($query , $filters)
    {
        return $query->where(function ($query) use ($filters) {
            foreach ($this->getSearchableFields() as $field) {
                if (!empty($filters)) {
                    $query->orWhere($field, 'LIKE', "%{$filters}%");
                }
            }
        })->with($this->getSearchRelations());

    }

    private function searchByOneRequiredColumn($query, $filters , $searchby)
    {
        return $query->where(function ($query) use ($filters, $searchby) {
            $query->where($searchby , 'LIKE',"%{$filters}%");
        })->with($this->getSearchRelations());
    }


    //////////////////////
    public function scopeSearch($query, $filters ,$searchby)
    {
        if (!empty($filters) ) {
            if (empty($searchby)) {
                return $this->searchByMultiColumnsWithOneValue($query , $filters);
            }else {
                return $this->searchByOneRequiredColumn($query , $filters , $searchby);
            }
        }
        else {
            return $query;
        }
    }


    /**
     * Get available filters with their labels
     */
    public function getAvailableFilters(): array
    {
        // Convert searchable fields to a filter configuration
        $filters = [];
        foreach ($this->getSearchableFields() as $field) {
            $filters[$field] = ucwords(str_replace('_', ' ', $field));
        }
        return $filters;
    }
}