import classes from './App.module.css';
import { useEffect, useState } from "react";
import { Footer, Header, Instructions, Main } from "./components";

function App() {
    const [cards, setCards] = useState([]);
    
    useEffect(() => {
        setCards(JSON.parse(sessionStorage.getItem("cards") ?? "[]"));
    }, []);
    
    const createCard = () => {
        let newCard = {};
        newCard.id = (cards.length && Math.max(...cards.map(i => i.id)) + 1) || 1;
        newCard.value = Math.round(Math.random() * 1000);
        let newCards = [...cards, newCard];
        setCards(newCards);
        sessionStorage.setItem("cards", JSON.stringify(newCards));//or localStorage
    };
    
    const sortCards = () => {
        let sortedCards = [...cards].sort((a, b) => a.value - b.value);
        setCards(sortedCards);
        sessionStorage.setItem("cards", JSON.stringify(sortedCards));
    };
    
    const deleteCard = id => {
        let newCards = [...cards].filter(el => el.id !== id);
        setCards(newCards);
        sessionStorage.setItem("cards", JSON.stringify(newCards));
    };
    
    const clearCards = () => {
        setCards([]);
        sessionStorage.clear();
    };
    
    return (
        <div className={classes.App}>
            <div className={classes.container}>
                <Header onCreateCard={createCard} onSortCards={sortCards} onClearCards={clearCards} />
                <Main cards={cards} onDeleteCard={deleteCard} />
                <Footer />
            </div>
            <Instructions />
        </div>
    );
}

export default App;
