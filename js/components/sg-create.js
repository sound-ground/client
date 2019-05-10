Vue.component('sg-create', {
  props: ['loading'],
  data() {
    return {
      form: {
        title: '',
        file: null
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
      this.form.title = '',
      this.form.file = null
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
        <div v-if="loading" class="spinner-border text-success" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </p>
      <div class="collapse" id="collapseExample">
        <div class="card card-body">
          <form method="POST" @submit.prevent="upload">
            <div class="form-group">
              <label for="exampleInput1">Title</label>
              <input v-model="form.title" type="text" class="form-control" id="exampleInput1" placeholder="Enter title">
            </div>
            <div class="form-group">
              <div class="accordion" id="accordionExample">
                <div>
                  <div id="headingOne">
                    <h2 class="mb-0">
                      <button class="btn btn-info" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Record Your Sound <i class="fas fa-smile-wink"></i>
                      </button>
                    </h2>
                  </div>

                  <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                    <div class="card-body">
                      <audio-recorder
                        @audio-file="handleFile"
                        @audio-url="handleUrl"
                      ></audio-recorder>
                    </div>
                  </div>
                </div>
                <div>
                  <div id="headingTwo">
                    <h2 class="mb-0">
                      <button class="btn btn-info collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Upload ready file <i class="fas fa-surprise"></i>
                      </button>
                    </h2>
                  </div>
                  <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                    <div class="card-body">
                      <label for="exampleFormControlFile1">upload a file</label>
                      <input @change="handleFileUpload" type="file" class="form-control-file" id="exampleFormControlFile1">
                    </div>
                  </div>
                </div>
              </div>
            </div>            
            <div class="row">
              <div class="col-3 offset-9">
                <button type="submit" class="btn btn-info" data-toggle="collapse" href="#collapseExample" role="button" aria-controls="collapseExample"><i class="fas fa-cloud-upload-alt"></i> Upload</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  `
})