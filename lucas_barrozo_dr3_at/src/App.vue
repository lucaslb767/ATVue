<template>
  <div id="app" class="container">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  name: "app",
  components: {
    Header
  }
};
</script>

<style>
body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, Helvetica,
    sans-serif;
  line-height: 1.6;
  background: #ffffff;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
