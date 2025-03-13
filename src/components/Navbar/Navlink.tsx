import React from "react";
import styles from "./Navlink.module.css";
import {Link} from "react-router-dom";
type NavlinkProps = {
    name: string;
    linkTo: string;
}
const Navlink: React.FC<NavlinkProps> = ({ linkTo, name }) => {
    return (
        <div className={styles.link}>
            <Link to={linkTo}>{name}</Link>
        </div>
    )
}

export default Navlink