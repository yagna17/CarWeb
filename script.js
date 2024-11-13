// Dynamically set CSS based on branch
const link = document.getElementById("car-style");
if (window.location.href.includes("style-one")) {
    link.href = "./styles/style1.css";
} else if (window.location.href.includes("style-two")) {
    link.href = "./styles/style2.css";
}
//shows the page 
function showPage(pageNumber) {
    document.querySelectorAll('.car-page').forEach(page => page.style.display = 'none');
    document.getElementById(`car-page-${pageNumber}`).style.display = 'block';
}

function buyCar(carName) {
    alert(`Buying Car ${carName}`);
}

showPage(1); // Initialize with the first page