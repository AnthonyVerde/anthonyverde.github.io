$(document).ready(function () {
    window.addEventListener("beforeunload", function () {
        document.body.classList.add("animate-out");
    });
});

