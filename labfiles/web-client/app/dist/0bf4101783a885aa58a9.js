webpackJsonp([17,103,104,105,106,107],{791:function(e,t,n){"use strict";function a(e,t,n){n=n||{};var a;return a="string"==typeof r[e]?r[e]:1===t?r[e].one:r[e].other.replace("{{count}}",t),n.addSuffix?n.comparison>0?"om "+a:a+" siden":a}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a;var r={lessThanXSeconds:{one:"mindre enn ett sekund",other:"mindre enn {{count}} sekunder"},xSeconds:{one:"ett sekund",other:"{{count}} sekunder"},halfAMinute:"et halvt minutt",lessThanXMinutes:{one:"mindre enn ett minutt",other:"mindre enn {{count}} minutter"},xMinutes:{one:"ett minutt",other:"{{count}} minutter"},aboutXHours:{one:"rundt en time",other:"rundt {{count}} timer"},xHours:{one:"en time",other:"{{count}} timer"},xDays:{one:"en dag",other:"{{count}} dager"},aboutXMonths:{one:"rundt en måned",other:"rundt {{count}} måneder"},xMonths:{one:"en måned",other:"{{count}} måneder"},aboutXYears:{one:"rundt ett år",other:"rundt {{count}} år"},xYears:{one:"ett år",other:"{{count}} år"},overXYears:{one:"over ett år",other:"over {{count}} år"},almostXYears:{one:"nesten ett år",other:"nesten {{count}} år"}};e.exports=t.default},792:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(189),r=function(e){return e&&e.__esModule?e:{default:e}}(a),o=(0,r.default)({LT:"h:mm aa",LTS:"h:mm:ss aa",L:"MM/DD/YYYY",LL:"MMMM D YYYY",LLL:"MMMM D YYYY h:mm aa",LLLL:"dddd, MMMM D YYYY h:mm aa"});t.default=o,e.exports=t.default},793:function(e,t,n){"use strict";function a(e,t,n,a){return r[e]}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a;var r={lastWeek:"[last] dddd [at] LT",yesterday:"[yesterday at] LT",today:"[today at] LT",tomorrow:"[tomorrow at] LT",nextWeek:"dddd [at] LT",other:"L"};e.exports=t.default},794:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e){return Number(e)+"."}Object.defineProperty(t,"__esModule",{value:!0});var o=n(191),u=a(o),d=n(190),s=a(d),i={narrow:["sø","ma","ti","on","to","fr","lø"],short:["sø.","ma.","ti.","on.","to.","fr.","lø."],long:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},l={short:["jan.","feb.","mars","april","mai","juni","juli","aug.","sep.","okt.","nov.","des."],long:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},f={uppercase:["AM","PM"],lowercase:["am","pm"],long:["a.m.","p.m."]},m={ordinalNumber:r,weekday:(0,u.default)(i,"long"),weekdays:(0,s.default)(i,"long"),month:(0,u.default)(l,"long"),months:(0,s.default)(l,"long"),timeOfDay:(0,u.default)(f,"long",function(e){return e/12>=1?1:0}),timesOfDay:(0,s.default)(f,"long")};t.default=m,e.exports=t.default},795:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(192),o=a(r),u=n(194),d=a(u),s=n(193),i=a(s),l=n(195),f=a(l),m=/^(\d+)(th|st|nd|rd)?/i,c={narrow:/^(su|mo|tu|we|th|fr|sa)/i,short:/^(sun|mon|tue|wed|thu|fri|sat)/i,long:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},h={any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},y={short:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,long:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},p={any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},M={short:/^(am|pm)/i,long:/^([ap]\.?\s?m\.?)/i},g={any:[/^a/i,/^p/i]},b={ordinalNumbers:(0,i.default)(m),ordinalNumber:f.default,weekdays:(0,o.default)(c,"long"),weekday:(0,d.default)(h,"any"),months:(0,o.default)(y,"long"),month:(0,d.default)(p,"any"),timesOfDay:(0,o.default)(M,"long"),timeOfDay:(0,d.default)(g,"any")};t.default=b,e.exports=t.default},885:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(791),o=a(r),u=n(792),d=a(u),s=n(793),i=a(s),l=n(794),f=a(l),m=n(795),c=a(m),h={formatDistance:o.default,formatLong:d.default,formatRelative:i.default,localize:f.default,match:c.default,options:{weekStartsOn:1,firstWeekContainsDate:4}};t.default=h,e.exports=t.default}});
//# sourceMappingURL=0bf4101783a885aa58a9.js.map
