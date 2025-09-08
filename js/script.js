let cart = [];

const addToCart = (plant) => {
    const {id, name, price} = plant;
    let checkExistingItem = cart.find((item) => item.id === id);

    if (checkExistingItem) {
        checkExistingItem.quantity += 1;
    } else {
        cart.push({id, name, price, quantity: 1});
    }

    displayCartItems();
}

const displayCartItems = () => {
    const cartContainer = document.getElementById("cart-container");
    const totalResult = document.getElementById("totalResult");

    cartContainer.innerHTML = "";
    totalResult.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;

        const div = document.createElement("div");
        div.innerHTML = `
        <div id="item-container" class="flex justify-between items-center bg-[#F0FDF4] rounded-lg px-3 py-2 mb-2">
            <div>
                <h3 class="font-semibold mb-1">${item.name}</h3>
                <p class="text-[#1F293750]">৳${item.price} x ${item.quantity}</p>
            </div>
            <i class="fa-solid fa-xmark text-[#1F293750]"></i>
        </div>
        `;
        
        totalResult.innerHTML = `
        <h2 class="text-xl font-semibold mb-2">Total:</h2>
        <h2 class="text-xl font-semibold mb-2">৳${total}</h2>
        `;
        
        cartContainer.appendChild(div);
        cartContainer.appendChild(totalResult);
    });
}

const loadPlantDetails = (id) => {
    fetch(`https://openapi.programming-hero.com/api/plant/${id}`)
        .then((res) => res.json())
        .then((data) => displayPlantDetails(data.plants));
}

const displayPlantDetails = (plant) => {
    const detailsContainer = document.getElementById("details-container");
    detailsContainer.innerHTML = `
    <h2 class="text-2xl font-semibold">${plant.name}</h2>
    <figure class="rounded-lg">
        <img class="w-full h-[300px]" src="${plant.image}" alt="plant image" />
    </figure>
    <p class="mb-1"><span class="font-bold">Category:</span> ${plant.category}</p>
    <p class="mb-1"><span class="font-bold">Price:</span> ৳${plant.price}</p>
    <p><span class="font-bold">Description:</span> ${plant.description}</p>
    `;

    document.getElementById("my_modal_5").showModal();
}

const removeActiveClass = () => {
    const activeCategories = document.querySelectorAll(".active");
    
    for (const activeCategory of activeCategories) {
        activeCategory.classList.remove("active");
    }
}

const loadPlantsCategories = (id) => {
    fetch(`https://openapi.programming-hero.com/api/category/${id}`)
        .then((res) => res.json())
        .then((data) => {
            removeActiveClass();
            const clickedCategory = document.getElementById(`active-${id}`);
            clickedCategory.classList.add("active");
            displayPlants(data.plants)
        });
}

const loadCategories = () => {
    fetch("https://openapi.programming-hero.com/api/categories")
        .then((res) => res.json())
        .then((data) => displayCategories(data.categories));
}

const displayCategories = (categories) => {
    const categoriesContainer = document.getElementById("categories-container");
    categoriesContainer.innerHTML = "";

    const h2 = document.createElement("h2");
    h2.innerHTML = `<h2 class="text-xl font-bold mb-4">Categories</h2>`;
    categoriesContainer.appendChild(h2);

    categories.forEach(category => {
        const ul = document.createElement("ul");
        ul.classList.add("ms-2.5");
        ul.innerHTML = `
        <li id="active-${category.id}" onclick="loadPlantsCategories(${category.id})" class="secondary-color cursor-pointer px-2 py-2">${category.category_name}</li>
        `;

        categoriesContainer.appendChild(ul);
    });
}

const loadAllPants = () => {
    fetch("https://openapi.programming-hero.com/api/plants")
        .then((res) => res.json())
        .then((data) => displayPlants(data.plants));
}

const displayPlants = (plants) => {
    const cardsContainer = document.getElementById("cards-container");
    cardsContainer.innerHTML = "";

    plants.forEach(plant => {
        const id = plant.id;
        const cardDiv = document.createElement("div");
        cardDiv.classList.add("card");
        cardDiv.classList.add("bg-base-100");
        cardDiv.classList.add("shadow-sm");
        cardDiv.classList.add("p-4");
        cardDiv.innerHTML = `
        <figure class="h-[170px] rounded-lg">
            <img src="${plant.image}" alt="plant image" />
        </figure>
        <div class="card-body mt-3 p-0">
            <h2 onclick="loadPlantDetails(${plant.id})" class="card-title cursor-pointer">${plant.name}</h2>
            <p>${plant.description}</p>
            <div class="flex items-center justify-center mb-3">
                <div class="badge primary-color bg-[#DCFCE7]">${plant.category}</div>
                <p class="text-end font-semibold">৳${plant.price}</p>
            </div>
            <button id="addToCart-${id}" class="btn btn-primary primary-bg-color rounded-full w-full btn-cart">Add to Cart</button>
        </div>
        `;
        
        const clickedPlant = cardDiv.querySelector(".btn-cart");
        clickedPlant.addEventListener("click", () => addToCart(plant));

        cardsContainer.appendChild(cardDiv);
    });
}

loadAllPants();
loadCategories();
