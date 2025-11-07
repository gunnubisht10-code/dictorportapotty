import { NavLink } from '../types';
import { services } from './services';
import { areas } from './areas';

export const navLinks: NavLink[] = [
    { name: 'Home', path: '/' },
    { 
        name: 'Services', 
        path: '/services',
        subLinks: services.slice(0, 5).map(s => ({ name: s.title, path: `/services/${s.slug}` }))
    },
    { 
        name: 'Service Areas', 
        path: '/service-areas',
        subLinks: [
            {name: 'Decatur', path:'/'}, 
            ...areas.filter(a => ['bridgeport', 'rhome', 'boyd', 'denton'].includes(a.slug)).map(a => ({ name: a.city, path: `/service-areas/${a.slug}` }))
        ]
    },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
];