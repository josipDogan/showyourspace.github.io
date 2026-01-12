// Remove hidden class and ensure menu is visible
document.addEventListener('DOMContentLoaded', function() {
    const menu = document.getElementById('menu');
    if (menu) {
        menu.classList.remove('hidden');
        
        // Force LI elements to be inline-block
        const items = menu.querySelectorAll('li');
        items.forEach(function(item) {
            item.style.display = 'inline-block';
            item.style.marginRight = '1.5rem';
        });
    }
});