const Personal=require('../../models/personal');

const tabla =document.querySelector('#tablaIngresos');
const form =document.querySelector('#agregar');

form.addEventListener('click', e=>{
    let count=0;
    let nombre = document.querySelector('#nombre').value;
    let legajo = document.querySelector('#legajo').value;
    let dni = document.querySelector('#dni').value;
    let especialidad = document.querySelector('#especialida').value;
    let turno = document.querySelector('#turno').value;
    let horario = document.querySelector('#horario').value;
    
    let personaData= new FormData({
    nombre:nombre,
    dni: dni,
    legajo: legajo,
    especialidad: especialidad,
    turno: turno,
    horario: horario
    });
    let persona= new Personal(personaData);
    persona.save();
    tabla.innerHTML =`
        <tr>
            <td>${count+=1}</td>
            <td>${nombre}</td>
            <td>${legajo}</td>
            <td>${dni}</td>
            <td>${especialidad}</td>
            <td>${turno}</td>
            <td>${horario}</td>
        </tr>
    `;    
    e.preventDefault();
});