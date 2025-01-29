function changeBackground(imageSrc) {
    document.body.style.backgroundImage = `url(${imageSrc})`;

    const divs = document.querySelectorAll('.pagediv, .descriptiondiv, .maindiv');
    divs.forEach(function(div) {
        div.classList.add('transparent');
    });
}