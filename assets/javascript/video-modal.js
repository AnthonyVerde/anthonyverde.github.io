$(document).ready(function () {

    $('#myModal').on('hidden.bs.modal', function () {
        $('#video1')[0].pause();
    })

    $('#myModal2').on('hidden.bs.modal', function () {
        $('#video2')[0].pause();
    })

    $('#myModal3').on('hidden.bs.modal', function () {
        $('#video3')[0].pause();
    })

    $('#myModal4').on('hidden.bs.modal', function () {
        $('#video4')[0].pause();
    })

    $('#myModal5').on('hidden.bs.modal', function () {
        $('#video5')[0].pause();
    })

    $('#myModal6').on('hidden.bs.modal', function () {
        $('#video6')[0].pause();
    })
});