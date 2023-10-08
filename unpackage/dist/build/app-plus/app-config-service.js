
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/loginPage/loginPage","pages/indexpage/indexpage","pages/index/index","pages/canvas/canvas","pages/devices/devices","pages/chart/chart","pages/loginPage/loginPage","pages/dataCompare/dataCompare"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"darkmode":false,"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"智能鞋垫（医生端）","compilerVersion":"3.7.11","entryPagePath":"pages/loginPage/loginPage","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/loginPage/loginPage","meta":{"isQuit":true},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/indexpage/indexpage","meta":{},"window":{"navigationBarTitleText":"首页","enablePullDownRefresh":false,"navigationBarBackgroundColor":"#6b6882","titleNView":{"type":"transparent"}}},{"path":"/pages/index/index","meta":{},"window":{"navigationBarTitleText":"数据观测","navigationBarBackgroundColor":"#6b6882"}},{"path":"/pages/canvas/canvas","meta":{},"window":{"navigationBarTitleText":"足底压力状态分布图","enablePullDownRefresh":false,"navigationBarBackgroundColor":"#6b6882"}},{"path":"/pages/devices/devices","meta":{},"window":{"navigationBarTitleText":"用户信息","enablePullDownRefresh":false,"navigationBarBackgroundColor":"#6b6882"}},{"path":"/pages/chart/chart","meta":{},"window":{"navigationBarTitleText":"足底压力统计曲线","enablePullDownRefresh":false,"navigationBarBackgroundColor":"#6b6882"}},{"path":"/pages/dataCompare/dataCompare","meta":{},"window":{"navigationBarTitleText":"数据对比","enablePullDownRefresh":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
