import React from 'react';
import { Head, useForm } from '@inertiajs/react';
import DashboardLayout from '@/layouts/app-layout';
import { ChevronLeft } from 'lucide-react';
import { Link } from '@inertiajs/react';

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        date: '',
        prix: '',
        station_id: 11,
        type: 0,
        n_bon: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('factures.store'));
    };

    return (
        <DashboardLayout>
            <Head title="Add Facture" />

            <div className="p-6 dark:bg-gray-900">
                <div className="max-w-3xl mx-auto">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6">
                            {/* Header */}
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center">
                                    <Link
                                        href={route('factures.index')}
                                        className="flex items-center text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                                    >
                                        <ChevronLeft className="w-5 h-5 mr-1" />
                                        Back to List
                                    </Link>
                                </div>
                                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                                    Add New Facture
                                </h2>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Full Name */}
                                <div>
                                    <label htmlFor="full_name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Full Name
                                    </label>
                                    <input
                                        type="date"
                                        id="date"
                                        placeholder='date'
                                        value={data.date}
                                        onChange={e => setData('date', e.target.value)}
                                        className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600
                                                 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700
                                                 dark:text-white text-sm"
                                        required
                                    />
                                    {errors.date && (
                                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.date}</p>
                                    )}
                                </div>

                                {/* Email */}
                                <div>
                                    <label htmlFor="prix" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Prix
                                    </label>
                                    <input
                                        type="number"
                                        id="prix"
                                        placeholder='prix'
                                        value={data.prix}
                                        onChange={e => setData('prix', e.target.value)}
                                        className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600
                                                 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700
                                                 dark:text-white text-sm"
                                    />
                                    {errors.prix && (
                                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.prix}</p>
                                    )}
                                </div>

                                {/* Phone */}
                                <div>
                                    <label htmlFor="nbon" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        N° bon :
                                    </label>
                                    <input
                                        type="text"
                                        id="nbon"
                                        required
                                        placeholder='numero bon'
                                        value={data.n_bon}
                                        onChange={e => setData('n_bon', e.target.value)}
                                        className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600
                                                 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700
                                                 dark:text-white text-sm"
                                    />
                                    {errors.n_bon && (
                                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.n_bon}</p>
                                    )}
                                </div>

                                {/* Form Actions */}
                                <div className="flex items-center justify-end space-x-3 border-t dark:border-gray-700 pt-6">
                                    <Link
                                        href={route('drivers.index')}
                                        className="inline-flex justify-center rounded-md border border-gray-300 dark:border-gray-600
                                                 shadow-sm px-4 py-2 bg-white dark:bg-gray-700 text-sm font-medium
                                                 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600
                                                 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                    >
                                        Cancel
                                    </Link>
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2
                                                 bg-blue-600 text-sm font-medium text-white hover:bg-blue-700
                                                 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                                                 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {processing ? 'Saving...' : 'Save'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
