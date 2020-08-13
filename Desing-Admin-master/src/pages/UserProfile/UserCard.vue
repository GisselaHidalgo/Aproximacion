<template>
  <card class="card-user">   
    <img slot="image" src="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400" alt="..."/>
     <div class="author">
      <a href="#">
        <img class="avatar border-gray" id="img01" src="img/faces/face-3.jpg" alt="..."/>
        <h4 class="title">1709876522<br />
          <small>miguelrodriguez@mail.com</small>
        </h4>
      </a>
    </div>
    <p class="description text-center">Cliente</p> 

    <div class="row justify-content-around">
      <div class="col-4">
         <div class="text-center">
          <label for="file-upload" class="btn btn-info btn-fill float-right">
            Subir Foto
          </label>
          <input id="file-upload" type="file" style='display: none;'/>           
        </div>               
                              
      </div>
      <div class="col-4">
        <div class="text-center">
          <label class="btn btn-info btn-fill float-right">
            Quitar Foto
          </label>
          <input id="file-upload" type="file" style='display: none;'/>            
        </div>            
      </div>
    </div>        
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
        change: "",
        details: [
          {
            title: '12',
            subTitle: 'Files'
          },
          {
            title: '2GB',
            subTitle: 'Used'
          },
          {
            title: '24,6$',
            subTitle: 'Spent'
          }
        ]
      }
    },
    methods: {
      getClasses (index) {
        var remainder = index % 3
        if (remainder === 0) {
          return 'col-md-3 col-md-offset-1'
        } else if (remainder === 2) {
          return 'col-md-4'
        } else {
          return 'col-md-3'
        }
      }, 
     
    },
    
  }

</script>

<style>

