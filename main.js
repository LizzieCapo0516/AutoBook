var infoData = 
    {
        "data": [
            {
                "company": "Aston Martin",
                "subtitle": "Aston Martin Lagonda Limited",
                "yearFounded": "1913",
                "countryOfOrigin": "England",
                "headquarters": "Warwick, England, United Kingdom",
                "standsFor": "Not Applicable",
                "founder": "Lionel Martin, Robert Bamford",
                "nameOrigin": "Founder's Surname",
                "logoOrigin": "***",
                "slogan":[            
                    {"bull":"Power, Beauty, Soul"},
                ],
                "parentCompany": "Volkswagen AG",
                "firstCar": "Coal Scuttle",
                "currentLineup": "***",
                "notableCars": "DB5"
            },
            
            {
                "company": "Bugatti",
                "subtitle": "Bugatti Automobiles S.A.S.",
                "yearFounded": "1909",
                "countryOfOrigin": "France",
                "headquarters": "Molsheim, Alsace, France",
                "standsFor": "Not Applicable",
                "founder": "Ettore Bugatti",
                "nameOrigin": "Founder's Surname",
                "logoOrigin": "***",
                "slogan":[            
                    {"bull":"Le Pur-sang Des Automobiles"},
                ],
                "parentCompany": "Volkswagen AG",
                "firstCar": "Type 2",
                "currentLineup": "***",
                "notableCars": "Veyron"
            },
            
            {
                "company": "Ford",
                "subtitle": "Ford Motor Company",
                "yearFounded": "1903",
                "countryOfOrigin": "United States of America",
                "headquarters": "Dearborn, Michigan, United States of America",
                "standsFor": "Not Applicable",
                "founder": "Henry Ford",
                "nameOrigin": "Founder's Surname",
                "logoOrigin": "In 1907 Ford introduced the scripted typeface of its trademark. Childe Harold Wills designed the Ford logo. He used his grandfather’s stencil set, which was based on the style of writing taught in schools when Ford and Wills were children. However, the Ford oval would not be featured on a car until the 1927 Model A.",
                "slogan":[            
                    {"bull":"Go Further"},
                    {"bull":"Built Ford Tough"}
                ],
                "parentCompany": "Not Applicable",
                "firstCar": "Model A",
                "currentLineup": "***",
                "notableCars": "***"
            },

            {
                "company": "Hyundai",
                "subtitle": "Hyundai Motor Company",
                "yearFounded": "1967",
                "countryOfOrigin": "South Korea",
                "headquarters": "Seoul, South Korea",
                "standsFor": "Not Applicable",
                "founder": "Chung Ju-yung",
                "nameOrigin": "The word “Hyundai” is the Korean 現代 (“hanja”), which means “modernity.”",
                "logoOrigin": "***",
                "slogan":[            
                    {"bull":"New Thinking, New Possibilities"},
                ],
                "parentCompany": "Hyundai Motor Group",
                "firstCar": "Pony",
                "currentLineup": "***",
                "notableCars": "Sonata"
            },

            {
                "company": "Lamborghini",
                "subtitle": "Automobili Lamborghini S.p.A.",
                "yearFounded": "1963",
                "countryOfOrigin": "Italy",
                "headquarters": "Sant'Agata Bolognese",
                "standsFor": "Not Applicable",
                "founder": "Ferruccio Lamborghini",
                "nameOrigin": "Founder's Surname",
                "logoOrigin": "***",
                "slogan":[            
                    {"bull":"***"},
                ],
                "parentCompany": "Audi",
                "firstCar": "350 GT",
                "currentLineup": "***",
                "notableCars": "Aventador"
            },

            {
                "company": "Toyota",
                "subtitle": "Toyota Motor Corporation",
                "yearFounded": "1937",
                "countryOfOrigin": "Japan",
                "headquarters": "Toyota, Aichi, Japan",
                "standsFor": "Not Applicable",
                "founder": "Kiichiro Toyoda",
                "nameOrigin": "Founder's Surname",
                "logoOrigin": "***",
                "slogan":[            
                    {"bull":"***"},
                ],
                "parentCompany": "Not Applicable",
                "firstCar": "***",
                "currentLineup": "***",
                "notableCars": "***"
            },

        ]
    }


var elx = infoData[0]
var mainDiv = document.getElementById("mainDiv");
var template = mainDiv.innerHTML;
mainDiv.innerHTML = Mustache.render(template, infoData)