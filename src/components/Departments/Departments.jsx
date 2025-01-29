import { Outlet } from "react-router-dom";
import DepartmentNav from "./DepartmentNav";


const Departments = () => {
    return (
        <div>
            <h1>This is from department page</h1>
            <DepartmentNav/>
            <Outlet/>
        </div>
    );
};

export default Departments;