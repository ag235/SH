// app.js
new Vue({
// We want to target the div with an id of 'events'
  el: '#app',
  data: {  
    shoeimage: "images/Shoe1.png",
    styles:[
    { 
      name: "Äppelviken",
      img:"./images/shoe1.png",
      upperToeMaterial:["appelBlackToe","appelBrownToe"],
      upperMidMaterial: ["appelBlackUM","appelBrownUM"],
      middleShoeMaterial:["appelBlackM","appelBrownM"],
      soleColor:["appelBlackSole","appelBrownSole"],

      name: "Skytteholm",
      img:"./images/shoe2.png",
      upperToeMaterial:["skyBrownToe","skyBlackToe","skySuedeToe"],
      upperMidMaterial: ["appelBrownUM","appelBlackUM"],
      middleShoeMaterial:["appelBrownM","appelBlackM"],
      soleColor:["appelBrownSole","appelBlackSole"]
    }],

    selectedStyle: "Äppelviken",
    selectedUpperToeMaterial: "appelBlackToe",
    selectedUpperMidMaterial: "appelBrownUM",  // currently selected overlay 
    //ADD OTHER SELECTED MATERIALS 

    materials : {
      "appelBrownToe" : { 
        name: "Brown Leather",
        img: "./images/appelBrownToe.png"
      },
      "appelBlackToe" : { 
        name: "Black Leather",
        img: null 
      },
      "appelBrownUM" : { 
        name: "Brown Leather",
        img: "./images/appelBrownUM.png"
      },
      "appelBlackUM" : { 
        name: "Black Leather",
        img: null 
      },
      "appelBrownM" : { 
        name: "Brown Leather",
        img: "./images/appelBrownM.png"
      },
      "appelBlackM" : { 
        name: "Black Leather",
        img: null 
      },
      "appelBrownSole" : { 
        name: "Brown Sole",
        img: "./images/brownSole.png"
      },
      "appelBlackSole" : { 
        name: "Black Sole",
        img: "./images/blackSole.png"
      }
    }
  },
  //MORE MATERIALS FOR NEW SHOE 
  computed: { 
    //new entry 
     selectedStyleImg : function(){ 
      var self = this;
      var image;
      this.styles.forEach(function(style){ 
        if (style.name === self.selectedStyle){
          image = style.img
        }
      })
      return image;
    },
    selectedStyleData : function(){ 
      var self = this;
      var selectedStyle;
      this.styles.forEach(function(style){ 

        if (style.name === self.selectedStyle){
          selectedStyle = style
        }
      })
      return selectedStyle;
    },
    selectedUpperToeMaterialImg : function(){ 
      return this.materials[this.selectedUpperToeMaterial].img
    },
    selectedUpperMidMaterialImg : function(){ 
      return this.materials[this.selectedUpperMidMaterial].img
    }
    //add the other ones here selectedmid material etc. 
  },
  methods : { 
    changeStyle: function(styleName){ 
      this.selectedStyle = styleName
      var styleData 
      var self = this;
      this.styles.forEach(function(style){ 
        if (style.name === self.selectedStyle){
         styleData = style
        }
      })

     this.selectedUpperToeMaterial = styleData.upperToeMaterial[0];
     //add other sections here 

    }
  }
});







