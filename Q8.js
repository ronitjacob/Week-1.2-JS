// Also tell the user if they are legal to vote or not.

const user = [{
    name: "ABC",
    age: 30
}, {
    name: "XYZ",
    age: 10
}];

function canVote(user){
   for(let i=0 ; i< user.length; i++){
    if(user[i].age >= 18){
        console.log(user[i].name + " is legal to vote");
        }
        else{
            console.log(user[i].name + " is not legal to vote");
            }
   }
}
canVote(user);