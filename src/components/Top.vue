<template>
  <div class='topping_div shadow-lg'>
    <br>
    <br>
    <p id="mainp" @mouseover="mouse_over_p('mainp')" @mouseleave="mouse_le_p('mainp')" class="topping_p">Hi, I'm Oday </p>
    <br>
    <p id="posp" @mouseover="mouse_over_p('posp')" @mouseleave="mouse_le_p('posp')" class="pos_p">Libya, Sabha </p>
    <img @click="image_fun1('toppingimage')" class="topping_image" id="toppingimage" src="../assets/profile.jpg">
    <p class="job_p">Frontend Developer</p>
  </div>
</template>

<script>
import sound from '../assets/image_pressed_s.wav'
export default {
    name:'Top',
    methods:{
    image_fun1(q){
      const ele = document.getElementById(q)
      ele.animate([{transform:'scale(1,1)'},{transform:'scale(1.1,1.1)'},{transform:'scale(1,1)'}],{duration:300})
      var soun = new Audio(sound)
      soun.play()
    },
    mouse_over_p(q){
      const ele = document.getElementById(q)
      ele.style.animationName='p_onm'
      ele.style.animationDuration='500ms'
      ele.style.textShadow=' 0px 0px 15px black'
      ele.style.transform='scale(1.2,1.2)'
    },
    mouse_le_p(q){
      const ele = document.getElementById(q)
      ele.style.animationName='p_onl'
      ele.style.animationDuration='500ms'
      ele.style.textShadow='none'
      ele.style.transform='scale(1,1)'
    },
    }
}
</script>

<style>
@keyframes p_onl{
    from{text-shadow: 0px 0px 15px black;transform:scale(1.2,1.2)}
    to {text-shadow:none;transform:scale(1,1)}
}
@keyframes p_onm{
    from {text-shadow:none;transform:scale(1,1)}
    to{text-shadow: 0px 0px 15px black;transform:scale(1.2,1.2)}
}
@keyframes topping_p_a{
    from{font-size: 0%}
    to{font-size: 300%;}
}
@keyframes topping_image_a{
    from{opacity:0;font-size: 0%}
    to{opacity:1;width:30%}
}
.topping_div{
  width: 100%;
  background-image: url('../assets/background.jpg');
  height: 400px;
}
.topping_p{
  color:white;
  font-size:300%;
  width: fit-content;
  animation-name:topping_p_a;
  animation-duration: 1.5s;
  margin: auto;

}
.pos_p{
  color:white;
  font-size: large;
  width: fit-content;
  margin: auto;
}
.topping_image{
  margin-top: 3%;
  border-radius: 50%;
  width:30%;
  animation-name:topping_image_a;
  animation-duration: 1.5s;
  box-shadow: -7px 0px 20px black;
}

.job_p{
  margin-top: 1%;
  font-style: italic;
  color: black;
  text-shadow: 2px 2px 2px #b3fbfb;
}
</style>