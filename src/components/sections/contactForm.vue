<template>
  <div class="intro-main mt-3">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card rounded shadow-sm">
            <div class="card-header text-white">
            </div>
            <div class="card-body">
              <form ref="form" @submit.prevent="submit">
                <div class="form-group">
                  <label for="name">Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    v-model="name"
                    :class="{ 'is-invalid': nameError }"
                    required
                  />
                  <div class="invalid-feedback">{{ nameError }}</div>
                </div>
                <div class="form-group">
                  <label for="address">Address</label>
                  <input
                    type="text"
                    class="form-control"
                    id="address"
                    v-model="address"
                    :class="{ 'is-invalid': addressError }"
                    required
                  />
                  <div class="invalid-feedback">{{ addressError }}</div>
                </div>
                <div class="form-group">
                  <label for="city">City</label>
                  <input
                    type="text"
                    class="form-control"
                    id="city"
                    v-model="city"
                    :class="{ 'is-invalid': cityError }"
                    required
                  />
                  <div class="invalid-feedback">{{ cityError }}</div>
                </div>
                <div class="form-group">
                  <label for="state">State</label>
                  <input
                    type="text"
                    class="form-control"
                    id="state"
                    v-model="state"
                    :class="{ 'is-invalid': stateError }"
                    required
                  />
                  <div class="invalid-feedback">{{ stateError }}</div>
                </div>
                <div class="form-group">
                  <label for="zipCode">Zip Code</label>
                  <input
                    type="text"
                    class="form-control"
                    id="zipCode"
                    v-model="zipCode"
                    :class="{ 'is-invalid': zipCodeError }"
                    required
                  />
                  <div class="invalid-feedback">{{ zipCodeError }}</div>
                </div>
                <div class="form-group">
                  <label for="email">Email Address</label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    v-model="email"
                    :class="{ 'is-invalid': emailError }"
                    required
                  />
                  <div class="invalid-feedback">{{ emailError }}</div>
                </div>
                <div class="form-group">
                  <label for="telephone">Telephone Number</label>
                  <input
                    type="text"
                    class="form-control"
                    id="telephone"
                    v-model="telephone"
                    :class="{ 'is-invalid': telephoneError }"
                    required
                  />
                  <div class="invalid-feedback">{{ telephoneError }}</div>
                </div>
                <button type="submit" class="btn btn-primary mt-10">Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactForm',
  data() {
    return {
      name: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
      email: '',
      telephone: '',
      nameError: '',
      addressError: '',
      cityError: '',
      stateError: '',
      zipCodeError: '',
      emailError: '',
      telephoneError: '',
    }
  },
  methods: {
    submit() {
      this.clearErrors();
      if (this.validateForm()) {
        // Handle form submission
        alert('Form submitted successfully!');
      }
    },
    clearErrors() {
      this.nameError = '';
      this.addressError = '';
      this.cityError = '';
      this.stateError = '';
      this.zipCodeError = '';
      this.emailError = '';
      this.telephoneError = '';
    },
    validateForm() {
      let valid = true;
      if (!this.name) {
        this.nameError = 'Name is required';
        valid = false;
      }
      if (!this.address) {
        this.addressError = 'Address is required';
        valid = false;
      }
      if (!this.city) {
        this.cityError = 'City is required';
        valid = false;
      }
      if (!this.state) {
        this.stateError = 'State is required';
        valid = false;
      }
      if (!this.zipCode || !/^\d{5}(-\d{4})?$/.test(this.zipCode)) {
        this.zipCodeError = 'Zip Code must be valid';
        valid = false;
      }
      if (!this.email || !/.+@.+\..+/.test(this.email)) {
        this.emailError = 'Email must be valid';
        valid = false;
      }
      if (!this.telephone || !/^\d{10}$/.test(this.telephone)) {
        this.telephoneError = 'Telephone Number must be valid';
        valid = false;
      }
      return valid;
    }
  }
}
</script>

<style scoped>
.intro-main {
  width: 100%;
  min-height: 60vh; /* Ensure it covers the full viewport height */
  background-color: var(--background-color);
  color: var(--text-color);
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  align-items: top;
  justify-content: center;
}
.card {
  border-radius: 15px; /* Rounded corners */
}
@media (max-width: 600px) {
  .intro-main {
    padding: 10px;
  }
}
</style>