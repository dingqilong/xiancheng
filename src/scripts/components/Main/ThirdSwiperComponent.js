
import json from 'jsonp'
import store from "../../flux/store"
import actions from "../../flux/actions"

class ThirdSwiperComponent extends React.Component{
	
	constructor(props,context){
		super(props,context)
		
		this.state={
			data:store.getdata(),
			arr:null,
			head:null,
			list:null
		}
		
		this.mySwiper=null;
		
	}
//	
	componentWillUpData(){
		
	}
	componentWillMount(){
		let that = this
		store.addChangeListener(()=>{
			console.log('10.store的事件被触发，view会重新获取更改完成后的数据')
			let mx = JSON.parse(store.getdata())
			that.setState({data:mx})
			that.putSlides()
		})
		if(!this.state.data){
			
			json('http://api.51xiancheng.com/h5/index/feed?source=h5&site_id=930&p_type=1&p_id=72656&callback=jQuery11110730779377833471_1500378934961&_=1500378934964',{
				param:'callback',
				//prefix:'jQuery111106699068227010316_1500352227915'			
			},(err,data)=>{
				if(err){
					console.log(err)
				}else{				
//					that.state.data = data
//					console.log(data)
//					that.putSlides()
					actions.changeData(JSON.stringify(data))
					
				}
				
			})
			
			
			json('https://m.juanpi.com/index/getMenu?select=1_1',{
				param:'',
				//prefix:'jQuery111106699068227010316_1500352227915'			
			},(err,data)=>{
				if(err){
					console.log(err)
				}else{				

					console.log(data)

					
					
				}
				
			})
			
			$.ajax({
				url:'http://getdouban.duapp.com/getJson.php',
				data:{
					src:'https://m.juanpi.com/index/getMenu?select=1_1'
				},
				dataType:'jsonp',
				success:function(data){
					console.log(data);
					
				}
			})
		}else{
			this.state.data = JSON.parse(this.state.data)
			this.putSlides()
			//console.log(this.state.data)
		}
	}
	
	//对this.state.data进行处理，创建虚拟DOM
	putSlides(){	
		let data = null
		let len = this.state.data.contents.length
		
		for(var i = 0; i<len;i++ ){			
			if(String(this.state.data.contents[i].id).substr(0,1) == 1){
				data = this.state.data.contents[i]				
				break;
			}
			
		}
		if(data){
			let arr1 = []
			let arr3 = []
			//轮播图headline
			let arr2 = []
			arr2.push(<div className="headline"><h2><span>{data.contents[0].title}<i className="iconfont icon-jiantou1"></i></span></h2>
			<p>{data.contents[0].sub_title}</p></div>)
			
			if(this.state.data){
				//美食列表
				this.state.data.contents.forEach((item,i)=>{
					if(String(item.id).substr(0,1) == 7){
						arr3.push(<div className="list">
			<a href="#xiangqing" onClick={this.jumpToFind.bind(this,item.id)}><img src={item.contents[0].list_image}/></a>
			<div className="listMessage">
				<div className="listMessage-left">
					<p>{item.contents[0].title}</p>
					<p><i className="iconfont icon-didian"></i>{item.contents[0].sub_title}</p>
				</div>
				<img className="listMessage-right" src={item.contents[0].author_account.image}/>
			</div><div className="interval"></div>
		</div>)
					}
				})
				
				
				
				//轮播图图片及信息
				data.contents[0].articles.forEach((item,i)=>{

				
					arr1.push(<div className="swiper-slide"><img src={item.list_image}/><div className="message">
			<div>
				<p>{item.title}</p>
				<p><i className="iconfont icon-didian"></i>{item.sub_title}</p>
			</div>
			<img src={this.state.data.address_author[item.id].account.image}/>			
		</div></div>)
				})
				this.setState({arr:arr1,head:arr2,list:arr3})
				//console.log(this.state.arr)
			}
		}
		
		
	}
	
	//列表图片的点击事件
	jumpToFind(id){
		actions.changeId(id)
		console.log(id)
	}
	
	render(){
		return(
			<section className="zizhu">
				{this.state.head}
				<div className="swiper-container top3">
					<div className="swiper-wrapper">
			   			{this.state.arr}
					</div>
				</div>
				<div className="interval"></div>
				<div className="List">{this.state.list}</div>
			</section>
		)
	}
	componentDidMount(){
	//swiper为啥不能加在这儿？？？？？？？？	
	//swiper放这会导致bug
		//从别的页面跳回来后不会重新获取数据，即不更新状态，componentDidUpdate不执行，所以这里设置是为了跳回时轮播实例化。那么如果正常进入页面，页面初始化是否会两次实例化？不会，因为componentDidMount执行之时this.state.arr没有接受到异步获取的数据，为null，所以不执行
	   if(this.state.arr){
			console.log("第二次进入此页面,不需获取数据")
			this.mySwiper = new Swiper('.top3', {
		        slidesPerView: 'auto',
		        paginationClickable: true,
		        loop:true
		    });
		}
	}
	componentDidUpdate(){
		console.log("setState更新")
		if(this.state.arr){
			console.log("已动态创建虚拟DOM，第二次更新")
		}else{
			console.log("未动态创建虚拟DOM，第一次更新")
		}
		//触发两次，第一次是获取到数据，将之同步到store，然后从store返回接收更新一次(setState)，第二次是动态创建虚拟DOM，更新一次
		
		//判断是否实例化过，如果有则不再实例化
		//判断this.state.arr也就是轮播DOM是否存在，如果存在实例化，以下可以避免多次实例化
		if(!this.mySwiper){
			if(this.state.arr){
				console.log("DOM渲染完毕，进行轮播图实例化")
				this.mySwiper = new Swiper('.top3', {
			        slidesPerView: 'auto',
			        paginationClickable: true,
			        loop:true
			    });
			}
		}
		
		//this.mySwiper.update()
	}
}

export default ThirdSwiperComponent

			