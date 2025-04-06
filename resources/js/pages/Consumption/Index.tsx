import { Head, Link, router } from '@inertiajs/react';
import DashboardLayout from '@/layouts/app-layout';
import DeleteButton from '@/components/DeleteButton';
import debounce from 'lodash/debounce';
import Pagination from '@/components/Pagination';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

import {
    Search,
    FileDown,
    Edit2,
    Loader2,
    AlertCircle,
    CheckCircle2,
    XCircle,
    List,
    PlusCircle,
    Eye
} from 'lucide-react';


export default function Index({ data, filters }) {

    const [isLoading, setIsLoading] = useState(false);

    const handleSearch = debounce((value) => {
        setIsLoading(true);
        router.get(
            route('consumption.index'),
            {
                search: value,
                startDate: filters.startDate,
                endDate: filters.endDate
            },
            {
                preserveState: true,
                onFinish: () => setIsLoading(false)
            }
        );
    }, 300);

    const handleDateChange = (field, value) => {
        setIsLoading(true);
        router.get(
            route('consumption.index'),
            {
                ...filters,
                [field]: value
            },
            {
                preserveState: true,
                onFinish: () => setIsLoading(false)
            }
        );
    };

    function checkStatusToShowData ( status , showingData){
        if (status === 0) {
            return "-"
        }else {
            return StatusBadge(status , showingData)
        }
    };

    function statusGazoleBadge(value) {
        let color = value > 0 ? "bg-green-100 text-green-800 dark:bg-green-800/20 dark:text-green-400" : "bg-red-100 text-red-800 dark:bg-red-800/20 dark:text-red-400";

        return <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${color}`}>
                {value}
            </span>
    }

    function statusMissionBadge(value) {
        let color = value < 0 ? "bg-green-100 text-green-800 dark:bg-green-800/20 dark:text-green-400" : "bg-red-100 text-red-800 dark:bg-red-800/20 dark:text-red-400";

        return <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${color}`}>
                {value}
            </span>
    }

    // Status badge component
    function StatusBadge ( status , showingData) {
        let icon, color, text;

        switch(status) {
            case 0:
                icon = <AlertCircle className="w-4 h-4 mr-1" />;
                color = 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800/20 dark:text-yellow-400';
                text = 'Pending';
                break;
            case 1:
                icon = <CheckCircle2 className="w-4 h-4 mr-1" />;
                color = 'bg-green-100 text-green-800 dark:bg-green-800/20 dark:text-green-400';
                text = showingData;
                break;
            default:
                icon = <XCircle className="w-4 h-4 mr-1" />;
                color = 'bg-red-100 text-red-800 dark:bg-red-800/20 dark:text-red-400';
                text = 'Cancelled';
        }

        return (
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${color}`}>
                {icon}
                {text}
            </span>
        );
    };

    return (
        <DashboardLayout>
            <Head title="Consumption Management" />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-6 dark:bg-gray-900"
            >
                <div className="max-w-[67rem] mx-auto">
                    {/* Stats Overview */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            whileHover={{
                                scale: 1.02,
                                translateY: -5,
                                transition: {
                                    duration: 0.2,
                                    type: "spring",
                                    stiffness: 300
                                }
                            }}
                            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-lg transition-all relative overflow-hidden group"
                        >
                            <div className="relative z-10">
                                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 flex items-center gap-2">
                                    Total Records
                                </h3>
                                <motion.p
                                    initial={{ scale: 0.5 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.1 }}
                                    className="mt-2 text-3xl font-semibold text-gray-900 dark:text-white"
                                >
                                    {data.meta.total}
                                </motion.p>
                            </div>
                        </motion.div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6">
                            {/* Header with Buttons */}
                            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 space-y-4 sm:space-y-0">
                                <motion.h2
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    className="text-2xl font-semibold dark:text-white flex items-center gap-2"
                                >
                                    <List className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                                    Consumption List
                                </motion.h2>

                                <div className="flex flex-wrap gap-3">
                                    <motion.div
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.97 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                        title="Add new consumption entry"
                                    >
                                        <Link
                                            href={route('consumption.create')}
                                            className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all shadow-md hover:shadow-lg group"
                                        >
                                            <PlusCircle className="w-4 h-4 mr-2 group-hover:rotate-90 transition-transform duration-300" />
                                            <span>New Entry</span>
                                        </Link>
                                    </motion.div>

                                    <motion.div
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.97 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                        title="Export to Excel"
                                    >
                                        <Link
                                            className="flex items-center px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all shadow-md hover:shadow-lg group"
                                        >
                                            <FileDown className="w-4 h-4 mr-2 group-hover:translate-y-[-2px] transition-transform duration-300" />
                                            <span>Export Excel</span>
                                        </Link>
                                    </motion.div>

                                    <motion.div
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.97 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                        title="Export to PDF"
                                    >
                                        <Link
                                            className="flex items-center px-4 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-all shadow-md hover:shadow-lg group"
                                        >
                                            <FileDown className="w-4 h-4 mr-2 group-hover:translate-y-[-2px] transition-transform duration-300" />
                                            <span>Export PDF</span>
                                        </Link>
                                    </motion.div>
                                </div>
                            </div>

                           {/* Search and Filters */}
                            <div className="mb-6">
                                <div className="flex flex-col sm:flex-row gap-4">
                                    {/* Search Input */}
                                    <div className="relative sm:w-1/3">
                                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                        <input
                                            type="text"
                                            placeholder="Search consumptions..."
                                            defaultValue={filters.search}
                                            onChange={(e) => handleSearch(e.target.value)}
                                            className="pl-10 pr-10 py-2 w-full border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                                        />
                                        {isLoading && (
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                                            >
                                                <Loader2 className="w-5 h-5 text-gray-400 animate-spin" />
                                            </motion.div>
                                        )}
                                    </div>

                                    {/* Date Inputs */}
                                    <div className="sm:w-1/3">
                                        <div className="relative">
                                            <input
                                                type="date"
                                                value={filters.startDate || ''}
                                                onChange={(e) => handleDateChange('startDate', e.target.value)}
                                                className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                                                placeholder="Start Date"
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:w-1/3">
                                        <div className="relative">
                                            <input
                                                type="date"
                                                value={filters.endDate || ''}
                                                onChange={(e) => handleDateChange('endDate', e.target.value)}
                                                className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                                                placeholder="End Date"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Table */}
                            <div className="relative overflow-auto rounded-lg border dark:border-gray-700">

                                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                    {/* ... table headers ... */}
                                    <thead className="bg-gray-50 dark:bg-gray-700">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                                Driver
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                                Truck
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                                Date
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                                Ville
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                                Trajet Composer
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                                KM Total
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                                KM Proposer
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                                Taux
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                                Truck Consomation
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                                Status Gazole
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                                Status mission
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                                Prix
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                                        <AnimatePresence>
                                            {data.data.map((item, index) => (
                                                <motion.tr
                                                    key={item.id}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -20 }}
                                                    transition={{ delay: index * 0.05 }}
                                                    className="hover:bg-gray-50 dark:hover:bg-gray-700"
                                                >
                                                    {/* ... table cells ... */}
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
                                                        {item.drivername}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900 dark:text-gray-100">
                                                        {item.truckmatricule}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900 dark:text-gray-100">
                                                        {item.date}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900 dark:text-gray-100">
                                                        {item.ville}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900 dark:text-gray-100">
                                                        {item.status == 1 ? item.consumption_data.qty_litre : ""}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900 dark:text-gray-100">
                                                        { item.status == 1 ? item.consumption_data.km_total : "-"}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900 dark:text-gray-100">
                                                        {item.status == 1 ? item.consumption_data.km_proposer : "-"}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900 dark:text-gray-100">
                                                        {item.status == 1 ? item.consumption_data.taux : "-"}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900 dark:text-gray-100">
                                                        {item.truckconsomation}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900 dark:text-gray-100">
                                                        {item.status == 1 ?  statusGazoleBadge(item.consumption_data.status.gazole) : "-"}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900 dark:text-gray-100">
                                                        {item.status == 1 ? statusMissionBadge(item.consumption_data.status.mission) : "-"}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900 dark:text-gray-100">
                                                        { item.status == 1 ? item.consumption_data.prix : "-"}
                                                    </div>
                                                </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                        <div className="flex items-center justify-end space-x-2">
                                                            <Link
                                                                    href={route('consumption.show', item.id)}
                                                                    className="text-blue-600 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300"
                                                                >
                                                                <Eye className="w-4 h-4" />
                                                            </Link>
                                                            <Link
                                                                href={route('consumption.edit', item.id)}
                                                                className="text-blue-600 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300"
                                                            >
                                                                <Edit2 className="w-4 h-4" />
                                                            </Link>
                                                            <DeleteButton
                                                                id={item.id}
                                                                name={item.ville}
                                                                deleteUrl={route('consumption.destroy', item.id)}
                                                            />
                                                        </div>
                                                    </td>
                                                </motion.tr>
                                            ))}
                                        </AnimatePresence>
                                    </tbody>
                                </table>

                            </div>
                                <div className="p-4 border-t dark:border-gray-700">
                                    <Pagination
                                        links={data.meta.links}
                                        from={data.meta.from}
                                        to={data.meta.to}
                                        total={data.meta.total}
                                        currentPage={data.meta.current_page}
                                    />
                                </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </DashboardLayout>
    );
}
