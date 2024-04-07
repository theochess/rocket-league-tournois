document.addEventListener('DOMContentLoaded', function () {
    const imageLink = document.querySelector('.linktree-images img');
    imageLink.addEventListener('click', function (event) {
        event.preventDefault();
        const url = this.getAttribute('href');
        window.open(url, '_blank');
    });
});
