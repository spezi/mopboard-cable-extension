<template>

  <!-- Introduction -->
  <section id="intro" class="main">
    <div class="spotlight">
      <div class="content">
          
          <div class="spotlight" v-if="radio">
									<div class="content">
										<header class="major">
											<h1>Musi iss grad</h1>
										</header>
										<h2> {{artist}}  {{song}} </h2>
									</div>
									<span class="image"><img :src="songart" alt="" /></span>
								</div>

       
          <div >
              
          </div>

          

          <header class="major">
            <h2>Feedback, Kritik und Anregungen</h2>
          </header>
          <span v-show="login" >
          <p></p>
          <div class="row gtr-uniform">
           
                        <div class="col-12">
													<textarea v-model="feedback" name="demo-message" id="demo-message" placeholder="Buchstaben und so weiter ;)" rows="6" :class="status"></textarea>
												</div>
            
            <div class="col-12 align-center">
              <a href="#" class="button icon solid fa-dove primary" @click="sendfeedback($event)"></a>
            </div>
          </div>
          </span>
          <div class="col-12 align-center">
            <br/>
          
          </div>
      </div>
    </div>
    
  </section>
</template>

<script>
import axios from 'axios'

export default {
  name: 'app',
  data () {
    return {
      login: true,
      email: '',
      montechussetslink: '#',
      feedback: '',
      status: '',
      radiodata: '',
      artist: '',
      song: '',
      songart: '',
    }
  },
  computed:{
    radio() {
        this.pollradio();
        return true
    }
  },
  methods: {
    pollradio() {
        const self = this; 
        self.fetchradio();
        setInterval(async function(){  
          self.fetchradio();
        }, 8000);
    },
    async fetchradio () {
      const res = await axios.get('https://musi.kontakt.world:9443/api/nowplaying');
      console.log(res)
      self.radiodata = res.data[0];
      this.songart = self.radiodata.now_playing.song.art
      this.artist = self.radiodata.now_playing.song.artist
      this.song = self.radiodata.now_playing.song.title 
    },
    async sendfeedback (event) {
      
      if (event) {
          event.preventDefault()
        }

      const res = await axios.post('https://graphql.montessoribamberg.de/v1/graphql', {
        query: ` 
        mutation feedbackMutation ($feedback: String!){
          insert_feedback_one(object: {feedback: $feedback}) {
            feedback
          }
        }`,
        variables: {
          feedback: this.feedback,
        }
      })
      if(res.data.data != undefined) {
          console.log(res.data.data)
          alert("wurde gesendet .. Vielen Dank!")
          this.feedback = ''
      } else {
          this.status = 'error'
      }
      
    },
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#main textarea.error {
  transition: border-color 0.5s;
  border-color: #a80303;
  border-width: 3px;
}

</style>