import { Outlet } from "react-router-dom";
// import { useLoaderData } from "react-router";
import DepartmentNav from "./DepartmentNav";
import { useEffect, useState } from "react";
import User from "./User";

const Departments = () => {
    // const users = useLoaderData(); // Uncommented to access loaded data
    // console.log("Loaded users:", users); // Log the loaded users

    const [users, setUsers] = useState([]);

    useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
     .then(response => response.json())
     .then(data => setUsers(data))
    }, [])

    return (
        <div className="text-center m-5">
            <h1>This is from department page</h1>
            <DepartmentNav />
            <h2 className="text-2xl font-bold m-5">Our Users: {users.length}</h2>
            <div className="grid grid-cols-3 gap-5">
                {users.map (user => <User key={user.id} user={user}/>)}
            </div>
            <Outlet />
        </div>
    );
};

export default Departments;
