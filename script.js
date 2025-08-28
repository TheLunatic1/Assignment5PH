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


//History Function


//Clear button





