import facebook from '../../assets/facebook.svg';
import insta from '../../assets/insta.svg';
import twitter from '../../assets/twitter.svg';

type LinkType = {
    title: string;
    url: string;
};
type LinkObjType = {
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
        headtext: 'Need Help',
        links: [
            { title: 'Contact Us', url: '/contact' },
            { title: 'Track Order', url: '/track-order' },
            { title: 'Returns & Refunds', url: '/returnpolicy' },
            { title: 'FAQ`s', url: '/faq' },
            { title: 'Career', url: '/carrer' },
        ],
    },
];

const Footer = () => {
    return (
        <footer className="h-fit mt-[100px] px-[186px] py-[60px] bg-[#3C4242]">
            <div className="flex justify-center gap-[80px] flex-wrap">
                {FOOTERLINKS.map((linkObj: LinkObjType) => {
                    return (
                        <div>
                            <h1 className="text-[29px] font-[700] text-[#f6f6f6] mb-[15px]">
                                {linkObj.headtext}
                            </h1>

                            <ul className="flex flex-col gap-[5px]">
                                {linkObj.links.map((link: LinkType) => (
                                    <li key={link.url}>
                                        <a
                                            className="text-[14px] font-[500] text-[#f6f6f6]"
                                            href={link.url}>
                                            {link.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    );
                })}
            </div>
            <div>
                <div className="w-full flex justify-center items-center gap-20 my-[70px]">
                    <a>
                        <img src={facebook} alt="facebook" />
                    </a>
                    <a>
                        <img src={insta} alt="instagram" />
                    </a>
                    <a>
                        <img src={twitter} alt="twitter" />
                    </a>
                </div>
                <div className="text-center text-[#fff] text-[18px] font-[700]">
                    Copyright &copy; 2023 Euphoria Folks Pvt Ltd. All rights reserved
                </div>
            </div>
        </footer>
    );
};

export default Footer;
