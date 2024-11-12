function showPage(pageNumber) {
    // Hide all pages
    const pages = document.querySelectorAll('.car-page');
    pages.forEach(page => page.style.display = 'none');

    // Show the selected page
    document.getElementById(`car-page-${pageNumber}`).style.display = 'block';
}

function buyCar(carName) {
    alert(`${carName} has been bought!`);
}