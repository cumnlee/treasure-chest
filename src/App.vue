<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
  #app {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: red;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 800;
  }
</style>
