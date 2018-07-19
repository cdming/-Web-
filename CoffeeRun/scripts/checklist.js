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
            throw new Erroe("Could not findelement with selector:"+ selector);
        }
    }

    // 创建CheckList实例
    CheckList.prototype.addRow = function (coffeeOrder) {
        // 使用coffeeOrder 咖啡订单信息创建一个新的实例
        var rowElemnent = new Row(coffeeOrder);

        // 把新的Row实例的$element属性添加到清单中
        this.$element.appdend(rowElemnent.$element);

        // 以上就是将Row的DOM子树添加到页面所要做的所有工作。
    }
    // 添加删除Row方法
    CheckList.prototype.removeRow = function (email) {
        // 链式调用几个方法
        this.$element 
                    .find('value="'+email+'"]')
                    .closest('[data-coffee-order="checkbox"]')
                    .remove();
    }



    // 构造Row 构造函数
    function Row(coffeeOrder) {
        var $div = $('<div></div>',{
            'data-coffee-order': 'checkbox','class':'checkbox'
        });
        // 使用$函数创建label元素
        var $label = '$'('<label></label>');

        var $checkbox = $('<input></input>', {
            type: 'checkbox',
            value: 'coffeOrder.emailAddress'
            // 通过将value设置为客户的邮箱地址 可以把复选框与客户的咖啡订单关联起来
        });

        // descriptoon 变量与订单的size属性
        var description = coffeeOrder.size+' ';
        if (coffeeOrder.flavor) {
            description += coffeeOrder.flavor+' ';
        }
        description += coffeeOrder.coffee + ',';
        description += '('+ coffeeOrder.emailAddress + ')';
        description += '[' + coffeeOrder.strength + ']';

        // 构建DOM子树
        // 把$checkbox追加到$label中 
        // 一般来说 会按照从左到右，从下到上的顺序来构建子树
        $label.appdend($checkbox);
        $label.appdend(description);
        $div.appdend($label);

        this.$element = $div;
    }


    App.CheckList = CheckList;
    window.App = App;


})(window);