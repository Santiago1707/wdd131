document.addEventListener("DOMContentLoaded", function () {
    // Update current year and last modified date
    document.getElementById('currentyear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = `Last Modification: ${document.lastModified}`;

    // Product data array
    const products = [
        { id: "fc-1888", name: "Flux Capacitor", averagerating: 4.5 },
        { id: "fc-2050", name: "Power Laces", averagerating: 4.7 },
        { id: "fs-1987", name: "Time Circuits", averagerating: 3.5 },
        { id: "ac-2000", name: "Low Voltage Reactor", averagerating: 3.9 },
        { id: "jj-1969", name: "Warp Equalizer", averagerating: 5.0 }
    ];

    // Populate product dropdown
    const productSelect = document.getElementById("product-name");
    if (productSelect) {
        products.forEach(product => {
            const option = document.createElement("option");
            option.value = product.id; // ID used as value
            option.textContent = product.name; // Name displayed
            productSelect.appendChild(option);
        });
    }

    // Check if on review.html page
    if (window.location.pathname.includes("review.html")) {
        let reviewCount = localStorage.getItem("reviewCount") || 0;
        reviewCount = parseInt(reviewCount) + 1;
        localStorage.setItem("reviewCount", reviewCount);

        // Display review count
        const reviewCounter = document.createElement("p");
        reviewCounter.textContent = `Total Reviews Submitted: ${reviewCount}`;
        document.body.appendChild(reviewCounter);
    }
});
