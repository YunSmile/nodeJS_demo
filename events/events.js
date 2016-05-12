var EventEmitter = require('events').EventEmitter

var life = new EventEmitter()
life.setMaxListeners(11)//设置同一事件的最大监听数量

life.on('testEvent',function (who) {//同一个事件增加on监听默认最大是10个事件
	 /* body... */ 
	 console.log('给'+who+"倒水");
})

life.emit("testEvent","汉子");