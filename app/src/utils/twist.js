const _0x51c18a=_0x2f4f;function _0x2f4f(_0x311aac,_0x787972){const _0x48a237=_0x48a2();return _0x2f4f=function(_0x2f4f5f,_0x59f861){_0x2f4f5f=_0x2f4f5f-0x70;let _0x4e57fc=_0x48a237[_0x2f4f5f];return _0x4e57fc;},_0x2f4f(_0x311aac,_0x787972);}(function(_0x1d12fd,_0x2126cc){const _0x5dac0a=_0x2f4f,_0x18c842=_0x1d12fd();while(!![]){try{const _0x18dc1f=-parseInt(_0x5dac0a(0x7d))/0x1*(-parseInt(_0x5dac0a(0x8e))/0x2)+-parseInt(_0x5dac0a(0x8c))/0x3+-parseInt(_0x5dac0a(0x87))/0x4*(parseInt(_0x5dac0a(0x8b))/0x5)+parseInt(_0x5dac0a(0x71))/0x6+parseInt(_0x5dac0a(0x7e))/0x7+-parseInt(_0x5dac0a(0x7a))/0x8*(parseInt(_0x5dac0a(0x88))/0x9)+parseInt(_0x5dac0a(0x77))/0xa;if(_0x18dc1f===_0x2126cc)break;else _0x18c842['push'](_0x18c842['shift']());}catch(_0x2e3d9b){_0x18c842['push'](_0x18c842['shift']());}}}(_0x48a2,0x315af));import{Twisters}from'twisters';import _0x4e51ba from'./logger.js';function _0x48a2(){const _0x1d6620=['Account\x20','8914weizcr','find','info','twisters','growActionCount','206046XahvWt','gardenRewardActionCount','log','indexOf','user','\x20=================\x0a','6365960rYVQWX','address','\x0a==================\x20Account\x20','4040vQgTgN','garden','spinnerContent','17piElhk','2290078HVKZQh','put','depositCount','clear','name','\x0a==============================================','\x0a==============================================\x0aInfo\x20:\x20','totalPoint','remove','524SCJhiw','4905ywRsfc','status','gardenStatus','8065uUsFNH','1155519QmlFhR'];_0x48a2=function(){return _0x1d6620;};return _0x48a2();}import _0x4cc486 from'../core/core.js';import{Config}from'../../config/config.js';import{accountLists}from'../../accounts/accounts.js';import _0x2369c2 from'../core/db/sqlite.js';import{Helper}from'./helper.js';export class Twist{constructor(){const _0xbb4a33=_0x2f4f;this[_0xbb4a33(0x91)]=new Twisters();}async[_0x51c18a(0x73)](_0x3c2a7f='',_0x2398bb='',_0x43e2b1=new _0x4cc486(),_0x3887d1){const _0x31026b=_0x51c18a,_0x1aba76=accountLists[_0x31026b(0x8f)](_0x531b35=>_0x531b35['pk']==_0x2398bb['pk']),_0x30b175=accountLists[_0x31026b(0x74)](_0x1aba76);_0x3887d1==undefined&&(_0x4e51ba[_0x31026b(0x90)](_0x31026b(0x8d)+(_0x30b175+0x1)+'\x20-\x20'+_0x3c2a7f),_0x3887d1='-');const _0x1bbc2f=_0x43e2b1[_0x31026b(0x75)]??{},_0x3d2e01=_0x1bbc2f[_0x31026b(0x82)]??'-',_0xf06b59=_0x1bbc2f[_0x31026b(0x89)]??{},_0x497d06=_0xf06b59[_0x31026b(0x85)]??'-',_0x230550=_0xf06b59[_0x31026b(0x80)]??'-',_0x4074eb=_0xf06b59['evmAddress']??{},_0x5a20f1=_0x4074eb[_0x31026b(0x78)]??'-',_0x404224=_0x43e2b1[_0x31026b(0x7b)]??{},_0x1c6c3c=_0x404224[_0x31026b(0x8a)]??{},_0x5bb095=_0x1c6c3c[_0x31026b(0x70)]??'?',_0xae2238=_0x1c6c3c[_0x31026b(0x72)]??'?';let _0x49fac2={'msg':_0x3c2a7f,'delay':_0x3887d1,'name':_0x3d2e01,'point':_0x497d06,'address':_0x5a20f1,'depo':_0x230550,'grow':_0x5bb095,'gardenReward':_0xae2238},_0x5609ea;const _0x276560=Config['USEDEPOSIT']??![];if(_0x276560){const _0x4f8ba7=_0x43e2b1['balance']??'-',_0x4c2dc0=_0x43e2b1[_0x31026b(0x78)]??'-',_0x3b8604=(await _0x2369c2['getTodayDepositLog'](_0x4c2dc0))['length'];_0x49fac2={..._0x49fac2,'balance':_0x4f8ba7,'address':_0x4c2dc0,'depoToday':_0x3b8604},_0x5609ea=_0x31026b(0x79)+(_0x30b175+0x1)+_0x31026b(0x76)+Helper[_0x31026b(0x7c)](!![],_0x49fac2)+'\x0a==============================================';}else _0x5609ea=_0x31026b(0x79)+(_0x30b175+0x1)+_0x31026b(0x76)+Helper['spinnerContent'](![],_0x49fac2)+_0x31026b(0x83);this[_0x31026b(0x91)][_0x31026b(0x7f)](_0x1aba76['pk'],{'text':_0x5609ea});}[_0x51c18a(0x90)](_0x4893bb=''){const _0x5d543f=_0x51c18a;this[_0x5d543f(0x91)][_0x5d543f(0x7f)](0x2,{'text':_0x5d543f(0x84)+_0x4893bb+_0x5d543f(0x83)});return;}['clearInfo'](){this['twisters']['remove'](0x2);}[_0x51c18a(0x81)](_0x5993ed){const _0xa46ca8=_0x51c18a;this[_0xa46ca8(0x91)][_0xa46ca8(0x86)](_0x5993ed['pk']);}}