import json from 'jsonp'

class ContentComponent extends React.Component {
	
	constructor(props,context){
		super(props,context)
		this.state={
			data:null,
			arr:null
		}
		this.myScroll=null;
	}
	
	componentWillMount(){
		let that = this
			//获取的是本地JSON文件，数据偷不到，直接复制的...
			console.log(1)
		$.ajax({
			url:'./lib/json/find.json',
			dataType:'json',
			success:function(data){
				that.putHtml(data.data)
			}
		})
	}
	
	putHtml(data){
		console.log(data)
		let arr1 = []
		
		data.forEach((item,i)=>{
			let arr2 = []
			item.images.forEach((img,j)=>{
				arr2.push(<img src={img.url}/>)
			})
			arr1.push(<section className="food">
			<div className="person">
				<img src={item.account.image}/>
				<div className="person_name">
					<p>{item.account.nickname}</p>
					<p>{item.create_date}</p>
				</div>
			</div>
			<p className="intro">{item.content?item.content:"分享图片"}</p>
			<div className="img">
				{arr2}
			</div>
			<div className="address">
				<p>
					<i className="iconfont icon-didian"></i>
					<span>{item.poi.name}</span>
				</p>
				<p>
					<i className="iconfont icon-iconfontzhizuobiaozhun44"></i>
					<span>50</span>
				</p>
			</div>
		</section>)
		})
		this.setState({data:data,arr:arr1})
	}
	
	
	
	changeClassify1(){
		console.log(1)
	}
	changeClassify2(){
		console.log(2)
	}
	
	render(){
		return (
			<div className="content">
				<div className="classify">
					<div onClick={this.changeClassify1} className="new">最新</div>
					<div onClick={this.changeClassify2} className="fire">热门</div>
					
				</div>
				<div id="gun" onresize="alert('You have changed the size of the window')">
					<div id="scroller">
						{this.state.arr}
					</div>
				</div>
				
			</div>
		)
	}
	
	componentDidMount(){
		let that=this
		this.myScroll = new iScroll("gun",{
	
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
		/*setInterval(function(){
			that.myScroll.refresh()
		},1000)*/
	}
	
	componentDidUpdate(){
		this.myScroll.refresh()
	}
}

 export default ContentComponent