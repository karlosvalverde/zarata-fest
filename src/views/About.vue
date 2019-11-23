<template>
  <div class="acerca-de-zarata-fest">
    <full-page :options="options" id="fullpage" ref="fullpage">
      <div class="section" id="secc3">
        <h1>Acerca de Zarata Fest</h1>
      </div>
    </full-page>
  </div>
</template>

<script>
  export default {
    name: 'acerca-de-zarata-fest',
    data: function(){
        return {
            options: {
                afterLoad: this.afterLoad,
                navigation: true,
                anchors: ['acerca-de-zarata-fest'],
                sectionsColor: ['']
            },
        }
    }
};