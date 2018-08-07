
var carCompany = {};

function getCarCompany (co){
    infoData.data.forEach(
        (el)=>{
            if (el.company == co){
                carCompany = el;
            }
        }
    );

    var mainDiv = document.getElementById("mainDiv");
    var template = mainDiv.innerHTML;
    mainDiv.innerHTML = "";
    mainDiv.innerHTML = Mustache.render(template, carCompany)
}
