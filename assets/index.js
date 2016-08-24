'use strict';

define([
    'jquery',
    'sourceModules/module',
], function ($, module) {

    
    function Ngdirective() {
        this.init();
    }

    Ngdirective.prototype = module.createInstance();
    Ngdirective.prototype.constructor = Ngdirective;

    Ngdirective.prototype.init = function () {

        var ENABLE_CLASS_NAME = 'source_slider_frame__on';

        var ENABLE_MUSLIM_OPT_TEMPLATE = ''+
        '<div class="source_main_nav_ac_item">'+
        '    <div class="source_main_nav_ac_tx">Enable arabic</div>'+
        '    <div class="source_slider_frame">'+
        '        <span class="source_slider_button">'+
        '            <span class="source_slider_text source_slider_text_on">ON</span>'+
        '            <span class="source_slider_text source_slider_text_off">OFF</span>'+
        '        </span>'+
        '    </div>'+
        '</div>';

        var muslimOptElem = $(ENABLE_MUSLIM_OPT_TEMPLATE);
        var bodyElem = $(document.body);
        var muslimOptButtonElem = muslimOptElem.find('.source_slider_frame');

        muslimOptButtonElem.on('click', function(){
            var isEnabled = muslimOptButtonElem.hasClass(ENABLE_CLASS_NAME);
            if(isEnabled){
                muslimOptButtonElem.removeClass(ENABLE_CLASS_NAME);
                bodyElem.attr('dir', 'ltr');
            }else{
                muslimOptButtonElem.addClass(ENABLE_CLASS_NAME);
                bodyElem.attr('dir', 'rtl');
            }
        });

        $(document).ready(function(){
            $('.source_main_nav_ac').append(muslimOptElem);
        });
    };
    return new Ngdirective();
});