

class RootComponent extends React.Component {
	render(){
		return (
			<div className="root">				
				{this.props.children}								
			</div>
		)
	}
}

 export default RootComponent