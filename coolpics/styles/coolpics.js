const menuButton = document.querySelector(".menu-button");

function toggleMenu() {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);

function handleResize() {
    const menu = document.querySelector(".menu");
    if (window.innerWidth > 1000) {
        menu.classList.remove("hide");
    } else {
        menu.classList.add("hide");
    }
}

handleResize();
window.addEventListener("resize", handleResize);

const closeButton = document.querySelector(".close-viewer");
const viewer = document.querySelector(".viewer");

closeButton.addEventListener("click", function() {
    viewer.classList.add("hide");
});

function viewerTemplate(pic, alt) {
    return `<div class="viewer">
        <button class="close-viewer">X</button>
        <img src="${pic}" alt="${alt}">
    </div>`;
}

function viewHandler(event) {
    const clickedElement = event.target;
    const srcAttribute = clickedElement.getAttribute('src');
    const splitSrc = srcAttribute.split('-');
    const newImageFile = `${splitSrc[0]}-full.jpeg`;
    const altText = clickedElement.getAttribute('alt');
    
    document.body.insertAdjacentHTML("afterbegin", viewerTemplate(newImageFile, altText));
    
    const closeButton = document.querySelector(".close-viewer");
    closeButton.addEventListener("click", closeViewer);
}

function closeViewer() {
    const viewer = document.querySelector(".viewer");
    viewer.remove();
}

const gallery = document.querySelector(".gallery");
gallery.addEventListener("click", viewHandler);
