<template>
  <div id="app">
    <div class="header">
      <router-link to="/">
        <div @click="animateLogo" :class="logoClass">
          <div class="bar-top"></div>
          <div class="bar-top-left"></div>
          <div class="bar-top-right"></div>
          <div class="bar-middle"></div>
        </div>
      </router-link>
    </div>

    <div class="hamburgerRight">
      <div @click="animateHamburger" class="box boxRight">
        <div :class="hamburgerTop"></div>
        <div :class="hamburgerMiddle"></div>
        <div :class="hamburgerBottom"></div>
      </div>
    </div>

    <aside :class="sidebar">
      <ul class="menu">
        <li class="menu__item" @click="animateHamburger">
          <router-link class="menu__link" to="/">Home</router-link>
        </li>
        <!-- <li class="menu__item dropdown">
        <a href="javascript:void(0)" class="menu__link dropbtn"><b>Erfrecht</b></a>
        <div class="dropdown-content" @click="animateHamburger">
        <router-link class="menu__link" to="/erfrecht">Erfrecht 1</router-link>
        <router-link class="menu__link" to="/erfrecht">Erfrecht 2</router-link>
        <router-link class="menu__link" to="/erfrecht">Erfrecht 3</router-link>
      </div>
    </li> -->
        <li class="menu__item" @click="animateHamburger"><router-link class="menu__link" to="/erfrecht">Erfrecht</router-link></li>
        <li class="menu__item" @click="animateHamburger"><router-link class="menu__link" to="/blog">Recht</router-link></li>
        <li class="menu__item" @click="animateHamburger"><router-link class="menu__link" to="/contact">Contact</router-link></li>
      </ul>
    </aside>

    <transition name="fade" mode="out-in">
      <router-view class="routerView"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      showMenu: false,
      logoClass: 'box',
      state: 'hamburger',
      hamburgerTop: 'hamburger-top',
      hamburgerMiddle: 'hamburger-middle',
      hamburgerBottom: 'hamburger-bottom',
      sidebar: 'sidebar'
    }
  },
  methods: {
    animateHamburger () {
      this.showMenu = !this.showMenu
      this.logoClass = 'box'
      if (this.state === 'hamburger') {
        this.hamburgerTop = 'hamburger-top x-top'
        this.hamburgerMiddle = 'hamburger-middle x-middle'
        this.hamburgerBottom = 'hamburger-bottom x-bottom'
        this.sidebar = 'sidebar showSidebar'
        this.state = 'x'
      } else {
        this.hamburgerTop = 'hamburger-top menu-top'
        this.hamburgerMiddle = 'hamburger-middle menu-middle'
        this.hamburgerBottom = 'hamburger-bottom menu-bottom'
        this.sidebar = 'sidebar'
        this.state = 'hamburger'
      }
    },
    animateLogo () {
      this.logoClass = 'box animateLogo'
    }
  }
}
</script>

<style>
#app {
  font-family: BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: -8px -8px 0 -8px;
}



h1 {
  color: #2c3e50;
}

/* ----- Variables ----- */
:root {
  --menu-color: Tomato;
  --sidebar-width: 300px;
  --toggler-size: 40px;
}

.sidebar {
  width: var(--sidebar-width);
  transform: translateY(calc(var(--sidebar-width) * -3));
  background: linear-gradient(to bottom left, Tomato, Wheat);
  background-size: 400% 400%;
  background-position: 90% 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  opacity: .5;
  transition: transform .6s, background-position 1s .6s;
  z-index: 0;
}

.showSidebar {
  opacity: .9;
  transform: translateX(0);
  background-position: 0 0;
}

.menu {
  list-style-type: none;
}

.menu__link {
  color: white;
  font-weight: 100;
  text-decoration: none;
  font-size: 3rem;
  line-height: 5rem;
}

.menu__link:hover,
.menu__link:focus,
.menu__link:active {
  color: Gold;
}

.hamburgerRight {
  position: fixed;
  right: 3%;
  z-index: 1;
}

@keyframes slidein {
  from {left: -200%; right:200%;}
  to {left: 0; right: 0;}
}

/* ----- routerView with animations ----- */

.routerView {
  padding-top: 50px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}

/* ----- ----- */

.header {
  position: fixed;
  width: 94%;
  padding: 0% 3% 0% 3%;
  background: #f9f9f9;
  opacity: 0.8;
  display: flex;
  justify-content: space-between;
}

.dropdown-content {
  display: none;
  position: absolute;
  left: 0;
  background-color: Tomato;
  opacity: .9;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  width: 100%;
}

.dropdown-content a {
  color: black;
  text-decoration: none;
  display: block;
  text-align: center;
}


.dropdown:hover .dropdown-content {
  display: block;
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
  cursor: pointer;
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
  background: Wheat;
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
  background: Wheat;
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
  animation: pulse 5s infinite linear;
}

.bar-top-left {
  position: absolute;
  top: 9.5%;
  left: 12.5%;
  width: 10%;
  height: 37.5%;
  border-radius: 10px;
  background: var(--menu-color);
  animation: pulse 5s infinite linear;
}

.bar-top-right {
  position: absolute;
  top: 9.5%;
  right: 12.5%;
  width: 10%;
  height: 37.5%;
  border-radius: 10px;
  background: var(--menu-color);
  animation: pulse 5s infinite linear;
}

.bar-middle {
  position: absolute;
  top: 17%;
  left: 44%;
  width: 12%;
  height: 75%;
  border-radius: 10px;
  background: var(--menu-color);
  animation: pulse 5s infinite linear;
}

.animateLogo {
  animation: spinX .7s linear;
}

@keyframes spinX {
  0% {
    transform: rotateZ(0deg);
  }
  50% {
    transform: rotateZ(70deg);
  }
  100% {
    transform: rotateZ(-360deg);
  }
}

@keyframes pulse {
  0% {
    background-color: #FF6347;
  }
  33%{
    background-color: #DBC6A0;
  }
  66%{
    background-color: #FF5132;
  }
  100% {
    background-color: #FF3B19;
  }
}
</style>
