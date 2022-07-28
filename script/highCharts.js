//Init Highcharts Functions
function loadPie(data) {
  let pieChart = Highcharts.chart('container-pie', {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
        text: 'PIE CHART'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    series: [{
      name: 'Presentase',
      colorByPoint: true,
      data: [{
          name: 'Lulus',
          y: data.lulus,
          sliced: true,
          selected: true
      }, {
          name: 'Tidak Lulus',
          y: data.tidakLulus
      }]
    }]
  })
  return pieChart
}


//Get Data Function
const getPieData = async () => {
  const columnData = await window.onload()
  const sumData = {}
  const newData = {}
  const isDataEmpty = Object.values(columnData).length === 0
  if (isDataEmpty) {
    sumData.lulus = 0
    sumData.tidakLulus = 0
  } else {

   //Mapping Array
    newData.ket_lulus = columnData.data.map(data => data.ket_lulus)
    //Sum Array
    sumData.lulus = newData.ket_lulus.filter(obj => obj == 'Lulus').length
    sumData.tidakLulus = newData.ket_lulus.filter(obj => obj == 'Tidak Lulus').length
  }
  return sumData
}

const loadChart = async () => {
  const pieData = await getPieData()
  loadPie(pieData)
}

//Function Execution
loadChart()

reloadBtn.click( async () => {
  const pieData = await getPieData()
  const pieChart = await loadPie(pieData)
  
  //Update Pie Chart
  pieChart.series[0].data[0].update({
    y: pieData.lulus
  })
  pieChart.series[0].data[1].update({
    y: pieData.tidakLulus
  })
  pieChart.redraw()
})
