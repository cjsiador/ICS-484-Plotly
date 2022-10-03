d3.tsv("./datas/naplesCholeraAgeSexData.tsv", function(err, rows){

  console.log(rows)

  var idName = "myDiv1"

  function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
  }

  var headerNames = d3.keys(rows[0]);

  var headerValues = [];
  var cellValues = [];
  for (i = 0; i < headerNames.length; i++) {
    let headerValue = [headerNames[i]];
    headerValues[i] = headerValue;
    cellValue = unpack(rows, headerNames[i]);
    cellValues[i] = cellValue;
  }

  // clean date
  for (i = 0; i < cellValues[1].length; i++) {
  var dateValue = cellValues[1][i].split(' ')[0]
  cellValues[1][i] = dateValue
  }


var data = [{
  type: 'table',
  columnwidth: [200,200,200],
  columnorder: [0,1,2],
  header: {
    values: headerValues,
    align: "right",
    line: {width: 1, color: 'rgb(255, 255, 255)'},
    fill: {color: ['#0A69B5']},
    font: {family: "Arial", size: 12, color: "white"}
  },
  cells: {
    values: cellValues,
    align: ["right", "right"],
    line: {color: "black", width: 1},
    fill: {color: ['#3A4C5F']},
    font: {family: "Arial", size: 12, color: ["white"]}
  }
}]

var gd = document.getElementById(idName)
var bb = gd.getBoundingClientRect();

var layout = {
  autosize: true,
  title: "Naples: Gender Distribution by Age",
  width: bb.width,
  height: bb.height,
  paper_bgcolor: 'rgba(0,0,0,0)',
  plot_bgcolor: 'rgba(0,0,0,30)',
  font: {family: "Arial", size: 20, color: "white"}
}

var resizeDebounce = null;

function resizePlot() {
    var bb = gd.getBoundingClientRect();
    Plotly.relayout(gd, {
        width: bb.width,
        height: bb.height
    });
}

window.addEventListener('resize', function() {
    if (resizeDebounce) {
        window.clearTimeout(resizeDebounce);
    }
    resizeDebounce = window.setTimeout(resizePlot, 100);
});

Plotly.newPlot(idName, data, layout);
});