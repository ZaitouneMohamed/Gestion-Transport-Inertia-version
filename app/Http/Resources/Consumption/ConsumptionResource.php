<?php

namespace App\Http\Resources\Consumption;

use App\Http\Resources\Bon\BonResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ConsumptionResource extends JsonResource
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
            'ville' => $this->ville,
            'description' => $this->description,
            'status' => $this->status,
            'date' => $this->date,
            // Relationships
            "drivername" => $this->driver->full_name,
            "truckmatricule" => $this->truck->matricule,
            "truckconsomation" => $this->truck->consommation,
            'consumption_data' => [
                'qty_litre' => $this->when(isset($this->qty_littre),
                    fn() => round($this->qty_littre, 2)
                ),
                'km_total' => $this->when(isset($this->km_total),
                    fn() => round($this->km_total, 2)
                ),
                'km_proposer' => $this->km_proposer,
                 'taux' => $this->when(isset($this->taux),
                    fn() => round($this->taux, 2)
                ),
                'prix' => $this->when(isset($this->prix),
                    fn() => round($this->prix, 2)
                ),
                'full_prix' => round($this->full_prix, 2),
                'status' => [
                    'mission' => $this->when(isset($this->km_proposer , $this->km_total),
                        fn() => round($this->km_proposer - $this->km_total,  2)
                    ),
                    'gazole' => $this->when(isset($this->statue),
                        fn() => round($this->statue, 2)
                    ),
                ]
            ],
            'bons_count' => $this->Bons->count(),
            'bons' => BonResource::collection($this->Bons),
            // Timestamps
            'created_at' => $this->created_at->format('Y-m-d H:i:s'),
            'updated_at' => $this->updated_at->format('Y-m-d H:i:s'),

        ];
    }
}
