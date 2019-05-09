Vue.component('AudioRecorder', {
  data: function () {
    return {
      isRecording: false,
      isPaused: false,
      secondsElapsed: 0,
      timer: undefined,
      recorder: null,
      audioData: [],
      audioUrl: ''
    }
  },
  computed: {
    statusText: function () {
      return this.isPaused
        ? 'Paused'
        : this.isRecording
          ? 'Recording'
          : ''
    }
  },
  watch: {
    isRecording: function (recording, prev) {
      if (recording && prev === !recording) {
        this.setTimer()
        this.initRecorder()
      } else {
        this.isPaused = false
        this.secondsElapsed = 0
        this.recorder.stop()
        clearInterval(this.timer)
      }
    },
    isPaused: function (isPaused, prev) {
      if (isPaused && prev !== isPaused) {
        this.recorder.pause()
        clearInterval(this.timer)
      } else if (!isPaused && prev === isPaused) {
        this.recorder.resume()
        this.setTimer()
      }
    }
  },
  methods: {
    initRecorder: function () {
      this.audioData = []
      this.audioUrl = ''
      if (navigator.mediaDevices.getUserMedia) {
        console.log('getUserMedia supported.')
        navigator
          .mediaDevices
          .getUserMedia({ audio: true })
          .then(stream => {
            this.recorder = new MediaRecorder(stream)
            this.recorder.ondataavailable = (e) => {
              this.audioData.push(e.data)
            }
            this.recorder.onstop = (e) => {
              let blob = new Blob(this.audioData, {'type' : 'wav'})
              this.audioUrl = window.URL.createObjectURL(blob)
              this.$refs.player.src = this.audioUrl
              this.$refs.player.load()
              console.log(this.$refs.player)
            }
            this.recorder.start()
          })
          .catch(function(err) {
            console.log('The following getUserMedia error occured: ' + err);
          })
      } else {
        console.log('getUserMedia is not supported.')
      }
    },
    setTimer: function () {
      this.timer = setInterval(() => this.secondsElapsed += 1, 1000)
    },
    handleClickControl: function (command) {
      switch (command) {
        case 'record':
          this.isRecording = true
          break
        case 'pause':
          this.isPaused = true
          break
        case 'play':
          this.isPaused = false
          break
        default:
          this.isRecording = false
          break
      }
    }
  },
  template: `
    <div class="row">
      <div class="col-auto">
        <recorder-control
          :isRecording="isRecording"
          :isPaused="isPaused"
          @click="handleClickControl">
          <template #time-elapsed>
            <recorder-time :seconds="secondsElapsed" v-if="secondsElapsed"/>
          </template>
          <template #status-text>
            <span class="btn" v-if="statusText">{{ statusText }}</span>
          </template>
        </recorder-control>
      </div>
      <div class="col" v-show="audioUrl.length">
        <audio class="mt-1" ref="player" controls></audio>
      </div>
    </div>
  `
})
