Vue.component('sg-card', {
  data() {
    return {

    }
  },
  template: `
  <div>
    <div class="card mb-3">
      <div class="card-body">
        <h5 class="card-title">Audio #1</h5>
        <h6 class="card-subtitle mb-2 text-muted">Created at: 17 August 1945</h6>
        <div class="col-sm-12 col-sm-offset-4">
          <audio controls class="block">
            <source src="https://storage.cloud.google.com/general_ramdhon/1557398478885audio">
          </audio>
        </div>
        <br>
        <a href="#" class="card-link">SHARE <i class="fas fa-share-alt"></i></a>
      </div>
    </div>
  </div>
  `
})