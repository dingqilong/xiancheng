
import HeaderComponent from './Main/HeaderComponent'
import ContentComponent from './Main/ContentComponent'
import FooterComponent from './FooterComponent/FooterComponent'

class MainComponent extends React.Component{
	render(){
		return(
			<div className="main-box">
				<HeaderComponent/>
				<ContentComponent/>
				<FooterComponent active={this.props.route.path}/>
			</div>
		)
	}
	
}

export default MainComponent