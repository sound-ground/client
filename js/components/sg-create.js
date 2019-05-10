Vue.component('sg-create', {
  data() {
    return {
      form: {
        title: '',
        file: ''
      }
    }
  },
  methods: {
    handleFileUpload(event) {
      console.log(event.target.files);
      this.form.file = event.target.files[0];
      console.log(this.form.file);
    },
    upload() {
      let formData = new FormData();
        formData.append('title', this.form.title);
        formData.append('music', this.form.file);
      this.$emit('upload', formData);
    },
    handleFile: function (file) {
      this.form.file = file;
      console.log(file)
    },
    handleUrl: function (url) {
      console.log('url:', url)
    }
  },
  template: `
  <div>
    <div class="my-4">
      <p>
        <a class="btn btn-success" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
          <i class="fas fa-cloud-upload-alt"></i> Upload your sound
        </a>
      </p>
      <div class="collapse" id="collapseExample">
        <div class="card card-body">
          <form method="POST" @submit.prevent="upload">
            <div class="form-group">
              <label for="exampleInput1">Title</label>
              <input v-model="form.title" type="text" class="form-control" id="exampleInput1" placeholder="Enter title">
            </div>
            <div class="form-group">
              <audio-recorder
                @audio-file="handleFile"
                @audio-url="handleUrl"
              ></audio-recorder>
            </div>
            <div class="form-group">
              <label for="exampleFormControlFile1">or upload a file</label>
              <input @change="handleFileUpload" type="file" class="form-control-file" id="exampleFormControlFile1">
            </div>
            <div class="row">
              <div class="col-3 offset-9">
                <button type="submit" class="btn btn-primary"><i class="fas fa-cloud-upload-alt"></i> Upload</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  `
})