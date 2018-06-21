/*Environment Setup */
exports.ENVIRONMENT = 'local';
if(window.location.hostname != "dev.msupply.com" && window.location.hostname != "stg.msupply.com" && window.location.hostname != "www.msupply.com" && window.location.hostname != "demo.msupply.com"){
	exports.STATIC_URL = "http://" + window.location.host +"/"; 
   if (window.navigator.userAgent.indexOf("Mac") != -1)
     exports.IMAGE_URL = "http://" + window.location.host +"/"+"assets/mac/";
   else  
     exports.IMAGE_URL = "http://" + window.location.host +"/"+"assets/win/"; 
}
