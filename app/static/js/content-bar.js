document.querySelector('.head-color').addEventListener('click', function() {
    this.disabled = false;
});

function headerClick() {
    // Обновление текстовых блоков
    document.querySelector('.title-0').textContent = document.querySelector('.input-title-0').value;
    document.querySelector('.title-1').textContent = document.querySelector('.input-title-1').value;
    document.querySelector('.tile-2').textContent = document.querySelector('.input-title-2').value;

    var fileInput = document.querySelector('.input-img');
    var colorInput = document.querySelector('.head-color');
    var reader = new FileReader();
    if (colorInput.value && !fileInput.files[0]) 
        { // Если выбран цвет, удаляем фоновое изображение и устанавливаем цвет 
            document.querySelector('.header').style.backgroundColor = colorInput.value; 
            document.querySelector('.header').style.backgroundImage = 'none'; 
    }else{
    reader.onload = function(e) {
        document.querySelector('.header').style.backgroundColor = 'transparent';
        document.querySelector('.header').style.backgroundImage = `url(${e.target.result})`;
    }
    reader.readAsDataURL(fileInput.files[0]);
    }
    document.querySelector('.header-bar').classList.add('hidden');
}

