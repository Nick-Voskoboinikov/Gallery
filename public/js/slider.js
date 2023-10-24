const scriptRoots=document.querySelectorAll(".slider");

const initSlider = (galleryId) => {
    const img = document.createElement('img');
    img.alt = '';
    img.src = images[activeImage];
    img.setAttribute("onclick","window.location.href='/gallery/show/?name='+((this.src).substring((this.src).indexOf('/public/uploads/') + 16)).replace('/','');");
    sliderPlace.append(img);
    nextImageGenerate();
    prevImageGenerate();
}

const nextImageGenerate = () => {
    let nextImage = activeImage + 1;
    if (nextImage >= images.length) {
        nextImage = 0;
    }
    const img = document.createElement('img');
    img.alt = '';
    img.src = images[nextImage];
    img.setAttribute("onclick","window.location.href='/gallery/show/?name='+((this.src).substring((this.src).indexOf('/public/uploads/') + 16)).replace('/','');");
    sliderPlace.append(img);
}

const prevImageGenerate = (w = false) => {
    let prevImage = activeImage - 1;
    if (prevImage < 0) {
        prevImage = images.length - 1;
    }
    const img = document.createElement('img');
    img.alt = '';
    if (w) img.style.width = 0;
    img.src = images[prevImage];
    img.setAttribute("onclick","window.location.href='/gallery/show/?name='+((this.src).substring((this.src).indexOf('/public/uploads/') + 16)).replace('/','');");
    sliderPlace.prepend(img);
}

const nextSlide = () => {
    if (!flag) return;
    flag = !flag;
    
    activeImage++;
    if (activeImage >= images.length) {
        activeImage = 0;
    }
    nextImageGenerate();

    animate({
        duration: 1000,
        draw: function(progress) {
            scriptRoot.querySelector('.slider-line > img').style.width = (widthOffset * (1- progress))+ 'px';
            scriptRoot.querySelector('.slider-line > img:last-child').style.width = (widthOffset * progress)+ 'px';
        },
        removeElement : scriptRoot.querySelector('.slider-line > img')    
    });
}

const prevSlide = () => {
    if (!flag) return;
    flag = !flag;
    
    activeImage--;
    if (activeImage < 0) {
        activeImage = images.length - 1;
    }
    prevImageGenerate(true);

    animate({
        duration: 1000,
        draw: function(progress) {
            scriptRoot.querySelector('.slider-line > img').style.width = (widthOffset * progress)+ 'px';
            scriptRoot.querySelector('.slider-line > img:last-child').style.width = (widthOffset * (1- progress))+ 'px';
        },
        timing: function(step) {
          return step;
        },
        removeElement :     scriptRoot.querySelector('.slider-line > img:last-child')      
      });
 
}
for (const scriptRootNode of scriptRoots) {
    scriptRoot=scriptRootNode.parentElement;
images=(scriptRoot.querySelector(".files").value).split("*");
galleryId = scriptRoot.id;


activeImage = 0;
sliderPlace = document.querySelector('#'+galleryId+'>.slider >.slider-line');

widthOffset = document.querySelector('#'+galleryId+'>.slider').clientWidth;
sliderPlace.style.width = 3*widthOffset + 'px';
sliderPlace.style.height = widthOffset + 'px';
document.querySelector('#'+galleryId+'>.slider').style.height = widthOffset + 'px';
flag = true;

initSlider(galleryId);


scriptRoot.querySelector('.next-button').addEventListener('click', nextSlide);
scriptRoot.querySelector('.prev-button').addEventListener('click', prevSlide);

}


function animate({duration, draw, removeElement}) {

    let start = performance.now();
  
    requestAnimationFrame(function animate(time) {
      let step = (time - start) / duration;

      if (step > 1) step = 1;
  
      draw(step);
  
      if (step < 1) {
        requestAnimationFrame(animate);
      }
      else {
        removeElement.remove();
        flag = true;
      }
    });
  }