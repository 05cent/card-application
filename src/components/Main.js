import classes from './Main.module.css';

const Main = ({ cards, onDeleteCard }) => {
    return (
        <main className={classes.Main}>
            {cards.map(c => {
                return (
                    <div key={c.id} className={classes.card}>{c.value}
                        <div className={classes.clearIcon} onClick={() => onDeleteCard(c.id)}>X</div>
                    </div>
                );
            })}
        </main>
    );
};

export default Main;