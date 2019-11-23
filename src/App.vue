<template>
  <div id="app">
    <div id="nav">
      <router-link @click="$refs.fullpage.api.moveTo(1,0)" to="/">Zarata Fest XIII</router-link> |
      <router-link to="/contacto">Contacto</router-link> |
      <router-link to="/acerca-de-zarata-fest">Acerca de Zarata Fest</router-link>
      
    </div>
    <router-view/>

  </div>
</template>

