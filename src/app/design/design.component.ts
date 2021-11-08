import { Component, OnInit } from '@angular/core';
import { fabric } from 'fabric';
import {
  faCoffee,
  faFileImport,
  faCloudUploadAlt,
  faTextHeight,
  faBold,
  faPlus,
  faMinus,
  faPalette,
} from '@fortawesome/free-solid-svg-icons';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css'],
})
export class DesignComponent implements OnInit {
  constructor() {
    this.resultImage = null;
  }
  faCoffee = faCloudUploadAlt;
  faText = faTextHeight;
  faBackground = faFileImport;
  faBold = faBold;
  faPlus = faPlus;
  faMinus = faMinus;
  faPalete = faPalette;

  group = {};
  isTextformat = false;
  imgFile: any = '';
  textFabric: any = '';
  canvaWidth = 400;
  canvaHeigth = 400;

  text = [
    {
      title: 'ADD TEXT',
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
  FontSizebtnShow = false;
  // image: any =
  //   'https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg';
  width: number = 900;
  // public changeSize() {
  //   this.canvas.changeSize();
  // }
  // onFileChanged(event: any) {
  //   this.selectedFile = event.target.files[0];
  // }
  textBold = false;
  textFont = 60;
  secondtext = 0;
  textfont2: number = 30;
  textColor: any = '#000';
  fontFamily = 'Helvetica';
  setFontFamily() {
    this.fontFamily = this.fontFamily;
    let obj = this.canvas;
    obj.getActiveObject().set('fontFamily', this.fontFamily);
    obj.renderAll();
  }
  setCanvaSize() {
    this.canvas.setHeight(this.canvaHeigth);
    this.canvas.setWidth(this.canvaWidth);
  }

  changeFont(operator: any) {
    let textFont = this.textFont + 1;
    let obj = this.canvas;
    operator === '+' ? textFont++ : textFont--;
    console.log(textFont);
    for (let i = textFont; i < textFont + 1; i++) {
      this.textfont2 = i;
      obj.getActiveObject().set('fontSize', i);
      obj.renderAll();
    }
    this.textFont = this.textFont + 1;

    console.log(this.textFont);
  }
  changeFont2(operator: any) {
    let textFont = this.textFont - 1;
    let obj = this.canvas;
    let textBold = this.textBold;
    operator === '+' ? textFont++ : textFont--;
    console.log(textFont);
    for (let i = textFont; i < textFont + 1; i++) {
      this.textfont2 = i;
      obj.getActiveObject().set('fontSize', i);
      obj.renderAll();
    }
    this.textFont = this.textFont - 1;
    console.log(this.textFont);
  }
  FontInput(e: any) {
    this.textFont = e.target.value;
  }
  textBolds() {
    this.textBold = !this.textBold;
    let obj = this.canvas;

    if (this.textBold) {
      obj.getActiveObject().set('fontWeight', 800);
      obj.renderAll();
    } else {
      obj.getActiveObject().set('fontWeight', 400);
      obj.renderAll();
    }
    console.log(this.textBold);
  }

  // groupObjects() {
  //   let obj = this.canvas;
  //   let textFont = this.textFont;
  //   const increse: any = document.getElementById('increase');

  //   obj.getActiveObject().set('fontSize', textFont);
  //   obj.renderAll();
  // }
  // groupObjects2() {
  //   this.textFont = this.textFont - 1;
  // }

  addText() {
    this.textFont = 60;
    this.fontFamily = 'helvetica';
    this.FontSizebtnShow = true;
    this.text.map((e) => {
      this.canvas.add(
        (this.textFabric = new fabric.IText(e.title, {
          left: 50,
          top: 50,

          styles: {
            0: {
              0: { textDecoration: 'underline', fontSize: this.textFont },
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

  // onUpload() {
  //   // this.http is the injected HttpClient
  //   const formData = new FormData();
  //   for (const file of this.selectedFile) {
  //     formData.append(file, file.name);
  //   }
  //   this.value = formData;
  // }

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
  bg: any;
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
        let canvasWidth = canvas.width;
        let canvaHeigth = canvas.height;

        background.onload = function () {
          ctxt.drawImage(background, 0, 0, canvasWidth, canvaHeigth);
        };
        this.canvas.setDimensions({
          width: canvasWidth,
          height: canvaHeigth,
        });
        this.bg = background;
        this.canvas.setBackgroundImage(
          this.imgFile,

          {
            opacity: 0.5,
            angle: 0.2,
            left: 400,
            top: 400,
          }
        );
      };
    }
    // this.image = this.imgFile;
    // let image = new fabric.Image(this.imgFile);
    // image.crossOrigin = 'anonymous';
    // image.set({
    //   left: 250,
    //   top: 250,
    // });

    //image.scale(getRandomNum(0.1, 0.25)).setCoords();
  }
  // resizeCanvas(event?: any) {
  //   this.canvas.setDimensions({
  //     width: this.canvaWidth,
  //     height: this.canvaWidth,
  //   });
  // }
  textColors() {
    this.textColor = this.textColor;
    let textColor = this.textColor;
    let obj = this.canvas;

    obj.getActiveObject().set('fill', textColor);
    obj.renderAll();
  }
  onChangeElement(e: any) {
    var canvas: any = document.getElementById('myCanvas');
    var file = e.target.files[0];
    var reader = new FileReader();
    let obj = this;
    let canvaWidth = this.canvaWidth;
    let canvaHeigth = this.canvaHeigth;
    let texts = this.textFabric;
    while (canvas.width >= this.width && canvas.height >= this.canvaHeigth) {
      canvas.height * 0.5;
      canvas.width * 0.5;
    }
    console.log('this height', canvas.height);
    let textFontSize = this.textFont;
    let fontFamily = this.fontFamily;
    console.log('this width', canvas.width);
    reader.onload = function (f: any) {
      var data = f.target.result;

      fabric.Image.fromURL(data, function (img) {
        var oImg = img
          .set({
            left: 50,
            top: 50,
            angle: 0,
          })
          .scale(0.2);

        obj.canvas.add(oImg).renderAll();
        obj.canvas.setActiveObject(oImg);
        var text = new fabric.Text('01', {
          fontFamily: fontFamily,
          fontSize: 20,
          styles: {
            0: {
              0: { textDecoration: 'underline', fontSize: textFontSize },
              1: {},
            },
            1: {
              0: { textBackgroundColor: 'rgba(255,255,0,0.3);' },
              4: { fontSize: textFontSize },
            },
          },
        });

        texts.set('top');
        texts.set('left');
        var group = new fabric.Group([img, text], {
          left: 100,
          top: 25,
        });
        canvas.add(group);
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
      width: this.canvaWidth,
      height: this.canvaHeigth,
      backgroundImage: this.imgFile,
    });
    // this.canvas.setBackgroundImage(this.onImageChange);
  }
}
