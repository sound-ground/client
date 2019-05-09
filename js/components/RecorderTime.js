Vue.component('RecorderTime', {
  props: ['seconds'],
  computed: {
    toMinutes: function () {
      return (new Date(this.seconds * 1000))
        .toUTCString()
        .match(/(\d\d:\d\d:\d\d)/)[0]
    }
  },
  template: `<span class="btn">{{ toMinutes }}</span>`
})
