//retorna si es intersection
const isIntersecting = (entry) => {
    return entry.isIntersecting // true  (inside the screen)
};

const loadImage = (entry) => {
    const container = entry.target; //container (DIV)
    const image = container.querySelector("img"); //first element is the image
    const url = image.dataset.src;
    //load image
    image.src = url;

    //debugger
    //console.log(container.nodeName);
    loadedImages++;
    printLog();
    // un-register the image (unlisten)
    observer.unobserve(container);

}



const observer = new IntersectionObserver((entries) =>{ 
    entries.filter(isIntersecting).forEach(loadImage);

});

//
export const registerImage = (image) => {
 // intersectionObserver -> observer (image)
 observer.observe(image);

};