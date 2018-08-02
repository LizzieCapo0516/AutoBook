var infoData = 
    {
        "data": [
            {
                "company": "Bugatti",
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

        ]
    }


var elx = infoData[0]
var mainDiv = document.getElementById("mainDiv");
var template = mainDiv.innerHTML;
mainDiv.innerHTML = Mustache.render(template, infoData)