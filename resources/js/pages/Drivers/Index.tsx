import { Head, Link, router } from '@inertiajs/react';
import DashboardLayout from '@/layouts/app-layout';
import DeleteButton from '@/components/DeleteButton';
import {
    Search,
    FilePlus,
    FileDown,
    Edit2,
} from 'lucide-react';
import debounce from 'lodash/debounce';
import Pagination from '@/components/Pagination';

export default function Index({ data , filters }) {



    /*const handleSearch = debounce((value) => {
        router.get(
            route('drivers.index'),
            { search: value },
            {
                preserveState: true,
                preserveScroll: true,
                replace: true,
            }
        );
    }, 300);*/

    return (
        <DashboardLayout>
            <Head title="Drivers" />

            <div className="p-6 dark:bg-black-900">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-white dark:bg-black overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6">
                            {/* Header with Buttons */}
                            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 space-y-4 sm:space-y-0">
                                <h2 className="text-2xl font-semibold dark:text-white">Drivers List</h2>
                                <div className="flex space-x-4">
                                    <Link
                                        href={route('drivers.create')}
                                        className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                    >
                                        <FilePlus className="w-4 h-4 mr-2" />
                                        Add Driver
                                    </Link>
                                    <Link
                                        href="#"
                                        className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                                    >
                                        <FileDown className="w-4 h-4 mr-2" />
                                        Export PDF
                                    </Link>
                                </div>
                            </div>

                            {/* Search Input */}
                            <div className="mb-6">
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <input
                                        type="text"
                                        placeholder="Search by name or email..."
                                        defaultValue={filters?.search || ''}
                                        //onChange={(e) => handleSearch(e.target.value)}
                                        className="pl-10 pr-4 py-2 w-full border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                                    />
                                </div>
                            </div>

                            {/* Table */}
                            <div className="overflow-x-auto bg-white dark:bg-black-900 rounded-lg border dark:border-gray-700">
                                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                    <thead className="bg-gray-50 dark:bg-gray-700">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                                Full Name
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                                Phone
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                                Code
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                                Email
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                                CNI
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                                CNSS
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                                        {data.data.map((driver) => (
                                            <tr key={driver.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
                                                        {driver.fullname}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900 dark:text-gray-100">
                                                        {driver.phone}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900 dark:text-gray-100">
                                                        {driver.code}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900 dark:text-gray-100">
                                                        {driver.email}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900 dark:text-gray-100">
                                                        {driver.cni}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900 dark:text-gray-100">
                                                        {driver.cnss}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                                    <div className="flex space-x-3">
                                                        <Link
                                                            href={route('drivers.edit', driver.id)}
                                                            className="text-blue-600 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300 transition-colors"
                                                        >
                                                            <Edit2 className="w-4 h-4" />
                                                        </Link>
                                                        <DeleteButton
                                                            id={driver.id}
                                                            name={driver.full_name}
                                                            deleteUrl={route('drivers.destroy', driver.id)}
                                                            resourceName="driver"
                                                        />

                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                                {/* Pagination Component */}
                                <Pagination
                                    links={{
                                        first: data.links.first || null,
                                        last: data.links.last || null,
                                        prev: data.links.prev || null,
                                        next: data.links.next || null
                                    }}
                                    from={data.from}
                                    to={data.to}
                                    total={data.total}
                                    currentPage={data.current_page}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
