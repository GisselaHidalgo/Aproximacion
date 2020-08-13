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

      <div class="row">
        <div class="col-md-6">
          <base-input type="text"
                    label="Tipo de menú"                   
                    >
          </base-input>
        </div>
        <div class="col-md-6">
          <base-input type="text"
                    label="Nombre Sopa"
                    >
          </base-input>
        </div>
      </div>

       <div class="row">
        <div class="col-md-6">
          <base-input type="text"
                    label="Plato Fuerte"                    
                    >
          </base-input>
        </div>
        <div class="col-md-6">
          <base-input type="text"
                    label="Jugo "                    
                    >
          </base-input>
        </div>        
      </div>

       <div class="row justify-content-around">
        <div class="col-md-2">
          <div class="text-center">
          <label for="file-upload" class="btn btn-info btn-fill float-right">
            Subir Foto
          </label>
          <input id="file-upload" type="file" style='display: none;'/>           
        </div> 
         
        </div>
        <div class="col-md-2">
           <label class="btn btn-info btn-fill float-right">
            Quitar Foto
          </label>
          <input id="file-upload" type="file" style='display: none;'/>           
        </div>        
      </div>    

      <div class="row">
        <div class="col-md-12">
          <div class="form-group">
            <label>Descripción del menú</label>
            <textarea rows="5" class="form-control border-input"
                      placeholder="Aquí puedes colocar una descripción"
                      >
              </textarea>
          </div>
        </div>
      </div>
      <div class="text-center">
        <router-link to="/admin/menucomplete">
          <button class="btn btn-info btn-fill float-right">Guardar</button>
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