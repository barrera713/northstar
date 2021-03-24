/* format date

*/

export const datePosted = (postedDate: string) => {
    // convert input date to new date
    // create const with current date
    // subtract current - input
    // save diff in new date
    // get hours from diff date
    
    let inputDate = new Date(postedDate);
    let currentDate = new Date();
    

    let difference = currentDate.setDate(currentDate.getDate() - inputDate.getDate());
    // console.log('FUNCTION output => ', new Date(difference).getDate())
    return new Date(difference).getDate();
};