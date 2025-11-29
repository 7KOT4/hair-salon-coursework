// ====================================
// 1. ІНТЕГРАЦІЯ LEAFLET API (КАРТА)
// ====================================

// Координати для прикладу (вул. Хрещатик, 25, Київ)
const salonLat = 50.4447; 
const salonLng = 30.5218; 
const zoomLevel = 15;

// Функція ініціалізації карти
function initMap() {
    if (document.getElementById('mapid')) {
        const map = L.map('mapid').setView([salonLat, salonLng], zoomLevel);

        // Додавання шару тайлів (OpenStreetMap)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);

        // Додавання маркера
        L.marker([salonLat, salonLng])
            .addTo(map)
            .bindPopup("<b>Bella Salon</b><br>Хрещатик, 25")
            .openPopup();
    }
}


// ====================================
// 2. ІНТЕРАКТИВНІ ЕЛЕМЕНТИ (МОБІЛЬНЕ МЕНЮ ТА ФОРМА)
// ====================================

document.addEventListener('DOMContentLoaded', () => {
    // 1. Ініціалізація карти
    initMap(); 
    
    // 2. Логіка мобільного меню
    const burgerButton = document.querySelector('.burger-menu');
    const navMenu = document.querySelector('.nav');
    const menuLinks = document.querySelectorAll('.menu__link');

    if (burgerButton && navMenu) {
        burgerButton.addEventListener('click', () => {
            // Додає/видаляє клас 'active' для відображення мобільного меню
            navMenu.classList.toggle('active'); 
        });
        
        // Закриття меню при кліку на посилання
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                const parentNav = link.closest('.nav');
                if (parentNav && parentNav.classList.contains('active')) {
                    parentNav.classList.remove('active');
                }
            });
        });
    }
    
    // 3. Обробка форми (імітація)
    const contactForm = document.querySelector('.contact__form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Запис успішно надіслано! Ми зв\'яжемося з Вами найближчим часом.');
            contactForm.reset();
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    // Знаходимо елементи
    const burgerButton = document.querySelector('.burger-menu');
    const navMenu = document.querySelector('.nav');
    const menuLinks = document.querySelectorAll('.menu__link');

    // Перевіряємо, чи вони існують на сторінці
    if (burgerButton && navMenu) {
        
        // 1. При кліку на бургер -> відкрити/закрити меню
        burgerButton.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // 2. При кліку на будь-який пункт меню -> закрити меню
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }
});
