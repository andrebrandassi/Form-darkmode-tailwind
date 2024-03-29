import {MoonIcon, SunIcon} from "@heroicons/react/24/solid"
import { useEffect } from "react";

const ToggleTheme = () => {
    const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches
    const pageClasses = document.documentElement.classList

    useEffect(() => {
        systemPreference && pageClasses.add('dark')
    })    
    const toggleIcon = () => {
        pageClasses.toggle('dark')
    }

  return (
    <div className="hidden sm:block">
      <MoonIcon className="h-8 text-gray-100 block cursor-pointer dark:hidden" onClick={toggleIcon} />
      <SunIcon className="h-8 text-gray-100 hidden cursor-pointer dark:block " onClick={toggleIcon} />
    </div>
  );
};

export default ToggleTheme
