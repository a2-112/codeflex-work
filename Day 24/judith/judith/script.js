 // Fetch countries and flags using the latest API
 async function fetchCountries() {
    const apiUrl = "https://restcountries.com/v3.1/all";
    try {
        const response = await fetch(apiUrl);

        // Check for a successful response
        if (!response.ok) {
            throw new Error(`Error fetching countries: ${response.status}`);
        }

        // Parse the JSON response
        const countries = await response.json();

        // Get the list container
        const countriesList = document.getElementById("countries-list");

        // Populate the list with country names and flags
        countries.forEach(country => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <span>${country.name.common}</span>
                <img src="${country.flags.svg}" alt="Flag of ${country.name.common}">
            `;
            countriesList.appendChild(listItem);
        });
    } catch (error) {
        console.error("Failed to fetch countries:", error);
    }
}

// Load countries on page load
fetchCountries();