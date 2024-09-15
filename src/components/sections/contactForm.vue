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
                <table class="table">
                  <tbody>
                    <tr>
                      <td class="label-cell"><label for="name">Name</label></td>
                      <td class="input-cell">
                        <input
                          type="text"
                          class="form-control bordered-input"
                          id="name"
                          v-model="name"
                          :class="{ 'is-invalid': nameError }"
                          required
                        />
                        <div class="invalid-feedback">{{ nameError }}</div>
                      </td>
                    </tr>
                    <tr>
                      <td class="label-cell"><label for="address">Address</label></td>
                      <td class="input-cell">
                        <input
                          type="text"
                          class="form-control bordered-input"
                          id="address"
                          v-model="address"
                          :class="{ 'is-invalid': addressError }"
                          required
                        />
                        <div class="invalid-feedback">{{ addressError }}</div>
                      </td>
                    </tr>
                    <tr>
                      <td class="label-cell"><label for="city">City</label></td>
                      <td class="input-cell">
                        <input
                          type="text"
                          class="form-control bordered-input"
                          id="city"
                          v-model="city"
                          :class="{ 'is-invalid': cityError }"
                          required
                        />
                        <div class="invalid-feedback">{{ cityError }}</div>
                      </td>
                    </tr>
                    <tr>
                      <td class="label-cell"><label for="state">State</label></td>
                      <td class="input-cell">
                        <input
                          type="text"
                          class="form-control bordered-input"
                          id="state"
                          v-model="state"
                          :class="{ 'is-invalid': stateError }"
                          required
                        />
                        <div class="invalid-feedback">{{ stateError }}</div>
                      </td>
                    </tr>
                    <tr>
                      <td class="label-cell"><label for="zipCode">Zip Code</label></td>
                      <td class="input-cell">
                        <input
                          type="text"
                          class="form-control bordered-input"
                          id="zipCode"
                          v-model="zipCode"
                          :class="{ 'is-invalid': zipCodeError }"
                          required
                        />
                        <div class="invalid-feedback">{{ zipCodeError }}</div>
                      </td>
                    </tr>
                    <tr>
                      <td class="label-cell"><label for="email">Email Address</label></td>
                      <td class="input-cell">
                        <input
                          type="email"
                          class="form-control bordered-input"
                          id="email"
                          v-model="email"
                          :class="{ 'is-invalid': emailError }"
                          required
                        />
                        <div class="invalid-feedback">{{ emailError }}</div>
                      </td>
                    </tr>
                    <tr>
                      <td class="label-cell"><label for="telephone">Telephone</label></td>
                      <td class="input-cell">
                        <input
                          type="text"
                          class="form-control bordered-input"
                          id="telephone"
                          v-model="telephone"
                          :class="{ 'is-invalid': telephoneError }"
                          required
                        />
                        <div class="invalid-feedback">{{ telephoneError }}</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div class="text-center">
                  <button type="submit" class="btn btn-primary mt-10">Send</button>
                </div>
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
.bordered-input {
  border: 1px solid var(--text-color); /* Add border to input fields */
  border-radius: 4px; /* Add slight rounding to the corners */
  background-color: var(--background-color); /* Ensure background color matches theme */
  color: var(--text-color); /* Ensure text color matches theme */
}
.label-cell, .input-cell {
  padding-left: 20px; /* Add left padding to table cells */
  padding-top: 5px; /* Add top padding to table cells */
}
.text-center {
  text-align: center;
}
@media (max-width: 600px) {
  .intro-main {
    padding: 10px;
  }
}
</style>