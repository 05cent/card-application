import React, { useState } from 'react';
import classes from "./RockPaperScissors.module.css";

const RockPaperScissors = () => {
    const [userChoice, setUserChoice] = useState('');
    const [computerChoice, setComputerChoice] = useState('');
    const [userPoints, setUserPoints] = useState(0);
    const [computerPoints, setComputerPoints] = useState(0);
    const [result, setResult] = useState('');
    const selections = ['✊', '🖐️', '✌'];
    
    const handleOnClick = choice => {
        setUserChoice(choice);
        randomComputerChoice();
        if (userChoice === '✊' && computerChoice === '🖐️') {
            setComputerPoints(computerPoints + 1);
        } else if (userChoice === '✊' && computerChoice === '✌') {
            setUserPoints(userPoints + 1);
        } else if (userChoice === '🖐️' && computerChoice === '✌') {
            setComputerPoints(computerPoints + 1);
        } else {
            setResult('draw');
        }
    };
    
    const randomComputerChoice = () => {
        setComputerChoice(selections[Math.floor(Math.random() * selections.length)]);
        setResult('');
    };
    
    const clearTotals = () => {
        setUserPoints(0);
        setComputerPoints(0);
        setResult('');
    };
    
    return (
        <div className={classes.ticktacktoe}>
            {selections.map((choice, i) =>
                <button key={i} className={classes.btn} onClick={() => handleOnClick(choice)}>{choice}</button>,
            )}
            <div className={classes.gamers}>
                <div>
                    You {userPoints}
                </div>
                <div>
                    Computer {computerPoints}
                </div>
            </div>
            <button className={classes.reset} onClick={clearTotals}>X</button>
            {result && <h1 className={classes.result}>{result}</h1>}
        </div>
    );
    
};
export default RockPaperScissors;
