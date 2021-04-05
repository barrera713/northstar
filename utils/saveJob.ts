export const saveInLocalStorage = (job: object) => {
    
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