// Toggles the scale class on the ul element and the line2 class on all elements with the line class
function myFunction() {
    let a = document.getElementById("ul");
    a.classList.toggle("scale");
    let b = document.querySelectorAll(".line");
    var i = 0;
    for (i = 0; i < b.length; i++) {
        b[i].classList.toggle("line2");
    }
}

// Main function to fetch country data and display it
async function main(one, name, country) {
    console.log(name, country, one);
    let url = name ?
        `https://restcountries.com/v3.1/${name}/${country}?fullText=true` :
        `https://restcountries.com/v3.1/${country}?fullText=true`;

    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Host": "restcountries.com",
        },
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);

        let carddiv = document.getElementById("carddiv");
        carddiv.innerHTML = "";

        if (one === false) {
            displayCountryInfo(result[0], carddiv);
        } else if (one === true) {
            for (let i = 0; i < 5; i++) {
                let randomIndex = Math.floor(Math.random() * result.length);
                displayCountryInfo(result[randomIndex], carddiv);
            }
            photosearch("Europe, Asia, Middle East");
            document.getElementById("photoscountryname").innerText = "Countries in Europe, Asia, Middle-East";
        }
    } catch (error) {
        console.error(error);
    }
}

// Function to display country information
function displayCountryInfo(country, container) {
    const {
        flags,
        name,
        capital,
        coatOfArms,
        continents,
        languages,
        maps,
        population,
        car,
        currencies
    } = country;

    let flaglink = flags.png;
    let countryname = name.common;
    let capitalCity = capital ? capital[0] : "N/A";
    let coatofArmsLink = coatOfArms.png;
    let continent = continents[0];
    let languageList = Object.values(languages).join(", ");
    let location = maps.googleMaps;
    let carSide = car.side;
    let currencyName = Object.values(currencies)[0].name;
    let currencySymbol = Object.values(currencies)[0].symbol;

    let div = document.createElement("div");
    div.innerHTML = `
        <div class="h-[100%] w-[95vw] max-w-sm sm:w-[384px] border border-gray-200 rounded-lg shadow dark:border-gray-700 bg-[#bdedff] mx-auto">
            <a href="#">
                <img class="my-2 rounded-t-lg mx-auto h-[160px]" src="${flaglink}" alt="${countryname}" />
            </a>
             <div class="p-5">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">${countryname}</h5>
                <div>
                    <p>Capital City: <span class="font-bold">${capitalCity}</span></p>
                    <p>Languages: <span class="font-bold">${languageList}</span></p>
                    <p>Continents: <span class="font-bold">${continent}</span></p>
                    <p>Currency: <span class="font-bold">${currencyName}, ${currencySymbol}</span></p>
                    <p>Population: <span class="font-bold">${population}</span></p>
                    <p>Car Side: <span class="font-bold">${carSide}</span></p>
                    <p>Location on map: <a href="${location}" class="underline text-blue-400">Location on map</a></p>
                    <p><img src="${coatofArmsLink}" class="mx-auto mt-2" alt="Coat of Arms" width="50"></p>
                </div>
            </div>
        </div>`;
    container.appendChild(div);
}

// Fetches and displays country data based on user input
function country() {
    let input = document.getElementById("text").value;
    if (input) {
        main(false, "name", input);
        photosearch(input);
        document.getElementById("photoscountryname").innerText = input;
    }
}


// Trigger suggestion function when Enter key is pressed
document.getElementById('text').addEventListener('keypress', function (event) {
    if (event.key === "Enter") {
        let carddiv = document.getElementById("carddiv");
        carddiv.innerHTML = "<h1 class='Loading'>Searching  .......  wait</h1>";
        const w150 = document.getElementById("w150");
        w150.innerHTML = "<h1 class='Loading'>Searching Photos   .......  wait</h1>";
        event.preventDefault();
      // Run your code here
        country()
    }
});







//js to show the suggetion while entering the country 
// List of countries
const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];

// Function to show suggestions
function showSuggestions(input) {
    const suggestionsDiv = document.getElementById('suggestions');
    suggestionsDiv.innerHTML = '';
    if (input.length > 0) {
        const filteredCountries = countries.filter(country =>
            country.toLowerCase().startsWith(input.toLowerCase())
        );
        if (filteredCountries.length > 0) {
            const ul = document.createElement('ul');
            filteredCountries.forEach(country => {
                const li = document.createElement('li');
                li.textContent = country;
                li.onclick = function () {
                    document.getElementById('text').value = country;
                    // suggestionsDiv.innerHTML = '';
                };
                ul.appendChild(li);
            });
            suggestionsDiv.appendChild(ul);
            suggestionsDiv.style.display = 'block';
        } else {
            suggestionsDiv.style.display = 'none';
        }
    } else {
        suggestionsDiv.style.display = 'none';
    }
}


// Close suggestions if clicked outside
window.onclick = function (event) {
    // !event.target.matches('#text')  the code runs in the block when the id of clicked area is not "text" meand input box
    if (!event.target.matches('#text')) {
        const suggestionsDiv = document.getElementById('suggestions');
        suggestionsDiv.style.display = 'none';
    }
};




// api and js for get the photos related to country
function photosearch(countryname) {
    // Replace 'YOUR_API_KEY' with your actual Pixabay API key
    const apiKey = `${api.apikey}`;

    // Replace 'YOUR_COUNTRY_NAME' with the name of the country you want to search for
    const countryName = `${countryname}`

    // Number of results per page
    const perPage = 15;

    // Construct the URL for the Pixabay API request
    const url = `https://pixabay.com/api/?key=${apiKey}&q=${countryName}&per_page=${perPage}`;

    
    // Make a request to the Pixabay API
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
            // Display photos on the webpage
            console.log(data);
            const photosDiv = document.getElementById("photos");

            const w150 = document.getElementById("w150");
            const w100 = document.getElementById("w100");

            // Clear previous results

            w150.innerHTML = " ";
            w100.innerHTML = " ";

            data.hits.forEach((photo) => {
                if (photo.previewWidth == 150) {
                    const div = document.createElement("div");
                    let data = photo.tags;
                    let link = photo.largeImageURL;
                    div.innerHTML = `<a href=${link} ><img src=${photo.previewURL} alt=${photo.alt}></a>  <span> ${data} </span>`;
                    w150.appendChild(div);
                } else {
                    const div = document.createElement("div");
                    let data = photo.tags;
                    div.innerHTML = `<img src=${photo.previewURL} alt=${photo.alt}>  <span> ${data} </span>`;
                    w100.appendChild(div);
                }

                // else {
                //     var img4 = document.createElement("img");
                //     img4.src = photo.previewURL; // Use previewURL for smaller images
                //     img4.alt = photo.tags; // Use tags for alt text
                //     w150.appendChild(img4);
                // }
            });
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
}

// Initial call to main function with default parameters
main(true, "", "all");