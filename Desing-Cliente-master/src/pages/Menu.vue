<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card class="strpied-tabled-with-hover"
                body-classes="table-full-width table-responsive"
          >
            <template slot="header">
              <h4 class="card-title">Menú del Día</h4>              
            </template>           
            <l-table class="table-hover table-striped"
              :columns="table1.columns"
              :data="table1.data">                   
            </l-table>             
            <router-link to="/cliente/addmenu">
              <button class="btn btn-info btn-fill float-right" id="btnspace" v-on:click="updateProfile">Solicitar Pedido</button>
            </router-link>  
    
                        
          </card>
        </div>              
      </div>
    </div>
  </div>
</template>
<script>
  import LTable from 'src/components/Table.vue'
  import Card from 'src/components/Cards/Card.vue'
  const tableColumns = ['codigo', 'Nombre', 'Sopa', 'Plato', 'Jugo', 'Precio']
  const tableData = [{
    codigo: 1,
    nombre: 'Menú 1',
    sopa: 'Sopa 1',
    plato: 'Plato 1',
    jugo: 'mora', 
    precio: '$2,50'     
  },
  {
    codigo: 2,
    nombre: 'Menu 2',
    sopa: 'sopa 2',
    plato: 'plato 2',
    jugo: 'tamarindo',   
    precio: '$3,25'
  },
  {
    codigo: 3,
    nombre: 'Menu 3',
    sopa: 'sopa 3',
    plato: 'plato 3',
    jugo: 'fresa', 
    precio: '$3,00'
  },
  {
    codigo: 4,
    nombre: 'Menu 4',
    sopa: 'sopa 4',
    plato: 'plato 4',
    jugo: 'Bananas', 
    precio: '$2,75'
  },
  {
    codigo: 5,
    nombre: 'Menu 5',
    sopa: 'sopa 5',
    plato: 'plato 5',
    jugo: 'manzana', 
    precio: '$2,75'
  }]
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
        confirm("seguro de eliminar el menú seleccionado")
      }, 
      menuModify(){
        alert("Este prototipo de software no permite la modificación de datos")
      }
    }
  }
</script>
<style>
#btnspace{
  margin-left: 10px;
}
</style>

