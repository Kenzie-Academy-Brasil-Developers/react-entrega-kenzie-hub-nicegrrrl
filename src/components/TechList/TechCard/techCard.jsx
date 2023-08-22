export const TechCard = ({ tech }) => {
  return (
    <li>
      <div>
        <p>{tech.title}</p>
        <div>
          <span>{tech.status}</span>
          <button>edit</button>
          <button>delete</button>
        </div>
      </div>
    </li>
  );
};
