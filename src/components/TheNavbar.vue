<template>
  <!-- Navbar Start -->
  <div class="container-fluid mb-5">
    <div class="row border-top px-xl-5">
      <div class="col-lg-3 d-none d-lg-block">
        <a
          class="
            btn
            shadow-none
            d-flex
            align-items-center
            justify-content-between
            bg-primary
            text-white
            w-100
          "
          data-toggle="collapse"
          href="#navbar-vertical"
          style="height: 65px; margin-top: -1px; padding: 0 30px"
        >
          <h6 class="m-0">Categories</h6>
          <em class="fa fa-angle-down text-dark"></em>
        </a>
        <nav
          class="
            collapse
            show
            navbar navbar-vertical navbar-light
            align-items-start
            p-0
            border border-top-0 border-bottom-0
          "
          id="navbar-vertical"
          aria-labelledby="categorynavheading"
        >
          <div class="navbar-nav w-100 overflow-hidden" style="height: 410px">
            <a href="" class="nav-item nav-link">Shirts</a>
          </div>
        </nav>
      </div>
      <div class="col-lg-9">
        <nav
          class="
            navbar navbar-expand-lg
            bg-light
            navbar-light
            py-3 py-lg-0
            px-0
          "
          aria-labelledby="mainnavheading"
        >
          <a href="" class="text-decoration-none d-block d-lg-none">
            <h1 class="m-0 display-5 font-weight-semi-bold">
              <span class="text-primary font-weight-bold border px-3 mr-1"
                >E</span
              >Commerce
            </h1>
          </a>
          <button
            type="button"
            class="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-between"
            id="navbarCollapse"
          >
            <div class="navbar-nav mr-auto py-0">
              <router-link :to="{ name: 'Home' }" class="nav-item nav-link"
                >Home</router-link
              >
              <router-link :to="{ name: 'Shop' }" class="nav-item nav-link"
                >Shop</router-link
              >
              <router-link :to="{ name: 'Contact' }" class="nav-item nav-link"
                >Contact</router-link
              >
            </div>
            <div class="navbar-nav ml-auto py-0">
              <router-link :to="{ name: 'Login' }" class="nav-item nav-link"
                >Login</router-link
              >
               <router-link :to="{ name: 'Register' }" class="nav-item nav-link"
                >Register</router-link
              >
            </div>
          </div>
        </nav>
        <div id="header-carousel" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active" style="height: 410px">
              <img
                class="img-fluid"
                src="assets/img/carousel-1.jpg"
                alt="Image"
              />
              <div
                class="
                  carousel-caption
                  d-flex
                  flex-column
                  align-items-center
                  justify-content-center
                "
              ></div>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#header-carousel"
            data-slide="prev"
          >
            <div class="btn btn-dark" style="width: 45px; height: 45px">
              <span class="carousel-control-prev-icon mb-n2"></span>
            </div>
          </a>
          <a
            class="carousel-control-next"
            href="#header-carousel"
            data-slide="next"
          >
            <div class="btn btn-dark" style="width: 45px; height: 45px">
              <span class="carousel-control-next-icon mb-n2"></span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
  <!-- Navbar End -->
</template>

<script>
export default {
  name: "nav-bar",
};
</script>

<style>
</style>