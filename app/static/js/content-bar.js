function headerClick() {
    // Обновление текстовых блоков
    document.querySelector('.title-0').textContent = document.querySelector('.input-title-0').value;
    document.querySelector('.title-1').textContent = document.querySelector('.input-title-1').value;
    document.querySelector('.tile-2').textContent = document.querySelector('.input-title-2').value;
    
    document.querySelector('.header-bar').classList.add('hidden');
}

function infoClick() {
    // Обновление текстовых блоков
    document.querySelector('.info-h2').textContent = document.querySelector('.input-info-0').value;
    document.querySelector('.info-p').textContent = document.querySelector('.input-info-1').value;

    document.querySelector('.info-bar').classList.add('hidden');
}

function prospectsClick() {
    // Обновление текстовых блоков
    document.querySelector('.prospects-h2').textContent = document.querySelector('.input-prospects-0').value;
    document.querySelector('.prospects-p').textContent = document.querySelector('.input-prospects-1').value;

    document.querySelector('.prospects-bar').classList.add('hidden');
}

function buttonClick() {
    // Обновление текстовых блоков
    document.querySelector('.really-button').textContent = document.querySelector('.input-button-0').value;
    document.querySelector('.button-a').href = document.querySelector('.input-button-1').value;

    document.querySelector('.button-bar').classList.add('hidden');
}

function contactClick() {
    // Обновление текстовых блоков
    document.querySelector('.tel').textContent = document.querySelector('.input-contact-0').value;
    document.querySelector('.email').textContent = document.querySelector('.input-contact-1').value;
    document.querySelector('.addres').textContent = document.querySelector('.input-contact-2').value;
    document.querySelector('.vk').textContent = document.querySelector('.input-contact-3').value;
    document.querySelector('.vk').href = document.querySelector('.input-contact-3').value;
    document.querySelector('.telegram').textContent = document.querySelector('.input-contact-4').value;
    document.querySelector('.telegram').href = document.querySelector('.input-contact-4').value;
    document.querySelector('.whatsap').textContent = document.querySelector('.input-contact-5').value;
    document.querySelector('.whatsap').href = document.querySelector('.input-contact-5').value;

    document.querySelector('.contact-bar').classList.add('hidden');
}