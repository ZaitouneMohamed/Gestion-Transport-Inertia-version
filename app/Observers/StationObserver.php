<?php

namespace App\Observers;

use App\Models\City;
use App\Models\Station;

class StationObserver
{
    public function creating(Station $station): void
    {
        $ville = City::where('name' , $station->ville)->first();
        $station->update([
            "solde"
        ]);
    }

    public function updating(Station $station): void
    {
        //
    }

}
