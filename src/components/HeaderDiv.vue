<template>
  <nav class="navbar navbar-expand-md bg-primary shadow">
    <div class="container-fluid">
      <router-link id="navBrand" class="navbar-brand" to="/">protodo</router-link>
      <button
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
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item ">
             <router-link to="/" id="homebtn" class="mt-sm-3 animated-border-button nav-link active">Home</router-link>
          </li>
           <li class="nav-item">
            <router-link to="/tasks" id="taskbtn" class="mt-sm-3 animated-border-button nav-link active">tasks</router-link>
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

  padding: 0;
  color: gray;

}
#taskbtn{
   padding: 0;
  color: gray;
  margin-left: 20px;
}
.animated-border-button {
  background-color: #263059;
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
  border-top: 2px solid #263059;
  right: 0;
  top: -4px;
}

.animated-border-button:after {
  border-bottom: 2px solid #263059;
  bottom: -4px;
  left: 0;
}

.animated-border-button:hover:before,
.animated-border-button:hover:after {
  width: 100%;
}
#navBrand{
  font-size: x-large;
  font-weight: 600;
}
</style>