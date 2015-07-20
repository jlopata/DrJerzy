/*These lines are all chart setup.  Pick and choose which chart features you want to utilize. */

function sinAndCos() {
  var rtvHits = [], agdHits = [] ;

  //Data is represented as an array of {x,y} pairs.
  for (var i = 1; i <= 30; i++) {
    rtvHits.push({x: 1025409600000 + i *100000000, y: Math.floor((Math.random() * 100) + 1)});
	agdHits.push({x: 1025409600000 + i *100000000, y: Math.floor((Math.random() * 100) + 1)});
  }

  //Line chart data should be sent as an array of series objects.
  return [
    {
      values: agdHits,      //values - represents the array of {x,y} data points
      key: 'Hits in AGD section', //key  - the name of the series.
      color: '#0f7f0e'  //color - optional: choose your own line color.
    },
	{
      values: rtvHits,      //values - represents the array of {x,y} data points
      key: 'Hits in RTV section', //key  - the name of the series.
      color: '#ff7f0e'  //color - optional: choose your own line color.
    },
 
  ];
}


nv.addGraph(function() {
  var chart = nv.models.multiBarChart()
                .margin({left: 100})  //Adjust chart margins to give the x-axis some breathing room.
                  //We want nice looking tooltips and a guideline!
                  //how fast do you want the lines to transition?
                .showLegend(true)       //Show the legend, allowing users to turn on/off line series.
                .showYAxis(true)        //Show the y-axis
                .showXAxis(true)        //Show the x-axis
  ;

   chart.xAxis
        .tickFormat(function(d) { 
          return d3.time.format('%x')(new Date(d)) 
    });

  chart.yAxis     //Chart y-axis settings
      .axisLabel('Hits per Beacon')
      .tickFormat(d3.format('.r'));

  /* Done setting the chart up? Time to render it!*/
  var myData = sinAndCos();   //You need data...

  d3.select("svg")    //Select the <svg> element you want to render the chart in.   
      .datum(myData)
	  .transition().duration(350)	  //Populate the <svg> element with chart data...
      .call(chart);          //Finally, render the chart!

  //Update the chart when window resizes.
  nv.utils.windowResize(function() { chart.update() });
  return chart;
});
/**************************************
 * Simple test data generator
 */

