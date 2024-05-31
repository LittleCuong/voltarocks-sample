import { Fragment } from 'react/jsx-runtime';

// Logo & image
import voltaSignupImage from '../assets/signup-img.png';
import logoWithText from '../assets/logo-with-text.png';

import { Link } from 'react-router-dom';

export default function SignUp() {
    return (
        <Fragment>
            <div className="w-full h-screen flex overflow-hidden">
                <div className="w-1/2 h-full bg-white flex flex-col items-center justify-center md:pt-[32px] lg:pt-[40px] xl:pt-[48px] md:px-[70px] lg:px-[100px] xl:px-[130px]">
                    <div className="w-full h-full flex flex-col items-center md:gap-[14px] lg:gap-[16px] xl:gap-[32px] 2xl:gap-[32px]">
                        <div className="w-full md:h-[52px] lg:h-[60px] xl:h-[68px]  flex flex-col items-center lg:gap-[10px] xl:gap-[12px] ">
                            <span className="font-inter md:text-[16px] lg:text-[20px] xl:text-[24px] font-medium leading-[32px] text-center text-[#0F172A]">
                                Sign up
                            </span>
                            <span className="font-inter md:text-[8px] lg:text-[12px] xl:text-[16px] leading-[24px] text-[#64748B]">
                                Create an account to start using VoltaRocks
                            </span>
                        </div>
                        <form className="w-full flex flex-col items-center md:gap-[16px] lg:gap-[20px] xl:gap-[20px]">
                            <div className="w-full flex flex-col items-start gap-[16px]">
                                <div className="w-full flex flex-col items-start gap-[8px]">
                                    <label className="font-inter font-medium md:text-[10px] lg:text-[12px] xl:text-[14px] text-left">
                                        Your Council Name
                                    </label>
                                    <input
                                        className="w-full md:p-[8px] lg:p-[10px] xl:p-[12px] md:text-[10px] lg:text-[12px] xl:text-[14px] border border-input-color-signup bg-transparent rounded outline-none"
                                        name="council-name"
                                        type="text"
                                        placeholder="Type your council name"
                                    />
                                </div>
                                <div className="w-full flex flex-col items-start gap-[8px]">
                                    <label className="font-inter font-medium md:text-[10px] lg:text-[12px] xl:text-[14px] text-left">
                                        Full Name
                                    </label>
                                    <input
                                        className="w-full md:p-[8px] lg:p-[10px] xl:p-[12px] md:text-[10px] lg:text-[12px] xl:text-[14px] border border-input-color-signup bg-transparent rounded outline-none"
                                        name="fullname"
                                        type="text"
                                        placeholder="Type your Full Name"
                                    />
                                </div>
                                <div className="w-full flex flex-col items-start gap-[8px]">
                                    <label className="font-inter font-medium md:text-[10px] lg:text-[12px] xl:text-[14px] text-left">
                                        Email
                                    </label>
                                    <input
                                        className="w-full md:p-[8px] lg:p-[10px] xl:p-[12px] md:text-[10px] lg:text-[12px] xl:text-[14px] border border-input-color-signup bg-transparent rounded outline-none"
                                        name="email"
                                        type="email"
                                        placeholder="Type your email"
                                    />
                                </div>
                                <div className="w-full flex flex-col items-start gap-[8px]">
                                    <label className="font-inter font-medium md:text-[10px] lg:text-[12px] xl:text-[14px] text-left">
                                        Password
                                    </label>
                                    <input
                                        className="w-full md:p-[8px] lg:p-[10px] xl:p-[12px] md:text-[10px] lg:text-[12px] xl:text-[14px] border border-input-color-signup bg-transparent rounded outline-none"
                                        name="password"
                                        type="password"
                                        placeholder="8+ characters, 1 capitat letter"
                                    />
                                </div>
                                <div className="flex w-full justify-between">
                                    <label className="flex items-center md:gap-[2px] lg:gap-[4px] xl:gap-[8px] font-inter font-medium text-[14px] text-left cursor-pointer">
                                        <input
                                            type="checkbox"
                                            name="keepSignedIn"
                                            className="md:w-[14px] lg:w-[16px] xl:w-[20px] md:h-[14px] lg:h-[16px] xl:h-[20px] cursor-pointer"
                                        />
                                        <span className="md:text-[10px] lg:text-[12px] xl:text-[14px] leading-[24px] font-normal">
                                            Keep me signed in
                                        </span>
                                    </label>
                                    <Link to={'/forgot-password'} className="hover:underline">
                                        <span className="block h-full md:text-[10px] lg:text-[12px] xl:text-[14px] font-inter leading-[24px] text-[#1E293B] font-medium">
                                            Forgot Password?
                                        </span>
                                    </Link>
                                </div>
                            </div>
                            <button className="w-5/6 md:h-[28px] lg:h-[38px] xl:h-[48px] bg-[#4C6FBF] py-3 px-[60x] rounded cursor-pointer">
                                <span className="block h-full font-inter md:text-[10px] xl:text-sm md:leading-[6px] lg:leading-[14px] xl:leading-[24px] text-center text-white">
                                    Create An Account
                                </span>
                            </button>
                        </form>
                        <div className="w-full flex items-center justify-center">
                            <span className="font-inter md:text-[10px] lg:text-sm xl:text-sm font-normal uppercase">
                                Already registered?
                                <Link to="/login">
                                    <span className="font-inter md:text-[10px] lg:text-sm xl:text-sm font-medium uppercase">
                                        {' '}
                                        Sign In
                                    </span>
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="relative w-1/2 h-full bg-[#F1F5F9] flex flex-col">
                    <div className="h-2/6 flex flex-col gap-[8px] md:py-[32px] lg:py-[40px] xl:py-[48px] md:pl-[60px] lg:pl-[70px] xl:pl-[80px]">
                        <img
                            className="md:w-[128px] lg:w-[138px] xl:w-[142px] lg:h-[46px] xl:h-[48px]"
                            src={logoWithText}
                            alt="Logo with text"
                        />
                        <h4 className="pr-[64px] pl-[12px] text-[#324256] md:text-[16px] lg:text-[20px] xl:text-[24px] text-left font-semibold -tracking-[0,02em] leading-[30px]">
                            Sustainable energy management for a thriving community.
                        </h4>
                        <div className="absolute w-full top-[150.5px]">
                            <img className="w-5/6 h-full" src={voltaSignupImage} alt="main-image" />
                        </div>
                    </div>
                    <span className="mt-auto pb-[2%] font-inter font-normal text-center text-[12px] text-[#68768A] leading-4">
                        Copyright 2022, VoltaRocks All Rights Reserved.
                    </span>
                </div>
            </div>
        </Fragment>
    );
}
