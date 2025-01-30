import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UserDetails = () => {

    const [userDetails, setUserDetails] = useState({})

    useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(res => res.json())
    .then(data => setUserDetails(data))
    }, [])
  return (
    <div>
      <h1>Details about user: {userDetails.id}</h1>
      <button
        type="button"
        className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
      >
        <Link to={"/department"}>Go back to Department</Link>
      </button>
    </div>
  );
};

export default UserDetails;
