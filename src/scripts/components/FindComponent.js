import HeaderComponent from './Find/HeaderComponent'
import ContentComponent from './Find/ContentComponent'
import FooterComponent from './FooterComponent/FooterComponent'
class FindComponent extends React.Component {
	render(){
		return (
			<div className="find-box">
				<HeaderComponent/>
				<ContentComponent/>
				<FooterComponent active={this.props.route.path}/>
			</div>
		)
	}
}

 export default FindComponent
 
