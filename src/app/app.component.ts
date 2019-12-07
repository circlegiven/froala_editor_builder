import {Component, OnInit} from '@angular/core';
import {Froala} from "../froala/froala";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Froala editor builder';
  editorContents: string;
  froalaOptions;

  ngOnInit(): void {
    // set froala editor options
    this.froalaOptions = new Froala.OptionsBuilder()
      .FontSize(['1','5','10'])
      .build();
    console.log(this.froalaOptions);
  }
}
