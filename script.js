//shows the page 
function showPage(pageNumber) {
    document.querySelectorAll('.car-page').forEach(page => page.style.display = 'none');
    document.getElementById(`car-page-${pageNumber}`).style.display = 'block';
}

function buyCar(carName) {
    alert(`Buying Car ${carName}`);
}

showPage(1); // Initialize with the first page