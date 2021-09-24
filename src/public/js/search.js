let respuesta;
fetch('/api')
  .then(response => response.json())
  .then(data =>{
    respuesta=  data.personal;
    console.log(respuesta);
    let inputResult = document.querySelector("#search")
    inputResult.addEventListener("keydown", e=>{       
      let result=[];
      console.log(inputResult.value);      
      for(element of respuesta){
        let nombre= element.nombre.toLowerCase();
        if(nombre.indexOf(inputResult.value)!=-1){          
          result.push(element);
          console.log(result);          
        }
      }
      // for(elem of result){
      //   document.querySelector("#listSearch").innerHTML+=`
      //     <li>${result.nombre}</li>`
      //}      
    });
  });

