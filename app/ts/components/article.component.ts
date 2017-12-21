import {Component} from 'angular2/core';
import {Article} from '../models/Article';
import {Video} from '../models/video';

@Component({
    selector: 'pluto-article',
    templateUrl : 'template/article.component.html',
    inputs: ['Articles']
})

export class ArticleComponent {

}