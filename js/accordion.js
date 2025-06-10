document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const icon = header.querySelector('.accordion-icon i');

        if (content.classList.contains('active')) {
            content.classList.remove('active');
            icon.classList.remove('fa-minus');
            icon.classList.add('fa-plus');
        } else {
            document.querySelectorAll('.accordion-content').forEach(el => {
                el.classList.remove('active');
            });
            document.querySelectorAll('.accordion-icon i').forEach(i => {
                i.classList.remove('fa-minus');
                i.classList.add('fa-plus');
            });

            content.classList.add('active');
            icon.classList.remove('fa-plus');
            icon.classList.add('fa-minus');
        }
    });
});
