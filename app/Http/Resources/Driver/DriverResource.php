<?php

namespace App\Http\Resources\Driver;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class DriverResource extends JsonResource
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
            'fullname' => $this->full_name,
            "phone" => $this->phone,
            "code" => $this->code,
            "numero_2" => $this->numero_2,
            "adresse"=> $this->adresse,
            "cnss"=> $this->cnss,
            'email'=> $this->email,
            "cni"=> $this->cni,
            "status"=> $this->status
        ];
    }
}
