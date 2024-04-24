import { Component } from '@angular/core';
import { IGX_ACCORDION_DIRECTIVES, IGX_CHIPS_DIRECTIVES, IGX_EXPANSION_PANEL_DIRECTIVES, IGX_LIST_DIRECTIVES, IGX_TABS_DIRECTIVES, IgxAvatarComponent, IgxButtonDirective, IgxCheckboxComponent, IgxIconComponent, IgxOverlayOutletDirective, IgxRippleDirective, IgxToggleActionDirective, IgxToggleDirective } from 'igniteui-angular';

@Component({
  selector: 'app-account-sample',
  standalone: true,
  imports: [IGX_EXPANSION_PANEL_DIRECTIVES, IGX_ACCORDION_DIRECTIVES, IGX_CHIPS_DIRECTIVES, IGX_TABS_DIRECTIVES, IGX_LIST_DIRECTIVES, IgxToggleActionDirective, IgxOverlayOutletDirective, IgxButtonDirective, IgxRippleDirective, IgxToggleDirective, IgxIconComponent, IgxAvatarComponent, IgxCheckboxComponent],
  templateUrl: './account-sample.component.html',
  styleUrls: ['./account-sample.component.scss']
})
export class AccountSampleComponent {}
