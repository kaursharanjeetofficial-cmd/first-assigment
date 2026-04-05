const myProjects = document.getElementById("my_projects");

const searchInput = document.getElementById("searchInput");

const projectsList = [

    {
  title: "Study Planner App",
  description: "Track daily study tasks and progress",
  category: "Productivity",
  image: "square-image.jpg",
  link: ""
},
{
  title: "Expense Tracker",
  description: "Manage income and expenses",
  category: "Finance",
  image: "placeholder.png",
  link: ""
},
{
  title: "Event Planner",
  description: "Create and manage events",
  category: "Organization",
  image: "square-image.jpg",
  link: ""
},
{
  title: "Goal Tracker",
  description: "Track and achieve personal goals",
  category: "Productivity",
  image: "placeholder.png",
  link: ""
},
{
  title: "Bill Splitter",
  description: "Split bills among multiple people",
  category: "Utility",
  image: "square-image.jpg",
  link: ""
},
{
  title: "Fintech Dashboard",
  description: "Mobile finance app UI screens",
  category: "Mobile App",
  image: "placeholder.png",
  link: ""
},
{
  title: "E-Commerce UI Kit",
  description: "Shop screens with onboarding and input forms",
  category: "Web UI",
  image: "square-image.jpg",
  link: ""
}
];

displayMyProjects(projectsList);



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
