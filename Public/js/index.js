
function inputNo() {
    let htmlbtnspawn= " <div class=\"form-group\">\n" +
        "                            <div class=\"row\">\n" +
        "                                <div class=\"col-sm\">\n" +
        "                                    <p class=\"text-secondary\">Entrada/Salida          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>\n" +
        "                                    <button type=\"button\" class=\"btn btn-success btn-block\">Entrada</button>\n" +
        "                                    <button type=\"button\" class=\"btn btn-danger btn-block\" disabled>Salida</button>\n" +
        "                                </div>\n" +
        "                                <div class=\"col-sm\">\n" +
        "                                    <p class=\"text-secondary\">Almuerzo Entrada/Salida</p>\n" +
        "                                    <button type=\"button\" class=\"btn btn-success btn-block\">Entrada</button>\n" +
        "                                    <button type=\"button\" class=\"btn btn-danger btn-block\" disabled>Salida</button>\n" +
        "\n" +
        "                                </div>\n" +
        "                            </div>\n" +
        "                        </div>";
    let htmlerror = '<div class="alert alert-danger" role="alert">\n' +
        '  Error usuario no registrado\n' +
        '</div>';
    document.getElementById("nouser").value = document.getElementById("nouser").value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
    var nouser = document.getElementById("nouser").value
    console.log(nouser.length)
    if (nouser=='123456')
        document.getElementById("spawn").innerHTML = htmlbtnspawn
    else if (nouser.length==6)
        document.getElementById("error").innerHTML = htmlerror
}