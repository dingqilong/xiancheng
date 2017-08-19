
import dispatcher from "./dispatcher"

var actions = {
	changeData:function(message){
		var action={
			message:message,
			type:'CHANGE'
		}
		dispatcher.dispatch(action)
	},
	changeId:function(id){
		var action={
			id:id,
			type:'CHANGE_ID'
		}
		dispatcher.dispatch(action)
	}
}


export default actions