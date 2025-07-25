import { CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({ title, content }) => (
  <div className="border p-4 rounded-md shadow-sm bg-white">
    <h2 className="text-lg font-semibold">{title}</h2>
    <p className="text-gray-600">{content}</p>
  </div>
);

export default Card;
