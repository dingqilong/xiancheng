class FooterComponent extends React.Component {
	constructor(props,context){
		super(props,context)
		//console.log(this.props.active)
	}
	
	getActiveClass(type){
		var active=this.props.active==undefined?'main':this.props.active
		return active==type?'active':""
	}
	
	render(){
		return (
			<footer>
				<a href="#/main" className={this.getActiveClass('main')}>
					<span className="iconfont icon-jingtiaoxixuan"></span>
					<span>精选</span>
				</a>
				<a href="#/find" className={this.getActiveClass('find')}>
					<span className="iconfont icon-leimupinleifenleileibie"></span>
					<span>探店</span>
				</a>
				<a to="order" className={this.getActiveClass('order')}>
					<span className="iconfont icon-fenlei"></span>
					<span>发现</span>
				</a>
				<a to="mine" className={this.getActiveClass('mine')}>
					<span className="iconfont icon-wode"></span>
					<span>我</span>
				</a>
			</footer>
		)
	}
}
export default FooterComponent