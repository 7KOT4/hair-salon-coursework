document.addEventListener('DOMContentLoaded', () => {
    // 1. Ініціалізація карти (без змін)
    initMap(); 
    
    // 2. Логіка мобільного меню
    const burgerButton = document.querySelector('.burger-menu');
    // ВИПРАВЛЕННЯ: Шукаємо саме список .menu, а не обгортку .nav
    const menuList = document.querySelector('.menu'); 
    const menuLinks = document.querySelectorAll('.menu__link');

    if (burgerButton && menuList) {
        burgerButton.addEventListener('click', () => {
            // Перемикаємо клас active на самому списку меню
            menuList.classList.toggle('active'); 
        });
        
        // Закриття меню при кліку на посилання
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                // Просто видаляємо клас active у списку
                menuList.classList.remove('active');
            });
        });
    }
    
    // 3. Обробка форми (без змін)
    const contactForm = document.querySelector('.contact__form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Запис успішно надіслано! Ми зв\'яжемося з Вами найближчим часом.');
            contactForm.reset();
        });
    }
});

// Функція карти (залишаємо як було)
const salonLat = 50.4447; 
const salonLng = 30.5218; 
const zoomLevel = 15;

function initMap() {
    if (document.getElementById('mapid')) {
        const map = L.map('mapid').setView([salonLat, salonLng], zoomLevel);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);
        L.marker([salonLat, salonLng])
            .addTo(map)
            .bindPopup("<b>Bella Salon</b><br>Хрещатик, 25")
            .openPopup();
    }
}
