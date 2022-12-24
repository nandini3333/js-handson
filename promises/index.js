function wish(){
    return "Merry Christmas"
}
function festival(callback){
        let greet = callback()
        console.log(`${greet} to everyone`)
}
festival(wish)

// setTimeout(() => {
//      console.log("1")
//      setTimeout(() => {
//         console.log("2")
//         setTimeout(() => {
//             console.log("3")
//             setTimeout(() => {
//                 console.log("4")
//                 setTimeout(() => {
//                     console.log("5")
//                     setTimeout(() => {
//                         console.log("6")
//                         setTimeout(() => {
//                             console.log("7")
//                          }, 1000);
//                      }, 6000);
//                  }, 5000);
//              }, 4000);
//          }, 3000);
//      }, 2000);
// },1000);

// const promise = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve()       
//     },1000);
// })

// promise
// .then(()=>{
//     console.log("1")
// })
//  .then(()=>{
//      setTimeout(() => {
//         console.log("2")
//      }, 3000);
//  })
//  .then(()=>{
//     setTimeout(() => {
//         console.log("3")
//     },6000);
//  })
//  .then(()=>{
//     setTimeout(() => {
//         console.log("4")
//     },10000);
//  })
//  .then(()=>{
//     setTimeout(() => {
//        console.log("5")
//     },15000);
// })
// .then(()=>{
//     setTimeout(() => {
//        console.log("6")
//     }, 21000);
// })
// .then(()=>{
//     setTimeout(() => {
//        console.log("7")
//     },27000);
// })
//  .catch((error)=>{
//      console.log(error)
//  })


// const promise = new Promise((resolve,reject)=>{
//       var a = 12
//       if(a>=10){
//         resolve("Promise Resolved")
//       }
//       else{
//         reject("Promise Rejected")
//       }
// })

// promise
// .then((res)=> {
//     console.log(res)
// })
// .catch((err)=> {
//     console.log(err)
// })

 function greet(){
     return "Advance"
}

function wish(year,callback){
    let gt = callback()
    console.log(`${gt} Happy New Year ${year}`)
}

wish("2023",greet)

 