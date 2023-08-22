import { useUserContext } from "../../providers/UserContext/userContext";
import { TechCard } from "./TechCard/techCard";

export const TechList = () => {
  const { techList } = useUserContext();

  return (
    <ul>
      {techList.map((tech) => (
        <TechCard key={tech.id} tech={tech} />
      ))}
    </ul>
  );
};
