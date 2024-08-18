import {CreditCard, Earth, Landmark, LayoutList, Lock, Settings, Star, UserPen} from 'lucide-react';
import { title } from 'process';

export const dataSidebarElements = [{
    title: 'Elements',
    icon: LayoutList,
    children: [
        {
            title: 'Favourites',
            href: '/favourites',
            icon: Star
        },
        {
            title: 'Logins',
            href: '/logins-elements',
            icon: Earth
        },
        {
            title: 'Credit Card',
            href: '/credit-card',
            icon: CreditCard
        }
    ]
}]

export const dataSidebarConfiguration = [{
    title: 'Configuration',
    icon: Settings,
    children: [
        {
            title: 'Profile',
            href: '/profile',
            icon: UserPen,
            premium: false
        },
        /* {
            title: 'Security',
            href: '/#',
            icon: Lock,
            premium: true
        }, */
    ]
}]