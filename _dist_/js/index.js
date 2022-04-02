/**
 * Lazy Loading Images
 * Powered By:  Dioselyn Colina
 **/

import { registerImage } from "./lazy.js";

const API = 'https://randomfox.ca/floof/';
const mountNode = document.getElementById('images');
const addButton = document.querySelector('#addImage');
const cleanButton = document.querySelector("#cleanImage");

const getPictures = async (URL_API) => {
    try {
        const response = await fetch(URL_API);
        const data = await response.json();
        //console.log(data);
        createImageNode(data.image);
        
    } catch(error) {
        console.error(`El error es ${error}`);
    }
}

//create image node
    const createImageNode = async (urlImage) => {
        const container = document.createElement('div');
        const wrapper =  document.createElement('div');
        wrapper.className = "bg-gray-300 rounded wrapper";
        container.className = "p-4";
        wrapper.style.minHeight = "150px";
        container.style.display = "inline-block";
        const image = document.createElement("img");
        image.className = "mx-auto rounded";
        image.width = 400;
        image.dataset.src = urlImage;
        wrapper.appendChild(image);
        container.appendChild(wrapper);
        registerImage(container);
        appendedImages++;
        printLog();
        mountNode.append(container);
    }
    //Add Image
    const addImage = async () => {
        const newImage = await getPictures(API);
    }

  
    addButton.addEventListener("click", addImage);

    const cleanImages = () => {
        const arrayNodes = mountNode.childNodes; //all nodes that is in the screen
        [...arrayNodes].forEach(child => { //remove child by child
            child.remove();
        });
    }
    
    addButton.addEventListener("click", addImage)
    cleanButton.addEventListener("click", cleanImages)


  



