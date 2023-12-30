const contents = document.getElementsByClassName("content");
for (let i=0;i<contents.length;i++) {
    let content = contents[i];
    content.addEventListener('click', ()=>{
        if(content.classList.contains('night')){
            content.classList.remove('night');
        }else if(content.classList.contains('evening')){
            content.classList.remove('evening');
            content.classList.add('night');
        }else if(content.classList.contains('active')){
            content.classList.remove('active');
            content.classList.add('evening');
        } else {
            content.classList.add('active');
        }
    })
}
