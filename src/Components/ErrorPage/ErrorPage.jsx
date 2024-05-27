import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center manrope text-2xl text-white h-96 border rounded shadow-lg">
           <h2 className="text-black">Oops!!!</h2> 
           <Link className="bg-red-400 text-red-50 shadow-lg rounded-sm" to={'/'}><button>Go back Home</button></Link>
        </div>
    );
};

export default ErrorPage;