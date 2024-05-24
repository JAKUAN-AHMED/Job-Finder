import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center manrope text-2xl bg-black text-white h-96">
           <h2>Oops!!!</h2> 
           <Link className="bg-yellow-400 text-red-50 shadow-lg rounded-sm" to={'/'}><button>Go back Home</button></Link>
        </div>
    );
};

export default ErrorPage;