


let contactos=['Eldy Vasquez','Eddin Reyes','Jose Vasquez'];
const arrayContactosActualizados=nuevoContacto(contactos,'Elsy Reyes');

function nuevoContacto(listaContactos,nombreContacto)
{
    console.log("");
    console.log("**Añade un contacto**");
    listaContactos.push(nombreContacto);
   imprimir(listaContactos, false);
   return listaContactos;

}

function eliminarContacto(arrayContactos)
{
    console.log("");
    console.log("**Elimina un contacto**");
    arrayContactos.shift();
    imprimir(arrayContactos, false);

}

function imprimir(misContactos, mostrarEncabezado)
{
    if (mostrarEncabezado===true)
    {
    console.log('**Lista de contactos**');
    console.log("");  
    }

    for(let i=0;i<=misContactos.length-1;i++)
    {
        console.log(misContactos[i]);
    
    }  
}






