import ToggleTheme from "../ToggleTheme"

const Header = ({user}) => {
    return (
        <div className="flex h-20 justify-between items-center bg-alura-200 dark:bg-dark-200 px-5 sm:rounded-xl sm:m-5">
            <span className="text-gray-100">Hello, {user?.name || "User"}</span>
            <h1 className="text-gray-100 text-xl sm:hover:text-2xl sm:cursor-pointer">Alura, News</h1>
            <ToggleTheme/>
        </div>
    )
}

export default Header