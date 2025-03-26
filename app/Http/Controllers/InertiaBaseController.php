<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Resources\Driver\DriverResource;
use App\Models\Driver;
use Illuminate\Http\Request;
use Inertia\Inertia;

abstract class InertiaBaseController extends Controller
{
    protected $model;
    protected $storeRequestClass;
    protected $updateRequestClass;
    protected $folderPath;
    protected $routeName;
    protected $resourceClass;

    public function create()
    {
        return Inertia::render($this->folderPath . "/Create");
    }

    public function store(Request $request)
    {
        // Validate using the request class directly
        $validatedData = $request->validate((new $this->storeRequestClass)->rules());
        $this->model::create($validatedData);
        return redirect()->route($this->routeName)
            ->with('success', 'Data created successfully.');
    }

    public function show($id)
    {
        try {
            $item = $this->model::findOrFail($id);
            return response()->json(["data" => $item], 200);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json(['message' => 'Vagon not found'], 404);
        }
    }

    public function edit($id)
    {
        return Inertia::render($this->folderPath . '/Edit', [
            'item' => new $this->resourceClass($this->model::findOrFail($id))
        ]);
    }


    public function update(Request $request, $id)
    {
        $item = $this->model::findOrFail($id);
        //
        $validatedData = $request->validate((new $this->updateRequestClass)->rules());
        //
        $item->update($validatedData);
        //
        return redirect()->route($this->routeName)
            ->with('success', 'Data Updated successfully.');
    }

    public function destroy($id)
    {
        $item = $this->model::findOrFail($id);
        $item->delete();

        return redirect()->route($this->routeName)
            ->with('success', 'Data deleted successfully.');
    }

    protected function validateRequest(Request $request, $requestClass)
    {
        $requestInstance = new $requestClass($request->all());
        return $requestInstance->validate();
    }

    public function sendResponse($result, $message)
    {
        $response = [
            'success' => true,
            'message' => $message,
            'data'    => $result,
        ];

        return response()->json($response);
    }

    public function sendError($error, $errorMessages = [], $code = 404)
    {
        $response = [
            'success' => false,
            'message' => $error,
            'code'    => $code,
        ];

        if (! empty($errorMessages)) {
            $response['data'] = $errorMessages;
        }

        return response()->json($response, $code);
    }

    protected function getIndexQuery()
    {
        $query = $this->model::query();

        if (request()->has('search')) {
            $query->search(request('search'));
        }

        return $query;
    }

    public function index()
    {
        $items = $this->getIndexQuery()
            ->paginate(request('per_page', 10))
            ->withQueryString();

        return inertia($this->folderPath . '/Index', [
            'data' => DriverResource::collection($items),
            'filters' => request()->all(['search', 'per_page'])
        ]);
    }
}
