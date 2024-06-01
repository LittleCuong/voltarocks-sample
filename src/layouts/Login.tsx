import { signIn } from 'aws-amplify/auth'
// import { getCurrentUser } from 'aws-amplify/auth';
import { Fragment } from 'react/jsx-runtime';
import { cognitoUserPoolsTokenProvider } from 'aws-amplify/auth/cognito';
import { defaultStorage } from 'aws-amplify/utils';
// Logo & image
import voltaImage from '../assets/volta-img.png';
import logoWithText from '../assets/logo-with-text.png';
import councilAvatar from '../assets/council-avatar.png';

import { Link } from 'react-router-dom';
import { useState } from 'react';

interface form {
    email: string,
    password: string,
}

export default function Login() {

    const [formInput, setFormInput] = useState<form>({email: '', password: ''})

    const handleOnChangeInput = (e: any) => {
        e.preventDefault()
        const name = e.target.name
        const value = e.target.value 
        setFormInput({...formInput, [name] : value})
    }

    const handleSignIn = async() => {
        try {
            await signIn({
                username: formInput.email,
                password: formInput.password,
            })
            cognitoUserPoolsTokenProvider.setKeyValueStorage(defaultStorage);
            // const { username, userId, signInDetails } = await getCurrentUser();
            // console.log("username", username);
            // console.log("user id", userId);
            // console.log("sign-in details", signInDetails);
        } catch (error) {
            console.error();
        }
    }



    return (
        <Fragment>
            <div className="w-full h-screen flex overflow-hidden">
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
                            <img className="w-5/6 h-full" src={voltaImage} alt="main-image" />
                        </div>
                    </div>
                    <span className="mt-auto pb-[2%] font-inter font-normal text-center text-[12px] text-[#68768A] leading-4">
                        Copyright 2022, VoltaRocks All Rights Reserved.
                    </span>
                </div>
                <div className="w-1/2 h-full bg-white flex flex-col items-center justify-center md:pt-[32px] lg:pt-[40px] xl:pt-[48px] md:px-[90px] lg:px-[110px] xl:px-[130px]">
                    <div className="w-full h-full flex flex-col items-center md:gap-[8px] lg:gap-[16px] xl:gap-[32px] 2xl:gap-[32px]">
                        <div className="md:w-[220px] lg:w-[230px] xl:w-[248px] lg:h-[110px] xl:h-[116px] flex flex-col gap-[6px] px-[16px] lg:pb-[20px] xl:pb-[24px] items-center justify-center border-solid border-b-[1px] border-[#E1E7FE]">
                            <img
                                className="md:w-[48px] lg:w-[52px] xl:w-[56px] md:h-[48] lg:h-[52px] xl:h-[56px] cursor-pointer hover:shadow-custom-shadow drop-shadow-md rounded-xl"
                                src={councilAvatar}
                                alt="council-avatar"
                            />
                            <span className="md:text-[16px] lg:text-[20px] xl:text-[24px] leading-[30px] font-semibold text-[#0F172A]">
                                The Council Name
                            </span>
                        </div>
                        <div className="w-full md:h-[52px] lg:h-[60px] xl:h-[68px] flex flex-col items-center lg:gap-[10px] xl:gap-[12px]">
                            <span className="font-medium md:text-[16px] lg:text-[20px] xl:text-[24px] leading-[32px] text-center">
                                Sign in
                            </span>
                            <span className="font-inter md:text-[8px] lg:text-[10px] xl:text-[16px] xl:leading-[24px] text-[#68768A]">
                                Sign in to your account to start using VoltaRocks
                            </span>
                        </div>
                        <form className="w-full flex flex-col items-center md:gap-[16px] lg:gap-[20px] xl:gap-[24px]">
                            <div className="w-full flex flex-col items-start gap-[16px]">
                                <div className="w-full flex flex-col items-start gap-[8px]">
                                    <label className="font-inter font-medium md:text-[10px] lg:text-[12px] xl:text-[14px] text-left">
                                        Email
                                    </label>
                                    <input
                                        onChange={(e) => handleOnChangeInput(e)}
                                        className="w-full md:p-[8px] lg:p-[10px] xl:p-[12px] md:text-[10px] xl:text-[14px] border border-background-1 bg-transparent rounded outline-none"
                                        name="email"
                                        type="email"
                                        placeholder="Type your email"
                                    />
                                </div>
                                <div className="w-full flex flex-col items-start xl:*:gap-[8px]">
                                    <label className="font-inter font-medium md:text-[10px] lg:text-[12px] xl:text-[14px] text-left">
                                        Password
                                    </label>
                                    <input
                                        onChange={(e) => handleOnChangeInput(e)}
                                        className="w-full md:p-[8px] lg:p-[10px] xl:p-[12px] md:text-[10px] xl:text-[14px] border border-background-1 bg-transparent rounded outline-none"
                                        name="password"
                                        type="password"
                                        placeholder="Type your Password"
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
                            <button onClick={handleSignIn} className="w-3/6 md:h-[28px] lg:h-[38px] xl:h-[48px] bg-[#269F77] md:py-2 xl:py-3 md:px-[38px] lg:px-[50px] xl:px-[60x] rounded-[32px] cursor-pointer">
                                <span className="block h-full font-inter md:text-[10px] xl:text-sm md:leading-[14px] lg:leading-[14px] xl:leading-[24px] text-center text-white">
                                    Sign In
                                </span>
                            </button>
                        </form>
                        <div className="w-full flex items-center justify-center">
                            <span className="font-inter md:text-[10px] lg:text-sm xl:text-sm font-normal uppercase">
                                Don't have an account?
                                <Link to="/sign-up">
                                    <span className="font-inter md:text-[10px] lg:text-sm xl:text-sm font-medium uppercase">
                                        {' '}
                                        Sign Up
                                    </span>
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
