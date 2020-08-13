<template>
  <card> 
    <h4 slot="header" class="card-title">Agregar Trabajador</h4>
    <form>
      <div class="row">
        <div class="col-md-5">
          <base-input type="text"
                    label="Sucursal"                                        
                   >
          </base-input>
        </div>
        
        <div class="col-md-7">
          <base-input type="email"
                    label="Email"                                     
                    >
          </base-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <base-input type="text"
                    label="Nombres"                   
                    >
          </base-input>
        </div>
        <div class="col-md-6">
          <base-input type="text"
                    label="Apellidos"
                    >
          </base-input>
        </div>
      </div>

       <div class="row">
        <div class="col-md-4">
          <base-input type="text"
                    label="Cédula"
                    >
          </base-input>
        </div>
        <div class="col-md-4">
          <base-input type="text"
                    label="Telefono"
                    >
          </base-input>
        </div>
        <div class="col-md-4">
          <base-input type="text"
                    label="Cargo"                                  
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
          <base-input type="text"
            label="Dirección"
            placeholder="Dirección"
            >
          </base-input>
        </div>
      </div>
     
      <div class="row">
        <div class="col-md-12">
          <div class="form-group">
            <label>Descripción del trabajador</label>
            <textarea rows="5" class="form-control border-input"
              placeholder="Aquí puedes colocar una descripción"
              >
              </textarea>
          </div>
        </div>
      </div>
      <div class="text-center">
        <router-link to="/admin/workercomplete">
          <button class="btn btn-info btn-fill float-right" v-on:click="saveWorker">Guardar</button>
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
      saveWorker () {      
       confirm("Trabajador Guardado")      
      }, 
    }
  }
</script>
<style >
#txtIn{
  color:white  
}
</style>