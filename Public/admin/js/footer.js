let htmlfoot = '        <footer class="text-center">\n' +
    '            <hr>\n' +
    '            <p class="text-center">CECyTE Plantel Yuriria Guanajuato, Mx. 2020\n' +
    '                <br>\n' +
    '                Desarrollado por: <a href="https://github.com/KeruMx" target="_blank" class="text-muted"><img src="/Checador/Public/Images/github128px.png" alt="Github KeruMx" height="13px">/KeruMx</a>\n' +
    '            </p>\n' +
    '            <div id="img"> <img src="../Images/cecy.jpeg\" alt="Logo cecyte" height="70" class="" style="margin-top:20px; margin-bottom: 20px; "> </div>\n' +
    '            <hr>\n' +
    '        </footer>\n' +
    '\n'
document.addEventListener('DOMContentLoaded', async function () {
    document.getElementById("footer").innerHTML = htmlfoot
});