(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}(g.ReactIntlLocaleData || (g.ReactIntlLocaleData = {})).br = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports=[{locale:"br",pluralRuleFunction:function(e,t){var r=String(e).split("."),a=Number(r[0])==e,i=a&&r[0].slice(-1),l=a&&r[0].slice(-2),o=a&&r[0].slice(-6);return t?"other":1==i&&11!=l&&71!=l&&91!=l?"one":2==i&&12!=l&&72!=l&&92!=l?"two":(3==i||4==i||9==i)&&(10>l||l>19)&&(70>l||l>79)&&(90>l||l>99)?"few":0!=e&&a&&0==o?"many":"other"},fields:{year:{displayName:"bloaz",relative:{0:"this year",1:"next year","-1":"warlene"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"miz",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"deiz",relative:{0:"hiziv",1:"warcʼhoazh","-1":"decʼh","-2":"dercʼhent-decʼh"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"eur",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"munut",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"eilenn",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}},{locale:"br-FR",parentLocale:"br"}];
},{}]},{},[1])(1)
});