let role="Admin"

const usr={
    name:"Preet",
    age: 23,
    mobile:772403677,
    isstud:true,
    add:{
        city:"Indore"
    },
    [role]:"hwllp"
};

const user1={...usr};
user1.add.city="Ujjain";
for(key in user1){
    console.log(key,":",user1[key]);
} 