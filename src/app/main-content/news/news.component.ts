import { Component, OnInit} from '@angular/core';
import { News } from 'src/app/models/news';
import { PageEvent } from '@angular/material/paginator';
import { NewsService } from './news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  initialPageSize: number = 5;
  public allNews: News[] = [];
  newsPageSlice: News[] = [];

  onPageChange(e:PageEvent) {
    const startIndex = e.pageIndex * e.pageSize;
    let endIndex = startIndex + e.pageSize;
    if (endIndex > this.allNews.length) {
      endIndex=this.allNews.length
    }
    this.newsPageSlice=this.allNews.slice(startIndex,endIndex)
  }

  constructor(private newsService:NewsService) {
    
   }

  ngOnInit(): void {
    this.allNews = this.newsService.getNews();
    this.newsPageSlice = this.allNews.slice(0, this.initialPageSize);
  }


}
