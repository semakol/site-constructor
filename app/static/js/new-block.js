const newBlock = document.querySelector('.new-block');
const blockBar = document.querySelector('.block-bar');
newBlock.addEventListener('click',()=>{
    blockBar.classList.remove('hidden');
    newBlock.classList.add('hidden');
})

const exit = document.querySelector('.exit');
exit.addEventListener('click',()=>{
    newBlock.classList.remove('hidden');
    blockBar.classList.add('hidden');
})

const page = document.querySelector('.page');
const titleButton = document.querySelector('.title-button');
const headerTemplate = document.querySelector('.header');
titleButton.addEventListener('click',()=>{
    const title = headerTemplate.cloneNode(true);
    
    const trash = title.querySelector('.trash');
    trash.addEventListener('click',()=>{
        title.remove()
    })

    // const onOff = title.querySelector('.on-off');
    // onOff.addEventListener('click',()=>{
    //     if(title.classList.contains('.off')){
    //         title.classList.remove.classList('.off')
    //     }
    //     else{
    //         title.classList.add.classList('.off')
    //     }
    // })
    title.classList.remove('hidden');
    page.appendChild(title);
})