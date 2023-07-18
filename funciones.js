

let contacto=[
{
    id:1,
    nombres:'Maria Paula',
    apellidos:'Perez Sanchez',
    telefono:95987888,
    ubicaciones:{
        ciudad:'Comayagua',
        direccion:'11 calle 4 ave NE'}
}
]

imprimir(contacto, true);

nuevoContacto(2,'Juana Griselda', 'Gomez Discua', 89554577, 'Comayagua', 'Frente al Hospital general');
eliminarContacto(contacto);
function nuevoContacto(id, nombres, apellidos, telefono,ciudad,direccion)
{
    let nuevo={//funsion
        id:id,
        nombres:nombres,
        apellidos:apellidos,
        telefono:telefono,
        ubicaciones:{ciudad:ciudad,
                    direccion:direccion}
       }
      contacto.push(nuevo);
      console.log("**********Agrega un contacto**********"); 
   imprimir(contacto, "true");
   }

  





function eliminarContacto(contacto)
{
    console.log("");
    console.log("**********Elimina un contacto**********");
    contacto.shift();
    imprimir(contacto, false);

}

function imprimir(misContactos, mostrarEncabezado)
{
    if (mostrarEncabezado===true)
    {
    console.log('************MI LISTA DE CONTACTOS**********');
    console.log("");  
    }

    for(let i=0;i<=misContactos.length-1;i++)
    {
        console.log("Contacto No." + (i+1));
        console.log("1. " + "id= " + misContactos[i].id);
        console.log("2. " + "Nombres= " + misContactos[i].nombres);
        console.log("3. " + "Apellidos= " + misContactos[i].apellidos);
        console.log("4. " + "Teléfono= " + misContactos[i].telefono);
        console.log("5. " + "Ubicaciones ");
        console.log("      a." + misContactos[i].ubicaciones.ciudad);
        console.log("      b." + misContactos[i].ubicaciones.direccion);
        
        console.log(' ');
       // console.log(contacto[i]);

    }  
}



    actualizarContacto(2, 'Maria');



function actualizarContacto(id, nombres)
{
    indice=contacto.findIndex(caracteristica =>caracteristica.id == id);
       contacto[indice].nombres=nombres;
    
    
      console.log("**********Actualiza un contacto**********"); 
      imprimir(contacto, false);
   }