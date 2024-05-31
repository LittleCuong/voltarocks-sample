import { Fragment } from 'react/jsx-runtime';
import AdminSidebar from '../components/AdminSidebar';
import AdminMenu from '../components/AdminMenu';

import teamIcon from '../assets/team-icon.svg';
import downArrow from '../assets/down-arrow.svg';

export default function AdminDashboard() {
    return (
        <Fragment>
            <div className="w-full min-h-screen flex bg-[#F6F8FF] gap-x-12 overflow-hidden">
                <AdminSidebar />
                <div className="h-screen flex-1 flex flex-col gap-[24px]">
                    <div className=" w-full h-[96px] flex justify-between rounded-[12px] p-[24px] bg-base-100 shadow-menu-section">
                        <div className="flex flex-col gap-[6px]">
                            <h3 className="text-base text-[#0F172A] font-semibold">Good Morning, Thor!</h3>
                            <span className="text-xs">May 29, 2024</span>
                        </div>
                        <div className="h-full flex items-center gap-x-5">
                            <div className="dropdown w-[310px] h-full bg-[#F5F7FA] rounded-[24px]">
                                <div
                                    tabIndex={0}
                                    role="button"
                                    className="btn flex items-center gap-x-1 py-[8px] rounded-[24px] bg-transparent px-[16px] border-none"
                                >
                                    <img className="w-6 h-6 rounded-full" src={teamIcon} alt="back" />
                                    <span className="font-semibold text-[#0F172A] text-[16px]">
                                        Guardians of the Galaxy Team
                                    </span>
                                    <img className="w-5 h-5" src={downArrow} alt="down arrow" />
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                                >
                                    <li>
                                        <a>Item 1</a>
                                    </li>
                                    <li>
                                        <a>Item 2</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="dropdown min-w-[161px] h-full bg-transparent">
                                <div
                                    tabIndex={0}
                                    role="button"
                                    className="btn flex items-center gap-x-1 py-[8px] bg-transparent hover:bg-transparent px-[16px] border-none"
                                >
                                    <img className="w-6 h-6 rounded-full" src={teamIcon} alt="back" />
                                    <span className="font-semibold text-[#0F172A] text-[16px]">
                                        Thor Son of a Beach
                                    </span>
                                    <img className="w-5 h-5" src={downArrow} alt="down arrow" />
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                                >
                                    <li>
                                        <a>Item 1</a>
                                    </li>
                                    <li>
                                        <a>Item 2</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <AdminMenu />
                </div>
            </div>
        </Fragment>
    );
}
