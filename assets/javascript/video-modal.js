$(document).ready(function () {
    //$('#myModal').on('shown.bs.modal', function () {
    //    $('#video1')[0].play();
    //})
    $('#myModal').on('hidden.bs.modal', function () {
        $('#video1')[0].pause();
    })

    //$('#myModal2').on('shown.bs.modal', function () {
    //    $('#video2')[0].play();
    //})
    $('#myModal2').on('hidden.bs.modal', function () {
        $('#video2')[0].pause();
    })

    $('#myModal3').on('hidden.bs.modal', function () {
        $('#video3')[0].pause();
    })
});