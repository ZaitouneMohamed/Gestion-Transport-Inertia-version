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

    /**
     * Enhanced search scope that handles field-specific filtering
     */
    public function scopeSearch($query, $filters)
    {
        if (empty($filters)) {
            return $query;
        }

        return $query->where(function ($query) use ($filters) {
            foreach ($filters as $field => $value) {
                // Only apply filter if field is searchable and value is not empty
                if (in_array($field, $this->getSearchableFields()) && !empty($value)) {
                    $query->where($field, 'LIKE', "%{$value}%");
                }
            }
        })->with($this->getSearchRelations());
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