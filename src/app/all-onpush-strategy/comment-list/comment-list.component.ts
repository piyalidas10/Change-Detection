import { Component, OnInit, Input, Output, EventEmitter, ElementRef, NgZone, ChangeDetectionStrategy, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentListComponent implements OnInit, AfterViewChecked {

  @Input() comments;
  @Output() addComment = new EventEmitter();
  constructor(private el: ElementRef, private zone: NgZone) { }

  ngOnInit() {
  }

  ngAfterViewChecked(): void {
    this.zone.runOutsideAngular(() => {
      this.el.nativeElement.classList.add('highlight')
      setTimeout(() => {
        this.el.nativeElement.classList.remove('highlight')
      }, 1500)
    })
  }

}
