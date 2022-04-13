<template>
  <!-- Footer Start -->
  <div class="container-fluid bg-secondary text-dark mt-4 pt-3">
      <div class="col-lg-12 text-center text-lg-right">
        <div class="d-inline-flex align-items-center">
          <a class="text-dark px-2" href="">
            <em class="fab fa-facebook-f"></em>
          </a>
          <a class="text-dark px-2" href="">
            <em class="fab fa-twitter"></em>
          </a>
          <a class="text-dark px-2" href="">
            <em class="fab fa-linkedin-in"></em>
          </a>
          <a class="text-dark px-2" href="">
            <em class="fab fa-instagram"></em>
          </a>
      </div>
    </div>
    <div class="row px-xl-5 pt-4">
      <div class="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
        <a href="" class="text-decoration-none">
          <h1 class="mb-4 display-5 font-weight-semi-bold">
            <span
              class="
                text-primary
                font-weight-bold
                border border-white
                px-3
                mr-1
              "
              >E</span
            >Commerce
          </h1>
        </a>
        <p>
          Dolore erat dolor sit lorem vero amet. Sed sit lorem magna, ipsum no
          sit erat lorem et magna ipsum dolore amet erat.
        </p>
        <p class="mb-2">
          <em class="fa fa-map-marker-alt text-primary mr-3"></em>123 Street,
          Tunis, Tunisia
        </p>
        <p class="mb-2">
          <em class="fa fa-envelope text-primary mr-3"></em>info@example.com
        </p>
        <p class="mb-0">
          <em class="fa fa-phone-alt text-primary mr-3"></em>+216 000 0000
        </p>
      </div>
      <div class="col-lg-8 col-md-12">
        <div class="row">
          <div class="col-md-4 mb-5">
            <h5 class="font-weight-bold text-dark mb-4">Quick Links</h5>
            <div class="d-flex flex-column justify-content-start">
              <router-link :to="{ name: 'Home' }" class="nav-item nav-link"
                >Home</router-link
              >
              <router-link :to="{ name: 'Shop' }" class="nav-item nav-link"
                >Shop</router-link
              >
              <router-link :to="{ name: 'Contact' }" class="nav-item nav-link"
                >Contact Us</router-link
              >
              <a class="text-dark mb-2" href="cart.html"
                ><em class="fa fa-angle-right mr-2"></em>Shopping Cart</a
              >
              <a class="text-dark mb-2" href="checkout.html"
                ><em class="fa fa-angle-right mr-2"></em>Checkout</a
              >
            </div>
          </div>

          <div class="col-md-4 mb-5">
            <h5 class="font-weight-bold text-dark mb-4">Newsletter</h5>
            <form action="">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control border-0 py-4"
                  placeholder="Your Name"
                  required="required"
                />
              </div>
              <div class="form-group">
                <input
                  type="email"
                  class="form-control border-0 py-4"
                  placeholder="Your Email"
                  required="required"
                />
              </div>
              <div>
                <button
                  class="btn btn-primary btn-block border-0 py-3"
                  type="submit"
                >
                  Subscribe Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="row border-top border-light mx-xl-5 py-4">
      <div class="col-md-6 px-xl-0">
        <p class="mb-md-0 text-center text-md-left text-dark">
          &copy;
          <a class="text-dark font-weight-semi-bold" href="#">E-commerce</a>.
          All Rights Reserved.
        </p>
      </div>
      <div class="col-md-6 px-xl-0 text-center text-md-right">
        <img class="img-fluid" src="assets/img/payments.png" alt="" />
      </div>
    </div>
  </div>
  <!-- Footer End -->
</template>

<script>
export default {
  name: "the-footer",
};
</script>

<style>
</style>