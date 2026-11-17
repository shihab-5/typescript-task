Title: Discuss type hierarchy any,unknown and never 

Introduction: In our daily work we use any , unknown and never type but the knowledge gap of implementation and hierarchy causes project crashes , different type of bug and others. In shorts any are allow all type of value where unknown allow all value but check before using it and never represents an nonexisting value.

Explanation: Any type is a risk fact in typescript.It breaks the type checking which was one of the main reason it build for. This type allow all type of value and all type of operation that could be an error most of the time. If any type assign a value string then we can perform number's operation with string value, for these type of uses error comes. 
On the other hand, unknown value we can't declare the type of it because it was unknown but when get the value check before using it.So unknown type easily avoid runtime or compilation error.It is the top type because it give access to the all type.
Never is the bottom type of the typescript.It represents the impossible value.

Unknown always preferred over any because any destroy the identity of the typescript.Choosing any over unknown in typescript will be a worst decision most of the time.Unknown and any both supports all type but unknown can run without bugs and errors but any can cause the error and bugs.

Conclusion: Any and unknown both are open for all but unknown is the most safest.There will be certain case where any get preferred over unknown but most of the time unknown wins.Never always use in the bottom and some time get use according to the statement.