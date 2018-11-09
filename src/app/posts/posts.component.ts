import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Observable } from 'rxjs';
import { Post } from '../models/Post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts$: Observable<Post[]>;

  constructor(private postsService: PostsService) {}

  ngOnInit() {
    this.posts$ = this.postsService.getAllPosts();
  }
}
