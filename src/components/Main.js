import classes from './Main.module.css';

const Main = ({ cards, onDeleteCard }) => {
    return (
        <main className={classes.Main}>
            {cards.map(card => {
                return (
                    <div key={card.id} className={classes.card}>{card.value}
                        <div className={classes.clearIcon} onClick={() => onDeleteCard(card.id)}>X</div>
                    </div>
                );
            })}
        </main>
    );
};

export default Main;