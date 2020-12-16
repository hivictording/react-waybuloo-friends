import React from 'react'
import Navbar from '../common/Navbar/Navbar'
import SideDrawer from '../common/Navbar/SideDrawer'

function Layout({children}) {
    return (
        <div>
            <Navbar />
            <SideDrawer />
            {children}
        </div>
    )
}

export default Layout
