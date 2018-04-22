<template>
  <div id="app">
    <div class="header">
      <router-link to="/">
        <div class="box">
          <div class="bar-top"></div>
          <div class="bar-top-left"></div>
          <div class="bar-top-right"></div>
          <div class="bar-middle"></div>
        </div>
      </router-link>
      <div @click="animateHamburger" class="box">
        <div :class="hamburgerTop"></div>
        <div :class="hamburgerMiddle"></div>
        <div :class="hamburgerBottom"></div>
      </div>
    </div>

    <transition name="menuTransition">
      <div v-if="showMenu" class="menu">
        <ul>
          <li @click="animateHamburger"><router-link to="/">Home</router-link></li>
          <li class="dropdown">
            <a href="javascript:void(0)" class="dropbtn"><b>Erfrecht</b></a>
            <div class="dropdown-content" @click="animateHamburger">
              <router-link to="/erfrecht">Erfrecht 1</router-link>
              <router-link to="/erfrecht">Erfrecht 2</router-link>
              <router-link to="/erfrecht">Erfrecht 3</router-link>
            </div>
          </li>
          <li @click="animateHamburger"><router-link to="/blog">Recht 2</router-link></li>
          <li @click="animateHamburger"><router-link to="/blog">Recht 3</router-link></li>
          <li @click="animateHamburger"><router-link to="/contact">Contact</router-link></li>
        </ul>
      </div>
    </transition>

    <router-view class="routerView"></router-view>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      showMenu: false,
      burger: 'box',
      state: 'hamburger',
      hamburgerTop: 'hamburger-top',
      hamburgerMiddle: 'hamburger-middle',
      hamburgerBottom: 'hamburger-bottom'
    }
  },
  methods: {
    animateHamburger () {
      this.showMenu = !this.showMenu
      if (this.state === 'hamburger') {
        this.hamburgerTop = 'hamburger-top x-top'
        this.hamburgerMiddle = 'hamburger-middle x-middle'
        this.hamburgerBottom = 'hamburger-bottom x-bottom'
        this.state = 'x'
      } else {
        this.hamburgerTop = 'hamburger-top menu-top'
        this.hamburgerMiddle = 'hamburger-middle menu-middle'
        this.hamburgerBottom = 'hamburger-bottom menu-bottom'
        this.state = 'hamburger'
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: -8px -8px 0 -8px;
}

/* ----- Variables ----- */
:root {
  --menu-color: #254E70;
}

h1 {
  color: #37718E
}

.routerView {
  padding-top: 50px;
}

.header {
  position: fixed;
  width: 94%;
  padding: 0% 3% 0% 3%;
  background: #f9f9f9;
  opacity: 0.8;
  display: flex;
  justify-content: space-between;
}

ul {
  position: fixed;
  right: 0;
  list-style-type: none;
  margin: 50px 0 0 0;
  padding: 0;
  overflow: hidden;
  background-color: #D3D0CB;
  border: 1px solid #6E8898;
  width: 200px;
  opacity: 0.9;
}

li {
  float: center;
  width: 100%;
}

li a, .dropbtn {
  display: inline-block;
  color: #000;
  text-align: center;
  padding: 16px 16px;
  text-decoration: none;
}

li a:hover, .dropdown:hover .dropbtn {
  background-color: #6E8898;
  width: 170px;
}

li.dropdown {
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #9FB1BC;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  width: 100%;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: center;
}

.dropdown-content a:hover {
  background-color: #6E8898
}

.dropdown:hover .dropdown-content {
  display: block;
}

/* ----- Menu Show Animation ----- */
.menuTransition-enter-active {
  animation: slide-in .4s linear;
}

.menuTransition-leave-active {
  animation: slide-out .4s linear;
}

@keyframes slide-in {
  0% {
    transform: translateX(200px);
    opacity: 0;
  }
  100% {
    transform: translateX(0px);
    opacity: 0.9;
  }
}
@keyframes slide-out {
  0% {
    transform: translateX(0px);
    opacity: 0.9;
  }
  100% {
    transform: translateX(200px);
    opacity: 0;
  }
}

/* ----- T logo color animation ----- */

@keyframes pulse {
  0% {
    background-color: #2E5266;
  }
  33%{
    background-color: #9FB1BC;
  }
  66%{
    background-color: #6E8898;
  }
  100% {
    background-color: #2E5266;
  }
}

/* ----- Images box ----- */

.box {
  position: relative;
  margin: auto;
  display: block;
  width: 50px;
  height: 50px;
  padding: 0;
  margin: 0;
}

/* ----- Logo settings ----- */
#logo a {
  padding: 0;
  margin: 0;
}


/* ----- Hamburger Menu Button ----- */

.hamburger-top {
  position: absolute;
  top: 25%;
  left: 5%;
  width: 90%;
  height: 10%;
  border-radius: 10px;
  background: var(--menu-color);
}

.menu-top {
  animation: hamburgerTop .3s linear;
  transition-delay: .3s;
}

@keyframes hamburgerTop {
  0% {
    transform: translateY(12px) rotate(45deg);
  }
  100% {
    transform: translateY(0) rotate(0);
  }
}

.x-top {
  animation: xTop .3s .2s linear;
  transition-delay: .2s;
  transform: translateY(12px) rotate(45deg);
}

@keyframes xTop {
  0% {
    transform: translateY(0) rotate(0);
  }
  100% {
    transform: translateY(12px) rotate(45deg);
  }
}

.hamburger-middle {
  position: absolute;
  top: 50%;
  left: 5%;
  width: 90%;
  height: 10%;
  border-radius: 10px;
  background: var(--menu-color);
}

.menu-middle {
  animation: hamburgerMiddle .3s .3s linear;
  transition-delay: .3s;
}

@keyframes hamburgerMiddle {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.x-middle {
  opacity: 0;
  animation: xMiddle .3s linear;
}

@keyframes xMiddle {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.hamburger-bottom {
  position: absolute;
  top: 75%;
  left: 5%;
  width: 90%;
  height: 10%;
  border-radius: 10px;
  background: var(--menu-color);
}


.menu-bottom {
  animation: hamburgerBottom .3s linear;
  transition-delay: .3s;
}

@keyframes hamburgerBottom {
  0% {
    transform: translateY(-12px) rotate(-45deg);
  }
  100% {
    transform: translateY(0) rotate(0);
  }
}

.x-bottom {
  transition-delay: .2s;
  transform: translateY(-12px) rotate(-45deg);
  animation: xBottom .3s .2s linear;
}

@keyframes xBottom {
  0% {
    transform: translateY(0) rotate(0);
  }
  100% {
    transform: translateY(-12px) rotate(-45deg);
  }
}

/* ----- T logo ----- */

.bar-top {
  position: absolute;
  top: 17%;
  left: 12.5%;
  width: 75%;
  height: 10%;
  border-radius: 10px;
  background: var(--menu-color);
  animation: pulse 5s infinite;
}

.bar-top-left {
  position: absolute;
  top: 9.5%;
  left: 12.5%;
  width: 10%;
  height: 37.5%;
  border-radius: 10px;
  background: var(--menu-color);
  animation: pulse 5s infinite;
}

.bar-top-right {
  position: absolute;
  top: 9.5%;
  right: 12.5%;
  width: 10%;
  height: 37.5%;
  border-radius: 10px;
  background: var(--menu-color);
  animation: pulse 5s infinite;
}

.bar-middle {
  position: absolute;
  top: 17%;
  left: 44%;
  width: 12%;
  height: 75%;
  border-radius: 10px;
  background: var(--menu-color);
  animation: pulse 5s infinite;
}
</style>
