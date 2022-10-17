import React from 'react';
import classes from "./Header.module.css";

const Header = ({ onCreateCard, onSortCards, onClearCards }) => {
    
    return (
        <header className={classes.Header}>
            <button onClick={onCreateCard} className={classes.btnAdd}>add card</button>
            <button onClick={onSortCards} className={classes.btnSort}>sort card</button>
            <button onClick={onClearCards} className={classes.btnClear}>clear cards</button>
        </header>
    );
};

export default Header;