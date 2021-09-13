"use strict";define([],function(){var routeResolver=function(){this.$get=function(){return this},this.routeConfig=function(){var viewsDirectory="/",controllersDirectory="/",setBaseDirectories=function(viewsDir,controllersDir){viewsDirectory=viewsDir,controllersDirectory=controllersDir},getViewsDirectory=function(){return viewsDirectory},getControllersDirectory=function(){return controllersDirectory};return{setBaseDirectories:setBaseDirectories,getControllersDirectory:getControllersDirectory,getViewsDirectory:getViewsDirectory}}(),this.route=function(routeConfig){var defaults={baseName:null,path:"",url:null,params:{},secure:null,customData:null},resolve=function(options){options=$.extend({},defaults,options),options.path||(options.path="");var routeDef={},baseFileName=options.baseName.charAt(0).toLowerCase()+options.baseName.substr(1);return routeDef.url=options.url,routeDef.templateUrl=routeConfig.getViewsDirectory()+options.path+baseFileName+".html",routeDef.params=options.params,routeDef.data=routeDef.data?routeDef.data:{},routeDef.data.customData=options.customData,routeDef.controller=options.baseName+"Controller",routeDef.secure=!!options.secure&&options.secure,routeDef.resolve={load:["$q","$rootScope","$stateParams",function($q,$rootScope,$stateParams){var dependencies=[routeConfig.getControllersDirectory()+options.path+baseFileName+"Controller.js"];return resolveDependencies($q,$rootScope,$stateParams,dependencies)}]},routeDef},resolveDependencies=function($q,$rootScope,$stateParams,dependencies){var defer=$q.defer();return $rootScope.$applyAsync(function(){require(dependencies,function(){defer.resolve()})}),defer.promise};return{resolve:resolve}}(this.routeConfig)},servicesApp=angular.module("routeResolverServices",[]);servicesApp.provider("routeResolver",routeResolver)});
//# sourceMappingURL=route-resolver.js.map
