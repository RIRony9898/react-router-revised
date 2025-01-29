import { Outlet } from "react-router-dom";
// import { useLoaderData } from "react-router";
import DepartmentNav from "./DepartmentNav";

const Departments = () => {
    // const users = useLoaderData(); // Uncommented to access loaded data
    // console.log("Loaded users:", users); // Log the loaded users

    return (
        <div>
            <h1>This is from department page</h1>
            <DepartmentNav />
            {/* <h2>{users.length}</h2> */}
            {/* <ul>
                {users && users.map(user => (
                    <li key={user.id}>{user.name}</li> // Display user names
                ))}
            </ul> */}
            <Outlet />
        </div>
    );
};

export default Departments;
