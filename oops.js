function vehicle(name,engine){
    this.name=name
    this.engine=engine
    this.methodNamehere=()=>{
        console.log(this.name,this.engine);
        console.log(`name of vehicle is ${this.name} & engine is ${this.engine}`);
    }
}   
function students(name,rollno){
    this.name=name
    this.rollno=rollno
    this.studentsData=()=>{
        console.log(this.name,this.rollno);
        console.log(`name of vehicle is ${this.name} & rollno is ${rollno}`);
    }
}   


var Mohit=new students("mohit","34")
var ajeet=new students("ajeet","33")
var Ammar=new students("ammar","30")
Mohit.studentsData()
console.log('Mohit.studentsData(): ', Mohit.studentsData());
// ajeet.studentsData()
// Ammar.studentsData()
var audi=new vehicle("audi","BS6")
// audi.methodNamehere()
// var RangeRover=new vehicle("RangeRover","BS6")
// console.log(audi.name);
// console.log(audi.engine);

// class food {
//     constructor(season, color) {
//       this.s = season;
//       this.c = color;
//     }
//   }
//   var indian = new food("summer", "yellow");
//   console.log(indian.s);
//   console.log(indian);


//   const food = {
//     init(season, color) {
//       this.s = season;
//       this.c = color;
//     }
//   }
//   var indian = Object.create(food)
//   indian.init ("summer","yellow")
//   console.log(indian);
//   console.log(indian);

//   const food = {
//     init(season, color) {
//       this.s = season;
//       this.c = color;
//     }
//   }
//   var indian = Object.create(food)
//   indian.init ("summer","yellow")
//   console.log(indian);
//   console.log(indian);
  
//   console.log(food.indian);
  
//   var a= Object.create(null)


