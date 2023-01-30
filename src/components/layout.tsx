import { FC } from 'react';
import Header from './Header/Header';
import { ILayout } from '@/interfaces/layout';

const Layout: FC<ILayout> = ({ children }) => {

    return (
        <>
            <Header />
            <main>{children}</main>
            <footer>KupujemProdajem © 2022 All rights reserved</footer>
        </>
    )
};

export default Layout;