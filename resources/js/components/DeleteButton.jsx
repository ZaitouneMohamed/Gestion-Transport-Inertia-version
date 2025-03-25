import React from 'react';
import { router } from '@inertiajs/react';
import { Trash2 } from 'lucide-react';
import Swal from 'sweetalert2';

const DeleteButton = ({ id, name, deleteUrl, resourceName = 'item' }) => {
    const handleDelete = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: `You are about to delete ${resourceName}: ${name}`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#dc2626',
            cancelButtonColor: '#6b7280',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Cancel',
            reverseButtons: true,
            background: document.documentElement.classList.contains('dark') ? '#1f2937' : '#ffffff',
            color: document.documentElement.classList.contains('dark') ? '#ffffff' : '#000000',
            customClass: {
                popup: 'dark:bg-gray-800 dark:text-white',
                confirmButton: 'dark:bg-red-600 dark:hover:bg-red-700',
                cancelButton: 'dark:bg-gray-600 dark:hover:bg-gray-700'
            }
        }).then((result) => {
            if (result.isConfirmed) {
                router.delete(deleteUrl, {
                    onSuccess: () => {
                        Swal.fire({
                            title: 'Deleted!',
                            text: `${resourceName} has been deleted.`,
                            icon: 'success',
                            confirmButtonColor: '#3b82f6',
                            background: document.documentElement.classList.contains('dark') ? '#1f2937' : '#ffffff',
                            color: document.documentElement.classList.contains('dark') ? '#ffffff' : '#000000',
                            customClass: {
                                popup: 'dark:bg-gray-800 dark:text-white',
                                confirmButton: 'dark:bg-blue-600 dark:hover:bg-blue-700'
                            }
                        });
                    },
                    onError: () => {
                        Swal.fire({
                            title: 'Error!',
                            text: `There was a problem deleting the ${resourceName}.`,
                            icon: 'error',
                            confirmButtonColor: '#3b82f6',
                            background: document.documentElement.classList.contains('dark') ? '#1f2937' : '#ffffff',
                            color: document.documentElement.classList.contains('dark') ? '#ffffff' : '#000000',
                            customClass: {
                                popup: 'dark:bg-gray-800 dark:text-white',
                                confirmButton: 'dark:bg-blue-600 dark:hover:bg-blue-700'
                            }
                        });
                    }
                });
            }
        });
    };

    return (
        <button
            onClick={handleDelete}
            className="text-red-600 dark:text-red-400 hover:text-red-900 dark:hover:text-red-300 transition-colors"
            aria-label={`Delete ${name}`}
        >
            <Trash2 className="w-4 h-4" />
        </button>
    );
};

export default DeleteButton;
