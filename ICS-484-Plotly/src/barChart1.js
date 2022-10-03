d3.csv("./datas/UKcensus1851.csv", function(err, rows){
  
    var idName = "myDiv4"
  

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
    
    
    var xValue = cellValues[0];
    
    var yValue = cellValues[1];
    var yValue2 = cellValues[2];
    
    var trace1 = {
        x: xValue,
        y: yValue,
        type: 'bar',
        name: 'Male',
        text: yValue.map(String),
        textposition: 'auto',
        hoverinfo: 'none',
        marker: {
        color: 'light-blue',
        line: {
            color: 'rgb(8,48,107)',
            width: 1.5
        }
        }
    };
    
    var trace2 = {
        x: xValue,
        y: yValue2,
        type: 'bar',
        name: 'female',
        text: yValue2.map(String),
        textposition: 'auto',
        hoverinfo: 'none',
        marker: {
        color: 'light-red',
        line: {
            color: 'rgb(8,48,107)',
            width: 1.5
        }
        }
    };
    
    var data = [trace1,trace2];
    
    var gd = document.getElementById(idName)
    var bb = gd.getBoundingClientRect();
    
    var layout = {
        autosize: true,
        width: bb.width,
        height: bb.height,
        title: 'UKcensus1851: Gender Distribution By Age',
        paper_bgcolor: 'rgba(0,0,0,0)',
        plot_bgcolor: 'rgba(255,255,255,0.5)',
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