import {Component, OnInit} from '@angular/core';
import {Froala, FroalaOptionsBuilder} from "../froala";
import FroalaEditor from 'froala-editor';


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
      .HeightMax(400)
      .HeightMin(400)
      .PlaceholderText('placeholder test')
      .Width('auto')
      .FontSize(['1','5','10'])
      .ImageDefaultDisplay(Froala.Display.INLINE)
      .ImageDefaultWidth(0)
      .ImageMaxSize(1024 * 1024 * 3)
      .CharCounterCount(true)
      .ToolbarSticky(false)
      .Attribution(false)
      .FontFamily({
        'Arial,Helvetica,sans-serif': 'Arial',
        'Courier New,Courier,monospace': 'Courier New',
        'Georgia,serif': 'Georgia',
        'Impact,Charcoal,sans-serif': 'Impact',
        'Lucida Console,Monaco,monospace': 'Lucida Console',
        'Tahoma,Geneva,sans-serif': 'Tahoma',
        'Times New Roman,Times,serif': 'Times New Roman',
        'Verdana,Geneva,sans-serif': 'Verdana',
      })
      .Language(Froala.Language.KO)
      .Events({
        keyup: (event) => {
          console.log('keyup test', event);
        },
      })
      .build();
    console.log(this.froalaOptions);
  }
}
