import { Component, ContentChildren, Directive, Input, QueryList } from '@angular/core';

@Directive({ selector: 'pane' })
export class Pane {
  @Input() id!: string;
}

@Component({
  selector: 'tab',
  template: `
    <div class="top-level">Top level panes: {{serializedPanes}}</div>
    <div class="nested">Arbitrary nested panes: {{serializedNestedPanes}}</div>
  `
})
export class Tab {
  @ContentChildren(Pane) topLevelPanes!: QueryList<Pane>;
  @ContentChildren(Pane, { descendants: true }) arbitraryNestedPanes!: QueryList<Pane>;

  get serializedPanes(): string {
    return this.topLevelPanes ? this.topLevelPanes.map(p => p.id).join(', ') : '';
  }
  get serializedNestedPanes(): string {
    return this.arbitraryNestedPanes ? this.arbitraryNestedPanes.map(p => p.id).join(', ') : '';
  }
}

@Component({
  selector: 'app-dx-components',
  template: `
    <tab>
      <pane id="1"></pane>
      <pane id="2"></pane>
      <pane id="3" *ngIf="shouldShow">
        <tab>
          <pane id="3_1"></pane>
          <pane id="3_2"></pane>
        </tab>
      </pane>
    </tab>

    <button (click)="show()">Show 3</button>
  `,
})
export class DxComponentsComponent {
  shouldShow = false;

  show() {
    this.shouldShow = true;
  }
}







// import { Component, Directive, Input, ViewChild } from '@angular/core';

// @Directive({ selector: 'pane' })
// export class Pane {
//   @Input() id!: string;
// }


// @Component({
//   selector: 'app-dx-components',
//   templateUrl: './dx-components.component.html',
//   styleUrls: ['./dx-components.component.scss']
// })
// export class DxComponentsComponent {
//   @ViewChild(Pane)
//   set pane(v: Pane) {
//     setTimeout(() => {
//       this.selectedPane = v.id;
//     }, 0);
//   }
//   selectedPane: string = '';
//   shouldShow = true;
//   toggle() {
//     this.shouldShow = !this.shouldShow;
//   }
// }
