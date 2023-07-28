let sections = document.querySelectorAll('section');
let navbar = document.querySelectorAll('header nav a');

window.onscroll = ()=>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navbar.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ' ] ').classList.add('active');
            })
        }
    })
}



const typed = new Typed('.multi-text',{
    strings: ['Coder','Frontend Developer','Youtuber','Blogger'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay:1000,
    loop:true

})

