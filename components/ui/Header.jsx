"use client"

import ThemeToggle from "./ThemeToggle"
import Link from "next/link"
import { ArrowTopRightOnSquareIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import { useState } from "react"

const Header = () => {
    const [dropdown, setDropdown] = useState(false)

    return (
        <div className="gradient-bg pb-[2px] fixed top-0 left-0 w-full">
            <header className="flex justify-between gap-5 items-center w-full pt-4 pb-1 sm:py-5 px-8 sm:px-16 bg-neutral">

                <div className="sm:hidden collapse">
                    <input type="checkbox" onClick={() => setDropdown(!dropdown)} />
                    <div className="collapse-title text-xl font-medium p-0">
                        <button className="bg-base-200 rounded-full p-2">{dropdown ? <XMarkIcon className="w-8 h-8" /> : <Bars3Icon className="w-8 h-8" />}</button>
                    </div>
                    <div className="collapse-content p-0">
                        <ul className="flex flex-col gap-2">
                            <li>
                                <a href="#about">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#portfolio">
                                    Portfolio
                                </a>
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
                                <a href="#contactmobile">
                                    Contact
                                </a>
                            </li>
                            <li>
                                <ThemeToggle />
                            </li>
                        </ul>
                    </div>
                </div>

                <nav className="hidden sm:block text-sm">
                    <ul className="flex items-center gap-10">
                        <li>
                            <Link href="#about">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="#portfolio">
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
                            <Link href="#contact">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="hidden sm:block">
                    <ThemeToggle />
                </div>
            </header>
        </div>
    )
}

export default Header