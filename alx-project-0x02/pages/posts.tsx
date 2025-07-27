import { GetStaticProps } from "next";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

interface UsersPageProps {
  users: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ users }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="max-w-4xl mx-auto p-6 grid gap-4">
        {users.map((user) => (
          <UserCard key={user.id} {...user} />
        ))}
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: UserProps[] = await response.json();

  return {
    props: {
      users,
    },
  };
};

export default Users;
