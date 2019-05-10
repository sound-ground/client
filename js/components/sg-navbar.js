Vue.component('sg-navbar', {
  data() {
    return {
      search: ''
    }
  },
  watch: {
    search() {
      this.$emit('search', this.search)
    }
  },

  template: `
  <div>
    <nav style="background:#FFD701" class="navbar navbar-expand-lg navbar-light">
      <img src="https://media.giphy.com/media/l46ClMf95Sg7yEza8/giphy.gif" style="height:50px" alt="logo">      
      <a class="navbar-brand" href="#">&lt;sound-ground /&gt;</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input v-model="search" class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        </form>
      </div>
    </nav>
  </div>
  `
})