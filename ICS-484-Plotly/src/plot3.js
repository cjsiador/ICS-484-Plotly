d3.csv("./datas/UKcensus1851.csv", function(err, rows){
  
    var idName = "myDiv6"
  
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
        
    
        let temp = parseInt(cellValues[1][0]) + parseInt(cellValues[2][0])
        let totalPopulation = [temp]
    
        // add total 
        for (i = 1; i < cellValues[1].length; i++) {
            let total = parseInt(cellValues[1][i]) + totalPopulation[i-1]
            totalPopulation[i] = total
        }

        cellValues[3] = totalPopulation
    
        headerValues[3] = 'Total'

        var data = [{
            type: 'table',
            columnwidth: [100,100,100,100],
            columnorder: [0,1,2,3],
            header: {
              values: headerValues,
              align: "right",
              line: {width: 1, color: 'rgb(255, 255, 255)'},
              fill: {color: ['#0A69B5']},
              font: {family: "Arial", size: 12, color: "white"}
            },
            cells: {
              values: cellValues,
              align: ["right", "right", 'right'],
              line: {color: "black", width: 1},
              fill: {color: ['#3A4C5F']},
              font: {family: "Arial", size: 12, color: ["white"]}
            }
          }]
          
          var gd = document.getElementById(idName)
          var bb = gd.getBoundingClientRect();
          
          var layout = {
            autosize: true,
            width: 1000,
            height: bb.height,
            paper_bgcolor: 'rgba(0,0,0,0)',
            plot_bgcolor: 'rgba(0,0,0,30)',
            font: {family: "Arial", size: 20, color: "white"}
          }
    
      
        var gd = document.getElementById(idName)
        var bb = gd.getBoundingClientRect();
        
        var layout = {
            autosize: true,
            title: "",
            width: 700,
            height: 400,
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