class SecondSwiperComponent extends React.Component{
	
	constructor(props,context){
		super(props,context)
		
		this.state={
			data:null
		}
		
		this.mySwiper=null;
		
	}	
	render(){
		return(
			<section className="hot-sale">
				<div className="headline">
					<h2>今日热卖</h2>
					<p>更多优惠用力戳</p>
				</div>
				
				<div className="swiper-container top2">
					<div className="swiper-wrapper">
			   			<div className="swiper-slide">
			   				<img src="./img/top21.jpg"/>
			   				<div className="product">
			   					<p>鲜城热卖 | 「夏日冰凉水果小炸弹」 闲记·水果杯（3种口味）</p>
			   					<div>
			   						<span>￥53</span><span>购买</span>
			   					</div>
			   				</div>
						</div>
			   			<div className="swiper-slide">
			   				<img src="./img/top22.jpg"/>
			   				<div className="product">
			   					<p>鲜城热卖 | 「夏日冰凉水果小炸弹」 闲记·水果杯（3种口味）</p>
			   					<div>
			   						<span>￥53</span><span>购买</span>
			   					</div>
			   				</div>
						</div>
			   			<div className="swiper-slide">
			   				<img src="./img/top23.jpg"/>
			   				<div className="product">
			   					<p>鲜城热卖 | 「夏日冰凉水果小炸弹」 闲记·水果杯（3种口味）</p>
			   					<div>
			   						<span>￥53</span><span>购买</span>
			   					</div>
			   				</div>
						</div>
			   		</div>
				</div>
			</section>
		)
	}
	componentDidMount(){
		var myswiper = new Swiper('.top2', {
	        slidesPerView: 'auto',
	        paginationClickable: true,
	        loop:true
	    });
	}
}

export default SecondSwiperComponent