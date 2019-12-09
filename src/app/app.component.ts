import {Component, OnInit, ViewChild} from '@angular/core';
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
      .ToolbarButtons({
        moreText: {
          buttons: ['bold', 'italic', 'underline', 'fontSize', 'textColor']
        },
        moreParagraph: {
          buttons: ['paragraphFormat']
        },
        moreRich: {
          buttons: ['insertImage']
        },
        moreMisc: {
          buttons: ['undo', 'alert', 'redo'],
        }
      })
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
        'image.error': (error, response) => {
          if (error.code === 1) {
            error.message = 'test';
          }
        },
      })
      .build();
    FroalaEditor.DefineIcon('alert', {NAME: 'info'});
    FroalaEditor.RegisterCommand('alert', {
      title: 'alert',
      focus: false,
      undo: false,
      refreshAfterCallback: false,

      callback: () => {
        console.log('Hello!', this);
      }
    });
    console.log(this.froalaOptions);
  }

  onChangeContents(contents) {
    console.log(contents);
  }

  froalaInitTest(data) {
    console.log('froalaInitTest', data);
  }
}
