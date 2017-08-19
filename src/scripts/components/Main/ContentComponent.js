import ThirdSwiperComponent from "./ThirdSwiperComponent"
import SecondSwiperComponent from "./SecondSwiperComponent"
import FirstSwiperComponent from "./FirstSwiperComponent"
import json from 'jsonp'
class ContentComponent extends React.Component{
	
	constructor(props,context){
		super(props,context)
		this.myScroll=null;
	}
	
	render(){
		return(
			<div id="content" onresize="alert('You have changed the size of the window')">
				<div id="scroller">
					<FirstSwiperComponent/>	
					<div className="interval"></div>
					<SecondSwiperComponent/>	
					<div className="interval"></div>
					<ThirdSwiperComponent/>
				</div>
			</div>
		)
	}
		
	componentDidMount(){
		let that = this
		//console.log("gun")
		this.myScroll = new iScroll("content",{
	
				snapThreshold:15,
				
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
		setInterval(function(){
			that.myScroll.refresh()
		},1000)
	}
	componentDidUpdate(){
		
		//this.myScroll.refresh()
		
		
	}
	
	
}

export default ContentComponent