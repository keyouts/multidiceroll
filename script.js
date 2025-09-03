function rollDice() {
      const dice = document.getElementById('diceType').value;
      const result = Math.floor(Math.random() * dice) + 1;
      const resultDisplay = document.getElementById('result');
      resultDisplay.textContent = result;
      resultDisplay.style.animation = 'pop 0.3s ease';

      const history = document.getElementById('history');
      const timestamp = new Date().toLocaleTimeString();
      const entry = document.createElement('div');
      entry.textContent = `${timestamp} — Rolled D${dice}: ${result}`;
      history.prepend(entry);
    }

    function clearHistory() {
      document.getElementById('history').innerHTML = '';
    }