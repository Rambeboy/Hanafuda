function _0x5aa5(_0x2b7bfd,_0x35624c){const _0x66f317=_0x66f3();return _0x5aa5=function(_0x5aa588,_0x4302fe){_0x5aa588=_0x5aa588-0xce;let _0x1896b6=_0x66f317[_0x5aa588];return _0x1896b6;},_0x5aa5(_0x2b7bfd,_0x35624c);}const _0x62f5e=_0x5aa5;(function(_0x542f6a,_0x23252e){const _0x21c744=_0x5aa5,_0xab1fea=_0x542f6a();while(!![]){try{const _0xe67264=-parseInt(_0x21c744(0xcf))/0x1*(-parseInt(_0x21c744(0xef))/0x2)+-parseInt(_0x21c744(0xf5))/0x3*(parseInt(_0x21c744(0xd6))/0x4)+parseInt(_0x21c744(0x10c))/0x5*(parseInt(_0x21c744(0xf0))/0x6)+-parseInt(_0x21c744(0xd9))/0x7+-parseInt(_0x21c744(0x108))/0x8+parseInt(_0x21c744(0xe5))/0x9+parseInt(_0x21c744(0xf1))/0xa;if(_0xe67264===_0x23252e)break;else _0xab1fea['push'](_0xab1fea['shift']());}catch(_0x142dc8){_0xab1fea['push'](_0xab1fea['shift']());}}}(_0x66f3,0x83c28));import _0x323150 from'blessed';import _0x109c5f from'./logger.js';function _0x66f3(){const _0x440097=['info','evmAddress','\x20-\x20','center','status','renderTabList','growActionCount','white','createAccountTab','674szeJkq','78kbMLSn','478270oDnDkj','Account\x20','tabs','line','1967967SfLtAz','render','name','setContent','getTodayDepositLog','show','hide','{center}Use\x20\x27->\x27(arrow\x20right)\x20and\x20\x27<-\x27(arrow\x20left)\x20to\x20switch\x20between\x20tabs{/center}','garden','push','key','100%','address','USEDEPOSIT','right','length','switchTab','infoBox','forEach','2760560mpZRKV','totalPoint','screen','gardenStatus','409075djFPuZ','append','#f0f0f0','597ykAyRs','subTitle','hintBox','\x0a{center}Info:\x20','find','{/center}\x0a','title','4nHLjAi','currentTabIndex','spinnerContent','532399amYnxk','left','shrink','\x20{/bold}{/blue-fg}\x20','balance','depositCount','{center}HANAFUDA\x20BOT{/center}\x0a\x20\x20\x20\x20By\x20:\x20Nofan\x20Rambe','log','{blue-fg}{bold}\x20Account\x20','tabList','user','box','2737737GulxzI'];_0x66f3=function(){return _0x440097;};return _0x66f3();}import _0x1c5b20 from'../core/core.js';import{Helper}from'./helper.js';import{accountLists}from'../../accounts/accounts.js';import{Config}from'../../config/config.js';import _0x27ab8c from'../core/db/sqlite.js';export class Bless{constructor(){const _0x47195f=_0x5aa5;this[_0x47195f(0x10a)]=_0x323150[_0x47195f(0x10a)]({'smartCSR':!![]}),this[_0x47195f(0x10a)][_0x47195f(0xd5)]='Nofan\x20Rambe',this['titleBox']=_0x323150['box']({'top':0x0,'left':_0x47195f(0xe9),'width':'shrink','height':0x2,'tags':!![],'content':_0x47195f(0xdf),'style':{'fg':_0x47195f(0xed),'bold':!![]}}),this[_0x47195f(0x10a)][_0x47195f(0x10d)](this['titleBox']),this[_0x47195f(0xd0)]=_0x323150[_0x47195f(0xe4)]({'top':0x1,'left':_0x47195f(0xe9),'width':'shrink','height':0x2,'tags':!![],'content':'Welcome\x20&\x20Enjoy\x20Sir!','style':{'fg':_0x47195f(0xed),'bold':!![]}}),this[_0x47195f(0x10a)][_0x47195f(0x10d)](this[_0x47195f(0xd0)]),this['tabList']=_0x323150[_0x47195f(0xe4)]({'top':0x5,'left':_0x47195f(0xe9),'width':_0x47195f(0x100),'height':0x3,'tags':!![],'style':{'fg':_0x47195f(0xed)}}),this[_0x47195f(0x10a)][_0x47195f(0x10d)](this['tabList']),this[_0x47195f(0xd1)]=_0x323150[_0x47195f(0xe4)]({'bottom':0x0,'left':_0x47195f(0xe9),'width':_0x47195f(0x100),'height':0x3,'tags':!![],'content':_0x47195f(0xfc),'style':{'fg':_0x47195f(0xed)}}),this[_0x47195f(0x10a)][_0x47195f(0x10d)](this[_0x47195f(0xd1)]),this[_0x47195f(0x106)]=_0x323150[_0x47195f(0xe4)]({'bottom':0x3,'left':_0x47195f(0xe9),'width':_0x47195f(0x100),'height':0x3,'tags':!![],'content':'','style':{'fg':_0x47195f(0xed)}}),this[_0x47195f(0x10a)]['append'](this[_0x47195f(0x106)]),this[_0x47195f(0xf3)]=[],this['currentTabIndex']=0x0,accountLists[_0x47195f(0x107)]((_0x399ba3,_0x1dbad4)=>{const _0x175fa7=_0x47195f,_0x3963d5=this[_0x175fa7(0xee)](_0x175fa7(0xf2)+(_0x1dbad4+0x1));this[_0x175fa7(0xf3)][_0x175fa7(0xfe)](_0x3963d5),this[_0x175fa7(0x10a)]['append'](_0x3963d5),_0x3963d5[_0x175fa7(0xfb)]();}),this[_0x47195f(0xf3)][_0x47195f(0x104)]>0x0&&this[_0x47195f(0xf3)][0x0][_0x47195f(0xfa)](),this[_0x47195f(0xeb)](),this[_0x47195f(0x10a)][_0x47195f(0xff)](['q','C-c'],()=>{return process['exit'](0x0);}),this[_0x47195f(0x10a)][_0x47195f(0xff)]([_0x47195f(0xda),_0x47195f(0x103)],(_0x5e27e3,_0x2925f7)=>{const _0x2b5da6=_0x47195f;if(_0x2925f7[_0x2b5da6(0xf7)]===_0x2b5da6(0x103))this[_0x2b5da6(0x105)]((this[_0x2b5da6(0xd7)]+0x1)%this[_0x2b5da6(0xf3)][_0x2b5da6(0x104)]);else _0x2925f7['name']===_0x2b5da6(0xda)&&this[_0x2b5da6(0x105)]((this[_0x2b5da6(0xd7)]-0x1+this[_0x2b5da6(0xf3)][_0x2b5da6(0x104)])%this[_0x2b5da6(0xf3)]['length']);}),this[_0x47195f(0x10a)]['render']();}[_0x62f5e(0xee)](_0x418e1c){const _0x594862=_0x62f5e;return _0x323150[_0x594862(0xe4)]({'label':_0x418e1c,'top':0x6,'left':0x0,'width':_0x594862(0x100),'height':_0x594862(0xdb),'border':{'type':_0x594862(0xf4)},'style':{'fg':_0x594862(0xed),'border':{'fg':_0x594862(0xce)}},'tags':!![]});}[_0x62f5e(0xeb)](){const _0x3fbaa9=_0x62f5e;let _0x5bb405='';accountLists[_0x3fbaa9(0x107)]((_0x563f9f,_0x439d67)=>{const _0x34dfbc=_0x3fbaa9;_0x439d67===this[_0x34dfbc(0xd7)]?_0x5bb405+=_0x34dfbc(0xe1)+(_0x439d67+0x1)+_0x34dfbc(0xdc):_0x5bb405+='\x20Account\x20'+(_0x439d67+0x1)+'\x20';}),this[_0x3fbaa9(0xe2)][_0x3fbaa9(0xf8)]('{center}'+_0x5bb405+'{/center}'),this[_0x3fbaa9(0x10a)][_0x3fbaa9(0xf6)]();}['switchTab'](_0x18acb0){const _0x321ea3=_0x62f5e;this[_0x321ea3(0xf3)][this[_0x321ea3(0xd7)]]['hide'](),this[_0x321ea3(0xd7)]=_0x18acb0,this['tabs'][this[_0x321ea3(0xd7)]]['show'](),this[_0x321ea3(0xeb)](),this[_0x321ea3(0x10a)][_0x321ea3(0xf6)]();}async[_0x62f5e(0xe0)](_0x2e4b65='',_0x27b56e='',_0x19ccb0=new _0x1c5b20(),_0x405091){const _0x420191=_0x62f5e,_0x209288=accountLists[_0x420191(0xd3)](_0x3a609f=>_0x3a609f['pk']==_0x27b56e['pk']),_0x3e7142=accountLists['indexOf'](_0x209288);_0x405091===undefined&&(_0x109c5f['info'](_0x420191(0xf2)+(_0x3e7142+0x1)+_0x420191(0xe8)+_0x2e4b65),_0x405091='-');let _0x37db7b;const _0x4970a8=_0x19ccb0[_0x420191(0xe3)]??{},_0x2c9abf=_0x4970a8[_0x420191(0xf7)]??'-',_0x2986f6=_0x4970a8[_0x420191(0xea)]??{},_0x11c293=_0x2986f6[_0x420191(0x109)]??'-',_0x456e9a=_0x2986f6[_0x420191(0xde)]??'-',_0x18aa91=_0x2986f6[_0x420191(0xe7)]??{},_0xcda7be=_0x18aa91[_0x420191(0x101)]??'-',_0x549834=_0x19ccb0[_0x420191(0xfd)]??{},_0x47b8df=_0x549834[_0x420191(0x10b)]??{},_0x45b8ee=_0x47b8df[_0x420191(0xec)]??'?',_0x393e23=_0x47b8df['gardenRewardActionCount']??'?';let _0x4da801={'msg':_0x2e4b65,'delay':_0x405091,'name':_0x2c9abf,'point':_0x11c293,'address':_0xcda7be,'depo':_0x456e9a,'grow':_0x45b8ee,'gardenReward':_0x393e23};const _0x180a99=Config[_0x420191(0x102)]??![];if(_0x180a99){const _0x54d1dc=_0x19ccb0[_0x420191(0xdd)]??'-',_0x559801=_0x19ccb0[_0x420191(0x101)]??'-',_0x49c050=(await _0x27ab8c[_0x420191(0xf9)](_0x559801))[_0x420191(0x104)];_0x4da801={..._0x4da801,'balance':_0x54d1dc,'address':_0x559801,'depoToday':_0x49c050},_0x37db7b=''+Helper[_0x420191(0xd8)](!![],_0x4da801);}else _0x37db7b=''+Helper['spinnerContent'](![],_0x4da801);this[_0x420191(0xf3)][_0x3e7142][_0x420191(0xf8)](_0x37db7b),this[_0x420191(0x10a)][_0x420191(0xf6)]();}[_0x62f5e(0xe6)](_0x1e9b4b=''){const _0x4239c5=_0x62f5e,_0xec103e=_0x4239c5(0xd2)+_0x1e9b4b+_0x4239c5(0xd4);this[_0x4239c5(0x106)][_0x4239c5(0xf8)](_0xec103e),this['screen'][_0x4239c5(0xf6)]();}['clearInfo'](){const _0x21ae64=_0x62f5e;this['infoBox']['setContent'](''),this[_0x21ae64(0x10a)][_0x21ae64(0xf6)]();}}