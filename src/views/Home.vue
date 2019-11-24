<template>
  <div class="home">
    <div id="nav-2">
      <ul class="old">
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
        <h1 class="heavy">Zarata Fest<br/> 
          <span class="circulo">13</span></h1>
      </div>
      <div class="section" id="pg2">
        <div class="slide">
          <h2 class="old title">AUNKIHEXUN II</h2>
        </div>
        <div class="slide">
          <h3>Slide 2.2</h3>
        </div>
        <div class="slide">
          <h3>Slide 2.3</h3>
        </div>
      </div>
      <div class="section">
        <h2 class="old title">ETHER</h2>
      </div>
      <div class="section">
        <h2 class="old title">INHUMANKIND</h2>
      </div>
      <div class="section">
        <h2 class="old title">DISOLVS III</h2>
      </div>
      <div class="section">
        <h2 class="old title">GARAZI NAVAS</h2>
      </div>
      <div class="section">
        <h2 class="old title">SERPIENTE</h2>
      </div>
      <div class="section">
        <h2 class="old title">DELUSION OF DEATH</h2>
      </div>
      <div class="section">
        <h2 class="old title">BLACK FLOWER</h2>
      </div>
      <div class="section">
        <h2 class="old title">MMMD</h2>
      </div>
      <div class="section">
        <h2 class="old title">IVANKOVÀ</h2>
      </div>
      <div class="section">
        <h2 class="old title">TOTENGOTT</h2>
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
                navigation: false,
                anchors: ['', 'aunkihexun-ii', 'ether', "inhumankind", "disolvs-iii", "garazi-navas", "serpiente", "delusion-of-death", "black-flower", "mmmd", "ivankova", "totengott"],
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