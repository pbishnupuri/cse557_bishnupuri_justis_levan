//var data = [80, 120, 60, 150, 200];
//
//var barHeight = 20;
//
//var bar = d3.select('svg')
//          .selectAll('rect')
//          .data(data)
//          .enter()
//          .append('rect')
//          .attr('width', function(d) {  return d; })
//          .attr('height', barHeight - 1)
//          .attr('transform', function(d, i) {
//            return "translate(0," + i * barHeight + ")";
//          });

const mapContainer = d3.select("#map-container");
const mapPath = "./data/MC2-tourist.jpg";
mapContainer.append("img")
  .attr("id", "map-img")
  .attr("src", mapPath)
  .attr("width", 800)
  .attr("height", 600);

//d3.csv("./data/gps.csv")
//  .row(function(d) { return {key: d.key, value: d.value}; })
//  .get(function(error, rows) { console.log(rows); });