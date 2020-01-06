eventListeners();

function eventListeners(){
    const ui = new UI();

    // nav button
    document.querySelector('.navBtn').addEventListener('click',function(e){
        ui.showNav();
    });

    // video constrols
    document.querySelector('.video__switch').addEventListener('click',function(){
        ui.videoControls();
    })
}

function UI(){

}

// show nav
UI.prototype.showNav =  function(){
    document.querySelector('.nav').classList.toggle('nav--show');
}

// video controls
UI.prototype.videoControls = function(){
    let btn = document.querySelector('.video__switch-btn');
    let video = document.querySelector('.video__item');

    if(!btn.classList.contains('btnSlide')){
        btn.classList.add('btnSlide');
        video.pause();
    }
    else{
        btn.classList.remove('btnSlide');
        video.play();
    }
}