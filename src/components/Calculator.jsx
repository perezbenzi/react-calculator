import React from "react";
import { Board } from "./Board";
import { Display } from "./Display";

import styles from "../css/calculator.module.css";

export const Calculator = () => {
    return (
        <div className={styles.calculator}>
            <Display />
            <Board />
        </div>
    );
};
