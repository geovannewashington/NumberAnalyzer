const localScope = function() {
    const input = document.querySelector("#input");
    const list = document.querySelector("#flista");
    const btnAdd = document.querySelector("#add-btn");
    const btnFinish = document.querySelector("#finish-btn");
    const resultBox = document.querySelector("#result");
    const resetButton = document.querySelector("#reset-btn");
    const arrayOfNumbers = [];
    
    function appendToList() {
        const inputValue = Number(input.value);

        if (inputValue > 100 || inputValue < 0 || arrayOfNumbers.includes(inputValue) || input.value === '') {
            window.alert("Invalid value or already found in the list.");
            return;
        } 

        if (resultBox.children.length  !== 0) {
            resultBox.textContent = "";
        }

        const optionElement = document.createElement('option');
        optionElement.textContent = `Value ${inputValue} added.`;
        list.appendChild(optionElement);
        
        arrayOfNumbers.push(inputValue);
        input.value = '';
        input.focus();
    }
    
    function displayResults() {
        if (arrayOfNumbers.length == 0) {
            window.alert("Add values before finishing");
            return;
    
        } 

        if (resultBox.children.length  === 0) {
            const maxValue = Math.max(...arrayOfNumbers);
            const minValue = Math.min(...arrayOfNumbers);
            let sum = 0;

            for(let i = 0; i < arrayOfNumbers.length; i++) {
                sum += arrayOfNumbers[i];
            }
            
            let average = sum / arrayOfNumbers.length;

            resultBox.innerHTML = `
                <p>Total, we have ${arrayOfNumbers.length} registered numbers</p>
                <p>The highest value entered was ${maxValue}.</p>
                <p>The lowest value entered was ${minValue}.</p>
                <p>Adding all values, we get ${sum}.</p>
                <p>The average of the entered values is ${average}</p>
            `;

            input.focus();
        }
    }
    
    function resetAll() {
        resultBox.textContent = "";
        list.textContent = "";
        input.value = "";
        arrayOfNumbers.length = 0;
    }
    
    btnAdd.addEventListener("click", appendToList);
    btnFinish.addEventListener("click", displayResults);
    resetButton.addEventListener("click", resetAll);
}

localScope();
