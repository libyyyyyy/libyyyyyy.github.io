function changeBackground(imageSrc) {
    document.body.style.backgroundImage = `url(${imageSrc})`;

    const divs = document.querySelectorAll('.pagediv, .descriptiondiv, .maindiv');
    divs.forEach(function(div) {
        div.classList.add('transparent');
    });
}
function openIframeInNewWindow() {
    // Open a new window with about:blank
    const newWindow = window.open('about:blank', '_blank');

    // Create an iframe element
    const iframe = newWindow.document.createElement('iframe');

    // Set the iframe attributes to make it fill the entire page
    iframe.src = 'https://libyyyyyy.github.io/saltycubes/';  // Replace with the desired website URL
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';

    // Append the iframe to the new window's document
    newWindow.document.body.appendChild(iframe);
  }

  // Function to be called when the link is clicked
  function SecureMode() {
    // Call the function to open the iframe in a new window
    openIframeInNewWindow();
  }