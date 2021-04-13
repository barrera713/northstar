export const validCompanyUrl = (url: string) => {
    if(!url) return false;

    let parseUrl = url.indexOf(':');
    let restOfUrl = url.slice(parseUrl);
    return restOfUrl.length > 5 ? true : false;
};

export const numOfDays = (date: string) => {
    // @Params string representing date
    // @Return number of days since job post

    const postDate = new Date(date).getTime();
    const today = new Date().getTime();
    const difference = Math.abs(today - postDate);

    // 1000 is 1 second. There are 60 seconds in a minute, 60 minutes in an hour, and 24 hours in a day
    const day = 1000 * 60 * 60 * 24;
    return Math.floor(difference / day);
};

const filterOldPosts = (collection: object[]) => {
    interface JobProperties {
      created_at: string;
    }

    return collection.filter((job: JobProperties) => numOfDays(job.created_at) < 30);
};


export const sortFromNewest = (collection: object[]) => {

    let removedOldJobs = filterOldPosts(collection);
    return removedOldJobs.sort((a: any, b: any) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
};


export const alphaCharacters = (str: string) => {
    const regex = new RegExp(/^[a-zA-Z]+$/);
    // console.log('RETURN VALUE', regex.test(str))
    return regex.test(str.trim().toLowerCase());
}