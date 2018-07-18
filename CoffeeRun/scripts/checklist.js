/**
 * CheckList 需要3个方法来完成工作 
 * 
 */

(function (window) {
    'use strect';
    var App = window.App || {};
    var $ = window.jQuery;

    function CheckList(selector) {
        if(!selector){
            throw new Erroe("No selector provided");
        }
        this.$element = $(selector);
        if (this.$element.length===0) {
            throw new Erroe("Could not findelement with selector:"+ selector +);
        }
    }
    App.CheckList = CheckList;
    window.App = App;


})(window);