/* 
 * 拥有操作咖啡订单的功能
 */
(function (window) {
    'use strict';
    var App = window.App || {};
    // Truck是构造函数 为其添加参数
    function Truck(truckId,db) {
        this.truckId = truckId;
        this.db = db;
    }
    // 添加创建订单的方法
    // 使用db属性的add方法来存储订单信息
    Truck.prototype.createOrder = function (order) {
        console.log("Adding order for"+ order.emailAddress);
        this.db.add(order.emailAddress,order);
        
    };
    // 添加删除订单的方法
    Truck.prototype.deliverOrder = function (customerId) {
        console.log("Delivering Order for" + customerId);
        this.db.remove(customerId);
        
    };
    // 打印订单
    Truck.prototype.printOrders = function () {
        var customerIdArray = Object.keys(this.db.getAll());
        console.log('Truck #'+ this.truckId + 'has pending orders:');
        // forEach 回调函数 没有所有者 使用bind函数并传入Truck实例进行修复
        // 在回调函数外this指的是Truck实例 而在forEach内部的匿名函数后马上调用.bind(this)方法
        // 从而将修改过的匿名函数传递给forEach
        customerIdArray.forEach(function(id){
            console.log(this.db.get(id));
        }.bind(this));
        
    };


    App.Truck = Truck;
    window.App = App;

}) (window);