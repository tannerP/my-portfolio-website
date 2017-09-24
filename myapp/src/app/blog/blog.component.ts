import { Inject, Component, OnInit, AfterViewInit } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { Router } from '@angular/router';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit, AfterViewInit {
  public projects = [
    {
      name: 'BittyCasting',
      length: 'Jan - July, 2016',
      projectType: 'Full-stack Dev',
      path: '../../assets/medias/bittycasting_mock.png',
      func: 'demo',
      github: 'https://github.com/tannerP/BittyCasting/graphs/contributors',
    },
    {
      name: 'Lane Detection',
      length: 'Feb 2017',
      projectType: 'Video Processing',
      path: '../../assets/medias/selfDrivingCar_blakwhite.png',
      func: 'play',
      github: 'https://github.com/tannerP/detect_driving_lanes/graphs/contributors',
    },
    {
      name: 'My Portfolio',
      length: 'Aug 2017',
      projectType: 'Website Design',
      path: '../../assets/medias/sketchapp_background.png',
      func: 'read',
      github: 'https://github.com/tannerP/tannerphan.me/graphs/contributors',
    },
  ];
  constructor(private router: Router, @Inject(DOCUMENT) private document: any) { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }
  ngAfterViewInit() {
    // let a, position;
    //
    // a = document.querySelector('#utility');
    // position = a.getPosition();
    // console.log(position);
  }
  back_button() {
    this.router.navigateByUrl('/');
  }
  goto(name: string){
    this.router.navigateByUrl('/blog/' + name.toLocaleLowerCase());
  }
  open_tabwithresume() {

  }
}
