<?php

namespace App\Http\Requests\Bon;

use Illuminate\Foundation\Http\FormRequest;

class StoreBonRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'consomation_id' => "required|exists:consomations,id",
            "qte_litre" => "nullable",
            "date" => "nullable",
            "description" => "nullable",
            "prix" => "nullable",
            "station_id" => "required|exists:stations,id",
            "numero_bon" => "nullable",
            "km" => "required",
            "nature" => "required",

        ];
    }
}
