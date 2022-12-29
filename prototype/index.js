// const parent = {
//     calc(){
//         console.log(`my name is ${this.fname} ${this.lname}`)
//     }
// }

// const child1 = Object.create(parent)
// child1.fname = "Nandini"
// child1.lname = "Reddy"
// child1.calc()
// const child2 = Object.create(parent)
// child2.fname = "vignesh"
// child2.calc()

// const obj1= {
//     initialize(fname,lname){
//        this.fname = fname;
//        this.lname = lname
//     }
// }
// const ram = Object.create(obj1)
// ram.initialize("ram","kumar")
// console.log(ram)

// const shyam = Object.create(obj1)
// shyam.initialize("shyam","kumar")
// console.log(shyam)

// function Student(fname,lname,branch){
//     this.fname = fname;
//     this.lname = lname;
//     this.branch = branch
// }

// const student1 = new Student("ram","kumar","CSE")
// const student2 = new Student("shyam","Sundar","EEE")
// console.log(student1)
// console.log(student2)

// let fruits=["Apple","Orange"]
// console.log()

// const addSum = {
//     add : function(a){
//        let sum = 0;
//        for(let i = 0; i<a.length ; i++){
//            sum+= a[i]
//        }
//        console.log(sum)
//     }
//  }
//  addSum.add([1,2,3,4,5])

 class Employee{
    
    constructor(name,empId){
        this.name = Employee.capitalize(name)
        this.empId = empId
    }
    markAttendance(){
        console.log(`${this.name} with Employes Id ${this.empId}`)
    }
    applyForLeave(){
        console.log(`${this.name} with Employes Id ${this.empId}`)
    }
}

const himani = new Employee("himani",1)
console.log(himani)
himani.markAttendance()
himani.applyForLeave()

class Manager extends Employee{
    manages(){
        console.log(`${this.name} with Employee with Id ${this.empId}`)
    }
    requestForLeave(){
        // console.log(`${this.name} with Employee with Id ${this.empId}`)
        super.applyForLeave()
    }
}

const rathore = new Manager("rathore",101)
console.log(rathore)

rathore.markAttendance()
rathore.applyForLeave()
rathore.manages()


