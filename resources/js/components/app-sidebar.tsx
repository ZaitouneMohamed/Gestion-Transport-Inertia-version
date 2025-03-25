import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import {  LayoutGrid,  Building, Waypoints, BusFront } from 'lucide-react';
import AppLogo from './app-logo';

// Define both main nav items and dropdown items with their subitems
const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        url: '/dashboard',
        icon: LayoutGrid,
    },
];

const dropdownItems = [
    {
        id: 'companys',
        title: 'Company',
        icon: Building,
        children: [
            { title: 'Drivers', url: route('drivers.index') },
            { title: 'Trucks', url: route('trucks.index') },
            { title: 'Stations', url: route('stations.index') },
        ]
    },
    {
        id: 'about',
        title: 'Consumptions',
        icon: BusFront,
        children: [
            { title: 'Consumptions', url: route('consumption.index')},
        ]
    },
    // Add more dropdown items as needed
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/dashboard" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} dropdownItems={dropdownItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
