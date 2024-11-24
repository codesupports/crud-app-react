import { useNavigate } from "react-router-dom";
const Details = ({ deleteData }) => {
    let navigate = useNavigate();
    return (
        <section className="w-full xl:w-1/3 md:w-1/2 sm:w-1/2 m-auto p-8 shadow-c bg-white mt-10 ">
            <h2 className="border-b pb-3 text-gray-700 text-lg font-semibold">{deleteData[0].name} Details</h2>
            {
                deleteData.map((item) => {
                    return (
                        <ul className="text-gray-700 flex justify-between text-center" key={item.id}>
                            <li className="flex-grow"><span className="block py-1 bg-slate-300 font-semibold">Id</span> <span className="block py-2 border border-r-0">{item.id}</span></li>
                            <li className="flex-grow"><span className="block py-1 bg-slate-300 font-semibold">Name</span> <span className="block py-2 border border-r-0">{item.name}</span></li>
                            <li className="flex-grow"><span className="block py-1 bg-slate-300 font-semibold">Salary</span> <span className="block py-2 border border-r-0">{item.salary}/-</span></li>
                            <li className="flex-grow"><span className="block py-1 bg-slate-300 font-semibold">Age</span> <span className="block py-2 border">{item.age}</span></li>
                        </ul>
                    )
                })
            }
            <div className="border-t pt-2 mt-12">
                <a className=" text-gray-700 text-lg font-semibold cursor-pointer" onClick={() => navigate('/student')}> Back to List</a>
            </div>
        </section>
    )
}

export default Details;