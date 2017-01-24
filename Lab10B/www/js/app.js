$("#btn_camara").on('click', function () {
    console.log('clicked');
    navigator.camera.getPicture(onSuccess, onError);
});

function onSuccess(imageData) {
    console.log('exito');
    var image = document.getElementById('image_holder');
    image.src = "data:image/jpeg;base64," + imageData;
}

function onError(message){
    console.log('Failed because: ' + message);
}