<template>
  <v-container v-if="mode == 'add'">
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
         <v-radio-group v-model="jointleft" @change="EndType">
            <template v-slot:label>
              <div>witch end type</div>
            </template>
            <v-radio value="hole">
              <template v-slot:label>
                <div>hole</div>
              </template>
            </v-radio>
            <v-radio value="plug">
              <template v-slot:label>
                <div>plug</div>
              </template>
            </v-radio>
          </v-radio-group>
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
        class="mb-2"
        cols="2"
      >
 
        <svg
            v-if="rectlengthleft"
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
            id="svgleft"
            @load="loadsvg"
            >
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
                :d="rectlengthleft" />
                <!--
              <path
                id="rect1865-6"
                style="opacity:0.355589;fill:#ff00ff;stroke:none;stroke-width:0.329882;stroke-linecap:round"
                d="m 0,8 h 51 v 8 H 0 Z" />-->
              <g
                id="g1890">
                <path
                  v-if="hole"
                  style="fill:none;stroke:#000000;stroke-width:0.1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                  d="m 0.29339232,5.4565217 3.13560008,-5.40649991 6.262,0.01 3.1261996,5.41209991 -3.1356996,5.4064023 3.1262996,5.4121 6.2619,0.01 3.1357,-5.4065 -3.1263,-5.4120023 3.1357,-5.40649991 6.2619,0.01 3.1263,5.41089991 -3.1357,5.4076023 3.1263,5.4121 h 6.2619 l 3.1357,-5.4049 -3.1263,-5.4121023 3.1357,-5.40639991 6.2619,0.01 3.1263,5.41209991"
                  id="path1152-7-9"
                  sodipodi:nodetypes="cccccccccccccccccccc" />
                <path
                  v-if="plug"
                  id="path1152-7-0-3"
                  style="fill:none;stroke:#0000ff;stroke-width:0.1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                  d="m 0.04324912,10.2303 c 1.17690998,2.0287 2.35417998,4.0572 3.53124998,6.0859 1.99088,0 3.98177,-0.01 5.97265,-0.01 L 12.527619,11.1441 C 11.482759,9.3419996 10.437449,7.5401 9.3928591,5.7379 10.483429,3.8505 11.573769,1.9631 12.664339,0.0758 c 2.18359,0 4.36719,-0.01 6.55078,-0.012 1.09277,1.8863 2.18653,3.772 3.2793,5.6582 -1.04239,1.804 -2.08463,3.6080996 -3.12696,5.4122 0.9974,1.7187 1.9948,3.4375 2.99219,5.1562 1.99089,0 3.98177,-0.01 5.97266,-0.01 l 2.98242,-5.1621 c -1.04551,-1.8027004 -2.09151,-3.6052 -3.13672,-5.4082 1.09053,-1.8867 2.18096,-3.7734 3.27149,-5.6601 h 6.55078 c 1.09267,1.885 2.18662,3.7693 3.27929,5.6543 -1.0418,1.8039 -2.08331,3.6080996 -3.125,5.4121 0.99675,1.7187 1.99349,3.4375 2.99024,5.1562 1.99088,0 3.98177,-0.01 5.97265,-0.01 1.17395,-2.0312 2.34663,-4.0631 3.52149,-6.0938"
                  sodipodi:nodetypes="cccccccccccccccccccc" />
              </g>
              <path
                :d="flexpositionleft"
                stroke="#000000"
                stroke-width="0.2"
                id="path1186-6-3-7-6-1-7"
                style="fill:none;stroke-linecap:round;stroke-linejoin:round"
                sodipodi:nodetypes="cccccccccccccccccccccccccccccccccccccccccccccccccccccccc" />
                <text
                  xml:space="preserve"
                  style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:10.5833px;line-height:1.25;font-family:Metropolis;-inkscape-font-specification:Metropolis;letter-spacing:0px;word-spacing:0px;fill:#ff0000;fill-opacity:1;stroke:none;stroke-width:0.264583"
                  x="20.726938"
                  y="33.21265"
                  id="text1614"><tspan
                    sodipodi:role="line"
                    id="tspan1612"
                    x="20.726938"
                    y="33.21265"
                    style="fill:#ff0000;stroke-width:0.264583">{{listNumber()}}</tspan></text>
                <text
                  xml:space="preserve"
                  style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:4.58611px;line-height:1.25;font-family:Metropolis;-inkscape-font-specification:Metropolis;letter-spacing:0px;word-spacing:0px;fill:#ff0000;fill-opacity:1;stroke:none;stroke-width:0.264583"
                  x="7.5821052"
                  y="48.300053"
                  id="text1614-3"><tspan
                    sodipodi:role="line"
                    x="7.5821052"
                    y="48.300053"
                    style="font-size:4.58611px;fill:#ff0000;stroke-width:0.264583"
                    id="tspan1640">total length: {{length}} </tspan></text>
            </g>
          </svg>

          <svg
            v-if="rectlengthright"
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
            id="svgright"
            @load="loadsvg">
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
                :d="rectlengthright" />
                <!--
              <path
                id="rect1865-6"
                style="opacity:0.355589;fill:#ff00ff;stroke:none;stroke-width:0.329882;stroke-linecap:round"
                d="m 0,8 h 51 v 8 H 0 Z" />-->
              <g
                id="g1890">
                <path
                  v-if="!hole"
                  style="fill:none;stroke:#000000;stroke-width:0.1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                  d="m 0.29339232,5.4565217 3.13560008,-5.40649991 6.262,0.01 3.1261996,5.41209991 -3.1356996,5.4064023 3.1262996,5.4121 6.2619,0.01 3.1357,-5.4065 -3.1263,-5.4120023 3.1357,-5.40649991 6.2619,0.01 3.1263,5.41089991 -3.1357,5.4076023 3.1263,5.4121 h 6.2619 l 3.1357,-5.4049 -3.1263,-5.4121023 3.1357,-5.40639991 6.2619,0.01 3.1263,5.41209991"
                  id="path1152-7-9"
                  sodipodi:nodetypes="cccccccccccccccccccc" />
                <path
                  v-if="!plug"
                  id="path1152-7-0-3"
                  style="fill:none;stroke:#0000ff;stroke-width:0.1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                  d="m 0.04324912,10.2303 c 1.17690998,2.0287 2.35417998,4.0572 3.53124998,6.0859 1.99088,0 3.98177,-0.01 5.97265,-0.01 L 12.527619,11.1441 C 11.482759,9.3419996 10.437449,7.5401 9.3928591,5.7379 10.483429,3.8505 11.573769,1.9631 12.664339,0.0758 c 2.18359,0 4.36719,-0.01 6.55078,-0.012 1.09277,1.8863 2.18653,3.772 3.2793,5.6582 -1.04239,1.804 -2.08463,3.6080996 -3.12696,5.4122 0.9974,1.7187 1.9948,3.4375 2.99219,5.1562 1.99089,0 3.98177,-0.01 5.97266,-0.01 l 2.98242,-5.1621 c -1.04551,-1.8027004 -2.09151,-3.6052 -3.13672,-5.4082 1.09053,-1.8867 2.18096,-3.7734 3.27149,-5.6601 h 6.55078 c 1.09267,1.885 2.18662,3.7693 3.27929,5.6543 -1.0418,1.8039 -2.08331,3.6080996 -3.125,5.4121 0.99675,1.7187 1.99349,3.4375 2.99024,5.1562 1.99088,0 3.98177,-0.01 5.97265,-0.01 1.17395,-2.0312 2.34663,-4.0631 3.52149,-6.0938"
                  sodipodi:nodetypes="cccccccccccccccccccc" />
              </g>
              <path
                :d="flexpositionright"
                stroke="#000000"
                stroke-width="0.2"
                id="path1186-6-3-7-6-1-7"
                style="fill:none;stroke-linecap:round;stroke-linejoin:round"
                sodipodi:nodetypes="cccccccccccccccccccccccccccccccccccccccccccccccccccccccc" />
                <text
                  xml:space="preserve"
                  style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:10.5833px;line-height:1.25;font-family:Metropolis;-inkscape-font-specification:Metropolis;letter-spacing:0px;word-spacing:0px;fill:#ff0000;fill-opacity:1;stroke:none;stroke-width:0.264583"
                  x="20.726938"
                  y="33.21265"
                  id="text1614"><tspan
                    sodipodi:role="line"
                    id="tspan1612"
                    x="20.726938"
                    y="33.21265"
                    style="fill:#ff0000;stroke-width:0.264583">{{listNumber()}}</tspan></text>
              <text
                xml:space="preserve"
                style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:4.58611px;line-height:1.25;font-family:Metropolis;-inkscape-font-specification:Metropolis;letter-spacing:0px;word-spacing:0px;fill:#ff0000;fill-opacity:1;stroke:none;stroke-width:0.264583"
                x="7.5821052"
                y="48.300053"
                id="text1614-3"><tspan
                  sodipodi:role="line"
                  x="7.5821052"
                  y="48.300053"
                  style="font-size:4.58611px;fill:#ff0000;stroke-width:0.264583"
                  id="tspan1640">total length: {{length}} </tspan></text>
            </g>
          </svg>
         

    </v-col>
    <v-col  class="mb-5"
        cols="6">
      <a v-if="sfbl" :href='svgcontent' download="test.svg">download svg</a>
      <v-btn
        text
        @click="addToList"
      >
        <span class="mr-2">add to Collection</span>
        <v-icon>mdi-plus-box-multiple</v-icon>
      </v-btn>
    </v-col>
    </v-row>
  </v-container>
  <v-container v-else>
    <v-row>
        <template>
            <v-col class="mb-2" cols="4" v-for="(item, index) in collection" :key="index">
                <v-row>
                    <v-col class="mb-6" cols="6" v-html="item.left"></v-col>
                    <v-col v-if="item.right" class="mb-6" cols="6" v-html="item.right">></v-col>
                </v-row>
            </v-col>
        </template>
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
        jointleft: "plug",
        mode: "add",
        collection: [],
    }),
    computed: {
    // a computed getter
    jointright: function() {
      if(this.jointleft == "plug") {
        return "hole";
      } else {
        return "plug";
      }
    },
    sfbl: function() {
      if(this.tofrontleft) {
        return this.tofrontleft 
      } else if (this.tobackleft) {
        return this.tobackleft 
      } else {
        return 0
      }
        
    },
    sfbr: function() {
      if(this.tofrontright) {
        return this.tofrontright 
      } else if (this.tobackright) {
        return this.tobackright 
      } else {
        return 0
      }
    },
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
    rectlengthleft: function () {
        if(this.sfbl) {
          return "m 0.5,0 h 50 v " +  this.sfbl + " h -50 z"
        } else {
          return 0
        }
    },
    rectlengthright: function () {
       if (this.sfbr){
          return "m 0.5,0 h 50 v " +  this.sfbr + " h -50 z"
        } else {
          return 0
        }
    }, 
    flexpositionleft: function() {
      let value = 0
      if(this.sfbl) {
        value = Number(this.sfbl)
      } 
      return "M -0.12917," + value + "H 16.133 m 3,0 H 47.6 m 3.52917,1.5 H 34.867 m -3,0 H 3.4 m -3.52917,1.5 H 16.133 m 3,0 H 47.6 m 3.52917,1.5 H 34.867 m -3,0 H 3.4 m -3.52917,1.5 H 16.133 m 3,0 H 47.6 m 3.52917,1.5 H 34.867 m -3,0 H 3.4 m -3.52917,1.5 H 16.133 m 3,0 H 47.6 m 3.52917,1.5 H 34.867 m -3,0 H 3.4 m -3.52917,1.5 H 16.133 m 3,0 H 47.6 m 3.52917,1.5 H 34.867 m -3,0 H 3.4 m -3.52917,1.5 H 16.133 m 3,0 H 47.6 m 3.52917,1.5 H 34.867 m -3,0 H 3.4 m -3.52917,1.5 H 16.133 m 3,0 H 47.6 m 3.52917,1.5 H 34.867 m -3,0 H 3.4"
    },
    flexpositionright: function() {
      let value = 0
      if (this.sfbr) {
        value = Number(this.sfbr)
      }
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
      let svg = document.getElementById("svgleft");
      //let svg = ""
      if (svg) {
        return "data:image/svg+xml;utf8," + svg.outerHTML;
      } else {
        return false;
      }
      
    },
  },
  methods: {
      ClearValues: function() {
          this.sbll = "";
          this.sfll = "";
          this.fl = "";
          this.bl = "";
          this.sbrl = "";
          this.sfrl = "";
          //type von rechter seite nehmen 
          if(localStorage.lastselected == 1 || localStorage.lastselected == 3){
              localStorage.lasttype = this.jointleft;
          } else {
              localStorage.lasttype = this.jointright;
          }

          localStorage.lastselected = this.selected;

          if(localStorage.lasttype == "plug") {
              this.jointleft = "hole"
          } else {
              this.jointleft = "plug"
          } 

          this.EndType();
          //console.log(this.listNumber)
      },
      EndType: function() {
          if(this.jointleft == "plug") {
            this.hole = false;
            this.plug = true;
          }
          else if (this.jointleft == "hole") {
            this.hole = true;
            this.plug = false;
          }
      },
      addToList: function() {
        if(!localStorage.list) {
          localStorage.list = "[]";
        }

        /*let object = {
            "left": document.querySelector('#svgleft').outerHTML,
            "right": document.querySelector('#svgright').outerHTML,
            }
          localStorage.list.push(object)*/
           let svgleft = document.getElementById("svgleft");
           let svgright = document.getElementById("svgright");
            //let svg = ""
            let object = {
            "left": "",
            "right": "",
            "length": 0
            }

            if (svgleft) {
              object["left"] = svgleft.outerHTML;
            }

            if(svgright) {
              object["right"] = svgright.outerHTML;
            }
            
            let list = JSON.parse(localStorage.list)
            list.push(object)
            localStorage.list = JSON.stringify(list)
      },
      loadsvg: function(evt) {
        console.lg(evt)
        console.log(evt.target.outerHTML)
      },
      listNumber: function() {
          if(localStorage.list) {
            let list = JSON.parse(localStorage.list);
            return list.length
          } else {
            return 1
          }
      },
      viewCollection: function() {
          if(localStorage.list) {
            let list = JSON.parse(localStorage.list);
            this.collection = list
          }
          this.mode = "view"
      },
  },
  }
</script>
