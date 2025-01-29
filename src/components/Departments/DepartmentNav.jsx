import { Link } from "react-router-dom";

const DepartmentNav = () => {
  return (
    <div>
      <nav>
        <ul className="flex justify-center items-center gap-5 text-3xl font-extrabold m-10">
          <li>
            <Link
              className="bg-blue-300 p-4 rounded-full hover:bg-amber-200"
              to="/department/cse"
            >
              CSE
            </Link>
          </li>
          <li>
            <Link
              className="bg-blue-300 p-4 rounded-full hover:bg-amber-200"
              to="/department/eee"
            >
              EEE
            </Link>
          </li>
          <li>
            <Link
              className="bg-blue-300 p-4 rounded-full hover:bg-amber-200"
              to="/department/bba"
            >
              BBA
            </Link>
          </li>
          <li>
            <Link
              className="bg-blue-300 p-4 rounded-full hover:bg-amber-200"
              to="/department/english"
            >
              ENGLISH
            </Link>
          </li>
          <li>
            <Link
              className="bg-blue-300 p-4 rounded-full hover:bg-amber-200"
              to="/department/law"
            >
              LAW
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default DepartmentNav;
