/*
    在页面加载时自动执行：
    对Truck进行实例化操作，并为其分配一个DataStore实例
 */
(function (window) {
    'use strict';
    var FORM_SELECTOR = '[data-coffee-order="form"]';
    var CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';
    var App = window.App;
    var Truck = App.Truck;
    var DataStore = App.DataStore;
    var FormHandler = App.FormHandler;
    var CheckList =App.CheckList;
    var checkList = new CheckList(CHECKLIST_SELECTOR);
    checkList.addClickHanler(myTruck.deliverOrder.bind(myTruck));
    var myTruck = new Truck('forfly', new DataStore());

    // 由于变量是在mian的函数内部声明的，而函数的外部（甚至控制台）都无法访问函数内部的变量
    // 所以为了便于交互 在main中将Truck暴露到全局命名空间中 即window
    window.myTruck = myTruck;
    // 使用FORM_SELECTOR作为构造函数的参数调用FormHandler构造函数，
    // 这样可以确保FormHandler实例与选择器选出的DOM元素绑定在一起
    var formHandler = new FormHandler(FORM_SELECTOR);
    // 下一行是修改前的代码
    // formHandler.addSubmitHandler();
    // createOrder在事件处理回调中被调用时，它的所有者会发生变化
    // 此时createOrder内部的this将不在是Trunk实例
    // 应该把myTruck.createOrder的所有者绑定为myTruck，然后再把这个函数传递给FormHandler.addSubmitHandler
    // formHandler.addSubmitHandler(myTruck.createOrder.bind(myTruck));
    formHandler.addSubmitHandler(function (data) {
        myTruck.createOrder(data);
        checkList.addRow(data);
    });
    console.log(formHandler);
    



})(window);