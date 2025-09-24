document.addEventListener('DOMContentLoaded', function() {
    
    const registerBtn = document.querySelector('.auth-buttons .btn-primary');
    const loginBtn = document.querySelector('.auth-buttons .btn-secondary');
    const subscribeBtn = document.querySelector('.subscription-card .btn');
    const organizerBtn = document.querySelector('.organizers-section .btn');
    const searchBtn = document.querySelector('.search-bar .btn');

    if(registerBtn) {
        registerBtn.addEventListener('click', () => {
            alert('Відкрилася б форма реєстрації...');
            console.log('Клік по кнопці "Реєстрація"');
        });
    }

    if(loginBtn) {
        loginBtn.addEventListener('click', () => {
            alert('Відкрилася б форма входу...');
            console.log('Клік по кнопці "Вхід"');
        });
    }

    if(subscribeBtn) {
        subscribeBtn.addEventListener('click', () => {
            alert('Відбувся б перехід до оплати підписки...');
            console.log('Клік по кнопці "Оформити підписку"');
        });
    }

    if(organizerBtn) {
        organizerBtn.addEventListener('click', () => {
            alert('Відкрилася б форма для організаторів...');
            console.log('Клік по кнопці "Стати організатором"');
        });
    }
    
    if(searchBtn) {
        searchBtn.addEventListener('click', () => {
            const query = document.querySelector('.search-bar input').value;
            if (query) {
                alert(`Виконується пошук за запитом: "${query}"`);
                console.log(`Пошук: ${query}`);
            } else {
                alert('Будь ласка, введіть запит для пошуку.');
            }
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});