const _0x10a96d=_0x297c;function _0x297c(_0x5c841b,_0xdfd3b){const _0x46ad4e=_0x46ad();return _0x297c=function(_0x297c1d,_0x39527e){_0x297c1d=_0x297c1d-0xb5;let _0xb4dba3=_0x46ad4e[_0x297c1d];return _0xb4dba3;},_0x297c(_0x5c841b,_0xdfd3b);}(function(_0x47e266,_0x1f3413){const _0x501e38=_0x297c,_0x487de5=_0x47e266();while(!![]){try{const _0x50fd44=-parseInt(_0x501e38(0xe1))/0x1*(-parseInt(_0x501e38(0xc2))/0x2)+-parseInt(_0x501e38(0xb7))/0x3+-parseInt(_0x501e38(0xe2))/0x4+parseInt(_0x501e38(0xc1))/0x5*(parseInt(_0x501e38(0xd8))/0x6)+parseInt(_0x501e38(0xde))/0x7+parseInt(_0x501e38(0xd1))/0x8+-parseInt(_0x501e38(0xe7))/0x9*(parseInt(_0x501e38(0xbc))/0xa);if(_0x50fd44===_0x1f3413)break;else _0x487de5['push'](_0x487de5['shift']());}catch(_0x5802b8){_0x487de5['push'](_0x487de5['shift']());}}}(_0x46ad,0xcbe6d));function _0x46ad(){const _0x26c891=['agent','generateHeaders','7155222WDaypf','get','includes','cors','replace','application/json','2485959BEJRYx','isArray','error','73621JODoAK','3335128OwTAdg','...','fetch','substring','statusText','2864529EBtMFD','randomUserAgent','headers','content-type','Bearer\x20','2340846ITRApX','?????','Response\x20:\x20','proxy','response','30PhbPQv','Response\x20Data\x20:\x20','GET','text','something','5noiwRG','26GRRcxP','Authorization','application/json,\x20text/plain,\x20*/*','status','info','body','Request\x20Body\x20:\x20','replaceSensitiveData','Detect\x20API\x20Change\x20Stopping\x20bot','\x20:\x20','query','en-US,en;q=0.9,id;q=0.8','url','json','Request\x20Header\x20:\x20','7194728jpdEzT','empty','stringify','string','forEach'];_0x46ad=function(){return _0x26c891;};return _0x46ad();}import{HttpsProxyAgent}from'https-proxy-agent';import _0x6d0df3 from'node-fetch';import{Helper}from'../../utils/helper.js';import _0x57a45c from'../../utils/logger.js';export class API{constructor(_0x46c7fd,_0x187760){const _0x5ccc66=_0x297c;this[_0x5ccc66(0xce)]=_0x46c7fd,this['proxy']=_0x187760,this['ua']=Helper[_0x5ccc66(0xe8)]();}[_0x10a96d(0xd7)](_0x3df675=this[_0x10a96d(0xcc)]){const _0x332daa=_0x10a96d,_0xaa332f={'Accept':_0x332daa(0xc4),'Accept-Language':_0x332daa(0xcd),'Content-Type':'application/json','Sec-Fetch-Dest':_0x332daa(0xd2),'Sec-Fetch-Site':'same-site','Sec-Fetch-Mode':_0x332daa(0xdb),'User-Agent':this['ua']};return _0x3df675&&(_0xaa332f[_0x332daa(0xc3)]=_0x332daa(0xb6)+(_0x3df675[_0x332daa(0xda)](_0x332daa(0xb6))?_0x3df675[_0x332daa(0xdc)](_0x332daa(0xb6),''):_0x3df675)),_0xaa332f;}['replaceSensitiveData'](_0x9c999){const _0x9763ca=_0x10a96d;if(this[_0x9763ca(0xc0)]){if(typeof this[_0x9763ca(0xc0)]===_0x9763ca(0xd4)){const _0x303566=new RegExp(this[_0x9763ca(0xc0)],'g');return _0x9c999[_0x9763ca(0xdc)](_0x303566,_0x9763ca(0xb8));}else Array[_0x9763ca(0xdf)](this['something'])&&this[_0x9763ca(0xc0)][_0x9763ca(0xd5)](_0x4362f4=>{const _0x722bc8=_0x9763ca,_0x316c39=new RegExp(_0x4362f4,'g');_0x9c999=_0x9c999[_0x722bc8(0xdc)](_0x316c39,'?????');});}return _0x9c999;}async[_0x10a96d(0xe4)](_0x5ed5c6,_0xdaffd0,_0x56e0ec,_0x3c683c={},_0x4bed05={},_0x1820f2=![]){const _0x3e2308=_0x10a96d,_0x109dbe=_0x1820f2?_0x5ed5c6:''+this[_0x3e2308(0xce)]+_0x5ed5c6;try{const _0x4c12ae={...this[_0x3e2308(0xd7)](_0x56e0ec),..._0x4bed05},_0x456a3b={'headers':_0x4c12ae,'method':_0xdaffd0,'referer':this['origin']+'/'};_0x57a45c[_0x3e2308(0xc6)](_0xdaffd0+_0x3e2308(0xcb)+this[_0x3e2308(0xc9)](_0x109dbe)+'\x20'+(this[_0x3e2308(0xba)]?this['proxy']:''));for(let _0x34e493 in _0x4c12ae){_0x4c12ae[_0x34e493]=this['replaceSensitiveData'](_0x4c12ae[_0x34e493]);}_0x57a45c[_0x3e2308(0xc6)](_0x3e2308(0xd0)+JSON[_0x3e2308(0xd3)](_0x4c12ae));if(_0xdaffd0!==_0x3e2308(0xbe)){_0x456a3b[_0x3e2308(0xc7)]=''+JSON[_0x3e2308(0xd3)](_0x3c683c);const _0x395cc2=this['replaceSensitiveData'](_0x456a3b[_0x3e2308(0xc7)]);_0x57a45c[_0x3e2308(0xc6)](_0x3e2308(0xc8)+_0x395cc2);}this[_0x3e2308(0xba)]&&(_0x456a3b[_0x3e2308(0xd6)]=new HttpsProxyAgent(this[_0x3e2308(0xba)],{'rejectUnauthorized':![]}));const _0x1f6028=await _0x6d0df3(_0x109dbe,_0x456a3b);_0x57a45c[_0x3e2308(0xc6)](_0x3e2308(0xb9)+_0x1f6028[_0x3e2308(0xc5)]+'\x20'+_0x1f6028[_0x3e2308(0xe6)]);if(_0x1f6028['ok']||_0x1f6028['status']==0x190||_0x1f6028[_0x3e2308(0xc5)]==0x193){const _0x120eb8=_0x1f6028[_0x3e2308(0xe9)][_0x3e2308(0xd9)](_0x3e2308(0xb5));let _0x31c0e5;_0x120eb8&&_0x120eb8[_0x3e2308(0xda)](_0x3e2308(0xdd))?(_0x31c0e5=await _0x1f6028[_0x3e2308(0xcf)](),_0x31c0e5[_0x3e2308(0xc5)]=_0x1f6028[_0x3e2308(0xc5)]):_0x31c0e5={'status':_0x1f6028[_0x3e2308(0xc5)],'message':await _0x1f6028[_0x3e2308(0xbf)]()};_0x1f6028['ok']&&(_0x31c0e5['status']=0xc8);let _0x1c27ec=JSON[_0x3e2308(0xd3)](_0x31c0e5);return _0x1c27ec=this[_0x3e2308(0xc9)](_0x1c27ec),_0x1c27ec['length']>0xc8&&(_0x1c27ec=_0x1c27ec[_0x3e2308(0xe5)](0x0,0xc8)+_0x3e2308(0xe3)),_0x57a45c[_0x3e2308(0xc6)](_0x3e2308(0xbd)+_0x1c27ec),_0x31c0e5;}else throw _0x1f6028;}catch(_0x3023f8){if(_0x3023f8[_0x3e2308(0xbb)][_0x3e2308(0xc5)]==0x194||_0x3023f8[_0x3e2308(0xbb)][_0x3e2308(0xc5)]==0x1f7){console[_0x3e2308(0xe0)]('Detect\x20API\x20Change\x20Stopping\x20bot');throw Error(_0x3e2308(0xca));}throw _0x3023f8;}}}