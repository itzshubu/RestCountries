function myFunction() {
    let a = document.getElementById("ul");
    a.classList.toggle("scale");
    let b = document.querySelectorAll(".line");
    var i = 0;
    for (i = 0; i < b.length; i++) {
        b[i].classList.toggle("line2");
    }
}

async function main(one, name, country) {
    console.log(name);
    console.log(country);
    console.log(one)
    const url = `https://restcountries.com/v3.1/${name}/${country}?fullText=true`;

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
       
        if (one == false) {
             console.log(result)
             let a = 0;
            let flaglink = result[a].flags.png;
            let countryname = result[a].name.common;
            let capital = result[a].capital[0];
            let coatofArms = result[a].coatOfArms.png;
            let continents = result[a].continents[0];
           
            let languages = Object.values(result[a].languages)
            let location = result[a].maps.googleMaps
            let population = result[a].population
            let carside = result[a].car.side
            let currencyname = Object.values(result[a].currencies)[0].name
            let currencysymbol = Object.values(result[a].currencies)[0].symbol
              console.log(currencyname)
              console.log(currencysymbol)
            

            let div = document.createElement("div")
            div.innerHTML = `<div
            class="h-[100%] w-[95vw] max-w-sm sm:w-[384px]  border border-gray-200 rounded-lg shadow  dark:border-gray-700 bg-[#bdedff] mx-auto">
            <a href="#">
                <img class="my-2 rounded-t-lg mx-auto h-[160px]" src=${flaglink} alt="" />
            </a>
            <div class="p-5">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">${countryname}</h5>
                    <div>
                        <p>Capital City :<span class="font-bold"> ${capital}</span></p>
                        <p>Languages    :<span class="font-bold"> ${languages}</span></p>                   
                        <p>Continents   :<span class="font-bold"> ${continents}</span></p>
                        <p>Currencie    :<span class="font-bold"> ${currencyname} , ${currencysymbol} </span></p>
                        <p>Population   :<span class="font-bold"> ${population}</span></p>
                        <p>Car Side   :<span class="font-bold"> ${carside}</span></p>
                        <P>Location on map :<a href=${location} class="underline text-blue-400"> Location on map</a></P>
                        <p> <img src=${coatofArms} class="mx-auto mt-2" alt="" width="50"></p>
                    </div>
               
            </div>
        </div>`;
           carddiv.innerHTML=""
            carddiv.appendChild(div)
        }
        if (one === true) {
            carddiv.innerHTML = ""
            for (let i = 0; i < 5; i++) {
                let a = Math.floor(Math.random() * 250);
                // elements acced from api
                let flaglink = result[a].flags.png;
                let countryname = result[a].name.common;
                let capital = result[a].capital[0];
                let coatofArms = result[a].coatOfArms.png;
                let continents = result[a].continents[0];
               
                let languages = Object.values(result[a].languages)
                let location = result[a].maps.googleMaps
                let population = result[a].population
                let carside = result[a].car.side
                let currencyname = Object.values(result[a].currencies)[0].name
                let currencysymbol = Object.values(result[a].currencies)[0].symbol
                  console.log(currencyname)
                  console.log(currencysymbol)
                

                let div = document.createElement("div")
                div.innerHTML = `<div
                class="h-[100%] w-[95vw] max-w-sm sm:w-[384px]  border border-gray-200 rounded-lg shadow  dark:border-gray-700 bg-[#bdedff] mx-auto">
                <a href="#">
                    <img class="my-2 rounded-t-lg mx-auto h-[160px]" src=${flaglink} alt="" />
                </a>
                <div class="p-5">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">${countryname}</h5>
                        <div>
                            <p>Capital City :<span class="font-bold"> ${capital}</span></p>
                            <p>Languages    :<span class="font-bold"> ${languages}</span></p>                   
                            <p>Continents   :<span class="font-bold"> ${continents}</span></p>
                            <p>Currencie    :<span class="font-bold"> ${currencyname} , ${currencysymbol} </span></p>
                            <p>Population   :<span class="font-bold"> ${population}</span></p>
                            <p>Car Side   :<span class="font-bold"> ${carside}</span></p>
                            <P>Location on map :<a href=${location} class="underline text-blue-400"> Location on map</a></P>
                            <p> <img src=${coatofArms} class="mx-auto mt-2" alt="" width="50"></p>
    
                        </div>
                   
                </div>
            </div>`;
                carddiv.appendChild(div);
                console.log(div);
            }
            photosearch("europ,asia,middle east")
            photoscountryname.innerHTML = `Countries in Europ,Asia,Middle-east`

        }
    } catch (error) {
        console.error(error);
    }
}
main(true, "", "all");


function country() {
    let a = document.getElementById("text");
    let value = a.value;
    if(value == ""){

    }else{
        main(false, "name", value);
        photosearch(value)
        photoscountryname.innerHTML = `${value}`
    }
}


// Trigger suggestion function when Enter key is pressed
    document.getElementById('text').addEventListener('keypress', function(event) {
        if (event.keyCode === 13) {
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
                    li.onclick = function() {
                        document.getElementById('text').value = country;
                        suggestionsDiv.innerHTML = '';
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
    window.onclick = function(event) {
        if (!event.target.matches('#text')) {
            const suggestionsDiv = document.getElementById('suggestions');
            suggestionsDiv.style.display = 'none';
        }
    };






// api and js for get the photos related to country
 function photosearch (countryname) {
    // Replace 'YOUR_API_KEY' with your actual Pixabay API key
    const apiKey = "your_pixabay_api_key";
     
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

            w100.innerHTML = " ";
            w150.innerHTML = " ";

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
