<template>
  <div class="bottom_div">
    <br>
    <p class="contact_p">phone number:+218 94-5207345</p>
    <p class="contact_p">Gmail:odayyomer@gmail.com</p>
  </div>
</template>

<script>
export default {
  name:'Bottom',
    mounted(){
      const observer = new IntersectionObserver(entriee=>{
          entriee.forEach((ente)=>{
              if(ente.isIntersecting){
                ente.target.classList.add('bottom_alive')
              }
          })
      },{threshold:0.1})
      const Selemen = document.querySelectorAll('.bottom_div')
      Selemen.forEach(e=>{observer.observe(e)})
    }
}
</script>

<style>
@keyframes bottom_div_a {
    from{margin-left: 100%;opacity: 0;}
    to{margin-left: 0%;opacity: 1;}
}

.bottom_div{
  background: linear-gradient(to left, #0f74c2,#055693,#062b47);
  height: 100px;
  text-align:left;
  opacity: 0
}
.bottom_alive{
    animation-name: bottom_div_a;
    animation-duration: 2s;
    opacity: 1;
}
.contact_p{
    color:white;
    margin-left: 20px
}
</style>