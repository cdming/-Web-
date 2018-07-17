/*
    在页面加载时自动执行：
    对Truck进行实例化操作，并为其分配一个DataStore实例
 */
(function (window) {
    'use strict';
    var App = window.App || {};
    var Truck = App.Truck;
    var DataStore = App.DataStore;

    var myTruck = new Truck('forfly', new DataStore());

    // 由于变量是在mian的函数内部声明的，而函数的外部（甚至控制台）都无法访问函数内部的变量
    // 所以为了便于交互 在main中将Truck暴露到全局命名空间中 即window
    window.myTruck = myTruck;

})(window);