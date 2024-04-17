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