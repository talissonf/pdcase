function carregaMenuNovo(){document.getElementById("menu").innerHTML="<div id='dl-menu' class='dl-menuwrapper'><button class='dl-trigger'>Open Menu</button><ul class='dl-menu'><li><a href='./empresa.html'>Empresa</a><ul class='dl-submenu'><li><a href='empresa.html'>Empresa</a></li><li><a href='mpsBR.html'>Miss\u00e3o</a><ul class='dl-submenu'><li><a href='#'>Fornecer solu\u00e7\u00f5es de alto valor agregado que contribuam para a competitividade dos nossos clientes em segmentos empresariais onde seja poss\u00edvel aliar o conhecimento de neg\u00f3cio, valorizando-o acima da tecnologia.</a></li></ul></li><li><a href='fabrica-de-software.html'>Valores</a><ul class='dl-submenu'><li><a href='#'>Compromisso com princ\u00edpios \u00e9ticos e legais.</a></li><li><a href='#'>Respeito pela individualidade e diversidade das pessoas.</a></li><li><a href='#'>Compromisso com os clientes e responsabilidades assumidas.</a></li><li><a href='#'>Incentivo \u00e0 inova\u00e7\u00e3o e ao empreendedorismo interno.</a></li><li><a href='#'>Transpar\u00eancia e efici\u00eancia operacional.</a></li><li><a href='#'>Responsabilidade social.</a></li></ul></li><li><a href='gestao-de-processos.html'>Neg\u00f3cios</a><ul class='dl-submenu'><li><a href='#'>Nossos produtos e servi\u00e7os atendem de forma completa e eficiente as necessidades tecnol\u00f3gicas espec\u00edficas de cada empresa. Conhecimento t\u00e9cnico alinhado a efici\u00eancia na presta\u00e7\u00e3o de servi\u00e7os.</a></li></ul></li></ul></li><li><a href='./clientes.html'>Clientes</a></li><li><a href='./contato.html'>Contato</a></li><li><a href='servicos.html'>Servi\u00e7os</a><ul class='dl-submenu'><li><a href='servicos.html'>Servi\u00e7os</a></li><li><a href='consultoria.html'>Consultoria</a></li><li><a href='mpsBR.html'>MPS BR</a></li><li><a href='fabrica-de-software.html'>F\u00e1brica de Software</a></li><li><a href='gestao-de-processos.html'>Gest\u00e3o de Processos</a></li><li><a href='pdMobile.html'>Mobile</a></li></ul></li><li><a href='produtos.html'>Produtos</a><ul class='dl-submenu'><li><a href='produtos.html'>Produtos</a></li><li><a href='portal-de-credito.html'>Portal de Cr\u00e9dito</a></li><li><a href='pdSRC.html'>PD SRC</a></li><li><a href='pdBank.html'>PD BANK</a></li><li><a href='pdGAR.html'>PD GAR</a></li><li><a href='pdCTA.html'>PD CTA</a></li><li><a href='pdPositivo.html'>PD Positivo</a></li></ul></li></ul></div>"}
function carregaRodape(){document.getElementById("rodape").innerHTML="\t\t<footer>\t\t\t<div class='container-fluid footer-primary'>\t\t\t    <div class='container'>\t\t\t      <div class='row'>\t\t\t        <div class='col-md-2' ><div class='logo-footer'><a href='./index.html'><img src='./images/logo-footer.png' class='img-responsive' /></a></div></div>\t\t\t        <div class='col-md-7' style=' text-align:center;'>\t\t\t          <p class='footer-address'><span class='text'>Alameda Oscar Niemeyer, n\u00ba 891 - Sala 708 - Vila da Serra - Belo Horizonte / Nova Lima - MG - CEP 34006-065</span><br />PDCASE ATENDE: (31) 3505-1940</p>\t\t\t        </div>\t\t\t        \t\t\t      </div>\t\t\t    </div>\t\t\t </div>\t\t\t <div class='container-fluid footer-secondary' >\t\t\t \t<div class='container'>\t\t\t \t\t<div class='row'>\t\t\t\t    <div class='col-md-6' style='text-align:center; '>\t\t\t\t      <span class='text' style='color:#31302b;'>\u00a9COPYRIGHT 2017 - PD Case INFORM\u00c1TICA - TODOS OS DIREITOS RESERVADOS </span><br />\t\t\t\t      <span class='text' style='color:#31302b;'>Constru\u00eddo em <a href='http://www.pdcase.com' target='_blank'>PD Case</a> por Izabely Furtado</span>           </div>\t\t\t\t\t</div>\t\t\t\t</div>\t\t\t  </div>\t\t</footer>"}
function carregaCSS(){document.getElementById("css").innerHTML="<link rel='stylesheet' href='http://www.stylodesign.co.uk/templates/stylodesign/css/normalize.css' type='text/css' media='screen,projection' /><link rel='stylesheet' href='./css/styles.php.css'    type='text/css' media='screen,projection' /><link rel='stylesheet' type='text/css' href='./css/layout2.css' \t\tmedia='screen' /><link rel='stylesheet' type='text/css' href='./css/pdbank.css'  \t\tmedia='screen' /><link rel='stylesheet' type='text/css' href='./css/links.css'   \t\tmedia='screen' /><link type='text/css' rel='stylesheet' href='./css/magento.css' \t\tmedia='all' /><link rel='stylesheet' type='text/css' href='./css/global.css' \t\tmedia='screen' /><link type='text/css' rel='stylesheet' href='./css/magento3.css'\t\tmedia='all' /><link type='text/css' rel='stylesheet' href='./css/magento2.css'\t\tmedia='all' /><link rel='stylesheet' type='text/css' href='./css/lightboxValores.css'media='screen' /><link rel='stylesheet' type='text/css' href='./css/global.css'\t\t\tmedia='screen' /><link rel='stylesheet' type='text/css' href='./css/consultoria.css'\tmedia='screen' />"}
(function(){var a=$(".menu-navigation-dark");a.slicknav();a.on("click","a",function(){var a=$(this);a.siblings().removeClass("selected");a.addClass("selected")})});window.onload=function(){carregaMenuNovo();carregaRodape()};