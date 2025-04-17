import { ChangeDetectionStrategy, Component, DoCheck, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CapitalizePipe } from "../../pipes/capitalize.pipe";

@Component({
  selector: 'app-child',
  imports: [CapitalizePipe],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnChanges {
  @Input() counter = 0;
  @Input() inputValue = '';
  @Input() items: { id: number; value: string }[] = [];
  @Output() changeDetection = new EventEmitter<number>();

  changeDetectionRuns = 0;

  constructor() {
    console.log('ChildComponent: Constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ChildComponent: ngOnChanges', changes);
    if (changes['counter'] || changes['inputValue'] || changes['items']) {
      this.changeDetectionRuns++;
      this.changeDetection.emit(this.changeDetectionRuns);
    }
  }

}