fetch('https://api.chucknorris.io/jokes/random')
.then((resonse)=>{
    // console.log("API:",response.json);
    return resonse.json();
})
.then((data)=>{
    //    console.log("DATA IS:",data)
    var joke = data.value;
    console.log("JOKE:",joke)
})    
.catch()

// try{

// } catch(error){

// }