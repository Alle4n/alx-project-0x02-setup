import Link from "next/link";
import Image from "next/image";

const Header = () => (
  <nav className="bg-blue-600 text-white p-4 flex items-center justify-between">

    <div className="flex items-center gap-2">
      <Image
        src="/assets/images/logo.png"
        alt="Logo"
        width={32}
        height={32}
      />
      <span className="font-semibold text-lg">MyApp</span>
    </div>

    <div className="flex gap-6">
      <Link href="/home" className="hover:underline">Home</Link>
      <Link href="/about" className="hover:underline">About</Link>
      <Link href="/posts" className="hover:underline">Posts</Link>
      <Link href="/users" className="hover:underline">Users</Link>
    </div>
  </nav>
);

export default Header;