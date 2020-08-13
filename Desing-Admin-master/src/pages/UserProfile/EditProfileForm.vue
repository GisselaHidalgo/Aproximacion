<template>
  <card> 
    <h4 slot="header" class="card-title">Mi Perfil</h4>
    <form>
      <div class="row">
        
        
       
      </div>

      <div class="row">
        <div class="col-md-6">
          <base-input type="text"
                    label="Nombres"                    
                    placeholder="nombres"
                    v-model="user.nombres">
          </base-input>
        </div>
        <div class="col-md-6">
          <base-input type="text"
                    label="Apellidos"
                    placeholder="apellidos"
                    v-model="user.apellidos">
          </base-input>
        </div>
         <div class="col-md-7">
          <base-input type="email"
                    label="Email"
                    :disabled="true"
                    placeholder="Correo Electrónico"
                    v-model="user.email">
          </base-input>
        </div>
      </div>

       <div class="row">
        <div class="col-md-4">
          <base-input type="text"
                    label="Cédula"
                    :disabled="true"
                    placeholder="Cédula"
                    v-model="user.cedula">
          </base-input>
        </div>
        <div class="col-md-4">
          <base-input type="text"
                    label="Telefono"
                    placeholder="Telefono"
                    v-model="user.telefono">
          </base-input>
        </div>
        
      </div>

      <div class="row">
        <div class="col-md-12">
          <base-input type="text"
                    label="Dirección"
                    placeholder="Dirección"
                    v-model="user.direccion">
          </base-input>
        </div>
      </div>
     
      <div class="row">
        <div class="col-md-12">
          <div class="form-group">
            <label>Referencias de tu vivienda</label>
            <textarea rows="5" class="form-control border-input"
                      placeholder="Aquí puedes colocar una descripción"
                      v-model="user.descripcion">
              </textarea>
          </div>
        </div>
      </div>
      <div class="text-center">
        <router-link to="/cliente">
          <button class="btn btn-info btn-fill float-right" v-on:click="updateProfile">Actualizar Datos</button>
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
    data () {
      return {
        user: {
          sucursal: 'Principal',
          email: 'miguelrodriguez@mail.com',  
          nombres: 'Miguel',                 
          apellidos: 'Rodriguez',
          cedula:'1709876522',
          telefono:'0962771967',
          direccion: 'García Moreno y El Empata',         
          descripcion: 'A dos cuadras del subcentro de salud de Quito, casa 314'
        }        
      }
    },
    methods: {      
      updateProfile () {      
       confirm("Desea actualizar los datos")      
      }, 
    }
  }
</script>
<style >
#txtIn{
  color:white  
}
</style>
