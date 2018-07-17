(function (window) {
    'use strict';
    // 如果window上存在App属性，那么就将其赋值给本地App
    // 否则就引用一个用{}表示的空对象  || 表示或运算
    var App = window.App || {};
    //  声明一个DataStore函数  构造函数
    function DataStore(){
        // console.log('running the DataStore function');
        this.data = {};
    }
    // 为DataStore,prototype添加add属性 并赋值为一个函数
    // 构造函数的原型 
    DataStore.prototype.add = function (key,val) {
        this.data[key] = val; 
    };
    // 为构造函数添加get方法
    DataStore.prototype.get = function(key){
        return this.data[key];
    };
    DataStore.prototype.getAll = function(){
        return this.data;
    };
    DataStore.prototype.remove = function(key){
        delete this.data[key];
    };
    // 将DataStore函数绑定到App对象上 
    App.DataStore = DataStore;
    // 将新修改的App对象赋值到全局的App属性上
    window.App = App;
})(window);