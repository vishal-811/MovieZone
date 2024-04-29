const Navbar = () => {
    return (
        <div className="fixed top-0 left-0 w-full bg-transparent border-b-2 border-solid border-gray-500 h-16 z-10">
            <div className="container mx-auto p-3 flex flex-row justify-between items-center">
                <h1 className="text-red-500 text-3xl font-bold">MovieZone</h1>
                <input 
                    className="px-4 py-2 w-96 text-lg rounded-full border border-gray-700 focus:outline-none focus:border-blue-500 transition-width duration-300"
                    type="text"
                    placeholder="Search movies, TV, more..."
                />
                <ul className="flex flex-row space-x-10 select-none font-semibold text-lg">
                    <li className="cursor-pointer transition-colors duration-300 hover:text-red-500 transform hover:scale-105 active:text-red-600">HOME</li>
                    <li className="cursor-pointer transition-colors duration-300 hover:text-red-500 transform hover:scale-105 active:text-red-600">MOVIES</li>
                    <li className="cursor-pointer transition-colors duration-300 hover:text-red-500 transform hover:scale-105 active:text-red-600">TV SHOWS</li>
                    <li className="cursor-pointer transition-colors duration-300 hover:text-red-500 transform hover:scale-105 active:text-red-600">BOOKMARK</li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
