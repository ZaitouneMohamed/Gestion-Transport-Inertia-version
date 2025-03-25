<?php

namespace App\Services;

class ConsumptionCalculatorService
{
    public function calculateQtyLitre($consumption)
    {
        $bons = $consumption->Bons()->gazole()->orderByDesc('id')->get();
        $last_bon = $bons->first();
        $first_bon = $bons->last();

        if (!$this->isValidBonPair($bons, $first_bon, $last_bon)) {
            return null;
        }

        return $bons->sum('qte_litre') - $first_bon->qte_litre;
    }

    public function calculateKmTotal($consumption)
    {
        $bons = $consumption->Bons()->gazole()->orderByDesc('id')->get();
        $first_bon = $bons->last();
        $last_bon = $bons->first();

        if (!$this->isValidBonPair($bons, $first_bon, $last_bon)) {
            return null;
        }

        return $last_bon->km - $first_bon->km;
    }

    public function calculateTaux($consumption)
    {
        $qtyLitre = $this->calculateQtyLitre($consumption);
        $kmTotal = $this->calculateKmTotal($consumption);

        if (!$qtyLitre || !$kmTotal || $kmTotal <= 0) {
            return null;
        }

        return ($qtyLitre / $kmTotal) * 100;
    }

    public function calculatePrix($consumption)
    {
        $bons = $consumption->Bons()->gazole()->orderByDesc('id')->get();
        $first_bon = $bons->last();
        $last_bon = $bons->first();

        if (!$this->isValidBonPair($bons, $first_bon, $last_bon)) {
            return 0;
        }

        return $bons->sum('prix') - $first_bon->prix;
    }

    public function calculateFullPrix($consumption)
    {
        return $consumption->Bons()->sum('prix');
    }

    public function calculateStatus($consumption)
    {
        $bons = $consumption->Bons()->gazole()->orderByDesc('id')->get();
        $first_bon = $bons->last();
        $last_bon = $bons->first();

        if (!$this->isValidBonPair($bons, $first_bon, $last_bon)) {
            return null;
        }

        $taux = $this->calculateTaux($consumption);
        if (!$taux) {
            return null;
        }

        return $taux - $consumption->Truck->consommation;
    }

    private function isValidBonPair($bons, $first_bon, $last_bon)
    {
        return $bons->count() > 1
            && $first_bon
            && $last_bon
            && $first_bon->km > 0
            && $last_bon->km > 0;
    }
}
