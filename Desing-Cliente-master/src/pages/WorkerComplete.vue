<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card class="strpied-tabled-with-hover"
                body-classes="table-full-width table-responsive"
          >
            <template slot="header">
              <h4 class="card-title">Trabajadores Registrados</h4>              
            </template>           
            <l-table class="table-hover table-striped"
              :columns="table1.columns"
              :data="table1.data">                   
            </l-table>             
            <router-link to="/admin/addworker">
              <button class="btn btn-info btn-fill float-right" id="btnspace" v-on:click="updateProfile">Agregar</button>
            </router-link>              
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
  const tableColumns = ['Cedula', 'Nombres', 'Apellidos', 'Correo', 'Sucursal']
  const tableData = [{
    cedula: '078663637372',
    nombres: 'Gissela Hidalgo', 
    apellidos: 'Hidalgo Alarcón', 
    correo: 'gisselah@mail.com',
    sucursal: 'Principal'        
  },
  {
    cedula: '078663637373',
    nombres: 'Alex Adrian',
    apellidos: 'Tipan Guerrero', 
    correo: 'alext@mail.com',
    sucursal: 'Principal'   
  },
  {
    cedula: '078663637374',
    nombres: 'Andrea Tatiana',
    apellidos: 'Zambrano Loor', 
    correo: 'andreal@mail.com',
    sucursal: 'sucursal 01'     
  },
  {
    cedula: '078663637375',
    nombres: 'Jermi Jonathan',
    apellidos: 'Andrade Mejia', 
    correo: 'jermia@mail.com',
    sucursal: 'sucursal 01'   
  },
  {
    cedula: '078663637376',
    nombres: 'Génesis Genoveva',
    apellidos: 'Chavarria Loor', 
    correo: 'genesisg@mail.com',
    sucursal: 'sucursal 02'   
  },
  {
    cedula: 'cedula nueva',
    nombres: 'nombres nuevos',
    apellidos: 'apellidos nuevos', 
    correo: 'nuevo@mail.com',
    sucursal: 'sucursal 03'   
  }
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
