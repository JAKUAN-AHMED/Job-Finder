import { AiOutlineDollarCircle } from "react-icons/ai";
import {IoLocationOutline} from "react-icons/io5";
import { Link } from "react-router-dom";
const Job = ({ job }) => {
  const {
    logo,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
    job_title,
    id
  } = job;
  return (
    <div className="card card-compact bg-base-100 shadow-xl text-start">
      <div className="w-40">
        <figure>
          <img src={logo} alt="" />
        </figure>
      </div>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div>
          <button className="px-5 py-2 mr-4 font-extrabold border rounded border-[#9873FF] hover:bg-blue-400 hover:text-white text-yellow-500">
            {remote_or_onsite}
          </button>
          <button className="px-5 py-2 font-extrabold border rounded border-[#9873FF] hover:bg-blue-400 hover:text-white text-[#7E90FE]">
            {job_type}
          </button>
        </div>
        <div className="flex gap-2">
          <h2 className="flex">
            <IoLocationOutline></IoLocationOutline>
            {location}
          </h2>
          <h2 className="flex items-center">
            <AiOutlineDollarCircle></AiOutlineDollarCircle>
            {salary}
          </h2>
        </div>
        <div className="card-actions">
          <Link to={`/job/${id}`}>
            <button className="btn text-white bg-[#7E90FE] hover:bg-blue-600 hover:text-white">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Job;
