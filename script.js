console.log("Api fetching");

const promise = fetch("https://dummyjson.com/products");
promise
  .then((res) => {
    const promise2 = res.json();
    promise2.then((data) => {
      console.log(data);
      //calling the data on ui
      CreateUI(data);
    });
  })
  .catch((err) => {
    console.log("Error 404\n", err);
  });

const main = document.getElementById("root");



//json will call this function and this function will render the data
function CreateUI(data) {

  //Clear the data of inner html
  main.innerHTML = ''; //empty the main
  const products = data.products;

  for (let i = 0; i < products.length; i++) {
    const newCard = document.createElement("div");

    //INNER HTML METHOD;

    newCard.innerHTML=`
    <div> 
      <h3>${products[i].title}</h3>
      <img src="${products[i].thumbnail}">
      <p>Price: ${products[i].price}</p>
    </div>
    `;


    //INNER Text METHOD;--------------------------------------------------------------------------------------

    // const title = document.createElement("h3");
    // title.innerText = products[i].title;
    // newCard.appendChild(title);
  

    // const img = document.createElement('img');
    // img.setAttribute('src',products[i].thumbnail);
    // newCard.appendChild(img);

    // const price = document.createElement('price')
    // price.innerText = products[i].price;
    // newCard.appendChild(price);

    main.appendChild(newCard);

  }
}


function searchProducts(e){
  // const searchInput = document.getElementById('search');
  // console.log(e.target.value)
  const searchText = e.target.value;
  const pr = fetch(`https://dummyjson.com/products/search?q=${searchText}`);
  pr.then((res)=>{
    const pr2=res.json();
    pr2.then((data)=>{
      CreateUI(data);
      });
  });
}