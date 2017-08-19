
import NavTabComponent from './NavTabComponent'

class NavComponent extends React.Component {
	
	constructor(props,context){
		super(props,context)
		this.state={
			tabs:[
				{text:'精选',href:'#/main',icon:'jingtiaoxixuan',isActive:true},
				{text:'探店',href:'#/find',icon:'leimupinleifenleileibie',isActive:false},
				{text:'发现',href:'#/main',icon:'fenlei',isActive:false},
				{text:'我',href:'#/main',icon:'wode',isActive:false}
			]
		}
		
	}
	
	changeActive(icon){
		this.state.tabs.forEach((tab,i)=>{
			if(tab.icon==icon){
				tab.isActive=true;
			}else{
				tab.isActive=false;
			}
		})
		this.setState({
			tabs:this.state.tabs
		})
	}
	
	putNavTabs(){
		var arr=[];
		this.state.tabs.forEach((tab,i)=>{
			arr.push(<NavTabComponent changeActive={this.changeActive.bind(this)} info={tab} />)
		})
		return arr
	}
	
	render(){
		return (    
            <nav className="bar bar-tab nav">
                {this.putNavTabs()}
            </nav>

		)
			
	}
	
}

export default NavComponent