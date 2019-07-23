import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  Posts = [
    {
      title: 'Mon premier post',
      // tslint:disable-next-line:max-line-length
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a elit massa. Pellentesque ut ipsum semper, efficitur risus non, hendrerit mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos',
      loveIts: 0,
      createAt: new Date ()
    },
    {
      title: 'Mon deuxieme post',
      // tslint:disable-next-line:max-line-length
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a elit massa. Pellentesque ut ipsum semper, efficitur risus non, hendrerit mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos',
      loveIts: 0,
      createAt: new Date()
    },
    {
      title: 'Encore un post',
      // tslint:disable-next-line:max-line-length
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a elit massa. Pellentesque ut ipsum semper, efficitur risus non, hendrerit mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos',
      loveIts: 0,
      createAt: new Date()
    }
  ];
}
