
var productNameInp = document.getElementById("productName");
var productPriceInp = document.getElementById("productPrice");
var productCompanyInp = document.getElementById("productCompany");
var productDescInp = document.getElementById("productDesc");
var addBtn = document.getElementById("addBtn");
var searchInp = document.getElementById("searchInp");
var currentProduct = 0;



var productsContainer ;

if(localStorage.getItem("productsContainer") == null)
    {
        productsContainer = [];
    }
else
    {
        productsContainer =JSON.parse( localStorage.getItem("productsContainer"));
        displayData();

    }



searchInp.onkeyup = function(){

    search(searchInp.value)
}

function search(term){
    var searchCols="";

    for(var i=0 ; i<productsContainer.length ; i++)
    {
        if(productsContainer[i].name.includes(term))
        {

        
            searchCols+=`<div class="col-md-3">
            <div>
                <h3 class="text-dark">`+productsContainer[i].name+`</h3>
                <h3 class="text-info">`+productsContainer[i].desc+`</h3>
                <h4 class="text-dark">`+productsContainer[i].price+`</h4>
                <h4 class="text-info">`+productsContainer[i].company+`</h4>
                <button class="btn btn-danger" onclick="deleteProduct(`+i+`)">delete</button>
                <button class="btn btn-warning" onclick="updateForm(`+i+`)">update</button>
            </div>
        </div>`
}
    document.getElementById("searchData").innerHTML=searchCols;

    }
}

addBtn.onclick = function(){

    if(addBtn.innerHTML == "add product")
    {
        addProduct();
        displayData();
    }
    else
    {
        updateProduct()  
        displayData();  
    }
}
function addProduct(){

    var product = {
        name:productNameInp.value,
        price:productPriceInp.value,
        desc:productDescInp.value,
        company:productCompanyInp.value
    }

    productsContainer.push(product);
    localStorage.setItem("productsContainer",JSON.stringify(productsContainer));
}

function displayData(){
    var cols="";

    for(var i=0 ; i<productsContainer.length ; i++)
    {
        cols+=`<div class="col-md-3">
        <div>
            <h3 class="text-dark">`+productsContainer[i].name+`</h3>
            <h3 class="text-info">`+productsContainer[i].desc+`</h3>
            <h4 class="text-dark">`+productsContainer[i].price+`</h4>
            <h4 class="text-info">`+productsContainer[i].company+`</h4>
            <button class="btn btn-danger" onclick="deleteProduct(`+i+`)">delete</button>
            <button class="btn btn-warning" onclick="updateForm(`+i+`)">update</button>
        </div>
    </div>`
    }
    document.getElementById("rowData").innerHTML=cols;
}

function deleteProduct(id){
productsContainer.splice(id,1);
localStorage.setItem("productsContainer",JSON.stringify(productsContainer));
displayData();
} ;

function updateForm(i)
{

 productNameInp.value = productsContainer[i].name ;
 productPriceInp.value = productsContainer[i].price;
 productDescInp.value = productsContainer[i].desc;
 productCompanyInp.value = productsContainer[i].company;

 addBtn.innerHTML = "update product";

 currentProduct = i;
}

function updateProduct(){

      productsContainer[currentProduct].name = productNameInp.value ;
      productsContainer[currentProduct].price = productPriceInp.value ;
      productsContainer[currentProduct].desc = productDescInp.value ;
      productsContainer[currentProduct].company = productCompanyInp.value ;

      addBtn.innerHTML= "add product"
      localStorage.setItem("productsContainer",JSON.stringify(productsContainer));


}