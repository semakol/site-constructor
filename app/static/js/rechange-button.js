function OpenButton(){
    document.querySelector('.open-internship').classList.add('hidden');
    document.querySelector('.close-internship').classList.remove('hidden');
}

function CloseButton(){
    document.querySelector('.open-internship').classList.remove('hidden');
    document.querySelector('.close-internship').classList.add('hidden');
}