import React, { useState } from 'react';
import { Search, Calendar } from 'lucide-react';
import SearchLayout from './SearchLayout';
import { router } from '@inertiajs/react';
import debounce from 'lodash/debounce';

const Drivers = ({ trajets, filters ,drivers}) => {
    const [loading, setLoading] = useState(false);

    const [currentFilters, setCurrentFilters] = useState(filters || {
        driver: '',
        startDate: '',
        endDate: ''
    });

    const handleFilterChange = debounce((type, value) => {
        setLoading(true);
        // Update local filters first
        const newFilters = { ...currentFilters, [type]: value };
        setCurrentFilters(newFilters);

        // Send request with all current filters
        router.get(
            route('search.drivers'),
            newFilters,
            {
                preserveState: true,
                onFinish: () => setLoading(false)
            }
        );
    }, 300);

    return (
        <SearchLayout>
            <div className="space-y-4">
                <h1 className="text-xl font-semibold dark:text-white">Driver Search  </h1>

                {/* Filters */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <select
    className="pl-10 w-full rounded-md border-gray-300 dark:border-gray-600
            shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700
            dark:text-white text-sm"
    value={currentFilters.driver || ''}
    onChange={(e) => handleFilterChange('driver', e.target.value)}
>
    <option value="">Select Driver</option>
    {drivers.map((driver) => (
        <option key={driver.id} value={driver.id}>
            {driver.full_name}
        </option>
    ))}
</select>
                    </div>
                    <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="date"
                            className="pl-10 w-full rounded-md border-gray-300 dark:border-gray-600
                                    shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700
                                    dark:text-white text-sm"
                            value={currentFilters.startDate || ''}
                            onChange={(e) => handleFilterChange('startDate', e.target.value)}
                        />
                    </div>
                    <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="date"
                            className="pl-10 w-full rounded-md border-gray-300 dark:border-gray-600
                                    shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700
                                    dark:text-white text-sm"
                            value={currentFilters.endDate || ''}
                            onChange={(e) => handleFilterChange('endDate', e.target.value)}
                        />
                    </div>
                </div>


                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                    {/* Total Trajets */}
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            Trajet
                        </h3>
                        <p className="mt-2 text-2xl font-semibold text-gray-900 dark:text-white">
                            {trajets.data.length}
                        </p>
                    </div>

                    {/* Calculate totals */}
                    {(() => {
                        let full_price = 0;
                        let full_pricee = 0;
                        let qtyLittre = 0;

                        trajets.data.forEach(item => {
                            full_price += item.consumption_data.prix || 0;
                            full_pricee += item.FullPrix || 0;
                            if (item.status === 1) {
                                qtyLittre += item.consumption_data.qty_litre || 0;

                            }
                        });

                        return currentFilters.chaufeur_id === '24' || currentFilters.chaufeur_id === '23' ? (
                            // For drivers 23 & 24
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                    Consomation
                                </h3>
                                <p className="mt-2 text-2xl font-semibold text-gray-900 dark:text-white">
                                    {full_pricee.toFixed(2)} DH
                                </p>
                            </div>
                        ) : (
                            // For other drivers, show both Prix and Consomation
                            <>
                                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                        Prix
                                    </h3>
                                    <p className="mt-2 text-2xl font-semibold text-gray-900 dark:text-white">
                                        {full_price.toFixed(2)} DH
                                    </p>
                                </div>
                                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                        Consomation
                                    </h3>
                                    <p className="mt-2 text-2xl font-semibold text-gray-900 dark:text-white">
                                        {qtyLittre.toFixed(2)} L
                                    </p>
                                </div>
                            </>
                        );
                    })()}
                </div>
                {/* Table */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-50 dark:bg-gray-700">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                    Driver
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                    Station
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                    Truck
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                    Date
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                            {loading ? (
                                <tr>
                                    <td colSpan="4" className="px-6 py-4 text-center text-gray-500 dark:text-gray-400">
                                        Loading...
                                    </td>
                                </tr>
                            ) : trajets.data.length === 0 ? (
                                <tr>
                                    <td colSpan="4" className="px-6 py-4 text-center text-gray-500 dark:text-gray-400">
                                        No results found
                                    </td>
                                </tr>
                            ) : (
                                trajets.data.map((trajet) => (
                                    <tr key={trajet.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                                            {trajet.drivername}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                            {trajet.truckmatricule}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                            {new Date(trajet.date).toLocaleDateString()}
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </SearchLayout>
    );
};

export default Drivers;
