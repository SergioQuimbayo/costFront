//Se crea la variable con la key de la api
let API_KEY = '13119377-fc7e10c6305a7de49da6ecb25';
//se crea la variable filtro y se inicializa en cero para que no haga ningun filtro
let filtro = ""
//se crea la variable filtro y se inicializa en cero para que no haga ningun filtro por categoria
let categoria = ""
// Se invoca la funcion consultar api 
consultarapi()
function consultarapi() {
    //se crea la variable URL con la url y los filtros que sean recibidos
    var URL = "https://pixabay.com/api/?key=" + API_KEY + filtro + categoria;
//Se convierten los datos recibidos en un objeto JSOn para su manipulación
    $.getJSON(URL, function (datos) {
        //Se eliminan todos los contenedores dentro del contenedor imagenes
        $('#imagenes').empty()
        // Se recorre el objeto JSON  en el campo hits
        datos.hits.forEach(function (d) {
            //Se insertan div para separar contenedor de imagenes
            $('#imagenes').append($("<div id='separador"+d.id+"'></div>"))
            //Se le asigna el contenedor creado una clase para el manejo de sus propiedades
            $('#separador'+d.id).addClass("col-xl-3 col-lg-3 col-4 col-md-4 col-sm-6 separa")
            //Se crea un contenedor en el cual se va a insertar la imagen
            $('#separador'+d.id).append($("<div id='contenedor" + d.id + "'></div>")).addClass("col-12 row")
            //Se le asigna el contenedor creado una clase para el manejo de sus propiedades
            $('#contenedor' + d.id).addClass("images col-12")
            //Se inserta la imagendentro del contenedor creado
            $('#contenedor' + d.id).prepend('<p class="tag">Tags:</p> <p>'+d.tags+'</p>')
            $('#contenedor' + d.id).prepend('<img id=' + d.id + ' src=' + d.previewURL + ' />')
            $('#' + d.id).addClass("col-12")
            1
$(".images").fadeIn("slow")

        })
        console.log(datos)

    });
}
function busqueda() {
    if ($('#textobusqueda').val() && $('#textobusqueda').val().length <= 100) {
        filtro = "&lang=es&q=" + $('#textobusqueda').val()
    } else {
        filtro = ""
    }

    if ($('#categoria').val() != "Category") {
        filtro = "&category=" + $('#categoria').val()
    } else {
        filtro = ""
    }
    consultarapi()
}


