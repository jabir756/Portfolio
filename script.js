document.addEventListener('DOMContentLoaded',()=>{
    const projectLink = document.getElementById('projects');
    const projectsContainer = document.getElementById('projects-container');

    projectsContainer.style.display = 'none';

    projectLink.addEventListener('click', ()=>{
        projectsContainer.style.display = projectsContainer.style.display === 'none'? 'block' : 'none';
    });

});