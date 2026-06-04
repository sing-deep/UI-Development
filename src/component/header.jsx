import { Menu, ShoppingCart, Search, User  } from 'lucide-react';

const Header = () => {
    return (
        <header className='  px-4 py-3 md:px-6 md:py-4 sticky top-0 bg-white '>
            {/* Mobile Layout */}
            <div className='flex flex-col gap-5 lg:hidden'>
                <div className='flex justify-between items-center'>
                    <Menu size={24}/>
                    <div className='flex items-center gap-2'>
                        <div className='w-8 h-8 lg:w-12 lg:h-12 bg-linear-to-br from-blue-600 to-purple-600 rounded-lg lg:rounded-xl'></div>
                        <span className='text-lg lg:text-xl font-semibold'>ModernHome</span>
                    </div>
                    <div className='flex items-center gap-6'>
                        <ShoppingCart size={24}/>
                    </div>
                </div>
            
                <div className='flex bg-gray-100 py-2.5 pr-4 pl-4 rounded-xl gap-2 focus:outline-blue-500'>
                    <Search size={20} color='gray'/>
                    <input type="text" placeholder='Search products...' className='text-gray-400 outline-none ' />
                </div>

            </div>
            {/* Desktop Layout */}
            <div className='hidden lg:flex gap-5 items-center justify-between'>
              
                    {/* Left */}
                    <div className='flex items-center gap-3'>
                        <Menu size={24}/>
                        <div className='flex items-center gap-2'>
                            <div className='w-8 h-8 lg:w-12 lg:h-12 bg-linear-to-br from-blue-600 to-purple-600 rounded-lg lg:rounded-xl'></div>
                            <span className='text-lg lg:text-xl font-semibold'>ModernHome</span>
                        </div>
                    </div>
                   {/* Center Search*/}
                   <div className="flex-1 max-w-xl ">
                        <div className='flex border border-gray-300 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500 py-2.5 pr-4 pl-4 rounded-xl gap-2'>
                            <Search size={20}  className='text-gray-400'/>
                            <input type="text" placeholder='Search products...' className='text-gray-400 outline-none ' />
                        </div>
                    </div>
                    {/* Right*/}
                    <div className='flex items-center gap-6'>
                        <User size={24}/>
                        <ShoppingCart size={24}/>
                    </div>
               

            </div>

           

        </header>
    )
}

export default Header