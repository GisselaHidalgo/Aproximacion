<template>
  <div class="content">
    <div class="container-fluid">      
      <div class="row">
        <div class="col-md-8">
          <chart-card :chart-data="lineChart.data"
                      :chart-options="lineChart.options"
                      :responsive-options="lineChart.responsiveOptions">
            <template slot="header">
              <h4 class="card-title">Compras realizadas en la Semana</h4>              
            </template>
            <template slot="footer">
              <div class="legend">
                <i class="fa fa-circle text-info"></i> Menú 1
                <i class="fa fa-circle text-danger"></i> Menú 2
                <i class="fa fa-circle text-warning"></i> Menú 3
              </div>
              <hr>
              <div class="stats">
                <i class="fa fa-history"></i> última actualización hace 3 minutos
              </div>
            </template>
          </chart-card>
        </div>
      </div>
      </div>
    </div>
</template>
<script>
  import ChartCard from 'src/components/Cards/ChartCard.vue'
  import StatsCard from 'src/components/Cards/StatsCard.vue'
  import LTable from 'src/components/Table.vue'

  export default {
    components: {
      LTable,
      ChartCard,
      StatsCard
    },
    data () {
      return {
        editTooltip: 'Edit Task',
        deleteTooltip: 'Remove',
        pieChart: {
          data: {
            labels: ['40%', '20%', '40%'],
            series: [40, 20, 40]
          }
        },
        lineChart: {
          data: {
            labels: ['L', 'M', 'X', 'J', 'V', 'S', 'D'],
            series: [
              [287, 385, 490, 492, 554, 586, 698, 695],
              [67, 152, 143, 240, 287, 335, 435, 437],
              [23, 113, 67, 108, 190, 239, 307, 308]
            ]
          },
          options: {
            low: 0,
            high: 800,
            showArea: false,
            height: '245px',
            axisX: {
              showGrid: false
            },
            lineSmooth: true,
            showLine: true,
            showPoint: true,
            fullWidth: true,
            chartPadding: {
              right: 50
            }
          },
          responsiveOptions: [
            ['screen and (max-width: 640px)', {
              axisX: {
                labelInterpolationFnc (value) {
                  return value[0]
                }
              }
            }]
          ]
        },
        barChart: {
          data: {
            labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dic'],
            series: [
              [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 1000],
              [412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695]
            ]
          },
          options: {
            seriesBarDistance: 10,
            axisX: {
              showGrid: false
            },
            height: '245px'
          },
          responsiveOptions: [
            ['screen and (max-width: 640px)', {
              seriesBarDistance: 5,
              axisX: {
                labelInterpolationFnc (value) {
                  return value[0]
                }
              }
            }]
          ]
        },
        tableData: {
          data: [
            {title: 'Venta del año pasado: $23000'},
            {title: 'Venta Mensual: $3800'},
            {title: 'Venta Semanal: $1800'},           
            {title: 'Venta diaria: $150'},
            {title: 'Menús vendidos: 500'}, 
            {title: 'Ventas Menú 1: $50'},   
            {title: 'Ventas Menú 2: $50'},  
            {title: 'Ventas Menú 1: $50'},  
          ]
        }
      }
    }
  }
</script>

