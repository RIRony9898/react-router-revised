import PropTypes from "prop-types";
import { Link } from "react-router-dom";


const User = ({ user }) => {
  const { id, name, email, phone } = user;

 
  return (
    <div className="border-2 border-amber-400 rounded-2xl p-5 space-y-2">
      <h3 className="text-xl font-medium">{name}</h3>
      <p>email: {email}</p>
      <p>phone: {phone}</p>
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <Link to={`/department/user/${id}`}>Show Details</Link>
      </button>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.object.isRequired,
};

export default User;
