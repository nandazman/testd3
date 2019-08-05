d3.selectAll("p.blue")
    .data([4, 5, 6, 8, 7])
    .style("color", function(d,i){
        return i % 2 ? "#195dca" : "#3a00a5";
    })
    .style("font-size", function(d){
        return d/4 + "em";
    })
    // .enter().append("p")
    //     .text(function(d){
    //         return "I am the last element with font-size " + d/4 + "rem"
    //     })
    //     .style("font-size", function(d){
    //         return d/4 + "em";
    //     })
d3.selectAll("p.red").style("color", "red");
d3.select("body").transition()
    .duration(1000)
    .style("background-color", function(){
        return "hsl(" + Math.random() * 360 + "," + Math.random() *100 + "%," + Math.random() *100+"%)";
    })

var myData = [4, 8, 13, 16]
// Update…
var h4 = d3.select("body")
  .selectAll("h4")
  .data(myData)
  .text(function(d){
      return `This is data ${d}`
})
    
// Exit…
h4.exit().remove();
// This will remove extra h4, if we have 2 data and we found more than 2 datas
// using selectAll, it will delete uneccessary h4, and will be reduce to 2 h4

// Enter…
d3.select("body")
    .selectAll("h4")
    .data(myData)
    .text(function(d){
        return `This is data ke ${d}`
        }).enter().append("h4")
        .text(function(d) { return d; });


var circle =  d3.selectAll("circle")
                .data(myData)
circle.exit().remove()
circle.transition()
    .duration(750)
    .delay(function(d, i) { 
        return i * 10; 
    })
    .attr("r", function(d) { 
        return d*2 + 25; 
    })
    .attr("cx", function(d) { 
        return d*25; 
    })
    .attr("cy", function(d) { 
        return d*25; 
    })
    .attr("fill", function(d) { 
        return "hsl(" + Math.random() * 360 + "," + Math.random() *100 + "%," + Math.random() *100+"%)";
    })
    .attr("stroke", function(d) { 
        return "hsl(" + Math.random() * 360 + "," + Math.random() *100 + "%," + Math.random() *100+"%)";
    })

var newData = [6,10,14]
circle =  d3.selectAll("circle")
            .data(newData)
circle.exit()
    .transition()
    .duration(2000)
    .attr("r", 0)
    .remove();
data = [30, 86, 168, 281, 303, 365];

d3.select(".chart")
.selectAll("div")
.data(data)
    .enter()
    .append("div")
    .transition()
    .delay(1000)
    .style("height", function(d) { return d + "px"; })
    .text(function(d) { return d; });