document.addEventListener("DOMContentLoaded", function() {
   
    const defaultSrc = document.querySelector('.image-btn:first-child').getAttribute('data-src');
    document.querySelector('.main-image').src = defaultSrc;

    
    document.querySelectorAll('.image-btn').forEach(button => {
        button.addEventListener('click', () => {
            const src = button.getAttribute('data-src');
            document.querySelector('.main-image').src = src;
        });
    });
});
