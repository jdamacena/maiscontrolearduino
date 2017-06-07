$(document).ready(function () {
    var language = getUrlParameter("lang");

    switch (language) {
        case "en":
            $(".titulo-pagina > [class!='en']").hide();
            break;
        case "pt-BR":
        default:
            $(".titulo-pagina > [class!='pt-BR']").hide();
            break;
    }
});