import React from 'react';
import BreadCrumbs from '../components/Breadcrumbs';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer/Footer';
import { GlobalStyle } from '../globalStyle';
import { NavPub } from '../components/Navbarpub/NavpubElement';
import ScrollToTop from '../components/ScrollToTop';


const DetailLayout = ({children}) => {
    return (
        <>
            <ScrollToTop/>
            <NavPub/>
            <Sidebar/>
            <BreadCrumbs/>
            {children}
            <Footer/>
            <GlobalStyle/>
        </>
    );
};


export default DetailLayout;
