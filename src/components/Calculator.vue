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
            v-if="selected == 2"
            label="Side back left length"
            v-model="sbll"
            placeholder="mm"
        ></v-text-field>
        <v-text-field
            v-if="selected == 4"
            label="Side front left length"
            v-model="sfll"
            placeholder="mm"
        ></v-text-field>

       <v-text-field
            label="Front length"
            placeholder="mm"
            v-model="fl"
            v-if="selected == 1 || selected == 2"
        ></v-text-field>
        <v-text-field
            label="Back length"
            placeholder="mm"
            v-model="bl"
            v-if="selected == 3 || selected == 4"
        ></v-text-field>
        <v-text-field
            v-if="selected == 1"
            label="Side back length"
            v-model="sbl"
            placeholder="mm"
        ></v-text-field>
        <v-text-field
            v-if="selected == 3"
            label="Side front length"
            v-model="sfl"
            placeholder="mm"
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
      {{length}}
      <svg
          xmlns:dc="http://purl.org/dc/elements/1.1/"
          xmlns:cc="http://creativecommons.org/ns#"
          xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
          xmlns:svg="http://www.w3.org/2000/svg"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
          xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
          viewBox="-120 0 300 500">
          <path
         style="fill:none;stroke:#000000;stroke-width:0.693558px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
         d="M 13.854522,88.234745 40.067654,62.021618 H 66.280773 92.49389 l 26.21313,26.213127"
         id="path2855"
         sodipodi:nodetypes="ccccc" />

         <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:10.5833px;line-height:1.25;font-family:Metropolis;-inkscape-font-specification:Metropolis;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.264583"
       x="55.09597"
       y="72.151588"
       id="text2919"><tspan
         sodipodi:role="line"
         id="tspan2917"
         x="55.09597"
         y="72.151588"
         style="stroke-width:0.264583">{{front}}</tspan></text>
    <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:10.5833px;line-height:1.25;font-family:Metropolis;-inkscape-font-specification:Metropolis;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.264583"
       x="54.857838"
       y="61.457123"
       id="text2923"><tspan
         sodipodi:role="line"
         id="tspan2921"
         x="54.857838"
         y="61.457123"
         style="stroke-width:0.264583">{{back}}</tspan></text>
    <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:10.5833px;line-height:1.25;font-family:Metropolis;-inkscape-font-specification:Metropolis;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.264583"
       x="-32.15786"
       y="57.219604"
       id="text2919-0"><tspan
         sodipodi:role="line"
         id="tspan2917-9"
         x="-32.15786"
         y="57.219604"
         style="stroke-width:0.264583">{{tofrontleft}}</tspan></text>
    <text
       xml:space="preserve"
       id="text2962"
       style="fill:black;fill-opacity:1;stroke:none;font-family:Metropolis;font-style:normal;font-weight:normal;font-size:10.58333333px;line-height:1.25;letter-spacing:0px;word-spacing:0px;-inkscape-font-specification:Metropolis;font-stretch:normal;font-variant:normal;white-space:pre;shape-inside:url(#rect2964);" />
    <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:10.5833px;line-height:1.25;font-family:Metropolis;-inkscape-font-specification:Metropolis;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.264583"
       x="-31.909452"
       y="76.869308"
       id="text2919-0-3"><tspan
         sodipodi:role="line"
         id="tspan2917-9-6"
         x="-31.909452"
         y="76.869308"
         style="stroke-width:0.264583">{{tobackleft}}</tspan></text>
    <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:10.5833px;line-height:1.25;font-family:Metropolis;-inkscape-font-specification:Metropolis;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.264583"
       x="111.61536"
       y="56.155197"
       id="text2994"><tspan
         sodipodi:role="line"
         id="tspan2992"
         x="111.61536"
         y="56.155197"
         style="stroke-width:0.264583">{{tofrontright}}</tspan></text>
    <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:10.5833px;line-height:1.25;font-family:Metropolis;-inkscape-font-specification:Metropolis;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.264583"
       x="111.28085"
       y="74.178612"
       id="text2998"><tspan
         sodipodi:role="line"
         id="tspan2996"
         x="111.28085"
         y="74.178612"
         style="stroke-width:0.264583">{{tobackright}}</tspan></text>

         <path
         id="path2855-7"
         style="fill:none;stroke:#000000;stroke-width:0.693558px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
         d="M 13.854982,35.808748 40.06786,62.021628 Z" />
      <path
         style="fill:none;stroke:#000000;stroke-width:0.693558px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
         d="m 92.49389,62.021618 26.21315,-26.21312"
         id="path2895" />

           <path
         style="fill:none;stroke:#000000;stroke-width:0.693558px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
         d="M 13.854522,88.234745 40.067654,62.021618 H 66.280773 92.49389 l 26.21313,26.213127"
         id="path2855"
         sodipodi:nodetypes="ccccc" />

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
        sbl: "",
        sfl: "",
        sbrl: "",
        sfrl: "",
        flex: 19.7,
    }),
    computed: {
    // a computed getter
    front: function () {
      let options = {
        1:-5,
        2:-50,
        3:0,
        4:0
      }
      if(this.fl) {
        return Number(this.fl) + Number(options[this.selected])
      } else {
        return 0
      }
    },
    back: function () {
      let options = {
        1:0,
        2:0,
        3:-35,
        4:-10
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
      } else if (this.sfl){
        return ((Number(this.sfl) - 30)/2 + 8)
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
      } else if (this.sbl){
        return ((Number(this.sbl) - 30)/2 + 8)
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
      if(this.selected == 1 && this.fl && this.sbl) {
        return Number(this.fl) + -5 + Number(this.flex) + ((Number(this.sbl) - 30)/2 + 8);
      } 
      else if (this.selected == 2 && this.sbll && this.fl && this.sbrl) {
        return Number(this.fl) + -50 + Number(this.flex) + ((Number(this.sbll) - 30)/2 + 8) + Number(this.flex) + ((Number(this.sbrl) - 30)/2 + 8);
      }
      else if (this.selected == 3 && this.sfl && this.bl) {
        return Number(this.bl) + -35 + Number(this.flex) + ((Number(this.sfl) - 30)/2 + 8);
      }
      else if (this.selected == 4 && this.sfll && this.bl && this.sfrl) {
        return Number(this.bl) + -10 + Number(this.flex) + ((Number(this.sfll) - 30)/2 + 8) + Number(this.flex) + ((Number(this.sfrl) - 30)/2 + 8);
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
          this.sbl = "";
          this.sfl = "";
          this.sbrl = "";
          this.sfrl = "";
      }
  }
  }
</script>
