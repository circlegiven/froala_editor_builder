import {Froala} from "./froala";

export class FroalaOptionsBuilder {
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
  private _fileUploadMethod: Froala.HttpMethod;
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
  // Form
  private _formEditButtons: string[];
  private _formMultipleStyles: boolean;
  private _formStyles: object;
  private _formUpdateButtons: string[];
  // General
  private _attribution: boolean;
  private _autofocus: boolean;
  private _direction: Froala.TextDirection;
  private _disableRightClick: boolean;
  private _documentReady: boolean;
  private _editInPopup: boolean;
  private _editorClass: string;
  private _enter: Froala.EnterKey;
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
  private _requestHeaders: object;
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
  private _toolbarButtons: string[] | object;
  private _toolbarButtonsMD: string[] | object;
  private _toolbarButtonsSM: string[] | object;
  private _toolbarButtonsXS: string[] | object;
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
  private _imageDefaultAlign: Froala.ImageAlign;
  private _imageDefaultDisplay: Froala.ImageDisplay;
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
  private _imageStyles: object;
  private _imageTUIOptions: object;
  private _imageTextNear: boolean;
  private _imageUpload: boolean;
  private _imageAddNewLine: boolean;
  private _imageUploadMethod: Froala.HttpMethod;
  private _imageUploadParam: string;
  private _imageUploadParams: object;
  private _imageUploadRemoteUrls: boolean;
  private _imageUploadToS3: object;
  private _imageUploadURL: string;
  // Image Manager
  private _imageManagerDeleteMethod: Froala.HttpMethod;
  private _imageManagerDeleteParams: object;
  private _imageManagerDeleteURL: string;
  private _imageManagerLoadMethod: Froala.HttpMethod;
  private _imageManagerLoadParams: object;
  private _imageManagerLoadURL: string;
  private _imageManagerPageSize: number;
  private _imageManagerPreloader: string;
  private _imageManagerScrollOffset: number;
  private _imageManagerToggleTags: boolean;

  /**
   * You must call this method at last
   * @return {Froala.Options}
   */
  build(): Froala.Options {
    return new Froala.Options(this);
  }

  /**
   * An array of colors used in the colors popup for background.
   * Passing REMOVE as a value in the array will display the Clear Formatting button for colors.
   * [Require plugin] colors.min.js
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
   * [Require plugin] colors.min.js
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
   * [Require plugin] colors.min.js
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
   * [Require plugin] colors.min.js
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
   * Passing REMOVE as a value in the array will display the Clear Formatting button for colors.
   * [Require plugin] colors.min.js
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
   * [Require plugin] draggable.min.js
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
   * [Require plugin] embedly.min.js
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
   * [Require plugin] video.min.js
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
   * [Require plugin] embedly.min.js
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
   * [Require plugin] embedly.min.js
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
   * [Require plugin] emoticons.min.js
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
   * [Require plugin] emoticons.min.js
   * @param {object[]} values
   * @return {FroalaOptionsBuilder}
   */
  EmoticonsSet(values: object[]): FroalaOptionsBuilder {
    this._emoticonsSet = values;
    return this;
  }
  get emoticonsSet(): object[] {
    return this._emoticonsSet;
  }

  /**
   * Use EmojiOne svg images instead of Unicode text.
   * [Require plugin] emoticons.min.js
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
   * [Require plugin] emoticons.min.js
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
   * [Require plugin] entities.min.js
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
   * [Require plugin] file.min.js
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
   * [Require plugin] file.min.js
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
   * [Require plugin] file.min.js
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
   * [Require plugin] file.min.js
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
   * [Require plugin] file.min.js
   * @param {Froala.HttpMethod} value
   * @return {FroalaOptionsBuilder}
   */
  FileUploadMethod(value: Froala.HttpMethod): FroalaOptionsBuilder {
    this._fileUploadMethod = value;
    return this;
  }
  get fileUploadMethod(): Froala.HttpMethod {
    return this._fileUploadMethod;
  }

  /**
   * Customize the name of the parameter that contains the file in the upload request.
   * [Require plugin] file.min.js
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
   * [Require plugin] file.min.js
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
   * Note: 'uploadURL' property can be used instead of 'bucket' and 'region' properties to specify a custom URL from Amazon where to upload the image.
   *
   * [Require plugin] file.min.js
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
   * E.g. {link: 'path/to/file.pdf'}.
   * Note 1: By default, the files are stored on our servers, but if you want to have full control over them, you should consider implementing the upload on your server. The files stored on our servers, may be deleted at any time without any notice.
   * Note 2: If the domain where the file is saved is not the same with the one where the editor is running, you may need to enable requestWithCORS option and make specific customizations on the server. For more information please refer to Cross-origin resource sharing.
   *
   * [Require plugin] file.min.js
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
   * @param {object} value
   * @return {FroalaOptionsBuilder}
   */
  FontFamily(value: object): FroalaOptionsBuilder {
    this._fontFamily = value;
    return this;
  }
  get fontFamily(): object {
    return this._fontFamily;
  }

  /**
   * The text to display when the font family is unkown or nothing is selected.
   *
   * [Require plugin] font_family.min.js
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
   * @param {object} value
   * @return {FroalaOptionsBuilder}
   */
  FormStyles(value: object): FroalaOptionsBuilder {
    this._formStyles = value;
    return this;
  }
  get formStyles(): object {
    return this._formStyles;
  }

  /**
   * Buttons for form popup.
   *
   * [Require plugin]	form.min.js
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
   * @param {Froala.EnterKey} value
   * @return {FroalaOptionsBuilder}
   */
  Enter(value: Froala.EnterKey): FroalaOptionsBuilder {
    this._enter = value;
    return this;
  }
  get enter(): Froala.EnterKey {
    return this._enter;
  }

  /**
   * Allows the usage of HTML, HEAD, BODY tags and DOCTYPE declaration.
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
   * @param {object} value
   * @return {FroalaOptionsBuilder}
   */
  RequestHeaders(value: object): FroalaOptionsBuilder {
    this._requestHeaders = value;
    return this;
  }
  get requestHeaders(): object {
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
   * @param {string[] | object} values
   * @return {FroalaOptionsBuilder}
   */
  ToolbarButtons(values: string[] | object): FroalaOptionsBuilder {
    this._toolbarButtons = values;
    return this;
  }
  get toolbarButtons(): string[] | object {
    return this._toolbarButtons;
  }

  /**
   * The list of buttons that appear in the rich text editor's toolbar on medium devices (≥ 992px).
   * By default on MD screens, the editor uses the same buttons as for toolbarButtons.
   *
   * @param {string[] | object} values
   * @return {FroalaOptionsBuilder}
   */
  ToolbarButtonsMD(values: string[] | object): FroalaOptionsBuilder {
    this._toolbarButtonsMD = values;
    return this;
  }
  get toolbarButtonsMD(): string[] | object {
    return this._toolbarButtonsMD;
  }

  /**
   * The list of buttons that appear in the rich text editor's toolbar on small devices (≥ 768px).
   *
   * @param {string[] | object} values
   * @return {FroalaOptionsBuilder}
   */
  ToolbarButtonsSM(values: string[] | object): FroalaOptionsBuilder {
    this._toolbarButtonsSM = values;
    return this;
  }
  get toolbarButtonsSM(): string[] | object {
    return this._toolbarButtonsSM;
  }

  /**
   * The list of buttons that appear in the rich text editor's toolbar on extra small devices (< 768px).
   *
   * @param {string[] | object} values
   * @return {FroalaOptionsBuilder}
   */
  ToolbarButtonsXS(values: string[] | object): FroalaOptionsBuilder {
    this._toolbarButtonsXS = values;
    return this;
  }
  get toolbarButtonsXS(): string[] | object {
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
   * [Require plugin] image.min.js
   *
   * @param {Froala.ImageAlign} value
   * @return {FroalaOptionsBuilder}
   */
  ImageDefaultAlign(value: Froala.ImageAlign): FroalaOptionsBuilder {
    this._imageDefaultAlign = value;
    return this;
  }
  get imageDefaultAlign(): Froala.ImageAlign {
    return this._imageDefaultAlign;
  }

  /**
   * Sets the default display for an image when is is inserted in the rich text.
   * [Require plugin] image.min.js
   *
   * @param {Froala.ImageDisplay} value
   * @return {FroalaOptionsBuilder}
   */
  ImageDefaultDisplay(value: Froala.ImageDisplay): FroalaOptionsBuilder {
    this._imageDefaultDisplay = value;
    return this;
  }
  get imageDefaultDisplay(): Froala.ImageDisplay {
    return this._imageDefaultDisplay;
  }

  /**
   * Sets the default width of the image when it is inserted in the rich text editor.
   * Setting it to 0 will not set any width.
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
   * [Require plugin] image.min.js
   *
   * @param {object} value
   * @return {FroalaOptionsBuilder}
   */
  ImageStyles(value: object): FroalaOptionsBuilder {
    this._imageStyles = value;
    return this;
  }
  get imageStyles(): object {
    return this._imageStyles;
  }

  /**
   * Set options for TUI editor plugin.
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
   * [Require plugin] image.min.js
   *
   * @param {Froala.HttpMethod} value
   * @return {FroalaOptionsBuilder}
   */
  ImageUploadMethod(value: Froala.HttpMethod): FroalaOptionsBuilder {
    this._imageUploadMethod = value;
    return this;
  }
  get imageUploadMethod(): Froala.HttpMethod {
    return this._imageUploadMethod;
  }

  /**
   * Customize the name of the parameter that contains the image file in the upload request.
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
   * Note: 'uploadURL' property can be used instead of bucket and region properties to specify a custom URL from Amazon where to upload the image.
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
   * [Require plugin] image_manager.min.js
   *
   * @param {Froala.HttpMethod} value
   * @return {FroalaOptionsBuilder}
   */
  ImageManagerDeleteMethod(value: Froala.HttpMethod): FroalaOptionsBuilder {
    this._imageManagerDeleteMethod = value;
    return this;
  }
  get imageManagerDeleteMethod(): Froala.HttpMethod {
    return this._imageManagerDeleteMethod;
  }

  /**
   * Additional parameters passed to the image manager image delete request.
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
   * [Require plugin] image_manager.min.js
   *
   * @param {Froala.HttpMethod} value
   * @return {FroalaOptionsBuilder}
   */
  ImageManagerLoadMethod(value: Froala.HttpMethod): FroalaOptionsBuilder {
    this._imageManagerDeleteURL = value;
    return this;
  }
  get imageManagerLoadMethod(): Froala.HttpMethod {
    return this._imageManagerLoadMethod;
  }

  /**
   * Additional parameters passed to the load images request from the image manager.
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
}
