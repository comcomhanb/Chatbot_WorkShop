webpackJsonp([14,88,89,90,91,92],{806:function(e,a,t){"use strict";function o(e,a,t){t=t||{};var o;return o="string"==typeof n[e]?n[e]:1===a?n[e].one:n[e].other.replace("{{count}}",a),t.addSuffix?t.comparison>0?"daqui a "+o:"há "+o:o}Object.defineProperty(a,"__esModule",{value:!0}),a.default=o;var n={lessThanXSeconds:{one:"menos de um segundo",other:"menos de {{count}} segundos"},xSeconds:{one:"1 segundo",other:"{{count}} segundos"},halfAMinute:"meio minuto",lessThanXMinutes:{one:"menos de um minuto",other:"menos de {{count}} minutos"},xMinutes:{one:"1 minuto",other:"{{count}} minutos"},aboutXHours:{one:"aproximadamente 1 hora",other:"aproximadamente {{count}} horas"},xHours:{one:"1 hora",other:"{{count}} horas"},xDays:{one:"1 dia",other:"{{count}} dias"},aboutXMonths:{one:"aproximadamente 1 mês",other:"aproximadamente {{count}} meses"},xMonths:{one:"1 mês",other:"{{count}} meses"},aboutXYears:{one:"aproximadamente 1 ano",other:"aproximadamente {{count}} anos"},xYears:{one:"1 ano",other:"{{count}} anos"},overXYears:{one:"mais de 1 ano",other:"mais de {{count}} anos"},almostXYears:{one:"quase 1 ano",other:"quase {{count}} anos"}};e.exports=a.default},807:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var o=t(189),n=function(e){return e&&e.__esModule?e:{default:e}}(o),u=(0,n.default)({LT:"h:mm aa",LTS:"h:mm:ss aa",L:"MM/DD/YYYY",LL:"MMMM D YYYY",LLL:"MMMM D YYYY h:mm aa",LLLL:"dddd, MMMM D YYYY h:mm aa"});a.default=u,e.exports=a.default},808:function(e,a,t){"use strict";function o(e,a,t,o){return n[e]}Object.defineProperty(a,"__esModule",{value:!0}),a.default=o;var n={lastWeek:"[last] dddd [at] LT",yesterday:"[yesterday at] LT",today:"[today at] LT",tomorrow:"[tomorrow at] LT",nextWeek:"dddd [at] LT",other:"L"};e.exports=a.default},809:function(e,a,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e){return Number(e)+"º"}Object.defineProperty(a,"__esModule",{value:!0});var u=t(191),r=o(u),s=t(190),d=o(s),i={narrow:["do","se","te","qa","qi","se","sa"],short:["dom","seg","ter","qua","qui","sex","sáb"],long:["domingo","segunda-feira","terça-feira","quarta-feira","quinta-feira","sexta-feira","sábado"]},l={short:["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],long:["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"]},m={uppercase:["AM","PM"],lowercase:["am","pm"],long:["a.m.","p.m."]},f={ordinalNumber:n,weekday:(0,r.default)(i,"long"),weekdays:(0,d.default)(i,"long"),month:(0,r.default)(l,"long"),months:(0,d.default)(l,"long"),timeOfDay:(0,r.default)(m,"long",function(e){return e/12>=1?1:0}),timesOfDay:(0,d.default)(m,"long")};a.default=f,e.exports=a.default},810:function(e,a,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(a,"__esModule",{value:!0});var n=t(192),u=o(n),r=t(194),s=o(r),d=t(193),i=o(d),l=t(195),m=o(l),f=/^(\d+)(th|st|nd|rd)?/i,c={narrow:/^(su|mo|tu|we|th|fr|sa)/i,short:/^(sun|mon|tue|wed|thu|fri|sat)/i,long:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},h={any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},y={short:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,long:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},p={any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},M={short:/^(am|pm)/i,long:/^([ap]\.?\s?m\.?)/i},b={any:[/^a/i,/^p/i]},g={ordinalNumbers:(0,i.default)(f),ordinalNumber:m.default,weekdays:(0,u.default)(c,"long"),weekday:(0,s.default)(h,"any"),months:(0,u.default)(y,"long"),month:(0,s.default)(p,"any"),timesOfDay:(0,u.default)(M,"long"),timeOfDay:(0,s.default)(b,"any")};a.default=g,e.exports=a.default},888:function(e,a,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(a,"__esModule",{value:!0});var n=t(806),u=o(n),r=t(807),s=o(r),d=t(808),i=o(d),l=t(809),m=o(l),f=t(810),c=o(f),h={formatDistance:u.default,formatLong:s.default,formatRelative:i.default,localize:m.default,match:c.default,options:{weekStartsOn:1,firstWeekContainsDate:4}};a.default=h,e.exports=a.default}});
//# sourceMappingURL=ff12dbd00faf5a87b6ad.js.map
