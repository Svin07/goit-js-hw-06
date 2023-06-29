const elementsList = document.querySelector("ul#categories");


const totalElements = elementsList.children.length;
console.log(`Number of categories: ${totalElements}`);



const categoriesList = document.querySelectorAll("ul#categories");

categoriesList.forEach((category) => {
    const categoryName = category.querySelector("h2").textContent;
    
    const categoryElements = category.querySelectorAll("li").length;
    
    console.log(`Category: ${categoryName}`);
   
    console.log(`Elements: ${categoryElements}`);
    
  }
  
  );




