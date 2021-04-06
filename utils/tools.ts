/* format date

*/

export const datePosted = (postedDate: string) => {  
    let inputDate = new Date(postedDate);
    let currentDate = new Date();
    

    let difference = currentDate.setDate(currentDate.getDate() - inputDate.getDate());

    return new Date(difference).getDate();
};

export const validCompanyUrl = (url: string) => {
    if(!url) return false;

    let parseUrl = url.indexOf(':');
    let restOfUrl = url.slice(parseUrl);
    return restOfUrl.length > 5 ? true : false;
}



export const sortFromNewest = (collection: object[]) => {

    let sortedCollection = collection.sort((a: any, b: any) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
    console.log('TEST', sortedCollection)
    return sortedCollection;
}