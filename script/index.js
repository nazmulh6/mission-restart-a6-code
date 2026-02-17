const loadTrendingProducts = () => {
    fetch("https://fakestoreapi.com/products/category/men's%20clothing")
        .then((res) => res.json())
        .then((data) => displayLoadTrendingProducts(data))
}

const displayLoadTrendingProducts = (products) => {
    //  1. get the container & empty
    const topRatedContainer = document.getElementById('top-rated');
    topRatedContainer.innerHTML = "";
    //  2. get into every catagories
    for (let product of products) {
        //    3. create element 
        console.log(product)
        const cardDiv = document.createElement('div');
        cardDiv.innerHTML = `
<div class="card bg-base-100 w-60 shadow-sm">
  <figure>
    <img
      src="${product.image}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
  <div class="badge badge-soft badge-primary">${product.category}</div>
    <div class="flex justify-between items-center"> 
    <div>
    <h2 class="card-title">${product.title}</h2>
    <h4 class="font-bold">$${product.price}</h4>
    </div>
    <div class="badge justify-end"> <i class="fa-regular fa-star"></i> ${product.rating.rate}(${product.rating.count})</div>
    </div>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="card-actions justify-between">
      <div class="badge badge-outline"><i class="fa-regular fa-eye"></i>Details</div>
      <div class="badge badge-info text-white"><i class="fa-solid fa-cart-shopping"></i>Add</div>
    </div>
  </div>
</div>
`
        //    4. append into container
        topRatedContainer.append(cardDiv)
    }

}



loadTrendingProducts()