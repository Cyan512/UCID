import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { cn } from '@utils/cn'
import { GoHome, GoSearch, GoSun, GoMoon } from "react-icons/go";
import { CiUser } from "react-icons/ci";

function App() {
    const [isFocused, setIsFocused] = useState(false);
    const [open, setOpen] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem("theme") || 'light');

    const links = [
        { name: "Home", to: "/" },
        { name: "Archive", to: "/archive" },
        { name: "About", to: "/about" },
        { name: "GitHub", to: "/github" },
    ];

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <header>
            <div className="max-w-container px-4 h-[4.50rem] mx-auto flex items-center justify-between rounded-2xl rounded-t-none shadow">
                <NavLink
                    to="/"
                    className="flex items-center h-[3.5rem]"
                >
                    <GoHome size="1.75rem" strokeWidth={0.5} className="mb-1 mr-2" />
                    UCID
                </NavLink>

                <nav className="hidden md:flex gap-8">
                    {links.map((l) => (
                        <NavLink
                            key={l.name}
                            to={l.to}
                            className={({ isActive }) => cn(
                                "",
                                isActive ? "text-blue-400" : ""
                            )}
                        >
                            {l.name}
                        </NavLink>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <div className={cn(
                        "relative rounded-lg bg-gray-100 transition-all duration-300 ease-in-out",
                        isFocused ? "w-64" : "w-32"
                    )}>
                        <GoSearch size="1.25rem" strokeWidth={0.5} className="absolute text-gray-500 left-3 top-1/2 transform -translate-y-1/2" />
                        <input
                            type="text"
                            placeholder="Search..."
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                            className="pl-10 pr-3 py-3 outline-none text-gray-500 w-full"
                        />
                    </div>
                    <button onClick={toggleTheme} className="cursor-pointer">
                        {theme === 'dark' ? <GoSun size="1.25rem" /> : <GoMoon size="1.25rem" />}
                    </button>
                    <button className="cursor-pointer">
                        <CiUser size="1.25rem" strokeWidth={0.5} />
                    </button>
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden flex flex-col justify-center items-center gap-1 w-6 h-6"
                    >
                        <span
                            className={cn(
                                "block h-0.5 w-5 bg-black transition-all duration-300 ease-in-out",
                                open && "rotate-45 translate-y-1.5"
                            )}
                        />
                        <span
                            className={cn(
                                "block h-0.5 w-5 bg-black transition-all duration-300 ease-in-out",
                                open && "opacity-0"
                            )}
                        />
                        <span
                            className={cn(
                                "block h-0.5 w-5 bg-black transition-all duration-300 ease-in-out",
                                open && "-rotate-45 -translate-y-1.5"
                            )}
                        />
                    </button>
                </div>
            </div>
            <div className={cn(
                "fixed top-0 left-0 h-full bg-white transition-all duration-300 ease-in-out",
                open ? "translate-x-0" : "-translate-x-full"
            )}>
                <nav className="">
                    {links.map((l) => (
                        <NavLink
                            key={l.name}
                            to={l.to}
                            className={({ isActive }) => cn(
                                "",
                                isActive ? "text-blue-400" : ""
                            )}
                        >
                            {l.name}
                        </NavLink>
                    ))}
                </nav>
            </div>
        </header>
    );
}

export default App;
