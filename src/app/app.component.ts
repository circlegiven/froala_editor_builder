import {Component, OnInit} from '@angular/core';
import {Froala, FroalaOptionsBuilder} from "../froala";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Froala editor builder';
  editorContents: string;
  froalaOptions: Froala.Options;

  ngOnInit(): void {
    // set froala editor options
    this.froalaOptions = new FroalaOptionsBuilder()
      .FontSize(['1','5','10'])
      .Attribution(false)
      .build();
    console.log(this.froalaOptions);
  }
}
