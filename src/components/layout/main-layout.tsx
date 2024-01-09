import React, { ReactNode } from 'react';
import Header from '../partials/header';
import Footer from '../partials/footer';

type MainLayoutPropType = {
    children: ReactNode;
};

const MainLayout: React.FC<MainLayoutPropType> = (props) => {
    return (
        <>
            <Header />
            {props.children}
            <Footer />
        </>
    );
};

export default MainLayout;
