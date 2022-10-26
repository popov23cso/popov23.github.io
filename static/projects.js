document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('#project').forEach(button => {
        button.onclick = () => {
            showProject(button);
        }
    })
})

const projects = ['pfitness', 'dungeon'];

function showProject(button) {
    projects.forEach(project =>{
        if (project !== button.dataset.project) {
            document.querySelector(`#${project}`).style.display = 'none';
        }
        else {
            document.querySelector(`#${project}`).style.display = 'block';
        }
    })
}