// Components/Tables/TableTwo.jsx
import React from 'react';
import { Search, Calendar } from 'lucide-react';
import SearchLayout from './SearchLayout';

const Consumptions = () => {
    return (
        <SearchLayout>

        <div className="space-y-4">
                    <h1>Consumption</h1>
                    {/* Filters */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600
                        shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700
                        dark:text-white text-sm"
                        onChange={(e) => handleFilterChange('search', e.target.value)}
                    />
                </div>
                <div>
                    <div className="relative">
                        <input
                            type="date"
                            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600
                            shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700
                            dark:text-white text-sm"
                            onChange={(e) => handleFilterChange('startDate', e.target.value)}
                        />
                    </div>
                </div>
                <div>
                    <div className="relative">
                        <input
                            type="date"
                            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600
                            shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700
                            dark:text-white text-sm"
                            onChange={(e) => handleFilterChange('endDate', e.target.value)}
                        />
                    </div>
                </div>
            </div>

                    {/* Table */}
                    <div className="bg-white rounded-lg shadow overflow-hidden">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Column 1
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Column 2
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {/* Add your table rows here */}
                            </tbody>
                        </table>
                    </div>
                </div>
        </SearchLayout>
    );
};

export default Consumptions;
