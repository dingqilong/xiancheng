
import json from 'jsonp'

class FirstSwiperComponent extends React.Component{
	
	constructor(props,context){
		super(props,context)
		
		this.state={
			data:null,	
			arr:null
		}
		
		this.mySwiper=null;
		
	}
//	http://api.51xiancheng.com/Ads/advertise/get_app_ads?jsoncallback=jQuery1111024890149049312194_1500520641479&source=advertise&site_id=901&platform=1&ads_poi_id=24%2C25%2C26%2C27%2C28&_=1500520641480
	componentWillMount(){
		let that = this
		json('http://api.51xiancheng.com/Ads/advertise/get_app_ads?jsoncallback=jQuery111106699068227010316_1500352227915&source=advertise&site_id=930&platform=1&ads_poi_id=24%2C25%2C26%2C27%2C28&_=1500352227916',{
			param:'jsoncallback',
			prefix:'jQuery111106699068227010316_1500352227915'			
		},(err,data)=>{
			if(err){
				console.log(err)
			}else{
				that.state.data=data.data	
				that.putSlides()
			}
			
		})
		
	}
	
	putSlides(){	
		let arr1 = []
		if(this.state.data){
			this.state.data.forEach((item,i)=>{
				arr1.push(<div className="swiper-slide"><img src={item.app_content.image}/></div>)
			
			})
			this.setState({arr:arr1})
		}
		
	}
	
	
	render(){
		return(
			<div className="swiper-container top1">
				<div className="swiper-wrapper">
		   			{this.state.arr}
				</div>
				<div className="swiper-pagination"></div>
			</div>
		)
	}
	componentDidMount(){
	//swiper为啥不能加在这儿？？？？？？？？	
	//swiper放这会导致bug
	//this.state.arr是动态创建的虚拟ＤＯＭ
	this.setState({arr:null})//为了测试多次更新状态是否会多次实例化
	//防止componentDidUpdate不执行的情况发生
	    if(this.state.arr){
			this.mySwiper = new Swiper('.top1', {
		        pagination: '.swiper-pagination',
		        slidesPerView: 1,
		        slidesPerColumn: 1,
		        paginationClickable: true,
		        loop:true,
		        autoplay : 3000,
				speed:1000
		    });
		}
	}
	componentDidUpdate(){
		//判断是否实例化过，如果有则不再实例化
		//判断this.state.arr也就是轮播DOM是否存在，如果存在实例化，以下可以避免多次实例化
		if(!this.mySwiper){
			if(this.state.arr){
				console.log("swiper实例化（首个轮播图）")
				console.log("")
				this.mySwiper = new Swiper('.top1', {
			        pagination: '.swiper-pagination',
			        slidesPerView: 1,
			        slidesPerColumn: 1,
			        paginationClickable: true,
			        loop:true,
			        autoplay : 3000,
					speed:1000
			    });
			}
		}
		
		//this.mySwiper.update()
	}
}

export default FirstSwiperComponent