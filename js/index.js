const serverURL = 'http://localhost:3000'

new Vue({
  el: '#app',
  data: {
    sounds: [],
  },
  created() {

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
    }
  }
})