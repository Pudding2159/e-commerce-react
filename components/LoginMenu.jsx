import React from 'react'
import Link from 'next/link';
import '../styles/globals.css';
import '../styles/button.css'
import { useSession, signIn, signOut } from "next-auth/react"


function LoginMenu() {
    const { data: session } = useSession()
    const inActiveLink = "custom-button"
    const ActiveLink = "bg-transparent md:rounded-none xs:rounded-xl custom-shadow_1 custom-button";


    if (session) {
        return (

            <div className="h-screen w-auto">
                <div className="flex justify-start items-start">
                    <div className=" h-screen w-auto  bg-transparent shadow-2xl rounded-r-2xl pl-5 xs:pl-2 md:pr-3">

                        <div className="flex flex-col text-center items-center text-[12px] gap-7 sm:relative md:grid grid-rows-5 md:text-xl w-auto  text-[#000000]">

                            <Link href={'/'}>
                                <div className="px-4 row-start-1 md:flex items-center">
                                    <img src="/icons/login.png" className="p-2" style={{ width: '50px', height: "50px" }} />
                                    <div className="hidden md:block">
                                        {session.user.email}
                                    </div>
                                    <div className="sm:block md:hidden">
                                        Account
                                    </div>
                                </div>
                            </Link>

                            <Link href={'/'} className={ActiveLink}>
                                <div className=" px-4 row-start-2 md:flex items-center " >
                                    <img src="/icons/bashboard.png" className="p-2" style={{ width: '50px', height: "50px" }} />
                                    Dashboard
                                </div>
                            </Link>


                            <Link href={'/'} className={inActiveLink}>
                                <div className=" px-4 row-start-3 md:flex items-center" >
                                    <img src="/icons/product.png" className="p-2" style={{ width: '50px', height: "50px" }} />
                                    Product
                                </div>
                            </Link>

                            <Link href={'/'} className={inActiveLink}>
                                <div className="px-4 row-start-4 md:flex items-center" >
                                    <img src="/icons/monitor.png" className="p-2" style={{ width: '50px', height: "50px" }} />
                                    Orders
                                </div>
                            </Link>

                            <Link href={'/'} className={inActiveLink}>
                                <div className=" px-4 row-start-5 md:flex items-center" >
                                    <img src="/icons/settings.png" className="p-2" style={{ width: '50px', height: "50px" }} />
                                    Settings
                                </div>
                            </Link>

                            <Link href={'/'} className={inActiveLink}>
                                <div className=" px-4 row-start-5 md:flex items-center" >
                                    <img src="/icons/logout.png" className="p-2" style={{ width: '50px', height: "50px" }} />
                                    <button className="" onClick={() => signOut()}>LogOut</button>
                                </div>
                            </Link>


                        </div>
                    </div>

                </div>

            </div>
        )
    }

    return <>
        Not signed in <br />
        <button onClick={() => signIn()}>Sign in</button>
    </>
}

export default LoginMenu