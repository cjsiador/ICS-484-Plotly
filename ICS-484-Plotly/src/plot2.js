d3.tsv("./datas/choleraDeaths.tsv", function(err, rows){

    var idName = "myDiv2"
  
    function unpack(rows, key) {
    return rows.map(function(row) { return row[key]; });
    }
  
    var headerNames = d3.keys(rows[0]);
  
    var headerValues = [];
    var cellValues = [];
    for (i = 0; i < headerNames.length; i++) {
      let headerValue = [headerNames[i]];
      headerValues[i] = headerValue;
      let cellValue = unpack(rows, headerNames[i]);
      cellValues[i] = cellValue;
      //console.log(cellValues[0]) 
      /**
       * cellValues[0] = date
       * cellValues[1] = attack
       * cellValues[2] = death
       */
    }

    console.log("The cellvalue is" + cellValues[0])

    // // clean date
    // for (i = 0; i < cellValues[1].length; i++) {
    //     var dateValue = cellValues[1][i].split(' ')[0]
    //     cellValues[0][i] = dateValue
    // }
    

    let temp = parseInt(cellValues[1][0])
    let totalAttack = [temp]

    // add total attacks
    for (i = 1; i < cellValues[1].length; i++) {
        let total = parseInt(cellValues[1][i]) + totalAttack[i-1]
        totalAttack[i] = total
    }

    temp = parseInt(cellValues[2][0])
    let totalDeath = [temp]
    // add total deaths
    for (i = 1; i < cellValues[2].length; i++) {
        let total = parseInt(cellValues[2][i]) + totalDeath[i-1]
        totalDeath[i] = total
    }

    console.log(totalDeath)
    console.log("The cellvalue is" + cellValues[0])

    
    var trace1 = {
        x: cellValues[0],
        y: cellValues[1],
        mode: 'lines+markers',
        name: "Attack",
        line: {
            dash: 'dot',
            width: 2
          }
    }
    
    var trace2 = {
        x: cellValues[0],
        y: cellValues[2],
        mode: 'lines+markers',
        name: "Death",
        line: {
            dash: 'dot',
            width: 2
          }
    }

    var trace3 = {
        x: cellValues[0],
        y: totalAttack,
        name: "Total Attack",
        mode: 'lines+markers',
        line: {
            dash: 'dot',
            width: 2
          }
    }

    var trace4 = {
        x: cellValues[0],
        y: totalDeath,
        mode: 'lines+markers',
        name: "Total Death",
        line: {
            dash: 'dot',
            width: 2
          }
    }

    var data = [ trace1, trace2, trace3, trace4 ];

  
    var gd = document.getElementById(idName)
    var bb = gd.getBoundingClientRect();
    
    var layout = {
        autosize: true,
        title: "",
        width: 1000,
        height: 600,
        paper_bgcolor: 'rgba(0,0,0,0)',
        plot_bgcolor: 'rgba(0,0,0,0.9)',
        font: {family: "Arial", size: 14, color: "white"}
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
    
    var config = {responsive: true}

    Plotly.newPlot(idName, data, layout, config);
});