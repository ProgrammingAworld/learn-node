import React from 'react';
import ReactHighcharts from 'react-highcharts';
import {ws} from '../../../lib/main.js';

export default class extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			datas: []
		}
	}

	componentDidMount() {
		let {taskId, itemId, searchKeyword, executeDate} = this.props.location.query,
			_this = this;
		if(taskId && itemId && searchKeyword && executeDate) {
			ws.get({
				url: '/api/task/report',
				data: {
					taskId,
					itemId,
					searchKeyword,
					executeDate
				}
			}).then(function(response) {
				if(response.code === 0) {
					_this.setState({
						datas: response.data
					});
				} else {
					alert(response.msg);
				}
			});
		}
	}

	render() {
		let {taskId, itemId, searchKeyword, executeDate} = this.props.location.query,
			datas = this.state.datas,
			data = datas && datas.length > 0 ? datas[0].executionReport : [],
			successData = data.map(item => item.successMin),
			timeoutData = data.map(item => item.timeOutMin),
			accountInvalidData = data.map(item => item.accountInvalidMin),
			totalData = data.map(item => item.totalMin),
			startMinData = data.map(item => item.startMin.substring(11, 16));
		let config = {
			chart: {
				type: "line"
			},
			title: {
				text: '任务:' + taskId + '\nApp:' + itemId + '\n关键词:' + searchKeyword + '\n' + executeDate + '详细执行情况'
			},
			xAxis: {
				categories: startMinData
			},
			yAxis: {
				title: "任务数（个）"
			},
			legend: {
				layout: "vertical",
				align: "right",
				verticalAlign: "middle"
			},
			plotOptions: {
	        line: {
	            dataLabels: {
	                enabled: true,
	                color: 'black'
	            },
	            enableMouseTracking: false
	        }
	    },
			series: [{
				name: "成功",
				data: successData
			}, {
				name: "超时",
				data: timeoutData
			}, {
				name: "账号失效",
				data: accountInvalidData
			}, {
				name: "总数",
				data: totalData
			}]
		};
		return (
			<ReactHighcharts config={config}/>
		)
	}
}
