function procesarCSV() {
    // Tu cadena CSV
    var datosCSV = ` latitude , longitude , bright_ti4 , scan , track , acq_date , acq_time , satellite , instrument , confidence , version, bright_ti5 , frp , daynight  
    36.17878,-5.42589,299.48,0.79,0.78,2023-10-07,105,N,VIIRS,n,2.0NRT,286.36,1.74,N
    38.92229,-9.01235,302.78,0.45,0.39,2023-10-07,243,N,VIIRS,n,2.0NRT,290.17,1.15,N
    40.28931,-8.4178,302.34,0.45,0.39,2023-10-07,243,N,VIIRS,n,2.0NRT,290.71,0.66,N
    42.48569,-8.42106,332.91,0.42,0.38,2023-10-07,243,N,VIIRS,n,2.0NRT,291.58,3.18,N
    42.48661,-8.42606,315.3,0.42,0.38,2023-10-07,243,N,VIIRS,n,2.0NRT,291.09,2.48,N
    42.49592,-8.41767,305.69,0.42,0.38,2023-10-07,243,N,VIIRS,n,2.0NRT,290.61,3.74,N
    42.49932,-8.41646,344.38,0.42,0.38,2023-10-07,243,N,VIIRS,n,2.0NRT,294.94,3.74,N
    13.37303,-7.24874,304.27,0.57,0.69,2023-10-07,251,N,VIIRS,n,2.0NRT,268.2,1.93,N
    14.56587,-11.98793,298.04,0.53,0.5,2023-10-07,251,N,VIIRS,n,2.0NRT,275.86,1.36,N`;

    // Separar las líneas del CSV
    var lineas = datosCSV.split('\n');

    // Crear una tabla HTML para mostrar los datos CSV
    var tablaHTML = '<table>';
    for (var i = 0; i < lineas.length; i++) {
        var valores = lineas[i].split(',');
        tablaHTML += '<tr>';
        for (var j = 0; j < valores.length; j++) {
            tablaHTML += '<td>' + valores[j] + '</td>';
        }
        tablaHTML += '</tr>';
    }
    tablaHTML += '</table>';

    // Mostrar la tabla en el elemento con el ID "csvResult"
    document.getElementById('csvResult').innerHTML = tablaHTML;
}
