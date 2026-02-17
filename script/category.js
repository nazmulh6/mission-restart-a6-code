const loadCategoryItems = () => {
    fetch("https://fakestoreapi.com/products/categories")
        .then((res) => res.json())
        .then((data) => displayLoadCategoryItems(data))
}
const loadCategoryProduct = (id) =>{
    console.log(id)
    const url = `https://fakestoreapi.com/products/category/${id}`
    console.log(url)
}

const displayLoadCategoryItems = (categories) => {
    //  1. get the container & empty
    const categoryContainer = document.getElementById('category-container');
    categoryContainer.innerHTML = "";
    //  2. get into every catagories
    for (let category of categories) {
        //    3. create element 
        console.log(category)
        const btnDiv = document.createElement('div');
        btnDiv.innerHTML = ` 
        <button onclick="loadCategoryProduct(${category})" class="btn btn-outline">${category}</button>
`
        //    4. append into container
        categoryContainer.append(btnDiv)
    }

}




loadCategoryItems()