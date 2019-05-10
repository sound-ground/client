const serverURL = 'http://api.sound-ground.afdallismen.me'

new Vue({
  el: '#app',
  data: {
    sounds: [],
    loading: false,
    filtered: [],
  },
  created() {
    this.fetchSounds();
  },

  methods: {
    search(key) {
      if (!key) {
        this.filtered = this.sounds;
      } else {
        this.filtered = this.sounds.filter(sound => sound.title.toLowerCase().match(key.toLowerCase()));
      }
    },

    fetchSounds() {
      axios({
        method: 'get',
        url: `${serverURL}/music`
      })
        .then(({ data }) => {
          this.sounds = data;
          this.filtered = this.sounds;
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
      this.loading = true;
      axios({
        method: 'post',
        url: `${serverURL}/music`,
        data: formData
      })
        .then(({ data }) => {
          this.loading = false,
          console.log(data);
          if (data.url) {
            Swal.fire({
              position: 'center',
              type: 'success',
              title: 'your sound uploaded :)',
              showConfirmButton: false,
              timer: 1500
            })
          } else {
            Swal.fire({
              position: 'center',
              type: 'success',
              title: 'no sound uploaded! :p',
              showConfirmButton: false,
              timer: 1500
            })
          }
          this.sounds.unshift(data);
        })
        .catch(err => {
          this.loading = false,
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