let studentRecords = [ {name: 'John', id: 123, marks : 98 },
                                 {name: 'Baba', id: 101, marks : 23 },
                                 {name: 'yaga', id: 200, marks : 45 },
                                 {name: 'Wick', id: 115, marks : 75 } ]
       for(let i = 0 ; i<4 ; i++){
        if((studentRecords[i].marks > 50) && (studentRecords[i].id > 120)){
            console.log(studentRecords[i])
        }
       }
            // let arr = studentRecords.filter((x) => x.marks>50)    
            // console.log(arr.map((x) => x.name)) 
            // let totalMarks =  studentRecords.reduce(( sum,n ) => sum +=n.marks , 0)
            // console.log(totalMarks)   
            
            // let arr = studentRecords.filter((x) => x.id > 120)
            // console.log(arr.reduce((sum,x)=> sum += x.marks , 0))

            // let arr = studentRecords.filter((x) => x.marks<50)
            // let newmarks = (arr.map((p) => p.marks + 15))
            // console.log(studentRecords.fil)
        //     let sum = 15
        //     for(let i = 0 ;i<4 ; i++){
        //         let sum = 15
        //     if(studentRecords[i].marks < 50){
        //          sum += studentRecords[i].marks
        //          studentRecords[i].marks = sum
        //     }
        // }
        //     console.log(studentRecords.filter(((x)=> x.marks > 50)).reduce((sum,p) => sum + p.marks,0))

        const arr = [
            { 
                name : "Amul",
                class : "1",
                rollno : "202201"
            },
            { 
                name : "Raju",
                class : "2",
                rollno : "202202"
            },
            { 
                name : "Dhanush",
                class : "3",
                rollno : "202203"
            },
            { 
                name : "Mahesh",
                class : "4",
                rollno : "202204"
            },
            { 
                name : "Monitha",
                class : "5",
                rollno : "202205"
            },
            { 
                name : "Pavithra",
                class : "6",
                rollno : "202206"
            }
        ]

        console.log(arr)