<?php

namespace App\Http\Requests\Truck;

use Illuminate\Foundation\Http\FormRequest;

class UpdateTruckRequest extends FormRequest
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
            "matricule" => "required",
            "consommation" => "required",
            "marque"=> "nullable",
            "genre"=> "nullable",
            "type_carburant"=> "nullable",
            "n_chasie"=> "nullable",
            "puissanse_fiscale"=> "nullable",
            "premier_mise"=> "nullable",
        ];
    }
}
