<template>
  <div class="home">
    <div id="nav-2">
      <ul>
      <li @click="$refs.fullpage.api.moveTo(2,0)">AUNKIHEXUN II</li>
      <li @click="$refs.fullpage.api.moveTo(3,0)">ETHER</li>
      <li @click="$refs.fullpage.api.moveTo(4,0)">INHUMANKIND</li>
      <li @click="$refs.fullpage.api.moveTo(5,0)">DISOLVS III</li>
      <li @click="$refs.fullpage.api.moveTo(6,0)">GARAZI NAVAS</li>
      <li @click="$refs.fullpage.api.moveTo(7,0)">SERPIENTE</li>
      <li @click="$refs.fullpage.api.moveTo(8,0)">DELUSION OF DEATH</li>
      <li @click="$refs.fullpage.api.moveTo(9,0)">BLACK FLOWER</li>
      <li @click="$refs.fullpage.api.moveTo(10,0)">MMMD</li>
      <li @click="$refs.fullpage.api.moveTo(11,0)">IVANKOVÀ</li>
      <li @click="$refs.fullpage.api.moveTo(12,0)">TOTENGOTT</li>
      </ul>
    </div>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> 
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <full-page :options="options" id="fullpage" ref="fullpage">
      <div class="section" id="secc1">
        <h1 class="heavy">zarata fest<br/> 
          <span class="circulo">13</span></h1>
      </div>
      <div class="section" id="pg2">
        <div class="slide">
          <h3>AUNKIHEXUN II</h3>
        </div>
        <div class="slide">
          <h3>Slide 2.2</h3>
        </div>
        <div class="slide">
          <h3>Slide 2.3</h3>
        </div>
      </div>
      <div class="section">
        <h2>ETHER</h2>
      </div>
      <div class="section">
        <h2>INHUMANKIND</h2>
      </div>
      <div class="section">
        <h2>DISOLVS III</h2>
      </div>
      <div class="section">
        <h2>GARAZI NAVAS</h2>
      </div>
      <div class="section">
        <h2>SERPIENTE</h2>
      </div>
      <div class="section">
        <h2>DELUSION OF DEATH</h2>
      </div>
      <div class="section">
        <h2>BLACK FLOWER</h2>
      </div>
      <div class="section">
        <h2>MMMD</h2>
      </div>
      <div class="section">
        <h2>IVANKOVÀ</h2>
      </div>
      <div class="section">
        <h2>TOTENGOTT</h2>
      </div>
    </full-page>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data: function(){
        return {
            options: {
                afterLoad: this.afterLoad,
                navigation: true,
                anchors: ['home', 'aunkihexun-ii', 'ether', "inhumankind", "disolvs-iii", "garazi-navas", "serpiente", "delusion-of-death", "black-flower", "mmmd", "ivankova", "totengott"],
                menu: ["#nav", "#nav2"],
                loopHorizontal: false,
            },
        }
    }
};

// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
/*
export default {
  name: 'home',
  components: {
    //HelloWorld
  }
}*/
</script>

<style>
@import "https://unpkg.com/fullpage.js/dist/fullpage.min.css";
@import "../styles.css";
</style>