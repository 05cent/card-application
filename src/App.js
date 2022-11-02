import classes from './App.module.css';
import React, { useEffect, useState } from "react";
import { Footer, Header, Instructions, Main } from "./components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RockPaperScissors from "./components/RockPaperScissors";

function App() {
    const [cards, setCards] = useState([]);
    
    useEffect(() => {
        const storageCards = sessionStorage.getItem("cards");
        if (storageCards)
            setCards(JSON.parse(storageCards));
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
        <Router>
            <div className={classes.App}>
                <div className={classes.container}>
                    <Header onCreateCard={createCard} onSortCards={sortCards} onClearCards={clearCards} />
                    <Routes>
                        <Route path="/" element={null} />
                        <Route path="/RockPaperScissors" element={<RockPaperScissors />} />
                    </Routes>
                    <Main cards={cards} onDeleteCard={deleteCard} />
                    <Footer />
                </div>
                <Instructions />
            </div>
        </Router>
    );
}

export default App;
