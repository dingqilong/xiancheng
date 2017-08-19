//dispatcher专门接受actionCreate传递过来action，然后去调用store的方法（更改数据）

import store from './store'
var Dispatcher = require('flux').Dispatcher


const dispatcher = new Dispatcher()

//会在actionCreate传入action的时候触发
dispatcher.register((action)=>{
	//console.log('6.dispacther的register函数被触发，它会根据传入的action进行判断')
	switch(action.type){
		/*case 'ADD_NEW':
		console.log('7.dispatcher判断完毕之后，调用store更改数据的方法')
			store.addNew(action.title)
			break;
		case 'FINISH_TODO':
			store.finishTodo(action.id)
			break;
		case 'REMOVE_TODO':
			store.removeTodo(action.id)
			break;*/
		case 'CHANGE':
			store.changeData(action.message)
			break;
		case 'CHANGE_ID':
			store.changeId(action.id)
			break;
	}
})

export default dispatcher