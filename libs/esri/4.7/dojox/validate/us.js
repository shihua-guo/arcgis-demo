//>>built
define(["dojo/_base/lang","./_base","./regexp"],function(a,b,c){a=a.getObject("us",!0,b);a.isState=function(a,b){return(new RegExp("^"+c.us.state(b)+"$","i")).test(a)};a.isPhoneNumber=function(a){return b.isNumberFormat(a,{format:"###-###-####;(###) ###-####;(###) ### ####;###.###.####;###/###-####;### ### ####;###-###-#### x#???;(###) ###-#### x#???;(###) ### #### x#???;###.###.#### x#???;###/###-#### x#???;### ### #### x#???;##########".split(";")})};a.isSocialSecurityNumber=function(a){return b.isNumberFormat(a,
{format:["###-##-####","### ## ####","#########"]})};a.isZipCode=function(a){return b.isNumberFormat(a,{format:["#####-####","##### ####","#########","#####"]})};return a});