<template>
  <div id="app">
    <router-link :to="{ name: 'Index', params: {} }"><h1>Mevn boilerplate</h1></router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
  box-sizing: border-box;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.col-50 {
  width: 50%;
  display: inline-block;
  float: left;
}

.form .wide-input, .form textarea {
  width: 500px;
  padding: 10px;
  border: 1px solid #e0dede;
  outline: none;
  font-size: 12px;
  max-width: 100%;
}
.form > div{
  margin: 20px;
}
.form .list div {
  margin: 20px 0;
}
.form .list {
  width: 500px;
  margin: 0 auto;
  border: 1px solid #e0dede;
  padding: 10px;
}
.message {
  border: 1px solid #e0dede;
  padding: 0 4px;
}
.btn {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  width: 100%;
  border: none;
  cursor: pointer;
}
.submenu-link {
  margin: 0 16px;
}
.table-wrap {
  overflow-x: auto;
}
.table-wrap table {
  margin: 16px auto;
  width: 100%;
}
table thead {
  background: #f2f2f2;
}
table tr:nth-child(odd) {
  background: #f2f2f2;
}
table tr:nth-child(1) {
  background: #4d7ef7;
  color: #fff;
}
a.link {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
}
.action-button {
  background: #4d7ef7;
  color: white;
  padding: 10px 24px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  margin: 8px 0;
}
</style>
