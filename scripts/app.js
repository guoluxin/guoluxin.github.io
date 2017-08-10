//创建应用模快
//创建模块时需要依赖控制器模块
var app=angular.module("yike",["Ctrls","ngRoute"]);
//模块创建好之后，在根作用域绑定一个toggle方法
//run方法的作用是在模块创建完成后直接执行
app.run(["$rootScope",function($rootScope){
	 //绑定collapse属性，默认false
	 //当点击菜单时，如果值false则改为true,如果为true就改为false
     $rootScope.collapsed=false;
     //绑定toggle方法
     $rootScope.toggle=function(){
     	//将collapse的值取反
     	$rootScope.collapsed=!$rootScope.collapsed
     	//设置选中状态，绑定一个check
     	$rootScope.check=0;
     	//查找出所有dd
     	var dds=document.querySelectorAll(".navs dd");
     	//遍历所有dd在这个collapsed值为true设置transform值为translate(0)
     	//如果为false 则translate(-100%)
     	if($rootScope.collapsed){
     		for(var i=0;i<dds.length;i++){
     			//位置移动
                dds[i].style.transform="translate(0)";
                //移动出来时间差
                dds[i].style.transitionDuration=(i+1)*0.3+"s";
     		}
     	}else{
     		for(var i=0;i<dds.length;i++){
     			//位置移动
                dds[i].style.transform="translate(-100%)";
                //移动出来时间差
                dds[i].style.transitionDuration=(dds.length-i)*0.5+"s";
     		}
     	}
     }
}]);
//修改angular.js路由锚点错误的bug
app.config(["$locationProvider",function($locationProvider){
	$locationProvider.hashPrefix("");
}])

//配置路由
app.config(["$routeProvider",function($routeProvider){
     $routeProvider.when("/",{
     	redirectTo:"/index"
     }).when("/index",{
     	templateUrl:"./views/list.html",
     	controller:"indexCtrl"
     }).when("/old",{
     	templateUrl:"./views/list.html",
     	controller:"oldCtrl"
     }).when("/author",{
     	templateUrl:"./views/author.html",
     	controller:"authorCtrl"
     }).when("/category",{
     	templateUrl:"./views/category.html",
     	controller:"categoryCtrl"
     }).when("/favourite",{
     	templateUrl:"./views/favourite.html",
     	controller:"favouriteCtrl"
     }).when("/settings",{
     	templateUrl:"./views/settings.html",
     	controller:"settingsCtrl"
     }) 
}]);