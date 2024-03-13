import React, { ReactNode } from 'react';
import { Header, Footer } from '../partials/index';

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
