// let count = 0;
// (function () {
//   if (count === 0) {
//     let count = 1;
//     console.log(count); // What is logged?
//   }
//   console.log(count); // What is logged?
// })();

// for (var i = 0; i < 3; i++) {
//     // console.log(i)
//     // clearTimeout(time) //
//     setTimeout(function log() {
//       console.log(i); // What is logged?
//     }, 1000);
//   }

//   const alarm = {
//     remind(aMessage) {
//       alert(aMessage);
//       this.timeoutID = 3;
//     },
  
//     setup() {
//       if (typeof this.timeoutID === 'number') {
//         // this.cancel();
//         console.log(this.timeoutID)
//       }
  
//       this.timeoutID = setTimeout((msg) => {
//         this.remind(msg);
//       }, 1000, 'Wake up!');
//     },
  
//     cancel() {
//       clearTimeout(this.timeoutID);
//     }
//   };
//   window.addEventListener('click', () => alarm.setup());

//  function outer(len){
//         return len
//  }
//  function inner(breadth){
//       console.log(`breadth is ${breadth}`)
//       let length = outer(5)
//       console.log(`length is ${length}`)
//       let area = ( length * breadth);
//       console.log(`Area of Rectangle is ${area}`)
//  }
//   inner(4)

// var res = 0
// function outer(){
//       var counter = 0
//       counter++
//       return counter
// }
// function inner(){ 
//        res += outer()
//        console.log(res)
// }
// inner()
// inner()
// inner()





// var a = 10;
// var x = (function () {
//   var a = 12;
//   return function () {
//     alert(a);
//   };
// })();
// x();


var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        "outerArg = " + outerArg + "\n" +
        "innerArg = " + innerArg + "\n" +
        "outerVar = " + outerVar + "\n" +
        "innerVar = " + innerVar + "\n" +
        "globalVar = " + globalVar);
    
    })(456);
})(123);



 