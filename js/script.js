
const categoriesContainer = document.getElementById("categoriesContainer")

const  loadCategories = async () => {
    const url = "https://openapi.programming-hero.com/api/categories";
    const res = await fetch(url);
    const data = await res.json();
    
    data.categories.forEach(category => {
        
        const btn = document.createElement("button");
        btn.className = `btn btn-outline w-full`;
        btn.textContent = category.category_name;
        categoriesContainer.appendChild(btn)
        
    });
    

}

loadCategories()