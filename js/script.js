document.addEventListener('DOMContentLoaded', function () {
    const imageLink = document.querySelector('.linktree-images img');
    imageLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default link behavior
        const url = this.getAttribute('href');
        window.open(url, '_blank'); // Open link in a new tab
    });
});
