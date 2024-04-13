/**
 * resolve(value)
 * reject(reason)
 * 
 */
//Creating a promise
function fetchUserData(userId){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(userId===1003){
                resolve({id:1003, name:"RK"}); //Fulfill the promise
            } else{
                reject(new Error('User Not Found')); //Reject the promise
            }
        }, 3000);

    })
}
//Consuming the Promise
fetchUserData(1004)
    .then(user =>{
        console.log('User Found:', user.name); //Output
    })

    .catch(error =>{
        console.error(error) //The error message
    })