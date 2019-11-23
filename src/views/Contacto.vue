<template>
  <div class="contacto">
    <full-page :options="options" id="fullpage" ref="fullpage">
      <div class="section" id="secc2">
        <h1>Contacto</h1>
      </div>
    </full-page>
  </div>
</template>

<script>
  export default {
    name: 'contacto',
    data: function(){
        return {
            options: {
                afterLoad: this.afterLoad,
                navigation: true,
                anchors: ['contacto', 'page2', 'page3'],
                sectionsColor: ['']
            },
        }
    }
};