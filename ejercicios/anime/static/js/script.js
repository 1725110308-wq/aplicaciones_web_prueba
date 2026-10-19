async   function verAnime(){
    //console.log("Funciona!!!!!!!!")
    try{
        const uri = "https://api.animechan.io/v1/quotes/random";
        const response = await fetch(uri);
        const data= await response.json();
        console.log("data:",data);
    }catch(error){
        console.errror("Ups algo fallo", error.message);
    }
}