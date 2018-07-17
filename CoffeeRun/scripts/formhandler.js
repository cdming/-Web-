/**
 * 该模块会阻止浏览器向服务器发送表单数据
 * 而是在用户点击提交后 从表单中读取值 然后使用createOrder方法将数据发送到Truck实例
 */

 (function (window) {
     'use strict';
     var App = window.App || {};
     var $ = window.jquery;
     function FormHandler() {
         //code 
     }
     App.FormHandler = FormHandler;
     window.App = App;
 })(window);