<template>
  <card> 
    <h4 slot="header" class="card-title">Solicitar Pedido</h4>
    <form>
      <div class="row">
        <div class="col-md-4">
          <base-input type="number"
                    label="Cantidad"                  
                    >
          </base-input>
        </div>
        <div class="col-md-8">
          <base-input type="text"
                    label="Nombre de Menú"                 
                    >
          </base-input>
        </div>
        
        <div class="col-md-4">
          <base-input type="number"
                    label="Código del Menú"                  
                    >
          </base-input>
        </div>
      </div>

      <div class="text-center">
        <router-link to="/cliente/menucomplete">
          <button class="btn btn-info btn-fill float-right" >Guardar</button>
        </router-link>           
      </div>
      <div class="clearfix"></div>
    </form>
  </card>
</template>
<script>
  import Card from 'src/components/Cards/Card.vue'

  export default {
    components: {
      Card      
    
    },
    
    methods: {      
      saveMenu () {      
       confirm("Está seguo de agregar este nuevo menu")      
      }     
    }
  }
</script>
<style >
#txtIn{
  color:white  
}
</style>
