var URIbaseContext=document.getElementsByTagName("base")[0].getAttribute("href");require.config({baseUrl:URIbaseContext+"static/js",waitSeconds:180,paths:{stacktrace:"libraries/thirdparty/stacktrace-js/dist/stacktrace.min","source-map":"libraries/thirdparty/source-map/dist/source-map.min",angular:"libraries/thirdparty/angular/angular.min","angular-animate":"libraries/thirdparty/angular-animate/angular-animate.min","angular-sanitize":"libraries/thirdparty/angular-sanitize/angular-sanitize.min","angular-messages":"libraries/thirdparty/angular-messages/angular-messages.min","angular-svg-base":"libraries/thirdparty/angular-svg-base/src/svgDirs","angular-ui-router":"libraries/thirdparty/angular-ui-router/release/angular-ui-router.min","route-resolver":"libraries/route-resolver","angular-storage":"libraries/thirdparty/ngstorage/ngStorage.min",angulartics:"libraries/thirdparty/angulartics/dist/angulartics.min","angulartics-ga":"libraries/thirdparty/angulartics-google-analytics/dist/angulartics-google-analytics.min","angular-dynamic-locale":"libraries/thirdparty/angular-dynamic-locale/tmhDynamicLocale.min","angular-touch":"libraries/thirdparty/angular-touch/angular-touch.min","angular-translate":"libraries/thirdparty/angular-translate/angular-translate.min","angular-translate-loader-partial":"libraries/thirdparty/angular-translate-loader-partial/angular-translate-loader-partial.min","angular-ui-validate":"libraries/thirdparty/angular-ui-validate/dist/validate.min","angular-ui-mask":"libraries/thirdparty/angular-ui-mask/dist/mask.min","angular-ui-event":"libraries/thirdparty/angular-ui-event/dist/event.min","general-services":"general-services",directives:"directives",filters:"filters",cssua:"libraries/thirdparty/cssuseragent/cssua.min",jquery:"libraries/thirdparty/jquery/dist/jquery.min",highstock:"libraries/thirdparty/highstock/highstock","highcharts-drilldown":"libraries/thirdparty/highstock/modules/drilldown",highcharts3d:"libraries/thirdparty/highstock/highcharts-3d","highcharts-more":"libraries/thirdparty/highstock/highcharts-more","highcharts-no-data":"libraries/thirdparty/highstock/modules/no-data-to-display","highcharts-boost":"libraries/thirdparty/highstock/modules/boost","highcharts-angular":"libraries/highcharts-ng",filesaver:"libraries/thirdparty/file-saver.js/FileSaver",fileAPI:"libraries/thirdparty/fileapi/dist/FileAPI.min",moment:"libraries/thirdparty/moment/min/moment-with-locales.min","jquery-fullpage":"libraries/thirdparty/fullpage.js/dist/jquery.fullpage.min","owl-carousel":"libraries/thirdparty/owl.carousel/dist/owl.carousel.min"},packages:[],shim:{angular:{exports:"angular",deps:["jquery"]},main:{deps:["stacktrace"]},core:{deps:["main","angular","angular-ui-router","route-resolver","angulartics-ga","angular-translate","angular-translate-loader-partial","angular-dynamic-locale","angular-animate","angular-sanitize","angular-messages","angular-touch","angular-storage","cssua","jquery","highstock","highcharts-angular","angular-ui-validate","angular-ui-mask","angular-ui-event","angular-svg-base"]},"angular-ui-router":{deps:["angular"]},"angular-touch":{deps:["angular"]},"angular-translate":{deps:["angular"]},"angular-translate-loader-partial":{deps:["angular-translate"]},"angular-dynamic-locale":{deps:["angular","angular-translate"]},"angular-animate":{deps:["angular"]},"angular-sanitize":{deps:["angular"]},"angular-messages":{deps:["angular"]},"angular-svg-base":{deps:["angular"]},angulartics:{deps:["angular"]},"angulartics-ga":{deps:["angulartics"]},"route-resolver":{deps:["angular"]},"angular-storage":{deps:["angular"]},"angular-idle":{deps:["angular"]},"angular-ui-validate":{deps:["angular"]},"angular-ui-mask":{deps:["angular"]},"angular-ui-event":{deps:["angular"]},highstock:{deps:["jquery"]},"highcharts-drilldown":{deps:["highstock"]},"highcharts-more":{deps:["highstock"]},"highcharts-no-data":{deps:["highstock"]},"highcharts-boost":{deps:["highstock"]},"highcharts-angular":{deps:["angular","highstock","highcharts-more","highcharts-no-data"]},"jquery-fullpage":{deps:["jquery"]},"owl-carousel":{deps:["jquery"]},"general-services":{deps:["core","highcharts-angular","highstock","moment"]},filters:{deps:["core","general-services"]},directives:{deps:["core","filters"]}}});var lazyCSS=function(href){var cb=function(){var l=document.createElement("link");l.rel="stylesheet",l.href=href,l.media="only x";var h=document.getElementsByTagName("head")[0];h.parentNode.insertBefore(l,h),setTimeout(function(){l.media="all"},0)},raf=requestAnimationFrame||mozRequestAnimationFrame||webkitRequestAnimationFrame||msRequestAnimationFrame;raf?raf(function(){window.setTimeout(cb,0)}):window.addEventListener("load",cb)};require(["stacktrace"],function(stacktrace){"use strict";window.StackTrace=stacktrace,require(["main"]),lazyCSS("https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,200italic,300,300italic,400,400italic,600,600italic,700,700italic,900,900italic")});
//# sourceMappingURL=config.js.map
