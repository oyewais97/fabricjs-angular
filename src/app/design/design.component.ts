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
  faLongArrowAltDown,
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
  faDownload = faLongArrowAltDown;
  deleteBtn = false;
  group = {};
  isTextformat = false;
  imgFile: any = '';
  textFabric: any = '';
  canvaWidth = 600;
  canvaHeigth = 600;
  imgesArray: any[] = [
    'https://images.unsplash.com/photo-1546587348-d12660c30c50?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJhbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
  ];

  text = [
    {
      title: 'Add Text',
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
  textitalic = 'italic';
  textUnderline = 'underline';
  textBold = false;
  textFont = 60;
  secondtext = 0;
  textfont2: number = 30;
  textColor: any = '#000';
  fontFamily = 'Helvetica';
  imageDisplay: boolean = false;
  textDisplay: boolean = false;
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
  setTextItalic() {
    let obj = this.canvas;
    obj.getActiveObject().set('fontStyle', 'italic');
    obj.renderAll();
  }
  setTextUnderline() {
    console.log('hhh');
    let obj = this.canvas;
    obj.getActiveObject().set('text-decoration', 'underline');
    obj.renderAll();
  }
  setBodyText() {
    this.canvas.add(
      new fabric.Textbox('Add Text', {
        left: 70,
        top: 100,
        fontFamily: 'helvetica neue',
        fill: '#000',
        fontSize: 20,
      })
    );
  }
  textShowValue: any;
  changeFont(operator: any) {
    if (this.textHeadingone) {
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
    }

    console.log(this.textFont);
  }
  changeFont2(operator: any) {
    if (this.canvas.getActiveObject()) {
      let textFont = this.textFont - 1;
      let obj = this.canvas;
      operator === '+' ? textFont++ : textFont--;
      console.log(textFont);
      for (let i = textFont; i < textFont + 1; i++) {
        this.textfont2 = i;
        obj.getActiveObject().set('fontSize', i);
        obj.renderAll();
      }
      this.textFont = this.textFont - 1;
    }
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

  addText() {
    this.textDisplay = true;
  }
  textHeadingone: boolean = false;
  textSizeHeading1() {
    this.textHeadingone = true;

    this.textFont = 32;
    this.fontFamily = 'helvetica';
    this.FontSizebtnShow = true;

    this.canvas.add(
      new fabric.IText('HEADING 1', {
        left: 50,
        top: 100,
        fontFamily: 'helvetica neue',
        fill: '#000',
        stroke: '#fff',
        strokeWidth: 0,
        fontSize: this.textFont,
      })
    );

    this.deleteBtn = true;
  }
  textSizeHeading2() {
    this.textDisplay = true;
    this.textFont = 24;
    this.fontFamily = 'helvetica';
    this.FontSizebtnShow = true;

    this.canvas.add(
      new fabric.IText('HEADING 2', {
        left: 50,
        top: 100,
        fontFamily: 'helvetica neue',
        fill: '#000',
        stroke: '#fff',
        strokeWidth: 0,
        fontSize: this.textFont,
      })
    );

    this.deleteBtn = true;
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
        var canvas = this.canvas;
        var ctxt = this.canvas.getContext('2d');
        var background = new Image();
        background.src = this.imgFile;
        // let canvasWidth = this.canvaWidth;
        // let canvaHeigth = this.canvaHeigth;
        let data = event.target.result;
        canvas.width = this.canvaWidth;
        canvas.height = this.canvaHeigth;
        fabric.Image.fromURL(data, (img) => {
          // add background image
          canvas.setBackgroundImage(
            this.imgFile,
            canvas.renderAll.bind(canvas),
            {
              angle: 0,
              scaleX: canvas.width / background.width,
              scaleY: canvas.height / background.height,
            }
          );
        });
      };
    }
    // this.image = this.imgFile;
    let image = new fabric.Image(this.imgFile);
    image.crossOrigin = 'anonymous';
    image.set({
      left: 250,
      top: 250,
    });

    //image.scale(getRandomNum(0.1, 0.25)).setCoords();
  }
  resizeCanvas(event?: any) {
    this.canvas.setDimensions({
      width: this.canvaWidth,
      height: this.canvaWidth,
    });
  }
  textColors() {
    let obj = this.canvas;

    obj.getActiveObject().set('fill', this.textColor);
    obj.renderAll();
  }
  delete() {
    this.canvas.remove(this.canvas.getActiveObject());
  }
  imageDiv() {
    this.imageDisplay = true;
    this.textDisplay = false;
  }
  uploadImages(e: any) {
    var reader = new FileReader();
    if (e.target.files && e.target.files.length) {
      const [file] = e.target.files;
      reader.readAsDataURL(file);

      reader.onload = (f: any) => {
        var data = f.target.result;
        console.log('images', data);
        this.imgesArray.unshift(data);
        this.imageDisplay = true;
        console.log('array images', this.imgesArray);
      };
    }
  }
  onChangeElement(e: any) {
    //

    let canvas = this.canvas;
    let scale = 1;
    var data = e;
    console.log('data images', data);

    fabric.Image.fromURL(data, (img) => {
      console.log(img.width);
      let imgWidth: any = img.width;
      let imgHeight: any = img.height;

      console.log('scale', imgWidth);
      console.log('scale', imgHeight);
      console.log('scale', this.canvaWidth);
      console.log('scale', this.canvaHeigth);

      while (imgWidth > this.canvaWidth || imgHeight > this.canvaHeigth) {
        imgWidth = imgWidth * 0.9;
        imgHeight = imgHeight * 0.9;
        scale *= 0.9;
        console.log('inside', scale);
      }

      var oImg = img
        .set({
          left: 10,
          top: 10,
          angle: 0.2,
          //<-- set this
        })
        .scale(scale);
      canvas.add(oImg).renderAll();
      //var a = canvas.setActiveObject(oImg);
      // var dataURL = canvas.toDataURL({
      //   format: 'png',
      //   quality: 1,
      // });
    });
  }

  rasterize() {
    let downloadLink = document.createElement('a');
    downloadLink.setAttribute('download', 'CanvasAsImage.png');
    const image = new Image();
    image.crossOrigin = 'anonymous';
    image.src = this.canvas.toDataURL({
      format: 'png',
      quality: 3,
    });
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
    });
    // let deletbtn: Boolean = this.deleteBtn;
    // this.canvas.on('object:selected', function (e: any) {
    //   deletbtn = false;
    // });
    // this.canvas.on('before:selection:cleared', function (e: any) {
    //   deletbtn = true;
    // });

    // this.canvas.setBackgroundImage(this.onImageChange);
  }
}
