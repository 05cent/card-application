import React from 'react';
import classes from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = ({ onCreateCard, onSortCards, onClearCards }) => {
    
    return (
        <header className={classes.Header}>
            <div>
                <button onClick={onCreateCard} className={classes.btnAdd}>add card</button>
                <button onClick={onSortCards} className={classes.btnSort}>sort card</button>
                <button onClick={onClearCards} className={classes.btnClear}>clear cards</button>
            </div>
            <Link className={classes.link} to="RockPaperScissors">RockPaperScissors</Link>
        </header>
    );
};

export default Header;