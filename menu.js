fetch("menu.json")
//Que hace? Esta linea inicia la carga del archivo menu.json. fetch es una funcion de javascript que facilita la realzacion de solicitudes de red , como obtener datos de un archivo o un endpoint de API.
//Como funciona? fetch devuelve una promesa que , cuando se resuelve, te da acceso a la respuesta de la solicitud.Esta respuesta no es directamente los datos en formato de respuesta que incluye varios detalles sobre la respuesta misma.
.then(response => response.json())
//Que hace? Esta linea toma objteo de respuesta obteniendo del fetch y utiliza el metodo .json para convertir el cuerpo de la respuesta en un objeto javaScript (esto asume que el cuerpo de la respuesta esta en formato JSON).
//Como funciona? el metodo json.() tambuien devuelve una promesa,la cual se resuelve con el contenido del cuerpo en formato JSON.
then(data=>{
  const menu-container = document.getElementById
  ("menu-container");
  //Que hace? Aqui se procesan los datos JSON ya convertidos.Se obtiene una referencia al contenedor del menu en el HTML mediante getElementByID ("menu-container"), y luego se itera sobre los elementos (categorias) del menu.
     data.items.forEach(category=> {
       const categoryTittle=documet.createElement("h2");
       //Que hace? aqui se crea un elemento h2, se asigna el nombre de la categoria como su contenido de esta, y luego se añade ste titulo al contenedor del menu/.
       categoryTittle.textContent = category.category;
       menu.Container.appendChild(categgoryTittle);
       const table= document.createElement
       ("table");
       //Que hace? se crea un elemento table para cada categoria . Ademas se prepara el encabezado (TableHead con las columnas pertinentes. tableBody se inicializa vacio y se llenara con los elemntos de la categoria.
      const tablehead´<tr><th>foto</th><th>Descripcion</th<th>Precio</th></th´;
  let tableBody=´´;
  // Como fujnciona? Para cada categoria en los datos , se realizan varios pasos :Crear un titulo para la categoria,se establece su contenido de texto al nombre de la categoria (category.category), luego se agrega al contenedor menu).
  //Crear una tabla para los elementos de esas categorias: se genera un atabla por cada categoria (primero se define el encabezado de la tabla <th>Foto</th><th>Descripcion</th><th>Precio</th>).

  category.Items.forEach item=>{
    tableBody += <tr>
      <td><img scr=´´{item.image} alt ${item.name}´´</td>
    </td>
    </td> ${item.name} -"${item.description}#</td>
      <td>${item.price}</td>
    </tr> ;
     });
})
