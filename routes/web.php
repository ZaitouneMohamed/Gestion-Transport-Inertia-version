<?php

use App\Http\Controllers\Dashboard\ConsumptionController;
use App\Http\Controllers\Dashboard\DriverController;
use App\Http\Controllers\Dashboard\SearchController;
use App\Http\Controllers\Dashboard\StationController;
use App\Http\Controllers\Dashboard\TruckController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

Route::middleware('auth')->prefix("dashboard")->group(function () {
    Route::resource('drivers', DriverController::class);
    Route::resource('trucks', TruckController::class);
    Route::resource('stations', StationController::class);
    //
    Route::resource('consumption', ConsumptionController::class);


    Route::controller(SearchController::class)->name("search.")->prefix("search")->group(function() {
        Route::get('bonsSearch' , "bonsSearch")->name('bons');
        Route::get('driversSearch' , "driversSearch")->name('drivers');
        Route::get('trucksSearch' , "trucksSearch")->name('trucks');
        Route::get('stationsSearch' , "stationsSearch")->name('stations');
        Route::get('consumptionSearch' , "consumptionSearch")->name('consumption');
        Route::get('missionSearch' , "missionSearch")->name('mission');

    });

});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
