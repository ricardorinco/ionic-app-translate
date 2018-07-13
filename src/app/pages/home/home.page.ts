import { Component } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'page-home',
    templateUrl: 'home.page.html'
})
export class HomePage {

    public docEmmettBrown = { value: 'Doc' };
    public title;
    public userPublisher: string = 'Marty McFly';

    constructor(private translate: TranslateService) {
        this.onSetLanguage('en-us');
    }

    public onSetLanguage(languague: string) {
        this.translate.use(languague);
        this.translate.get('Home.Title').subscribe((translate: string) => this.title = translate);

        console.log('Browser languague:', this.translate.getBrowserLang());
    }

}
