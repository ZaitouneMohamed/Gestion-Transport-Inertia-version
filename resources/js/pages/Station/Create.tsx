import React from 'react';
import { Head, useForm, Link, usePage } from '@inertiajs/react';
import DashboardLayout from '@/layouts/app-layout';
import { ChevronLeft, User, Mail, Phone, Key, FileText, Shield } from 'lucide-react';
import { SharedData } from '@/types';

export default function Create() {
    const { Citys } = usePage<SharedData>().props;
    console.log(Citys);

    const { data, setData, post, processing, errors } = useForm({
        name: '',
        solde: '',
        gerant_name: '',
        gerant_phone: '',
        gerant_rep_name: '',
        gerant_rep_phone: '',
        ville: 'testville'
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('stations.store'));
    };

    return (
        <DashboardLayout>
            <Head title="Add Station" />

            <div className="py-8 px-4 md:px-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
                <div className="max-w-4xl mx-auto">
                    {/* Page Header with Card Effect */}
                    <div className="mb-8 flex justify-between items-center">
                        <Link
                            href={route('stations.index')}
                            className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                        >
                            <ChevronLeft className="w-5 h-5 mr-1" />
                            <span>Back to Stations</span>
                        </Link>
                        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
                            Add New Station
                        </h1>
                    </div>

                    {/* Main Form Card */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                            <h2 className="text-lg font-medium text-gray-800 dark:text-white">
                                Station Information
                            </h2>
                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                Please fill in all the required information for the new Station.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="p-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* name */}
                                <div className="col-span-2">
                                    <label htmlFor="full_name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        Name <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <User className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            type="text"
                                            id="full_name"
                                            placeholder="Enter station name"
                                            value={data.name}
                                            onChange={e => setData('name', e.target.value)}
                                            className="pl-10 py-3 w-full rounded-lg border-gray-300 dark:border-gray-600
                                                shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500
                                                focus:ring-opacity-50 dark:bg-gray-700 dark:text-white text-base"
                                            required
                                        />
                                    </div>
                                    {errors.name && (
                                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name}</p>
                                    )}
                                </div>

                                {/* Solde */}
                                <div>
                                    <label htmlFor="solde" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        solde
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <Mail className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            type="number"
                                            id="solde"
                                            placeholder="600"
                                            value={data.solde}
                                            onChange={e => setData('solde', e.target.value)}
                                            className="pl-10 py-3 w-full rounded-lg border-gray-300 dark:border-gray-600
                                                shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500
                                                focus:ring-opacity-50 dark:bg-gray-700 dark:text-white text-base"
                                        />
                                    </div>
                                    {errors.solde && (
                                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.solde}</p>
                                    )}
                                </div>

                                {/* Gerant name */}
                                <div>
                                    <label htmlFor="gerantname" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        Gerant name
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <User className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            type="text"
                                            id="gernatname"
                                            placeholder="firstname lastname"
                                            value={data.gerant_name}
                                            onChange={e => setData('gerant_name', e.target.value)}
                                            className="pl-10 py-3 w-full rounded-lg border-gray-300 dark:border-gray-600
                                                shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500
                                                focus:ring-opacity-50 dark:bg-gray-700 dark:text-white text-base"
                                        />
                                    </div>
                                    {errors.gerant_name && (
                                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.gerant_name}</p>
                                    )}
                                </div>

                                 {/* Gerant phone */}
                                 <div>
                                    <label htmlFor="gerantphone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        Gerant phone
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <Phone className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            type="tel"
                                            id="gernatphonr"
                                            placeholder="firstname lastname"
                                            value={data.gerant_phone}
                                            onChange={e => setData('gerant_phone', e.target.value)}
                                            className="pl-10 py-3 w-full rounded-lg border-gray-300 dark:border-gray-600
                                                shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500
                                                focus:ring-opacity-50 dark:bg-gray-700 dark:text-white text-base"
                                        />
                                    </div>
                                    {errors.gerant_phone && (
                                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.gerant_phone}</p>
                                    )}
                                </div>

                                {/* Gerant replacement name */}
                                <div>
                                    <label htmlFor="gerantrepname" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        Gerant replacement name
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <User className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            type="text"
                                            id="gernatrepname"
                                            placeholder="firstname lastname"
                                            value={data.gerant_rep_name}
                                            onChange={e => setData('gerant_rep_name', e.target.value)}
                                            className="pl-10 py-3 w-full rounded-lg border-gray-300 dark:border-gray-600
                                                shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500
                                                focus:ring-opacity-50 dark:bg-gray-700 dark:text-white text-base"
                                        />
                                    </div>
                                    {errors.gerant_rep_name && (
                                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.gerant_rep_name}</p>
                                    )}
                                </div>

                                 {/* Gerant replacement phone */}
                                 <div>
                                    <label htmlFor="gerantrepphone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        Gerant replacement phone
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <User className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            type="tel"
                                            id="gernatrepphone"
                                            placeholder="+212 6 00 000 000"
                                            value={data.gerant_rep_phone}
                                            onChange={e => setData('gerant_rep_phone', e.target.value)}
                                            className="pl-10 py-3 w-full rounded-lg border-gray-300 dark:border-gray-600
                                                shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500
                                                focus:ring-opacity-50 dark:bg-gray-700 dark:text-white text-base"
                                        />
                                    </div>
                                    {errors.gerant_rep_phone && (
                                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.gerant_rep_phone}</p>
                                    )}
                                </div>

                            </div>


                            {/* Form Actions */}
                            <div className="mt-8 flex flex-col sm:flex-row-reverse sm:justify-between sm:space-x-reverse sm:space-x-3">
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="w-full sm:w-auto mb-3 sm:mb-0 flex justify-center items-center px-6 py-3
                                        bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200
                                        text-white rounded-lg transition ease-in duration-200 focus:outline-none focus:ring-2
                                        focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
                                >
                                    {processing ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Saving...
                                        </>
                                    ) : (
                                        'Save Station'
                                    )}
                                </button>
                                <Link
                                    href={route('stations.index')}
                                    className="w-full sm:w-auto flex justify-center items-center px-6 py-3
                                        border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700
                                        dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50
                                        dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2
                                        focus:ring-gray-500 transition ease-in duration-200 shadow-sm"
                                >
                                    Cancel
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}