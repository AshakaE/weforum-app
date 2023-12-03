"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { SunIcon } from '@heroicons/react/24/outline';
import { MoonIcon } from '@heroicons/react/24/solid';


const ThemeSwitcher = () => {
  const {theme, setTheme } = useTheme();

  const isDarkTheme = theme === 'dark'

  // useEffect only runs on the client, so now we can safely show the UI
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
          {isDarkTheme ? <SunIcon className="w-6 h-6" /> : <MoonIcon className="w-6 h-6" />}
      </button>
  )
};

export default ThemeSwitcher;


