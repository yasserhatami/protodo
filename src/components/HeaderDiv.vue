<template>
  <nav class="navbar navbar-expand-md shadow p-0">
    <div class="container-fluid">
      <router-link id="navBrand" class="navbar-brand" to="/">ProToDo</router-link>
      <button id="collapsbtn"
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ml-5">
          <li class="nav-item mt-1 mt-lg-0 ">
             <router-link to="/" id="homebtn" class=" animated-border-button nav-link">Home</router-link>
          </li>
           <li class="nav-item mt-1 mt-lg-0 ">
            <router-link to="/tasks" id="taskbtn" class="  animated-border-button nav-link">Tasks</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
#homebtn{

  padding: 0 3px ;
  color:  whitesmoke;
  margin-left: 20px;
}
@media only screen and (max-width: 768px) {
 #homebtn {
    margin-left: 0;
  }
}
#taskbtn{
   padding: 0 3px ;
   
  color: whitesmoke;
  margin-left: 20px;
}

@media only screen and (max-width: 768px) {
  #taskbtn {
    margin-left: 0;
  }
}
.animated-border-button {
  background-color: #190061;
  border: none;
  color: #ffffff;
  outline: none;
  padding: 12px 40px 10px;
  position: relative;
}

.animated-border-button:before,
.animated-border-button:after {
  border: 0 solid transparent;
  transition: all 0.3s;
  content: '';
  height: 0;
  position: absolute;
  width: 24px;
}

.animated-border-button:before {
  border-top: 2px solid #4f5fa0;
  right: 0;
  top: -4px;
}

.animated-border-button:after {
  border-bottom: 2px solid #4f5fa0;
  bottom: -4px;
  left: 0;
}

.animated-border-button:hover:before,
.animated-border-button:hover:after {
  width: 100%;
}
#navBrand{
  font-size: x-large;
  font-weight: 700;
  color: #3c09d4 !important;
}
.navbar{
  background-color: #0c0032;
  
}
.router-link-active{
  color: rgb(240, 83, 83) !important;
}
#collapsbtn{
  background-color: #3c09d4;
}
.navbar-toggler-icon{
   height: 10px;
   width: 15px;
}
</style>