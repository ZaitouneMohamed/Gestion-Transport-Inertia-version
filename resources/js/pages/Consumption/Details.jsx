import {React , useState} from 'react';
import { motion } from 'framer-motion';
import { Head } from '@inertiajs/react';
import DashboardLayout from '@/layouts/app-layout';
import {
    Car,
    User,
    MapPin,
    Calendar,
    Gauge,
    Fuel,
    Route,
    AlertTriangle,
    Edit2,
    Trash2,
    CheckCircle2,
    XCircle,
    Backpack,
    MoveLeft
} from 'lucide-react';
import EditBonModal from './EditButtonModel';

const ConsumptionDetails = ({ consumption }) => {
    const newconsumption = consumption['data'];
    // In your main component
const [isEditModalOpen, setIsEditModalOpen] = useState(false);
const [selectedBon, setSelectedBon] = useState(null);
    const StatusBadge = ({ value, threshold }) => {
        let icon, color, text;

        if (value === null || value === undefined) {
            icon = <AlertTriangle className="w-4 h-4" />;
            color = "bg-gray-100 text-gray-600";
            text = "N/A";
        } else if (value > threshold) {
            icon = <CheckCircle2 className="w-4 h-4" />;
            color = "bg-green-100 text-green-800";
            text = "Good";
        } else {
            icon = <XCircle className="w-4 h-4" />;
            color = "bg-red-100 text-red-800";
            text = "Alert";
        }

        return (
            <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium ${color}`}>
                {icon}
                {text}
            </span>
        );
    };

    const DataCard = ({ title, value, icon: Icon, className = "" }) => (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm ${className}`}
        >
            <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-2">
                <Icon className="w-5 h-5" />
                <h3 className="text-sm font-medium">{title}</h3>
            </div>
            <p className="text-2xl font-semibold text-gray-900 dark:text-white">{value}</p>
        </motion.div>
    );


    return (
        <DashboardLayout>
            <Head title={`Consumption Details - ${newconsumption.ville}`} />

            <div className="p-6 space-y-6">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm"
                >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.history.back()}
                className="flex items-center gap-2 px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
                <MoveLeft className="w-5 h-5" />
                Back
            </motion.button>
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                                {newconsumption.ville} Mission
                            </h1>
                            <p className="text-gray-500 dark:text-gray-400 mt-1">
                                Created on {newconsumption.created_at}
                            </p>
                        </div>
                        <StatusBadge
                            value={newconsumption.consumption_data.status.mission}
                            threshold={0}
                        />
                    </div>
                </motion.div>

                {/* Basic Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <DataCard
                        title="Driver"
                        value={newconsumption.drivername}
                        icon={User}
                    />
                    <DataCard
                        title="Truck"
                        value={newconsumption.truckmatricule}
                        icon={Car}
                    />
                    <DataCard
                        title="Location"
                        value={newconsumption.ville}
                        icon={MapPin}
                    />
                    <DataCard
                        title="Date"
                        value={new Date(newconsumption.date).toLocaleDateString()}
                        icon={Calendar}
                    />
                </div>

                {/* Consumption Stats */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    {/* Fuel Consumption */}
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                            <Fuel className="w-5 h-5" />
                            Fuel Consumption
                        </h3>
                        <div className="space-y-4">
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Quantity (L)</p>
                                <p className="text-xl font-semibold text-gray-900 dark:text-white">
                                    {newconsumption.consumption_data.qty_litre || 'N/A'}
                                </p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Total Price</p>
                                <p className="text-xl font-semibold text-green-600 dark:text-green-400">
                                    {newconsumption.consumption_data.full_prix} DH
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Distance Stats */}
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                            <Route className="w-5 h-5" />
                            Distance
                        </h3>
                        <div className="space-y-4">
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Proposed KM</p>
                                <p className="text-xl font-semibold text-gray-900 dark:text-white">
                                    {newconsumption.consumption_data.km_proposer} km
                                </p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Actual KM</p>
                                <p className="text-xl font-semibold text-gray-900 dark:text-white">
                                    {newconsumption.consumption_data.km_total} km
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Consumption Rate */}
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                            <Gauge className="w-5 h-5" />
                            Consumption Rate
                        </h3>
                        <div className="space-y-4">
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Rate</p>
                                <p className="text-xl font-semibold text-gray-900 dark:text-white">
                                    {newconsumption.consumption_data.taux}%
                                </p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Status</p>
                                <StatusBadge
                                    value={newconsumption.consumption_data.status.gazole}
                                    threshold={0}
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Description Section */}
                {newconsumption.description && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm"
                    >
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                            Description
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            {newconsumption.description}
                        </p>
                    </motion.div>
                )}
            </div>
            {/* Bons Section */}
{newconsumption.bons && newconsumption.bons.length > 0 && (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm"
    >
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <Backpack className="w-5 h-5" />
            Bons List
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {newconsumption.bons.map((bon) => (
                <motion.div
                    key={bon.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 shadow-sm"
                >
                    {/* Bon Header */}
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                                Bon #{bon.numero_bon}
                            </h4>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                {new Date(bon.date).toLocaleDateString()}
                            </p>
                        </div>
                        <span className={`px-2 py-1 text-xs rounded-full ${
                            bon.nature === 'gazole'
                                ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
                                : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300'
                        }`}>
                            {bon.nature}
                        </span>
                    </div>

                    {/* Bon Details */}
                    <div className="space-y-2 mb-4">
                        <div className="flex justify-between">
                            <span className="text-sm text-gray-500 dark:text-gray-400">Quantity</span>
                            <span className="text-sm font-medium text-gray-900 dark:text-white">
                                {bon.qte_litre} L
                            </span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-sm text-gray-500 dark:text-gray-400">Price</span>
                            <span className="text-sm font-medium text-gray-900 dark:text-white">
                                {bon.prix} DH
                            </span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-sm text-gray-500 dark:text-gray-400">KM</span>
                            <span className="text-sm font-medium text-gray-900 dark:text-white">
                                {bon.km} km
                            </span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-sm text-gray-500 dark:text-gray-400">Station</span>
                            <span className="text-sm font-medium text-gray-900 dark:text-white">
                            {bon.station?.name || 'N/A'}
                            </span>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-end space-x-3 pt-3 border-t border-gray-200 dark:border-gray-600">
    <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
            setSelectedBon(bon);
            setIsEditModalOpen(true);
        }}
        className="inline-flex items-center px-3 py-1.5 bg-blue-50 dark:bg-blue-900/20
                 text-blue-600 dark:text-blue-400 rounded-md
                 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all duration-200
                 group"
    >
        <Edit2 className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-200" />
        <span className="font-medium">Edit</span>
    </motion.button>

    <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
            if (confirm('Are you sure you want to delete this bon?')) {
                router.delete(route('bons.destroy', bon.id), {
                    preserveScroll: true
                });
            }
        }}
        className="inline-flex items-center px-3 py-1.5 bg-red-50 dark:bg-red-900/20
                 text-red-600 dark:text-red-400 rounded-md
                 hover:bg-red-100 dark:hover:bg-red-900/30 transition-all duration-200
                 group"
    >
        <Trash2 className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-200" />
        <span className="font-medium">Delete</span>
    </motion.button>
</div>
{/* Add the modal component */}

                </motion.div>
            ))}
        </div>
    </motion.div>
)}
<EditBonModal
    isOpen={isEditModalOpen}
    onClose={() => {
        setIsEditModalOpen(false);
        setSelectedBon(null);
    }}
    bon={selectedBon}
/>
        </DashboardLayout>
    );
};

export default ConsumptionDetails;
