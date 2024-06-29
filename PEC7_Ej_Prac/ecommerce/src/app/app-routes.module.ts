import { RouterModule, Routes } from "@angular/router";
import { ArticleDetailComponent } from "./article-detail/article-detail.component";
import { ArticleListComponent } from "./article-list/article-list.component";
import { ArticleNewReactiveComponent } from "./article-new-reactive/article-new-reactive.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

import { NgModule } from "@angular/core";
import { AuthGuard } from "./auth.guard";

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'article/list', component: ArticleListComponent },
    { path: 'article/create', component: ArticleNewReactiveComponent, canActivate: [AuthGuard] }, 
    { path: 'article/:id', component: ArticleDetailComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  