webpackJsonp([12,73,74,75,76,77],{822:function(e,t,u){"use strict";function o(e,t){return 1===t?e.one:t>=2&&t<=4?e.twoFour:e.other}function a(e,t,u){var a=o(e,t);return(a[u]||a).replace("{{count}}",t)}function r(e){return["lessThan","about","over","almost"].filter(function(t){return!!e.match(new RegExp("^"+t))})[0]}function n(e){var t="";return"almost"===e&&(t="takmer"),"about"===e&&(t="približne"),t.length>0?t+" ":""}function s(e){var t="";return"lessThan"===e&&(t="menej než"),"over"===e&&(t="viac než"),t.length>0?t+" ":""}function i(e){return e.charAt(0).toLowerCase()+e.slice(1)}function d(e,t,u){u=u||{};var o=r(e)||"",d=i(e.substring(o.length)),f=l[d];return u.addSuffix?u.comparison>0?n(o)+"za "+s(o)+a(f,t,"future"):n(o)+"pred "+s(o)+a(f,t,"past"):n(o)+s(o)+a(f,t,"regular")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=d;var l={xSeconds:{one:{regular:"sekunda",past:"sekundou",future:"sekundu"},twoFour:{regular:"{{count}} sekundy",past:"{{count}} sekundami",future:"{{count}} sekundy"},other:{regular:"{{count}} sekúnd",past:"{{count}} sekundami",future:"{{count}} sekúnd"}},halfAMinute:{other:{regular:"pol minúty",past:"pol minútou",future:"pol minúty"}},xMinutes:{one:{regular:"minúta",past:"minútou",future:"minútu"},twoFour:{regular:"{{count}} minúty",past:"{{count}} minútami",future:"{{count}} minúty"},other:{regular:"{{count}} minút",past:"{{count}} minútami",future:"{{count}} minút"}},xHours:{one:{regular:"hodina",past:"hodinou",future:"hodinu"},twoFour:{regular:"{{count}} hodiny",past:"{{count}} hodinami",future:"{{count}} hodiny"},other:{regular:"{{count}} hodín",past:"{{count}} hodinami",future:"{{count}} hodín"}},xDays:{one:{regular:"deň",past:"dňom",future:"deň"},twoFour:{regular:"{{count}} dni",past:"{{count}} dňami",future:"{{count}} dni"},other:{regular:"{{count}} dní",past:"{{count}} dňami",future:"{{count}} dní"}},xMonths:{one:{regular:"mesiac",past:"mesiacom",future:"mesiac"},twoFour:{regular:"{{count}} mesiace",past:"{{count}} mesiacmi",future:"{{count}} mesiace"},other:{regular:"{{count}} mesiacov",past:"{{count}} mesiacmi",future:"{{count}} mesiacov"}},xYears:{one:{regular:"rok",past:"rokom",future:"rok"},twoFour:{regular:"{{count}} roky",past:"{{count}} rokmi",future:"{{count}} roky"},other:{regular:"{{count}} rokov",past:"{{count}} rokmi",future:"{{count}} rokov"}}};e.exports=t.default},823:function(e,t,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=u(189),a=function(e){return e&&e.__esModule?e:{default:e}}(o),r=(0,a.default)({LT:"h:mm aa",LTS:"h:mm:ss aa",L:"MM/DD/YYYY",LL:"MMMM D YYYY",LLL:"MMMM D YYYY h:mm aa",LLLL:"dddd, MMMM D YYYY h:mm aa"});t.default=r,e.exports=t.default},824:function(e,t,u){"use strict";function o(e,t,u,o){return a[e]}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var a={lastWeek:"[last] dddd [at] LT",yesterday:"[yesterday at] LT",today:"[today at] LT",tomorrow:"[tomorrow at] LT",nextWeek:"dddd [at] LT",other:"L"};e.exports=t.default},825:function(e,t,u){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e){return Number(e)+"."}Object.defineProperty(t,"__esModule",{value:!0});var r=u(191),n=o(r),s=u(190),i=o(s),d={narrow:["ne","po","ut","st","št","pi","so"],short:["neď","pon","uto","str","štv","pia","sob"],long:["nedeľa","pondelok","utorok","streda","štvrtok","piatok","sobota"]},l={short:["jan","feb","mar","apr","máj","jún","júl","aug","sep","okt","nov","dec"],long:["január","február","marec","apríl","máj","jún","júl","august","september","október","november","december"]},f={uppercase:["AM","PM"],lowercase:["am","pm"],long:["a.m.","p.m."]},c={ordinalNumber:a,weekday:(0,n.default)(d,"long"),weekdays:(0,i.default)(d,"long"),month:(0,n.default)(l,"long"),months:(0,i.default)(l,"long"),timeOfDay:(0,n.default)(f,"long",function(e){return e/12>=1?1:0}),timesOfDay:(0,i.default)(f,"long")};t.default=c,e.exports=t.default},826:function(e,t,u){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=u(192),r=o(a),n=u(194),s=o(n),i=u(193),d=o(i),l=u(195),f=o(l),c=/^(\d+)(th|st|nd|rd)?/i,m={narrow:/^(su|mo|tu|we|th|fr|sa)/i,short:/^(sun|mon|tue|wed|thu|fri|sat)/i,long:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},p={any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},y={short:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,long:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},h={any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},g={short:/^(am|pm)/i,long:/^([ap]\.?\s?m\.?)/i},k={any:[/^a/i,/^p/i]},v={ordinalNumbers:(0,d.default)(c),ordinalNumber:f.default,weekdays:(0,r.default)(m,"long"),weekday:(0,s.default)(p,"any"),months:(0,r.default)(y,"long"),month:(0,s.default)(h,"any"),timesOfDay:(0,r.default)(g,"long"),timeOfDay:(0,s.default)(k,"any")};t.default=v,e.exports=t.default},891:function(e,t,u){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=u(822),r=o(a),n=u(823),s=o(n),i=u(824),d=o(i),l=u(825),f=o(l),c=u(826),m=o(c),p={formatDistance:r.default,formatLong:s.default,formatRelative:d.default,localize:f.default,match:m.default,options:{weekStartsOn:1,firstWeekContainsDate:1}};t.default=p,e.exports=t.default}});
//# sourceMappingURL=11390a7f92c460ebc796.js.map
