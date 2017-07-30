import { Component } from '@angular/core';

@Component({
  selector: 'app-root',

  /*
  "moduleId" allows to remove the absolute path and changes to relative path
  for all the Url specify like below be just stating only the file itself
  */
  moduleId: module.id,
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'] // this is an array properties
})
export class AppComponent {
  pageTitle = 'Acme Product Management';
}
