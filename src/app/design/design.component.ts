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
  imgFile: any = '';
  resultImage: any;
  // selectedFile: any[];
  canvas: any;
  value: any;
  image: any =
    'https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg';
  width: number = 900;
  public changeSize() {
    this.canvas.changeSize();
  }
  // onFileChanged(event: any) {
  //   this.selectedFile = event.target.files[0];
  // }
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
  onFileChanged(event: any) {
    if (event.target.files.length == 0) return;
    this.selectedFile = <File>event.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(this.selectedFile);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    };

    var canvas: any = document.getElementById('canvas');
    var ctxt = canvas.getContext('2d');
    var background = new Image();
    background.src = this.imgURL;
    background.onload = function () {
      ctxt.drawImage(background, 0, 0, canvas.width, canvas.height);
    };
  }
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
      this.image = this.imgFile;
      let image = new fabric.Image(this.imgFile);
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
    debugger;
    const image = new Image();
    image.crossOrigin = 'anonymous';
    image.src = this.canvas.toDataURL('image/png');
    let wi: any = window.open('');
    // wi.document.write(image.outerHTML);
    // console.log('yes');
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
      'https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg',
      (image) => {
        image.set({
          left: 50,
          top: 70,
        });

        this.canvas.add(image);
      }
    );
    fabric.Image.fromURL(this.imgFile, (image) => {
      image.set({
        left: 50,
        top: 70,
      });

      this.canvas.add(this.imgFile);
    });
  }
}
