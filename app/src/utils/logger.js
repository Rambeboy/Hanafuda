const _0xacbc0e=_0xcef5;function _0xcef5(_0x1450a8,_0xc93426){const _0x3b49bf=_0x3b49();return _0xcef5=function(_0xcef59b,_0x3b70b6){_0xcef59b=_0xcef59b-0x72;let _0x5bced1=_0x3b49bf[_0xcef59b];return _0x5bced1;},_0xcef5(_0x1450a8,_0xc93426);}(function(_0x665aae,_0x4a1199){const _0x5cbf55=_0xcef5,_0x574925=_0x665aae();while(!![]){try{const _0x4c6e73=parseInt(_0x5cbf55(0x82))/0x1+parseInt(_0x5cbf55(0x76))/0x2+-parseInt(_0x5cbf55(0x79))/0x3+parseInt(_0x5cbf55(0x75))/0x4+parseInt(_0x5cbf55(0x84))/0x5+-parseInt(_0x5cbf55(0x85))/0x6*(-parseInt(_0x5cbf55(0x78))/0x7)+-parseInt(_0x5cbf55(0x7c))/0x8;if(_0x4c6e73===_0x4a1199)break;else _0x574925['push'](_0x574925['shift']());}catch(_0x45e585){_0x574925['push'](_0x574925['shift']());}}}(_0x3b49,0xb645b));import{createLogger,format,transports}from'winston';import _0x2e68cc from'fs';const {combine,timestamp,printf,colorize}=format,customFormat=printf(({level:_0xc244e1,message:_0x45633f,timestamp:_0x49cccd})=>{const _0x475a3f=_0xcef5;return _0x49cccd+'\x20['+_0xc244e1+_0x475a3f(0x77)+_0x45633f;});class Logger{constructor(){const _0x43ac49=_0xcef5;this[_0x43ac49(0x7e)]=createLogger({'level':_0x43ac49(0x80),'format':combine(timestamp({'format':_0x43ac49(0x72)}),colorize(),customFormat),'transports':[new transports['File']({'filename':_0x43ac49(0x81)})],'exceptionHandlers':[new transports[(_0x43ac49(0x73))]({'filename':_0x43ac49(0x81)})],'rejectionHandlers':[new transports[(_0x43ac49(0x73))]({'filename':_0x43ac49(0x81)})]});}[_0xacbc0e(0x7d)](_0x55054d){const _0x22a8cc=_0xacbc0e;this[_0x22a8cc(0x7e)][_0x22a8cc(0x7d)](_0x55054d);}[_0xacbc0e(0x83)](_0xb52773){const _0x33bc24=_0xacbc0e;this[_0x33bc24(0x7e)]['warn'](_0xb52773);}['error'](_0xccc572){this['logger']['error'](_0xccc572);}[_0xacbc0e(0x80)](_0x4f9f49){const _0x3fe984=_0xacbc0e;this[_0x3fe984(0x7e)][_0x3fe984(0x80)](_0x4f9f49);}[_0xacbc0e(0x7f)](_0x5dbe4f){const _0xcfcc30=_0xacbc0e;this[_0xcfcc30(0x7e)]['level']=_0x5dbe4f;}['clear'](){const _0x3ca2ec=_0xacbc0e;_0x2e68cc['truncate'](_0x3ca2ec(0x81),0x0,_0x8e2ef1=>{const _0x4caf1c=_0x3ca2ec;_0x8e2ef1?this[_0x4caf1c(0x7e)][_0x4caf1c(0x74)]('Failed\x20to\x20clear\x20the\x20log\x20file:\x20'+_0x8e2ef1[_0x4caf1c(0x7b)]):this[_0x4caf1c(0x7e)][_0x4caf1c(0x7d)](_0x4caf1c(0x7a));});}}function _0x3b49(){const _0x47669e=['debug','log/app.log','44569hTSnVV','warn','6434005nWVPXQ','383766UvSFjA','YYYY-MM-DD\x20HH:mm:ss','File','error','308332dRPxfM','1833430GKGUZW',']:\x20','119amEdOH','482820taPfib','Log\x20file\x20cleared','message','20039824SWQlzS','info','logger','setLevel'];_0x3b49=function(){return _0x47669e;};return _0x3b49();}export default new Logger();