import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  public projects = [
    {
      name: 'BittyCasting',
      length: '7 months',
      projectType: 'Software Startup',
      path: '../../assets/medias/bittycasting_mock.png',
    },
    {
      name: 'Lane Detection',
      length: '2 week',
      projectType: 'Udacity - Self Driving Car ND',
      path: '../../assets/medias/selfDrivingCar_blakwhite.png',
    },
    {
      name: 'About Tannerphan.me',
      length: 'Since 2017',
      projectType: 'Personal Portfolio',
      path: '../../assets/medias/sketchapp_background.png',
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
