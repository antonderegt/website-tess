<template>
  <div class="image">
    <h1><router-link to="/">{{ msg }}</router-link></h1>
    <div class="box">
		<div class="head">
			<div class="head-copy"></div>
			<div class="ear-left">
			</div>
			<div class="ear-right">
			</div>
			<div class="trunk">
				<div class="wrinkle-1"></div>
				<div class="wrinkle-2"></div>
				<div class="wrinkle-3"></div>
				<div class="wrinkle-4"></div>
				<div class="wrinkle-5"></div>
				<div class="wrinkle-6"></div>
				<div class="wrinkle-7"></div>
				<div class="wrinkle-8"></div>
				<div class="wrinkle-9"></div>
			</div>
			<div class="eye-left">
				<div class="pupil"></div>
			</div>
			<div class="eye-right">
				<div class="pupil"></div>
			</div>
			<div class="tusk-left"></div>
			<div class="tusk-right"></div>
		</div>

		<div class="bubble-1"></div>
		<div class="bubble-2"></div>

		<div class="peanut-thougth">
			<div class="peanut">
				<div class="peanut-left"></div>
				<div class="peanut-right"></div>
				<div class="line-1"></div>
				<div class="line-2"></div>
				<div class="line-3"></div>
			</div>
		</div>
	</div>
  </div>
</template>

<script>
export default {
  name: 'image',
  data () {
    return {
      msg: 'Elephant longing for a large peanut'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

body{
  background: #EBCD93;
}

.box{
  position: relative;
  margin: auto;
  display: block;
  margin-top: 8%;
  width: 600px;
  height: 420px;
  background: #EBCD93;
}

.head {
	position: absolute;
	top: 16.5%;
	left: 35%;
	width: 30%;
	height: 50%;
	border-radius: 50%;
	background: gray;
}

.head-copy {
	position: absolute;
	width: 100%;
	height: 100%;
	border-radius: 50%;
	background: gray;
	z-index: 2;
}

.ear-left {
	position: absolute;
	top: 5%;
	left: -40%;
	width: 80%;
	height: 70%;
	border-radius: 20px 0 0 50px;
	background: darkgray;
	z-index: 1;
}

.ear-right {
	position: absolute;
	top: 5%;
	right: -40%;
	width: 80%;
	height: 70%;
	border-radius: 0 20px 50px 0;
	background: darkgray;
	z-index: 1;
}

.trunk {
	position: absolute;
	top: 50%;
	left: 40%;
	width: 20%;
	height: 100%;
	border-radius: 50px;
	background: darkgray;
	z-index: 2;
}

.wrinkle-1 {
	position: absolute;
	top: 10%;
	left: 10%;
	width: 80%;
	height: 3%;
	border-radius: 50%;
	background: gray;
}

.wrinkle-2 {
	position: absolute;
	top: 20%;
	left: 10%;
	width: 80%;
	height: 3%;
	border-radius: 50%;
	background: gray;
}

.wrinkle-3 {
	position: absolute;
	top: 30%;
	left: 10%;
	width: 80%;
	height: 3%;
	border-radius: 50%;
	background: gray;
}

.wrinkle-4 {
	position: absolute;
	top: 40%;
	left: 10%;
	width: 80%;
	height: 3%;
	border-radius: 50%;
	background: gray;
}

.wrinkle-5 {
	position: absolute;
	top: 50%;
	left: 10%;
	width: 80%;
	height: 3%;
	border-radius: 50%;
	background: gray;
}

.wrinkle-6 {
	position: absolute;
	top: 60%;
	left: 10%;
	width: 80%;
	height: 3%;
	border-radius: 50%;
	background: gray;
}

.wrinkle-7 {
	position: absolute;
	top: 70%;
	left: 10%;
	width: 80%;
	height: 3%;
	border-radius: 50%;
	background: gray;
}

.wrinkle-8 {
	position: absolute;
	top: 80%;
	left: 10%;
	width: 80%;
	height: 3%;
	border-radius: 50%;
	background: gray;
}

.wrinkle-9 {
	position: absolute;
	top: 90%;
	left: 10%;
	width: 80%;
	height: 3%;
	border-radius: 50%;
	background: gray;
}

.eye-left {
	position: absolute;
	top: 20%;
	left: 20%;
	width: 25%;
	height: 25%;
	background: white;
	border-radius: 50%;
	z-index: 3;
}

.eye-right {
	position: absolute;
	top: 20%;
	right: 20%;
	width: 25%;
	height: 25%;
	background: white;
	border-radius: 50%;
	z-index: 3;
}

.pupil {
	position: absolute;
	top: 25%;
	left: 25%;
	width: 30%;
	height: 30%;
	background: black;
	border-radius: 50%;
	z-index: 3;
}

.tusk-left {
	position: absolute;
	top: 90%;
	left: 15%;
	width: 25%;
	height: 40%;
	background: white;
	z-index: 1;
	-webkit-clip-path: polygon(69% 0, 100% 0%, 36% 78%, 0% 100%);
clip-path: polygon(69% 0, 100% 0%, 36% 78%, 0% 100%);
}

.tusk-right {
	position: absolute;
	top: 90%;
	right: 15%;
	width: 25%;
	height: 40%;
	background: white;
	z-index: 1;
	-webkit-clip-path: polygon(29% 0, 0 0, 69% 84%, 100% 100%);
clip-path: polygon(29% 0, 0 0, 69% 84%, 100% 100%);
}

.peanut-thougth {
	position: absolute;
	width: 30%;
	height: 30%;
	background: white;
	border-radius: 50%;
	z-index: 2
}

.bubble-1 {
	position: absolute;
	background: white;
	width: 5%;
	height: 5%;
	left: 30%;
	top: 20%;
	z-index: 2;
	border-radius: 50%;
}

.bubble-2 {
	position: absolute;
	background: white;
	width: 4%;
	height: 4%;
	left: 35%;
	top: 25%;
	z-index: 2;
	border-radius: 50%;
}

.peanut {
	position: absolute;
	top: 25%;
	left: 10%;
	width: 80%;
	height: 80%;
}

.peanut-left {
	position: absolute;
	left: 7%;
	width: 45%;
	height: 45%;
	border-radius: 50%;
	background: #F2A650;
	-webkit-transform: rotate(-7deg); /* Chrome, Safari, Opera */
  transform: rotate(-7deg);
}

.peanut-right {
	position: absolute;
	left: 45%;
	width: 50%;
	height: 50.5%;
	border-radius: 50%;
	background: #F2A650;
	-webkit-transform: rotate(-7deg); /* Chrome, Safari, Opera */
  transform: rotate(-7deg);
}

.line-1 {
	position: absolute;
	top: 8%;
	left: 15%;
	width: 80%;
	height: 20%;
	border-radius: 5px;
	background: #C1722D;
	-webkit-clip-path: polygon(48% 34%, 77% 46%, 100% 35%, 74% 50%, 47% 40%, 22% 54%, 0 39%, 0% 35%, 25% 48%);
clip-path: polygon(48% 34%, 77% 46%, 100% 35%, 74% 50%, 47% 40%, 22% 54%, 0 39%, 0% 35%, 25% 48%);
	-webkit-transform: rotate(-2deg); /* Chrome, Safari, Opera */
  transform: rotate(-2deg);
}

.line-2 {
	position: absolute;
	top: 15%;
	left: 10%;
	width: 90%;
	height: 20%;
	border-radius: 50%;
	background: #C1722D;
	-webkit-clip-path: polygon(48% 34%, 77% 46%, 100% 35%, 74% 50%, 47% 40%, 22% 54%, 0 39%, 0% 35%, 25% 48%);
clip-path: polygon(48% 34%, 77% 46%, 100% 35%, 74% 50%, 47% 40%, 22% 54%, 0 39%, 0% 35%, 25% 48%);
}

.line-3 {
	position: absolute;
	top: 24%;
	left: 15%;
	width: 80%;
	height: 20%;
	border-radius: 50%;
	background: #C1722D;
	-webkit-clip-path: polygon(48% 34%, 77% 46%, 100% 35%, 74% 50%, 47% 40%, 22% 54%, 0 39%, 0% 35%, 25% 48%);
clip-path: polygon(48% 34%, 77% 46%, 100% 35%, 74% 50%, 47% 40%, 22% 54%, 0 39%, 0% 35%, 25% 48%);
	-webkit-transform: rotate(2deg); /* Chrome, Safari, Opera */
  transform: rotate(2deg);
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
</style>
