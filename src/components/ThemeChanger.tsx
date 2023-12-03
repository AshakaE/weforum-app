'use client'

import { useTheme } from 'next-themes'
import { RiMoonFill, RiSunFill } from 'react-icons/ri'

const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme()

    const isDarkTheme = theme === 'dark'

    const handleThemeToggle = () => {
        if (isDarkTheme) {
            setTheme('light')
        } else {
            setTheme('dark')
        }
    }

    return (
        <button
            type='button'
            className='hidden xl:flex cursor-pointer w-9 h-9  justify-center items-center rounded-md bg-white px-3 py-2 text-sm text-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 dark:bg-gray-800 hover:bg-gray-50 dark:text-white/90'
            onClick={handleThemeToggle}
            aria-label='Theme Switcher'
        >
            {isDarkTheme ? <RiSunFill size={20} /> : <RiMoonFill size={20} />}
        </button>
    )
}

export default ThemeSwitcher
