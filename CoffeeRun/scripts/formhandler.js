/**
 * 该模块会阻止浏览器向服务器发送表单数据
 * 而是在用户点击提交后 从表单中读取值 然后使用createOrder方法将数据发送到Truck实例
 */

 (function (window) {
     'use strict';
     var App = window.App || {};
    //  导入jQuery时。它创建了一个名为jQuery的函数，以及一个指向该函数的名为$的变量
    // 为了一致性，应该在导入window.jQuery的时候将其分配给本地变量$
     var $ = window.jquery;
     function FormHandler(selector) {
         if (!selector) {
            //  Error 是一种内置类型 可明确表示代码中出现了意外的值或条件
             throw new Error("No selector provided.");
         }
        //  带$前缀的变量是通过jQuery选择出来的元素 虽然使用jQuery时不是必须要使用这个
         this.$formElement =$ (selector);
         if (this.$formElement.length === 0) {
             throw new Error ('Could Not find element with selector:'+ selector);
         }
     }
    //  添加提交处理程序
    // 每当表单的submit事件在浏览器中被触发时，submit事件处理程序回调就会被执行
    // 此时希望调用fn函数
     FormHandler.prototype.addSubmitHandler = function (fn) {
         console.log('Setting submit handler for form');
        //  用到jQuery的on方法
        // on方法接受一个事件名称，并在事件被触发时执行回调
        // 回调函数应该接受该事件的事件对象
        this.$formElement.on('submit',function (event) {
            event.preventDefault();

            // 提取数据
            // 使用serializeArray 需要使用jQuery包装表单
            // 调用$(this)会返回一个包装对象 这个包装对象可以使用serializeArray方法
            // serializeArray 以对象数组的形式返回表单数据
            // var data = $(this).serializeArray();
            var data = {};
            // 遍历数组 并复制每个元素的值
            $(this).serializeArray().forEach(function (item) {
                data[item.name] = item.value;
                console.log(item.name + 'is'+item.value);
                
            });
            console.log(data);
            // 在formhandler.js的提交处理程序回调中调用fn 并把包含用户输入的数据对象传递给fn
            fn(data);
            this.reset();
            // 通过elements属性轻松获得各个表单字段，elements是表单字段数组，可以从0开始索引并引用。
            this.elemetns[0].focus();
        });
         
     };

     App.FormHandler = FormHandler;
     window.App = App;
 })(window);