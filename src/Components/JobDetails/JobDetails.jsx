import { useLoaderData, useParams } from "react-router-dom";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { MdOutlineWorkOutline,MdOutlineMarkEmailUnread } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveJobAplication } from "../Utility/LocalStorage";

const JobDetails = () => {
    const jobs=useLoaderData();
    const {id}=useParams();
    const IdInt=parseInt(id);
    const job=jobs.find(job=>job.id===IdInt);
    const hanldeJobApply=()=>{
        saveJobAplication(IdInt);
        toast("You have Applied Successfully", { position: "top-center" });
    }
    return (
      <div className="grid md:grid-cols-4 manrope bg-[#FFF] mt-24 mb-24 gap-6">
        <div className="border col-span-3 gap-6 p-8 mb-8">
          <h2 className="mb-8">
            <span className="text-2xl font-extrabold">Job Description:</span>:{" "}
            {job.job_description}
          </h2>
          <h2 className="mb-8">
            <span className="text-2xl font-extrabold">Job Responsibility:</span>
            {job.job_responsibility}
          </h2>
          <h2 className="mb-8">
            <span className="text-2xl font-extrabold">
              Educational Requirements:
            </span>
            <br />
            {job.educational_requirements}
          </h2>
          <h2 className="mb-8">
            <span className="text-2xl font-extrabold">Experiences:</span>
            <br />
            {job.experiences}
          </h2>
        </div>
        {/* Job Details */}
        <div className="border bg-[#7E90FE1A] p-4 rounded shadwo-lg">
          <h2 className="mb-8 text-2xl font-extrabold">Job Details</h2>
          <hr />
          <h2 className="flex items-center gap-2">
            <AiOutlineDollarCircle></AiOutlineDollarCircle>
            <span className=" font-extrabold">Salary:</span>
            {job.salary}
          </h2>
          <h2 className="flex items-center gap-2">
            <MdOutlineWorkOutline></MdOutlineWorkOutline>
            <span className="font-extrabold">Job Title :</span>
            {job.job_title}
          </h2>
          <h2 className="text-xl mt-8 mb-8 font-extrabold">
            Contact Information
          </h2>
          <div className="gap-6">
            <h2 className="flex items-center gap-2">
              <FaPhoneVolume></FaPhoneVolume>
              <span className="font-extrabold">Phone :</span>
              {job.contact_information.phone}
            </h2>
            <h2 className="flex items-center gap-2">
              <MdOutlineMarkEmailUnread></MdOutlineMarkEmailUnread>
              <span className=" font-extrabold">Email :</span>
              {job.contact_information.email}
            </h2>
            <h2 className="flex items-center gap-2">
              <CiLocationOn className="w-full"></CiLocationOn>
              <span className=" font-extrabold">Address :</span>
              {job.contact_information.address}
            </h2>
          </div>
          <button
            onClick={hanldeJobApply}
            className="btn  border rounded shadwo-lg w-full text-base text-white bg-[#7E90FE]"
          >
            Apply
          </button>
        </div>
        <ToastContainer />
      </div>
    );
    
};

export default JobDetails;