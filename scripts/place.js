document.addEventListener("DOMContentLoaded", () => {
    const lastModifiedElement = document.getElementById("lastModified");
    const currentYear = new Date().getFullYear();

    if (lastModifiedElement) {
        const lastModified = new Date(document.lastModified);
        lastModifiedElement.textContent = `© ${currentYear} | Last Modified: ${lastModified.toLocaleString()}`;
    }

    // Static weather values
    const temperature = 10; // °C
    const windSpeed = 5; // km/h

    function calculateWindChill(temp, wind) {
        return (13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(1);
    }

    const windChillElement = document.querySelector(".weather ul li:nth-child(4)");
    if (temperature <= 10 && windSpeed > 4.8) {
        windChillElement.innerHTML = `<strong>Wind Chill:</strong> ${calculateWindChill(temperature, windSpeed)}°C`;
    } else {
        windChillElement.innerHTML = `<strong>Wind Chill:</strong> N/A`;
    }
});
