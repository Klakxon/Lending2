$(document).ready(function(){
    $(".tittle-11-under button").click(function(){
        $(this).next(".not-visible").slideToggle("slow");
        $(this).hide();
    });
    $(".tittle-11-under .not-visible button").click(function(){
        $(this).parent(".not-visible").prev("button").show();
        $(this).parent(".not-visible").slideToggle("slow");
    });
});

function openTelegram() {
    window.open("https://t.me/Tetiana_Mendus", "_blank");
}


// Функція для відкриття попапу
function openPopup() {
    document.getElementById("myPopup").style.display = "block";
}

// Функція для закриття попапу
function closePopup() {
    document.getElementById("myPopup").style.display = "none";
}

// Додамо обробники подій для всіх елементів з класом .popup-button
const popupButtons = document.querySelectorAll(".popup-button");
popupButtons.forEach(button => {
    button.addEventListener("click", openPopup);
});

// Додамо обробник події для кнопки закриття попапу
document.querySelector(".close-button").addEventListener("click", closePopup);

const scriptURL = 'https://script.google.com/macros/s/AKfycbzqdCYc2I9HrVjkt7Qdn4_X6o61pzf0R5ABQVjWhqUsbdDe0_ECoFZM70yHE7Ai6Otm/exec'

const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => alert("Thank you! your form is submitted successfully." ))
        .then(() => { window.location.reload(); })
        .catch(error => console.error('Error!', error.message));
    openTelegram();
})
