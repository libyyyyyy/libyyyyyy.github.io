function changeBackground(imageSrc) {
    document.body.style.backgroundImage = `url(${imageSrc})`;

    const divs = document.querySelectorAll('.pagediv, .descriptiondiv, .maindiv');
    divs.forEach(function(div) {
        div.classList.add('transparent');
    });
}
function SecureMode() {
    var b = document.getElementById("securemode");
    b.onclick = function() {
        win = window.open();
        win.document.title = "Salty Cube's Revamp"
        win.document.body.style.margin = "0%";
        win.document.body.style.height = "100%";
        var iframe = win.document.createElement("iframe");
        iframe.style.border = "none";
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        iframe.style.margin = "0";
        iframe.src = "https://libyyyyyy.github.io/saltycubes"
        win.document.body.appendChild(iframe);
    }
}