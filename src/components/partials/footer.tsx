import { facebookFooter, instaFooter, twitterFooter } from '../../assets';

import { FOOTERLINKS, LinkObjType, LinkType } from '../../constants';
const Footer = () => {
    return (
        <footer className="h-fit px-[186px] py-[60px] bg-[#3C4242]">
            <div className="flex spc:justify-center justify-start spc:gap-[80px] gap-[40px] flex-wrap">
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
                        <img src={facebookFooter} alt="facebook" />
                    </a>
                    <a>
                        <img src={instaFooter} alt="instagram" />
                    </a>
                    <a>
                        <img src={twitterFooter} alt="twitter" />
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
