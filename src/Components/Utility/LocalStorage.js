const getStoredJobApplication=()=>{
    const storedJobApplication=localStorage.getItem('job-applications')
    if(storedJobApplication)
    {
        return JSON.parse(storedJobApplication);
    }
    else return [];
}
const saveJobAplication=id=>{
    const storedJobApplication=getStoredJobApplication();
    const exists=storedJobApplication.find(jobId=>jobId==id);
    if(!exists)
    {
        storedJobApplication.push(id);
        localStorage.setItem('job-applications',JSON.stringify(storedJobApplication))
    }
}
export {saveJobAplication,getStoredJobApplication}