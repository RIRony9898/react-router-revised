import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-5 bg-amber-200">
      <div className="text-2xl font-extrabold text-gray-800">
        <Link to="/">Logo</Link>
      </div>
      <div>
        <ul className="flex items-center gap-4 px-4 font-bold"> 
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/department">Department</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
