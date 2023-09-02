const presupuesto = [];

function guardar() {
    var gasto = document.getElementById('gasto').value;
    var monto = parseFloat(document.getElementById('monto').value);

    if( gasto && !isNaN(monto)){
       var texto = `${gasto}: $${monto}`;
       presupuesto.push(texto); 
       console.log(presupuesto);
       
    }
}