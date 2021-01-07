var students = [];
students [0] = "Abdul"
students [1] = "Qadeer"
students[2] = "solangi"

alert(students)

students.pop()

students.push("engineer")
console.log(students)

// shift method remove elements from start

students.shift()
console.log(students)



// add elements from starts


students.unshift("Bilal","Zunaib")
console.log(students)




students.splice(0,2,"aq","qa")
console.log(students)

var num = prompt("Enter a  number")

for ( i= 2; i<=num; i++){
    if (num %2 === 0){
        console.log(num, +"isa prime number ")
    }else {
        console.log("Not a prime no ")
    }
}




var userInput = prompt("Enter a number")

for (let i = 1; i<=10; i++){
    console.log(userInput + "X" +i+" = " +(i*userInput))
}









for (let i = 1; i<=10; i++){
    console.log(2 + "X" +i+" = " +(i*2))
}



for (var i = 0; i<3; i++){
    for (var j = 0 ; j<5; j++){
        console.log("AQ" + "<br>")
    } 
}







        // Right angle Triangle

        for (var i = 7; i >= 1; i--) {
            var str = "";
             for (var j = i; j <= 7; j++) {
                  str += "*"; } 
                  console.log(str); 
           }



        //    Reverse words

var number = prompt ("Enter a number")

for ( i = number.length-1 ; i >=0; i--){
    document.write(number[i])
}


// factorial 



        function facto(){

let i, no, fact;
fact=1;
no=(document.getElementById("num").value);
document.getElementById("num").value = " ";
for(i=1; i<=no; i++)  
{
fact= fact*i;
}  
document.getElementById("answer").value= fact;
}



// Odd and Even numbers






        let arr = [];
        let even = [];
        let odd = [];

        function addRoll() {
            const num = document.getElementById("input").value;
            arr.push(num);

            document.getElementById("allNumbers").innerText = arr;
            document.getElementById("input").value = "";
        }

        function arrangeRoll() {
            for (i = 0; i < arr.length; i++) {
                if (arr[i] % 2 === 0) {
                    even.push( arr[i]  );
                }else{
                    odd.push( arr[i]  );
                }
            }
            document.getElementById("odd").innerHTML = odd;
            document.getElementById("even").innerText = even;
        }


        
        //   Table Generator 

         function tableGenerator(){
        let Uinput=document.getElementById("number").value;
         for (let i = 1; i <= 10 ; i= i +1) {
             console.log( Uinput + " X "+ i +"  =" + (i * Uinput) );        

        }

        }




        let arr = [];

        arr[0] = "Abdul";
        arr[1] = "Qadeer";
        arr[2] = "solangi";
        arr[4] = "AQ";
        arr[5] = "Ab";
        console.log(arr)
        
arr.pop([1]);
console.log(arr)

arr.push("name","name1")

console.log(arr)


arr.shift()
console.log(arr)


arr.unshift("nan","nan")

console.log(arr)

arr.splice(2,2, "not","yes","true")
console.log(arr)




let arr = ["Abdul","Qadeer","Solangi","ss","ab","aq","an"]

arr.splice(2,1);

console.log(arr)


arr.slice(1,1)
console.log(arr)



let arr = ["Karachi","Lahore","ISb","quetta"]

let city = prompt("Enter a city name")

for ( i= 0; i<arr.length; i++){
    if (arr[i] === "Karachi"){
        alert("It is one of the cleanest city")
        break;

    }
    else {
        alert("Not a clean")
    }
}



let arr = [];
let odd = [];
let even = []; 

function addRoll(){
    const roll = document.getElementById("input").value ;
    arr.push(roll);

    document.getElementById("allRollNumbers").innerHTML = arr;
    document.getElementById("input").value = "";
}

function arrangeRoll() {
    for (i=0; i<arr.length;i++){
        if (arr[i] % 2 === 0){
            even.push(arr[i])
        }else {
            odd.push(arr[i])
        }
    }

    document.getElementById("odd").innerHTML = odd;
    document.getElementById("even").innerText = even;
}


userInput = prompt("Enter a number to generate table")
// function tableGenerator(){
//     let userInput=document.getElementById("number").value;
for (i = 1; i<=10; i++){
    console.log( userInput + " X "+ i +"  =" + (i * userInput) ); 
}



Uinput = prompt ("Enter a number")

for (i = 1; i<=10; i++){
    console.log(Uinput + "X" + i + " =" +(i * Uinput))
}



let numbers = [];
let sum = 0;
let userInput = 0;
let avrg = 0;

for (let i = 0; i < 4; i++) {
    userInput = +prompt('enter no ' + (i + 1))
    sum = sum + userInput

    numbers.push(userInput);
}

avrg = sum / numbers.length;

document.write("You entered: " + numbers + "<br>")
document.write("Total sum: " + sum + "<br>")
document.write("Total Average: " + avrg)



let numbers = [];
let sum = 0;
let userInput = 0;
let avrg = 0;

for (let i = 0; i<=4; i++){
    userInput = +prompt("Enter no" + (i+1))
    sum = sum + userInput
    numbers.push(userInput)

}

avrg = sum / numbers.length;

document.write("You entered :" + numbers + "<br>")
document.write("Total sum :" + sum + "<br>")
document.write("Total Average:" +avrg)





// Date Chapters



var a = new Date();
document.write(a)

let b = a.toString();
document.write(a)

let a = new Date();

let c  = a.slice(0,3)
console.log(c) 

let day = now.getDay();
console.log(day) 


var a = new Date();
console.log(a)
var b = getDay();
console.log(a,b)

var b = new Date();
console.log(b)
var a = getTime();
console.log(a)


var dob = new Date (prompt ("Enter your birthday","Jan 1,1999"))

var dobmili = dob.getTime();
var today = new Date();
var todaymili = today.getTime();
var diff = todaymili - dobmili;
var hours = dob.getHours();
var accuage = Math.floor(diff/(1000*60*60*24*30*12));

document.write(accuage)


var a = new Date();
console.log(a)

let b = a.toString();
document.write(b)


b = a.slice(0,4)

console.log(b)


let a = new Date();

console.log(a)

let b = a.getDay()
console.log(b)



let date = new Date ();
date = date.toString();
date = date.getHours();
document.write(date)



var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
 let date = new Date();
 let today = date.getHours();
 console.log(today);


 

var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let date = new Date();
let today = date.getMonth();
console.log(today);


let date = new Date();
let today = date.getHours();
console.log(today);



let date = new Date();
let today = date.getSeconds();
console.log(today);


let date = new Date();
let today = date.getFullYear();
console.log(today);





let date = new Date();
let today = date.getMilliseconds();
console.log(today);





let date = new Date();
let today = date.getMinutes();
console.log(today);






let date = new Date();
let today = date.getTime();
console.log(today);


var dob = new Date (prompt ("Enter your birthday","Jan 1,1999"))


var dobmili = dob.getTime();
var today = new Date();
var todaymili = today.getTime();
var diff = todaymili - dobmili;

// var hours = dob.getHours();

var accuage = new Date().Math.floor(diff/(1000*60*60*24*30*12));
document.write(accuage)




let date  = new Date();
document.write(date.toDateString())




let date  = new Date();
document.write(date.toDateString())




Functions in javascript


function greeting(){
        console.log("welcome")
}


greeting()


// passing parameters in function 



function add(a,b,c){
        console.log(a+b+c)
        
}
add(2,3,4)


function add(a,b,c){
       let z = a + b + c;
       return z;  // when you use return then you must initialize variable name
        
}
let g = add(2,3,4);
console.log(g)



// global and local variables in function 


let f = "global"
function add(a,b,c){
        alert(f)
       let z = a + b + c;
       return z;  // when you use return then you must initialize variable name
        
}
let g = add(2,3,4);
alert(g)




function foo (a,b){
     return a + b;
}
console.log(foo(1))




function foo (a,b=4){ // default parameter
        return a + b;
   }
   console.log(foo(1))



function foo (a,b=4){
        return a + b;
   }
   console.log(foo(1,5))

   



function foo (){
        
   }
   console.log(foo(1,5))    // answer willbe undefined 





function foo (){
        
   }
   console.log(foo())   // answer will be undefined 


// display current date and time using function
   
   function date(){
           let date = new Date();
           return date;
   }

   console.log(date())


// full name print in function

function full(firstName,lastName,fullName){
        firstName = "Abdul";
        lastName = "Qadeer"
         fullName = firstName + lastName;
        return fullName;
}

console.log(full())



// claculator program parameters num1 , num2 and opr



function calc(num1,opr,num2){
        if(opr === "+"){
                return num1 + num2
        }else if (opr === "-"){
                return num1 - num2;
        }else if(opr === "*"){
                return num1 * num2
        }else {
                return "Wrong "
        }
}

let result1 = calc(5,"+",4)
let result2 = calc(7,"-",6)
let result3 = calc(2,"*",3)
let result4 = calc(3,"%",5)

console.log(result1)
console.log(result2)
console.log(result3)
console.log(result4)



Events in Function



function click(){
       
}


alert("Good to go...")


function greet(){
        alert("What a beautiful picture")
}


// image changed function onmouseoer

function swap(){
        let pic  = document.getElementById("pic");
        pic.src = "./nature.jpeg"
        
}




// Objects Constructors



function Student (name,roll){
        this.name = name;
        this.roll = roll
}

let student1 = new Student("Abdul",123)
let student2 = new Student("Qadeer",456)

console.log(student1)
console.log(student2)


// Objects prototype

function Student (name,roll){
        this.name = name;
        this.roll = roll;
        this.getName = function (){
                return this.name
        }
}


let student1 = new Student("Qadeer",123)

console.log(student1.g)



// Prototype copy the function

function Student (name,roll){
        this.name = name;
        this.roll = roll;
        
}

Student.prototype.getName = function (){
        return this.name;
}


let student1 = new Student("Qadeer",123)

console.log(student1.getName())



// Checking properties for object


let student2 = {
        name : "Qadeer",
        roll : 123,
}

console.log("roll" in student2)


// Checking all properties in object




let student2 = {
        name : "Qadeer",
        roll : 123,
        school : "DUET"
}

for(var prop in student2){
        console.log(prop)
}


// getting values from objecct


let student2 = {
        name : "Qadeer",
        roll : 123,
        school : "DUET"
}

for( var prop in student2){
        console.log(prop,student2[prop])
}




let student2 = {
        name : "Qadeer",
        roll : 123,
        school : "DUET"
}

console.log( student2.hasOwnProperty("school"))






let student2 = {
        name : "Qadeer",
        roll : 123,
        school : "DUET"
}

console.log(student2)

console.log('constructor' in student2)

console.log(student2.hasOwnProperty("roll"))




//  javascript method

        var users = []

        var std1 = {
            name: "Ali",
            roll: 234,
            getName: function () {
                console.log("this student name is: ", this.name);
            },
            isActive: function () {
                console.log("isActive running", this.active);
            },
            getAverage: function () {
                let i = 0;
                let sum = 0;

                while (this.marks[i] != undefined) {
                    sum += this.marks[i++];
                }

                return sum / this.marks.length;

            },
            marks: [23, 45, 23, 45, 56, 78, 78, 89, 78],
            active: true,
            suspend: function () {
                this.active = false;
            }
        }
        var std2 = {
            name: "Saeed",
            roll: 674,
            getName: function () {
                console.log("this student name is: ", this.name);
            },
            isActive: function () {
                console.log("isActive running", this.active);
            },
            getAverage: function () {
                let i = 0;
                let sum = 0;

                while (this.marks[i] != undefined) {
                    sum += this.marks[i++];
                }

                return sum / this.marks.length;

            },
            marks: [0, 85, 23, 76, 36, 68, 78, 19, 78],
            active: false,
            suspend: function () {
                this.active = false;
            }
        }

        users.push(std1)
        users.push(std2)

        users[0].getName()
        users[1].getName()
        users[0].isActive()
        users[1].isActive()

        console.log(users[0].getAverage());
        console.log(users[1].getAverage());

        users[0].isActive()
        users[0].suspend()
        users[0].isActive()



        let users = [];

        let student1 = {
             name : "Abdul Qadeer",
             roll : 1234,

             getName : function (){
                     console.log("This student name is:",this.name)
             },
             
             isActive : function (){
                     console.log("This active is running:",this.active)
             },
             getAverage : function (){
                     let i = 0;
                    let sum = 0;

                    while (this.marks[i]!= undefined){
                            sum += this.marks[i++]
                    }
                    return sum/this.marks.length

             },
             marks : [23,24,56,78,88,90,89],
             active : true,
             suspend : function (){
                     this.active = false;
             }
        }

        console.log(student1)