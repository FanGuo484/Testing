import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public ImgURL="https://angularimgs.s3.us-east-2.amazonaws.com/computer-icons-steam-tuners-steam.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
