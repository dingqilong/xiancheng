
class HeaderComponent extends React.Component{
	render(){
		return(
			<div className="mui-bar mui-bar-nav header">
				<div className="dizhi">
					北京
					<i className="iconfont icon-s"></i>
				</div>
				<div className="search">
					<i className="iconfont icon-fangdajing"></i>
					<input type="text" name="" value="搜索商家·商品"/>
				</div>
				<div className="fujin">
					附近
					<i className="iconfont icon-jiantou1"></i>
				</div>
			</div>
		)
	}
}

export default HeaderComponent