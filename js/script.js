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
        <li class="secondary-color py-2"><a href="#">${category.category_name}</a></li>
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
        const cardDiv = document.createElement("div");
        cardDiv.classList.add("card");
        cardDiv.classList.add("bg-base-100");
        cardDiv.classList.add("shadow-sm");
        cardDiv.classList.add("p-4");
        cardDiv.innerHTML = `
        <figure class="h-[170px] rounded-lg">
            <img
            src="${plant.image}"
            alt="plant image" />
        </figure>
        <div class="card-body mt-3 p-0">
            <h2 class="card-title">${plant.name}</h2>
            <p>${plant.description}</p>
            <div class="flex items-center justify-center mb-3">
                <div class="badge primary-color bg-[#DCFCE7]">${plant.category}</div>
                <p class="text-end font-semibold">৳${plant.price}</p>
            </div>
            <button class="btn btn-primary primary-bg-color rounded-full w-full">Add to Cart</button>
        </div>
        `;

        cardsContainer.appendChild(cardDiv);
    });
}

loadAllPants();
loadCategories();