'use strict';

define([
    'jquery',
    'sourceModules/module',
    "sourceModules/innerNavigation",
], function ($, module, innerNavigation) {

    function ArabicModule() {
        this.init();
    }

    ArabicModule.prototype = module.createInstance();
    ArabicModule.prototype.constructor = ArabicModule;

    ArabicModule.prototype.init = function () {

        var bodyElem, OPT_TEXT = 'Enable arabic';

        innerNavigation.addMenuItem(OPT_TEXT, enableArabic, disableArabic, '');
        bodyElem = $(document.body);
        
        function enableArabic(){
            bodyElem.attr('dir', 'rtl');
        }

        function disableArabic(){
            bodyElem.attr('dir', 'ltr');
        }
    };
    return new ArabicModule();
});