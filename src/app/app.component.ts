import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NaviComponent } from './navi/navi.component';
import {AboutComponent} from './about/about.component'
import {ServiceComponent} from './service/service.component'
import {TagComponent} from './tag/tag.component'
import {ProjectComponent} from './project/project.component'
import {CertuComponent} from './certu/certu.component'
import {ContactComponent} from './contact/contact.component'
import {FooterComponent} from './footer/footer.component'



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NaviComponent,
    AboutComponent,
    ServiceComponent,
    TagComponent,
    ProjectComponent,
    CertuComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pro';
}
