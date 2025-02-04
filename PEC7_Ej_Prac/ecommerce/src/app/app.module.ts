import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleNewReactiveComponent } from './article-new-reactive/article-new-reactive.component';
import { ArticleItemComponent } from './article-item/article-item.component';
import { ImageArticlePipe } from './pipes/image-article.pipe';
import { AuthInterceptorService } from './auth.interceptor';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from './app-routes.module';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { ArticleModule } from './article/article.module';
import { AuthModule } from './auth/auth.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ArticleListComponent,
    ArticleNewReactiveComponent,
    ArticleItemComponent,
    ImageArticlePipe,
    LoginComponent,
    RegisterComponent,
    ArticleDetailComponent
  ],
  imports: [
    BrowserModule, FormsModule,ReactiveFormsModule,HttpClientModule,AppRoutingModule, ArticleModule, AuthModule
  ],
  providers: [ 
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
