function multiplyValue(value:number,multiplier=2):number {
  return value*multiplier;
}


function processInput(value:string| number | boolean ):string| number| boolean{
  if(typeof value==="string"){
   return value.trim().toLowerCase()
  }
  else if(typeof value==="number"){
    return value*10;
  }
  else if(value===true){return "Active";}
  else return "Inactive";
}


function formatCoordinate(location:readonly [latitude:number, longitude:number, locationName:string]):string {
  return `Location: ${location[2]} (${location[0]},${location[1]})`;
}


function concatenateArrays<T>(...arrays:T[][]):T[]{
  let newArray:T[]=[]
  for(let i=0;i<arrays.length;i++){
   newArray=newArray.concat(arrays[i]);}
  return newArray;
}

function getPopularCourses(courses: Course[],minStudents:number):Course[]{
  return courses.filter(course=>course.students>=minStudents&& course.isPublished)
}
interface Course{
  title:string;
  students:number;
  isPublished:boolean;
}


function pluckValues<T,K extends keyof T>(items:T[],key:K):T[K][]{
  return items.map(item=>item[key])
}
class Employee{
  constructor(protected name:string,private baseSalary:number){}
  getDetails():string{
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}
class Manager extends Employee{
  constructor(name:string,baseSalary:number,private department:string){
    super(name,baseSalary)
  }
  getRoleInfo():string{
    return `Manager of ${this.department}: ${this.name}`;
  }
  
}


export{}
const validateAgeAsync =(age:number): Promise<string> =>{
 return new Promise<string>((resolve,reject)=>{
     if(age<18){
        reject( new Error("Access Denied: Must be 18 or older"));
      }
   else{
     setTimeout(()=>{
        resolve("Access Granted");
    }
      ,1000); 
   }
   
 })
}
 
