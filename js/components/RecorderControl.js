Vue.component('RecorderControl', {
  props: ['isRecording', 'isPaused'],
  template: `
    <div>
      <button
        class="btn btn-lg"
        @click.prevent="$emit('click', 'record')"
        v-if="!isRecording"
      >
        <i class="fa fa-microphone"></i>
        Record
      </button>
      <template v-else>
        <button
          class="btn btn-lg"
          @click="$emit('click', 'pause')"
          v-if="!isPaused"
        >
          <i class="fa fa-pause-circle"></i>
          Pause
        </button>
        <button
          class="btn btn-lg"
          @click="$emit('click', 'play')"
          v-else
        >
          <i class="fa fa-play-circle"></i>
          Play
        </button>
        <button
          class="btn btn-lg"
          @click="$emit('click', 'stop')"
        >
          <i class="fa fa-stop-circle"></i>
          Stop
        </button>
      </template>
      <slot name="time-elapsed"></slot>
      <slot name="status-text"></slot>
    </div>
  `
})
