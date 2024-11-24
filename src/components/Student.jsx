import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Student = ({ data, handleDelete, handleEdit, handleDetails }) => {

    const [mainData, setMainData] = useState(data);

    const handelSearch = (elem) => { // search data by serach input
        const filteredData = data.filter((item) => {
            return item.name.toLowerCase().includes(elem.toLowerCase()) || item.age.toString().includes(elem)
        })
        setMainData(filteredData)
        // setMainData((prevItems) => prevItems.filter(item => item.name.toLowerCase().includes(elem.toLowerCase()) || item.age.toString().includes(elem)))
    }
    useEffect(() => {
        // setMainData(data)
    }, [handelSearch])
    console.log("mainData", mainData, "data", data)
    return (
        <section className=" justify-center py-5">
            <div className="text-center w-1/2 m-auto">
                <input type="text" name="" id="" placeholder="Search by Name and Age..." className="border rounded border-e-gray-500 px-2 py-1 w-8/12" onChange={(e) => handelSearch(e.target.value)} />
            </div>
            <div className="text-center py-5 overflow-auto">
                <table className="table-style m-auto xl:w-1/2 w-full">
                    <thead>
                        <tr>
                            <th>Sr.No.</th>
                            <th>Name</th>
                            <th>Salery</th>
                            <th>Age</th>
                            <th>Operation</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            mainData?.map((item, index) => {
                                // const saleryFormat = item.salary.toLocaleString('en-IN', {style: 'currency',currency: 'INR', });
                                return (
                                    <tr className="border-b" key={item.id}>
                                        <td>{index + 1}</td>
                                        <td>{item.name}</td>
                                        <td>₹ {item.salary}/-</td>
                                        <td>{item.age}</td>
                                        <td><Link className="btn details-btn" to="/details" onClick={() => handleDetails(item.id)}>Details</Link></td>
                                        <td><Link className="btn edit-btn" to="/edit" onClick={() => handleEdit(item.id, index)}>Edit</Link></td>
                                        <td><Link className="btn delete-btn" onClick={() => handleDelete(item.id)}>Delete</Link></td>
                                    </tr>
                                )
                            })
                        }
                        <tr>
                            <td colSpan={7} className="text-center border-t ">
                                <div className="py-2">
                                    <Link className="btn add-btn px-10" to="/add">Add</Link>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div >
        </section >
    )
}

export default Student;