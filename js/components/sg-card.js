Vue.component('sg-card', {
  props: ['sound'],
  data() {
    return {

    }
  },
  template: `
  <div>
    <div class="card mb-3">
      <div class="card-body">
        <h5 class="card-title">{{ sound.title }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Created at: {{ sound.createdAt.toString() }}</h6>
        <p> {{ sound.url }} </p>
        <div class="col-sm-12 col-sm-offset-4">
          <audio :src="sound.url" controls class="block">
          </audio>
        </div>
        <br>
        <div id="fb-root"></div>

        <div class="fb-share-button" :data-href="sound.url"
          data-layout="button_count">
        </div>
        <a href="#" class="card-link">SHARE <i class="fas fa-share-alt"></i></a>
      </div>
    </div>
  </div>
  `
})