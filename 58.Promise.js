const uno=()=>{
 return "I am One"
}

const dos= async ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("I am two")
        },3000)
    });
};

const tres=()=>{
   return "I am three"
}
const callMe = async ()=>{
     let valOne=uno()
     console.log(valOne)
     let valTwo = await dos();
     console.log(valTwo)
     let valThree = tres()
     console.log(valThree);
}
callMe()