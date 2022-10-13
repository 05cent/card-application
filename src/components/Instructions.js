import classes from "./Instructions.module.css";

const Instructions = () => {
    return (
        <aside className={classes.Instructions}>
            Press the "add card" button to add the new Card.
            <br />Use the "sort cards" button to sort the Cards by the increase.Press an X icon on the top right to delete them.
        </aside>
    );
};

export default Instructions;