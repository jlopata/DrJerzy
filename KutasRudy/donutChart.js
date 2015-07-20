//Donut chart example
var data = exampleData();
var count = (data[0].value + data[1].value);
//Pie chart example data. Note how there is only a single array of key-value pairs.
function exampleData() {
  return  [
      { 
        "label": "Dead",
        "value" : 286
      } , 
	  { 
        "label": "Active",
        "value" : 788
      } 
    
    ];
}

function update() {
    var data = exampleData();

    // Update the SVG with the new data and call chart
    chartData.datum(data).transition().duration(500).call(chart);
    nv.utils.windowResize(chart.update);
};



nv.addGraph(function() {
  
	
  var chart = nv.models.pieChart()
      .x(function(d) { return d.label })
      .y(function(d) { return d.value })
	  .showLabels(false)     //Display pie labels
      .labelThreshold(.05)  //Configure the minimum slice size for labels to show up
      .labelType("value") //Configure what type of data to show in the label. Can be "key", "value" or "percent"
      .donut(true)          //Turn on Donut mode. Makes pie chart look tasty!
      .donutRatio(0.6)//Configure how big you want the donut hole size to be.
	  .title("Overall: " + count)
	  .cornerRadius(10)
	  .showLegend(true)
      ;
	  
	  count = (data[0].value * data[1].value);
	  
    chartData = d3.select("svg")
        .datum(data)
        .transition().duration(1200)
        .call(chart);
		
		
		nv.utils.windowResize(chart.update);
	
  return chart;
},

	function(){
          d3.selectAll(".nv-legend-symbol").on('click',
               function(){
				     console.log(count);
                     console.log("kutas");
					 count = 777;
					 console.log(count);
					 update()
           });
	
      });


	  

