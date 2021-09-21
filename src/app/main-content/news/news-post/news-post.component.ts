import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { News } from 'src/app/models/news';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-post',
  templateUrl: './news-post.component.html',
  styleUrls: ['./news-post.component.css']
})
export class NewsPostComponent implements OnInit {

  newsPost!:News; 

  constructor(private route: ActivatedRoute, private newsService: NewsService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.newsPost = this.newsService.getNewsPost(id);
  }

}
