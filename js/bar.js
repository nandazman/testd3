var data = [30, 86, 168, 281, 303, 365];
var section = d3.selectAll("section");
// var div = section.append("div");
// div.html("Hello, world!");

section.attr("class", "special-bar")
    .append("div")
        .html("Halo")
    .append("div")
        .html("World")

// Scaling data
var x = d3.scaleLinear()
    .domain([0, d3.max(data)])
    .range([0, 30]);

d3.select(".chart")
  .selectAll("div")
    .data(data)
  .enter().append("div")
    .style("width", function(d) { return x(d) * 10 + "px"; })
    .text(function(d) { return d; });

d3.select(".chart2")
    .selectAll("div")
      .data(data)
    .enter().append("div")
      .style("width", function(d) { return d + "px"; })
      .text(function(d) { return d; });

// SVG chart
var data = [4, 8, 15, 16, 23, 42];

var width = 420,
    barHeight = 20;

var x = d3.scaleLinear()
    .domain([0, d3.max(data)])
    .range([0, width]);
var chart = d3.select(".chart-svg")
    .attr("width", width)
    .attr("height", barHeight * data.length);

var bar = chart.selectAll("g")
    .data(data)
  .enter().append("g")
    // adjust position Y-axis for every bar
    .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });

// create rectangle with width x
bar.append("rect")
    .attr("width",(d) => x(d))
    // or we can write like this
    // .attr("width",x)
    // since we didnt calculate the result of function x
    .attr("height", barHeight - 1);
    // barHeight - 1 make the rect not to touch each other

// text inside rectangle
bar.append("text")
    .attr("x", function(d) { return x(d) - 3; })
    .attr("y", barHeight / 2)
    .attr("dy", ".35em")
    .text(function(d) { return d; });


// Histogram style
data = [4, 8, 15, 16, 23, 42, 30, 8, 20, 50, 9, 30, 40];
width = 960;
height = 500;

var y = d3.scaleLinear()
    // range is the output from domain input
    .range([height,0])
    // domain, accept data from 0 to maximum data
    .domain([0, d3.max(data)])

var chart = d3.select(".chart-histogram")
    .attr("width", width)
    .attr("height", height);

var barWidth = width / data.length;

var bar = chart.selectAll("g")
      .data(data)
    .enter().append("g")
    // move x axis
      .attr("transform", function(d, i) { return "translate(" + i * barWidth + ",0)"; });

bar.append("rect")
    .attr("y", function(d) { return y(d); })
    .attr("height", function(d) { return height - y(d); })
    .attr("width", barWidth - 1);

bar.append("text")
    .attr("x", barWidth / 2)
    .attr("y", function(d) { return y(d) + 3; })
    .attr("dy", ".75em")
    .text(function(d) { return d; });