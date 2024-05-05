

function about() {
  alert("Ma'lumotlar yaqin kunlarda joylanadi, e'tiboringiz uchun rahmat !!!");
}

// Sahifa to'liq yuklansa
window.addEventListener('load', function () {
    // Loader div elementini tanlash
    var loaderContainer = document.getElementById('loader-container');

    this.setTimeout(function(){
        // Loader div elementini yashirish
        loaderContainer.style.display="none";
    },200)

});
