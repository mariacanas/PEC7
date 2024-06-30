import { RouterModule, Routes } from "@angular/router";
import { ArticleDetailComponent } from "./article-detail/article-detail.component";
import { ArticleListComponent } from "./article-list/article-list.component";
import { ArticleNewReactiveComponent } from "./article-new-reactive/article-new-reactive.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

import { NgModule } from "@angular/core";
import { AuthGuard } from "./auth.guard";

const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
    { path: 'article', loadChildren: () => import('./article/article.module').then(m => m.ArticleModule) }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  