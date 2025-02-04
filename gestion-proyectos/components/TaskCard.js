// components/TaskCard.js

export default function TaskCard({ task }) {
    return (
      <div>
        <h3>{task.name}</h3>
        <p>{task.description}</p>
      </div>
    );
  }
  