import { Link } from "react-router-dom";
const Home = () => {
    return (
        <section className="flex justify-center items-center pt-40">
            <div className="text-center p-24 pt-8 pb-10 bg-white shadow-lg">
                <i class="fa fa-user-circle text-6xl text-blue-400" aria-hidden="true"></i>

                <h1 className="text-2xl pb-6 pt-3 text-cyan-800 font-bold">Welcome to our App</h1>
                <p className="text-cyan-800 ">This is crud App for Student</p>
                <div className="pt-11">
                    <button className="btn add-btn"><Link to="/student">Click Here</Link></button>
                </div>
            </div>
        </section>
    )
}

export default Home;