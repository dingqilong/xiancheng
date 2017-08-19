

class NavTabComponent extends React.Component {
	
	getClassName(){
		return this.props.info.isActive?"tab-item external active":"tab-item external"
	}
	
	changeActive(icon){
		this.props.changeActive(icon)
	}
	
	render(){
		
		const {href,icon,text}=this.props.info
		return (              
            <a onClick={this.changeActive.bind(this,icon)} className={this.getClassName()} href={href}>
                <span className={"icon iconfont icon-"+icon}></span>
                <span className="tab-label">{text}</span>
            </a>
		)
			
	}	
}

export default NavTabComponent