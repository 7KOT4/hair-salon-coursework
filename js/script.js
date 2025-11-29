// ====================================
// 1. ІНТЕГРАЦІЯ LEAFLET API (КАРТА)
// ====================================

const storeLat = 50.4501; 
const storeLng = 30.5234; 
const zoomLevel = 13;

function initMap() {
    if (document.getElementById('mapid')) {
        const map = L.map('mapid').setView([storeLat, storeLng], zoomLevel);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);
        L.marker([storeLat, storeLng])
            .addTo(map)
            .bindPopup("<b>Happy Paws Market</b><br>Ми тут!")
            .openPopup();
    }
}

// ====================================
// 2. ІНТЕРАКТИВНІ ЕЛЕМЕНТИ (МОБІЛЬНЕ МЕНЮ)
// ====================================

document.addEventListener('DOMContentLoaded', () => {
    initMap(); 
    
    const burgerButton = document.querySelector('.burger-menu');
    const navMenu = document.querySelector('.nav');

    if (burgerButton && navMenu) {
        burgerButton.addEventListener('click', () => {
            // Додає або прибирає клас 'active', який ми прописали в CSS
            navMenu.classList.toggle('active'); 
        });
        
        // Закриваємо меню, коли клікаємо на посилання
        document.querySelectorAll('.menu__link').forEach(link => {
             link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }
});
