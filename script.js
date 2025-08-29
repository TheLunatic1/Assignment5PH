

//copy count
let copyC = 0;
function copyNumber(number) {
    copyC++;
    alert(`Copied ${number} to clipboard!!!`);
    const tempInput = document.createElement('input');
    document.body.appendChild(tempInput);
    tempInput.value = number;
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    document.getElementById('copy-count').textContent = `${copyC} Copy`;
}

//heart count
let heartC = 0;
function toggleHeart(card) {
    heartC++;
    document.getElementById('heart-count').textContent = heartC;
}

document.querySelectorAll('.card').forEach(card => {
    const heart = card.querySelector('img[alt="Heart"]');
    heart.addEventListener('click', () => toggleHeart(card));
}); 


//call Function
//coin count
let callCoinC = 100;

function makeCall(serviceName, number) {
    console.log(`Checking call for ${serviceName} with ${callCoinC} coins`);

        if (callCoinC < 20) {
            alert(`Insufficient coins! You need at least 20 coins to make a call to ${serviceName} at ${number}.`);
            console.log(`Call terminated due to insufficient coins`);
            return;
        }

    callCoinC -= 20;

    alert(`Calling ${serviceName} at ${number}`);

    console.log(`Call made to ${serviceName} at ${number} at ${new Date().toLocaleTimeString()}`);
    
    addToCallHistory(serviceName, number, new Date().toLocaleTimeString());

    document.getElementById('coin-count').textContent = callCoinC;
}


//History Function
function addToCallHistory(serviceName, number, time) {
    const history = document.getElementById('call-history');
    // call history-parent
    const entry = document.createElement('div');
    entry.style.backgroundColor = '#FAFAFA';
    entry.style.borderRadius = '8px';
    entry.style.padding = '8px';
    entry.style.display = 'flex';
    entry.style.flexDirection = 'row';
    entry.style.justifyContent = 'space-between';
    entry.style.minHeight = '83px';
    entry.style.alignItems = 'center';

    // service and number
    const leftContainer = document.createElement('div');
    leftContainer.style.display = 'flex';
    leftContainer.style.flexDirection = 'column';
    leftContainer.style.justifyContent = 'space-between';

    // service
    const serviceDiv = document.createElement('div');
    serviceDiv.style.fontWeight = 'bold';
    serviceDiv.textContent = serviceName;

    // number
    const numberDiv = document.createElement('div');
    numberDiv.style.fontSize = '24px';
    numberDiv.style.fontWeight = 'bold';
    numberDiv.textContent = number;

    leftContainer.appendChild(serviceDiv);
    leftContainer.appendChild(numberDiv);

    // time
    const timeDiv = document.createElement('div');
    timeDiv.style.fontSize = '14px';
    timeDiv.style.color = '#666';
    timeDiv.textContent = time;

    entry.appendChild(leftContainer);
    entry.appendChild(timeDiv);


    history.prepend(entry);
}


//Clear button
document.getElementById('clear-history').addEventListener('click', function() {
    document.getElementById('call-history').innerHTML = '';
});




