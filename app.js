const projectContainer = document.querySelectorAll(".projects-container");
console.log(projectContainer);

const URL = "https://javascript-projects-api-data.netlify.app/javascriptData.json"

const jsData = async () => {
    const response = await fetch(URL, { headers: { accept: "Accept: application/json" } })
      console.log(response);
    const myJson = await response.json();
    console.log(myJson);
} 
    
jsData();