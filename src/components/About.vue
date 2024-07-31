<template>
    <div class="about_div container">
        <br>
        <p class="about_p">About Me</p>
        <p class="about_p">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel placeat, nisi quisquam quidem quaerat illum, iure architecto sed tempora totam veniam illo eius. Hic eius deserunt perspiciatis, ab consequuntur asperiores.</p>
        <p class="about_p">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel placeat, nisi quisquam quidem quaerat illum, iure architecto sed tempora totam veniam illo eius. Hic eius deserunt perspiciatis, ab consequuntur asperiores.</p>
        <p class="ww">lllllllllllll</p>
    </div>
    
</template>

<script>
export default {
    name:'About',
    data(){
        return {
        }
    },
    mounted(){
        const observer = new IntersectionObserver(entries =>{
            console.log('ssss')
            entries.forEach((entry)=>{
                if (entry.isIntersecting){
                    entry.target.classList.add('about_p_s')
                    
                }
            })
            
        },
        
        
        )
        const Selements = document.querySelectorAll('.about_p')
        Selements.forEach((el)=>observer.observe(el))
    }
}
</script>

<style>
@keyframes side_image_a{
    0% {margin-top: 20%;}
    50% {margin-top:0% ;}
    100% {margin-top: 20%;}
}
@keyframes about_p_animation{
    from{opacity:0;margin-right: 50%;}
    to{opacity:1;margin-right:0% ;}
}
.ww{
    animation-name: ww_a;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
}
.about_p_s{
    animation-name: about_p_animation;
    animation-duration: 1.5s;
    opacity: 1;
}
</style>