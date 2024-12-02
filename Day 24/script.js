// Fetch data from the public API
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(data => {
                // Get the 'country-list' element to display the countries
                const countryList = document.getElementById('country-list');

                // Loop through the countries and display them
                data.forEach(country => {
                    const li = document.createElement('li');
                    li.textContent = country.name.common;  // Display the country name
                    countryList.appendChild(li);
                });
            })
            .catch(error => {
                console.error('Error fetching countries:', error);
            });
