<?php

namespace App\Http\Resources\Bon;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BonResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'numero_bon' => $this->numero_bon,
            'date' => $this->date,
            'qte_litre' => round($this->qte_litre, 2),
            'prix' => round($this->prix, 2),
            'km' => $this->km,
            'nature' => $this->nature,
            'description' => $this->description,
            'station' => [
                'id' => $this->Station->id,
                'name' => $this->Station->name,
            ],
            'created_at' => $this->created_at->format('Y-m-d H:i:s'),
            'updated_at' => $this->updated_at->format('Y-m-d H:i:s'),
        ];
    }
}
