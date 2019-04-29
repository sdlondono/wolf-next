

const Header = () => (
    <nav className="flex items-center justify-between flex-wrap bg-primary-wolf p-6">
        {/** ============================= Logo of the company ============================= */}
        <div className="flex items-center flex-no-shrink text-white mr-6">
            <span className="font-semibold text-xl tracking-tight">Wolf</span>
        </div>

        {/** ============================= Hamburger ============================= */}
        <div className="block lg:hidden">
            <button className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-black hover:border-white">
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
            </button>
        </div>

        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
                <a href="/" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-black no-underline">
                    Home
                </a>
            </div>

            {/** =============================  Flex End =============================*/}
            <div>
                <a href="/login" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-black mr-4 no-underline">
                    Inicio
                </a>
                
                <a href="/register" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-black no-underline">
                    Registro
                </a>
            </div>
        </div>
    </nav>
)

export default Header