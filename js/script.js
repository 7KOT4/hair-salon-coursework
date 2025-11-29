// ====================================
// 1. ІНТЕГРАЦІЯ LEAFLET API (КАРТА)
// ====================================

// Координати (Київ, Хрещатик)
const salonLat = 50.4447; 
const salonLng = 30.5218; 
const zoomLevel = 15;

function initMap() {
    // Перевірка, чи є елемент карти на сторінці
    if (document.getElementById('mapid')) {
        const map = L.map('mapid').setView([salonLat, salonLng], zoomLevel);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);

        L.marker([salonLat, salonLng])
            .addTo(map)
            .bindPopup("<b>Bella Salon</b><br>Ми тут!")
            .openPopup();
    }
}

// ====================================
// 2. ЛОГІКА МОБІЛЬНОГО МЕНЮ
// ====================================

document.addEventListener('DOMContentLoaded', () => {
    // Запуск карти
    initMap(); 

    const burgerButton = document.querySelector('.burger-menu');
    const navMenu = document.querySelector('.nav');
    const menuLinks = document.querySelectorAll('.menu__link');

    if (burgerButton && navMenu) {
        
        // Клік на бургер - відкрити/закрити меню
        burgerButton.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Клік на посилання - закрити меню
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }
});
