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
    //
    this.generateSearch();
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
      .Theme(Froala.Theme.DARK)
      .ToolbarButtons({
        moreText: {
          buttons: ['bold', 'italic', 'underline', 'fontSize', 'textColor'],
          buttonsVisible: 2
        },
        moreParagraph: {
          buttons: ['paragraphFormat']
        },
        moreRich: {
          buttons: ['insertImage']
        },
        moreMisc: {
          buttons: ['undo', 'redo'],
        },
        test: {
          buttons: ['search'],
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
    console.log(this.froalaOptions);
  }

  onChangeContents(contents) {
    this.editorContents = contents;
  }

  private generateSearch(): void {
    // define icon
    FroalaEditor.DefineIcon('search', {NAME: 'info',  SVG_KEY: 'search'});
    FroalaEditor.RegisterCommand('search', {
      title: '상품 검색',
      focus: false,
      undo: false,
      plugin: 'searchPlugin',
      callback: function() {
        this.searchPlugin.showPopup();
      }
    });
    // search popup template 정의
    // buttons와 layer 프로퍼티 정의
    FroalaEditor.POPUP_TEMPLATES["searchPlugin.popup"] = '[_BUTTONS_][_CUSTOM_LAYER_]';
    // search popup 내부의 버튼들 정의
    Object.assign(FroalaEditor.DEFAULTS, {
      popupButtons: ['popupClose'],
    });
    // search popup 플러그인 정의
    FroalaEditor.PLUGINS.searchPlugin = function(editor) {
      // Create custom popup.
      function initPopup () {
        // Popup buttons.
        let popup_buttons = '';

        // Create the list of buttons.
        if (editor.opts.popupButtons.length > 0) {
          popup_buttons += '<div class="fr-buttons">';
          popup_buttons += editor.button.buildList(editor.opts.popupButtons);
          popup_buttons += '</div>';
        }
        // Load popup template.
        const template = {
          buttons: popup_buttons,
          custom_layer: '<div class="custom-layer">' +
                         '<input maxlength="7" type="text" tabindex="1" dir="ltr" class="">' +
                      '</div>'
        };
        // Create popup.
        const $popup = editor.popups.create('searchPlugin.popup', template);
        return $popup;
      }
      // Show the popup
      function showPopup () {
        // 정의된 팝업이 없다면 initial
        if (!editor.popups.get('searchPlugin.popup')) {
          initPopup();
        }
        // Set the editor toolbar as the popup's container.
        editor.popups.setContainer('searchPlugin.popup', editor.$tb);

        // This will trigger the refresh event assigned to the popup.
        // editor.popups.refresh('customPlugin.popup');

        // This custom popup is opened by pressing a button from the editor's toolbar.
        // Get the button's object in order to place the popup relative to it.
        const $btn = editor.$tb.find('.fr-command[data-cmd="search"]');

        // Set the popup's position.
        const left = $btn.offset().left + $btn.outerWidth() / 2;
        const top = $btn.offset().top + (editor.opts.toolbarBottom ? 10 : $btn.outerHeight() - 10);

        // Show the custom popup.
        // The button's outerHeight is required in case the popup needs to be displayed above it.
        editor.popups.show('searchPlugin.popup', left, top, $btn.outerHeight());
      }

      // Hide the custom popup.
      function hidePopup () {
        editor.popups.hide('searchPlugin.popup');
      }

      // Methods visible outside the plugin.
      return {
        showPopup: showPopup,
        hidePopup: hidePopup
      }
    };

    // Define custom popup close button icon and command.
    FroalaEditor.DefineIcon('popupClose', { NAME: 'times', SVG_KEY: 'back' });
    FroalaEditor.RegisterCommand('popupClose', {
      title: 'Close',
      undo: false,
      focus: false,
      callback: function () {
        this.searchPlugin.hidePopup();
      }
    });
  }
}
