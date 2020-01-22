let htmlnav= "<nav class=\"navbar navbar-expand-lg navbar-light\" style=\"background-color: #f8fddf;\">\n" +
    "    <a class=\"navbar-brand\" href=\"#\">\n" +
    "        <img src=\"Images/cecy.jpeg\" width=\"90\" height=\"30\" class=\"d-inline-block align-top\" alt=\"\">\n" +
    "        CECyTE Plantel YURIRIA\n" +
    "    </a>    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n" +
    "        <span class=\"navbar-toggler-icon\"></span>\n" +
    "    </button>\n" +
    "\n" +
    "    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n" +
    "        <ul class=\"navbar-nav mr-auto\">\n" +
    "            <li class=\"nav-item active\">\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "        <a href=\"/Checador/Public/admin/index.html\"><img src=\"node_modules/bootstrap-icons/icons/person.svg\" width=\"35\" height=\"35\"></a>\n" +
    "    </div>\n" +
    "</nav>"
    document.addEventListener('DOMContentLoaded', async function () {
    document.getElementById("nav").innerHTML = htmlnav

});