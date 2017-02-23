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
    },
    {
      name: "Skytteholm",
      img:"./images/shoe2.png",
      upperToeMaterial:["skyBlackToe","skyBrownToe","skySuedeToe"],
      upperMidMaterial: ["skyBlackUM","skyBrownUM","skySuedeUM"],
      middleShoeMaterial:["skyBlackM","skyBrownM","skySuedeM"],
      soleColor:["skyBlackSole","skyBrownSole","skySuedeSole"],
    }],

    // currently selected overlay 
    selectedStyle: "Äppelviken",
    selectedUpperToeMaterial: "appelBlackToe",
    selectedUpperMidMaterial: "appelBlackUM", 
    selectedMiddleShoeMaterial: "appelBlackM", 
    selectedSoleColor: "appelBlackSole", 
    //hue setup 
    hueRotation : 0 , 
    saturation : 100,

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
        img: null
      },
///////////////////////////////////////////////////
      "skyBrownToe" : { 
        name: "Brown Leather",
        img: "./images/SkyBrownToe.png"
      },
      "skyBlackToe" : { 
        name: "Black Leather",
        img: null 
      },
      "skySuedeToe" : { 
        name: "Suede",
        img: "./images/SkySuedeToe.png"
      },
      "skyBrownUM" : { 
        name: "Brown Leather",
        img: "./images/SkyBrownUM.png"
      },
      "skyBlackUM" : { 
        name: "Black Leather",
        img: null 
      },
      "skySuedeUM" : { 
        name: "Suede",
        img: "./images/SkySuedeUM.png"
      },
      "skyBrownM" : { 
        name: "Brown Leather",
        img: "./images/SkyBrownM.png"
      },
      "skyBlackM" : { 
        name: "Black Leather",
        img: null 
      },
      "skySuedeM" : { 
        name: "Suede",
        img: "./images/SkySuedeM.png"
      },
      "skyBrownSole" : { 
        name: "Brown Sole",
        img: "./images/brownSole.png"
      },
      "skyBlackSole" : { 
        name: "Black Sole",
        img: null
      },
       "skySuedeSole" : { 
        name: "Suede Sole",
        img: "./images/suedeSole.png"
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
    },
    //add the other ones here selectedmid material etc. 
    selectedMiddleShoeMaterialImg : function() { 
      return this.materials[this.selectedMiddleShoeMaterial].img
    },
    selectedSoleColorImg : function(){
      return this.materials[this.selectedSoleColor].img

    },
    shoeStyle : function(){ 
      var color = "-webkit-filter: hue-rotate("+this.hueRotation+"deg) saturate("+this.saturation+"%); filter: hue-rotate("+this.hueRotation+"deg) saturate("+this.saturation+"%);"
      console.log(color)
      return color 
    },
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
     this.selectedUpperMidMaterial = styleData.upperMidMaterial[0];
     this.selectedMiddleShoeMaterial = styleData.middleShoeMaterial[0];
     this.selectedSoleColor = styleData.soleColor[0];
     this.hueRotation = 0; 
     this.saturation = 100; 
    },
    setHueSaturation: function(hue, saturation){ 
      this.hueRotation = hue; 
      this.saturation = saturation;
    }
  }
});







