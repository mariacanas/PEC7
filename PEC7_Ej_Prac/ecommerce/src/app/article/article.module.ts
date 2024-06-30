import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ArticleDetailComponent } from '../article-detail/article-detail.component';
import { ArticleListComponent } from '../article-list/article-list.component';
import { ArticleNewReactiveComponent } from '../article-new-reactive/article-new-reactive.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  { path: 'list', component: ArticleListComponent },
  { path: 'create', component: ArticleNewReactiveComponent, canActivate: [AuthGuard] },
  { path: ':id', component: ArticleDetailComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ArticleModule { }
