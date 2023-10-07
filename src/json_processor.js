
function procesarJSON() {
    // Tu objeto JSON
    var datosJSON = `{
        "personas": [
            {
                "nombre": "Alice",
                "edad": 30,
                "ciudad": "New York",
                "profesion": "Ingeniera"
            },
            {
                "nombre": "Bob",
                "edad": 25,
                "ciudad": "Los Angeles",
                "profesion": "Doctor"
            },
            {
                "nombre": "Charlie",
                "edad": 35,
                "ciudad": "Chicago",
                "profesion": "Abogado"
            }
        ]
    }`;

   // Parsear el JSON y mostrarlo en el elemento con el ID "jsonResult"
   var datos = JSON.parse(datosJSON);
   document.getElementById('jsonResult').innerHTML = JSON.stringify(datos, null, 4);
}