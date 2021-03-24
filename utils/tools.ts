/* format date

*/

export const datePosted = (postedDate: string) => {  
    let inputDate = new Date(postedDate);
    let currentDate = new Date();
    

    let difference = currentDate.setDate(currentDate.getDate() - inputDate.getDate());
    return new Date(difference).getDate();
};