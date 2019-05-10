Vue.component('sg-card', {
  props: ['sound'],
  data() {
    return {

    }
  },
  mounted() {
    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  },
  template: `
  <div>
    <div class="card mb-3">
      <div class="card-body">
        <h5 class="card-title">{{ sound.title || 'Untitled :p' }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Created at: {{ new Date(sound.createdAt).toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) }}</h6>
        <div v-if="sound.url" class="col-sm-12 col-sm-offset-4">
          <audio :src="sound.url" controls class="block">
          </audio>
        </div>
        <img v-else src="https://i.giphy.com/media/8wcFoaEpK5ov0WpGsb/giphy.webp" alt="noFound">
        <br>
        <div id="fb-root"></div>
        <div
          v-if="sound.url" 
          class="fb-share-button" 
          :data-href="sound.url"
          data-layout="button_count"
        >
        </div>
      </div>
    </div>
  </div>
  `
})