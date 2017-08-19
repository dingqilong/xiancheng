var EventEmitter = require("events").EventEmitter

var assign = require("object-assign")

const store = assign({},EventEmitter.prototype,{
	data:null,
	id:null,
	getdata:function(){
		return this.data
	},
	getId:function(){
		return this.id
	},
	
	changeData:function(message){
		this.data=message;
		this.emit("store-change")
	},
	changeId:function(id){
		this.id=id;
	},
	
	addChangeListener:function(callback){
		this.on("store-change",callback)
	}
})

export default store

//store是用来管理状态的，状态就是数据，用store来管理的状态可以在任意一个组件里得到，也可以在任意一个组件里进行更改。更改之后，所有使用该状态的组件都会进行更新，数据共享

/*var EventEmitter = require("events").EventEmitter

var assign = require("object-assign")

const store =assign({},EventEmitter.prototype,{
	count:1,
	todos:[
		{id:1,title:'下班回家买菜',isFinished:false}
	],
	getAll:function(){
		return this.todos
	},
	addNew:function(title){
		console.log('8.store的方法被调用之后更改自己身上挂载的状态')
		this.count++;
		this.todos.push({
			id:this.count,
			title:title,
			isFinished:false
		})		
		console.log(this.todos)
		console.log('9.store更改完成状态后去触发了自己的一个事件')
		this.emit("store-change")
	},
	finishTodo:function(id){
		this.todos.forEach((todo,i)=>{
			if(todo.id==id){
				todo.isFinished=!todo.isFinished
			}
		})
		
		this.emit("store-change")
	},
	removeTodo:function(id){
		for(var i =0;i<this.todos.length;i++){
			if(this.todos[i].id==id){
				this.todos.splice(i,1);
				break;
			}
		}
		this.emit("store-change")
	},
	addChangeListener:function(callback){
		this.on("store-change",callback)
	}
})

export default store*/