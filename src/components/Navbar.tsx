import { NavLink, Link } from "react-router";

export default function Navbar() {
  return (
    <div className="flex flex-col w-full lg:w-[60%] lg:ml-[20%] items-center">
        <nav className="text-xl mt-[1%] w-[95%] pt-4 pb-4 border rounded-md">
          <Link className="p-4" to="/">Home</Link>
          <Link className="p-4" to="/projects">Projects</Link>
        </nav>
    </div>
  );
}