import React from 'react'

const Header = () => {
    return (
        <header className="w-full bg-primary h-12">
            <div className="w-full h-full max-w-screen-lg mx-auto text-white text-2xl font-semibold flex justify-start items-center px-8">
                <div>
                    <a href="/">
                        Weather7days
                    </a>                    
                </div>
            </div>            
            
        </header>
    )
}

export default Header
