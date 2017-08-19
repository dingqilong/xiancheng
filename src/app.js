require('./styles/app.scss')
require('./styles/main.scss')
require('./styles/find.scss')
require('./styles/xiangqing.scss')
//想要打包react的时候引入
//var React = require('react')
//var ReactDOM = require('react-dom')

//引入react路由
import {Router,Route,hashHistory,IndexRedirect,IndexRoute} from 'react-router'

import RootComponent from "./scripts/components/RootComponent"
import MainComponent from './scripts/components/MainComponent'
import FindComponent from './scripts/components/FindComponent'
import XiangqingComponent from './scripts/components/XiangqingComponent'


//ReactDOM.render(<RootComponent/>,document.getElementById('root'))


//配置路由
ReactDOM.render(
	
	<Router history={hashHistory}>
		<Route path="/" component={RootComponent}>
			<IndexRoute component={MainComponent} />
			<Route path="main" component={MainComponent}></Route>
			<Route path="find" component={FindComponent}></Route>
			<Route path="xiangqing" component={XiangqingComponent}></Route>			
			<Route path="*" component={MainComponent}></Route>
		</Route>
	</Router>
	
	,document.getElementById('root'))
