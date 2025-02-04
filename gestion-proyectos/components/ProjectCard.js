// components/ProjectCard.js

export default function ProjectCard({ project }) {
    return (
      <div>
        <h2>{project.name}</h2>
        <p>{project.description}</p>
        <a href={`/tasks?projectId=${project.id}`}>Ver tareas</a>
      </div>
    );
  }
  