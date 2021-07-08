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
    }),
    computed: {
    // a computed getter
    front: function () {
      let options = {
        1:0,
        2:0,
        3:-5,
        4:-50
      }
      if(this.fl) {
        return Number(this.fl) + Number(options[this.selected])
      } else {
        return 0
      }
    },
    back: function () {
      let options = {
        1:-35,
        2:-10,
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
        return Number(this.bl) + -5 + Number(this.flex) + this.tobackleft;
      } 
      else if (this.selected == 2 && this.sbll && this.bl && this.sbrl) {
        return Number(this.bl) + -50 + Number(this.flex) + this.tobackleft + Number(this.flex) + this.tobackright;
      }
      else if (this.selected == 3 && this.sfll && this.fl) {
        return Number(this.fl) + -35 + Number(this.flex) + ((Number(this.sfll) - 30)/2 + 8);
      }
      else if (this.selected == 4 && this.sfll && this.fl && this.sfrl) {
        return Number(this.fl) + -10 + Number(this.flex) + this.tofrontleft + Number(this.flex) + this.tofrontright;
      }
      else {
        return 0;
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
