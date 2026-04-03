const myProjects = document.getElementById("my_projects");

const projectsList = [

    {
    title: "Weather App",
    description: "Shows weather info",
    category: "API",
    image: "square-image.jpg",
    link: "#"
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio",
    category: "Web",
    image: "square-image.jpg",
    link: "#"
  },
  {
    title: "Todo App",
    description: "Task manager app",
    category: "JavaScript",
    image: "square-image.jpg",
    link: "#"
  },
  {
    title: "Weather App",
    description: "Shows weather info",
    category: "API",
    image: "square-image.jpg",
    link: "#"
  },
   {
    title: "Weather App",
    description: "Shows weather info",
    category: "API",
    image: "square-image.jpg",
    link: "#"
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio",
    category: "Web",
    image: "square-image.jpg",
    link: "#"
  },
  {
    title: "Todo App",
    description: "Task manager app",
    category: "JavaScript",
    image: "square-image.jpg",
    link: "#"
  }
];

displayMyProjects(projectsList);



function displayMyProjects(projectsList)
{
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