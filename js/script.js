
const categoriesContainer = document.getElementById("categoriesContainer");
const treesContainer = document.getElementById("treesContainer")
const loadingSpinner = document.getElementById("loadingSpinner")

const loadCategories = async () => {
    const url = "https://openapi.programming-hero.com/api/categories";
    const res = await fetch(url);
    const data = await res.json();

    data.categories.forEach(category => {

        const btn = document.createElement("button");
        btn.className = `btn btn-outline w-full`;
        btn.textContent = category.category_name;
        btn.onclick = () => selectCategory(category.id, btn)
        categoriesContainer.appendChild(btn)

    });
}

const selectCategory = (categoryId, btn) => {
    console.log(categoryId, btn);
    showLoading();
    btn.classList.add("btn-primary")
    document.querySelectorAll(#)

    
}

const showLoading = () => {
    loadingSpinner.classList.remove("hidden");
    loadingSpinner.classList.add("flex");
    treesContainer.innerHTML = ""
}
const hideLoading = () => {
    loadingSpinner.classList.add("hidden")
}

const loadTrees = async () => {
    showLoading()
    const url = "https://openapi.programming-hero.com/api/plants";
    const res = await fetch(url);
    const data = await res.json();
    hideLoading()
    displyaTrees(data)


}

const displyaTrees = (trees) => {
    trees.plants.forEach(tree => {
        const card = document.createElement("div");
        card.className = "card bg-base-100  shadow-sm";
        card.innerHTML = `
        <figure>
            <img 
                src="${tree.image}" 
                title="${tree.name}"
                class="h-48 w-full object-cover"
                />
        </figure>
        <div class="card-body">
            <h2 class="card-title">${tree.name}</h2>
            <p class="line-clamp-2">A card component has a figure, a body part, and inside body there are title and actions parts</p>
            <div class="badge badge-success badge-outline font-bold text-xs">${tree.category}</div>
            <div class="flex justify-between items-center">
                <h2 class="font-bold text-xl text-[#4ade80]">$${tree.price}</h2>
                <button class="btn btn-primary bg-[]">Cart</button>
            </div>
        </div>

        `
        treesContainer.appendChild(card)
    }
    )

}


loadTrees()

loadCategories()