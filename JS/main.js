/**
console.log("Hello World!") //แสดงค่าที่เว็บเบราเซอร์ แสดงผลที่ Console

//String
let fname = 'John'
const idcard = '123'
//var ปัจจุบันไม่ค่อยได้ใช้แล้ว

//Number
let age = 30
let height = 163.3
const pi = 3.14
fname = 'Tom'

//constidcard = '456' 
//ไม่สามารถเปลี่ยนค่าได้ เพราะประกาศด้วย const

console.log('ID card:',idcard)

//แสดงบรรทัดเดียว
console.log('name',fname,'age',age)

// คอมเมนต์แบบหลายบรรทัด/* */  

/**
 + บวก
 - ลบ
 * คูณ
 / หาร
 % mod หารเอาเศษ
 */

 /**
  condition statement (if, else ,switch)
    == เท่ากับ
    != ไม่เท่ากับ
    > มากกว่า
    >=มากกว่าเท่ากับ
    < น้อยกว่า
    <=น้อยกว่าเท่ากับ 
  */

/** 
let number1 = 5
let number2 = 5

    let nummber3 = number1 + number2
    console.log('number3 =',nummber3)

    let condition1 = number1 <= number2 //boolean
    console.log('Condition =',condition1)
*/

//if - else condition 
/**
 if(number1 != number2) {
    console.log('this if')
} else if(number1 == number2) {
    console.log('this else if')
}else {
    console.log('this else')
}
 */

/** Grade
>=80 A
>=70 B
>=60 C
>=50 D
<50 F

let score = prompt('Enter your score:') //รับค่าจากผู้ใช้ผ่านทางหน้าจอ
 if(score >= 80) {
    console.log('A')
 } else if(score >= 70){
    console.log('B')
 } else  if(score >= 60){
    console.log('C')
 } else if(score >= 50){
    console.log('D')
 } else {
    console.log('F')
 }
*/

/**
  && และ
  || หรือ
  ! not

let number1 = 5
let number2 = 10

T && T = T
T && F = F
T || F = T
not true = false
let condition = !(number1 >= 3 || number1 >= 11)
console.log('result of condition =',condition) 

let number = 20
if(!(number % 2 == 0)){
    console.log('you are even')
}*/

/**while for 

let counter = 0
 while (counter < 10){ //T ทำ F ออก
    console.log('Hi')
    counter = counter + 1
    //counter += 1
    //counter++
    //counter-- ลดทีละ1
 }

 for(let counter = 0; counter < 10; counter++){
    console.log('Hi')
 } */

/**array
 
let age1 = 20
let age2 = 25
let age3 = 30
ages = [200,300,400] //แทนที่ค่าทั้งหมด

console.log('age1 age2 age 3 = ',age1,age2,age3)
console.log(`age1 age2 age 3 = ${age1} ${age2} ${age3}`) //backtick
console.log('array',ages) 
//console.log('index',ages[0])

//ต่อ array ท้าย
ages.push(25)
console.log('push array',ages)

//ลบ array ตัวสุดท้าย
ages.pop()
console.log('pop array',ages)

if(ages.includes(30)){
    console.log('มีเลข 30 อยู๋ใน array')
}

let ages = [50,20,25,30,35,40]

ages.sort() //เรียงลำดับจากน้อยไปมาก
console.log(ages)

let name_list = ['aa', 'bb', 'cc']
name_list.push('dd')
console.log(name_list)

name_list.pop()
console.log(name_list)
console.log('name_list',name_list.length)
console.log('name_list',name_list[0])
console.log('name_list',name_list[1]) 
console.log('name_list',name_list[2])
console.log('name_list',name_list[3]) //undefined ไม่มีค่า

for(let index = 0; index < name_list.length; index++){
    console.log('name_list ',name_list[index])
}
*/

/** object
let age1 = 30
let name1 = 'aa'
let grade1 = 'A'

let age2 = 20
let name2 = 'bb'
let grade2 = 'B'

console.log(studen)
console.log(studen.age) //เข้าถึง property age
console.log(studen.name)
console.log(studen.grade)


let student = [{ //property
    age: 30,
    name: 'aa',
    grade: 'A'
}, {
    age: 20,
    name: 'bb',
    grade: 'B'
}]
student.push({
    age: 40,
    name: 'cc',
    grade: 'C'
})
student.pop()

for (let index = 0; index < student.length; index++) {
    console.log('Student number',(index + 1))
    console.log('age',student[index].age)
    console.log('name',student[index].name)
    console.log('grade',student[index].grade)
   
}
 */

/** function
 let score1 = 55
let score2 = 65

let grade = ''
function calculat_grade(score){
    if(score >= 80) {
    grade = 'A'
    } else if (score >= 70){
    grade = 'B'
    } else if (score >= 60){
    grade = 'C'
    }else if (score >= 50){
    grade = 'D'
    } else{
    grade = 'F'
    }
return grade
}
// call function
let grade1 = calculat_grade(score1)
console.log('Grade1 =',grade1)

let grade2 = calculat_grade(score2)
console.log('Grade2 =',grade2)

 */

/** array
 

//arrow function arrow มันจะเข้าไปทุกๆ index ของ array

score[0] = score[0] * 2
score[1] = score[1] * 2
score[2] = score[2] * 2
score[3] = score[3] * 2
//arrow function arrow มันจะเข้าไปทุกๆ index ของ array
//เข้าไปทุกๆ index แล้ว คูณ operate ตามใจ
score = score.map((s) => {
    return s * 2
})

score.forEach((s) => { 
    console.log('forEach Score',s)
})  

let newScore = []

for (let index = 0; index < score.length; index++){
    console.log('score',score[index])
    if (score[index] >= 30){
        newScore.push(score[index])
    }
}

let newScore = score.filter((s) => {
    if(s>=30){
        return true
    }else{
        return false
    }
})

newScore.forEach((ns) => {
    console.log('New Score',ns)
})

let score = [20,30,40,50]


for (let index = 0; index < score.length; index++){
    console.log('score',score[index])
    
}

let newScore = score.filter((s) => {
    return s >= 30
})

newScore.forEach((ns) => {
    console.log('New Score',ns)
})
 */

/**
 object function
 */

let students = [
    {
        name: 'aa',
        score: 50,
        grade: 'D'
    },{
        name: 'bb',
        score: 80,
        grade: 'A'
    }
]

let student = students.find((s) => {
    if(s.name == 'aa'){
        return true
    }
})

let double_score = students.map((s) => {
    s.score = s.score * 2
    return s
})

let hight_score = students.filter((s) => {
    if (s.score >= 120){
        return true
    }
})

console.log(student)
console.log('double_score',double_score)
console.log('hight_score',hight_score)