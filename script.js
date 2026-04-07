const myProjects = document.getElementById("my_projects");

const searchInput = document.getElementById("searchInput");

let  projectsList = [];

//displayMyProjects(projectsList);
loadProjects()


function displayMyProjects(projectsList)
{

  myProjects.innerHTML = ""; 


  if (projectsList.length === 0) {
  myProjects.innerHTML = "<h4> No data found</h4>";
  return;
}
  

 const projectHtml =  projectsList.map(function(element){ 
  return `
<article class="projectCard">
        <div class="featured-image-wrapper">
  <img src=${element.image} alt="This is a photo to show featured project" />
   <span class="badge">${element.category}</span>
  </div>
  <div class="featured-content">
   <h3>${element.title}</h3>
        <p>${element.description}</p>
          <button class="featured__btn">View Project</button>
</div>
    </article>
    `;
    
  }).join("");



  myProjects.innerHTML = projectHtml;

}


searchInput.addEventListener("input",() => {

   const searchValue = searchInput.value.toLowerCase();

  const filteredProjects = projectsList.filter(project =>
    project.title.toLowerCase().includes(searchValue) ||
    project.description.toLowerCase().includes(searchValue) || project.category.toLowerCase().includes(searchValue)
  );

  displayMyProjects(filteredProjects);

  });



  async function loadProjects() {
  try {
    const response = await fetch('https://raw.githubusercontent.com/kaursharanjeetofficial-cmd/first-assigment/main/projects.json'); 
    const data = await response.json();


    projectsList=data;

    displayMyProjects(projectsList);
  } catch (error) {
    console.error('Errr: There is some problem', error);
  }
}

