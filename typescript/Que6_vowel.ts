class Task
{
    private str:string
    setdata(str:string):void
    {
        this.str=str;
    }
    countAplhabate(str:string)
    {
        let count=0;
        if(str.charAt(0)=='a'||str.charAt(0)=='u'||str.charAt(0)=='e'||str.charAt(0)=='i'||str.charAt(0)=='o')
        {
           
            for(var i=0;i<str.length;i++)
            {
                if(str.charAt(i)=='a'||str.charAt(i)=='u'||str.charAt(i)=='e'||str.charAt(i)=='i'||str.charAt(i)=='o')
                {
                   count++;   
                }
            }
            console.log(str.split(" ").join("").length-count);
        }
        else
        {
            
            for(var i=0;i<str.length;i++)
            {
                if(str.charAt(i)=='a'||str.charAt(i)=='u'||str.charAt(i)=='e'||str.charAt(i)=='i'||str.charAt(i)=='o')
                {
                    count++;                   
                }
                else
                {
                    for(let i = 1;i < this.str.length;i++)
                    {
                        if(this.str[i] == 'a' || this.str[i] == 'e' || this.str[i] == 'i' || this.str[i] == 'o' || this.str[i] == 'u' || this.str[i] == 'A' || this.str[i] == 'E' || this.str[i] == 'I' || this.str[i] == 'O' || this.str[i] == 'U')
                        {
                            count++;    
                        }
                    }
                 }
            console.log(count);
            }   
         }
    }
}
let obj=new Task();
obj.setdata("aditiya");
obj.countAplhabate(" ");

