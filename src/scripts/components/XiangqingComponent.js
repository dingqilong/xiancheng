
import store from "../flux/store"
import actions from "../flux/actions"

class XiangqingComponent extends React.Component {
	
	
	
	constructor(props,context){
		super(props,context)
		this.state = {
			data:store.getdata(),
			id:store.getId(),
		}
		this.myScroll=null
	}
	
	componentWillMount(){
		console.log("xiangqing")
		
	}
	
	putDom(){
		let data = JSON.parse(this.state.data).contents
		console.log(data)
		let data1=null
		let len = data.length
		let arr = []
		for(var i = 0; i < len; i ++){
			if(data[i].id == this.state.id){
				console.log(1)
				data1 = data[i].contents[0]
				console.log(data1)
				
			}
		}
		
		arr.push(<div className="box-fu"><header>
					<a href="#main"><i className="iconfont icon-jikediancanicon13"></i></a>
					<h2>{data1.title}</h2>
					<a href="#main"><i className="iconfont icon-zhuye"></i></a>
				</header>
				<div id="content">
				<div id="scroller">
				<img className="firstImage" src={data1.list_image}/>
				<section className="xiangqing">
					<p className="headline">{data1.title}</p>					
					<p className="date"><span><span>{data1.publish_date}</span><span>{data1.author_account.nickname}</span></span><span>{data1.view_count}浏览</span></p>
					<p className="intro">{data1.intro}</p>
					<p className="shop_name">{data1.sub_title}</p>
					<p className="address">{data1.pois[0].address}</p>
					<div className="jump-app">打开鲜城查看更多评论</div>
					<div className="henggang"><p>鲜城生活家</p></div>
					<img className="person-image" src={data1.author_account.image}/>
					<p className="person-name">{data1.author_account.nickname}</p>
					<p className="person-introduce">{data1.author_account.intro}</p>
				</section>
					<div className="interval"></div>
					<p className="shop_name1">{data1.pois[0].name}</p>
					<p className="address1">{data1.pois[0].address}</p>
					<div className="interval"></div>
				</div></div>
				</div>
				)
		return arr
	}
	
	render(){
		return (
			<div className="xiangqing-box">
				{this.putDom()}
			</div>
		)
	}
	
	componentDidMount(){
		let that = this
		this.myScroll = new iScroll("content",{
	
			snapThreshold:15,
			bounce:false,
			/*//开始滚动，打开计时器，计算已滚动的值，当超过200时，
			onScrollStart:function(){					
				var that=this;
				timer=setInterval(function(){						
					if(that.y<-200){
						$(".top").removeClass('hide')
					}else{
						$(".top").addClass('hide')
					}
				},30)
			},
			onScrollEnd:function(){
				clearInterval(timer)
			}*/
		});
	}
}

 export default XiangqingComponent