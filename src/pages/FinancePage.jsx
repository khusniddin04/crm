import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';


var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class App extends Component {	
	render() {

		const options = {
			animationEnabled: true,
			theme: "light1",
			title:{
				text: "Stock Price of IT PARK - January 2024"
			},
			axisX:{
				valueFormatString: "DD MMM",
				crosshair: {
					enabled: true,
					snapToDataPoint: true
				}
			},
			axisY: {
				title: "Closing Price (in UZS)",
				valueFormatString: "UZS ##0.00",
				xValueFormatString: "MMM YYYY",
				crosshair: {
					enabled: true,
					snapToDataPoint: true,
					labelFormatter: function(e) {
						return   CanvasJS.formatNumber(e.value, "##0.00") + "UZS";
					}
				}
			},
			data: [{
				type: "area",
				xValueFormatString: "DD MMM",
				yValueFormatString: "##0.00",
				dataPoints: [
				
				    { x: new Date(2024, 1, 1), y: 10 },
					{ x: new Date(2024, 2, 1), y: 144 },
					{ x: new Date(2024, 3, 1), y: 103 },
					{ x: new Date(2024, 4, 1), y: 93 },
					{ x: new Date(2024, 5, 1), y: 129 },
					{ x: new Date(2024, 6, 1), y: 143 },
					{ x: new Date(2024, 7, 1), y: 156 },
					{ x: new Date(2024, 8, 1), y: 122 },
					{ x: new Date(2024, 9, 1), y: 106 },
					{ x: new Date(2024, 10, 1), y: 137 },
					{ x: new Date(2024, 11, 1), y: 142 },
					{ x: new Date(2024, 12, 1), y: 142 }
				  
				]
			}]
		}
		
		return (
		<div>
			<CanvasJSChart options = {options} 
			/>
		</div>
		);
	}


}
 
export default App;                                 