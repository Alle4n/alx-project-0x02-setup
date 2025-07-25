import Link from "next/link";

const Header = () => (
  <nav className="bg-blue-600 text-white p-4 flex gap-4">
    <Link href="/home">Home</Link>
    <Link href="/about">About</Link>
    <Link href="/posts">Posts</Link>
    <Link href="/users">Users</Link>
  </nav>
);

export default Header;
