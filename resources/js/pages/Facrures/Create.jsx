import React from 'react';
import { Head, useForm } from '@inertiajs/react';
import DashboardLayout from '@/layouts/app-layout';
import { ChevronLeft } from 'lucide-react';
import { Link } from '@inertiajs/react';

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        full_name: '',
        email: '',
        phone: '',
        code: '',
        cni: '',
        cnss: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('drivers.store'));
    };

    return (
        <DashboardLayout>
            <Head title="Add Driver" />

            <div className="p-6 dark:bg-gray-900">
                <div className="max-w-3xl mx-auto">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6">
                            {/* Header */}
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center">
                                    <Link
                                        href={route('drivers.index')}
                                        className="flex items-center text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                                    >
                                        <ChevronLeft className="w-5 h-5 mr-1" />
                                        Back to List
                                    </Link>
                                </div>
                                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                                    Add New Driver
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
                                        type="text"
                                        id="full_name"
                                        placeholder='full name'
                                        value={data.full_name}
                                        onChange={e => setData('full_name', e.target.value)}
                                        className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600
                                                 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700
                                                 dark:text-white text-sm"
                                        required
                                    />
                                    {errors.full_name && (
                                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.full_name}</p>
                                    )}
                                </div>

                                {/* Email */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder='email'
                                        value={data.email}
                                        onChange={e => setData('email', e.target.value)}
                                        className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600
                                                 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700
                                                 dark:text-white text-sm"
                                    />
                                    {errors.email && (
                                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>
                                    )}
                                </div>

                                {/* Phone */}
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Phone
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        required
                                        placeholder='phone'
                                        value={data.phone}
                                        onChange={e => setData('phone', e.target.value)}
                                        className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600
                                                 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700
                                                 dark:text-white text-sm"
                                    />
                                    {errors.phone && (
                                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.phone}</p>
                                    )}
                                </div>

                                {/* Code */}
                                <div>
                                    <label htmlFor="code" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Code
                                    </label>
                                    <input
                                        type="text"
                                        id="code"
                                        placeholder='code'
                                        value={data.code}
                                        required
                                        onChange={e => setData('code', e.target.value)}
                                        className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600
                                                 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700
                                                 dark:text-white text-sm"
                                    />
                                    {errors.code && (
                                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.code}</p>
                                    )}
                                </div>

                                {/* Two columns for CNI and CNSS */}
                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                    {/* CNI */}
                                    <div>
                                        <label htmlFor="cni" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                            CNI
                                        </label>
                                        <input
                                            type="text"
                                            id="cni"
                                            value={data.cni}
                                            placeholder='cni'
                                            onChange={e => setData('cni', e.target.value)}
                                            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600
                                                     shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700
                                                     dark:text-white text-sm"
                                        />
                                        {errors.cni && (
                                            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.cni}</p>
                                        )}
                                    </div>

                                    {/* CNSS */}
                                    <div>
                                        <label htmlFor="cnss" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                            CNSS
                                        </label>
                                        <input
                                            type="text"
                                            placeholder='cnss'
                                            id="cnss"
                                            value={data.cnss}
                                            onChange={e => setData('cnss', e.target.value)}
                                            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600
                                                     shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700
                                                     dark:text-white text-sm"
                                        />
                                        {errors.cnss && (
                                            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.cnss}</p>
                                        )}
                                    </div>
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
                                        {processing ? 'Saving...' : 'Save Driver'}
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
