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

  newsPost!: News;
  imageValues = { cols: 0, rows: 0 };
  descriptionValues = { cols: 0, rows: 0 };
  bioValues = { cols: 0, rows: 0 };

  constructor(private route: ActivatedRoute, private newsService: NewsService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.newsPost = this.newsService.getNewsPost(id);

    if (window.innerWidth >= 1100) {
      this.imageValues.cols = 2;
      this.imageValues.rows = 4;
      this.descriptionValues.cols = 2;
      this.descriptionValues.rows = 2;
      this.bioValues.cols = 4;
      this.bioValues.rows = 2;
    } else if (window.innerWidth >= 767) {
      this.imageValues.cols = 2;
      this.imageValues.rows = 2;
      this.descriptionValues.cols = 2;
      this.descriptionValues.rows = 2;
      this.bioValues.cols = 4;
      this.bioValues.rows = 4;
    } else {
      this.imageValues.cols = 4;
      this.imageValues.rows = 4;
      this.descriptionValues.cols = 4;
      this.descriptionValues.rows = 1;
      this.bioValues.cols = 4;
      this.bioValues.rows = 6;
    }
  }

  onResize(event: any) {
    if (event.target.innerWidth >= 1100) {
      this.imageValues.cols = 4;
      this.imageValues.rows = 4;
      this.descriptionValues.cols = 4;
      this.descriptionValues.rows = 1;
      this.bioValues.cols = 4;
      this.bioValues.rows = 2;
    } else if (event.target.innerWidth >= 767) {
      this.imageValues.cols = 4;
      this.imageValues.rows = 4;
      this.descriptionValues.cols = 4;
      this.descriptionValues.rows = 1;
      this.bioValues.cols = 4;
      this.bioValues.rows = 4;
    } else {
      this.imageValues.cols = 4;
      this.imageValues.rows = 4;
      this.descriptionValues.cols = 4;
      this.descriptionValues.rows = 1;
      this.bioValues.cols = 4;
      this.bioValues.rows = 6;
    }
  }
}
