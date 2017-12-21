import {Component} from 'angular2/core';

@Component ({
    selector: 'pluto-button',
    templateUrl: 'template/button.component.html',
})

export class ButtonComponent {
    public name:string = 'Click me';
    
    public onClick() {
        alert('You click the button.');
    }
}