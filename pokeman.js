async function fetchData(){

  try{
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/typhlosion");
    if(!rsponse.ok){
      
    }
  }
  catch(error){
    console.error(error);
  }
}
