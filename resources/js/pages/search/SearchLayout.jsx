import React, { useState } from 'react';
import SearchBar from './SearchBar';
import DashboardLayout from '@/layouts/app-layout';

const SearchLayout = ({children}) => {

    return (
        <DashboardLayout>
            <SearchBar />
            <div className="space-y-4">
                {/* Content */}
                <div>
                    {children}
                </div>
            </div>
        </DashboardLayout>
    );
};

export default SearchLayout;
