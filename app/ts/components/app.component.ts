import { Component } from 'angular2/core';
import { Config } from '../config/config.service';
import { Article } from '../models/Article';
import { ArticleComponent } from '../components/article.component';

@Component({
    selector: 'pluto-app',
    templateUrl: 'template/app.component.html',
    directives: [ArticleComponent]
})

export class AppComponent {
    public Welcome = Config.Welcome;
    public Title = Config.Title;
    public Articles: Array<Article>;

    constructor() {
        this.Articles = [
            new Article(1, "Article Title 1", "Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop"),
            new Article(2, "Article Title 2", "Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop"),
            new Article(3, "Article Title 3", "Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop"),
            new Article(4, "Article Title 4", "Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop"),
            new Article(5, "Article Title 5", "Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop")
        ];
    }
}