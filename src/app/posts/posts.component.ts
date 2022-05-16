import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { IPost } from '../Shared Classes and types/iPost';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor(private postService:PostService) { }

  posts:IPost[] = []

  errorMessage:any;

  ngOnInit(): void {
    this.postService.getPosts().subscribe(postsData=>
      {
        this.posts=postsData;
      },error=>{
         this.errorMessage=error;
      })
  }


}
