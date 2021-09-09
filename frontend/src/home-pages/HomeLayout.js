import React from 'react'
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer/Footer';
import { GlobalStyle } from '../globalStyle';
import ScrollToTop from '../components/ScrollToTop';



const HomeLayout = ({children}) => {
    return (
        <>
            <ScrollToTop/>
            <Sidebar/>
            {children}
            <Footer/>
            <GlobalStyle/>
        </>
    )
}

export default HomeLayout
