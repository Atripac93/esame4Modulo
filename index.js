const productList = document.querySelector("#list");

const getLista = async () => {
  const response = await fetch(
    "https://striveschool-api.herokuapp.com/api/product/",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFmYzVjZTczMjBjNjAwMThiOGYwMjEiLCJpYXQiOjE3MDYwMTgyNTQsImV4cCI6MTcwNzIyNzg1NH0.adHhNogNz7-k_4h2Ybx9AUqGFW2wG1785jJPSzE1d-E",
      },
      body: JSON.stringify({
        name: "cellphone 3310",
        description: "An unforgettable icon",
        brand: "Nokia",
        imageUrl: "https://bit.ly/3CExjRa",
      }),
    }
  );

  const responseJson = await response.json();
  console.log(responseJson);

  displayData(responseJson);
};

const dammiLista = async () => {
  let response = await fetch(
    "https://striveschool-api.herokuapp.com/api/product/",
    {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFmYzVjZTczMjBjNjAwMThiOGYwMjEiLCJpYXQiOjE3MDYwMTgyNTQsImV4cCI6MTcwNzIyNzg1NH0.adHhNogNz7-k_4h2Ybx9AUqGFW2wG1785jJPSzE1d-E",
      },
    }
  );

  let data = await response.json();
  console.log(data);

  displayData(data);
};

const displayData = (data) => {
  productList.innerHTML = "";

  data.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("card", "w-50");

    productDiv.innerHTML = `<div>
        <p>Name: ${product.name}</p>
        <p>Description: ${product.description}</p>
        <p>Brand: ${product.brand}</p>
        <p>Price: ${product.price}</p>
        <img src="${product.imageUrl}" alt="${product.name}" width="200">
      </div>
      <div>
        <p>Name: ${product.name}</p>
        <p>Description: ${product.description}</p>
        <p>Brand: ${product.brand}</p>
        <p>Price: ${product.price}</p>
        <img src="https://images.unsplash.com/photo-1516475429286-465d815a0df7?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="fa" width="200">
      </div>
      <div>
        <p>Name: ${product.name}</p>
        <p>Description: ${product.description}</p>
        <p>Brand: ${product.brand}</p>
        <p>Price: ${product.price}</p>
        <img src="https://plus.unsplash.com/premium_photo-1683141486694-4aa9d60803b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmFkaW98ZW58MHx8MHx8fDA%3D" alt="fa" width="100">
      </div>
      <p>Name: ${product.name}</p>
      <p>Description: ${product.description}</p>
      <p>Brand: ${product.brand}</p>
      <p>Price: ${product.price}</p>
      <img src="https://it.freepik.com/foto-gratuito/bellissimo-colpo-di-colline-erbose-coperte-di-alberi-vicino-alle-montagne-delle-dolomiti-in-italia_11527510.htm#query=natura&position=0&from_view=keyword&track=sph&uuid=5df6bd88-4591-48bf-ac69-e47f448f35e7">
    </div>
    <p>Name: ${product.name}</p>
    <p>Description: ${product.description}</p>
    <p>Brand: ${product.brand}</p>
    <p>Price: ${product.price}</p>
    <img src="https://unsplash.com/de/fotos/eine-waschmaschine-und-ein-trockner-in-einem-zimmer-23coWmkTNSg" alt="fa" width="200">
  </div>`;

    productList.appendChild(productDiv);
  });
};

getLista();
dammiLista();
