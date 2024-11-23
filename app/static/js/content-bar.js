function headerClick() {
    document.querySelector('.title-0').textContent = document.querySelector('.input-title-0').value;
    document.querySelector('.title-1').textContent = document.querySelector('.input-title-1').value;
    document.querySelector('.tile-2').textContent = document.querySelector('.input-title-2').value;
    const fileInput = document.querySelector('.input-img');
    if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.querySelector('.header').style.backgroundImage = `url(${e.target.result})`;
        };
        reader.readAsDataURL(fileInput.files[0]);
    }
    document.querySelector('.header-bar').classList.add('hidden');
}
