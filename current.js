window._hsq=window._hsq||[];window.hbspt=window.hbspt||{};window.hbspt.cta=window.hbspt.cta||{__hstc:"",__hssc:"",__hsfp:"",__utk:"",__generated_utk:"",email:"",__analyticsPageId:"",__path:"",__referrerPath:"",TRACKING_CODE_TIMEOUT:2e3,placementsData:{},canonicalURL:"",queryStringToForward:["tc_country","tc_deviceCategory","tc_visitSource","tc_drillDownRule","tc_language","utm_campaign","utm_medium"],load:function(t,e,a){function i(i){if(!o){r.__utk||(r.__generated_utk=r.utils.generateUtk());r.displayCta(t,e,a,i);o=!0}}function n(){for(var t=0;t<window._hsq.length;t++)if("setPath"===window._hsq[t][0])return!0;return!1}function s(t){window._hsq.push(function(e){r.__path=e.path;r.__referrerPath=e.referrerPath;r.__analyticsPageId=e.pageId;r.__hsfp=e._getFingerprint();if(e.utk){r.__hstc=e.utk.get();r.__utk=e.utk.visitor}e.session&&(r.__hssc=e.session.get());e.contentType&&(r.__contentType=e.contentType);t()})}var r=this,o=!1;r.utils.log(e+" loading");r.placementsData[e]=r.placementsData[e]||{portalId:t,loadCallTimestamp:(new Date).getTime()};r.utils.changeCtaVisibility(e,"hidden");r.__utk=r.__utk||r.utils.getCookieValue("hubspotutk");r.__hssc=r.__hssc||r.utils.getCookieValue("__hssc");r.__hstc=r.__hstc||r.utils.getCookieValue("__hstc");r.canonicalURL=r.canonicalURL||r.getCanonicalURL();r.utils.isPreviewUrl&&(r.email=r.utils.getParameterByName("email"));if(r.utils.isPreviewUrl)i();else{s(function(){r.utils.log(e+" get tracker data");i("a")});r.utils.domReady(function(){r.__isCos=r.utils.isCos();r.__analyticsPageId=window.hsVars&&window.hsVars.page_id;var t=!!r.__analyticsPageId||!r.__isCos,e=!!r.__utk,a=!!r.__path||!n();e&&t&&a&&i("d")});window.setTimeout(function(){if(!o){r.utils.log(e+" timed out");i("t")}},r.TRACKING_CODE_TIMEOUT)}},getCanonicalURL:function(){for(var t=document.getElementsByTagName("link"),e=0;e<t.length;e++){var a=t[e];if("canonical"===a.rel)return a.href}return window.location.href},getCtaLoaderScriptSrc:function(t,e,a){var n=this.placementsData[e];n.displayedFrom=a;if(n.loaderScriptUrl)return n.loaderScriptUrl;var s={__hsfp:this.__hsfp,__hssc:this.__hssc,__hstc:this.__hstc,canon:this.canonicalURL,email:this.email,hsutk:this.__utk||this.__generated_utk,pageId:this.__analyticsPageId||n.options.analyticsPageId,contentType:n.options.contentType||this.__contentType,path:this.__path,pg:e,pid:t,referrer_path:this.__referrerPath,sv:this.constants.currentProjectVersion,utm_referrer:document.referrer};for(i=0;i<this.queryStringToForward.length;i++)s[this.queryStringToForward[i]]=this.utils.getParameterByName(this.queryStringToForward[i]);n.displayCallTimestamp=(new Date).getTime();if(!this.utils.isPreviewUrl){s.lag=n.displayCallTimestamp-n.loadCallTimestamp;s.rdy=this.utils.domReadyCalled?1:0;s.cos=this.__isCos?1:0;s.df=a}window.hbspt.cta._relativeUrls&&this.utils.isCos()?n.loaderScriptUrl="/hs/cta/ctas/v2/public/cs/loader-v2.js?cos=1&"+this.utils.toQueryString(s):n.loaderScriptUrl="//"+this.utils.getServiceDomain(n.options.env)+"/ctas/v2/public/cs/loader-v2.js?"+this.utils.toQueryString(s);return n.loaderScriptUrl},getCtaLoadedScriptSrc:function(t,e){var a="d"==e.displayedFrom,i={pid:e.portalId,pg:t,lt:e.loadCallTimestamp,dt:e.displayCallTimestamp,at:e.afterLoadCallTimestamp,ae:a||this.utils.analyticsEvaluated()?1:0,sl:a||this.utils.hasHubspotScriptLoader()?1:0,an:a||this.utils.hasHubspotAnalyticsScript()?1:0};return window.hbspt.cta._relativeUrls&&this.utils.isCos()?"/hs/cta/ctas/v2/public/cs/cta-loaded.js?"+this.utils.toQueryString(i):"//"+this.utils.getServiceDomain(e.options.env)+"/ctas/v2/public/cs/cta-loaded.js?"+this.utils.toQueryString(i)},displayCta:function(t,e,a,i){this.placementsData[e].options=a||{};this.placementsData[e].ctaLoaded=!1;this.utils.addScript(this.getCtaLoaderScriptSrc(t,e,i),e);var n=this;setTimeout(function(){try{var t=n.placementsData[e];if(!t.ctaLoaded){n.utils.log(e+" trying to unhide default cta");n.utils.changeCtaVisibility(e,"visible")}n.callOnCtaReady(t)}catch(a){n.utils.log(e+" was already gone")}},2500)},afterLoad:function(t){var e=this;e.utils.log("after load was called");var a=e.placementsData[t];a.afterLoadCallTimestamp=(new Date).getTime();this.utils.addScript(this.getCtaLoadedScriptSrc(t,a),t);e.utils.isGooglebot||(e.utils.isPreviewUrl||e.__hstc&&e.__hssc&&e.__hsfp&&e.__utk&&e.__contentType?e.utils.updateTrackingParamsOnLinks(e.__hstc,e.__hssc,e.__hsfp,e.__utk,e.__contentType):window._hsq.push(function(t){e.__hsfp=t._getFingerprint();if(t.utk){e.__hstc=t.utk.get();e.__utk=t.utk.visitor}t.session&&(e.__hssc=t.session.get());t.contentType&&(e.__contentType=t.contentType);e.utils.updateTrackingParamsOnLinks(e.__hstc,e.__hssc,e.__hsfp,e.__utk,e.__contentType)}));e.callOnCtaReady(a)},callOnCtaReady:function(t){if(0==t.ctaLoaded&&"function"==typeof t.options.onCTAReady)try{t.options.onCTAReady()}catch(e){this.utils.log("Caught error while executing onCTAReady "+e)}t.ctaLoaded=!0}};hbspt.cta.constants={currentProjectVersion:"static-1.212"};!function(t){t.utils={getCookieValue:function(t){var e=new RegExp("(^|; )"+t+"=([^;]*)"),a=e.exec(document.cookie),i=a?a[2]:"";i&&this.log("got cookie value "+t+" = "+i);return i},decodeParameter:function(t){try{return decodeURIComponent(t)}catch(e){return""}},getParameterByName:function(t){t=t.replace(/[\\[]/,"\\\\[").replace(/[\\]]/,"\\\\]");var e=new RegExp("[\\\\?&]"+t+"=([^&#]*)"),a=e.exec(window.location.search),i="";null!==a&&(i=this.decodeParameter(a[1].replace(/\\+/g," ")));return i},toQueryString:function(t){var e=[];for(var a in t)t.hasOwnProperty(a)&&t[a]&&e.push(encodeURIComponent(a)+"="+encodeURIComponent(t[a]));return e.join("&")},isCos:function(){if(window.hsVars&&window.hsVars.portal_id)return!0;for(var t=document.getElementsByTagName("meta"),e=0;e<t.length;e++){var a=t[e];if("generator"==a.getAttribute("name")&&"HubSpot"==a.getAttribute("content"))return!0}return!1},analyticsEvaluated:function(){return Boolean(window._hstc_loaded)},hasScriptThatMatchRegex:function(t){for(var e=document.getElementsByTagName("script"),a=0;a<e.length;a++){var i=e[a].getAttribute("src");if(i&&t.test(i))return!0}return!1},hasHubspotAnalyticsScript:function(){var t=/\/(js\.hs-analytics\.(com|net)|js\.hubspotqa\.com)\/analytics\/\d+\/\d+\.js/g;return this.hasScriptThatMatchRegex(t)?1:-1},hasHubspotScriptLoader:function(){var t=/\/(js\.hs-scripts\.com|js\.hubspotqa\.com)\/\d+\.js/g;return this.hasScriptThatMatchRegex(t)?1:-1},domReady:function(e){if(t.domReady)return e();document.addEventListener?document.addEventListener("DOMContentLoaded",function(){t.domReady=!0;e()}):window.attachEvent("onload",function(){t.domReady=!0;e()})},updateTrackingParamsOnLinks:function(t,e,a,i,n){for(var s=this.getElementsByClassName("cta_button"),r=0;r<s.length;r++){var o=s[r];if("a"==o.tagName.toLowerCase()){this.updateParamOnLink(o,"__hstc",t);this.updateParamOnLink(o,"__hssc",e);this.updateParamOnLink(o,"__hsfp",a);this.updateParamOnLink(o,"hsutk",i);this.updateParamOnLink(o,"contentType",n)}}},updateParamOnLink:function(t,e,a){if(a&&t&&t.href&&-1===t.href.indexOf(e+"="+a)){t.href=this.updateQueryStringParameter(t.href,e,encodeURIComponent(a));this.log("Added "+e+" = "+a+" to cta "+t.id)}},updateQueryStringParameter:function(t,e,a){var i=t.indexOf("#"),n=-1===i?"":t.substr(i),s=-1===i?t:t.substr(0,i),r=new RegExp("([?&])"+e+"=.*?(&|$)","i"),o=-1===s.indexOf("?")?"?":"&";s=s.match(r)?s.replace(r,"$1"+e+"="+a+"$2"):s+o+e+"="+a;return s+n},getServiceDomain:function(t){return"local"===t?"local.hubspotqa.com":"qa"===t?"cta-service-cms2.hubspotqa.com":"cta-service-cms2.hubspot.com"},changeCtaVisibility:function(t,e){try{for(var a=this.getElementsByClassName("hs-cta-"+t),i=0,n=a.length;n>i;i++){var s=a[i];s.getAttribute("data-hs-drop")||(s.style.visibility=e)}}catch(r){this.log(t+" couldn't be change visibility to "+e)}},isDebug:function(){return window.location.href.toLowerCase().indexOf("hsctadebug")>=0},log:function(t){if(this.isDebug()){t=(new Date).getTime()+" [CTA]: "+t;window.console&&window.console.log(t);if(this.getParameterByName("selenium")){var e=document.getElementById("selenium_log");if(!e){e=document.createElement("pre");e.id="selenium_log";document.body.appendChild(e)}e.appendChild(document.createTextNode(t+"\n"))}}},generateUtk:function(){function t(){return(65536*(1+Math.random())).toString(16).substring(0,4)}var e=(new Date).getTime().toString(16);e=e.substring(e.length-12||0,e.length);for(;e.length<12;)e="0"+e;return"c7a00000"+t()+t()+t()+e},addScript:function(t,e){var a=document.createElement("script");a.type="text/javascript";a.async=!0;a.src=t;this.isDebug()&&this.log(e+" adding script: "+a.src.replace(/&|\?/g,"\n").replace(/=/g,"	= "));(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(a)}};t.utils.isPreviewUrl=window.location.host.indexOf("preview.hs-sites.com")>-1||!!t.utils.getParameterByName("hs_preview");t.utils.isGooglebot=/googlebot/i.test(navigator.userAgent);t.utils.getElementsByClassName=document.getElementsByClassName?document.getElementsByClassName.bind(document):function(t){document.querySelectorAll("."+t)};t.utils.domReady(function(){t.utils.domReadyCalled=!0})}(window.hbspt.cta);