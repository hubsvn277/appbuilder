import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { IGX_LIST_DIRECTIVES, IGX_NAVBAR_DIRECTIVES, IGX_NAVIGATION_DRAWER_DIRECTIVES, IgxAvatarComponent, IgxIconButtonDirective, IgxIconComponent, IgxOverlayOutletDirective, IgxRippleDirective, IgxToggleActionDirective, IgxToggleDirective } from 'igniteui-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IGX_NAVIGATION_DRAWER_DIRECTIVES, IGX_NAVBAR_DIRECTIVES, IGX_LIST_DIRECTIVES, IgxIconButtonDirective, IgxToggleActionDirective, IgxOverlayOutletDirective, IgxIconComponent, IgxRippleDirective, IgxToggleDirective, IgxAvatarComponent, RouterLink, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}
