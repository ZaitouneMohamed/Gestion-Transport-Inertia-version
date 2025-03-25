<?php

namespace App\Http\Requests\Driver;

use Illuminate\Foundation\Http\FormRequest;

class StoreDriverRequest extends FormRequest
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
            'full_name' => 'required|string|max:255',
            'email' => 'nullable|email|unique:chaufeurs,email',
            'phone' => 'required',
            'code' => 'required|unique:chaufeurs,code|numeric',
            'cni' => 'nullable',
            'cnss' => 'nullable',
            'status' => 'nullable',
        ];
    }
}
