import { Component, OnInit, Input, ElementRef, AfterViewChecked, NgZone, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit, AfterViewChecked {

  @Input() post;

  constructor(private el: ElementRef, private zone: NgZone) { }

  addComment (post, newComment) {
    post.comments.push({text: newComment})
  }

  ngOnInit() {
  }

  ngAfterViewChecked(): void {
    console.log('hi');
    this.zone.runOutsideAngular(() => {
      this.el.nativeElement.classList.add('highlight')
      setTimeout(() => {
        this.el.nativeElement.classList.remove('highlight')
      }, 1500)
    })
  }

}
