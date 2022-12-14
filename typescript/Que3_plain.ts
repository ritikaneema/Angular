let check=(str)=>{
    if(str==str.split("").reverse().join(""))
    {
        console.log("String is Palaindrom");
    }
    else
    {
        console.log("String is not palaindrom");
    }
}
check("ritika");
