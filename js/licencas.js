$(document).ready(function () {
    var language = getUrlParameter("lang");

    switch (language) {
        case "pt-BR":
            $(".titulo-pagina > [class!='pt-BR']").hide();
            break;
        default:
        case "en":
            $(".titulo-pagina > [class!='en']").hide();
            break;
    }
});