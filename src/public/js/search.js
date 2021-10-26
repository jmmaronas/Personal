
fetch('/api')
  .then(response => response.json())
  .then(data =>{
    respuesta=  data.personal;    
    let inputResult = document.querySelector("#search")
    inputResult.addEventListener("keyup", e=>{                   
      let count=0;
      document.getElementById("listadoPersonal").innerHTML="";
      for(e of respuesta){
        let nombre= e.nombre.toLowerCase();
        if(nombre.indexOf(inputResult.value)!=-1){          
          count+=1;          
          document.getElementById("listadoPersonal").innerHTML+=`
              <tr class="bg-${e.state ? 'light' : 'warning'}">
                <td>${count}</td>
                <td>${e.nombre}</td>
                <td>${e.legajo}</td>
                <td>${e.dni}</td>
                <td>${e.especialidad}</td>
                <td>${e.turno} </td>
                <td>${e.horario}</td>
              
                <td>
                    <a href='/status/${e._id}' 
                        class="btn ${e.state ? 'btn-success' : 'btn-secondary'}"
                        ><i class="${e.state ? 'far fa-check-circle' : 'far fa-times-circle'}"></i></a>
                    <a href='/delete/${e._id}' class="btn btn-danger"><i class="far fa-trash-alt"></i></a>
                    <a href='/edit/${e._id}' class="btn btn-primary"><i class="fas fa-user-edit"></i></a>
                </td>
              </tr>              
          `;
        }
      }      
    });
  });

