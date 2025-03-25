import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem
} from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import React from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

// Update the type definition to include dropdownItems
type NavMainProps = {
    items: NavItem[];
    dropdownItems?: Array<{
        id: string;
        title: string;
        icon: React.ComponentType;
        children: Array<{
            title: string;
            url: string;
        }>;
    }>;
};

export function NavMain({ items = [], dropdownItems = [] }: NavMainProps) {
    const page = usePage();
    const [openDropdowns, setOpenDropdowns] = React.useState({});

    // Toggle dropdown state
    const toggleDropdown = (dropdownId) => {
        setOpenDropdowns(prev => ({
            ...prev,
            [dropdownId]: !prev[dropdownId]
        }));
    };

    return (
        <SidebarGroup className="px-2 py-0">
            <SidebarGroupLabel>Platform</SidebarGroupLabel>

            {/* Regular menu items */}
            <SidebarMenu>
                {items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild isActive={item.url === page.url}>
                            <Link href={item.url} prefetch>
                                {item.icon && <item.icon className="mr-2" />}
                                <span>{item.title}</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
            </SidebarMenu>

            {/* Dropdown menus */}
            {dropdownItems.length > 0 && (
                <SidebarMenu>
                    {dropdownItems.map((dropdown) => (
                        <SidebarMenuItem key={dropdown.id}>
                            <SidebarMenuButton
                                onClick={() => toggleDropdown(dropdown.id)}
                            >
                                <dropdown.icon className="mr-2" />
                                <span>{dropdown.title}</span>
                                {openDropdowns[dropdown.id] ?
                                    <ChevronDown className="ml-auto" /> :
                                    <ChevronRight className="ml-auto" />
                                }
                            </SidebarMenuButton>
                            {openDropdowns[dropdown.id] && (
                                <SidebarMenuSub>
                                    {dropdown.children.map((subItem) => (
                                        <SidebarMenuSubItem key={subItem.title}>
                                            <SidebarMenuSubButton asChild isActive={subItem.url === page.url}>
                                                <Link href={subItem.url} prefetch>
                                                    {subItem.title}
                                                </Link>
                                            </SidebarMenuSubButton>
                                        </SidebarMenuSubItem>
                                    ))}
                                </SidebarMenuSub>
                            )}
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            )}
        </SidebarGroup>
    );
}
