import { Component } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html'
})
export class ArticleDetailComponent {
  article: any;
  
  constructor(private route: ActivatedRoute, private articleService: ArticleService) {}

  ngOnInit(): void {
    let articleId: string;

    if(articleId = this.route.snapshot.paramMap.get('id')){
      this.articleService.getArticleById(articleId).subscribe((data) => {
        this.article = data;
      });
    }
  }

}
