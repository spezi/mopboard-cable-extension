<template>
  <v-container>
    <v-row class="text-center">
      <v-col
        class="mb-5"
        cols="6"
      >
      <v-select
          :items="what"
          item-text="bankName"
          label="Standard"
          v-model="selected"
          @change="ClearValues"
        ></v-select>
       
       <v-text-field
            v-if="selected == 1 || selected == 2"
            label="Side back left length"
            v-model="sbll"
            placeholder="mm"
        ></v-text-field>
        <v-text-field
            v-if="selected == 3 || selected == 4"
            label="Side front left length"
            v-model="sfll"
            placeholder="mm"
        ></v-text-field>

       <v-text-field
            label="Front length"
            placeholder="mm"
            v-model="fl"
            v-if="selected == 3 || selected == 4"
        ></v-text-field>
        <v-text-field
            label="Back length"
            placeholder="mm"
            v-model="bl"
            v-if="selected == 1 || selected == 2"
        ></v-text-field>
        <v-text-field
            v-if="selected == 2"
            label="Side back right length"
            v-model="sbrl"
            placeholder="mm"
        ></v-text-field>
        <v-text-field
            v-if="selected == 4"
            label="Side front right length"
            v-model="sfrl"
            placeholder="mm"
        ></v-text-field>
      </v-col>
      <v-col
        class="mb-5"
        cols="6"
      >
      <v-row class="text-center">
        <v-col>
            Total length: {{length}}mm
        </v-col>
      </v-row>
      <v-row class="text-center">
        <v-col>
        <svg
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   width="400"
   height="100"
   viewBox="0 0 105.83333 26.458333"
   version="1.1"
   id="svg2212">
  <g
     inkscape:label="Layer 1"
     inkscape:groupmode="layer"
     id="layer1">
    <text
       xml:space="preserve"
       id="text2962"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:10.5833px;line-height:1.25;font-family:Metropolis;-inkscape-font-specification:Metropolis;letter-spacing:0px;word-spacing:0px;white-space:pre;shape-inside:url(#rect2964);fill:#000000;fill-opacity:1;stroke:none;" />
    <!-- rechts unten -->
    <path
       v-if="selected == 2"
       style="fill:none;stroke:#000000;stroke-width:0.337653px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
       d="m 63.797644,13.229167 12.76165,12.76165"
       id="path1056" />
    <!-- mitte -->
    <path
       v-if="selected"
       style="fill:none;stroke:#000000;stroke-width:0.337653px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
       d="m 38.274344,13.229167 h 12.76165 12.76165"
       id="path1052" />
    <!-- links unten -->
    <path
       v-if="selected == 1 || selected == 2"
       style="fill:none;stroke:#000000;stroke-width:0.337653px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
       d="M 25.512695,25.990817 38.274344,13.229167"
       id="path2855-5" />
    <!-- links oben -->
    <path
       v-if="selected == 3 || selected == 4"
       id="path2855-7-2"
       style="fill:none;stroke:#000000;stroke-width:0.337653px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
       d="m 25.512919,0.467637 12.761525,12.76153 z" />
    <!-- rechts oben -->
    <path
       v-if="selected == 4"
       style="fill:none;stroke:#000000;stroke-width:0.337653px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
       d="M 63.797644,13.229167 76.559304,0.467517"
       id="path2895-7" />
    <g
       id="g1062"
       transform="matrix(0.48684201,0,0,0.48684201,6.3388938,-55.75835)">
      <text
         xml:space="preserve"
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:10.5833px;line-height:1.25;font-family:Metropolis;-inkscape-font-specification:Metropolis;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.264583"
         x="80.187416"
         y="150.74226"
         id="text2919-09"
         v-if="selected == 3 || selected == 4"
         ><tspan
           sodipodi:role="line"
           id="tspan2917-3"
           x="80.187416"
           y="150.74226"
           style="stroke-width:0.264583">{{front}}</tspan></text>
      <text
         xml:space="preserve"
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:10.5833px;line-height:1.25;font-family:Metropolis;-inkscape-font-specification:Metropolis;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.264583"
         x="79.73008"
         y="140.04781"
         id="text2923-6"
         v-if="selected == 1 || selected == 2"
         ><tspan
           sodipodi:role="line"
           id="tspan2921-0"
           x="79.73008"
           y="140.04781"
           style="stroke-width:0.264583">{{back}}</tspan></text>
    </g>
    <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:5.15239px;line-height:1.25;font-family:Metropolis;-inkscape-font-specification:Metropolis;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.12881"
       x="18.998869"
       y="8.7692871"
       id="text2919-0-6"
       v-if="selected == 3 || selected == 4"
       ><tspan
         sodipodi:role="line"
         id="tspan2917-9-2"
         x="18.998869"
         y="8.7692871"
         style="stroke-width:0.12881">{{tofrontleft}}</tspan></text>
    <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:5.15239px;line-height:1.25;font-family:Metropolis;-inkscape-font-specification:Metropolis;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.12881"
       x="19.004997"
       y="21.530807"
       id="text2919-0-3-6"
       v-if="selected == 1 || selected == 2"
       ><tspan
         sodipodi:role="line"
         id="tspan2917-9-6-1"
         x="19.004997"
         y="21.530807"
         style="stroke-width:0.12881">{{tobackleft}}</tspan></text>
    <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:5.15239px;line-height:1.25;font-family:Metropolis;-inkscape-font-specification:Metropolis;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.12881"
       x="76.420929"
       y="8.2697754"
       id="text2994-8"
       v-if="selected == 4"
       ><tspan
         sodipodi:role="line"
         id="tspan2992-7"
         x="76.420929"
         y="8.2697754"
         style="stroke-width:0.12881">{{tofrontright}}</tspan></text>
    <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:5.15239px;line-height:1.25;font-family:Metropolis;-inkscape-font-specification:Metropolis;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.12881"
       x="76.420929"
       y="21.031433"
       id="text2998-9"
       v-if="selected == 2"
       ><tspan
         sodipodi:role="line"
         id="tspan2996-2"
         x="76.420929"
         y="21.031433"
         style="stroke-width:0.12881">{{tobackright}}</tspan></text>
              </g>
            </svg>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-row class="text-center">
      <v-col
        class="mb-5"
        cols="6"
      >
 <a v-if="length" :href='svgcontent' download="test.svg">download svg</a>
        <svg
            xmlns:dc="http://purl.org/dc/elements/1.1/"
            xmlns:cc="http://creativecommons.org/ns#"
            xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
            xmlns:svg="http://www.w3.org/2000/svg"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
            xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
            width="51mm"
            height="400mm"
            viewBox="0 0 51 400"
            version="1.1"
            id="svg1245">
            <defs
              id="defs1239" />
            <metadata
              id="metadata1242">
              <rdf:RDF>
                <cc:Work
                  rdf:about="">
                  <dc:format>image/svg+xml</dc:format>
                  <dc:type
                    rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
                  <dc:title></dc:title>
                </cc:Work>
              </rdf:RDF>
            </metadata>
            <g
              inkscape:label="Layer 1"
              inkscape:groupmode="layer"
              id="layer1">
              <!--
              <path
                id="rect1865"
                style="opacity:0.355589;fill:#ff00ff;stroke:none;stroke-width:0.329882;stroke-linecap:round"
                d="M 0,0 H 51 V 8 H 0 Z" />-->
              <path
                id="rect1862"
                style="opacity:0.355589;fill:#00ff00;stroke:none;stroke-width:0.249173;stroke-linecap:round"
                :d="rectlength" />
                <!--
              <path
                id="rect1865-6"
                style="opacity:0.355589;fill:#ff00ff;stroke:none;stroke-width:0.329882;stroke-linecap:round"
                d="m 0,8 h 51 v 8 H 0 Z" />-->
              <g
                id="g1890">
                <path
                  v-if="plug"
                  style="fill:none;stroke:#000000;stroke-width:0.1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                  d="m 0.29339232,5.4565217 3.13560008,-5.40649991 6.262,0.01 3.1261996,5.41209991 -3.1356996,5.4064023 3.1262996,5.4121 6.2619,0.01 3.1357,-5.4065 -3.1263,-5.4120023 3.1357,-5.40649991 6.2619,0.01 3.1263,5.41089991 -3.1357,5.4076023 3.1263,5.4121 h 6.2619 l 3.1357,-5.4049 -3.1263,-5.4121023 3.1357,-5.40639991 6.2619,0.01 3.1263,5.41209991"
                  id="path1152-7-9"
                  sodipodi:nodetypes="cccccccccccccccccccc" />
                <path
                  v-if="hole"
                  id="path1152-7-0-3"
                  style="fill:none;stroke:#0000ff;stroke-width:0.1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                  d="m 0.04324912,10.2303 c 1.17690998,2.0287 2.35417998,4.0572 3.53124998,6.0859 1.99088,0 3.98177,-0.01 5.97265,-0.01 L 12.527619,11.1441 C 11.482759,9.3419996 10.437449,7.5401 9.3928591,5.7379 10.483429,3.8505 11.573769,1.9631 12.664339,0.0758 c 2.18359,0 4.36719,-0.01 6.55078,-0.012 1.09277,1.8863 2.18653,3.772 3.2793,5.6582 -1.04239,1.804 -2.08463,3.6080996 -3.12696,5.4122 0.9974,1.7187 1.9948,3.4375 2.99219,5.1562 1.99089,0 3.98177,-0.01 5.97266,-0.01 l 2.98242,-5.1621 c -1.04551,-1.8027004 -2.09151,-3.6052 -3.13672,-5.4082 1.09053,-1.8867 2.18096,-3.7734 3.27149,-5.6601 h 6.55078 c 1.09267,1.885 2.18662,3.7693 3.27929,5.6543 -1.0418,1.8039 -2.08331,3.6080996 -3.125,5.4121 0.99675,1.7187 1.99349,3.4375 2.99024,5.1562 1.99088,0 3.98177,-0.01 5.97265,-0.01 1.17395,-2.0312 2.34663,-4.0631 3.52149,-6.0938"
                  sodipodi:nodetypes="cccccccccccccccccccc" />
              </g>
              <path
                :d="flexposition"
                stroke="#000000"
                stroke-width="0.2"
                id="path1186-6-3-7-6-1-7"
                style="fill:none;stroke-linecap:round;stroke-linejoin:round"
                sodipodi:nodetypes="cccccccccccccccccccccccccccccccccccccccccccccccccccccccc" />
            </g>
          </svg>

         

    </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Calculator',

    data: () => ({
        what: [
          {bankName : "one side to back left or right", value: 1},
          {bankName : "two side to back", value: 2},
          {bankName : "one side to front left or right", value: 3},
          {bankName : "two side to front", value: 4},
        ],
        selected: "",
        sbll: "",
        sfll: "",
        fl: "",
        bl: "",
        sbrl: "",
        sfrl: "",
        flex: 19.7,
        hole: false,
        plug: true,
    }),
    computed: {
    // a computed getter
    front: function () {
      let options = {
        1:0,
        2:0,
        3:-5,
        4:-10
      }
      if(this.fl) {
        return Number(this.fl) + Number(options[this.selected])
      } else {
        return 0
      }
    },
    rectlength: function () {
        return "m 0.5,8 h 50 v " +  this.tofrontleft + " h -50 z"
    },
    flexposition: function() {
      let value = Number(this.tofrontleft) + 8 
      return "M -0.12917," + value + "H 16.133 m 3,0 H 47.6 m 3.52917,1.5 H 34.867 m -3,0 H 3.4 m -3.52917,1.5 H 16.133 m 3,0 H 47.6 m 3.52917,1.5 H 34.867 m -3,0 H 3.4 m -3.52917,1.5 H 16.133 m 3,0 H 47.6 m 3.52917,1.5 H 34.867 m -3,0 H 3.4 m -3.52917,1.5 H 16.133 m 3,0 H 47.6 m 3.52917,1.5 H 34.867 m -3,0 H 3.4 m -3.52917,1.5 H 16.133 m 3,0 H 47.6 m 3.52917,1.5 H 34.867 m -3,0 H 3.4 m -3.52917,1.5 H 16.133 m 3,0 H 47.6 m 3.52917,1.5 H 34.867 m -3,0 H 3.4 m -3.52917,1.5 H 16.133 m 3,0 H 47.6 m 3.52917,1.5 H 34.867 m -3,0 H 3.4"
    },
    back: function () {
      let options = {
        1:-35,
        2:-50,
        3:0,
        4:0
      }
      if(this.bl) {
        return Number(this.bl) + Number(options[this.selected])
      } else {
        return 0
      }
      
    },
    tofrontleft: function () {
      if(this.sfll) {
        return ((Number(this.sfll) - 30)/2 + 8)
      } else {
        return 0
      }
      
    },
    tofrontright: function () {
      if(this.sfrl) {
        return ((Number(this.sfrl) - 30)/2 + 8)
      } else {
        return 0
      }
    },
    tobackleft: function () {
      if(this.sbll) {
        return ((Number(this.sbll) - 30)/2 + 8)
      } else {
        return 0
      }
    },
    tobackright: function () {
      if(this.sbrl) {
        return ((Number(this.sbrl) - 30)/2 + 8)
      } else {
        return 0
      }
    },
    length: function () {
      // `this` points to the vm instance
      if(this.selected == 1 && this.bl && this.sbll) {
        return Number(this.bl) + -35 + Number(this.flex) + this.tobackleft;
      } 
      else if (this.selected == 2 && this.sbll && this.bl && this.sbrl) {
        return Number(this.bl) + -50 + Number(this.flex) + this.tobackleft + Number(this.flex) + this.tobackright;
      }
      else if (this.selected == 3 && this.sfll && this.fl) {
        return Number(this.fl) + -5 + Number(this.flex) + this.tofrontleft;
      }
      else if (this.selected == 4 && this.sfll && this.fl && this.sfrl) {
        return Number(this.fl) + -10 + Number(this.flex) + this.tofrontleft + Number(this.flex) + this.tofrontright;
      }
      else {
        return 0;
      }
    },
    svgcontent: function() {
      let svg = document.getElementById("svg1245");
      //let svg = ""
      if (svg) {
        return "data:image/svg+xml;utf8," + svg.outerHTML
      } else {
        return false
      }
      
    }
  },
  methods: {
      ClearValues: function() {
          this.sbll = "";
          this.sfll = "";
          this.fl = "";
          this.bl = "";
          this.sbrl = "";
          this.sfrl = "";
      }
  }
  }
</script>
