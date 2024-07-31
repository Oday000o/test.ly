<template>
  <div  class="container">
    <div class="message_div  container" >
      <p id="p1">I am a Frontend Developer</p>
      <p id="p2">I can help you make your website</p>
    </div>
  </div>

</template>

<script>
export default {
  name:'Message',
  mounted(){
    const observer= new IntersectionObserver(entrys=>{
        entrys.forEach((enty)=>{
            if(enty.isIntersecting){
                enty.target.classList.add('message_div_a')
                
            }
        })
    },{threshold:0.4})
    const Seel = document.querySelectorAll('.message_div')
    Seel.forEach((o)=>{observer.observe(o)})
  }
}
</script>

<style scoped>
@keyframes anim{
  from{opacity: 0;}
  to{opacity: 1;}
}
.message_div{
    color: #055693;
    margin-left: 0%;
    margin-right: 5%;
    border-radius: 30px;
    padding: 3%;
    opacity: 0;
    margin-top: 10%;
    margin-bottom: 30%;
    height: fit-content;
    background-color: white;
    box-shadow: -15px 0px 30px rgb(78, 78, 78);
}
.message_div_a{
  animation-name: anim;
  animation-duration: 2s;
  opacity: 1;
}
.message_image{
  position:relative;
  width:15% ;
}
#p1{
  font-size:300% ;
}
#p2{
  font-size: 300%;
  
}
p{
  text-shadow: -30px 0px 30px rgb(139, 139, 139);
}
</style>