<template>
  <div class="content">
    <div class="container-fluid">
      <card>
        <div class="row">
          
          <div class="col-md-6">
            <h5>Notificaciones</h5>
            <div class="alert alert-info">
              <button type="button" aria-hidden="true" class="close" data-dismiss="alert">
                <i class="nc-icon nc-simple-remove"></i>
              </button>
              <span><b> Pedido: </b> Su Pedido fue enviado exitosamente</span>
            </div>
            <div class="alert alert-info">
              <button type="button" aria-hidden="true" class="close" data-dismiss="alert">
                <i class="nc-icon nc-simple-remove"></i>
              </button>
              <span><b> Exitoso: </b> Su pedido fue recibido por parte de "Le Marlita"</span>
            </div>
            <div class="alert alert-info">
              <button type="button" aria-hidden="true" class="close" data-dismiss="alert">
                <i class="nc-icon nc-simple-remove"></i>
              </button>
              <span><b> Enviado: </b> Su pedido fue enviado, disfrútelo. ¡Gracias por su Compra!</span>
            </div>
            
          </div>
        </div>
        <br>
        <br>
        <div class="places-buttons">
          <div class="row justify-content-center">
            <div class="col-6 text-center">
              <h5>Lugar de Notificaciones
                <p class="category">Haga clic para ver sus notificaciones</p>
              </h5>
            </div>
          </div>
         
         
          
        </div>
      </card>
    </div>
  </div>
</template>
<script>
  import Card from 'src/components/Cards/Card.vue'

  export default {
    components: {
      Card
    },
    data () {
      return {
        type: ['', 'info', 'success', 'warning', 'danger'],
        notifications: {
          topCenter: false
        }
      }
    },
    methods: {
      notifyVue (verticalAlign, horizontalAlign) {
        const color = Math.floor((Math.random() * 4) + 1)
        this.$notifications.notify(
          {
            message: 'Pedido enviado con éxito',
            icon: 'nc-icon nc-app',
            horizontalAlign: horizontalAlign,
            verticalAlign: verticalAlign,
            type: this.type[color]
          })
      }
    }
  }

</script>
<style lang="scss">

</style>
