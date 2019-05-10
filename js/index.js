const serverURL = 'http://localhost:3000'

new Vue({
  el: '#app',
  data: {
    sounds: [],
  },
  created() {
    this.fetchSounds();
  },

  methods: {
    fetchSounds() {
      axios({
        method: 'get',
        url: `${serverURL}/music`
      })
        .then(({ data }) => {
          this.sounds = data;
        })
        .catch(err => {
          Swal.fire({
            position: 'center',
            type: 'error',
            title: 'internal server error (500)',
            showConfirmButton: false,
            timer: 1500
          })
        })
    },

    uploadSound(formData) {
      axios({
        method: 'post',
        url: `${serverURL}/music`,
        data: formData
      })
        .then(({ data }) => {
          console.log(data);
          Swal.fire({
            position: 'center',
            type: 'success',
            title: 'your sound uploaded :)',
            showConfirmButton: false,
            timer: 1500
          })
          this.sounds.unshift(data);
        })
        .catch(err => {
          Swal.fire({
            position: 'center',
            type: 'error',
            title: 'internal server error (500)',
            showConfirmButton: false,
            timer: 1500
          })
        })
    }
  }
})