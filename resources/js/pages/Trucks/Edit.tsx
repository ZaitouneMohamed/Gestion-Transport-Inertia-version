import { Head, useForm } from '@inertiajs/react';
import DashboardLayout from '@/layouts/app-layout';
import { ChevronLeft } from 'lucide-react';
import { Link } from '@inertiajs/react';

export default function Edit({item}) {
    const { data, setData, put, processing, errors } = useForm({
        matricule:  item.matricule,
        consommation: item.consommation,
        marque: item.marque||'',
        genre: item.genre||'',
        type_carburant: item.type_carburant||'',
        n_chasie: item.n_chasie||'',
        puissanse_fiscale: item.puissanse_fiscale||'',
        premier_mise : item.premier_mise||'',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('trucks.update', item.id));
    };

    return (
        <DashboardLayout>
            <Head title="Edit Truck" />

            <div className="p-6 dark:bg-gray-900">
                <div className="max-w-3xl mx-auto">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6">
                            {/* Header */}
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center">
                                    <Link
                                        href={route('trucks.index')}
                                        className="flex items-center text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                                    >
                                        <ChevronLeft className="w-5 h-5 mr-1" />
                                        Back to List
                                    </Link>
                                </div>
                                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                                    Edit Truck {item.matricule}
                                </h2>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Full Name */}
                                <div>
                                    <label htmlFor="matricule" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Matricule
                                    </label>
                                    <input
                                        type="text"
                                        id="full_name"
                                        placeholder='matricule'
                                        value={data.matricule}
                                        onChange={e => setData('matricule', e.target.value)}
                                        className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600
                                                 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700
                                                 dark:text-white text-sm"
                                        required
                                    />
                                    {errors.matricule && (
                                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.full_name}</p>
                                    )}
                                </div>

                                {/* Email */}
                                <div>
                                    <label htmlFor="marque" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Marque
                                    </label>
                                    <input
                                        type="text"
                                        id="marque"
                                        placeholder='marque'
                                        value={data.email}
                                        onChange={e => setData('marque', e.target.value)}
                                        className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600
                                                 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700
                                                 dark:text-white text-sm"
                                    />
                                    {errors.marque && (
                                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>
                                    )}
                                </div>

                                {/* Phone */}
                                <div>
                                    <label htmlFor="genre" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    genre
                                    </label>
                                    <input
                                        type="text"
                                        id="genre"
                                        placeholder='genre'
                                        value={data.genre}
                                        onChange={e => setData('genre', e.target.value)}
                                        className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600
                                                 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700
                                                 dark:text-white text-sm"
                                    />
                                    {errors.genre && (
                                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.phone}</p>
                                    )}
                                </div>

                                {/* Code */}
                                <div>
                                    <label htmlFor="type_carburant" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    type carburant
                                    </label>
                                    <input
                                        type="text"
                                        id="type_carburant"
                                        placeholder='type carburant'
                                        value={data.type_carburant}
                                        onChange={e => setData('type_carburant', e.target.value)}
                                        className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600
                                                 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700
                                                 dark:text-white text-sm"
                                    />
                                    {errors.type_carburant && (
                                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.code}</p>
                                    )}
                                </div>

                                {/* Two columns for CNI and CNSS */}
                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                    {/* CNI */}
                                    <div>
                                        <label htmlFor="n_chasie" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Numero chasie
                                        </label>
                                        <input
                                            type="text"
                                            id="n_chasie"
                                            value={data.n_chasie}
                                            placeholder='NUmero chasie'
                                            onChange={e => setData('n_chasie', e.target.value)}
                                            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600
                                                     shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700
                                                     dark:text-white text-sm"
                                        />
                                        {errors.n_chasie && (
                                            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.cni}</p>
                                        )}
                                    </div>

                                    {/* CNSS */}
                                    <div>
                                        <label htmlFor="puissanse_fiscale" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        puissanse fiscale
                                        </label>
                                        <input
                                            type="text"
                                            placeholder='puissanse fiscale'
                                            id="puissanse_fiscale"
                                            value={data.puissanse_fiscale}
                                            onChange={e => setData('puissanse_fiscale', e.target.value)}
                                            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600
                                                     shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700
                                                     dark:text-white text-sm"
                                        />
                                        {errors.puissanse_fiscale && (
                                            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.cnss}</p>
                                        )}
                                    </div>
                                    {/* CNSS */}
                                    <div>
                                        <label htmlFor="premier_mise" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        premier mise
                                        </label>
                                        <input
                                            type="date"
                                            placeholder='premier mise'
                                            id="premier_mise"
                                            value={data.premier_mise}
                                            onChange={e => setData('premier_mise', e.target.value)}
                                            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600
                                                     shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700
                                                     dark:text-white text-sm"
                                        />
                                        {errors.premier_mise && (
                                            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.cnss}</p>
                                        )}
                                    </div>
                                    {/* CNSS */}
                                    <div>
                                        <label htmlFor="consommation" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        consommation
                                        </label>
                                        <input
                                            type="text"
                                            placeholder='consommation'
                                            id="consommation"
                                            value={data.consommation}
                                            required
                                            onChange={e => setData('consommation', e.target.value)}
                                            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600
                                                     shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700
                                                     dark:text-white text-sm"
                                        />
                                        {errors.consommation && (
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
