import { ReactNode } from 'react';
import {
    google,
    twitter,
    arrival1,
    arrival2,
    arrival3,
    arrival4,
    hero1,
    hero2,
    myOrders,
    heart,
    user,
    signOut,
} from './assets/index';

export const API_DOMAIN = 'https://eph-server-1.onrender.com';

export interface ErrorType {
    isError: boolean;
    message: string | undefined;
}

export type ArrivalType = {
    img: string;
    title: string;
};
const ARRIVALS: ArrivalType[] = [
    { img: arrival1, title: 'Knitted Joggers' },
    { img: arrival2, title: 'Full Sleeve' },
    { img: arrival3, title: 'Active T-Shirts' },
    { img: arrival4, title: 'Urban Shirts' },
];

export type DiscountType = {
    subtext: string;
    headtext: string;
    discount: number;
    img: any;
};

const DISCOUNTS: DiscountType[] = [
    { subtext: 'Low Price', headtext: 'High Coziness', discount: 50, img: hero1 },
    { subtext: 'Beyoung Presents', headtext: 'Breezy Summer Style', discount: 25, img: hero2 },
];

const ACCOUNT_MENU = [
    { title: 'My Orders', icon: myOrders, link: 'myorders' },
    { title: 'Wishlist', icon: heart, link: 'wishlist' },
    { title: 'My info', icon: user, link: 'myinfo' },
    { title: 'Sign out', icon: signOut, link: 'signout' },
];

const OAuthWays = [
    { image: google, title: 'Google' },
    { image: twitter, title: 'Twitter' },
];

export type LinkType = {
    title: string;
    url: string;
};
export type LinkObjType = {
    headtext: string;
    links: LinkType[];
};

const FOOTERLINKS: LinkObjType[] = [
    {
        headtext: 'Need Help',
        links: [
            { title: 'Contact Us', url: '/contact' },
            { title: 'Track Order', url: '/track-order' },
            { title: 'Returns & Refunds', url: '/returnpolicy' },
            { title: 'FAQ`s', url: '/faq' },
            { title: 'Career', url: '/carrer' },
        ],
    },
    {
        headtext: 'Company',
        links: [
            { title: 'About us', url: '/about-us' },
            { title: 'Our Blog', url: '/blog' },
            { title: 'Collaboration', url: '/collaboration' },
            { title: 'Media', url: '/media' },
            { title: 'Moods', url: '/moods' },
        ],
    },
    {
        headtext: 'More Info',
        links: [
            { title: 'Terms and Conditions', url: '/terms' },
            { title: 'Privacy Policy', url: '/privacy-policy' },
            { title: 'Shipping Policy', url: '/shipping-policy' },
            { title: 'Sitemap', url: '/sitemap' },
        ],
    },
    {
        headtext: 'Location',
        links: [
            { title: 'support@euphoria.shop', url: '#' },
            { title: 'Ukraine, Kyiv, Independent St. 62/11', url: '#' },
            { title: '+380 93 777 88 99', url: '#' },
            { title: 'Our Telegram', url: '#' },
            { title: 'Our Instagram', url: '#' },
        ],
    },
];

export type NavLinkType = {
    url: string;
    title: string;
};

const LINKS: NavLinkType[] = [
    { url: '/', title: 'Shop' },
    { url: '/men', title: 'Men' },
    { url: '/women', title: 'Women' },
    { url: '/joggers', title: 'Joggers' },
    { url: '/combos', title: 'Combos' },
];

export type ColorType = {
    title: string;
    code: string;
};

const SIZES: string[] = ['S', 'M', 'L', 'XS', 'XM', 'XL'];
const COLORS: ColorType[] = [
    { title: 'Black', code: 'bg-[#424242]' },
    { title: 'Green', code: 'bg-[#16745b]' },
    { title: 'White', code: 'bg-[#fff]' },
    { title: 'Yellow', code: 'bg-[#ffd700]' },
    { title: 'Blue', code: 'bg-[#84bff3]' },
    { title: 'Brown', code: 'bg-[#94826f]' },
];

export { SIZES, COLORS, ARRIVALS, DISCOUNTS, ACCOUNT_MENU, OAuthWays, FOOTERLINKS, LINKS };
