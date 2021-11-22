const projectContainer = document.querySelector(".projects-container");
console.log(projectContainer);

// const URL = "https://javascript-projects-api-data.netlify.app/javascriptData.json";
const URL = "./data.json";
let javascriptApiData = [];

const jsData = async () => {
    const response = await fetch(URL)
    const myJson = await response.json();
    javascriptApiData = myJson.results;

    javascriptApiData.forEach(item => {
      const htmlText = `
      <article class="project" id="${item.id}">
        <a class="main-link" target="_blank" href="${item.url}"></a>
        <div class="img-container">
            <img src="${item.thumbnail}" alt="${item.projectName}">
        </div>
        <div class="project-info">
            <h4 class="project-title">${item.projectName}</h4>
            <div class="technologies">
                <span class="tech">html</span>
                <span class="tech">css</span>
                <span class="tech">javascript</span>
            </div>
            <footer class="project-footer">
                <p tabindex="0" class="project-view">view</p>
                <p tabindex="0" class="project-sourcecode">code</p>
            </footer>
        </div>
      </article>
      `
      projectContainer.insertAdjacentHTML("beforeend", htmlText);
    });
} 
jsData();