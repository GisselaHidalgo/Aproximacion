<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card class="strpied-tabled-with-hover"
                body-classes="table-full-width table-responsive"
          >
            <template slot="header">
              <h4 class="card-title">Su pedido es:</h4>              
            </template>           
            <l-table class="table-hover table-striped"
              :columns="table1.columns"
              :data="table1.data">                   
            </l-table>             
            
              <button class="btn btn-info btn-fill float-right" id="btnspace" v-on:click="updateProfile">Guardar</button>
             
            <button class="btn btn-info btn-fill float-right" id="btnspace" v-on:click="menuDelete">Eliminar</button> 
            <button class="btn btn-info btn-fill float-right" id="btnspace" v-on:click="menuModify">Modificar</button>                             
          </card>
        </div>              
      </div>
    </div>
  </div>
</template>
<script>
  import LTable from 'src/components/Table.vue'
  import Card from 'src/components/Cards/Card.vue'
  const tableColumns = ['Cantidad','Codigo', 'Nombre', 'Sopa', 'Plato', 'Jugo', 'Precio','Total']
  const tableData = [{
    cantidad:3,
    codigo: 2,
    nombre: 'Menu 2',
    sopa: 'sopa 2',
    plato: 'plato 2',
    jugo: 'tamarindo',   
    precio: '$3,25',
    total: '$9,75'
    
  },
  
  ]
  export default {
    components: {
      LTable,
      Card
    },
    data () {
      return {
        table1: {
          columns: [...tableColumns],
          data: [...tableData]
        }       
      }
    }, 
    methods:{
      menuDelete(){
        confirm("Seguro desea eliminar el menú seleccionado")
      }, 
       menuModify(){
        confirm("No se puede modificar debido a que solo es un prototipo")
      }, 
      updateProfile(){
        alert("Su pedido ha sido enviado con exito, gracias por la compra!!")
      },
    }
  }
</script>
<style>
#btnspace{
  margin-left: 10px;
}
</style>
