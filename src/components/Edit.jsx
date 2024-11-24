import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Edit = ({ editData, handleUpdate, isEditItem }) => {

    let navigate = useNavigate();

    const [addData, setAddData] = useState({
        id: editData[0].id,
        salary: editData[0].salary,
        name: editData[0].name,
        age: editData[0].age,
    })

    const handleInputEdit = (e) => {
        const { name, value } = e.target
        setAddData((prevData) => ({
            ...prevData, [name]: value
        }))
    }

    return (
        <section role="popup" className="w-full xl:w-1/3 md:w-1/2 sm:w-1/2 m-auto p-8 shadow-c bg-white mt-10 ">
            <input type="number" placeholder="Salary" className="border rounded border-e-gray-600 m-2 p-2 w-full"
                name="salary"
                id="salary"
                value={addData.salary}
                onChange={handleInputEdit}
            />
            <input type="text" placeholder="Name" className="border rounded border-e-gray-600 m-2 p-2 w-full"
                name="name"
                id="name"
                value={addData.name}
                onChange={handleInputEdit}
            />
            <input type="number" placeholder="Age" className="border rounded border-e-gray-600 m-2 p-2 w-full"
                name="age"
                id="age"
                value={addData.age}
                onChange={handleInputEdit}
                maxLength="2"
            />

            <div className="pt-4 justify-between flex">
                <a className=" text-gray-700 text-lg font-semibold cursor-pointer" onClick={() => navigate('/student')}> Back to List</a>
                <Link className="btn edit-btn" to="/student" onClick={() => handleUpdate(isEditItem, addData)}>Update</Link>
            </div>
        </section>
    )
}

export default Edit;