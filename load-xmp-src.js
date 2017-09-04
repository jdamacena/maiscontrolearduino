var elements = document.body.getElementsByTagName("*");
for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    if (element.nodeName == "XMP") {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', element.getAttribute("src"), false);
        xhr.send();
        element.innerHTML = xhr.responseText;
    }
}
