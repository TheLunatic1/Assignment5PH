//coin count

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
// let callCoinC = 100;

// function makeCall(serviceName, number) {
//     console.log(`Checking call for ${serviceName} with ${callCoinC} coins`);

//     if (callCoinC < 20) {
//         alert(`Insufficient coins! You need at least 20 coins to make a call to ${serviceName} at ${number}.`);
//         console.log(`Call terminated due to insufficient coins`);
//         return;
//     }

//     callCoinC -= 20;

//     alert(`Calling ${serviceName} at ${number}`);

//     console.log(`Call made to ${serviceName} at ${number} at ${new Date().toLocaleTimeString()}`);
    
//     addToCallHistory(serviceName, number, new Date().toLocaleTimeString());

//     document.getElementById('coin-count').textContent = callCoinC;
// }

let callCoinCount = 100; // Separate coin count for call function
function makeCall(serviceName, number) {
    console.log(`Checking call for ${serviceName} with ${callCoinCount} coins`);
    if (callCoinCount < 20) {
        alert(`Insufficient coins! You need at least 20 coins to make a call to ${serviceName} at ${number}.`);
        console.log(`Call terminated due to insufficient coins`);
        return;
    }
    callCoinCount -= 20;
    alert(`Calling ${serviceName} at ${number}`);
    console.log(`Call made to ${serviceName} at ${number} at ${new Date().toLocaleTimeString()}`);
    addToCallHistory(serviceName, number, new Date().toLocaleTimeString());
    document.getElementById('coin-count').textContent = callCoinCount; // Update display
}

//History Function


//Clear button





