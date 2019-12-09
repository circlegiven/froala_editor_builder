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
      .HeightMax(400)
      .HeightMin(400)
      .PlaceholderText('placeholder test')
      .Width('auto')
      .FontSize(['1','5','10'])
      .PluginsEnabled([Froala.Plugin.PARAGRAPH_FORMAT, Froala.Plugin.FONT_SIZE, Froala.Plugin.IMAGE, Froala.Plugin.COLORS, Froala.Plugin.CHAR_COUNTER])
      .ImageDefaultDisplay(Froala.Display.INLINE)
      .ImageDefaultWidth(0)
      .ImageMaxSize(1024 * 1024 * 3)
      .CharCounterCount(true)
      .ToolbarSticky(false)
      .Attribution(false)
      .Language(Froala.Language.KO)
      .build();
    console.log(this.froalaOptions);
  }
}
