import React, {ReactNode} from 'react';
import styles from "./Navbar.module.css";
import Navlogo from "./Navlogo.tsx";

interface NavbarProps {
    children: ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ children }) => {
    return (
        <div className={styles.navbar}>
            {children}
            <Navlogo></Navlogo>
        </div>
    );
};
export default Navbar;