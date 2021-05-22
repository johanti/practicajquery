$(document).ready(function () {

    //Arreglo para la lista de tarjetas
    let listadoTarjetas = [{'tit': 'Café molido',
                            'srcIni' : 'resources/images/cafe_molido.png',
                           'srcFin': 'resources/images/molido_mini.jpg' }, 
                           {'tit':'Capuchino',
                           'srcIni' : 'resources/images/capuchino.png' ,
                           'srcFin': 'resources/images/capuchino_mini.png'}, 
                           {'tit': 'Café Mocca',
                           'srcIni' : 'resources/images/cafe_mocca.jpg',
                           'srcFin': 'resources/images/mocca_mini.png' }, 
                           {'tit': 'Bebida',
                           'srcIni' : 'resources/images/cafe_bebida.png',
                           'srcFin': 'resources/images/cafe_bebida_mini.png'}, 
                           {'tit': 'Café Negro',
                           'srcIni' : 'resources/images/cafe_negro.jpg',
                           'srcFin': 'resources/images/cafe_negro_mini.png'}];

    for (let i=0; i < listadoTarjetas.length; i++){

        let imagenIni = listadoTarjetas[i].srcIni;
        let titArticle = listadoTarjetas[i].tit;

        let textoHtml = '<article class=\"miTarjeta\">' +
                        '<figure> ' +
                        '<img src=\"' + imagenIni + '\" alt=\"\">' +
                       '<figcaption>' + titArticle + '</figcaption> ' +
                        '</figure> ' +
                       ' <p>Lorem ipsum dolor sit, <br> amet consectetur adipisicing elit. <br>Consequatur, id earum neque<br> labore quo alias voluptatum <br>voluptatem delectus animi ipsum.</p>' +
                    '</article>  ';
        
        $('#listaTarjetas').append(textoHtml);
    }

    // Funcionalida de cuando la pantalla cambia de tamaño - Ancho
    $(window).resize(function (){
        let anchoPantalla = window.innerWidth;
        if (anchoPantalla < 920) {
            $('#listaTarjetas article p').hide();
        } else{
            $('#listaTarjetas article p').show();
        }
        
            
    });

    
});