function initJavaScript(){
    var videos = document.getElementsByName("video");
    videos.forEach(initTimeVideo)
    function initTimeVideo(video){
        if(video){
            video.addEventListener('loadeddata', function(){
            updateTime(video); });
            video.addEventListener('timeupdate', function(){
            updateTime(video); }); 
        }   
        
    }
    
    collapseLogo();
}

function playPauseVideo(element){
    var idVideo = element.getAttribute("id")[0];
    var video = document.getElementById(idVideo + "_video");
    var playPauseIcon = document.getElementById(idVideo + "_playPauseIcon");
    if(!video) return;
    if(!playPauseIcon) return;
    
    if(video.paused){
        video.play();   
        video.style="";
        playPauseIcon.setAttribute("class", "fas fa-pause-circle");
    }
    else{
        video.pause();     
        video.style="border: 2px solid #ED4337;";
        playPauseIcon.setAttribute("class", "fas fa-play-circle");
    }
}

function stopVideo(element){
    var idVideo = element.getAttribute("id")[0];
    var video = document.getElementById(idVideo + "_video");
    var playPauseIcon = document.getElementById(idVideo + "_playPauseIcon");
    if(!video) return;
    if(!playPauseIcon) return;
    
    playPauseIcon.setAttribute("class", "fas fa-play-circle");
    video.pause();
    video.currentTime = 0;
}

function goForward(element){
    var idVideo = element.getAttribute("id")[0];
    var video = document.getElementById(idVideo + "_video");
    if(!video) return;
    video.currentTime += 10;
}

function goBackward(element){
    var idVideo = element.getAttribute("id")[0];
    var video = document.getElementById(idVideo + "_video");
    if(!video) return;
    video.currentTime -= 10;
}

function changeVolume(element){
    var idVideo = element.getAttribute("id")[0];
    var video = document.getElementById(idVideo + "_video");
    var value = document.getElementById(idVideo + "_volumeSlider").value;
    var volumeIcon = document.getElementById(idVideo + "_volumeIcon");
    
    if(!video) return;
    if(!value) return;
    if(!volumeIcon) return;
    
    video.muted = false;
    video.volume = value/100;
    
    if(value > 40)
        volumeIcon.setAttribute("class", "fas fa-volume-up");
    else if(value > 20)
        volumeIcon.setAttribute("class", "fas fa-volume-down");
    else
        volumeIcon.setAttribute("class", "fas fa-volume-off");
}

function muteVolume(element){
    var idVideo = element.getAttribute("id")[0];
    var video = document.getElementById(idVideo + "_video");
    var volumeIcon = document.getElementById(idVideo + "_volumeIcon");
    if(!video) return;
    if(!volumeIcon) return;
    if (video.muted){
        changeVolume(video);
    }else{
        video.muted = true;
        volumeIcon.setAttribute("class", "fas fa-volume-mute");
    }
    
}

function updateTime(video){
    var idVideo = video.getAttribute("id")[0];
    var timeText = document.getElementById(idVideo + "_timeVideo");
    var barraProgreso = document.getElementById(idVideo + "_barraProgreso");
    if(!barraProgreso) return;
    if(!video) return;
    if(!timeText) return;
    var time = secToMinutes(video.currentTime);
    timeText.innerHTML = time + "/" + secToMinutes(video.duration);
    var progress = video.currentTime/video.duration * 100;
    barraProgreso.setAttribute("aria-valuenow", progress);
    barraProgreso.setAttribute("style", "width: "+progress+"%;");   
}

function secToMinutes(time){
    var min = parseInt(time/60);
    var sec = parseInt(time - min*60);
    return min + ":" + sec;
     
}

function maximize(element){
    var idVideo = element.getAttribute("id")[0];
    var video = document.getElementById(idVideo + "_video");
    if(!video) return;
    
    if(video.requestFullScreen){
		video.requestFullScreen();
	} else if(video.webkitRequestFullScreen){
		video.webkitRequestFullScreen();
	} else if(video.mozRequestFullScreen){
		video.mozRequestFullScreen();
	}
}

function cargarAudio(){
    var select = document.getElementById('AudioSelec').value;
    var source = document.getElementById('source');
    var audio = document.getElementById('audio');
    
    switch(select){
        case "1":
            source.src="../media/audios/coronavirus.mp3";
            break;
            
        case "2":
            source.src="../media/audios/marselo.mp3";
            
            break;
            
        case "3":
            source.src="../media/audios/no_hay_clase.mp3";
            break;
            
        default:
            source.src="";
            break;
    }
    audio.load();
}

function rotateElement() {
    var elem = document.getElementById("rotate");   
    if(!elem) return;
    var ang = 0;
    var cambio = 0.1
    var id = setInterval(frame, 25);
    function frame() {
        if (false) {
            clearInterval(id);
        } else {
            ang += cambio; 
            elem.style.transform = "rotate(" + ang + "deg)";
            if(ang >= 360 || ang <= 0){
                cambio = -cambio;
            }
        }
    }
}

function centerLogo_G() {

	var element = document.getElementById('letraG');
	if(!element) return;
	var container = document.getElementsByClassName('contenedorLogoAnimation');
	if(!container) return;
    var w_img = element.children[0].clientWidth;
	var w_cont = container[0].clientWidth;
    var h_img = element.children[0].clientHeight;
    var h_cont = container[0].clientHeight;
    element.style.top = (h_cont - h_img*1.1) + "px";
    element.style.right = (w_cont/2 + w_img/2  - 3*w_img/4) + "px";
}

function centerLogo_D() {

	var element = document.getElementById('letraD');
	if(!element) return;
    var container = document.getElementsByClassName('contenedorLogoAnimation');
	if(!container) return;
	var w_img = element.children[0].clientWidth;
	var w_cont = container[0].clientWidth;
    var h_img = element.children[0].clientHeight;
    var h_cont = container[0].clientHeight;
    element.style.top = (h_cont - h_img*1.1) + "px";
    element.style.right = (w_cont/2 - w_img/2 - 3*w_img/4) + "px";
}

function collapseLogo(){
    var elementoD = document.getElementById('letraD');
    var elementoG = document.getElementById('letraG');
    var elementoTitulo = document.getElementById('logoText');
    
    if(!elementoD) return;
    if(!elementoG) return;
    if(!elementoTitulo) return;
    
    if(window.innerWidth > 768){
        centerLogo_D();
        centerLogo_G();
        elementoD.classList.remove('logo_expand');
        elementoG.classList.remove('logo_expand');
        elementoTitulo.classList.add('ocultar');
    }else{
        expandLogo();
    }
    
}

function expandLogo(){
    var elementoD = document.getElementById('letraD');
    var elementoG = document.getElementById('letraG');
    var elementoTitulo = document.getElementById('logoText');
    var tamLetraLogo = 20; //px
    
	if(!elementoD) return;
    if(!elementoG) return;
    if(!elementoTitulo) return;
    
    elementoD.classList.add('logo_expand');
    elementoG.classList.add('logo_expand');
    elementoTitulo.classList.remove('ocultar');
    if(window.innerWidth < 768){
        centerLogo_D();
        centerLogo_G();
    }
    elementoG.style.right = parseFloat(elementoG.style.right) + (elementoTitulo.innerHTML.length / 2.0) * tamLetraLogo + "px";
    elementoD.style.right =  parseFloat(elementoD.style.right) - (elementoTitulo.innerHTML.length / 2.0 - 0.2) * tamLetraLogo + "px";
}

// Proyect list display
function showAnimation() {

	var element = document.getElementsByClassName('show-on-scroll');
	if(!element) return;
	
	var showTiming = window.innerHeight > 768 ? 200 : 40;
	var scrollY = window.pageYOffset;
	var windowH = window.innerHeight;
  
	for(var i=0;i<element.length;i++) {
        var elemClientRect = element[i].getBoundingClientRect(); //
        var elemY = scrollY + elemClientRect.top;
        
        if(scrollY + 100 + windowH - showTiming > elemY) {
            element[i].classList.add('is-show');
        } else if(scrollY + windowH < elemY) {
            element[i].classList.remove('is-show');
        }
	}
}

showAnimation();
document.addEventListener('load', showAnimation, true);
document.addEventListener('scroll', showAnimation, true);
window.addEventListener('load', rotateElement);
document.addEventListener('load', initJavaScript, true);
window.addEventListener('resize', collapseLogo);