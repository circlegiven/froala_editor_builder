import * as _ from 'lodash';

export namespace Froala {

    export class OptionsBuilder {
        // Colors
        private _colorsBackground: string[];
        private _colorsButtons: string[];
        private _colorsHEXInput: boolean;
        private _colorsStep: number;
        private _colorsText: string[];
        // Draggable
        private _dragInline: boolean;
        // Embedly
        private _embedlyKey: string;
        private _embedlyEditButtons: string[];
        private _embedlyInsertButtons: string[];
        private _embedlyScriptPath: string;
        // Emoticons
        private _emoticonsButtons: string[];
        private _emoticonsUseImage: boolean;
        private _emoticonsSet: object[];
        private _emoticonsStep: number;
        // Entities
        private _entities: string;
        // File
        private _fileAllowedTypes: string[];
        private _fileInsertButtons: string[];
        private _fileMaxSize: number;
        private _fileUpload: boolean;
        private _fileUploadMethod: string;
        private _fileUploadParam: string;
        private _fileUploadParams: object;
        private _fileUploadToS3: object;
        private _fileUploadURL: string;
        private _fileUseSelectedText: boolean;
        // Font Family
        private _fontFamily: object;
        private _fontFamilyDefaultSelection: string;
        private _fontFamilySelection: boolean;
        // Font Size
        private _fontSizeSelection: boolean;
        private _fontSize: string[];
        private _fontSizeDefaultSelection: string;
        private _fontSizeUnit: string;



        build(): Options {
            return new Options(this);
        }

        /**
         * An array of colors used in the colors popup for background.
         * Passing REMOVE as a value in the array will display the Clear Formatting button for colors.
         * Require plugin: colors.min.js
         * @param {string[]} values
         * @return {OptionsBuilder}
         */
        ColorsBackground(values: string[]): OptionsBuilder {
            this._colorsBackground = values;
            return this;
        }
        get colorsBackground(): string[] {
            return this._colorsBackground;
        }

        /**
         * Set the buttons the colors popup.
         * Require plugin: colors.min.js
         * @param {string[]} values
         * @return {OptionsBuilder}
         */
        ColorsButtons(values: string[]): OptionsBuilder {
            this._colorsButtons = values;
            return this;
        }
        get colorsButtons(): string[] {
            return this._colorsButtons;
        }

        /**
         * Show HEX input to choose custom color.
         * Require plugin: colors.min.js
         * @param {boolean} value
         * @return {OptionsBuilder}
         */
        ColorsHEXInput(value: boolean): OptionsBuilder {
            this._colorsHEXInput = value;
            return this;
        }
        get colorsHEXInput(): boolean {
            return this._colorsHEXInput;
        }

        /**
         * The number of colors displayed on a line in the colors popup.
         * Require plugin: colors.min.js
         * @param {number} value
         * @return {OptionsBuilder}
         */
        ColorsStep(value: number): OptionsBuilder {
            this._colorsStep = value;
            return this;
        }
        get colorsStep(): number {
            return this._colorsStep;
        }

        /**
         * An array of colors used in the colors popup for text.
         * Passing REMOVE as a value in the array will display the Clear Formatting button for colors.
         * Require plugin: colors.min.js
         * @param {string[]} values
         * @return {OptionsBuilder}
         */
        ColorsText(values: string[]): OptionsBuilder {
            this._colorsText = values;
            return this;
        }
        get colorsText(): string[] {
            return this._colorsText;
        }

        /**
         * Specifies how the dragged elements should be placed in the new position.
         * When this option is disabled, the dragged elements are placed between block tags and not inside them.
         * Require plugin: draggable.min.js
         * @param {boolean} value
         * @return {OptionsBuilder}
         */
        DragInline(value: boolean): OptionsBuilder {
            this._dragInline = value;
            return this;
        }
        get dragInline(): boolean {
            return this._dragInline;
        }

        /**
         * Your key from Embed.ly to remove the "Powered By Banner".
         * Require plugin: embedly.min.js
         * @param {string} value
         * @return {OptionsBuilder}
         */
        EmbedlyKey(value: string): OptionsBuilder {
            this._embedlyKey = value;
            return this;
        }
        get embedlyKey(): string {
            return this._embedlyKey;
        }

        /**
         * The buttons that appear in the edit Embed.ly popup, when an embedded object is selected.
         * Require plugin: video.min.js
         * @param {string[]} values
         * @return {OptionsBuilder}
         */
        EmbedlyEditButtons(values: string[]): OptionsBuilder {
            this._embedlyEditButtons = values;
            return this;
        }
        get embedlyEditButtons(): string[] {
            return this._embedlyEditButtons;
        }

        /**
         * The buttons that appear in the insert Embed.ly popup, when an embeded object is inserted into the WYSIWYG editor.
         * Require plugin: embedly.min.js
         * @param {string[]} values
         * @return {OptionsBuilder}
         */
        EmbedlyInsertButtons(values: string[]): OptionsBuilder {
            this._embedlyInsertButtons = values;
            return this;
        }
        get embedlyInsertButtons(): string[] {
            return this._embedlyInsertButtons;
        }

        /**
         * The default script path for the Embedly JS.
         * Require plugin: embedly.min.js
         * @param {string} value
         * @return {OptionsBuilder}
         */
        EmbedlyScriptPath(value: string): OptionsBuilder {
            this._embedlyScriptPath = value;
            return this;
        }
        get embedlyScriptPath(): string {
            return this._embedlyScriptPath;
        }

        /**
         * Buttons set for emoticons popup.
         * Require plugin: emoticons.min.js
         * @param {string[]} values
         * @return {OptionsBuilder}
         */
        EmoticonsButtons(values: string[]): OptionsBuilder {
            this._emoticonsButtons = values;
            return this;
        }
        get emoticonsButtons(): string[] {
            return this._emoticonsButtons;
        }

        /**
         * An array of emoticons available in the insert emoticon popup.
         * Each emoticon is defined by an Object containing the code and description of each emoticon.
         * Require plugin: emoticons.min.js
         * @param {object[]} values
         * @return {OptionsBuilder}
         */
        EmoticonsSet(values: object[]): OptionsBuilder {
            this._emoticonsSet = values;
            return this;
        }
        get emoticonsSet(): object[] {
            return this._emoticonsSet;
        }

        /**
         * Use EmojiOne svg images instead of Unicode text.
         * Require plugin: emoticons.min.js
         * @param {boolean} value
         * @return {OptionsBuilder}
         */
        EmoticonsUseImage(value: boolean): OptionsBuilder {
            this._emoticonsUseImage = value;
            return this;
        }
        get emoticonsUseImage(): boolean {
            return this._emoticonsUseImage;
        }

        /**
         * The number of emoticons displayed on a line in the insert emoticon popup.
         * Require plugin: emoticons.min.js
         * @param {number} value
         * @return {OptionsBuilder}
         */
        EmoticonsStep(value: number): OptionsBuilder {
            this._emoticonsStep = value;
            return this;
        }
        get emoticonsStep(): number {
            return this._emoticonsStep;
        }

        /**
         * A list with the characters that are reserved in HTML.
         * More details about using entities in HTML can be found on W3C and Wikipedia.
         * Require plugin: entities.min.js
         * @param {string} value
         * @return {OptionsBuilder}
         */
        Entities(value: string): OptionsBuilder {
            this._entities = value;
            return this;
        }
        get entities(): string {
            return this._entities;
        }

        /**
         * The list of file types that are allowed to be uploaded.
         * Although this will restrict uploading other types of files, we strongly recommend you to check the file type on the server too.
         * Require plugin: file.min.js
         * @param {string[]} values
         * @return {OptionsBuilder}
         */
        FileAllowedTypes(values: string[]): OptionsBuilder {
            this._fileAllowedTypes = values;
            return this;
        }
        get fileAllowedTypes(): string[] {
            return this._fileAllowedTypes;
        }

        /**
         * The list of buttons that appear in the insert file popup, when inserting a new file into the WYSIWYG editor.
         * Require plugin: file.min.js
         * @param {string[]} values
         * @return {OptionsBuilder}
         */
        FileInsertButtons(values: string[]): OptionsBuilder {
            this._fileInsertButtons = values;
            return this;
        }
        get fileInsertButtons(): string[] {
            return this._fileInsertButtons;
        }

        /**
         * The maximum file size allowed on upload in bytes.
         * The default value is 10MB.
         * Although this makes an additional check before uploading the file, it is highly recommended to check file size on your server too.
         * Require plugin: file.min.js
         * @param {number} value
         * @return {OptionsBuilder}
         */
        FileMaxSize(value: number): OptionsBuilder {
            this._fileMaxSize = value;
            return this;
        }
        get fileMaxSize(): number {
            return this._fileMaxSize;
        }

        /**
         * Enable or disable file upload.
         * Require plugin: file.min.js
         * @param {boolean} value
         * @return {OptionsBuilder}
         */
        FileUpload(value: boolean): OptionsBuilder {
            this._fileUpload = value;
            return this;
        }
        get fileUpload(): boolean {
            return this._fileUpload;
        }

        /**
         * The HTTP file upload request type.
         * Require plugin: file.min.js
         * @param {string} value
         * @return {OptionsBuilder}
         */
        FileUploadMethod(value: string): OptionsBuilder {
            this._fileUploadMethod = value;
            return this;
        }
        get fileUploadMethod(): string {
            return this._fileUploadMethod;
        }

        /**
         * Customize the name of the parameter that contains the file in the upload request.
         * Require plugin: file.min.js
         * @param {string} value
         * @return {OptionsBuilder}
         */
        FileUploadParam(value: string): OptionsBuilder {
            this._fileUploadParam = value;
            return this;
        }
        get fileUploadParam(): string {
            return this._fileUploadParam;
        }

        /**
         * Pass additional parameters to the file upload request.
         * Require plugin: file.min.js
         * @param {object} value
         * @return {OptionsBuilder}
         */
        FileUploadParams(value: object): OptionsBuilder {
            this._fileUploadParams = value;
            return this;
        }
        get fileUploadParams(): object {
            return this._fileUploadParams;
        }

        /**
         * Set the options for file upload to S3.
         * All the fields from the example below are required.
         * Also make sure that you have enabled CORS on Amazon.
         * Note: uploadURL property can be used instead of bucket and region properties to specify a custom URL from Amazon where to upload the image.
         *
         * Require plugin: file.min.js
         * @param {object} value
         * @return {OptionsBuilder}
         */
        FileUploadToS3(value: object): OptionsBuilder {
            this._fileUploadToS3 = value;
            return this;
        }
        get fileUploadToS3(): object {
            return this._fileUploadToS3;
        }

        /**
         * The URL where the files uploaded by the user are saved.
         * When a file is uploaded, the editor sends the file to the server through a HTTP request.
         * The server should process the data from the file parameter of the request and return a JSON object containing a link field with the link to the uploaded file.
         * More details can be found in the File Upload concept article.
         * E.g. {link: 'path/to/file.pdf'}.
         * Note 1: By default, the files are stored on our servers, but if you want to have full control over them, you should consider implementing the upload on your server. The files stored on our servers, may be deleted at any time without any notice.
         * Note 2: If the domain where the file is saved is not the same with the one where the editor is running, you may need to enable requestWithCORS option and make specific customizations on the server. For more information please refer to Cross-origin resource sharing.
         *
         * Require plugin: file.min.js
         * @param {string} value
         * @return {OptionsBuilder}
         */
        FileUploadURL(value: string): OptionsBuilder {
            this._fileUploadURL = value;
            return this;
        }
        get fileUploadURL(): string {
            return this._fileUploadURL;
        }

        /**
         * Enables using the file's name instead of the selected text when a file is inserted.
         *
         * Require plugin: file.min.js
         * @param {boolean} value
         * @return {OptionsBuilder}
         */
        FileUseSelectedText(value: boolean): OptionsBuilder {
            this._fileUseSelectedText = value;
            return this;
        }
        get fileUseSelectedText(): boolean {
            return this._fileUseSelectedText;
        }

        /**
         * Defines the fonts that appear under the Font Family button from the rich text editor's toolbar.
         *
         * Require plugin: font_family.min.js
         * @param {object} value
         * @return {OptionsBuilder}
         */
        FontFamily(value: object): OptionsBuilder {
            this._fontFamily = value;
            return this;
        }
        get fontFamily(): object {
            return this._fontFamily;
        }

        /**
         * The text to display when the font family is unkown or nothing is selected.
         *
         * Require plugin: font_family.min.js
         * @param {string} value
         * @return {OptionsBuilder}
         */
        FontFamilyDefaultSelection(value: string): OptionsBuilder {
            this._fontFamilyDefaultSelection = value;
            return this;
        }
        get fontFamilyDefaultSelection(): string {
            return this._fontFamilyDefaultSelection;
        }

        /**
         * The Font Family button from the WYSIWYG editor's toolbar is replaced with a dropdown showing the actual font family name for the current text selection.
         *
         * Require plugin: font_family.min.js
         * @param {boolean} value
         * @return {OptionsBuilder}
         */
        FontFamilySelection(value: boolean): OptionsBuilder {
            this._fontFamilySelection = value;
            return this;
        }
        get fontFamilySelection(): boolean {
            return this._fontFamilySelection;
        }

        /**
         * The Font Size button from the WYSIWYG editor's toolbar is replaced with a dropdown showing the actual font size value for the current text selection.
         *
         * Require plugin: font_size.min.js
         * @param {boolean} value
         * @return {OptionsBuilder}
         */
        FontSizeSelection(value: boolean): OptionsBuilder {
          this._fontSizeSelection = value;
          return this;
        }
        get fontSizeSelection(): boolean {
          return this._fontSizeSelection;
        }

        /**
         * Defines the font sizes that appear under the Font Size button from the rich text editor's toolbar.
         *
         * Require plugin: font_size.min.js
         * @param {string[]} values
         * @return {OptionsBuilder}
         */
        FontSize(values: string[]): OptionsBuilder {
          this._fontSize = values;
          return this;
        }
        get fontSize(): string[] {
          return this._fontSize;
        }

      /**
       * The text to display when the font size is unkown or nothing is selected.
       *
       * Require plugin: font_size.min.js
       * @param {string} value
       * @return {OptionsBuilder}
       */
      FontSizeDefaultSelection(value: string): OptionsBuilder {
        this._fontSizeDefaultSelection = value;
        return this;
      }
      get fontSizeDefaultSelection(): string {
        return this._fontSizeDefaultSelection;
      }

      /**
       * The unit to be used for the font size.
       *
       * Require plugin: font_size.min.js
       * @param {string} value
       * @return {OptionsBuilder}
       */
      FontSizeUnit(value: string): OptionsBuilder {
        this._fontSizeUnit = value;
        return this;
      }
      get fontSizeUnit(): string {
        return this._fontSizeUnit;
      }
    }


    class Options {
        // colors
        colorsBackground: string[];
        colorsButtons: string[];
        colorsHEXInput: boolean;
        colorsStep: number;
        colorsText: string[];
        // draggable
        dragInline: boolean;
      // Embedly
      private _embedlyKey: string;
      private _embedlyEditButtons: string[];
      private _embedlyInsertButtons: string[];
      private _embedlyScriptPath: string;
      // Emoticons
      private _emoticonsButtons: string[];
      private _emoticonsUseImage: boolean;
      private _emoticonsSet: object[];
      private _emoticonsStep: number;
      // Entities
      private _entities: string;
      // File
      private _fileAllowedTypes: string[];
      private _fileInsertButtons: string[];
      private _fileMaxSize: number;
      private _fileUpload: boolean;
      private _fileUploadMethod: string;
      private _fileUploadParam: string;
      private _fileUploadParams: object;
      private _fileUploadToS3: object;
      private _fileUploadURL: string;
      private _fileUseSelectedText: boolean;
        // Font Family
        fontFamily: object;
        fontFamilyDefaultSelection: string;
        fontFamilySelection: boolean;
        // Font Size
        fontSizeSelection: boolean;
        fontSize: string[];
        fontSizeDefaultSelection: string;
        fontSizeUnit: string;

        constructor(builder: OptionsBuilder) {
            if (!_.isNil(builder.colorsBackground)) {
                this.colorsBackground = builder.colorsBackground;
            }
            if (!_.isNil(builder.colorsButtons)) {
                this.colorsButtons = builder.colorsButtons;
            }
            if (!_.isNil(builder.fontSizeSelection)) {
                this.fontSizeSelection = builder.fontSizeSelection;
            }
            if (!_.isNil(builder.fontSize)) {
                this.fontSize = builder.fontSize;
            }
            if (!_.isNil(builder.fontSizeDefaultSelection)) {
                this.fontSizeDefaultSelection = builder.fontSizeDefaultSelection;
            }
            if (!_.isNil(builder.fontSizeUnit)) {
                this.fontSizeUnit = builder.fontSizeUnit;
            }
        }

    }
}
