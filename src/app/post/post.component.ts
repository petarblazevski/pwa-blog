import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Post } from '../models/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post: Post;

  @HostBinding('class') classes = 'm-4 shadow p-3 block';

  constructor() {}

  ngOnInit() {}
}
