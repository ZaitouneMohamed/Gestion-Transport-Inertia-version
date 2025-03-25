<?php

namespace App\Http\Requests\Station;

use Illuminate\Foundation\Http\FormRequest;

class UpdateStationRequest extends FormRequest
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
            "name" => "required",
            "solde" => "required",
            "gerant_name" => "nullable",
            "gerant_phone" => "nullable",
            "gerant_rep_name" => "nullable",
            "gerant_rep_phone" => "nullable",
            "ville" => "required"
        ];
    }
}
