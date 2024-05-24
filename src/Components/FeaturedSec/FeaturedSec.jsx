import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedSec = () => {
    const [jobs,setJobs]=useState([]);
    const [dataLength,setDataLength]=useState(4);
    useEffect(()=>{
        fetch('jobs.json')
        .then(res=>res.json())
        .then(data=>setJobs(data))
    },[])
    return (
      <>
        <div className="mt-12">
          <h2 className="text-center text-5xl text-[#1A1919] font-extrabold mb-4">
            Featured Jobs
          </h2>
          <p className="text-base text-[#757575]">
            Explore thousands of job opportunities with all the information you
            need.Its your future.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-2 mt-24">
          {jobs.slice(0, dataLength).map((job) => (
            <Job key={job.id} job={job}></Job>
          ))}
        </div>
        <div className={dataLength===jobs.length ? 'hidden' : 'm-4'}>
          <button onClick={()=>setDataLength(jobs.length)} className="btn bg-[#7E90FE] text-white hover:text-black">Show All Jobs</button>
        </div>
      </>
    );
};

export default FeaturedSec;