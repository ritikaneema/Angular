let multiplestring=(str:string[])=>
{
    str.forEach(value=>{
        console.log(value+" "+value.length);
    }
    )
}
console.log(multiplestring(["ravi","lavi"]));
