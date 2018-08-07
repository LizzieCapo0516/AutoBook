var qString = window.location.href;
// console.log("href:", qString);

var a = qString.split("?")[1];
// console.log("parm:",a);

var b = a.split("=")[1];
// console.log("value:", b);

loadPage(b);

function loadPage(cat){
    document.title = cat + " | Top Grade Seafood";
    var productArr = [];
    // console.log("hello filter");

    seaFoodStore.forEach(
        el => {
            // console.log("category: ", el.category);
            if (el.category === cat)
            {
                productArr.push(el);
            } 
            // console.log("crab count: ", productArr.length);
        }   
    );
    
    renderPage(productArr);

};

function renderPage(productArr){

    var num = 0;
    
    productArr.forEach(function(el){    
     
        num++;
        var rem = num % 3;
        // console.log("remainder: " + rem);
    
        if (rem == 0 || productArr.length == num){
            stack = stack + cardDeckTag + cardOut + closeDiv;
            cardOut = "";
        }
        
    });
    
    mainbody.innerHTML = stack;
};