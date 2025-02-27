function headerClick(event) {
    const block = event.target.closest('.block');
    if (block) {
        const title0 = block.querySelector('.title-0');
        const title1 = block.querySelector('.title-1');
        const title2 = block.querySelector('.tile-2');
        const inputTitle0 = block.querySelector('.input-title-0');
        const inputTitle1 = block.querySelector('.input-title-1');
        const inputTitle2 = block.querySelector('.input-title-2');

        if (title0 && inputTitle0) title0.textContent = inputTitle0.value;
        if (title1 && inputTitle1) title1.textContent = inputTitle1.value;
        if (title2 && inputTitle2) title2.textContent = inputTitle2.value;

        const headerBar = block.querySelector('.header-bar');
        if (headerBar) {
            headerBar.classList.add('hidden');
        }
    }
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