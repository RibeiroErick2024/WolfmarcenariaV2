function Header() {
  return (
<header className="sticky top-0 flex p-4 shadow-md rounded-b-xl dark:border-b dark:border-muted-foreground dark:bg-muted bg-white justify-between items-center">
<div className="w-full flex justify-between items-center max-w-app mx-auto">
        
        {/* LOGO + NOME */}
        <div className="flex items-center space-x-4">
          <a className="dark:bg-gray-50 dark:p-1 dark:rounded-xl flex items-center space-x-4">
            <img 
              src="src/assets/logo.png" 
              alt="Logo" 
              className="rounded max-w-48 max-h-40 h-20"  
            />
            <div className="text-black dark:text-black leading-tight">
              <p className="text-2xl font-bold">Wolf</p>
              <p className="text-sm">Móveis planejados</p>
            </div>
          </a>
        </div>

        {/* NAVBAR */}
        <nav>
          <ul className="flex space-x-6 text-2xl text-black dark:text-black">
            <li><a href="#section" className="hover:underline">Ambientes</a></li>
            <li><a href="#section" className="hover:underline">Contato</a></li>
          </ul>
        </nav>

      </div>
    </header>
  )
}

export default Header