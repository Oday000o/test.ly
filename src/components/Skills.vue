<template>
  <br>
  <br>
  <div id="maindiv" class="skills_div_m container">
    <img  @click="fun('js_image')" id="js_image" class="side_image" src="../assets/jsimage.jpg">
    <img @click="fun('css_image')" id="css_image" class="side_image" src="../assets/cssimage.png">
    <img @click="fun('html_image')" id="html_image" class="side_image" src="../assets/htmlimage.png">
    <img @click="fun('_image')" id="_image" style="width:20%"class="side_image" src="../assets/vueimage.png">
    <img @click="fun('bootstrap_image')" id="bootstrap_image" class="side_image " src="../assets/bootstrapimage.png">
    <div class="skills_div shadow-lg" id="skillsdiv">
      <br>
      <p class="skill_p">html</p>
      <p class="skill_p">javascript</p>
      <p class="skill_p">bootstrap</p>
      <p class="skill_p">css</p>
      <p class="skill_p">vue</p>

      <br>
    </div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
  </div>

</template>

<script>
import sound from '../assets/skill_pressed_sound.mp3'


export default {
    
    name:'Skills',
  
    methods:{
      fun(q){
        const ele = document.getElementById(q)
        ele.style.animationPlayState='paused'
        const audio = new Audio(sound)
        audio.play()
        navigator.vibrate([500,500])
        this.funu(q)
      },
      funu(w){
        const ele = document.getElementById(w)
        setTimeout(() => {
          ele.style.animationPlayState='running'
        }, 1000);
        
      },

    },

    mounted(){
      const observer = new IntersectionObserver(entry=>{
        entry.forEach((entr)=>{
          if(entr.isIntersecting){
            entr.target.classList.add('skills_div_m_ayes')
            entr.target.classList.remove('skills_div_m')
          }


        })
      },{threshold:0.5});
      const selement = document.querySelectorAll('.skills_div_m')
      selement.forEach((el)=>observer.observe(el))
    }
}
</script>

<style>
@keyframes skills_div_m_a_e{
  from{opacity: 1;margin-top: 23%;}
  to {opacity: 0;margin-top: 30%}
}
@keyframes skills_div_m_a{
  from{opacity: 0;margin-top: 30%}
  to {opacity: 1;margin-top: 23%;}
}
@keyframes html_a{
    0%{transform: translateY(0px)}
    50% {transform: translateY(20px)}
    100%{transform: translateY(0px)}
}
@keyframes html_a_p{
    0%{transform: translateX(0px)}
    50% {transform: translateX(20px)}
    100%{transform: translateX(0px)}
}
.skills_div_m_ayes{
  animation-name: skills_div_m_a;
  animation-duration: 2s;
  margin-top: 23%;
  overflow: hidden;
  top: 100%;
  opacity: 1;
}
.skills_div_m{
  animation-name: skills_div_m_a_e;
  animation-duration: 1s;
  margin-top: 23%;
  overflow: hidden;
  top: 100%;
  opacity: 0;
  
}
.skills_div{
  margin-left: auto;
  margin-right: auto;
  width: 40%;
  background: linear-gradient(to left, #0f74c2,#055693,#062b47);
  border-radius: 30px;
}
.skill_p{
  color: white;
}
.side_image{
  position:relative;
  width:15% ;
  animation-name: html_a;
  animation-duration: 3s;
  animation-iteration-count: infinite;
}
.side_image_p{
  animation-name: html_a_p;
  animation-duration: 700ms;
}
#js_image{
  border-radius: 20%;
  left: 40px;
  bottom: -50px;
  animation-delay: 0.25s
}
#css_image{
  max-width: 17%;
  min-width: 17%;
  right: 3%;
  bottom:-300px;
  animation-delay: 0.5s
}
#bootstrap_image{
  top: 175px;
  min-width:25px;
  animation-delay: 0.25s
}
#vue_image{
  bottom:200px;
  left:50px;
  
}
#html_image{
  top: 300px;
  left: 20%;
  width:20%;
  animation-delay: 0.75s
}
</style>