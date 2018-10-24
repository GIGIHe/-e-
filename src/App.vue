<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
a{
  text-decoration: none;
}
.mt{
  margin-top: 44px;
}
 li{
  list-style: none;
}
.a-cl{
  color: #333;
}
.clearfix::after{
  content: "";
  display: block;
  overflow: hidden;
  clear: both;
  height: 0;
}
.fz-12{
  font-size: 12px;
}
.fz-14{
  font-size: 14px;
}
.fz-16{
  font-size: 16px;
}
.fz-18{
  font-size: 18px;
}
.fz-20{
  font-size: 20px;
}
.cl-w{
  color: #fff;
}
.spiner {
    display: block;
    width: 0.75rem;
    margin: 0 auto;
  }
  .mb{
    text-align: center;
    height: 30px;
    line-height: 30px;
    background-color: #fff;
  }
</style>
