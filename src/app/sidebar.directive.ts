import { Directive } from '@angular/core';

@Directive({ selector: 'sidebar' })
export class SidebarDirective {
  cs = console.log(Directive);
}
