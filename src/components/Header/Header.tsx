import { FC } from 'react';
import styles from './Header.module.scss';
import Logo from '../../../public/logo.svg';

const Header: FC = () => {

    return (
        <div className={styles.container}>
            <Logo />
        </div>
    )
};

export default Header;