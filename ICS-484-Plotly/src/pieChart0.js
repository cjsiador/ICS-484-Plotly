d3.csv("./datas/UKcensus1851.csv", function(err, rows){
  
    var idName = "myDiv5"
  

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
    
    var maleColor = ['#1f271bff', '#1c464dff', '#19647eff', '#218a97ff', '#259da4ff', '#28afb0ff', '#5aa997ff', '#67a891ff', '#73a68bff', '#8ba37eff']
    var femaleColor = ["4f000b","610019","720026","a0213f","ce4257","db5256","e76154","f37053","ff7f51","ff8d53"]
    
    var data = [{
        values: cellValues[1],
        labels: cellValues[0],
        domain: {column: 0},
        name: 'Male',
        hoverinfo: 'label+percent+name',
        hole: .4,
        type: 'pie',
          marker: {
        colors: maleColor
  },
      },{
        values: cellValues[2],
        labels: cellValues[0],
        text: 'Female',
        textposition: 'inside',
        domain: {column: 1},
        name: 'Female',
        hoverinfo: 'label+percent+name',
        hole: .4,
        type: 'pie',
        marker: {
            colors: femaleColor
        }
      }];
    
    var layout = {
        title: 'Global Emissions 1990-2011',
        annotations: [
          {
            font: {
              size: 20
            },
            showarrow: false,
            text: 'Male',
            x: 0.20,
            y: 0.5
          },
          {
            font: {
              size: 20
            },
            showarrow: false,
            text: 'Female',
            x: 0.82,
            y: 0.5
          }
        ],
        height: 400,
        width: 600,
        paper_bgcolor: 'rgba(0,0,0,0.0)',
        plot_bgcolor: 'rgba(255,255,255,0.5)',
        font: {family: "Arial", size: 20, color: "white"},
        showlegend: false,
        margin: {"t": 0, "b": 0, "l": 0, "r": 0},
        grid: {rows: 1, columns: 2}
      };
    
    Plotly.newPlot(idName, data, layout);
});