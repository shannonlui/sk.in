'use strict';

var React = require('react');
var TitleBar = require('./TitleBar');
var {
	LineChart,
}=require('react-native-chart-android/index.android');
var {
  StyleSheet,
  View,
  Text
} = require('react-native');

var Component  = React.createClass({
  getLineData: function(arg){
    var data = {
      xValues:['Aug-2016','Sept-2016','Oct-2016','Nov-2016'];
      yValues:[
        {
        data:[0,2,4,5],
        lanel:'Time1',
        config:{
          color:'red'
        }
      },
      {
        data:[2,3,4,5];
        label:'Time2',
        config:{
          color:'yellow'
        }
      }
    ]
  };
  return data
},
getRandomData: function(argument){
  var data = {};
  data['xValues']=[];
  data['yValues'] = [
    {
      data:[],
      label:'Time1',
      config:{
        color:'red'
      }
    }
  ];
  for (var i=0; i< 500; i++){
    data.xValues.push(i+'');
    data.yValues[0].data.push(Math.random()*100);
  };
  return data;
},
  /* Render Function */
  render: function(){
    return (
      <View style={styles.container}>
				<View style={styles.chartContainer}>
					<LineChart style={{flex:1}} data={this.getLineData()}/>
          <LineChart
            style={{flex:1}}
            data:{this.getRandomData()}
            visibleXRange={[0,10]}
            maxVisibleValueCount={5}
        xAxis={{drawGridLines:false,gridLineWidth:1,position:"BOTTOM"}}
        yAxisRight={{enable:false}}
        yAxis={{startAtZero:false,drawGridLines:false,position:"INSIDE_CHART"}}
        drawGridBackground={false}
        legend={{enable:true,position:"ABOVE_CHART_LEFT",direction:"LEFT_TO_RIGHT"}}
        />
				</View>
			</View>
    );
  }
  }
});

var styles = StyleSheet.create({
  container:{
		flex:1
	},
	chartContainer:{
		flex:1
	},
	chart:{
		flex:1
	}
});
module.exports = Component;
