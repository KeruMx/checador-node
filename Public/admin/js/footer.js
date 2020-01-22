let htmlfoot = '        <footer class="text-center">\n' +
    '            <hr>\n' +
    '            <p class="text-center">CECyTE Plantel Yuriria Guanajuato, Mx. 2020\n' +
    '                <br>\n' +
    '                Desarrollado por: <a href="https://github.com/KeruMx" target="_blank" class="text-muted"><img src="/Checador/Public/Images/github128px.png" alt="Github KeruMx" height="13px">/KeruMx</a>\n' +
    '            </p>\n' +
    '            <div id="img"> <img src="/Checador/Public/Images/cecy.jpeg\" alt="Logo cecyte" height="70" class="" style="margin-top:20px; margin-bottom: 20px; "> </div>\n' +
    '            <hr>\n' +
    '        </footer>\n' +
    '\n' +
    '    <div id="js">\n' +
    '        <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>\n' +
    '        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>\n' +
    '        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>\n' +
    '    </div>'
document.addEventListener('DOMContentLoaded', async function () {
    document.getElementById("footer").innerHTML = htmlfoot
});