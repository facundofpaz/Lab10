$("#btn_camara").on('click', function () {
    console.log('clicked');
    navigator.camera.getPicture(onSuccess, onError, {
        quality: 100,
        saveToPhotoAlbum: true,
        cameraDirection: Camera.Direction.FRONT,
        correctOrientation: true,
        destinationType: Camera.DestinationType.FILE_URI,
        allowEdit: false
    });
});

function onSuccess(imageURI) {
    console.log('exito');
    var image = document.getElementById('image_holder');
    image.src = imageURI;
}

function onError(message){
    console.log('Failed because: ' + message);
}