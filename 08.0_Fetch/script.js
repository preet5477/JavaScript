// Fetch API
fetch("https://randomuser.me/api/?results=5")//fetch data from api


// .then((rowdata)=>{//get response(unreadable)
//     return rowdata.json();
// })
// .then((data)=>{//get data
//     let user= data.results[0].name;
//     console.log(user);
//     console.log(user.title,""+user.first+" "+user.last);
// })

.then((rowdata)=>rowdata.json())//get response and return data
.then((data)=>{console.log("Name = "+ data.results[0].name.title+" "+data.results[0].name.first+" "+data.results[0].name.last)})//get data

.catch((err)=>{console.log(err)});//catch error