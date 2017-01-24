var contadorTareas = 0;

$("#btnAddTarea").click(
    function(){
        var str = "<a href=\"#\" class=\"list-group-item\" data-id-tarea=\""+contadorTareas+"\">"+
        "<h4 class=\"list-group-item-heading\">"+$("#tareaNombre").val()+"</h4>"+
        "<p class=\"list-group-item-text\"><div class=\"checkbox\"><label><input type=\"checkbox\">Finalizar</label></div></p></a>";
        $("#listaTarea").append(str);
        $("#tareaNombre").val('');
        contadorTareas++;
    }
);

$("#btnVaciar").click(
    function(){
        navigator.notification.confirm(
            'Esta seguro que desea vaciar lista?',  // message
            function(btn) {
                if(btn === 1) {
                    $("#listaTarea").empty();
                }
            },         // callback
            'Vaciar lista',           // title
            ['Aceptar','Cancelar']     // buttonLabels
        );
    }
);

$('#listaTarea').on("click","a",function() {
    var boton = $(this);
    navigator.notification.confirm(
        'Esta seguro que desea terminar tarea?',  // message
        function(btn) {
            if(btn === 1) {
                console.log(boton.attr('data-id-tarea'));
                var i = 1+boton.index();
                console.log(i);
                $( "#listaTarea a:nth-child("+i+")" ).remove();
                contadorTareas--;
            }
        },         // callback
        'Terminar tarea',           // title
        ['Aceptar','Cancelar']     // buttonLabels
    );
    
});