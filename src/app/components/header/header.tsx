

const Header = () => {

    const changeTheme = () => {
        let htmlTag = document.querySelector('html')
        const themeNow = htmlTag?.getAttribute("data-theme")

        htmlTag?.setAttribute('data-theme', themeNow == 'dark' ? "light" : 'dark');
    }

    return (
        <div className="btn-info text-white flex h-20 justify-end items-center " >
            <button
                onClick={changeTheme}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-20">
                Поменять тему
            </button>
        </div>
    )
}

export default Header