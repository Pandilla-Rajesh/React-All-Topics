import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

const MainLayout = () => {
  return (
    <div>
        <header>
            <Header/>
        </header>
        <main>
            <Outlet/>
        </main>
        <footer>
          <Footer/>
        </footer>
    </div>
  )
}

export default MainLayout
