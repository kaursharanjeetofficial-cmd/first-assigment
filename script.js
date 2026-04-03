const myProjects = document.getElementById("my_projects");

const searchInput = document.getElementById("searchInput");

const projectsList = [

    {
    title: "Weather App",
    description: "Shows weather info",
    category: "API",
    image: "square-image.jpg",
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio",
    category: "Web",
    image: "square-image.jpg",
  },
  {
    title: "Todo App",
    description: "Task manager app",
    category: "JavaScript",
    image: "square-image.jpg"
 },
  {
    title: "Weather App",
    description: "Shows weather info",
    category: "API",
    image: "square-image.jpg",
  },
   {
    title: "Weather App",
    description: "Shows weather info",
    category: "API",
    image: "square-image.jpg",
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio",
    category: "Web",
    image: "square-image.jpg",
  },
  {
    title: "Todo App",
    description: "Task manager app",
    category: "JavaScript",
    image: "square-image.jpg",
  }
];

displayMyProjects(projectsList);



function displayMyProjects(projectsList)
{

  myProjects.innerHTML = ""; 



  if (projectsList.length === 0) {
  myProjects.innerHTML = "<h6>No data found</h6>";
  return;
}
  projectsList.forEach(element => {
  

myProjects.innerHTML +=`
<article class="projectCard">
        <div class="featured-image-wrapper">
  <img src=${element.image} alt="This is a photo to show featured project" />
  </div>
  <div class="featured-content">
   <h3>${element.title}</h3>
        <p>${element.description}</p>
          <button class="featured__btn">View Project</button>
</div>
    </article>
    `;
    
  });


}


searchInput.addEventListener("input",() => {

   const searchValue = searchInput.value.toLowerCase();

  const filteredProjects = projectsList.filter(project =>
    project.title.toLowerCase().includes(searchValue) ||
    project.description.toLowerCase().includes(searchValue)
  );

  displayMyProjects(filteredProjects);

  });