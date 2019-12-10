import {Froala} from "./froala";

export class FroalaOptionsBuilder {
  // License key
  private _key: string;
  // Aviary Editor
  private _aviaryKey: boolean;
  private _aviaryOptions: Froala.GenericObject<any>;
  // Char Counter
  private _charCounterCount: boolean;
  private _charCounterMax: number;
  // Code Beautifier
  private _codeBeautifierOptions: Froala.GenericObject<any>;
  // Code View
  private _codeMirror: object;
  private _codeMirrorOptions: Froala.GenericObject<any>;
  private _codeViewKeepActiveButtons: string[];
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
  private _emoticonsSet: Froala.EmoticonButton[];
  private _emoticonsStep: number;
  // Entities
  private _entities: string;
  // File
  private _fileAllowedTypes: string[];
  private _fileInsertButtons: string[];
  private _fileMaxSize: number;
  private _fileUpload: boolean;
  private _fileUploadMethod: Froala.UploadMethod;
  private _fileUploadParam: string;
  private _fileUploadParams: object;
  private _fileUploadToS3: object;
  private _fileUploadURL: string;
  private _fileUseSelectedText: boolean;
  // Font Family
  private _fontFamily: Froala.GenericObject<string>;
  private _fontFamilyDefaultSelection: string;
  private _fontFamilySelection: boolean;
  // Font Size
  private _fontSizeSelection: boolean;
  private _fontSize: string[];
  private _fontSizeDefaultSelection: string;
  private _fontSizeUnit: string;
  // Form
  private _formEditButtons: string[];
  private _formMultipleStyles: boolean;
  private _formStyles: Froala.GenericObject<string>;
  private _formUpdateButtons: string[];
  // General
  private _attribution: boolean;
  private _autofocus: boolean;
  private _direction: Froala.TextDirection;
  private _disableRightClick: boolean;
  private _documentReady: boolean;
  private _editInPopup: boolean;
  private _editorClass: string;
  private _enter: Froala.Enter;
  private _fullPage: boolean;
  private _height: number;
  private _heightMax: number;
  private _heightMin: number;
  private _htmlAllowComments: boolean;
  private _htmlAllowedAttrs: string[];
  private _htmlAllowedEmptyTags: string[];
  private _htmlAllowedStyleProps: string[];
  private _htmlAllowedTags: string[];
  private _htmlDoNotWrapTags: string[];
  private _htmlExecuteScripts: boolean;
  private _htmlIgnoreCSSProperties: string[];
  private _htmlRemoveTags: string[];
  private _htmlSimpleAmpersand: boolean;
  private _htmlUntouched: boolean;
  private _iconsTemplate: string;
  private _iframe: boolean;
  private _iframeDefaultStyle: string;
  private _iframeStyle: string;
  private _iframeStyleFiles: string[];
  private _indentMargin: number;
  private _initOnClick: boolean;
  private _keepFormatOnDelete: boolean;
  private _multiLine: boolean;
  private _pasteAllowedStyleProps: string[];
  private _pasteAllowLocalImages: boolean;
  private _pasteDeniedAttrs: string[];
  private _pasteDeniedTags: string[];
  private _pastePlain: boolean;
  private _placeholderText: string;
  private _pluginsEnabled: Froala.Plugin[];
  private _requestHeaders: Froala.GenericObject<string>;
  private _requestWithCredentials: boolean;
  private _requestWithCORS: boolean;
  private _scrollableContainer: string;
  private _shortcutsEnabled: string[];
  private _shortcutsHint: boolean;
  private _spellcheck: boolean;
  private _tabIndex: number;
  private _tabSpaces: number;
  private _theme: Froala.Theme;
  private _toolbarBottom: boolean;
  private _toolbarButtons: Partial<Froala.ToolbarButtons>;
  private _toolbarButtonsMD: Partial<Froala.ToolbarButtons>;
  private _toolbarButtonsSM: Partial<Froala.ToolbarButtons>;
  private _toolbarButtonsXS: Partial<Froala.ToolbarButtons>;
  private _toolbarContainer: boolean;
  private _toolbarInline: boolean;
  private _toolbarSticky: boolean;
  private _toolbarStickyOffset: number;
  private _toolbarVisibleWithoutSelection: boolean;
  private _tooltips: boolean;
  private _typingTimer: number;
  private _useClasses: boolean;
  private _width: string;
  private _zIndex: number;
  // Help
  private _helpSets: object[];
  // Image
  private _imageAllowedTypes: Froala.ImageType[];
  private _imageAltButtons: string[];
  private _imageCORSProxy: string;
  private _imageDefaultAlign: Froala.Align;
  private _imageDefaultDisplay: Froala.Display;
  private _imageDefaultMargin: number;
  private _imageDefaultWidth: number;
  private _imageEditButtons: string[];
  private _imageInsertButtons: string[];
  private _imageMaxSize: number;
  private _imageMinWidth: number;
  private _imageMove: boolean;
  private _imageMultipleStyles: boolean;
  private _imagePaste: boolean;
  private _imagePasteProcess: boolean;
  private _imageResize: boolean;
  private _imageResizeWithPercent: boolean;
  private _imageRoundPercent: boolean;
  private _imageOutputSize: boolean;
  private _imageSizeButtons: string[];
  private _imageSplitHTML: boolean;
  private _imageStyles: Froala.GenericObject<string>;
  private _imageTUIOptions: object;
  private _imageTextNear: boolean;
  private _imageUpload: boolean;
  private _imageAddNewLine: boolean;
  private _imageUploadMethod: Froala.UploadMethod;
  private _imageUploadParam: string;
  private _imageUploadParams: object;
  private _imageUploadRemoteUrls: boolean;
  private _imageUploadToS3: object;
  private _imageUploadURL: string;
  // Image Manager
  private _imageManagerDeleteMethod: Froala.DeleteMethod;
  private _imageManagerDeleteParams: object;
  private _imageManagerDeleteURL: string;
  private _imageManagerLoadMethod: Froala.GetMethod;
  private _imageManagerLoadParams: object;
  private _imageManagerLoadURL: string;
  private _imageManagerPageSize: number;
  private _imageManagerPreloader: string;
  private _imageManagerScrollOffset: number;
  private _imageManagerToggleTags: boolean;
  // Inline Style
  private _inlineStyles: Froala.GenericObject<string>;
  // Inline Class
  private _inlineClasses: Froala.GenericObject<string>;
  // Language
  private _language: Froala.Language;
  // Line Breaker
  private _lineBreakerHorizontalOffset: number;
  private _lineBreakerOffset: number;
  private _lineBreakerTags: string[];
  // Link
  private _linkAlwaysBlank: boolean;
  private _linkAlwaysNoFollow: boolean;
  private _linkAttributes: Froala.GenericObject<any>;
  private _linkAutoPrefix: string;
  private _linkConvertEmailAddress: boolean;
  private _linkEditButtons: string[];
  private _linkInsertButtons: string[];
  private _linkList: Froala.GenericObject<string>[];
  private _linkMultipleStyles: boolean;
  private _linkNoOpener: boolean;
  private _linkNoReferrer: boolean;
  private _linkStyles: Froala.GenericObject<string>;
  private _linkText: boolean;
  // Paragraph Format
  private _paragraphDefaultSelection: string;
  private _paragraphFormat: Froala.GenericObject<string>;
  private _paragraphFormatSelection: boolean;
  private _paragraphMultipleStyles: boolean;
  private _paragraphStyles: Froala.GenericObject<string>;
  private _lineHeights: Froala.GenericObject<string>;
  // Lists
  private _listAdvancedTypes: boolean;
  // Quick Insert
  private _quickInsertButtons: string[];
  private _quickInsertEnabled: boolean;
  private _quickInsertTags: string[];
  // Font Awesome
  private _faButtons: string[];
  private _fontAwesomeSets: object;
  private _fontAwesomeTemplate: string;
  // Special Characters
  private _specialCharButtons: string[];
  private _specialCharactersSets: Froala.SpecialCharacterSet[];
  // WebSpellChecker
  private _events: Partial<Froala.Events>;
  // Save
  private _saveInterval: number;
  private _saveMethod: Froala.UploadMethod;
  private _saveParam: string;
  private _saveParams: object;
  private _saveURL: string;
  // Table
  private _tableCellMultipleStyles: boolean;
  private _tableCellStyles: Froala.GenericObject<string>;
  private _tableColors: string[];
  private _tableColorsButtons: string[];
  private _tableColorsStep: number;
  private _tableDefaultWidth: string;
  private _tableEditButtons: string[];
  private _tableInsertButtons: string[];
  private _tableInsertHelper: boolean;
  private _tableInsertHelperOffset: number;
  private _tableInsertMaxSize: number;
  private _tableMultipleStyles: boolean;
  private _tableResizer: boolean;
  private _tableResizerOffset: number;
  private _tableResizingLimit: number;
  private _tableStyles: Froala.GenericObject<string>;
  // Video
  private _videoAllowedProviders: string[];
  private _videoAllowedTypes: Froala.VideoType[];
  private _videoDefaultAlign: Froala.Align;
  private _videoDefaultDisplay: Froala.Display;
  private _videoDefaultWidth: number;
  private _videoEditButtons: string[];
  private _videoInsertButtons: string[];
  private _videoMaxSize: number;
  private _videoMove: boolean;
  private _videoResize: boolean;
  private _videoResponsive: boolean;
  private _videoSizeButtons: string[];
  private _videoSplitHTML: boolean;
  private _videoTextNear: boolean;
  private _videoUpload: boolean;
  private _videoUploadMethod: Froala.UploadMethod;
  private _videoUploadParam: string;
  private _videoUploadParams: object;
  private _videoUploadToS3: object;
  private _videoUploadURL: string;
  // Word
  private _wordAllowedStyleProps: string[];
  private _wordDeniedAttrs: string[];
  private _wordDeniedTags: string[];
  private _wordPasteKeepFormatting: boolean;
  private _wordPasteModal: boolean;
  // Angular
  private _immediateAngularModelUpdate: boolean;

  /**
   * You must call this method at last
   *
   * @return {Froala.Options}
   */
  build(): Froala.Options {
    return new Froala.Options(this);
  }

  /**
   * License key
   *
   * @param {string} value
   * @return {FroalaOptionsBuilder}
   */
  Key(value: string): FroalaOptionsBuilder {
    this._key = value;
    return this;
  }
  get key(): string {
    return this._key;
  }

  /**
   * The key of your Adobe Creative Cloud SDK to be used for advanced image editing.
   * For more details about getting a key (https://creativesdk.zendesk.com/hc/en-us/articles/216369343-Why-and-how-to-register-my-app-)
   *
   * [Require third party]	image_aviary.min.js
   *
   * @param {boolean} value
   * @return {FroalaOptionsBuilder}
   */
  AviaryKey(value: boolean): FroalaOptionsBuilder {
    this._aviaryKey = value;
    return this;
  }
  get aviaryKey(): boolean {
    return this._aviaryKey;
  }

  /**
   * The options to be set on the Aviary instance.
   *
   * [Require third party]	image_aviary.min.js
   *
   * @param {Froala.GenericObject<any>}} value
   * @return {FroalaOptionsBuilder}
   */
  AviaryOptions(value: Froala.GenericObject<any>): FroalaOptionsBuilder {
    this._aviaryOptions = value;
    return this;
  }
  get aviaryOptions(): Froala.GenericObject<any> {
    return this._aviaryOptions;
  }

  /**
   * Enables or disables the display of the character counter.
   *
   * [Require plugin] char_counter.min.js
   *
   * @param {boolean} value
   * @return {FroalaOptionsBuilder}
   */
  CharCounterCount(value: boolean): FroalaOptionsBuilder {
    this._charCounterCount = value;
    return this;
  }
  get charCounterCount(): boolean {
    return this._charCounterCount;
  }

  /**
   * The maximum number of characters allowed to be inserted into the rich text editor.
   * '-1' means that there is not limit set.
   *
   * [Require plugin] char_counter.min.js
   *
   * @param {number} value
   * @return {FroalaOptionsBuilder}
   */
  CharCounterMax(value: number): FroalaOptionsBuilder {
    this._charCounterMax = value;
    return this;
  }
  get charCounterMax(): number {
    return this._charCounterMax;
  }

  /**
   * Specify the options for Code Beautifier.
   *
   * [Require plugin] code_beautifier.min.js
   *
   * @param {Froala.GenericObject<any>} value
   * @return {FroalaOptionsBuilder}
   */
  CodeBeautifierOptions(value: Froala.GenericObject<any>): FroalaOptionsBuilder {
    this._codeBeautifierOptions = value;
    return this;
  }
  get codeBeautifierOptions(): Froala.GenericObject<any> {
    return this._codeBeautifierOptions;
  }

  /**
   * Disable or enable using the CodeMirror library to highlight the HTML view.
   *
   * Note: This option requires the CodeMirror library to be included.
   *
   * [Require plugin] code_view.min.js
   *
   * @param {object} value
   * @return {FroalaOptionsBuilder}
   */
  CodeMirror(value: object): FroalaOptionsBuilder {
    this._codeMirror = value;
    return this;
  }
  get codeMirror(): object {
    return this._codeMirror;
  }

  /**
   * Specify the options for CodeMirror.
   *
   * [Require plugin] code_view.min.js
   *
   * @param {Froala.GenericObject<any>} value
   * @return {FroalaOptionsBuilder}
   */
  CodeMirrorOptions(value: Froala.GenericObject<any>): FroalaOptionsBuilder {
    this._codeMirrorOptions = value;
    return this;
  }
  get codeMirrorOptions(): Froala.GenericObject<any> {
    return this._codeMirrorOptions;
  }

  /**
   * A list of buttons to keep active while editor is in Code View mode.
   *
   * [Require plugin] code_view.min.js
   *
   * @param {string[]} values
   * @return {FroalaOptionsBuilder}
   */
  CodeViewKeepActiveButtons(values: string[]): FroalaOptionsBuilder {
    this._codeViewKeepActiveButtons = values;
    return this;
  }
  get codeViewKeepActiveButtons(): string[] {
    return this._codeViewKeepActiveButtons;
  }

  /**
   * An array of colors used in the colors popup for background.
   * Passing 'REMOVE' as a value in the array will display the Clear Formatting button for colors.
   *
   * [Require plugin] colors.min.js
   *
   * @param {string[]} values
   * @return {FroalaOptionsBuilder}
   */
  ColorsBackground(values: string[]): FroalaOptionsBuilder {
    this._colorsBackground = values;
    return this;
  }
  get colorsBackground(): string[] {
    return this._colorsBackground;
  }

  /**
   * Set the buttons the colors popup.
   *
   * [Require plugin] colors.min.js
   *
   * @param {string[]} values
   * @return {FroalaOptionsBuilder}
   */
  ColorsButtons(values: string[]): FroalaOptionsBuilder {
    this._colorsButtons = values;
    return this;
  }
  get colorsButtons(): string[] {
    return this._colorsButtons;
  }

  /**
   * Show HEX input to choose custom color.
   *
   * [Require plugin] colors.min.js
   *
   * @param {boolean} value
   * @return {FroalaOptionsBuilder}
   */
  ColorsHEXInput(value: boolean): FroalaOptionsBuilder {
    this._colorsHEXInput = value;
    return this;
  }
  get colorsHEXInput(): boolean {
    return this._colorsHEXInput;
  }

  /**
   * The number of colors displayed on a line in the colors popup.
   *
   * [Require plugin] colors.min.js
   *
   * @param {number} value
   * @return {FroalaOptionsBuilder}
   */
  ColorsStep(value: number): FroalaOptionsBuilder {
    this._colorsStep = value;
    return this;
  }
  get colorsStep(): number {
    return this._colorsStep;
  }

  /**
   * An array of colors used in the colors popup for text.
   * Passing 'REMOVE' as a value in the array will display the Clear Formatting button for colors.
   *
   * [Require plugin] colors.min.js
   *
   * @param {string[]} values
   * @return {FroalaOptionsBuilder}
   */
  ColorsText(values: string[]): FroalaOptionsBuilder {
    this._colorsText = values;
    return this;
  }
  get colorsText(): string[] {
    return this._colorsText;
  }

  /**
   * Specifies how the dragged elements should be placed in the new position.
   * When this option is disabled, the dragged elements are placed between block tags and not inside them.
   *
   * [Require plugin] draggable.min.js
   *
   * @param {boolean} value
   * @return {FroalaOptionsBuilder}
   */
  DragInline(value: boolean): FroalaOptionsBuilder {
    this._dragInline = value;
    return this;
  }
  get dragInline(): boolean {
    return this._dragInline;
  }

  /**
   * Your key from Embed.ly to remove the "Powered By Banner".
   *
   * [Require plugin] embedly.min.js
   *
   * @param {string} value
   * @return {FroalaOptionsBuilder}
   */
  EmbedlyKey(value: string): FroalaOptionsBuilder {
    this._embedlyKey = value;
    return this;
  }
  get embedlyKey(): string {
    return this._embedlyKey;
  }

  /**
   * The buttons that appear in the edit Embed.ly popup, when an embedded object is selected.
   *
   * [Require plugin] video.min.js
   *
   * @param {string[]} values
   * @return {FroalaOptionsBuilder}
   */
  EmbedlyEditButtons(values: string[]): FroalaOptionsBuilder {
    this._embedlyEditButtons = values;
    return this;
  }
  get embedlyEditButtons(): string[] {
    return this._embedlyEditButtons;
  }

  /**
   * The buttons that appear in the insert Embed.ly popup, when an embeded object is inserted into the WYSIWYG editor.
   *
   * [Require plugin] embedly.min.js
   *
   * @param {string[]} values
   * @return {FroalaOptionsBuilder}
   */
  EmbedlyInsertButtons(values: string[]): FroalaOptionsBuilder {
    this._embedlyInsertButtons = values;
    return this;
  }
  get embedlyInsertButtons(): string[] {
    return this._embedlyInsertButtons;
  }

  /**
   * The default script path for the Embedly JS.
   *
   * [Require plugin] embedly.min.js
   *
   * @param {string} value
   * @return {FroalaOptionsBuilder}
   */
  EmbedlyScriptPath(value: string): FroalaOptionsBuilder {
    this._embedlyScriptPath = value;
    return this;
  }
  get embedlyScriptPath(): string {
    return this._embedlyScriptPath;
  }

  /**
   * Buttons set for emoticons popup.
   *
   * [Require plugin] emoticons.min.js
   *
   * @param {string[]} values
   * @return {FroalaOptionsBuilder}
   */
  EmoticonsButtons(values: string[]): FroalaOptionsBuilder {
    this._emoticonsButtons = values;
    return this;
  }
  get emoticonsButtons(): string[] {
    return this._emoticonsButtons;
  }

  /**
   * An array of emoticons available in the insert emoticon popup.
   * Each emoticon is defined by an Object containing the code and description of each emoticon.
   *
   * [Require plugin] emoticons.min.js
   *
   * @param {Froala.EmoticonButton[]} values
   * @return {FroalaOptionsBuilder}
   */
  EmoticonsSet(values: Froala.EmoticonButton[]): FroalaOptionsBuilder {
    this._emoticonsSet = values;
    return this;
  }
  get emoticonsSet(): Froala.EmoticonButton[] {
    return this._emoticonsSet;
  }

  /**
   * Use EmojiOne svg images instead of Unicode text.
   *
   * [Require plugin] emoticons.min.js
   *
   * @param {boolean} value
   * @return {FroalaOptionsBuilder}
   */
  EmoticonsUseImage(value: boolean): FroalaOptionsBuilder {
    this._emoticonsUseImage = value;
    return this;
  }
  get emoticonsUseImage(): boolean {
    return this._emoticonsUseImage;
  }

  /**
   * The number of emoticons displayed on a line in the insert emoticon popup.
   *
   * [Require plugin] emoticons.min.js
   *
   * @param {number} value
   * @return {FroalaOptionsBuilder}
   */
  EmoticonsStep(value: number): FroalaOptionsBuilder {
    this._emoticonsStep = value;
    return this;
  }
  get emoticonsStep(): number {
    return this._emoticonsStep;
  }

  /**
   * A list with the characters that are reserved in HTML.
   * More details about using entities in HTML can be found on W3C and Wikipedia.
   *
   * [Require plugin] entities.min.js
   *
   * @param {string} value
   * @return {FroalaOptionsBuilder}
   */
  Entities(value: string): FroalaOptionsBuilder {
    this._entities = value;
    return this;
  }
  get entities(): string {
    return this._entities;
  }

  /**
   * The list of file types that are allowed to be uploaded.
   * Although this will restrict uploading other types of files, we strongly recommend you to check the file type on the server too.
   *
   * [Require plugin] file.min.js
   *
   * @param {string[]} values
   * @return {FroalaOptionsBuilder}
   */
  FileAllowedTypes(values: string[]): FroalaOptionsBuilder {
    this._fileAllowedTypes = values;
    return this;
  }
  get fileAllowedTypes(): string[] {
    return this._fileAllowedTypes;
  }

  /**
   * The list of buttons that appear in the insert file popup, when inserting a new file into the WYSIWYG editor.
   *
   * [Require plugin] file.min.js
   *
   * @param {string[]} values
   * @return {FroalaOptionsBuilder}
   */
  FileInsertButtons(values: string[]): FroalaOptionsBuilder {
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
   *
   * [Require plugin] file.min.js
   *
   * @param {number} value
   * @return {FroalaOptionsBuilder}
   */
  FileMaxSize(value: number): FroalaOptionsBuilder {
    this._fileMaxSize = value;
    return this;
  }
  get fileMaxSize(): number {
    return this._fileMaxSize;
  }

  /**
   * Enable or disable file upload.
   *
   * [Require plugin] file.min.js
   *
   * @param {boolean} value
   * @return {FroalaOptionsBuilder}
   */
  FileUpload(value: boolean): FroalaOptionsBuilder {
    this._fileUpload = value;
    return this;
  }
  get fileUpload(): boolean {
    return this._fileUpload;
  }

  /**
   * The HTTP file upload request type.
   *
   * [Require plugin] file.min.js
   *
   * @param {Froala.UploadMethod} value
   * @return {FroalaOptionsBuilder}
   */
  FileUploadMethod(value: Froala.UploadMethod): FroalaOptionsBuilder {
    this._fileUploadMethod = value;
    return this;
  }
  get fileUploadMethod(): Froala.UploadMethod {
    return this._fileUploadMethod;
  }

  /**
   * Customize the name of the parameter that contains the file in the upload request.
   *
   * [Require plugin] file.min.js
   *
   * @param {string} value
   * @return {FroalaOptionsBuilder}
   */
  FileUploadParam(value: string): FroalaOptionsBuilder {
    this._fileUploadParam = value;
    return this;
  }
  get fileUploadParam(): string {
    return this._fileUploadParam;
  }

  /**
   * Pass additional parameters to the file upload request.
   *
   * [Require plugin] file.min.js
   *
   * @param {object} value
   * @return {FroalaOptionsBuilder}
   */
  FileUploadParams(value: object): FroalaOptionsBuilder {
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
   *
   * Note: 'uploadURL' property can be used instead of 'bucket' and 'region' properties to specify a custom URL from Amazon where to upload the image.
   *
   * [Require plugin] file.min.js
   *
   * @param {object} value
   * @return {FroalaOptionsBuilder}
   */
  FileUploadToS3(value: object): FroalaOptionsBuilder {
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
   *
   * E.g. {link: 'path/to/file.pdf'}.
   *
   * Note 1: By default, the files are stored on our servers, but if you want to have full control over them, you should consider implementing the upload on your server. The files stored on our servers, may be deleted at any time without any notice.
   * Note 2: If the domain where the file is saved is not the same with the one where the editor is running, you may need to enable requestWithCORS option and make specific customizations on the server. For more information please refer to Cross-origin resource sharing.
   *
   * [Require plugin] file.min.js
   *
   * @param {string} value
   * @return {FroalaOptionsBuilder}
   */
  FileUploadURL(value: string): FroalaOptionsBuilder {
    this._fileUploadURL = value;
    return this;
  }
  get fileUploadURL(): string {
    return this._fileUploadURL;
  }

  /**
   * Enables using the file's name instead of the selected text when a file is inserted.
   *
   * [Require plugin] file.min.js
   *
   * @param {boolean} value
   * @return {FroalaOptionsBuilder}
   */
  FileUseSelectedText(value: boolean): FroalaOptionsBuilder {
    this._fileUseSelectedText = value;
    return this;
  }
  get fileUseSelectedText(): boolean {
    return this._fileUseSelectedText;
  }

  /**
   * Defines the fonts that appear under the Font Family button from the rich text editor's toolbar.
   *
   * [Require plugin] font_family.min.js
   *
   * @param {Froala.GenericObject<string>} value
   * @return {FroalaOptionsBuilder}
   */
  FontFamily(value: Froala.GenericObject<string>): FroalaOptionsBuilder {
    this._fontFamily = value;
    return this;
  }
  get fontFamily(): Froala.GenericObject<string> {
    return this._fontFamily;
  }

  /**
   * The text to display when the font family is unkown or nothing is selected.
   *
   * [Require plugin] font_family.min.js
   *
   * @param {string} value
   * @return {FroalaOptionsBuilder}
   */
  FontFamilyDefaultSelection(value: string): FroalaOptionsBuilder {
    this._fontFamilyDefaultSelection = value;
    return this;
  }
  get fontFamilyDefaultSelection(): string {
    return this._fontFamilyDefaultSelection;
  }

  /**
   * The Font Family button from the WYSIWYG editor's toolbar is replaced with a dropdown showing the actual font family name for the current text selection.
   *
   * [Require plugin] font_family.min.js
   *
   * @param {boolean} value
   * @return {FroalaOptionsBuilder}
   */
  FontFamilySelection(value: boolean): FroalaOptionsBuilder {
    this._fontFamilySelection = value;
    return this;
  }
  get fontFamilySelection(): boolean {
    return this._fontFamilySelection;
  }

  /**
   * The Font Size button from the WYSIWYG editor's toolbar is replaced with a dropdown showing the actual font size value for the current text selection.
   *
   * [Require plugin] font_size.min.js
   *
   * @param {boolean} value
   * @return {FroalaOptionsBuilder}
   */
  FontSizeSelection(value: boolean): FroalaOptionsBuilder {
    this._fontSizeSelection = value;
    return this;
  }
  get fontSizeSelection(): boolean {
    return this._fontSizeSelection;
  }

  /**
   * Defines the font sizes that appear under the Font Size button from the rich text editor's toolbar.
   *
   * [Require plugin] font_size.min.js
   *
   * @param {string[]} values
   * @return {FroalaOptionsBuilder}
   */
  FontSize(values: string[]): FroalaOptionsBuilder {
    this._fontSize = values;
    return this;
  }
  get fontSize(): string[] {
    return this._fontSize;
  }

  /**
   * The text to display when the font size is unkown or nothing is selected.
   *
   * [Require plugin] font_size.min.js
   *
   * @param {string} value
   * @return {FroalaOptionsBuilder}
   */
  FontSizeDefaultSelection(value: string): FroalaOptionsBuilder {
    this._fontSizeDefaultSelection = value;
    return this;
  }
  get fontSizeDefaultSelection(): string {
    return this._fontSizeDefaultSelection;
  }

  /**
   * The unit to be used for the font size.
   *
   * [Require plugin] font_size.min.js
   *
   * @param {string} value
   * @return {FroalaOptionsBuilder}
   */
  FontSizeUnit(value: string): FroalaOptionsBuilder {
    this._fontSizeUnit = value;
    return this;
  }
  get fontSizeUnit(): string {
    return this._fontSizeUnit;
  }

  /**
   * Buttons for form edit popup.
   *
   * [Require plugin]	form.min.js
   *
   * @param {string[]} values
   * @return {FroalaOptionsBuilder}
   */
  FormEditButtons(values: string[]): FroalaOptionsBuilder {
    this._formEditButtons = values;
    return this;
  }
  get formEditButtons(): string[] {
    return this._formEditButtons;
  }

  /**
   * To enable applying multiple css on form elements.
   *
   * [Require plugin]	form.min.js
   *
   * @param {boolean} value
   * @return {FroalaOptionsBuilder}
   */
  FormMultipleStyles(value: boolean): FroalaOptionsBuilder {
    this._formMultipleStyles = value;
    return this;
  }
  get formMultipleStyles(): boolean {
    return this._formMultipleStyles;
  }

  /**
   * Options for applying styles on form.
   *
   * [Require plugin]	form.min.js
   *
   * @param {Froala.GenericObject<string>} value
   * @return {FroalaOptionsBuilder}
   */
  FormStyles(value: Froala.GenericObject<string>): FroalaOptionsBuilder {
    this._formStyles = value;
    return this;
  }
  get formStyles(): Froala.GenericObject<string> {
    return this._formStyles;
  }

  /**
   * Buttons for form popup.
   *
   * [Require plugin]	form.min.js
   *
   * @param {string[]} values
   * @return {FroalaOptionsBuilder}
   */
  FormUpdateButtons(values: string[]): FroalaOptionsBuilder {
    this._formUpdateButtons = values;
    return this;
  }
  get formUpdateButtons(): string[] {
    return this._formUpdateButtons;
  }

  /**
   * Remove the Powered By Froala message.
   *
   * @param {boolean} value
   * @return {FroalaOptionsBuilder}
   */
  Attribution(value: boolean): FroalaOptionsBuilder {
    this._attribution = value;
    return this;
  }
  get attribution(): boolean {
    return this._attribution;
  }

  /**
   * Focus the editor instance when the page is loaded.
   *
   * @param {boolean} value
   * @return {FroalaOptionsBuilder}
   */
  Autofocus(value: boolean): FroalaOptionsBuilder {
    this._autofocus = value;
    return this;
  }
  get autofocus(): boolean {
    return this._autofocus;
  }

  /**
   * Sets the direction of the text.
   * When the option is set to auto the editor automatically detects if the keyboard input is RTL or LTR. However only the text inside the editing box changes direction, the toolbar remains the same.
   * The rtl and ltr values also change the toolbar's direction.
   *
   * @param {Froala.TextDirection} value
   * @return {FroalaOptionsBuilder}
   */
  Direction(value: Froala.TextDirection): FroalaOptionsBuilder {
    this._direction = value;
    return this;
  }
  get direction(): Froala.TextDirection {
    return this._direction;
  }

  /**
   * Disables the default browser context menu.
   * It's recommended to be used if toolbarVisibleWithoutSelection option is enabled.
   *
   * @param {boolean} value
   * @return {FroalaOptionsBuilder}
   */
  DisableRightClick(value: boolean): FroalaOptionsBuilder {
    this._disableRightClick = value;
    return this;
  }
  get disableRightClick(): boolean {
    return this._disableRightClick;
  }

  /**
   * Turns on the editor best setup for editing documents.
   *
   * @param {boolean} value
   * @return {FroalaOptionsBuilder}
   */
  DocumentReady(value: boolean): FroalaOptionsBuilder {
    this._documentReady = value;
    return this;
  }
  get documentReady(): boolean {
    return this._documentReady;
  }

  /**
   * Edit the text inside the HTML element on which the editor is initialized on in a popup.
   *
   * @param {boolean} value
   * @return {FroalaOptionsBuilder}
   */
  EditInPopup(value: boolean): FroalaOptionsBuilder {
    this._editInPopup = value;
    return this;
  }
  get editInPopup(): boolean {
    return this._editInPopup;
  }

  /**
   * Set a custom class for the WYSIWYG editor editing box.
   *
   * @param {string} value
   * @return {FroalaOptionsBuilder}
   */
  EditorClass(value: string): FroalaOptionsBuilder {
    this._editorClass = value;
    return this;
  }
  get editorClass(): string {
    return this._editorClass;
  }

  /**
   * Set the default tag to be used when ENTER key is hit.
   *
   * @param {Froala.Enter} value
   * @return {FroalaOptionsBuilder}
   */
  Enter(value: Froala.Enter): FroalaOptionsBuilder {
    this._enter = value;
    return this;
  }
  get enter(): Froala.Enter {
    return this._enter;
  }

  /**
   * Allows the usage of HTML, HEAD, BODY tags and DOCTYPE declaration.
   *
   * Note: Enabling this option will automatically enables the iframe option.
   *
   * @param {boolean} value
   * @return {FroalaOptionsBuilder}
   */
  FullPage(value: boolean): FroalaOptionsBuilder {
    this._fullPage = value;
    return this;
  }
  get fullPage(): boolean {
    return this._fullPage;
  }

  /**
   * Set a height for the rich text editor's editing box.
   *
   * @param {number} value
   * @return {FroalaOptionsBuilder}
   */
  Height(value: number): FroalaOptionsBuilder {
    this._height = value;
    return this;
  }
  get height(): number {
    return this._height;
  }

  /**
   * Set a maximum height for the rich text editor's editing box.
   *
   * @param {number} value
   * @return {FroalaOptionsBuilder}
   */
  HeightMax(value: number): FroalaOptionsBuilder {
    this._heightMax = value;
    return this;
  }
  get heightMax(): number {
    return this._heightMax;
  }

  /**
   * Set a minimum height for the rich text editor's editing box.
   *
   * @param {number} value
   * @return {FroalaOptionsBuilder}
   */
  HeightMin(value: number): FroalaOptionsBuilder {
    this._heightMin = value;
    return this;
  }
  get heightMin(): number {
    return this._heightMin;
  }

  /**
   * Allow comments inside the edited HTML.
   *
   * @param {boolean} value
   * @return {FroalaOptionsBuilder}
   */
  HtmlAllowComments(value: boolean): FroalaOptionsBuilder {
    this._htmlAllowComments = value;
    return this;
  }
  get htmlAllowComments(): boolean {
    return this._htmlAllowComments;
  }

  /**
   * The list of allowed attributes to be used for tags.
   *
   * @param {string[]} values
   * @return {FroalaOptionsBuilder}
   */
  HtmlAllowedAttrs(values: string[]): FroalaOptionsBuilder {
    this._htmlAllowedAttrs = values;
    return this;
  }
  get htmlAllowedAttrs(): string[] {
    return this._htmlAllowedAttrs;
  }

  /**
   * The list of tags that are not removed when they have no content inside.
   *
   * @param {string[]} values
   * @return {FroalaOptionsBuilder}
   */
  HtmlAllowedEmptyTags(values: string[]): FroalaOptionsBuilder {
    this._htmlAllowedEmptyTags = values;
    return this;
  }
  get htmlAllowedEmptyTags(): string[] {
    return this._htmlAllowedEmptyTags;
  }

  /**
   * The list of allowed CSS attributes to be used for tags.
   *
   * @param {string[]} values
   * @return {FroalaOptionsBuilder}
   */
  HtmlAllowedStyleProps(values: string[]): FroalaOptionsBuilder {
    this._htmlAllowedStyleProps = values;
    return this;
  }
  get htmlAllowedStyleProps(): string[] {
    return this._htmlAllowedStyleProps;
  }

  /**
   * The list of allowed tags.
   *
   * @param {string[]} values
   * @return {FroalaOptionsBuilder}
   */
  HtmlAllowedTags(values: string[]): FroalaOptionsBuilder {
    this._htmlAllowedTags = values;
    return this;
  }
  get htmlAllowedTags(): string[] {
    return this._htmlAllowedTags;
  }

  /**
   * The list of tags that should not be wrapped inside block tags.
   *
   * @param {string[]} values
   * @return {FroalaOptionsBuilder}
   */
  HtmlDoNotWrapTags(values: string[]): FroalaOptionsBuilder {
    this._htmlDoNotWrapTags = values;
    return this;
  }
  get htmlDoNotWrapTags(): string[] {
    return this._htmlDoNotWrapTags;
  }

  /**
   * Allow running scripts that are entered in Code View.
   *
   * @param {boolean} value
   * @return {FroalaOptionsBuilder}
   */
  HtmlExecuteScripts(value: boolean): FroalaOptionsBuilder {
    this._htmlExecuteScripts = value;
    return this;
  }
  get htmlExecuteScripts(): boolean {
    return this._htmlExecuteScripts;
  }

  /**
   * A list of CSS properties to be ignored when useClasses option is disabled and the CSS from external stylesheets is converted to inline style.
   *
   * @param {string[]} values
   * @return {FroalaOptionsBuilder}
   */
  HtmlIgnoreCSSProperties(values: string[]): FroalaOptionsBuilder {
    this._htmlIgnoreCSSProperties = values;
    return this;
  }
  get htmlIgnoreCSSProperties(): string[] {
    return this._htmlIgnoreCSSProperties;
  }

  /**
   * The list of tags that are removed together with their content.
   *
   * @param {string[]} values
   * @return {FroalaOptionsBuilder}
   */
  HtmlRemoveTags(values: string[]): FroalaOptionsBuilder {
    this._htmlRemoveTags = values;
    return this;
  }
  get htmlRemoveTags(): string[] {
    return this._htmlRemoveTags;
  }

  /**
   * Allows the usage of simple ampersands (&) instead of the relative HTML entity (&amp;).
   * This is not recommended by the W3C XHTML specifications, so this option should remain false whenever possible.
   *
   * @param {boolean} value
   * @return {FroalaOptionsBuilder}
   */
  HtmlSimpleAmpersand(value: boolean): FroalaOptionsBuilder {
    this._htmlSimpleAmpersand = value;
    return this;
  }
  get htmlSimpleAmpersand(): boolean {
    return this._htmlSimpleAmpersand;
  }

  /**
   * Leave the HTML inside the editor untouched without doing any special processing to it except HTML cleaning.
   *
   * @param {boolean} value
   * @return {FroalaOptionsBuilder}
   */
  HtmlUntouched(value: boolean): FroalaOptionsBuilder {
    this._htmlUntouched = value;
    return this;
  }
  get htmlUntouched(): boolean {
    return this._htmlUntouched;
  }

  /**
   * Set the template to be used for the icons inside the editor UI.
   *
   * @param {string} value
   * @return {FroalaOptionsBuilder}
   */
  IconsTemplate(value: string): FroalaOptionsBuilder {
    this._iconsTemplate = value;
    return this;
  }
  get iconsTemplate(): string {
    return this._iconsTemplate;
  }

  /**
   * When this option is enabled, the editor's content will be placed in an iframe and isolated from the rest of the page.
   *
   * @param {boolean} value
   * @return {FroalaOptionsBuilder}
   */
  Iframe(value: boolean): FroalaOptionsBuilder {
    this._iframe = value;
    return this;
  }
  get iframe(): boolean {
    return this._iframe;
  }

  /**
   * Default style needed by the editor to be used inside the iframe to display content.
   *
   * @param {string} value
   * @return {FroalaOptionsBuilder}
   */
  IframeDefaultStyle(value: string): FroalaOptionsBuilder {
    this._iframeDefaultStyle = value;
    return this;
  }
  get iframeDefaultStyle(): string {
    return this._iframeDefaultStyle;
  }

  /**
   * Custom style to be used inside the iframe to display content.
   * This style is added over the iframeDefaultStyle style.
   *
   * @param {string} value
   * @return {FroalaOptionsBuilder}
   */
  IframeStyle(value: string): FroalaOptionsBuilder {
    this._iframeStyle = value;
    return this;
  }
  get iframeStyle(): string {
    return this._iframeStyle;
  }

  /**
   * An array with custom CSS files to inject inside the iframe to display content.
   *
   * @param {string[]} values
   * @return {FroalaOptionsBuilder}
   */
  IframeStyleFiles(values: string[]): FroalaOptionsBuilder {
    this._iframeStyleFiles = values;
    return this;
  }
  get iframeStyleFiles(): string[] {
    return this._iframeStyleFiles;
  }

  /**
   * The number of pixels to use for indenting the current line.
   *
   * @param {number} value
   * @return {FroalaOptionsBuilder}
   */
  IndentMargin(value: number): FroalaOptionsBuilder {
    this._indentMargin = value;
    return this;
  }
  get indentMargin(): number {
    return this._indentMargin;
  }

  /**
   * Only the minimum required events are initialized on page load and the rest of them when the user clicks inside the editable area.
   * This is very useful when using multiple editors on the same page because it reduces the page load time.
   *
   * @param {boolean} value
   * @return {FroalaOptionsBuilder}
   */
  InitOnClick(value: boolean): FroalaOptionsBuilder {
    this._initOnClick = value;
    return this;
  }
  get initOnClick(): boolean {
    return this._initOnClick;
  }

  /**
   * Keep format of the selected text when it is deleted.
   *
   * @param {boolean} value
   * @return {FroalaOptionsBuilder}
   */
  KeepFormatOnDelete(value: boolean): FroalaOptionsBuilder {
    this._keepFormatOnDelete = value;
    return this;
  }
  get keepFormatOnDelete(): boolean {
    return this._keepFormatOnDelete;
  }

  /**
   * Allows new line to be inserted when ENTER key is hit.
   *
   * @param {boolean} value
   * @return {FroalaOptionsBuilder}
   */
  MultiLine(value: boolean): FroalaOptionsBuilder {
    this._multiLine = value;
    return this;
  }
  get multiLine(): boolean {
    return this._multiLine;
  }

  /**
   * The list of allowed CSS attributes to be used for tags on paste.
   *
   * @param {string[]} values
   * @return {FroalaOptionsBuilder}
   */
  PasteAllowedStyleProps(values: string[]): FroalaOptionsBuilder {
    this._pasteAllowedStyleProps = values;
    return this;
  }
  get pasteAllowedStyleProps(): string[] {
    return this._pasteAllowedStyleProps;
  }

  /**
   * Removes images that have local path (file://) on paste.
   * Enabling this option might result in having mixed content on HTTPS websites.
   *
   * @param {boolean} value
   * @return {FroalaOptionsBuilder}
   */
  PasteAllowLocalImages(value: boolean): FroalaOptionsBuilder {
    this._pasteAllowLocalImages = value;
    return this;
  }
  get pasteAllowLocalImages(): boolean {
    return this._pasteAllowLocalImages;
  }

  /**
   * Attributes that are removed when pasting something into the rich text editor.
   *
   * @param {string[]} values
   * @return {FroalaOptionsBuilder}
   */
  PasteDeniedAttrs(values: string[]): FroalaOptionsBuilder {
    this._pasteDeniedAttrs = values;
    return this;
  }
  get pasteDeniedAttrs(): string[] {
    return this._pasteDeniedAttrs;
  }

  /**
   * Tags that are removed together with their content when pasting something into the rich text editor.
   *
   * @param {string[]} values
   * @return {FroalaOptionsBuilder}
   */
  PasteDeniedTags(values: string[]): FroalaOptionsBuilder {
    this._pasteDeniedTags = values;
    return this;
  }
  get pasteDeniedTags(): string[] {
    return this._pasteDeniedTags;
  }

  /**
   * Removes text formatting when pasting content into the rich text editor, but keeps the content's structure.
   *
   * @param {boolean} value
   * @return {FroalaOptionsBuilder}
   */
  PastePlain(value: boolean): FroalaOptionsBuilder {
    this._pastePlain = value;
    return this;
  }
  get pastePlain(): boolean {
    return this._pastePlain;
  }

  /**
   * The placeholder used when the WYSIWYG editor body is empty.
   *
   * @param {string} value
   * @return {FroalaOptionsBuilder}
   */
  PlaceholderText(value: string): FroalaOptionsBuilder {
    this._placeholderText = value;
    return this;
  }
  get placeholderText(): string {
    return this._placeholderText;
  }

  /**
   * The plugins that should be enabled in the current editor instance.
   * By default, all plugins are enabled.
   *
   * Note: Each plugin requires you to include the corresponding JS and CSS files.
   * Here is the complete list of plugins and the files required by them. (https://www.froala.com/wysiwyg-editor/docs/plugins)
   *
   * @param {Froala.Plugin[]} values
   * @return {FroalaOptionsBuilder}
   */
  PluginsEnabled(values: Froala.Plugin[]): FroalaOptionsBuilder {
    this._pluginsEnabled = values;
    return this;
  }
  get pluginsEnabled(): Froala.Plugin[] {
    return this._pluginsEnabled;
  }

  /**
   * An Object with additional header key/value pairs to send along with requests using the XMLHttpRequest transport.
   *
   * @param {Froala.GenericObject<string>} value
   * @return {FroalaOptionsBuilder}
   */
  RequestHeaders(value: Froala.GenericObject<string>): FroalaOptionsBuilder {
    this._requestHeaders = value;
    return this;
  }
  get requestHeaders(): Froala.GenericObject<string> {
    return this._requestHeaders;
  }

  /**
   * A that indicates whether or not cross-site Access-Control requests should be made using credentials such as cookies, authorization headers or TLS client certificates.
   * For more information refer to XMLHttpRequest.withCredentials. (https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/withCredentials)
   *
   * @param {boolean} value
   * @return {FroalaOptionsBuilder}
   */
  RequestWithCredentials(value: boolean): FroalaOptionsBuilder {
    this._requestWithCredentials = value;
    return this;
  }
  get requestWithCredentials(): boolean {
    return this._requestWithCredentials;
  }

  /**
   * Make AJAX requests using CORS.
   * For more information refer to Cross-origin resource sharing. (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
   *
   * @param {boolean} value
   * @return {FroalaOptionsBuilder}
   */
  RequestWithCORS(value: boolean): FroalaOptionsBuilder {
    this._requestWithCORS = value;
    return this;
  }
  get requestWithCORS(): boolean {
    return this._requestWithCORS;
  }

  /**
   * Sets the container in which the editor popups are added.
   *
   * @param {string} value
   * @return {FroalaOptionsBuilder}
   */
  ScrollableContainer(value: string): FroalaOptionsBuilder {
    this._scrollableContainer = value;
    return this;
  }
  get scrollableContainer(): string {
    return this._scrollableContainer;
  }

  /**
   * Granular control for enabling or disabling specific shortcuts.
   *
   * @param {string[]} values
   * @return {FroalaOptionsBuilder}
   */
  ShortcutsEnabled(values: string[]): FroalaOptionsBuilder {
    this._shortcutsEnabled = values;
    return this;
  }
  get shortcutsEnabled(): string[] {
    return this._shortcutsEnabled;
  }

  /**
   * When enabled, the shortcut is displayed in the button tooltip.
   *
   * @param {boolean} value
   * @return {FroalaOptionsBuilder}
   */
  ShortcutsHint(value: boolean): FroalaOptionsBuilder {
    this._shortcutsHint = value;
    return this;
  }
  get shortcutsHint(): boolean {
    return this._shortcutsHint;
  }

  /**
   * Enables browser spellcheck for the text inside the editing box.
   *
   * @param {boolean} value
   * @return {FroalaOptionsBuilder}
   */
  Spellcheck(value: boolean): FroalaOptionsBuilder {
    this._spellcheck = value;
    return this;
  }
  get spellcheck(): boolean {
    return this._spellcheck;
  }

  /**
   * The tabIndex to set on the editor element.
   *
   * @param {number} value
   * @return {FroalaOptionsBuilder}
   */
  TabIndex(value: number): FroalaOptionsBuilder {
    this._tabIndex = value;
    return this;
  }
  get tabIndex(): number {
    return this._tabIndex;
  }

  /**
   * When TAB key is hit, the editor will add the specified number of space.
   * If set to 0 the TAB key allows default navigation through the page.
   *
   * @param {number} value
   * @return {FroalaOptionsBuilder}
   */
  TabSpaces(value: number): FroalaOptionsBuilder {
    this._tabSpaces = value;
    return this;
  }
  get tabSpaces(): number {
    return this._tabSpaces;
  }

  /**
   * Specify the theme name to use in the editor.
   * The theme should be included as CSS.
   * For more details please read the color themes example. (https://www.froala.com/wysiwyg-editor/examples/color-themes)
   *
   * @param {Froala.Theme} value
   * @return {FroalaOptionsBuilder}
   */
  Theme(value: Froala.Theme): FroalaOptionsBuilder {
    this._theme = value;
    return this;
  }
  get theme(): Froala.Theme {
    return this._theme;
  }

  /**
   * Enable or disable positioning the toolbar at the bottom of the editor.
   * This option is not available on mobile devices.
   *
   * @param {boolean} value
   * @return {FroalaOptionsBuilder}
   */
  ToolbarBottom(value: boolean): FroalaOptionsBuilder {
    this._toolbarBottom = value;
    return this;
  }
  get toolbarBottom(): boolean {
    return this._toolbarBottom;
  }

  /**
   * The list of buttons that appear in the rich text editor's toolbar on large devices (≥ 1200px).
   * Note: '|' will insert a vertical separator line in the toolbar, and '-' a horizontal one.
   * Some of the buttons above require a specific plugin.
   *
   • align button requires align plugin;
   • color button requires colors plugin;
   • embedly button requires embedly plugin;
   • emoticons button requires emoticons plugin;
   • fontFamily button requires fontFamily plugin;
   • fontSize button requires fontSize plugin;
   • formatOL and formatUL buttons require lists plugin;
   • fullscreen button requires fullscreen plugin;
   • getPDF button requires print plugin;
   • html button requires codeView plugin;
   • inlineStyle button requires inlineStyle plugin;
   • inlineClass button requires inlineClass plugin;
   • insertFile button requires file plugin;
   • insertImage button requires image plugin;
   • insertLink button requires link plugin;
   • insertTable button requires table plugin;
   • insertVideo button requires video plugin;
   • paragraphFormat button requires paragraphFormat plugin;
   • paragraphStyle button requires paragraphStyle plugin;
   • print button requires print plugin;
   • quote button requires quote plugin;
   • specialCharacters button requires specialCharacters plugin;
   *
   * @param {Partial<Froala.ToolbarButtons>} values
   * @return {FroalaOptionsBuilder}
   */
  ToolbarButtons(values: Partial<Froala.ToolbarButtons>): FroalaOptionsBuilder {
    this._toolbarButtons = values;
    return this;
  }
  get toolbarButtons(): Partial<Froala.ToolbarButtons> {
    return this._toolbarButtons;
  }

  /**
   * The list of buttons that appear in the rich text editor's toolbar on medium devices (≥ 992px).
   * By default on MD screens, the editor uses the same buttons as for toolbarButtons.
   *
   * @param {Partial<Froala.ToolbarButtons>} values
   * @return {FroalaOptionsBuilder}
   */
  ToolbarButtonsMD(values: Partial<Froala.ToolbarButtons>): FroalaOptionsBuilder {
    this._toolbarButtonsMD = values;
    return this;
  }
  get toolbarButtonsMD(): Partial<Froala.ToolbarButtons> {
    return this._toolbarButtonsMD;
  }

  /**
   * The list of buttons that appear in the rich text editor's toolbar on small devices (≥ 768px).
   *
   * @param {Partial<Froala.ToolbarButtons>} values
   * @return {FroalaOptionsBuilder}
   */
  ToolbarButtonsSM(values: Partial<Froala.ToolbarButtons>): FroalaOptionsBuilder {
    this._toolbarButtonsSM = values;
    return this;
  }
  get toolbarButtonsSM(): Partial<Froala.ToolbarButtons> {
    return this._toolbarButtonsSM;
  }

  /**
   * The list of buttons that appear in the rich text editor's toolbar on extra small devices (< 768px).
   *
   * @param {Partial<Froala.ToolbarButtons>} values
   * @return {FroalaOptionsBuilder}
   */
  ToolbarButtonsXS(values: Partial<Froala.ToolbarButtons>): FroalaOptionsBuilder {
    this._toolbarButtonsXS = values;
    return this;
  }
  get toolbarButtonsXS(): Partial<Froala.ToolbarButtons> {
    return this._toolbarButtonsXS;
  }

  /**
   * A custom HTML selector placing the toolbar inside.
   *
   * @param {boolean} value
   * @return {FroalaOptionsBuilder}
   */
  ToolbarContainer(value: boolean): FroalaOptionsBuilder {
    this._toolbarContainer = value;
    return this;
  }
  get toolbarContainer(): boolean {
    return this._toolbarContainer;
  }

  /**
   * Enable or disable inline mode.
   *
   * @param {boolean} value
   * @return {FroalaOptionsBuilder}
   */
  ToolbarInline(value: boolean): FroalaOptionsBuilder {
    this._toolbarInline = value;
    return this;
  }
  get toolbarInline(): boolean {
    return this._toolbarInline;
  }

  /**
   * Keeps the toolbar at the top of the editing box in basic mode.
   * Disabling this option, will keep the toolbar at the top of the page when scrolling down.
   *
   * @param {boolean} value
   * @return {FroalaOptionsBuilder}
   */
  ToolbarSticky(value: boolean): FroalaOptionsBuilder {
    this._toolbarSticky = value;
    return this;
  }
  get toolbarSticky(): boolean {
    return this._toolbarSticky;
  }

  /**
   * The offset of the sticky toolbar from top of the page.
   * If toolbarBottom option is used, then this option will define the offset of the toolbar from the bottom of the page.
   *
   * @param {number} value
   * @return {FroalaOptionsBuilder}
   */
  ToolbarStickyOffset(value: number): FroalaOptionsBuilder {
    this._toolbarStickyOffset = value;
    return this;
  }
  get toolbarStickyOffset(): number {
    return this._toolbarStickyOffset;
  }

  /**
   * Keeps the editor visible next to the cursor even when there is no selection.
   * This option is available only when the toolbarInline option is set to 'true'.
   *
   * @param {boolean} value
   * @return {FroalaOptionsBuilder}
   */
  ToolbarVisibleWithoutSelection(value: boolean): FroalaOptionsBuilder {
    this._toolbarVisibleWithoutSelection = value;
    return this;
  }
  get toolbarVisibleWithoutSelection(): boolean {
    return this._toolbarVisibleWithoutSelection;
  }

  /**
   * Control if tooltips are shown when getting with mouse over the buttons from the toolbar.
   *
   * @param {boolean} value
   * @return {FroalaOptionsBuilder}
   */
  Tooltips(value: boolean): FroalaOptionsBuilder {
    this._tooltips = value;
    return this;
  }
  get tooltips(): boolean {
    return this._tooltips;
  }

  /**
   * Time in milliseconds to define how long the typing pause may be without the change to be saved in the undo stack.
   * The minimum value that can be set is 500.
   *
   * @param {number} value
   * @return {FroalaOptionsBuilder}
   */
  TypingTimer(value: number): FroalaOptionsBuilder {
    this._typingTimer = value;
    return this;
  }
  get typingTimer(): number {
    return this._typingTimer;
  }

  /**
   * When this options is disabled the edited content will have the external CSS properties converted to inline style.
   * Note: For this option to work correctly, it is necessary to load the CSS files from the same domain the editor is running on.
   *
   * @param {boolean} value
   * @return {FroalaOptionsBuilder}
   */
  UseClasses(value: boolean): FroalaOptionsBuilder {
    this._useClasses = value;
    return this;
  }
  get useClasses(): boolean {
    return this._useClasses;
  }

  /**
   * Sets the width of the editing box.
   *
   * @param {string} value
   * @return {FroalaOptionsBuilder}
   */
  Width(value: string): FroalaOptionsBuilder {
    this._width = value;
    return this;
  }
  get width(): string {
    return this._width;
  }

  /**
   * The zIndex to set on the editor toolbars and popups.
   *
   * @param {number} value
   * @return {FroalaOptionsBuilder}
   */
  ZIndex(value: number): FroalaOptionsBuilder {
    this._zIndex = value;
    return this;
  }
  get zIndex(): number {
    return this._zIndex;
  }

  /**
   * An object of items to show in the help modal.
   *
   * [Require plugin] help.min.js
   *
   * @param {object[]} values
   * @return {FroalaOptionsBuilder}
   */
  HelpSets(values: object[]): FroalaOptionsBuilder {
    this._helpSets = values;
    return this;
  }
  get helpSets(): object[] {
    return this._helpSets;
  }

  /**
   * The list of image types that are allowed to be uploaded.
   * Although this will restrict uploading other types of files, we strongly recommend you to check the file type on the server too.
   *
   * [Require plugin] image.min.js
   *
   * @param {Froala.ImageType[]} values
   * @return {FroalaOptionsBuilder}
   */
  ImageAllowedTypes(values: Froala.ImageType[]): FroalaOptionsBuilder {
    this._imageAllowedTypes = values;
    return this;
  }
  get imageAllowedTypes(): Froala.ImageType[] {
    return this._imageAllowedTypes;
  }

  /**
   * The list of buttons that appear in the edit image alternate text popup, when changing the alternate text of the image.
   *
   * [Require plugin] image.min.js
   *
   * @param {string[]} values
   * @return {FroalaOptionsBuilder}
   */
  ImageAltButtons(values: string[]): FroalaOptionsBuilder {
    this._imageAltButtons = values;
    return this;
  }
  get imageAltButtons(): string[] {
    return this._imageAltButtons;
  }

  /**
   * Proxy server to be used for reading images inserted by URL and upload them to a custom server.
   * By default we provide a proxy hosted on our servers,
   * however for full control, we recommend setting up your own proxy by using the details from CORS Anywhere. (https://github.com/Rob--W/cors-anywhere)
   *
   * [Require plugin] image.min.js
   *
   * @param {string} value
   * @return {FroalaOptionsBuilder}
   */
  ImageCORSProxy(value: string): FroalaOptionsBuilder {
    this._imageCORSProxy = value;
    return this;
  }
  get imageCORSProxy(): string {
    return this._imageCORSProxy;
  }

  /**
   * Sets the default image alignment when it is inserted in the rich text editor.
   *
   * [Require plugin] image.min.js
   *
   * @param {Froala.Align} value
   * @return {FroalaOptionsBuilder}
   */
  ImageDefaultAlign(value: Froala.Align): FroalaOptionsBuilder {
    this._imageDefaultAlign = value;
    return this;
  }
  get imageDefaultAlign(): Froala.Align {
    return this._imageDefaultAlign;
  }

  /**
   * Sets the default display for an image when is is inserted in the rich text.
   *
   * [Require plugin] image.min.js
   *
   * @param {Froala.Display} value
   * @return {FroalaOptionsBuilder}
   */
  ImageDefaultDisplay(value: Froala.Display): FroalaOptionsBuilder {
    this._imageDefaultDisplay = value;
    return this;
  }
  get imageDefaultDisplay(): Froala.Display {
    return this._imageDefaultDisplay;
  }

  /**
   * Sets the default width of the image when it is inserted in the rich text editor.
   * Setting it to 0 will not set any width.
   *
   * [Require plugin] image.min.js
   *
   * @param {number} value
   * @return {FroalaOptionsBuilder}
   */
  ImageDefaultMargin(value: number): FroalaOptionsBuilder {
    this._imageDefaultMargin = value;
    return this;
  }
  get imageDefaultMargin(): number {
    return this._imageDefaultMargin;
  }

  /**
   * Sets the default width of the image when it is inserted in the rich text editor.
   * Setting it to 0 will not set any width.
   *
   * [Require plugin] image.min.js
   *
   * @param {number} value
   * @return {FroalaOptionsBuilder}
   */
  ImageDefaultWidth(value: number): FroalaOptionsBuilder {
    this._imageDefaultWidth = value;
    return this;
  }
  get imageDefaultWidth(): number {
    return this._imageDefaultWidth;
  }

  /**
   * The list of buttons that appear in the edit image popup, when an image is selected.
   * If Image Aviary plugin is included, then 'aviary' can be used as an option as well.
   *
   * [Require plugin] image.min.js
   *
   * @param {string[]} values
   * @return {FroalaOptionsBuilder}
   */
  ImageEditButtons(values: string[]): FroalaOptionsBuilder {
    this._imageEditButtons = values;
    return this;
  }
  get imageEditButtons(): string[] {
    return this._imageEditButtons;
  }

  /**
   * The list of buttons that appear in the insert image popup, when inserting a new image into the WYSIWYG editor.
   *
   * [Require plugin] image.min.js
   *
   * @param {string[]} values
   * @return {FroalaOptionsBuilder}
   */
  ImageInsertButtons(values: string[]): FroalaOptionsBuilder {
    this._imageInsertButtons = values;
    return this;
  }
  get imageInsertButtons(): string[] {
    return this._imageInsertButtons;
  }

  /**
   * The maximum image size allowed on upload in bytes.
   * The default value is 10MB.
   * Although this makes an additional check before uploading the image, it is highly recommended to check image size on your server too.
   *
   * [Require plugin] image.min.js
   *
   * @param {number} value
   * @return {FroalaOptionsBuilder}
   */
  ImageMaxSize(value: number): FroalaOptionsBuilder {
    this._imageMaxSize = value;
    return this;
  }
  get imageMaxSize(): number {
    return this._imageMaxSize;
  }

  /**
   * The minimum width in PX the image can be resized to.
   *
   * [Require plugin] image.min.js
   *
   * @param {number} value
   * @return {FroalaOptionsBuilder}
   */
  ImageMinWidth(value: number): FroalaOptionsBuilder {
    this._imageMinWidth = value;
    return this;
  }
  get imageMinWidth(): number {
    return this._imageMinWidth;
  }

  /**
   * Allows changing the position of the images by dragging them.
   * This option will work correctly only when including the draggable plugin.
   *
   * [Require plugin] image.min.js
   *
   * @param {boolean} value
   * @return {FroalaOptionsBuilder}
   */
  ImageMove(value: boolean): FroalaOptionsBuilder {
    this._imageMove = value;
    return this;
  }
  get imageMove(): boolean {
    return this._imageMove;
  }

  /**
   * Allows multiple image styles to be selected at a time.
   *
   * [Require plugin] image.min.js
   *
   * @param {boolean} value
   * @return {FroalaOptionsBuilder}
   */
  ImageMultipleStyles(value: boolean): FroalaOptionsBuilder {
    this._imageMultipleStyles = value;
    return this;
  }
  get imageMultipleStyles(): boolean {
    return this._imageMultipleStyles;
  }

  /**
   * Allows pasting images from clipboard.
   *
   * [Require plugin] image.min.js
   *
   * @param {boolean} value
   * @return {FroalaOptionsBuilder}
   */
  ImagePaste(value: boolean): FroalaOptionsBuilder {
    this._imagePaste = value;
    return this;
  }
  get imagePaste(): boolean {
    return this._imagePaste;
  }

  /**
   * Use default image settings for pasted images.
   *
   * [Require plugin] image.min.js
   *
   * @param {boolean} value
   * @return {FroalaOptionsBuilder}
   */
  ImagePasteProcess(value: boolean): FroalaOptionsBuilder {
    this._imagePasteProcess = value;
    return this;
  }
  get imagePasteProcess(): boolean {
    return this._imagePasteProcess;
  }

  /**
   * Disables image resize when set to 'false'.
   *
   * [Require plugin] image.min.js
   *
   * @param {boolean} value
   * @return {FroalaOptionsBuilder}
   */
  ImageResize(value: boolean): FroalaOptionsBuilder {
    this._imageResize = value;
    return this;
  }
  get imageResize(): boolean {
    return this._imageResize;
  }

  /**
   * By default the image resize is using PX.
   * Enabling this option will use % instead when resizing an image inside the editor.
   *
   * [Require plugin] image.min.js
   *
   * @param {boolean} value
   * @return {FroalaOptionsBuilder}
   */
  ImageResizeWithPercent(value: boolean): FroalaOptionsBuilder {
    this._imageResizeWithPercent = value;
    return this;
  }
  get imageResizeWithPercent(): boolean {
    return this._imageResizeWithPercent;
  }

  /**
   * Force image percent to round to integer while resizing.
   *
   * [Require plugin] image.min.js
   *
   * @param {boolean} value
   * @return {FroalaOptionsBuilder}
   */
  ImageRoundPercent(value: boolean): FroalaOptionsBuilder {
    this._imageRoundPercent = value;
    return this;
  }
  get imageRoundPercent(): boolean {
    return this._imageRoundPercent;
  }

  /**
   * When this option is enabled, the images will get the width and height set as attribute in the output.
   *
   * [Require plugin] image.min.js
   *
   * @param {boolean} value
   * @return {FroalaOptionsBuilder}
   */
  ImageOutputSize(value: boolean): FroalaOptionsBuilder {
    this._imageOutputSize = value;
    return this;
  }
  get imageOutputSize(): boolean {
    return this._imageOutputSize;
  }

  /**
   * The list of buttons that appear in the edit image size popup, when editing the image's width and height.
   *
   * [Require plugin] image.min.js
   *
   * @param {string[]} values
   * @return {FroalaOptionsBuilder}
   */
  ImageSizeButtons(values: string[]): FroalaOptionsBuilder {
    this._imageSizeButtons = values;
    return this;
  }
  get imageSizeButtons(): string[] {
    return this._imageSizeButtons;
  }

  /**
   * Enables splitting the HTML when inserting a new image.
   *
   * [Require plugin] image.min.js
   *
   * @param {boolean} value
   * @return {FroalaOptionsBuilder}
   */
  ImageSplitHTML(value: boolean): FroalaOptionsBuilder {
    this._imageSplitHTML = value;
    return this;
  }
  get imageSplitHTML(): boolean {
    return this._imageSplitHTML;
  }

  /**
   * Set custom styles for the selected image.
   * The classes should be defined in CSS, otherwise no changes will be visible on the image's appearance.
   *
   * [Require plugin] image.min.js
   *
   * @param {Froala.GenericObject<string>} value
   * @return {FroalaOptionsBuilder}
   */
  ImageStyles(value: Froala.GenericObject<string>): FroalaOptionsBuilder {
    this._imageStyles = value;
    return this;
  }
  get imageStyles(): Froala.GenericObject<string> {
    return this._imageStyles;
  }

  /**
   * Set options for TUI editor plugin.
   *
   * [Require plugin] image.min.js
   *
   * @param {object} value
   * @return {FroalaOptionsBuilder}
   */
  ImageTUIOptions(value: object): FroalaOptionsBuilder {
    this._imageTUIOptions = value;
    return this;
  }
  get imageTUIOptions(): object {
    return this._imageTUIOptions;
  }

  /**
   * Allows text near an image when it is aligned to the left or to the right.
   * Disabling this option will make the display button for image editor popup unavailable.
   *
   * [Require plugin] image.min.js
   *
   * @param {boolean} value
   * @return {FroalaOptionsBuilder}
   */
  ImageTextNear(value: boolean): FroalaOptionsBuilder {
    this._imageTextNear = value;
    return this;
  }
  get imageTextNear(): boolean {
    return this._imageTextNear;
  }

  /**
   * Enable or disable image upload.
   *
   * [Require plugin] image.min.js
   *
   * @param {boolean} value
   * @return {FroalaOptionsBuilder}
   */
  ImageUpload(value: boolean): FroalaOptionsBuilder {
    this._imageUpload = value;
    return this;
  }
  get imageUpload(): boolean {
    return this._imageUpload;
  }

  /**
   * Add new line after inserting an image when enabled.
   *
   * [Require plugin] image.min.js
   *
   * @param {boolean} value
   * @return {FroalaOptionsBuilder}
   */
  ImageAddNewLine(value: boolean): FroalaOptionsBuilder {
    this._imageAddNewLine = value;
    return this;
  }
  get imageAddNewLine(): boolean {
    return this._imageAddNewLine;
  }

  /**
   * The HTTP image upload request type.
   *
   * [Require plugin] image.min.js
   *
   * @param {Froala.UploadMethod} value
   * @return {FroalaOptionsBuilder}
   */
  ImageUploadMethod(value: Froala.UploadMethod): FroalaOptionsBuilder {
    this._imageUploadMethod = value;
    return this;
  }
  get imageUploadMethod(): Froala.UploadMethod {
    return this._imageUploadMethod;
  }

  /**
   * Customize the name of the parameter that contains the image file in the upload request.
   *
   * [Require plugin] image.min.js
   *
   * @param {string} value
   * @return {FroalaOptionsBuilder}
   */
  ImageUploadParam(value: string): FroalaOptionsBuilder {
    this._imageUploadParam = value;
    return this;
  }
  get imageUploadParam(): string {
    return this._imageUploadParam;
  }

  /**
   * Pass additional parameters to the upload request.
   *
   * [Require plugin] image.min.js
   *
   * @param {object} value
   * @return {FroalaOptionsBuilder}
   */
  ImageUploadParams(value: object): FroalaOptionsBuilder {
    this._imageUploadParams = value;
    return this;
  }
  get imageUploadParams(): object {
    return this._imageUploadParams;
  }

  /**
   * Upload images inserted by URL to custom server instead of linking them by URL.
   *
   * [Require plugin] image.min.js
   *
   * @param {boolean} value
   * @return {FroalaOptionsBuilder}
   */
  ImageUploadRemoteUrls(value: boolean): FroalaOptionsBuilder {
    this._imageUploadRemoteUrls = value;
    return this;
  }
  get imageUploadRemoteUrls(): boolean {
    return this._imageUploadRemoteUrls;
  }

  /**
   * Set the options for image upload to S3.
   * All the fields from the example below are required.
   * Also make sure that you have enabled CORS on Amazon. (https://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html)
   *
   * Note: 'uploadURL' property can be used instead of bucket and region properties to specify a custom URL from Amazon where to upload the image.
   *
   * [Require plugin] image.min.js
   *
   * @param {object} value
   * @return {FroalaOptionsBuilder}
   */
  ImageUploadToS3(value: object): FroalaOptionsBuilder {
    this._imageUploadToS3 = value;
    return this;
  }
  get imageUploadToS3(): object {
    return this._imageUploadToS3;
  }

  /**
   * The URL where the images uploaded by the user are saved. When an image is uploaded, the editor sends the file to the server through a HTTP request.
   * The server should process the data from the 'file' parameter of the request and return a JSON object containing a 'link' field with the link to the uploaded image.
   * More details can be found in the Image Upload concept article. (https://www.froala.com/wysiwyg-editor/docs/concepts/image/upload)
   *
   * E.g. {link: 'path/to/image.jpg'}.
   *
   * Note 1: By default, the images are stored on our servers, but if you want to have full control over them, you should consider implementing the upload on your server.
   * The images stored on our servers, may be deleted at any time without any notice.
   *
   * Note 2: If the domain where the image is saved is not the same with the one where the editor is running,
   * you may need to enable requestWithCORS option and make specific customizations on the server.
   * For more information please refer to Cross-origin resource sharing. (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
   *
   * [Require plugin] image.min.js
   *
   * @param {object} value
   * @return {FroalaOptionsBuilder}
   */
  ImageUploadURL(value: string): FroalaOptionsBuilder {
    this._imageUploadURL = value;
    return this;
  }
  get imageUploadURL(): string {
    return this._imageUploadURL;
  }

  /**
   * The HTTP image manager delete image request type.
   *
   * [Require plugin] image_manager.min.js
   *
   * @param {Froala.DeleteMethod} value
   * @return {FroalaOptionsBuilder}
   */
  ImageManagerDeleteMethod(value: Froala.DeleteMethod): FroalaOptionsBuilder {
    this._imageManagerDeleteMethod = value;
    return this;
  }
  get imageManagerDeleteMethod(): Froala.DeleteMethod {
    return this._imageManagerDeleteMethod;
  }

  /**
   * Additional parameters passed to the image manager image delete request.
   *
   * [Require plugin] image_manager.min.js
   *
   * @param {object} value
   * @return {FroalaOptionsBuilder}
   */
  ImageManagerDeleteParams(value: object): FroalaOptionsBuilder {
    this._imageManagerDeleteParams = value;
    return this;
  }
  get imageManagerDeleteParams(): object {
    return this._imageManagerDeleteParams;
  }

  /**
   * The URL where the HTTP request is done to delete the image.
   * The request will contain the image source as src parameter.
   *
   * [Require plugin] image_manager.min.js
   *
   * @param {string} value
   * @return {FroalaOptionsBuilder}
   */
  ImageManagerDeleteURL(value: string): FroalaOptionsBuilder {
    this._imageManagerDeleteURL = value;
    return this;
  }
  get imageManagerDeleteURL(): string {
    return this._imageManagerDeleteURL;
  }

  /**
   * The HTTP image manager load images request type.
   *
   * [Require plugin] image_manager.min.js
   *
   * @param {Froala.GetMethod} value
   * @return {FroalaOptionsBuilder}
   */
  ImageManagerLoadMethod(value: Froala.GetMethod): FroalaOptionsBuilder {
    this._imageManagerDeleteURL = value;
    return this;
  }
  get imageManagerLoadMethod(): Froala.GetMethod {
    return this._imageManagerLoadMethod;
  }

  /**
   * Additional parameters passed to the load images request from the image manager.
   *
   * [Require plugin] image_manager.min.js
   *
   * @param {object} value
   * @return {FroalaOptionsBuilder}
   */
  ImageManagerLoadParams(value: object): FroalaOptionsBuilder {
    this._imageManagerLoadParams = value;
    return this;
  }
  get imageManagerLoadParams(): object {
    return this._imageManagerLoadParams;
  }

  /**
   * The URL where the HTTP request is done in order to load a page of images that appear in the image manager.
   * The response should be an array with an Object for each image (https://www.froala.com/wysiwyg-editor/docs/options#imageManagerLoadURL)
   *
   * [Require plugin] image_manager.min.js
   *
   * @param {string} value
   * @return {FroalaOptionsBuilder}
   */
  ImageManagerLoadURL(value: string): FroalaOptionsBuilder {
    this._imageManagerLoadURL = value;
    return this;
  }
  get imageManagerLoadURL(): string {
    return this._imageManagerLoadURL;
  }

  /**
   * The number of images loaded per page in the image manager.
   *
   * [Require plugin] image_manager.min.js
   *
   * @param {number} value
   * @return {FroalaOptionsBuilder}
   */
  ImageManagerPageSize(value: number): FroalaOptionsBuilder {
    this._imageManagerPageSize = value;
    return this;
  }
  get imageManagerPageSize(): number {
    return this._imageManagerPageSize;
  }

  /**
   * The path to a gif image to be displayed while loading the images from the server in the image manager.
   * If no option is specified, "Loading.." text will appear.
   *
   * [Require plugin] image_manager.min.js
   *
   * @param {string} value
   * @return {FroalaOptionsBuilder}
   */
  ImageManagerPreloader(value: string): FroalaOptionsBuilder {
    this._imageManagerPreloader = value;
    return this;
  }
  get imageManagerPreloader(): string {
    return this._imageManagerPreloader;
  }

  /**
   * The distance in pixels from the bottom of the scrollable content at which to trigger the loading of the next page of images.
   *
   * [Require plugin] image_manager.min.js
   *
   * @param {number} value
   * @return {FroalaOptionsBuilder}
   */
  ImageManagerScrollOffset(value: number): FroalaOptionsBuilder {
    this._imageManagerScrollOffset = value;
    return this;
  }
  get imageManagerScrollOffset(): number {
    return this._imageManagerScrollOffset;
  }

  /**
   * To enable/disable toggle of filter tags for image manager popup.
   *
   * [Require plugin] image_manager.min.js
   *
   * @param {boolean} value
   * @return {FroalaOptionsBuilder}
   */
  ImageManagerToggleTags(value: boolean): FroalaOptionsBuilder {
    this._imageManagerToggleTags = value;
    return this;
  }
  get imageManagerToggleTags(): boolean {
    return this._imageManagerToggleTags;
  }

  /**
   * Set custom styles for the selected text.
   * This option is an Object where the key is the name of the new style that appears in the dropdown and the value specifies the CSS properties for it.
   *
   * [Require plugin] inline_style.min.js
   *
   * @param {Froala.GenericObject<string>} value
   * @return {FroalaOptionsBuilder}
   */
  InlineStyles(value: Froala.GenericObject<string>): FroalaOptionsBuilder {
    this._inlineStyles = value;
    return this;
  }
  get inlineStyles(): Froala.GenericObject<string> {
    return this._inlineStyles;
  }

  /**
   * Set custom classes for the selected text.
   * This option is an Object where the key is the name of the new class that appears in the dropdown and the value specifies the class name for it.
   *
   * [Require plugin] inline_class.min.js
   *
   * @param {Froala.GenericObject<string>} value
   * @return {FroalaOptionsBuilder}
   */
  InlineClasses(value: Froala.GenericObject<string>): FroalaOptionsBuilder {
    this._inlineClasses = value;
    return this;
  }
  get inlineClasses(): Froala.GenericObject<string> {
    return this._inlineClasses;
  }

  /**
   * Select the language to be used in the rich text editor's interface.
   *
   * [Require plugin] /languages/*.js
   *
   * @param {Froala.Language} value
   * @return {FroalaOptionsBuilder}
   */
  Language(value: Froala.Language): FroalaOptionsBuilder {
    this._language = value;
    return this;
  }
  get language(): Froala.Language {
    return this._language;
  }

  /**
   * The distance in pixels from the left or right of an element at which to show the line-breaker.
   *
   * [Require plugin]	line_breaker.min.js
   *
   * @param {number} value
   * @return {FroalaOptionsBuilder}
   */
  LineBreakerHorizontalOffset(value: number): FroalaOptionsBuilder {
    this._lineBreakerHorizontalOffset = value;
    return this;
  }
  get lineBreakerHorizontalOffset(): number {
    return this._lineBreakerHorizontalOffset;
  }

  /**
   * The distance in pixels from the top or bottom of an element at which to show the line-breaker.
   *
   * [Require plugin]	line_breaker.min.js
   *
   * @param {number} value
   * @return {FroalaOptionsBuilder}
   */
  LineBreakerOffset(value: number): FroalaOptionsBuilder {
    this._lineBreakerOffset = value;
    return this;
  }
  get lineBreakerOffset(): number {
    return this._lineBreakerOffset;
  }

  /**
   * The list of HTML tags between which the line-breaker should appear.
   *
   * [Require plugin]	line_breaker.min.js
   *
   * @param {string[]} values
   * @return {FroalaOptionsBuilder}
   */
  LineBreakerTags(values: string[]): FroalaOptionsBuilder {
    this._lineBreakerTags = values;
    return this;
  }
  get lineBreakerTags(): string[] {
    return this._lineBreakerTags;
  }

  /**
   * When enabled, all links open in a new tab and no option to set this action would be presented in the UI.
   *
   * [Require plugin]	link.min.js
   *
   * @param {boolean} value
   * @return {FroalaOptionsBuilder}
   */
  LinkAlwaysBlank(value: boolean): FroalaOptionsBuilder {
    this._linkAlwaysBlank = value;
    return this;
  }
  get linkAlwaysBlank(): boolean {
    return this._linkAlwaysBlank;
  }

  /**
   * Specifies if the rel="nofollow" attribute should be added on all links.
   *
   * [Require plugin]	link.min.js
   *
   * @param {boolean} value
   * @return {FroalaOptionsBuilder}
   */
  LinkAlwaysNoFollow(value: boolean): FroalaOptionsBuilder {
    this._linkAlwaysNoFollow = value;
    return this;
  }
  get linkAlwaysNoFollow(): boolean {
    return this._linkAlwaysNoFollow;
  }

  /**
   * An object with additional attributes that could be customized for a link.
   *
   * [Require plugin]	link.min.js
   *
   * @param {Froala.GenericObject<any>} value
   * @return {FroalaOptionsBuilder}
   */
  LinkAttributes(value: Froala.GenericObject<any>): FroalaOptionsBuilder {
    this._linkAttributes = value;
    return this;
  }
  get linkAttributes(): Froala.GenericObject<any> {
    return this._linkAttributes;
  }

  /**
   * Sets the default URL prefix.
   *
   * [Require plugin]	link.min.js
   *
   * @param {string} value
   * @return {FroalaOptionsBuilder}
   */
  LinkAutoPrefix(value: string): FroalaOptionsBuilder {
    this._linkAutoPrefix = value;
    return this;
  }
  get linkAutoPrefix(): string {
    return this._linkAutoPrefix;
  }

  /**
   * Email addresses inserted as link are converted to 'mailto:' links.
   *
   * [Require plugin]	link.min.js
   *
   * @param {boolean} value
   * @return {FroalaOptionsBuilder}
   */
  LinkConvertEmailAddress(value: boolean): FroalaOptionsBuilder {
    this._linkConvertEmailAddress = value;
    return this;
  }
  get linkConvertEmailAddress(): boolean {
    return this._linkConvertEmailAddress;
  }

  /**
   * The list of buttons that appear in the edit link popup, when clicking on an existing link from the editor.
   *
   * [Require plugin]	link.min.js
   *
   * @param {string[]} values
   * @return {FroalaOptionsBuilder}
   */
  LinkEditButtons(values: string[]): FroalaOptionsBuilder {
    this._linkEditButtons = values;
    return this;
  }
  get linkEditButtons(): string[] {
    return this._linkEditButtons;
  }

  /**
   * The list of buttons that appear in the insert link popup, when inserting a new link into the WYSIWYG editor.
   *
   * [Require plugin]	link.min.js
   *
   * @param {string[]} values
   * @return {FroalaOptionsBuilder}
   */
  LinkInsertButtons(values: string[]): FroalaOptionsBuilder {
    this._linkInsertButtons = values;
    return this;
  }
  get linkInsertButtons(): string[] {
    return this._linkInsertButtons;
  }

  /**
   * Set a predefined list of links to select from when inserting or editing a link.
   *
   * [Require plugin]	link.min.js
   *
   * @param {Froala.GenericObject<string>[]} values
   * @return {FroalaOptionsBuilder}
   */
  LinkList(values: Froala.GenericObject<string>[]): FroalaOptionsBuilder {
    this._linkList = values;
    return this;
  }
  get linkList(): Froala.GenericObject<string>[] {
    return this._linkList;
  }

  /**
   * Allows multiple link styles to be selected at a time.
   *
   * [Require plugin]	link.min.js
   *
   * @param {boolean} value
   * @return {FroalaOptionsBuilder}
   */
  LinkMultipleStyles(value: boolean): FroalaOptionsBuilder {
    this._linkMultipleStyles = value;
    return this;
  }
  get linkMultipleStyles(): boolean {
    return this._linkMultipleStyles;
  }

  /**
   * Disables adding the 'noopener' attribute when link is set to open in a new tab.
   *
   * [Require plugin]	link.min.js
   *
   * @param {boolean} value
   * @return {FroalaOptionsBuilder}
   */
  LinkNoOpener(value: boolean): FroalaOptionsBuilder {
    this._linkNoOpener = value;
    return this;
  }
  get linkNoOpener(): boolean {
    return this._linkNoOpener;
  }

  /**
   * Disables adding the 'noreferrer' attribute when link is set to open in a new tab.
   *
   * [Require plugin]	link.min.js
   *
   * @param {boolean} value
   * @return {FroalaOptionsBuilder}
   */
  LinkNoReferrer(value: boolean): FroalaOptionsBuilder {
    this._linkNoReferrer = value;
    return this;
  }
  get linkNoReferrer(): boolean {
    return this._linkNoReferrer;
  }

  /**
   * Set custom styles for the selected link.
   * The classes should be defined in CSS, otherwise no changes will be visible on the link's appearance.
   *
   * [Require plugin]	link.min.js
   *
   * @param {Froala.GenericObject<string>} value
   * @return {FroalaOptionsBuilder}
   */
  LinkStyles(value: Froala.GenericObject<string>): FroalaOptionsBuilder {
    this._linkStyles = value;
    return this;
  }
  get linkStyles(): Froala.GenericObject<string> {
    return this._linkStyles;
  }

  /**
   * This option allows to edit the link text inside the edit link popup.
   *
   * [Require plugin]	link.min.js
   *
   * @param {boolean} value
   * @return {FroalaOptionsBuilder}
   */
  LinkText(value: boolean): FroalaOptionsBuilder {
    this._linkText = value;
    return this;
  }
  get linkText(): boolean {
    return this._linkText;
  }

  /**
   * The default option to select for Paragraph Format.
   *
   * [Require plugin]	paragraph_format.min.js
   *
   * @param {string} value
   * @return {FroalaOptionsBuilder}
   */
  ParagraphDefaultSelection(value: string): FroalaOptionsBuilder {
    this._paragraphDefaultSelection = value;
    return this;
  }
  get paragraphDefaultSelection(): string {
    return this._paragraphDefaultSelection;
  }

  /**
   * An Object with the options that will appear in the Paragraph Format dropdown from the toolbar.
   * Where 'N' tag will be treated as a <p> when the enter option is set to '$.FroalaEditor.ENTER_P' and as a <div> when the enter option is set to '$.FroalaEditor.ENTER_DIV'.
   *
   * [Require plugin]	paragraph_format.min.js
   *
   * @param {Froala.GenericObject<string>} value
   * @return {FroalaOptionsBuilder}
   */
  ParagraphFormat(value: Froala.GenericObject<string>): FroalaOptionsBuilder {
    this._paragraphFormat = value;
    return this;
  }
  get paragraphFormat(): Froala.GenericObject<string> {
    return this._paragraphFormat;
  }

  /**
   * The Paragraph Format button from the WYSIWYG editor's toolbar is replaced with a dropdown showing the actual paragraph format name for the current text selection.
   *
   * [Require plugin]	paragraph_format.min.js
   *
   * @param {boolean} value
   * @return {FroalaOptionsBuilder}
   */
  ParagraphFormatSelection(value: boolean): FroalaOptionsBuilder {
    this._paragraphFormatSelection = value;
    return this;
  }
  get paragraphFormatSelection(): boolean {
    return this._paragraphFormatSelection;
  }

  /**
   * Allows multiple paragraph styles to be selected at a time.
   *
   * [Require plugin]	paragraph_format.min.js
   *
   * @param {boolean} value
   * @return {FroalaOptionsBuilder}
   */
  ParagraphMultipleStyles(value: boolean): FroalaOptionsBuilder {
    this._paragraphMultipleStyles = value;
    return this;
  }
  get paragraphMultipleStyles(): boolean {
    return this._paragraphMultipleStyles;
  }

  /**
   * Set custom styles for the selected paragraph.
   * The classes should be defined in CSS, otherwise no changes will be visible on the paragraph's appearance.
   *
   * [Require plugin]	paragraph_style.min.js
   *
   * @param {Froala.GenericObject<string>} value
   * @return {FroalaOptionsBuilder}
   */
  ParagraphStyles(value: Froala.GenericObject<string>): FroalaOptionsBuilder {
    this._paragraphStyles = value;
    return this;
  }
  get paragraphStyles(): Froala.GenericObject<string> {
    return this._paragraphStyles;
  }

  /**
   * Set the line height for the current selected paragraph.
   *
   * [Require plugin]	line_height.min.js
   *
   * @param {Froala.GenericObject<string>} value
   * @return {FroalaOptionsBuilder}
   */
  LineHeights(value: Froala.GenericObject<string>): FroalaOptionsBuilder {
    this._lineHeights = value;
    return this;
  }
  get lineHeights(): Froala.GenericObject<string> {
    return this._lineHeights;
  }

  /**
   * Enables list advanced types for the bullets.
   *
   * [Require plugin]	lists.min.js
   *
   * @param {boolean} value
   * @return {FroalaOptionsBuilder}
   */
  ListAdvancedTypes(value: boolean): FroalaOptionsBuilder {
    this._listAdvancedTypes = value;
    return this;
  }
  get listAdvancedTypes(): boolean {
    return this._listAdvancedTypes;
  }

  /**
   * The buttons to display in quick insert.
   *
   * [Require plugin]	quick_insert.min.js
   *
   * @param {string[]} values
   * @return {FroalaOptionsBuilder}
   */
  QuickInsertButtons(values: string[]): FroalaOptionsBuilder {
    this._quickInsertButtons = values;
    return this;
  }
  get quickInsertButtons(): string[] {
    return this._quickInsertButtons;
  }

  /**
   * To enable quick insert functionality.
   *
   * [Require plugin]	quick_insert.min.js
   *
   * @param {boolean} value
   * @return {FroalaOptionsBuilder}
   */
  QuickInsertEnabled(value: boolean): FroalaOptionsBuilder {
    this._quickInsertEnabled = value;
    return this;
  }
  get quickInsertEnabled(): boolean {
    return this._quickInsertEnabled;
  }

  /**
   * The list of tags for which the quick insert button will appear when empty.
   *
   * [Require plugin]	quick_insert.min.js
   *
   * @param {string[]} values
   * @return {FroalaOptionsBuilder}
   */
  QuickInsertTags(values: string[]): FroalaOptionsBuilder {
    this._quickInsertTags = values;
    return this;
  }
  get quickInsertTags(): string[] {
    return this._quickInsertTags;
  }

  /**
   * The list of Font Awesome buttons to show in the popup for inserting icons.
   *
   * [Require third party]	font_awesome.min.js
   *
   * @param {string[]} values
   * @return {FroalaOptionsBuilder}
   */
  FontAwesomeButtons(values: string[]): FroalaOptionsBuilder {
    this._faButtons = values;
    return this;
  }
  get fontAwesomeButtons(): string[] {
    return this._faButtons;
  }

  /**
   * The list of Font Awesome icons to show in the modal for inserting icons.
   *
   * [Require third party]	font_awesome.min.js
   *
   * @param {object} value
   * @return {FroalaOptionsBuilder}
   */
  FontAwesomeSets(value: object): FroalaOptionsBuilder {
    this._fontAwesomeSets = value;
    return this;
  }
  get fontAwesomeSets(): object {
    return this._fontAwesomeSets;
  }

  /**
   * Set the template to be used for the Font Awesome icons inserted in the editor.
   *
   * [Require third party]	font_awesome.min.js
   *
   * @param {string} value
   * @return {FroalaOptionsBuilder}
   */
  FontAwesomeTemplate(value: string): FroalaOptionsBuilder {
    this._fontAwesomeTemplate = value;
    return this;
  }
  get fontAwesomeTemplate(): string {
    return this._fontAwesomeTemplate;
  }

  /**
   * The list of special characters buttons for popup.
   *
   * [Require third party]	special_characters.min.js
   *
   * @param {string[]} values
   * @return {FroalaOptionsBuilder}
   */
  SpecialCharButtons(values: string[]): FroalaOptionsBuilder {
    this._specialCharButtons = values;
    return this;
  }
  get specialCharButtons(): string[] {
    return this._specialCharButtons;
  }

  /**
   * The list of special characters to show.
   *
   * [Require third party]	special_characters.min.js
   *
   * @param {Froala.SpecialCharacterSet[]} value
   * @return {FroalaOptionsBuilder}
   */
  SpecialCharactersSets(value: Froala.SpecialCharacterSet[]): FroalaOptionsBuilder {
    this._specialCharactersSets = value;
    return this;
  }
  get specialCharactersSets(): Froala.SpecialCharacterSet[] {
    return this._specialCharactersSets;
  }

  /**
   * The options used for WebSpellChecker.
   *
   * [Require third party]	wscbundle.min.js
   *
   * @param {Partial<Froala.Events>} value
   * @return {FroalaOptionsBuilder}
   */
  Events(value: Partial<Froala.Events>): FroalaOptionsBuilder {
    this._events = value;
    return this;
  }
  get events(): Partial<Froala.Events> {
    return this._events;
  }

  /**
   * Time in milliseconds that defines when the autosave should be triggered.
   * Setting a higher interval helps preventing request overload on the server.
   * The autosave will be triggered only if the content was changed from the last interval.
   * Setting the value to 0 will disable autosave.
   *
   * Note: It is not recommended to use values lower than 2000ms in order to prevent overload.
   *
   * [Require plugin]	save.min.js
   *
   * @param {number} value
   * @return {FroalaOptionsBuilder}
   */
  SaveInterval(value: number): FroalaOptionsBuilder {
    this._saveInterval = value;
    return this;
  }
  get saveInterval(): number {
    return this._saveInterval;
  }

  /**
   * The HTTP save request type.
   *
   * [Require plugin]	save.min.js
   *
   * @param {Froala.UploadMethod} value
   * @return {FroalaOptionsBuilder}
   */
  SaveMethod(value: Froala.UploadMethod): FroalaOptionsBuilder {
    this._saveMethod = value;
    return this;
  }
  get saveMethod(): Froala.UploadMethod {
    return this._saveMethod;
  }

  /**
   * The name of the parameter which contains the rich text editor's content on the save request.
   *
   * [Require plugin]	save.min.js
   *
   * @param {string} value
   * @return {FroalaOptionsBuilder}
   */
  SaveParam(value: string): FroalaOptionsBuilder {
    this._saveParam = value;
    return this;
  }
  get saveParam(): string {
    return this._saveParam;
  }

  /**
   * Additional parameters passed to the save request.
   *
   * [Require plugin]	save.min.js
   *
   * @param {object} value
   * @return {FroalaOptionsBuilder}
   */
  SaveParams(value: object): FroalaOptionsBuilder {
    this._saveParams = value;
    return this;
  }
  get saveParams(): object {
    return this._saveParams;
  }

  /**
   * The URL where the save request is being made.
   * The editor will initialize a HTTP request to the specified URL passing the editor's content in the 'body' parameter of the HTTP request.
   *
   * [Require plugin]	save.min.js
   *
   * @param {object} value
   * @return {FroalaOptionsBuilder}
   */
  SaveURL(value: string): FroalaOptionsBuilder {
    this._saveURL = value;
    return this;
  }
  get saveURL(): string {
    return this._saveURL;
  }

  /**
   * Allows multiple table cell styles to be selected at a time.
   *
   * [Require plugin]	table.min.js
   *
   * @param {boolean} value
   * @return {FroalaOptionsBuilder}
   */
  TableCellMultipleStyles(value: boolean): FroalaOptionsBuilder {
    this._tableCellMultipleStyles = value;
    return this;
  }
  get tableCellMultipleStyles(): boolean {
    return this._tableCellMultipleStyles;
  }

  /**
   * Set custom styles for the selected table cells.
   * The classes should be defined in CSS, otherwise no changes will be visible.
   *
   * [Require plugin]	table.min.js
   *
   * @param {Froala.GenericObject<string>} value
   * @return {FroalaOptionsBuilder}
   */
  TableCellStyles(value: Froala.GenericObject<string>): FroalaOptionsBuilder {
    this._tableCellStyles = value;
    return this;
  }
  get tableCellStyles(): Froala.GenericObject<string> {
    return this._tableCellStyles;
  }

  /**
   * The list of colors used in the edit table colors popup for the background of a table cell.
   * Passing 'REMOVE' as a value in the array will display the Clear Formatting button for the cell background color.
   *
   * [Require plugin]	table.min.js
   *
   * @param {string[]} values
   * @return {FroalaOptionsBuilder}
   */
  TableColors(values: string[]): FroalaOptionsBuilder {
    this._tableColors = values;
    return this;
  }
  get tableColors(): string[] {
    return this._tableColors;
  }

  /**
   * The list of buttons that appear in the edit table colors popup.
   *
   * [Require plugin]	table.min.js
   *
   * @param {string[]} values
   * @return {FroalaOptionsBuilder}
   */
  TableColorsButtons(values: string[]): FroalaOptionsBuilder {
    this._tableColorsButtons = values;
    return this;
  }
  get tableColorsButtons(): string[] {
    return this._tableColorsButtons;
  }

  /**
   * The number of colors displayed on a line in the edit table colors popup.
   *
   * [Require plugin]	table.min.js
   *
   * @param {number} value
   * @return {FroalaOptionsBuilder}
   */
  TableColorsStep(value: number): FroalaOptionsBuilder {
    this._tableColorsStep = value;
    return this;
  }
  get tableColorsStep(): number {
    return this._tableColorsStep;
  }

  /**
   * The size of the table when it is inserted in the editor.
   *
   * [Require plugin]	table.min.js
   *
   * @param {string} value
   * @return {FroalaOptionsBuilder}
   */
  TableDefaultWidth(value: string): FroalaOptionsBuilder {
    this._tableDefaultWidth = value;
    return this;
  }
  get tableDefaultWidth(): string {
    return this._tableDefaultWidth;
  }

  /**
   * The list of buttons that appear in the edit table popup, when one or many cells are selected.
   *
   * [Require plugin]	table.min.js
   *
   * @param {string[]} values
   * @return {FroalaOptionsBuilder}
   */
  TableEditButtons(values: string[]): FroalaOptionsBuilder {
    this._tableEditButtons = values;
    return this;
  }
  get tableEditButtons(): string[] {
    return this._tableEditButtons;
  }

  /**
   * The list of buttons that appear in the insert table popup, when the toolbarInline option is set to true.
   *
   * [Require plugin]	table.min.js
   *
   * @param {string[]} values
   * @return {FroalaOptionsBuilder}
   */
  TableInsertButtons(values: string[]): FroalaOptionsBuilder {
    this._tableInsertButtons = values;
    return this;
  }
  get tableInsertButtons(): string[] {
    return this._tableInsertButtons;
  }

  /**
   * Insert rows and columns easier by going to the edge of the table.
   *
   * [Require plugin]	table.min.js
   *
   * @param {boolean} value
   * @return {FroalaOptionsBuilder}
   */
  TableInsertHelper(value: boolean): FroalaOptionsBuilder {
    this._tableInsertHelper = value;
    return this;
  }
  get tableInsertHelper(): boolean {
    return this._tableInsertHelper;
  }

  /**
   * The offset for showing the table insert helper.
   *
   * [Require plugin]	table.min.js
   *
   * @param {number} value
   * @return {FroalaOptionsBuilder}
   */
  TableInsertHelperOffset(value: number): FroalaOptionsBuilder {
    this._tableInsertHelperOffset = value;
    return this;
  }
  get tableInsertHelperOffset(): number {
    return this._tableInsertHelperOffset;
  }

  /**
   * The maximum number of lines and columns when inserting a table into the rich text editor.
   *
   * [Require plugin]	table.min.js
   *
   * @param {number} value
   * @return {FroalaOptionsBuilder}
   */
  TableInsertMaxSize(value: number): FroalaOptionsBuilder {
    this._tableInsertMaxSize = value;
    return this;
  }
  get tableInsertMaxSize(): number {
    return this._tableInsertMaxSize;
  }

  /**
   * Allows multiple table styles to be selected at a time.
   *
   * [Require plugin]	table.min.js
   *
   * @param {boolean} value
   * @return {FroalaOptionsBuilder}
   */
  TableMultipleStyles(value: boolean): FroalaOptionsBuilder {
    this._tableMultipleStyles = value;
    return this;
  }
  get tableMultipleStyles(): boolean {
    return this._tableMultipleStyles;
  }

  /**
   * Enables resizing table cells.
   *
   * [Require plugin]	table.min.js
   *
   * @param {boolean} value
   * @return {FroalaOptionsBuilder}
   */
  TableResizer(value: boolean): FroalaOptionsBuilder {
    this._tableResizer = value;
    return this;
  }
  get tableResizer(): boolean {
    return this._tableResizer;
  }

  /**
   * The distance in pixels from the table cell's left or right border at which to show the resizer.
   *
   * [Require plugin]	table.min.js
   *
   * @param {number} value
   * @return {FroalaOptionsBuilder}
   */
  TableResizerOffset(value: number): FroalaOptionsBuilder {
    this._tableResizerOffset = value;
    return this;
  }
  get tableResizerOffset(): number {
    return this._tableResizerOffset;
  }

  /**
   * The minimum width in pixels of a table cell allowed while resizing. The resizer cannot be dragged over this limit.
   *
   * [Require plugin]	table.min.js
   *
   * @param {number} value
   * @return {FroalaOptionsBuilder}
   */
  TableResizingLimit(value: number): FroalaOptionsBuilder {
    this._tableResizingLimit = value;
    return this;
  }
  get tableResizingLimit(): number {
    return this._tableResizingLimit;
  }

  /**
   * Set custom styles for the selected table.
   * The classes should be defined in CSS, otherwise no changes will be visible on the table's appearance.
   *
   * [Require plugin]	table.min.js
   *
   * @param {Froala.GenericObject<string>} value
   * @return {FroalaOptionsBuilder}
   */
  TableStyles(value: Froala.GenericObject<string>): FroalaOptionsBuilder {
    this._tableStyles = value;
    return this;
  }
  get tableStyles(): Froala.GenericObject<string> {
    return this._tableStyles;
  }

  /**
   * The list of video providers allowed to be inserted as URL.
   *
   * [Require plugin]	video.min.js
   *
   * @param {string[]} values
   * @return {FroalaOptionsBuilder}
   */
  VideoAllowedProviders(values: string[]): FroalaOptionsBuilder {
    this._videoAllowedProviders = values;
    return this;
  }
  get videoAllowedProviders(): string[] {
    return this._videoAllowedProviders;
  }

  /**
   * The list of video types that are allowed to be uploaded.
   * Although this will restrict uploading other types of files, we strongly recommend you to check the file type on the server too.
   *
   * [Require plugin]	video.min.js
   *
   * @param {Froala.VideoType[]} values
   * @return {FroalaOptionsBuilder}
   */
  VideoAllowedTypes(values: Froala.VideoType[]): FroalaOptionsBuilder {
    this._videoAllowedTypes = values;
    return this;
  }
  get videoAllowedTypes(): Froala.VideoType[] {
    return this._videoAllowedTypes;
  }

  /**
   * Sets the default video alignment when it is inserted into the WYSIWYG editor.
   *
   * [Require plugin]	video.min.js
   *
   * @param {Froala.Align} value
   * @return {FroalaOptionsBuilder}
   */
  VideoDefaultAlign(value: Froala.Align): FroalaOptionsBuilder {
    this._videoDefaultAlign = value;
    return this;
  }
  get videoDefaultAlign(): Froala.Align {
    return this._videoDefaultAlign;
  }

  /**
   * Sets the default display for videos when they are inserted into the WYSIWYG editor.
   *
   * [Require plugin]	video.min.js
   *
   * @param {Froala.Display} value
   * @return {FroalaOptionsBuilder}
   */
  VideoDefaultDisplay(value: Froala.Display): FroalaOptionsBuilder {
    this._videoDefaultDisplay = value;
    return this;
  }
  get videoDefaultDisplay(): Froala.Display {
    return this._videoDefaultDisplay;
  }

  /**
   * Sets the default width of the video when it is inserted in the rich text editor.
   * Setting it to '0' will not set any width.
   *
   * [Require plugin]	video.min.js
   *
   * @param {number} value
   * @return {FroalaOptionsBuilder}
   */
  VideoDefaultWidth(value: number): FroalaOptionsBuilder {
    this._videoDefaultWidth = value;
    return this;
  }
  get videoDefaultWidth(): number {
    return this._videoDefaultWidth;
  }

  /**
   * The buttons that appear in the edit video popup, when a video is selected.
   *
   * [Require plugin]	video.min.js
   *
   * @param {string[]} values
   * @return {FroalaOptionsBuilder}
   */
  VideoEditButtons(values: string[]): FroalaOptionsBuilder {
    this._videoEditButtons = values;
    return this;
  }
  get videoEditButtons(): string[] {
    return this._videoEditButtons;
  }

  /**
   * The buttons that appear in the insert video popup, when a video is inserted into the WYSIWYG editor.
   *
   * [Require plugin]	video.min.js
   *
   * @param {string[]} values
   * @return {FroalaOptionsBuilder}
   */
  VideoInsertButtons(values: string[]): FroalaOptionsBuilder {
    this._videoInsertButtons = values;
    return this;
  }
  get videoInsertButtons(): string[] {
    return this._videoInsertButtons;
  }

  /**
   * The maximum video size allowed on upload in bytes.
   * The default value is 30MB.
   * Although this makes an additional check before uploading the video, it is highly recommended to check image size on your server too.
   *
   * [Require plugin]	video.min.js
   *
   * @param {number} value
   * @return {FroalaOptionsBuilder}
   */
  VideoMaxSize(value: number): FroalaOptionsBuilder {
    this._videoMaxSize = value;
    return this;
  }
  get videoMaxSize(): number {
    return this._videoMaxSize;
  }

  /**
   * Allows changing the position of the videos by dragging them.
   *
   * [Require plugin]	video.min.js
   *
   * @param {boolean} value
   * @return {FroalaOptionsBuilder}
   */
  VideoMove(value: boolean): FroalaOptionsBuilder {
    this._videoMove = value;
    return this;
  }
  get videoMove(): boolean {
    return this._videoMove;
  }

  /**
   * Enable or disable resizing the videos inside the editor.
   *
   * [Require plugin]	video.min.js
   *
   * @param {boolean} value
   * @return {FroalaOptionsBuilder}
   */
  VideoResize(value: boolean): FroalaOptionsBuilder {
    this._videoResize = value;
    return this;
  }
  get videoResize(): boolean {
    return this._videoResize;
  }

  /**
   * Enable or disable inserting responsive videos in the Froala Editor.
   *
   * [Require plugin]	video.min.js
   *
   * @param {boolean} value
   * @return {FroalaOptionsBuilder}
   */
  VideoResponsive(value: boolean): FroalaOptionsBuilder {
    this._videoResponsive = value;
    return this;
  }
  get videoResponsive(): boolean {
    return this._videoResponsive;
  }

  /**
   * The buttons that appear in the edit video size popup, when changing the size of a selected video.
   *
   * [Require plugin]	video.min.js
   *
   * @param {string[]} values
   * @return {FroalaOptionsBuilder}
   */
  VideoSizeButtons(values: string[]): FroalaOptionsBuilder {
    this._videoSizeButtons = values;
    return this;
  }
  get videoSizeButtons(): string[] {
    return this._videoSizeButtons;
  }

  /**
   * Enables splitting the HTML when inserting a new view.
   *
   * [Require plugin]	video.min.js
   *
   * @param {boolean} value
   * @return {FroalaOptionsBuilder}
   */
  VideoSplitHTML(value: boolean): FroalaOptionsBuilder {
    this._videoSplitHTML = value;
    return this;
  }
  get videoSplitHTML(): boolean {
    return this._videoSplitHTML;
  }

  /**
   * Allows text near a video when it is aligned to the left or to the right.
   * Disabling this option will make the 'display' button for image editor popup unavailable.
   *
   * [Require plugin]	video.min.js
   *
   * @param {boolean} value
   * @return {FroalaOptionsBuilder}
   */
  VideoTextNear(value: boolean): FroalaOptionsBuilder {
    this._videoTextNear = value;
    return this;
  }
  get videoTextNear(): boolean {
    return this._videoTextNear;
  }

  /**
   * Enable or disable video upload.
   *
   * [Require plugin]	video.min.js
   *
   * @param {boolean} value
   * @return {FroalaOptionsBuilder}
   */
  VideoUpload(value: boolean): FroalaOptionsBuilder {
    this._videoUpload = value;
    return this;
  }
  get videoUpload(): boolean {
    return this._videoUpload;
  }

  /**
   * The HTTP video upload request type.
   *
   * [Require plugin]	video.min.js
   *
   * @param {Froala.UploadMethod} value
   * @return {FroalaOptionsBuilder}
   */
  VideoUploadMethod(value: Froala.UploadMethod): FroalaOptionsBuilder {
    this._videoUploadMethod = value;
    return this;
  }
  get videoUploadMethod(): Froala.UploadMethod {
    return this._videoUploadMethod;
  }

  /**
   * Customize the name of the parameter that contains the video file in the upload request.
   *
   * [Require plugin]	video.min.js
   *
   * @param {string} value
   * @return {FroalaOptionsBuilder}
   */
  VideoUploadParam(value: string): FroalaOptionsBuilder {
    this._videoUploadParam = value;
    return this;
  }
  get videoUploadParam(): string {
    return this._videoUploadParam;
  }

  /**
   * Pass additional parameters to the upload request.
   *
   * [Require plugin]	video.min.js
   *
   * @param {object} value
   * @return {FroalaOptionsBuilder}
   */
  VideoUploadParams(value: object): FroalaOptionsBuilder {
    this._videoUploadParams = value;
    return this;
  }
  get videoUploadParams(): object {
    return this._videoUploadParams;
  }

  /**
   * Set the options for video upload to S3.
   * All the fields from the example below are required.
   * Also make sure that you have enabled CORS on Amazon. (https://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html)
   *
   * Note: 'uploadURL' property can be used instead of 'bucket' and 'region' properties to specify a custom URL from Amazon where to upload the video.
   *
   * [Require plugin]	video.min.js
   *
   * @param {object} value
   * @return {FroalaOptionsBuilder}
   */
  VideoUploadToS3(value: object): FroalaOptionsBuilder {
    this._videoUploadToS3 = value;
    return this;
  }
  get videoUploadToS3(): object {
    return this._videoUploadToS3;
  }

  /**
   * The URL where the videos uploaded by the user are saved.
   * When a video is uploaded, the editor sends the file to the server through a HTTP request.
   * The server should process the data from the 'file' parameter of the request and return a JSON object containing a 'link' field with the link to the uploaded video.
   *
   * Note 1: By default, the videos are stored on our servers, but if you want to have full control over them, you should consider implementing the upload on your server.
   * The videos stored on our servers, may be deleted at any time without any notice.
   *
   * Note 2: If the domain where the video is saved is not the same with the one where the editor is running, you may need to enable requestWithCORS option and make specific customizations on the server.
   * For more information please refer to Cross-origin resource sharing. (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
   *
   * [Require plugin]	video.min.js
   *
   * @param {string} value
   * @return {FroalaOptionsBuilder}
   */
  VideoUploadURL(value: string): FroalaOptionsBuilder {
    this._videoUploadURL = value;
    return this;
  }
  get videoUploadURL(): string {
    return this._videoUploadURL;
  }

  /**
   * The list of allowed CSS attributes to be used for tags when pasting from Word.
   *
   * @param {string[]} values
   * @return {FroalaOptionsBuilder}
   */
  WordAllowedStyleProps(values: string[]): FroalaOptionsBuilder {
    this._wordAllowedStyleProps = values;
    return this;
  }
  get wordAllowedStyleProps(): string[] {
    return this._wordAllowedStyleProps;
  }

  /**
   * Attributes that are removed when pasting something into the rich text editor from Word.
   *
   * @param {string[]} values
   * @return {FroalaOptionsBuilder}
   */
  WordDeniedAttrs(values: string[]): FroalaOptionsBuilder {
    this._wordDeniedAttrs = values;
    return this;
  }
  get wordDeniedAttrs(): string[] {
    return this._wordDeniedAttrs;
  }

  /**
   * Tags that are removed together with their content when pasting something into the rich text editor from Word.
   *
   * @param {string[]} values
   * @return {FroalaOptionsBuilder}
   */
  WordDeniedTags(values: string[]): FroalaOptionsBuilder {
    this._wordDeniedTags = values;
    return this;
  }
  get wordDeniedTags(): string[] {
    return this._wordDeniedTags;
  }

  /**
   * Show modal to choose if to keep or not styles pasted from Word. If set to 'false', the default action is to keep the formatting.
   *
   * @param {boolean} value
   * @return {FroalaOptionsBuilder}
   */
  WordPasteModal(value: boolean): FroalaOptionsBuilder {
    this._wordPasteModal = value;
    return this;
  }
  get wordPasteModal(): boolean {
    return this._wordPasteModal;
  }

  /**
   * Choose the default action when wordPasteModal option is enabled.
   *
   * @param {boolean} value
   * @return {FroalaOptionsBuilder}
   */
  WordPasteKeepFormatting(value: boolean): FroalaOptionsBuilder {
    this._wordPasteKeepFormatting = value;
    return this;
  }
  get wordPasteKeepFormatting(): boolean {
    return this._wordPasteKeepFormatting;
  }

  /**
   * Only used Angular
   * This option synchronizes the angular model as soon as a key is released in the editor.
   * Note that it may affect performances.
   *
   * @param {boolean} value
   * @return {FroalaOptionsBuilder}
   */
  ImmediateAngularModelUpdate(value: boolean): FroalaOptionsBuilder {
    this._immediateAngularModelUpdate = value;
    return this;
  }
  get immediateAngularModelUpdate(): boolean {
    return this._immediateAngularModelUpdate;
  }
}
