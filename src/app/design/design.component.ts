import { Component, OnInit } from '@angular/core';
import { fabric } from 'fabric';
@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css'],
})
export class DesignComponent implements OnInit {
  constructor() {
    this.resultImage = null;
  }

  group = {};
  isTextformat = false;
  imgFile: any = '';
  textFabric: any = '';
  text = [
    {
      title: 'ADD TEXt',
    },
  ];
  items: any = [];
  imagess: any = '';
  multiImage = [
    {
      images: this.imagess,
    },
  ];
  resultImage: any;
  // selectedFile: any[];
  canvas: any;
  value: any;
  // image: any =
  //   'https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg';
  width: number = 900;
  // public changeSize() {
  //   this.canvas.changeSize();
  // }
  // onFileChanged(event: any) {
  //   this.selectedFile = event.target.files[0];
  // }
  textFont = 60;
  secondtext = 0;
  changeFont(operator: any) {
    let textFont = this.textFont + 1;
    let obj = this.canvas;
    operator === '+' ? textFont++ : textFont--;
    console.log(textFont);
    for (let i = textFont; i < textFont + 1; i++) {
      obj.getActiveObject().set('fontSize', textFont);
      obj.renderAll();
    }
    this.textFont = this.textFont + 1;
    console.log(this.textFont);
  }
  changeFont2(operator: any) {
    let textFont = this.textFont - 1;
    let obj = this.canvas;
    operator === '+' ? textFont++ : textFont--;
    console.log(textFont);
    for (let i = textFont; i < textFont + 1; i++) {
      obj.getActiveObject().set('fontSize', textFont);
      obj.renderAll();
    }
    this.textFont = this.textFont - 1;
    console.log(this.textFont);
  }
  groupObjects() {
    let obj = this.canvas;
    let textFont = this.textFont;
    const increse: any = document.getElementById('increase');

    obj.getActiveObject().set('fontSize', textFont);
    obj.renderAll();
  }
  groupObjects2() {
    this.textFont = this.textFont - 1;
  }

  addText() {
    this.text.map((e) => {
      this.canvas.add(
        (this.textFabric = new fabric.IText(e.title, {
          left: 50,
          top: 50,
          fontFamily: 'Helvetica',
          fill: '#000',
          lineHeight: 1.1,
          fontSize: this.textFont,

          styles: {
            0: {
              0: { textDecoration: 'underline' },
              1: {},
            },
            1: {
              0: { textBackgroundColor: 'rgba(255,255,0,0.3);' },
              4: { fontSize: this.textFont },
            },
          },
        }))
      );
    });
  }

  // groupObjects(canvas: any, group: any, shouldGroup: any) {
  //   if (shouldGroup) {
  //     const objects = canvas.getObjects();
  //     group.val = new fabric.Group(objects, { cornerColor: 'white' });

  //     canvas.add(group.val);
  //     canvas.requestRenderAll();
  //   } else {
  //     let oldGroup = group.val.getObjects();

  //     canvas.add(oldGroup);
  //     group.val = null;
  //     canvas.requestRenderAll();
  //   }
  // }
  textFormat() {
    this.isTextformat = true;
  }

  onUpload() {
    // this.http is the injected HttpClient
    const formData = new FormData();
    for (const file of this.selectedFile) {
      formData.append(file, file.name);
    }
    this.value = formData;
  }

  private selectedFile: any;
  private imgURL: any;
  // onFileChanged(event: any) {
  //   if (event.target.files.length == 0) return;
  //   this.selectedFile = <File>event.target.files[0];
  //   var reader = new FileReader();
  //   reader.readAsDataURL(this.selectedFile);
  //   reader.onload = (_event) => {
  //     this.imgURL = reader.result;
  //   };

  //   var canvas: any = document.getElementById('canvas');
  //   var ctxt = canvas.getContext('2d');
  //   var background = new Image();
  //   background.src = this.imgURL;
  //   background.onload = function () {
  //     ctxt.drawImage(background, 0, 0, canvas.width, canvas.height);
  //   };
  // }
  onImageChange(e: any) {
    const reader = new FileReader();

    if (e.target.files && e.target.files.length) {
      const [file] = e.target.files;
      reader.readAsDataURL(file);

      reader.onload = (event: any) => {
        this.imgFile = reader.result;
        var canvas: any = document.getElementById('myCanvas');
        var ctxt = canvas.getContext('2d');
        var background = new Image();
        background.src = this.imgFile;

        background.onload = function () {
          ctxt.drawImage(background, 0, 0, canvas.width, canvas.height);
        };

        this.canvas.setBackgroundImage(this.imgFile);
      };
      // this.image = this.imgFile;
      let image = new fabric.Image(this.imgFile);
      image.crossOrigin = 'anonymous';
      image.set({
        left: 250,
        top: 250,
        angle: 20,
        padding: 10,
      });

      //image.scale(getRandomNum(0.1, 0.25)).setCoords();
    }
  }
  onChangeElement(e: any) {
    var file = e.target.files[0];
    var reader = new FileReader();
    let obj = this;
    reader.onload = function (f: any) {
      var data = f.target.result;
      fabric.Image.fromURL(data, function (img) {
        var oImg = img.set({ left: 50, top: 100, angle: 1 }).scale(0.9);
        obj.canvas.add(oImg).renderAll();
        obj.canvas.setActiveObject(oImg);
      });
    };
    reader.readAsDataURL(file);
  }
  // console.log('yes');
  // const reader = new FileReader();
  // debugger;

  //   var canvas: any = document.getElementById('myCanvas');
  //   var ctxt = canvas.getContext('2d');
  //   reader.onload = function (f: any) {
  //     var data = f.target.result;
  //     console.log(data);
  //     fabric.Image.fromURL(data, function (img) {
  //       var oImg = img
  //         .set({ left: 0, top: 0, angle: 0, width: 100, height: 100 })
  //         .scale(0.9);
  //       canvas.add(oImg).renderAll();
  //       var a = canvas.setActiveObject(oImg);
  //       var dataURL = canvas.toDataURL({ format: 'png', quality: 0.8 });
  //     });
  //   };
  //   reader.readAsDataURL(file);

  //     reader.onload = (event: any) => {
  //       this.imagess = reader.result;
  //       var canvass: any = document.getElementById('myCanvas');
  //       var ctxt = canvass.getContext('2d');
  //       var background = new Image();
  //       background.src = this.imagess;

  //       background.onload = function () {
  //         ctxt.drawImage(background, 0, 0);
  //       };
  //       this.canvas.add(this.imagess);
  //     };

  //     // this.image = this.imgFile;
  //     let image = fabric.Image.fromURL(this.imagess, (image) => {
  //       image.set({
  //         left: 50,
  //         top: 70,
  //       });

  //       this.canvas.add(image);
  //     });
  //   }

  //   //image.scale(getRandomNum(0.1, 0.25)).setCoords();
  //   // const reader = new FileReader();
  //   // if (e.target.files && e.target.files.length) {
  //   //   const [file] = e.target.files;
  //   //   reader.readAsDataURL(file);
  //   //   reader.onload = (event: any) => {
  //   //     this.multiImage.map((e) => {
  //   //       e.images = reader.result;
  //   //     });
  //   //     var canvas: any = document.getElementById('myCanvas');
  //   //     var ctxt = canvas.getContext('2d');
  //   //     var background = new Image();
  //   //     background.src = this.imagess;
  //   //     background.onload = function () {
  //   //       // ctxt.drawImage(background, 0, 0, canvas.width, canvas.height);
  //   //       new fabric.Image(background);
  //   //       image.set({
  //   //         angle: 0,
  //   //         padding: 10,
  //   //         height: 110,
  //   //         width: 110,
  //   //       });
  //   //       canvas.centerObject(image);
  //   //       canvas.add(image);
  //   //       canvas.renderAll();
  //   //     };
  //   //     this.canvas.setBackgroundImage(this.imgFile);
  //   //   };
  //   //   // this.image = this.imgFile;
  //   //   let image = new fabric.Image(this.imgFile);
  //   //   image.crossOrigin = 'anonymous';
  //   //   image.set({
  //   //     left: 250,
  //   //     top: 250,
  //   //     angle: 20,
  //   //     padding: 10,
  //   //   });
  //   // }
  //   // // const reader = new FileReader();
  //   // // if (e.target.files && e.target.files.length) {
  //   // //   const [file] = e.target.files;
  //   // //   reader.readAsDataURL(file);
  //   // //   reader.onload = (event: any) => {
  //   // //     this.multiImage.map(events=>{
  //   // //     events.images = reader.result;
  //   // //     var canvas: any = document.getElementById('myCanvas');
  //   // //     var ctxt = canvas.getContext('2d');
  //   // //     var background = new Image();
  //   // //     background.src = this.imgFile;
  //   // //   })
  //   // //   }
  //   // // }
  //   // var reader = new FileReader();
  //   //   reader.onload = function (event){
  //   //     var imgObj = new Image();
  //   //     imgObj.src = event.target.result;
  //   //     imgObj.onload = function () {
  //   //       var image = new fabric.Image(imgObj);
  //   //       image.set({
  //   //             angle: 0,
  //   //             padding: 10,
  //   //             cornersize:10,
  //   //             height:110,
  //   //             width:110,
  //   //       });
  //   //       canvas.centerObject(image);
  //   //       canvas.add(image);
  //   //       canvas.renderAll();
  //   //     }
  //   //   }
  //   //   reader.readAsDataURL(e.target.files[0]);
  //   // }
  // }
  rasterize() {
    // var image = this.canvas
    //   .toDataURL('image/png')
    //   .replace('image/png', 'image/octet-stream'); // here is the most important part because if you dont replace you will get a DOM 18 exception.

    // window.location.href = image; // it will save locally

    // let canvas: any = document.getElementById('myCanvas');
    // let dataURL = canvas.toDataURL('image/png');
    // let newTab: any = window.open('about:blank', 'image from canvas');
    // newTab.document.write("<img src='" + dataURL + "' alt='from canvas'/>");
    // const image = this.canvas.toDataURL();
    // console.log(image);
    let downloadLink = document.createElement('a');
    downloadLink.setAttribute('download', 'CanvasAsImage.png');
    const image = new Image();
    image.crossOrigin = 'anonymous';
    image.src = this.canvas.toDataURL('image/png');
    downloadLink.setAttribute('href', image.src);
    downloadLink.click();
    let wi: any = window.open('');
    wi.document.write(image.outerHTML);
    console.log('yes');
    wi.document.write('<img src="' + image + '"/>');
  }
  ngOnInit(): void {
    this.canvas = new fabric.Canvas('myCanvas', {
      width: this.width,
      height: 800,
      backgroundImage: this.imgFile,
    });
    // this.canvas.setBackgroundImage(this.onImageChange);
    this.addText;
    this.onChangeElement;
    this.groupObjects;

    // this.text.map((e) => {
    //   this.canvas.add(
    //     new fabric.IText(e.title, {
    //       left: 50,
    //       top: 50,
    //       fontFamily: 'Helvetica',
    //       fill: '#000',
    //       lineHeight: 1.1,

    //       styles: {
    //         0: {
    //           0: { textDecoration: 'underline', fontSize: 80 },
    //           1: {},
    //         },
    //         1: {
    //           0: { textBackgroundColor: 'rgba(255,255,0,0.3);' },
    //           4: { fontSize: 20 },
    //         },
    //       },
    //     })
    //   );
    // });

    // this.canvas.add(
    //   new fabric.IText('tour  !', {
    //     left: 50,
    //     top: 50,
    //     fontFamily: 'Helvetica',
    //     fill: '#000',
    //     lineHeight: 1.1,

    //     styles: {
    //       0: {
    //         0: { textDecoration: 'underline', fontSize: 80 },
    //         1: {},
    //       },
    //       1: {
    //         0: { textBackgroundColor: 'rgba(255,255,0,0.3);' },
    //         4: { fontSize: 20 },
    //       },
    //     },
    //   })
    // );

    // fabric.Image.fromURL('', (image) => {
    //   image.crossOrigin = 'anonymous';

    //   image.set({
    //     left: 50,
    //     top: 70,
    //   });

    //   this.canvas.add(image);
    //   this.canvas.add(
    //     new fabric.IText('value', {
    //       left: 50,
    //       top: 50,
    //       fontFamily: 'Helvetica',
    //       fill: '#FFFFFF',
    //       lineHeight: 1.1,

    //       styles: {
    //         0: {
    //           0: { textDecoration: 'underline', fontSize: 80 },
    //           1: {},
    //         },
    //         1: {
    //           0: { textBackgroundColor: 'rgba(255,255,0,0.3);' },
    //           4: { fontSize: 20 },
    //         },
    //       },
    //     })
    //   );
    // });

    // fabric.Image.fromURL(this.imgFile, (image) => {
    //   image.set({
    //     left: 50,
    //     top: 70,
    //   });

    //   this.canvas.add(this.imgFile);
    // });
  }
}
