 const people = [
  {name:'ВЛАДЛЕН',ege:25,budget:4000},
  {name:'Елена',ege:17,budget:3400},
  {name:'Игорь',ege:49,budget:50000},
  {name:'Михаил',ege:15,budget:1800},
  {name:'Василиса',ege:24,budget:25000},
  {name:'Виктория',ege:38,budget:2300},
 ]

// ror (let i = 0; i < people.length;i++ ){
//   console.log(people[i]);
// }

// for (let person of people){
//   console.log(person)
// }

//ForEach---------------------------
// people.forEach(function(person,index , pArr){
//   console.log(person)
//   console.log(index)
//   console.log(pArr)
// })

// people.forEach(person => console.log(person))

//map------------------------------
// const newPeople = people.map(person =>{
//   return person
// })
// console.log(newPeople)

// const newPeople = people.map(person =>
//    `${person.name} (${person.ege})`)
//    console.log(newPeople)

//    const newPeople = people.map(person =>
//     person.ege * 3)
//     console.log(newPeople)

//filter------------------------
// const adults =[]
// for(let i = 0; i < people.length; i++){
//   if(people[i].ege >= 18){
//     adults.push(people[i])
//   }
// }

// const adults = people.filter(person =>{
//   if(person.eag >=18){
//     return true
//   }
// })
// const adults = people.filter(person =>person.eag >=18)
      
//reduse---------------------------
//  const amount =people.reduse((total,person) =>{
//   return total+ person.budget
//   },0)
//   const amount =people.reduse((total,person) => total + person.budget
//     ,0)

//find---------------------------
//const iror = people.find(person => person.name === 'Игорь')


let s =[1, 10, 15, -100, -23, 19, 15032]
s.map
