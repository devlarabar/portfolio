"use client"

import ThemeToggle from "./ThemeToggle"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowTopRightOnSquareIcon, Bars3Icon, XMarkIcon, DocumentCheckIcon } from "@heroicons/react/24/outline"
import { useState } from "react"

const Header = () => {
    const [dropdown, setDropdown] = useState(false)
    const pathname = usePathname()

    return (
        // <div className="fixed top-5 right-5 bg-neutral p-3 rounded-full w-14 h-14">
        //     <ThemeToggle />
        // </div>
        <div className="gradient-bg pb-[2px] fixed top-0 left-0 w-full">
            <header className="flex justify-between gap-5 items-center w-full pt-4 pb-1 sm:py-5 px-8 sm:px-16 bg-neutral">

                <div className="sm:hidden collapse">
                    <input type="checkbox" onClick={() => setDropdown(!dropdown)} className="p-0 m-0" />
                    <div className="collapse-title text-xl font-medium p-0">
                        <button className="bg-base-200 rounded-full p-2">{dropdown ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-7 h-7" />}</button>

                    </div>
                    <div className="collapse-content px-1">
                        <ul className="flex flex-col gap-2">
                            <li className="text-xl font-extrabold text-primary">
                                Lara Alexander
                            </li>
                            <li className="flex gap-5 lg-plus:gap-3 items-center">
                                <a href="https://github.com/devlarabar" className="flex gap-2 items-center" aria-label="GitHub">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6">
                                        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" className="fill-current hover:fill-accent" />
                                    </svg>
                                    <span className="hidden xs:block ">GitHub</span>
                                </a>
                            </li>
                            <li className="flex gap-5 lg-plus:gap-3 items-center">
                                <a href="https://twitter.com/devlarabar" className="flex gap-2 items-center" aria-label="X/Twitter">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6">
                                        <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" className="fill-current hover:fill-accent" />
                                    </svg>
                                    <span className="hidden xs:block ">Twitter</span>
                                </a>
                            </li>
                            <li className="flex gap-5 lg-plus:gap-3 items-center">
                                <a href="https://www.linkedin.com/in/lara-sa/" className="flex gap-2 items-center" aria-label="LinkedIn">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6">
                                        <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" className="fill-current hover:fill-accent" />
                                    </svg>
                                    <span className="hidden xs:block ">LinkedIn</span>
                                </a>
                            </li>
                            <li className="flex gap-5 lg-plus:gap-3 items-center">
                                <a href="/resume/Lara-Alexander_Resume.pdf" target="_blank" className="flex gap-2 items-center" aria-label="Resume">
                                    <DocumentCheckIcon className="w-6 h-6" />
                                    <span className="hidden xs:block ">Resume</span>
                                </a>
                            </li>
                            <li>
                                <ThemeToggle />
                            </li>

                            {/* <li>
                                <Link
                                    href={`${pathname}#about`}
                                    aria-label="About"
                                    title="About">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={`${pathname}#portfolio`}
                                    aria-label="Portfolio"
                                    title="Portfolio">
                                    Portfolio
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/resume/Lara-Alexander_Resume.pdf"
                                    target="_blank"
                                    className="flex items-center gap-1"
                                >
                                    Resume
                                    <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={`${pathname}#contactmobile`}
                                    aria-label="Contact"
                                    title="Contact">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <ThemeToggle />
                            </li> */}
                        </ul>
                    </div>
                </div>

                <nav className="hidden sm:block text-sm">
                    <ul className="flex items-center gap-10">
                        <li className="text-xl font-extrabold text-primary">
                            <span className="hidden mdlg:block">Lara Alexander</span>
                            <span className="mdlg:hidden">LA</span>
                        </li>
                        <li className="flex gap-5 lg-plus:gap-3 items-center">
                            <a href="https://github.com/devlarabar" className="flex gap-2 items-center" aria-label="GitHub">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="hidden lg:block w-6 h-6">
                                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" className="fill-current hover:fill-accent" />
                                </svg>
                                <span className="hidden xs:block ">GitHub</span>
                            </a>
                        </li>
                        <li className="flex gap-5 lg-plus:gap-3 items-center">
                            <a href="https://twitter.com/devlarabar" className="flex gap-2 items-center" aria-label="X/Twitter">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="hidden lg:block w-6 h-6">
                                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" className="fill-current hover:fill-accent" />
                                </svg>
                                <span className="hidden xs:block ">Twitter</span>
                            </a>
                        </li>
                        <li className="flex gap-5 lg-plus:gap-3 items-center">
                            <a href="https://www.linkedin.com/in/lara-sa/" className="flex gap-2 items-center" aria-label="LinkedIn">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="hidden lg:block w-6 h-6">
                                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" className="fill-current hover:fill-accent" />
                                </svg>
                                <span className="hidden xs:block ">LinkedIn</span>
                            </a>
                        </li>
                        <li className="flex gap-5 lg-plus:gap-3 items-center">
                            <a href="/resume/Lara-Alexander_Resume.pdf" target="_blank" className="flex gap-2 items-center" aria-label="Resume">
                                <DocumentCheckIcon className="hidden lg:block w-6 h-6" />
                                <span className="hidden xs:block ">Resume</span>
                            </a>
                        </li>
                        {/* <li>
                            <Link
                                href={`${pathname}#about`}
                                aria-label="About"
                                title="About">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={`${pathname}#portfolio`}
                                aria-label="Portfolio"
                                title="Portfolio">
                                Portfolio
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/resume/Lara-Alexander_Resume.pdf"
                                target="_blank"
                                className="flex items-center gap-1"
                            >
                                Resume
                                <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={`${pathname}#contact`}
                                aria-label="Contact"
                                title="Contact">
                                Contact
                            </Link>
                        </li> */}
                    </ul>
                </nav>
                <div className="hidden sm:block">
                    <ThemeToggle />
                </div>
            </header>
        </div >
    )
}

export default Header