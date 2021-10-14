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
  isTextformat = false;
  imgFile: any = '';

  resultImage: any;
  // selectedFile: any[];
  canvas: any;
  value: any;
  // image: any =
  //   'https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg';
  width: number = 900;
  public changeSize() {
    this.canvas.changeSize();
  }
  // onFileChanged(event: any) {
  //   this.selectedFile = event.target.files[0];
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

    const image = new Image();
    image.crossOrigin = 'anonymous';
    image.src = this.canvas.toDataURL({ format: 'jpg' });
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

    this.canvas.add(
      new fabric.IText('world  !', {
        left: 50,
        top: 50,
        fontFamily: 'Helvetica',
        fill: '#FFFFFF',
        lineHeight: 1.1,

        styles: {
          0: {
            0: { textDecoration: 'underline', fontSize: 80 },
            1: {},
          },
          1: {
            0: { textBackgroundColor: 'rgba(255,255,0,0.3);' },
            4: { fontSize: 20 },
          },
        },
      })
    );
    this.canvas.add(
      new fabric.IText('tour  !', {
        left: 50,
        top: 50,
        fontFamily: 'Helvetica',
        fill: '#FFFFFF',
        lineHeight: 1.1,

        styles: {
          0: {
            0: { textDecoration: 'underline', fontSize: 80 },
            1: {},
          },
          1: {
            0: { textBackgroundColor: 'rgba(255,255,0,0.3);' },
            4: { fontSize: 20 },
          },
        },
      })
    );

    fabric.Image.fromURL(
      'data:image/png;base64,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',
      (image) => {
        image.crossOrigin = 'anonymous';

        image.set({
          left: 50,
          top: 70,
        });

        this.canvas.add(image);
        this.canvas.add(
          new fabric.IText('value', {
            left: 50,
            top: 50,
            fontFamily: 'Helvetica',
            fill: '#FFFFFF',
            lineHeight: 1.1,

            styles: {
              0: {
                0: { textDecoration: 'underline', fontSize: 80 },
                1: {},
              },
              1: {
                0: { textBackgroundColor: 'rgba(255,255,0,0.3);' },
                4: { fontSize: 20 },
              },
            },
          })
        );
      }
    );

    // fabric.Image.fromURL(this.imgFile, (image) => {
    //   image.set({
    //     left: 50,
    //     top: 70,
    //   });

    //   this.canvas.add(this.imgFile);
    // });
  }
}
