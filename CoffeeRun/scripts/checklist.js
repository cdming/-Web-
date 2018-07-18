/**
 * CheckList 需要3个方法来完成工作 
 * 1.负责创建一个清单项 包括了复选框和描述文本
 * 2.会从table中移除一项
 * 3.为单击事件添加一个监听器 从而让代码知道何时需要移除一项
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

    // 构造Row 构造函数
    function Row(coffeeOrder) {
        var $div = $('<div></div>',{
            'data-coffee-order': 'checkbox','class':'checkbox'
        });
    }


    App.CheckList = CheckList;
    window.App = App;


})(window);