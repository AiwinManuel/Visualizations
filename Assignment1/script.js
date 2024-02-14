var svg = d3.select("body")
.append("svg")
.attr("width", 800)
.attr("height", 600);

svg.append("image")
.attr("xlink:href", "images/background.jpg")
.attr("width", 800)
.attr("height", 600)
.attr("x", 0)
.attr("y", 0);

var svgWidth = 800; 
var centerPosition = svgWidth / 2; 

var paragraph = svg.append("text")
    .attr("x", centerPosition) 
    .attr("y", 130)
    .style("fill", "#3e3932")
    .style("font-size", "4px")
    .style("text-anchor", "middle"); 

paragraph.append("tspan")
    .attr("x", centerPosition) 
    .attr("dy", "0em")
    .text("ISACA's Digital Transformation Barometer research of more than 4,100 business technology professionals worldwide-");

paragraph.append("tspan")
    .attr("x", centerPosition) 
    .attr("dy", "1em")
    .text("found that the emerging technologies that are the most transformational also pose the most organizational challenges in");

paragraph.append("tspan")
    .attr("x", centerPosition)
    .attr("dy", "1em")
    .text("terms of perceived risk and resistance to change. To enable a successful digital transformation journey, enterprises require strong");

paragraph.append("tspan")
    .attr("x", centerPosition)
    .attr("dy", "1em")
    .text("governance and risk management programs, which drive confidence and enable the speed of business.");


svg.append("text")
.attr("x", 415)
.attr("y", 170)
.style("font-size", "5px")
.style("fill", "#5c5c5c")
.text("Technologies Facing the Most Organizational");

svg.append("text")
.attr("x", 415)
.attr("y", 182)
.style("font-size", "9px")
.style("fill", "#5c5c5c")
.text("Challenges or Resistance");

svg.append("image")
  .attr("xlink:href", "images/image1.jpg")
  .attr("width", 20)
  .attr("height", 62)
  .attr("x", 415)
  .attr("y", 170);

svg.append("text")
  .attr("x", 437)
  .attr("y", 201)
  .style("font-size", "4px")
  .style("fill", "#eb7c36")
  .style("font-weight", "bold")
  .style("text-anchor", "start")
  .html("AI/Machine Learning<tspan x='437' dy='1.2em'>Cognitive Tech</tspan>");


  svg.append("image")
  .attr("xlink:href", "images/image2.jpg")
  .attr("width", 20)
  .attr("height", 62)
  .attr("x", 415)
  .attr("y", 195);

svg.append("text")
  .attr("x", 437)
  .attr("y", 226)
  .style("font-size", "4px")
  .style("fill", "#eb7c36")
  .style("font-weight", "bold")
  .style("text-anchor", "start")
  .text("Public Cloud");

svg.append("image")
  .attr("xlink:href", "images/image3.jpg")
  .attr("width", 20)
  .attr("height", 62)
  .attr("x", 415)
  .attr("y", 218);

svg.append("text")
  .attr("x", 437)
  .attr("y", 249)
  .style("font-size", "4px")
  .style("fill", "#eb7c36")
  .style("font-weight", "bold")
  .style("text-anchor", "start")
  .text("Blockchain");

svg.append("image")
  .attr("xlink:href", "images/image4.jpg")
  .attr("width", 20)
  .attr("height", 62)
  .attr("x", 475)
  .attr("y", 195);

svg.append("text")
  .attr("x", 497)
  .attr("y", 226)
  .style("font-size", "4px")
  .style("fill", "#eb7c36")
  .style("font-weight", "bold")
  .style("text-anchor", "start")
  .html("Internet of<tspan x='497' dy='1.2em'>Things</tspan>");

svg.append("image")
  .attr("xlink:href", "images/image5.jpg")
  .attr("width", 20)
  .attr("height", 62)
  .attr("x", 475)
  .attr("y", 218);

svg.append("text")
  .attr("x", 497)
  .attr("y", 249)
  .style("font-size", "4px")
  .style("fill", "#eb7c36")
  .style("font-weight", "bold")
  .style("text-anchor", "start")
  .html("Big Data<tspan x='497' dy='1.2em'>Analytics</tspan>");

svg.append("text")
.attr("x", 275)
.attr("y", 170)
.style("font-size", "5px")
.style("fill", "#5c5c5c")
.text("Top Motivators for Implementing an");

svg.append("text")
.attr("x", 275)
.attr("y", 178)
.style("font-size", "9px")
.style("fill", "#5c5c5c")
.text("Emerging Technology");

// donut 1
var donutData = [29,24,18,15,9,3]; 
var donutWidth = 150;
var donutHeight = 150;

var donutGroup = svg.append("g")
.attr("transform", "translate(300, 220)");

var donutColor = d3.scaleOrdinal()
.range(["#cd6b31","#f78644","#f9a334","#feba45","#fdcf84","#ffe8bf"]);

var donutPie = d3.pie();

var donutArc = d3.arc()
.innerRadius(14)
.outerRadius(20);

var donutArcs = donutPie(donutData);

donutGroup.selectAll("path")
.data(donutArcs)
.enter()
.append("path")
.attr("d", donutArc)
.attr("fill", function (d, i) {
    return donutColor(i);
});

var total = donutData.reduce(function(acc, val) { return acc + val; }, 0);

donutGroup.selectAll(".percent-line")
.data(donutArcs)
.enter()
.append("line")
.attr("x1", function(d) { return donutArc.centroid(d)[0] * 1.1; })
.attr("y1", function(d) { return donutArc.centroid(d)[1] * 1.1; })
.attr("x2", function(d) { return donutArc.centroid(d)[0] * 1.5; })
.attr("y2", function(d) { return donutArc.centroid(d)[1] * 1.5; })
.attr("stroke-width", ".5px")
.attr("stroke", "gray");

donutGroup.selectAll(".value-text")
.data(donutArcs)
.enter()
.append("text")
.attr("x", function(d) { return donutArc.centroid(d)[0]*1.6; })
.attr("y", function(d) { return donutArc.centroid(d)[1]*1.6; })
.attr("text-anchor", "middle")
.text(function(d) {
    return d.data + "%"; 
})
.attr("font-size", "4px")
.attr("font-weight", "bold")
.attr("fill", "#5c5c5c");

var legendGroup = svg.append("g")
.attr("transform", "translate(340, 190)");

donutData.forEach(function(d, i) {
    var yPosition = i * 11; 

    legendGroup.append("rect")
    .attr("x", 0)
    .attr("y", yPosition)
    .attr("width", 5)
    .attr("height", 6)
    .attr("fill", donutColor(i));

    var texts = [
        "Anticipated Cost Savings",
        "New Revenue System",
        "Ability to Reach\nNew Customers",
        "Increased Agility",
        "Reputational Value",
        "A Customer's Successful\nImplementation"
    ];

    var text = texts[i].split('\n'); 

    legendGroup.append("text")
    .attr("x", 0)
    .attr("y", yPosition + 3)
    .attr("font-size", "3px")
    .attr("fill", "#636363")
    .attr("text-anchor", "start")
    .selectAll("tspan")
    .data(text)
    .enter()
    .append("tspan")
    .attr("x", 9)
    .attr("dy", function(d, index) { return index ? "1.2em" : 0; }) 
    .text(function(d) { return d; });
});

//stack data
const stackData = [22, 78];
const stackData1 = [31, 69];

const w = 35;
const height = 7.5;

var svg = d3.select("svg");

svg.append("text")
  .attr("x", 273)
  .attr("y", 283)
  .style("font-size", "9px")
  .style("fill", "#5c5c5c")
  .text("Evaluating Opportunities");

svg.append("text")
  .attr("x", 273)
  .attr("y", 290)
  .style("font-size", "5px")
  .style("fill", "#5c5c5c")
  .text("Arising From Emerging Technologies");

var s1 = svg.append("g").attr("transform", "translate(280,320)").attr("class", "stackGroup");
var s2 = svg.append("g").attr("transform", "translate(335,320)").attr("class", "stackGroup1");

var xScale = d3.scaleLinear()
  .domain([0, 100])
  .range([0, w]);

s1.selectAll("rect")
  .data(stackData)
  .enter()
  .append("rect")
  .attr("x", (d, i) => i === 0 ? 0 : xScale(stackData[0]))
  .attr("width", d => xScale(d))
  .attr("height", height)
  .attr("fill", (d, i) => i === 0 ? "#fbb345" : "#feeac7");


s2.selectAll("rect")
  .data(stackData1)
  .enter()
  .append("rect")
  .attr("x", (d, i) => i === 0 ? 0 : xScale(stackData1[0]))
  .attr("width", d => xScale(d))
  .attr("height", height)
  .attr("fill", (d, i) => i === 0 ? "#fbb345" : "#feeac7");


svg.append("line")
  .attr("x1", 322)
  .attr("y1", 300)
  .attr("x2", 322)
  .attr("y2", 345)
  .attr("stroke", "#e3e3e9")
  .attr("stroke-width", ".7");


function toggleStackData(s, data, label, toggleText, valueTextClass) {
    var newText = label.text() === toggleText.off ? toggleText.on : toggleText.off;
    label.text(newText);
    s.select("text." + valueTextClass)
      .text(data[newText === toggleText.on ? 1 : 0] + "%");
}

function swapStackColors(s) {
  
    let rects = s.selectAll("rect").nodes();
    let colors = rects.map(rect => d3.select(rect).attr("fill"));
    d3.select(rects[0]).attr("fill", colors[1]);
    d3.select(rects[1]).attr("fill", colors[0]);
}


var labels = [
    svg.append("text")
      .attr("transform", "translate(280,360)")
      .style("fill", "#636363")
      .style("font-weight", "bold")
      .attr("x", 17)
      .attr("y", -22)
      .style("font-size", "4px")
      .style("text-anchor", "middle")
      .text("rarely evaluate"),

    svg.append("text")
      .attr("transform", "translate(335,360)")
      .style("fill", "#636363")
      .style("font-weight", "bold")
      .attr("x", 20)
      .attr("y", -22)
      .style("font-size", "4px")
      .style("text-anchor", "middle")
      .text("frequently evaluate")
];


[s1, s2].forEach((s, index) => {
    var data = index === 0 ? stackData : stackData1;
    var toggleText = {
        off: index === 0 ? "rarely evaluate" : "frequently evaluate",
        on: index === 0 ? "not rarely evaluate" : "not frequently evaluate"
    };
    var valueTextClass = "valueText" + index;

    
    s.append("text")
      .attr("class", valueTextClass)
      .attr("x", 2.5) 
      .attr("y", -5) 
      .text(data[0] + "%")
      .style("fill", "#e47433")
      .style("font-weight", "bold")
      .style("font-size", "15px")
      .style("text-anchor", "start");

    s.on("click", () => {
        toggleStackData(s, data, labels[index], toggleText, valueTextClass);
        swapStackColors(s); 
});


//horizontal bar graph
svg.append("text")
.attr("x", 400)
.attr("y", 283)
.style("font-size", "9px")
.style("fill", "#5c5c5c")
.text("Who is Respnsible");

svg.append("text")
.attr("x", 400)
.attr("y", 290)
.style("font-size", "5px")
.style("fill", "#5c5c5c")
.text("For Evaluating Emerging Technologies");


var hrBarData = [39, 33, 12, 7, 7];

var hrBarGroup = svg.append("g")
  .attr("transform", "translate(400, 175)");

var xHrScale = d3.scaleLinear()
  .domain([0, d3.max(hrBarData)])
  .range([0, 55]);

var yHrScale = d3.scaleBand()
  .domain(hrBarData.map(function (_, i) { return i; }))
  .range([179, 120])
  .padding(0.2);

var hrColorScale = d3.scaleOrdinal()
  .range(["#fcb344"]);

hrBarGroup.selectAll("rect")
  .data(hrBarData)
  .enter()
  .append("rect")
  .attr("x", 0)
  .attr("y", function (d, i) { return yHrScale(i); })
  .attr("width", function (d) { return xHrScale(d); })
  .attr("height", yHrScale.bandwidth())
  .attr("fill", function (d, i) { return hrColorScale(i); });

// Adding percentage values inside the bars
hrBarGroup.selectAll("text.value")
  .data(hrBarData)
  .enter()
  .append("text")
  .attr("x", 1) 
  .attr("y", function(d, i) { return yHrScale(i) + yHrScale.bandwidth() / 2; }) 
  .attr("dy", ".35em") 
  .text(function(d) { return d + "%"; }) 
  .style("font-size", "5px")
  .style("fill", "#ffffff") 
  .style("font-weight", "bold")
  .style("text-anchor", "start"); 

var hrBarTitles = [
  "IT Group",
  "Multiple Groups' Discussion",
  "Executive Management",
  "Business Unit",
  "Innovation Group",
];

hrBarGroup.selectAll("text.title")
  .data(hrBarTitles)
  .enter()
  .append("text")
  .attr("x", function(d, i) { return xHrScale(hrBarData[i]) + 5; }) 
  .attr("y", function(d, i) { return yHrScale(i) + yHrScale.bandwidth() / 2; }) 
  .attr("dy", ".35em")
  .text(function(d) { return d; }) 
  .style("font-size", "5px")
  .style("fill", "#c87130") 
  .style("font-weight", "bold") 
  .style("text-anchor", "start"); 

//bar graph
svg.append("text")
.attr("x", 275)
.attr("y", 375)
.style("font-size", "5px")
.style("fill", "#5c5c5c")
.text("Technologies With Most Potential to");

svg.append("text")
.attr("x", 275)
.attr("y", 385)
.style("font-size", "9px")
.style("fill", "#5c5c5c")
.text("Deliver Transformational Value");

var barData = [38, 20, 18, 14, 7, 2, 1];

var barGroup = svg.append("g")
.attr("transform", "translate(250, 283)");

var xScale = d3.scaleLinear()
.domain([0, barData.length - 1])
.range([30, 245]);

var yScale = d3.scaleLinear()
.domain([0, d3.max(barData)])
.range([179, 120]);

var colorScale = d3.scaleOrdinal()
.range(["#e97d35", "#f78b4b", "#f9a334", "#ffba45", "#fdcf84", "#feeac7", "#fdf7d9"]);

barGroup.selectAll("rect")
.data(barData)
.enter()
.append("rect")
.attr("x", function (d, i) { return xScale(i); })
.attr("y", function (d) { return yScale(d); })
.attr("width", 23)
.attr("height", function (d) { return 180 - yScale(d); })
.attr("fill", function (d, i) { return colorScale(i);});

var legendGroup = svg.append("g")
.attr("transform", "translate(430, 375)");

var technologyNames = [
    "Big Data Analytics", 
    "AI/Machine Learning, Cognitive", 
    "Public Cloud", 
    "IoT", 
    "Blockchain", 
    "AR/VR", 
    "3D Printing"
];
barGroup.selectAll("text")
.data(barData)
.enter()
.append("text")
.attr("x", function(d, i) { return xScale(i) + 11.5; }) 
.attr("y", function(d) { return yScale(d) - 2; }) 
.text(function(d) { return d + "%"; })
.attr("fill", "#5c5c5c")
.attr("font-size", "7px")
.attr("text-anchor", "middle")
.attr("font-weight", "bold");



var legendRectangles = legendGroup.selectAll("rect")
.data(barData)
.enter()
.append("rect")
.attr("x", 0)
.attr("y", function (d, i) { return i*7; }) 
.attr("width", 4)
.attr("height", 5)
.attr("fill", function (d, i) { return colorScale(i); });

var legendText = legendGroup.selectAll("text")
.data(technologyNames) 
.enter()
.append("text")
.attr("x", 9)
.style("fill", "#5c5c5c")
.attr("y", function (d, i) { return i * 7 +3.5 ; }) 
.text(function (d) { return d; }) 
.attr("font-size", "4px")

//Donut for Digitally Literate 

svg.append("text")
.attr("x", 275)
.attr("y", 475)
.style("font-size", "5px")
.style("fill", "#5c5c5c")
.text("Are Your Organization's Leaders");

svg.append("text")
.attr("x", 275)
.attr("y", 485)
.style("font-size", "9px")
.style("fill", "#5c5c5c")
.text("Digitally Literate?");

function addCenterText(donutGroup, donutData, color) {
    donutGroup.append("text")
    .attr("transform", "translate(0,0)") 
    .attr("text-anchor", "middle") 
    .attr("dominant-baseline", "central")
    .style("fill", color)
    .style("font-weight", "bold")
    .style("font-size", "6px") 
    .text(donutData[1] + "%"); 
}

//donut 2
var donutData1 = [47,53]; 

var donutGroup1 = svg.append("g")
.attr("transform", "translate(292, 510)");

var donutColor1 = d3.scaleOrdinal()
.range(["#fae7c4", "#fcb73e"]);

var donutPie1 = d3.pie();

var donutArc1 = d3.arc()
.innerRadius(10)
.outerRadius(14);

var donutArcs1 = donutPie1(donutData1);

donutGroup1.selectAll("path")
.data(donutArcs1)
.enter()
.append("path")
.attr("d", donutArc1)
.attr("fill", function (d, i) { return donutColor1(i); });

addCenterText(donutGroup1, donutData1, "#da7833");

//donut 3
var donutData2 = [75,25]; 

var donutGroup2 = svg.append("g")
.attr("transform", "translate(335, 510)");

var donutPie2 = d3.pie();

var donutArc2 = d3.arc()
.innerRadius(10)
.outerRadius(14);

var donutArcs2 = donutPie2(donutData2);

donutGroup2.selectAll("path")
.data(donutArcs2)
.enter()
.append("path")
.attr("d", donutArc2)
.attr("fill", function (d, i) { return donutColor1(i); }); 

addCenterText(donutGroup2, donutData2, "#da7833");

//donut 4
var donutData3 = [78,22]; 

var donutGroup3 = svg.append("g")
.attr("transform", "translate(375, 510)");

var donutPie3 = d3.pie();

var donutArc3 = d3.arc()
.innerRadius(10)
.outerRadius(14);

var donutArcs3 = donutPie3(donutData3);

donutGroup3.selectAll("path")
.data(donutArcs3)
.enter()
.append("path")
.attr("d", donutArc3)
.attr("fill", function (d, i) { return donutColor1(i); }); 

addCenterText(donutGroup3, donutData3, "#da7833");

function addBottomText(donutGroup, labelText, color) {
    donutGroup.append("text")
    .attr("transform", "translate(0, 25)") 
    .attr("text-anchor", "middle")
    .attr("x",0)
    .attr("y",-5)
    .style("fill", color)
    .style("font-weight", "bold")
    .style("font-size", "4px")
    .text(labelText);
}

addBottomText(donutGroup1, "Yes", "#da7833");
addBottomText(donutGroup2, "No", "#da7833");
addBottomText(donutGroup3, "Unsure", "#da7833");

svg.append("text")
.attr("x", 405)
.attr("y", 475)
.style("font-size", "5px")
.style("fill", "#5c5c5c")
.text("Are Your Organization's Leaders");

svg.append("text")
.attr("x", 405)
.attr("y", 485)
.style("font-size", "9px")
.style("fill", "#5c5c5c")
.text("Receptive to Emerging Tech?");

function addCenterPercentage(donutGroup, percentage, color) {
    donutGroup.append("text")
    .attr("transform", "translate(0,0)") 
    .attr("text-anchor", "middle") 
    .attr("dominant-baseline", "middle") 
    .style("fill", color)
    .style("font-weight", "bold")
    .style("font-size", "8px") 
    .text(percentage); 
}
// Donut 5
var donutData1 = [100]; 
var donutGroup1 = svg.append("g")
.attr("transform", "translate(422, 510)");
var donutPie1 = d3.pie();
var donutArc1 = d3.arc().innerRadius(11).outerRadius(13);
var donutArcs1 = donutPie1(donutData1);
donutGroup1.selectAll("path")
.data(donutArcs1)
.enter()
.append("path")
.attr("d", donutArc1)
.attr("fill", "#e67f3e");
addCenterPercentage(donutGroup1, "23%", "#5c5c5c");
addBottomText(donutGroup1, "Very", "#5c5c5c");


// donut 6
var donutData2 = [100]; 
var donutGroup2 = svg.append("g")
.attr("transform", "translate(454, 510)");
var donutPie2 = d3.pie();
var donutArc2 = d3.arc().innerRadius(11).outerRadius(13);
var donutArcs2 = donutPie2(donutData2);
donutGroup2.selectAll("path")
.data(donutArcs2)
.enter()
.append("path")
.attr("d", donutArc2)
.attr("fill", "#ff9e21");
addCenterPercentage(donutGroup2, "50%", "#5c5c5c");
addBottomText(donutGroup2, "Moderately", "#5c5c5c");

// Donut 7
var donutData3 = [100]; 
var donutGroup3 = svg.append("g")
.attr("transform", "translate(486, 510)");
var donutPie3 = d3.pie();
var donutArc3 = d3.arc().innerRadius(11).outerRadius(13);
var donutArcs3 = donutPie3(donutData3);
donutGroup3.selectAll("path")
.data(donutArcs3)
.enter()
.append("path")
.attr("d", donutArc3)
.attr("fill", "#fec685");
addCenterPercentage(donutGroup3, "17%", "#5c5c5c");
addBottomText(donutGroup3, "Not Very", "#5c5c5c");


// Donut 8
var donutData4 = [100]; 
var donutGroup4 = svg.append("g")
.attr("transform", "translate(518, 510)");
var donutPie4 = d3.pie();
var donutArc4 = d3.arc().innerRadius(11).outerRadius(13);
var donutArcs4 = donutPie4(donutData4);
donutGroup4.selectAll("path")
.data(donutArcs4)
.enter()
.append("path")
.attr("d", donutArc4)
.attr("fill", "#fdebc8");
addCenterPercentage(donutGroup4, "7%", "#5c5c5c");
addBottomText(donutGroup4, "Not at All", "#5c5c5c");

var svgWidth = 800; 
var textXPosition = svgWidth / 2; 

svg.append("text")
.attr("x", textXPosition)
.attr("y", 560)
.attr("text-anchor", "middle") 
.style("font-size", "4.5px")
.style("fill", "#5c5c5c")
.html("Companies with digitally literate leaders are more aggressive and perceptive to evaluating and adopting" + 
      "<tspan x='" + textXPosition + "' dy='1.2em'>emerging technologies in their quests to achieve digital transformation.</tspan>");
