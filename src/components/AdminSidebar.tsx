import { useState } from 'react';

// Logo & image
import councilAvatar from '../assets/council-avatar.png';
import dashboardIcon from '../assets/dashboard-icon.svg';
import trackingIcon from '../assets/tracking-icon.svg';
import emissionsIcon from '../assets/emissions-icon.svg';
import usersIcon from '../assets/users-icon.svg';

interface Feature {
    name: string;
    icon: string;
}

const initialFeature: Feature[] = [
    { name: 'Dashboard', icon: dashboardIcon },
    { name: 'Energy Tracking', icon: trackingIcon },
    { name: 'Emissions', icon: emissionsIcon },
    { name: 'User Management', icon: usersIcon },
];

export default function AdminSidebar() {
    let hoverTimeout: any;

    // set component's state
    const [currentItem, setCurrentItem] = useState<String>('Dashboard');
    const [features] = useState<Feature[]>(initialFeature);
    const [isOpen, setIsOpen] = useState(false);

    // handle hover sidebar
    const handleMouseEnter = () => {
        clearTimeout(hoverTimeout);
        hoverTimeout = setTimeout(() => {
            setIsOpen(true);
        }, 100);
    };

    // handle leave sidebar
    const handleMouseLeave = () => {
        clearTimeout(hoverTimeout);
        hoverTimeout = setTimeout(() => {
            setIsOpen(false);
        }, 100);
    };

    // handle choose sidebar's item
    const handleChooseFeature = (name: string) => {
        setCurrentItem(name);
    };

    return (
        <div
            className={`${
                isOpen ? 'w-[248px]' : 'w-20'
            } relative transition-all duration-500 bg-white shadow-admin-sidebar`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="flex items-center px-[12px] py-[24px] text-lg gap-2">
                <img
                    className="w-[56px] h-[56px] object-contain cursor-pointer hover:shadow-custom-shadow drop-shadow-md rounded-xl"
                    src={councilAvatar}
                    alt="council-avatar"
                />
                <div
                    className={`flex flex-col transition-opacity duration-200 ${!isOpen ? 'opacity-0' : 'opacity-100'}`}
                >
                    <span className="font-urbanist transition-width duration-400 ease-in-out font-bold text-lg text-[#0F172A]">
                        Torqay
                    </span>
                    <span className="font-urbanist text-sm">Admin</span>
                </div>
            </div>
            <div className="w-full flex py-[16px] px-[8px] overflow-hidden">
                <ul className="w-full space-y-8 gap-[31px]">
                    {features.map((item, index) => (
                        <li
                            key={index}
                            id="dashboard"
                            onClick={() => handleChooseFeature(item.name)}
                            className={`p-[12px] flex items-center whitespace-nowrap cursor-pointer rounded-[12px] transition-all duration-200 ${
                                currentItem == item.name ? 'bg-[#BCE5D2]' : 'bg-white'
                            } border-[1px] border-transparent hover:border-[#50C793] `}
                        >
                            <img className="w-[24px] h-[24px] ml-2" src={item.icon} />
                            <span
                                className={`text-[16px] cursor-pointer leading-[24px] font-semibold ml-4 transition-opacity duration-200 ${
                                    !isOpen ? 'opacity-0' : 'opacity-100'
                                }`}
                            >
                                {item.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
