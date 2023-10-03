"use client"

import { useEffect } from 'react'
import { useTheme } from 'next-themes'
import { SunIcon } from '@heroicons/react/24/outline'
import { MoonIcon } from '@heroicons/react/24/outline'

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme()

    const changeTheme = (e) => {
        if (e.target.checked) {
            localStorage.setItem('devlarabar-theme', 'light')
            setTheme('light')
        }
        else {
            localStorage.setItem('devlarabar-theme', 'dark')
            setTheme('dark')
        }
    }

    useEffect(() => {
        const themePref = localStorage.getItem('devlarabar-theme')
        if (themePref === 'light') setTheme('light')
        else if (themePref === 'dark') setTheme('dark')
    }, [])

    return (
        <>
            <label className="swap swap-rotate">
                <input
                    id="toggle"
                    type="checkbox"
                    checked={theme === 'light'}
                    onChange={(e) => changeTheme(e)} />
                <SunIcon className="swap-off stroke-secondary w-8 h-8" />
                <MoonIcon className="swap-on stroke-primary w-8 h-8" />
            </label>
        </>
    )
}

export default ThemeToggle