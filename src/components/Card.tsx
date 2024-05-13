import { ReactNode } from "react";
import Draggable from "react-draggable";
interface CardProps {
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <Draggable>
      <div className="bg-zinc-900 rounded-3xl p-2 shadow-lg">
        {children}
      </div>
    </Draggable>
  );
};

export default Card;
