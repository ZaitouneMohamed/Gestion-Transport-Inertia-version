<?php

namespace App\Http\Requests\Bon;

use Illuminate\Foundation\Http\FormRequest;

class UpdateBonRequest extends FormRequest
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
            "qte_litre" => "nullable",
            "date" => "nullable",
            "description" => "nullable",
            "prix" => "nullable",
            "station_id" => "nullable",
            "numero_bon" => "nullable",
            "km" => "nullable",
            "nature" => "nullable",
        ];
    }
}
