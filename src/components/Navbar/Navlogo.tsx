import React from 'react';
import styles from "./Navlink.module.css";

const Navlogo: React.FC = () => {
    return (
        <div className={styles.logo}>
            <span><img src="src/assets/WOH2.png" alt="logo" width="50px"/></span>
        </div>
    );
}

export default Navlogo;