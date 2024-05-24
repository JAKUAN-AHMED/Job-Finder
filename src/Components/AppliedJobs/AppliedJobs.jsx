import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../Utility/LocalStorage";

const AppliedJobs = () => {
    const jobs=useLoaderData();
    const [appliedJob,setAppliedJob]=useState([]);
    const [displayJob,setDisplayJob]=useState([]);
    const handleJobsFilter=filter=>{
        if(filter==='All')
        {
            setDisplayJob(appliedJob);
        }
        else if(filter==='Remote')
        {
            const remoteJobs = appliedJob.filter((job) => job.remote_or_onsite==='Remote');
            setDisplayJob(remoteJobs);
        }
        else if(filter==='OnSite')
        {
            const onSiteJobs=appliedJob.filter(job=>job.remote_or_onsite==='Onsite')
            setDisplayJob(onSiteJobs);
        }
    }
    useEffect(()=>{
        const storedJobIds = getStoredJobApplication();
        if(jobs.length>0)
        {
            const jobsApplied=jobs.filter(job=>storedJobIds.includes(job.id))
            // console.log(jobsApplied);
            setAppliedJob(jobsApplied)
            setDisplayJob(jobsApplied)
        }
    },[jobs])
    
    return (
      <div className="manrope">
        <h2 className="text-xl font-extrabold">Jobs Applied :{appliedJob.length}</h2>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1">
            <select name="" id="">
                <option value="">Filter</option>
            </select>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 m-8"
          >
            {/* <li><a href="">Filter</a></li> */}
            <li onClick={()=>handleJobsFilter('All')}>
              <a>All</a>
            </li>
            <li onClick={()=>handleJobsFilter('Remote')}>
              <a>Remote</a>
            </li>
            <li onClick={()=>handleJobsFilter('OnSite')} >
              <a>OnSite</a>
            </li>
          </ul>
        </div>
        {displayJob.map((job) => (
          <div key={job.id}>
            <h2 className="text-xl font-extrabold">{job.job_title}</h2>
            <p>{job.company_name}</p>
            <p>
              <button className="btn bg-slate-300">
                {job.remote_or_onsite}
              </button>
            </p>
          </div>
        ))}
      </div>
    );
};

export default AppliedJobs;