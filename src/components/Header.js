import React from 'react';
import classes from "./Header.module.css";

const Header = ({ onCreateCard, onSortCards }) => {
    return (
        <header className={classes.Header}>
            <button onClick={onCreateCard} className={classes.btn}>add card</button>
            <button onClick={onSortCards} className={classes.btn}>sort card</button>
        </header>
    );
};

export default Header;