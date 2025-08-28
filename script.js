//coin count


//copy count


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

//copy count


//call Function


//History Function


//Clear button





