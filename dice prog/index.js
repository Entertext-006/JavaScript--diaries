function rollDice() {
    const numDice = document.getElementById('numDice').value;
    const ResultsContainer = document.getElementById('Results');
    const DiceImagesContainer = document.getElementById('DiceImages');
    const Results = [];
    const DiceImages = [];

    for (let i = 0; i < numDice; i++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        Results.push(roll);
        DiceImages.push(`<img src="dice_img/${roll}.png" alt="Dice showing ${roll}" />`);
    }
    ResultsContainer.textContent = `dice: ${Results.join(', ')}`;
    DiceImagesContainer.innerHTML = DiceImages.join('');
}