import { useState } from "react";
import { Link } from "react-router-dom";

const Add = ({ handleAdd }) => {

    const [addData, setAddData] = useState({
        id: Date.now(),
        salary: "",
        name: "",
        age: "",
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setAddData((prevData) => ({
            ...prevData, [name]: value
        }))
    }

    return (
        <section role="popup" className="w-full xl:w-1/4 md:w-1/3 sm:w-1/2 text-center m-auto p-8 shadow-c bg-white mt-10 ">
            <input type="text" placeholder="Name" className="border rounded border-e-gray-500 m-2 p-2 w-full"
                name="name"
                id="name"
                value={addData.name}
                onChange={handleInputChange}
            />
            <input type="number" placeholder="Salary" className="border rounded border-e-gray-600 m-2 p-2 w-full"
                name="salary"
                id="salary"
                value={addData.salary}
                onChange={handleInputChange}
            />

            <input type="text" placeholder="Age" className="border rounded border-e-gray-500 m-2 p-2 w-full"
                name="age"
                id="age"
                value={addData.age}
                onChange={handleInputChange}
                maxLength={2}
            />
            <div className="pt-4">
                <Link className="btn add-btn" to="/student" onClick={() => handleAdd(addData)}>Add</Link>
            </div>
        </section>
    )
}

export default Add