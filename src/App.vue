<template>
  <div id="app">
    <div id="nav">
      <ul>
        <li><router-link to="/" class="heavy-2">Zarata Fest 13</router-link></li>
        <li><router-link to="/contacto" class="old">contacto</router-link></li>
        <li><router-link to="/acerca-de-zarata-fest" class="old">acerca de zarata fest</router-link></li>
      </ul>
    </div>
    <router-view/>

  </div>
</template>