import { Link } from '@inertiajs/react';
import React, { useState } from 'react';


const SearchBar= () => {
    return (
        <div className="flex space-x-4 border-b dark:border-gray-700">
                <Link
                    href='driversSearch'
                    className={`px-4 py-2 focus:outline-none ${
                        route().current('search.drivers')
                            ? 'text-blue-600 border-b-2 border-blue-600'
                            : 'text-gray-500 hover:text-gray-700'
                    }`}
                >
                    Driver
                </Link>
                <Link
                    href='trucksSearch'
                    className={`px-4 py-2 focus:outline-none ${
                        route().current('search.trucks')
                            ? 'text-blue-600 border-b-2 border-blue-600'
                            : 'text-gray-500 hover:text-gray-700'
                    }`}
                >
                    Truck
                </Link>
                <Link
                    href='stationsSearch'
                    className={`px-4 py-2 focus:outline-none ${
                        route().current('search.stations')
                            ? 'text-blue-600 border-b-2 border-blue-600'
                            : 'text-gray-500 hover:text-gray-700'
                    }`}
                >
                    Station
                </Link>
                <Link
                    href='consumptionSearch'
                    className={`px-4 py-2 focus:outline-none ${
                        route().current('search.consumptions')
                            ? 'text-blue-600 border-b-2 border-blue-600'
                            : 'text-gray-500 hover:text-gray-700'
                    }`}
                >
                    Consumption
                </Link>
                <Link
                    href='bonsSearch'
                    className={`px-4 py-2 focus:outline-none ${
                        route().current('search.bons')
                            ? 'text-blue-600 border-b-2 border-blue-600'
                            : 'text-gray-500 hover:text-gray-700'
                    }`}
                >
                    Bons
                </Link>
                <Link
                    href='missionSearch'
                    className={`px-4 py-2 focus:outline-none ${
                        route().current('search.missions')
                            ? 'text-blue-600 border-b-2 border-blue-600'
                            : 'text-gray-500 hover:text-gray-700'
                    }`}
                >
                    Mission
                </Link>
            </div>
    )
}

export default SearchBar
