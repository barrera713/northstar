export const saveInLocalStorage = (job: object) => {
    
    // if there are no saved jobs, currentSaved is initialized as an empty array in order to push current saved job
    let currentSaved = JSON.parse(localStorage.getItem("saved") || "[]");
    currentSaved.push(job);
    
    // use Set to eliminate duplicates;
    let uniqueSet = [];
    let seen = new Map();
    for(let job of currentSaved) {
        if(!seen.has(job.id)) {
            uniqueSet.push(job)
        };

        seen.set(job.id, job.id);
    }

    localStorage.setItem("saved", JSON.stringify(uniqueSet));
};

export const alreadySaved = (job: any) => {

    const getSavedJobs = JSON.parse(localStorage.getItem("saved"));
    // edge case where there are no jobs saved in local storage
    if(getSavedJobs === null) {
        return false;
    }

    let jobFound = false; 
    getSavedJobs.forEach((savedJob: any) => {
        if(savedJob.id === job.id) {
            jobFound = true;
        };
    });

    return jobFound;
}

export const removeFromLocalStorage = (job: any) => {
    const getSavedJobs = JSON.parse(localStorage.getItem("saved"));
    const removeJob = getSavedJobs.filter((savedJob: any) => savedJob.id !== job.id);
    localStorage.setItem("saved", JSON.stringify(removeJob));
}