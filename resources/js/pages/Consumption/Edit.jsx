import React from 'react';
import { Head, useForm } from '@inertiajs/react';
import DashboardLayout from '@/layouts/app-layout';
import { ChevronLeft } from 'lucide-react';
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';

export default function Create({ drivers, trucks , consumption }) {

    const { data, setData, put, processing, errors } = useForm({
        driver_id: consumption.chaufeur_id,
        truck_id: consumption.camion_id,
        ville: consumption.ville,
        date: consumption.date,
        description: consumption.description,
        nbmagasin:consumption.n_magasin,
        kmproposer: consumption.km_proposer
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('consumption.update' , consumption.id));
    };

    // Helper functions for form elements
    const renderDriverOptions = () => {
        if (!Array.isArray(drivers)) return null;
        return drivers.map((driver) => (
            <option key={driver.id} value={driver.id}>
                {driver.full_name}
            </option>
        ));
    };



    const renderTruckOptions = () => {
        if (!Array.isArray(trucks)) return null;
        return trucks.map((truck) => (
            <option key={truck.id} value={truck.id}>
                {truck.matricule}
            </option>
        ));
    };


    return (
        <DashboardLayout>
            <Head title="Add Consumption" />

            <div className="p-4 dark:bg-gray-900">
                <div className="max-w-3xl mx-auto">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6">
                            {/* Header */}
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center">
                                    <Link
                                        href={route('consumption.index')}
                                        className="flex items-center text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                                    >
                                        <ChevronLeft className="w-5 h-5 mr-1" />
                                        Back to List
                                    </Link>
                                </div>
                                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                                    Edit Consumption
                                </h2>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Driver Select */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 }}
                                    >
                                        <label htmlFor="driver_id" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                            Driver
                                        </label>
                                        <select
                                            id="driver_id"
                                            value={data.driver_id}
                                            onChange={e => setData('driver_id', e.target.value)}
                                            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600
                                                    shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700
                                                    dark:text-white text-sm"
                                            required
                                        >
                                            <option value="">Select Driver</option>
                                            {renderDriverOptions()}
                                        </select>
                                        {errors.driver_id && (
                                            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.driver_id}</p>
                                        )}
                                    </motion.div>

                                    {/* Truck Select */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        <label htmlFor="truck_id" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                            Truck
                                        </label>
                                        <select
                                            id="truck_id"
                                            value={data.truck_id}
                                            onChange={e => setData('truck_id', e.target.value)}
                                            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600
                                                    shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700
                                                    dark:text-white text-sm"
                                            required
                                        >
                                            <option value="">Select Truck</option>
                                            {renderTruckOptions()}
                                        </select>
                                        {errors.truck_id && (
                                            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.truck_id}</p>
                                        )}
                                    </motion.div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* City Select */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 }}
                                    >
                                        <label htmlFor="ville" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                            Ville
                                        </label>
                                        <input
                                            type='text'
                                            value={data.ville}
                                            onChange={e => setData('ville', e.target.ville)}
                                            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600
                                                    shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700
                                                    dark:text-white text-sm"
                                            placeholder="ville..."
                                        />
                                        {errors.ville && (
                                            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.ville}</p>
                                        )}
                                    </motion.div>

                                    {/* Date Input */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 }}
                                    >
                                        <label htmlFor="date" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                            Date
                                        </label>
                                        <input
                                            type="date"
                                            id="date"
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
                                    </motion.div>
                                    {/* Description Textarea */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 }}
                                    >
                                        <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                            Nombre de magasin
                                        </label>
                                        <input
                                        type='text'
                                            value={data.nbmagasin}
                                            onChange={e => setData('nbmagasin', e.target.value)}
                                            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600
                                                    shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700
                                                    dark:text-white text-sm"
                                            placeholder="Nombre de magasin..."
                                        />
                                        {errors.nbmagasin && (
                                            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.nbmagasin}</p>
                                        )}
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 }}
                                    >
                                        <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                            Description
                                        </label>
                                        <textarea
                                            id="description"
                                            value={data.description}
                                            onChange={e => setData('description', e.target.value)}
                                            rows={4}
                                            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600
                                                    shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700
                                                    dark:text-white text-sm"
                                            placeholder="Enter description here..."
                                        />
                                        {errors.description && (
                                            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.description}</p>
                                        )}
                                    </motion.div>
                                    {/* ... */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 }}
                                    >
                                        <label htmlFor="kmproposer" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                            KM proposer
                                        </label>
                                        <input
                                        type='text'
                                            value={data.kmproposer}
                                            onChange={e => setData('kmproposer', e.target.kmproposer)}
                                            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600
                                                    shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700
                                                    dark:text-white text-sm"
                                            placeholder="KM proposer..."
                                        />
                                        {errors.kmproposer && (
                                            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.nbmagasin}</p>
                                        )}
                                    </motion.div>
                                    {/* Form Actions */}

                                </div>
                                <motion.div
                                    className="flex items-center justify-end space-x-3 border-t dark:border-gray-700 pt-6"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                >
                                    <Link
                                        href={route('consumption.index')}
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
                                        {processing ? 'Saving...' : 'Save Consumption'}
                                    </button>
                                </motion.div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
