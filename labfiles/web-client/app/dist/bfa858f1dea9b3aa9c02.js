webpackJsonp([22,128,129,130,131,132],{766:function(e,t,n){"use strict";function a(e,t,n){n=n||{};var a;return a="string"==typeof u[e]?u[e]:1===t?u[e].one:u[e].other.replace("{{count}}",t),n.addSuffix?n.comparison>0?"í "+a:a+" síðan":a}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a;var u={lessThanXSeconds:{one:"minna en 1 sekúnda",other:"minna en {{count}} sekúndur"},xSeconds:{one:"1 sekúnda",other:"{{count}} sekúndur"},halfAMinute:"hálf mínúta",lessThanXMinutes:{one:"minna en 1 mínúta",other:"minna en {{count}} mínútur"},xMinutes:{one:"1 mínúta",other:"{{count}} mínútur"},aboutXHours:{one:"u.þ.b. 1 klukkustund",other:"u.þ.b. {{count}} klukkustundir"},xHours:{one:"1 klukkustund",other:"{{count}} klukkustundir"},xDays:{one:"1 dagur",other:"{{count}} dagar"},aboutXMonths:{one:"u.þ.b. 1 mánuður",other:"u.þ.b. {{count}} mánuðir"},xMonths:{one:"1 mánuður",other:"{{count}} mánuðir"},aboutXYears:{one:"u.þ.b. 1 ár",other:"u.þ.b. {{count}} ár"},xYears:{one:"1 ár",other:"{{count}} ár"},overXYears:{one:"meira en 1 ár",other:"meira en {{count}} ár"},almostXYears:{one:"næstum 1 ár",other:"næstum {{count}} ár"}};e.exports=t.default},767:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(189),u=function(e){return e&&e.__esModule?e:{default:e}}(a),r=(0,u.default)({LT:"h:mm aa",LTS:"h:mm:ss aa",L:"MM/DD/YYYY",LL:"MMMM D YYYY",LLL:"MMMM D YYYY h:mm aa",LLLL:"dddd, MMMM D YYYY h:mm aa"});t.default=r,e.exports=t.default},768:function(e,t,n){"use strict";function a(e,t,n,a){return u[e]}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a;var u={lastWeek:"[last] dddd [at] LT",yesterday:"[yesterday at] LT",today:"[today at] LT",tomorrow:"[tomorrow at] LT",nextWeek:"dddd [at] LT",other:"L"};e.exports=t.default},769:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=Number(e);return String(t)}Object.defineProperty(t,"__esModule",{value:!0});var r=n(191),o=a(r),d=n(190),s=a(d),i={narrow:["su","má","þr","mi","fi","fö","la"],short:["sun","mán","þri","mið","fim","fös","lau"],long:["sunnudaginn","mánudaginn","þriðjudaginn","miðvikudaginn","fimmtudaginn","föstudaginn","laugardaginn"]},l={short:["jan","feb","mar","apr","maí","jún","júl","ágú","sep","okt","nóv","des"],long:["janúar","febrúar","mars","apríl","maí","júní","júlí","ágúst","september","október","nóvember","desember"]},f={uppercase:["AM","PM"],lowercase:["am","pm"],long:["a.m.","p.m."]},m={ordinalNumber:u,weekday:(0,o.default)(i,"long"),weekdays:(0,s.default)(i,"long"),month:(0,o.default)(l,"long"),months:(0,s.default)(l,"long"),timeOfDay:(0,o.default)(f,"long",function(e){return e/12>=1?1:0}),timesOfDay:(0,s.default)(f,"long")};t.default=m,e.exports=t.default},770:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(192),r=a(u),o=n(194),d=a(o),s=n(193),i=a(s),l=n(195),f=a(l),m=/^(\d+)(th|st|nd|rd)?/i,c={narrow:/^(su|mo|tu|we|th|fr|sa)/i,short:/^(sun|mon|tue|wed|thu|fri|sat)/i,long:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},h={any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},y={short:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,long:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},p={any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},b={short:/^(am|pm)/i,long:/^([ap]\.?\s?m\.?)/i},g={any:[/^a/i,/^p/i]},M={ordinalNumbers:(0,i.default)(m),ordinalNumber:f.default,weekdays:(0,r.default)(c,"long"),weekday:(0,d.default)(h,"any"),months:(0,r.default)(y,"long"),month:(0,d.default)(p,"any"),timesOfDay:(0,r.default)(b,"long"),timeOfDay:(0,d.default)(g,"any")};t.default=M,e.exports=t.default},880:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(766),r=a(u),o=n(767),d=a(o),s=n(768),i=a(s),l=n(769),f=a(l),m=n(770),c=a(m),h={formatDistance:r.default,formatLong:d.default,formatRelative:i.default,localize:f.default,match:c.default,options:{weekStartsOn:1,firstWeekContainsDate:4}};t.default=h,e.exports=t.default}});
//# sourceMappingURL=bfa858f1dea9b3aa9c02.js.map
