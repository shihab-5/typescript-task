Title: When use interface as a structure of data over type alias or use type alias over interface

Introduction: Type alias and interface are both special structure of data in TypeScript object.They reduce over written code for same type of implementation.Both use for the structure of a data but get priority according to the operation type.

Explanation: In typescript when we want to use type alias or interface , we need to know the exact implementation knowledge of both shape of object then we get the best utilize of it.Typescript suggested use interface as much as possible .We cannot use interface everywhere and same for the type alias.
Interface use case get more priority when we work with objects and merge ,extends operation that are more reliable in Interface. Example:

interface fruits{
    season:string;
}
interface fruits{
    region:string;
}

interface jackfruit extends fruits{
    Test:string;
}

In these example ,we apply interface for merging that not possible in type alias .Object Extends are more preferable in Interface.

Type alias is use on that part where interface has limitations. Union, intersection , tuples, primitives are accepted in type alias. But they are not implement in interface.Example:

type region = string ;
type season = "summer" | "winter" | "Rainy";
type fruits = {
    test : string;    
}
const jackfruit : fruits ={
   test:"sweet",
   season:"summer",
   region: "Bangladesh", 
}

In this example , we see the primitives , union uses in type alias but they are applicable in interface.

Conclusion : In our Previous discussion, we understand the uses of interface and type alias. They are both important in typescript implementation on their right place.