import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">
          <Link href="/">Home</Link>
        </div>
        <div className="space-x-6">
          <Link
            href="/admin"
            className="text-white hover:text-gray-200 transition duration-300"
          >
            Admin
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
