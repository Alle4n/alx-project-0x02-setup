import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => (
  <div className="p-4 border rounded bg-white shadow">
    <h3 className="font-bold">{name}</h3>
    <p>{email}</p>
    <small>{address.street}, {address.city}</small>
  </div>
);

export default UserCard;
