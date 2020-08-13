<template>
  <div class="wrapper">
    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      
      
      <sidebar-link to="/cliente/user">
        <i class="nc-icon nc-circle-09"></i>
        <p>Mi Perfil</p>
      </sidebar-link>
      <sidebar-link to="/cliente/menulist">
        <i class="nc-icon nc-notes"></i>
        <p>Menu</p>
      </sidebar-link>
      <sidebar-link to="/cliente/addmenu">
        <i class="nc-icon nc-badge"></i>
        <p>Solicitar Pedido</p>
      </sidebar-link>          
      <sidebar-link to="/cliente/notifications">
        <i class="nc-icon nc-bell-55"></i>
        <p>Notificaciones</p>
      </sidebar-link>    
      
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click="toggleSidebar">
      </dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">

</style>
<script>
  import TopNavbar from './TopNavbar.vue'
  import ContentFooter from './ContentFooter.vue'
  import DashboardContent from './Content.vue'
  import MobileMenu from './MobileMenu.vue'
  export default {
    components: {
      TopNavbar,
      ContentFooter,
      DashboardContent,
      MobileMenu
    },
    methods: {
      toggleSidebar () {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false)
        }
      }
    }
  }

</script>
