// Components/Modals/EditBonModal.jsx
import {React , useEffect} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useForm } from '@inertiajs/react';

const EditBonModal = ({ isOpen, onClose, bon }) => {

    const { data, setData, put, processing, errors } = useForm({
        numero_bon: bon?.numero_bon || '',  // Add null checks
        date: bon?.date || '',
        qte_litre: bon?.qte_litre || '',
        prix: bon?.prix || '',
        km: bon?.km || '',
        nature: bon?.nature || '',
        description: bon?.description || '',
        station_id: bon?.station?.id || '',
    });

    // In EditBonModal
    useEffect(() => {
        if (bon) {
            setData({
                numero_bon: bon.numero_bon || '',
                date: bon.date || '',
                qte_litre: bon.qte_litre || '',
                prix: bon.prix || '',
                km: bon.km || '',
                nature: bon.nature || '',
                description: bon.description || '',
                station_id: bon.station?.id || '',
            });
        }
    }, [bon]);
    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('bons.update', bon.id), {
            preserveScroll: true,
            onSuccess: () => onClose(),
        });
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 bg-gray-500 dark:bg-gray-900 bg-opacity-75 dark:bg-opacity-75 transition-opacity"
                             onClick={onClose} />

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="inline-block w-full max-w-lg p-6 my-8  z-40overflow-hidden text-left align-middle transition-all transform bg-white dark:bg-gray-800 shadow-xl rounded-lg"
                        >
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    Edit Bon
                                </h3>
                                <button
                                    onClick={onClose}
                                    className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    {/* Bon Number */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                            Bon Number
                                        </label>
                                        <input
                                            type="text"
                                            value={data.numero_bon}
                                            onChange={e => setData('numero_bon', e.target.value)}
                                            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600
                                                    shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700
                                                    dark:text-white text-sm"
                                        />
                                        {errors.numero_bon && (
                                            <p className="mt-1 text-sm text-red-600">{errors.numero_bon}</p>
                                        )}
                                    </div>

                                    {/* Date */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                            Date
                                        </label>
                                        <input
                                            type="date"
                                            value={data.date}
                                            onChange={e => setData('date', e.target.value)}
                                            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600
                                                    shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700
                                                    dark:text-white text-sm"
                                        />
                                        {errors.date && (
                                            <p className="mt-1 text-sm text-red-600">{errors.date}</p>
                                        )}
                                    </div>

                                    {/* Quantity */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                            Quantity (L)
                                        </label>
                                        <input
                                            type="number"
                                            step="0.01"
                                            value={data.qte_litre}
                                            onChange={e => setData('qte_litre', e.target.value)}
                                            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600
                                                    shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700
                                                    dark:text-white text-sm"
                                        />
                                        {errors.qte_litre && (
                                            <p className="mt-1 text-sm text-red-600">{errors.qte_litre}</p>
                                        )}
                                    </div>

                                    {/* Price */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                            Price
                                        </label>
                                        <input
                                            type="number"
                                            step="0.01"
                                            value={data.prix}
                                            onChange={e => setData('prix', e.target.value)}
                                            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600
                                                    shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700
                                                    dark:text-white text-sm"
                                        />
                                        {errors.prix && (
                                            <p className="mt-1 text-sm text-red-600">{errors.prix}</p>
                                        )}
                                    </div>
                                      {/* Price */}
                                      <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                            KM
                                        </label>
                                        <input
                                            type="number"
                                            step="0.01"
                                            value={data.km}
                                            onChange={e => setData('km', e.target.value)}
                                            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600
                                                    shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700
                                                    dark:text-white text-sm"
                                        />
                                        {errors.km && (
                                            <p className="mt-1 text-sm text-red-600">{errors.km}</p>
                                        )}
                                    </div>
                                </div>

                                {/* Description */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Description
                                    </label>
                                    <textarea
                                        value={data.description}
                                        onChange={e => setData('description', e.target.value)}
                                        rows={3}
                                        className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600
                                                shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700
                                                dark:text-white text-sm"
                                    />
                                </div>

                                {/* Form Actions */}
                                <div className="flex justify-end space-x-3 mt-6">
                                    <button
                                        type="button"
                                        onClick={onClose}
                                        className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300
                                                bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600
                                                rounded-md hover:bg-gray-50 dark:hover:bg-gray-600"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="px-4 py-2 text-sm font-medium text-white bg-blue-600
                                                rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2
                                                focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                                    >
                                        {processing ? 'Saving...' : 'Save Changes'}
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default EditBonModal;
