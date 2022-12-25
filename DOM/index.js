// let eleId = document.getElementById("text")
// console.log(eleId.innerText)

// let h1 = document.getElementsByTagName("h1")
// console.log(h1[0].innerText)

// let box = document.getElementsByClassName("box")
// console.log(box[0].innerText)

// let h1 = document.getElementsByTagName("h1")
// h1[0].innerText = "Hello World"

function changeDirection(){
    const eleCls = document.getElementsByClassName("container")
    eleCls[0].style.flexDirection = "column"
    eleCls[0].style.height = "500px"
    eleCls[0].style.alignContent = "space-between"
    console.log(eleCls)
}

// let ele = document.getElementsByTagName("h1")
// ele[1].setAttribute("id","heading")
// ele[1].style.color = "red"
// console.log(ele[1])

function changeText(){
    let ele = document.getElementsByClassName("hello")
    ele[0].innerText = "Welecome to Elevation Academy"
}

function clock(){
    let date = new Date()
    console.log(date)
    let hours = date.getHours()
    console.log(hours)
    let mins = date.getMinutes()
    console.log(mins)
    let secs = date.getSeconds()
    console.log(secs)
      
    let meridian
    if(hours>=12){
        meridian ="PM"
    }
    else{
        meridian = "AM"
    }
    if(hours>12){
        hours-=12
    }
    
    if(hours<10){
        hours = `0${hours}`
    }
    
    if(mins<10){
        mins = `0${mins}`
    }
    
    if(secs<10){
        secs = `0${secs}`
    }
    
    
    
    let hrsSlot= document.getElementsByClassName("hours")
    hrsSlot[0].innerHTML = hours
    console.log(hrsSlot)
    
    let minsSlot= document.getElementsByClassName("minutes")
    minsSlot[0].innerHTML = mins
    
    let secsSlot= document.getElementsByClassName("seconds")
    secsSlot[0].innerHTML = secs
    
    let meridianSlot= document.getElementsByClassName("meridian")
    meridianSlot[0].innerHTML = meridian
    
    }


    
    setInterval(() => {
        clock()
    }, 1000);

    let ele1 = document.querySelector(".years").value
    console.log(ele1)