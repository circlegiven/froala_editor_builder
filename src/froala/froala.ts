import * as _ from 'lodash';
import * as $ from 'jquery';

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
    // Form
    private _formEditButtons: string[];
    private _formMultipleStyles: boolean;
    private _formStyles: object;
    private _formUpdateButtons: string[];
    // General
    private _attribution: boolean;
    private _autofocus: boolean;
    private _direction: TextDirectionType;
    private _disableRightClick: boolean;
    private _documentReady: boolean;
    private _editInPopup: boolean;
    private _editorClass: string;
    private _enter: EnterKey;
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
    private _pluginsEnabled: Plugin[];
    private _requestHeaders: object;
    private _requestWithCredentials: boolean;
    private _requestWithCORS: boolean;
    private _scrollableContainer: string;
    private _shortcutsEnabled: string[];
    private _shortcutsHint: boolean;
    private _spellcheck: boolean;
    private _tabIndex: number;
    private _tabSpaces: number;
    private _theme: Theme;
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

    /**
     * Buttons for form edit popup.
     *
     * Require plugin: 	form.min.js
     * @param {string[]} values
     * @return {OptionsBuilder}
     */
    FormEditButtons(values: string[]): OptionsBuilder {
      this._formEditButtons = values;
      return this;
    }
    get formEditButtons(): string[] {
      return this._formEditButtons;
    }

    /**
     * To enable applying multiple css on form elements.
     *
     * Require plugin: 	form.min.js
     * @param {boolean} value
     * @return {OptionsBuilder}
     */
    FormMultipleStyles(value: boolean): OptionsBuilder {
      this._formMultipleStyles = value;
      return this;
    }
    get formMultipleStyles(): boolean {
      return this._formMultipleStyles;
    }

    /**
     * Options for applying styles on form.
     *
     * Require plugin: 	form.min.js
     * @param {object} value
     * @return {OptionsBuilder}
     */
    FormStyles(value: object): OptionsBuilder {
      this._formStyles = value;
      return this;
    }
    get formStyles(): object {
      return this._formStyles;
    }

    /**
     * Buttons for form popup.
     *
     * Require plugin: 	form.min.js
     * @param {string[]} values
     * @return {OptionsBuilder}
     */
    FormUpdateButtons(values: string[]): OptionsBuilder {
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
     * @return {OptionsBuilder}
     */
    Attribution(value: boolean): OptionsBuilder {
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
     * @return {OptionsBuilder}
     */
    Autofocus(value: boolean): OptionsBuilder {
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
     * @param {TextDirectionType} value
     * @return {OptionsBuilder}
     */
    Direction(value: TextDirectionType): OptionsBuilder {
      this._direction = value;
      return this;
    }
    get direction(): TextDirectionType {
      return this._direction;
    }

    /**
     * Disables the default browser context menu.
     * It's recommended to be used if toolbarVisibleWithoutSelection option is enabled.
     *
     * @param {boolean} value
     * @return {OptionsBuilder}
     */
    DisableRightClick(value: boolean): OptionsBuilder {
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
     * @return {OptionsBuilder}
     */
    DocumentReady(value: boolean): OptionsBuilder {
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
     * @return {OptionsBuilder}
     */
    EditInPopup(value: boolean): OptionsBuilder {
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
     * @return {OptionsBuilder}
     */
    EditorClass(value: string): OptionsBuilder {
      this._editorClass = value;
      return this;
    }
    get editorClass(): string {
      return this._editorClass;
    }

    /**
     * Set the default tag to be used when ENTER key is hit.
     *
     * @param {EnterKey} value
     * @return {OptionsBuilder}
     */
    Enter(value: EnterKey): OptionsBuilder {
      this._enter = value;
      return this;
    }
    get enter(): EnterKey {
      return this._enter;
    }

    /**
     * Allows the usage of HTML, HEAD, BODY tags and DOCTYPE declaration.
     * Note: Enabling this option will automatically enables the iframe option.
     *
     * @param {boolean} value
     * @return {OptionsBuilder}
     */
    FullPage(value: boolean): OptionsBuilder {
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
     * @return {OptionsBuilder}
     */
    Height(value: number): OptionsBuilder {
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
     * @return {OptionsBuilder}
     */
    HeightMax(value: number): OptionsBuilder {
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
     * @return {OptionsBuilder}
     */
    HeightMin(value: number): OptionsBuilder {
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
     * @return {OptionsBuilder}
     */
    HtmlAllowComments(value: boolean): OptionsBuilder {
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
     * @return {OptionsBuilder}
     */
    HtmlAllowedAttrs(values: string[]): OptionsBuilder {
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
     * @return {OptionsBuilder}
     */
    HtmlAllowedEmptyTags(values: string[]): OptionsBuilder {
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
     * @return {OptionsBuilder}
     */
    HtmlAllowedStyleProps(values: string[]): OptionsBuilder {
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
     * @return {OptionsBuilder}
     */
    HtmlAllowedTags(values: string[]): OptionsBuilder {
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
     * @return {OptionsBuilder}
     */
    HtmlDoNotWrapTags(values: string[]): OptionsBuilder {
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
     * @return {OptionsBuilder}
     */
    HtmlExecuteScripts(value: boolean): OptionsBuilder {
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
     * @return {OptionsBuilder}
     */
    HtmlIgnoreCSSProperties(values: string[]): OptionsBuilder {
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
     * @return {OptionsBuilder}
     */
    HtmlRemoveTags(values: string[]): OptionsBuilder {
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
     * @return {OptionsBuilder}
     */
    HtmlSimpleAmpersand(value: boolean): OptionsBuilder {
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
     * @return {OptionsBuilder}
     */
    HtmlUntouched(value: boolean): OptionsBuilder {
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
     * @return {OptionsBuilder}
     */
    IconsTemplate(value: string): OptionsBuilder {
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
     * @return {OptionsBuilder}
     */
    Iframe(value: boolean): OptionsBuilder {
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
     * @return {OptionsBuilder}
     */
    IframeDefaultStyle(value: string): OptionsBuilder {
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
     * @return {OptionsBuilder}
     */
    IframeStyle(value: string): OptionsBuilder {
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
     * @return {OptionsBuilder}
     */
    IframeStyleFiles(values: string[]): OptionsBuilder {
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
     * @return {OptionsBuilder}
     */
    IndentMargin(value: number): OptionsBuilder {
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
     * @return {OptionsBuilder}
     */
    InitOnClick(value: boolean): OptionsBuilder {
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
     * @return {OptionsBuilder}
     */
    KeepFormatOnDelete(value: boolean): OptionsBuilder {
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
     * @return {OptionsBuilder}
     */
    MultiLine(value: boolean): OptionsBuilder {
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
     * @return {OptionsBuilder}
     */
    PasteAllowedStyleProps(values: string[]): OptionsBuilder {
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
     * @return {OptionsBuilder}
     */
    PasteAllowLocalImages(value: boolean): OptionsBuilder {
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
     * @return {OptionsBuilder}
     */
    PasteDeniedAttrs(values: string[]): OptionsBuilder {
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
     * @return {OptionsBuilder}
     */
    PasteDeniedTags(values: string[]): OptionsBuilder {
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
     * @return {OptionsBuilder}
     */
    PastePlain(value: boolean): OptionsBuilder {
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
     * @return {OptionsBuilder}
     */
    PlaceholderText(value: string): OptionsBuilder {
      this._placeholderText = value;
      return this;
    }
    get placeholderText(): string {
      return this._placeholderText;
    }

    /**
     * The plugins that should be enabled in the current editor instance.
     * By default, all plugins are enabled.
     * Note: Each plugin requires you to include the corresponding JS and CSS files. Here is the complete list of plugins and the files required by them.
     * https://www.froala.com/wysiwyg-editor/docs/plugins
     *
     * @param {Plugin[]} values
     * @return {OptionsBuilder}
     */
    PluginsEnabled(values: Plugin[]): OptionsBuilder {
      this._pluginsEnabled = values;
      return this;
    }
    get pluginsEnabled(): Plugin[] {
      return this._pluginsEnabled;
    }

    /**
     * An Object with additional header key/value pairs to send along with requests using the XMLHttpRequest transport.
     *
     * @param {object} value
     * @return {OptionsBuilder}
     */
    RequestHeaders(value: object): OptionsBuilder {
      this._requestHeaders = value;
      return this;
    }
    get requestHeaders(): object {
      return this._requestHeaders;
    }

    /**
     * A that indicates whether or not cross-site Access-Control requests should be made using credentials such as cookies, authorization headers or TLS client certificates.
     * For more information refer to https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/withCredentials
     *
     * @param {boolean} value
     * @return {OptionsBuilder}
     */
    RequestWithCredentials(value: boolean): OptionsBuilder {
      this._requestWithCredentials = value;
      return this;
    }
    get requestWithCredentials(): boolean {
      return this._requestWithCredentials;
    }

    /**
     * Make AJAX requests using CORS.
     * For more information refer to https://en.wikipedia.org/wiki/Cross-origin_resource_sharing
     *
     * @param {boolean} value
     * @return {OptionsBuilder}
     */
    RequestWithCORS(value: boolean): OptionsBuilder {
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
     * @return {OptionsBuilder}
     */
    ScrollableContainer(value: string): OptionsBuilder {
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
     * @return {OptionsBuilder}
     */
    ShortcutsEnabled(values: string[]): OptionsBuilder {
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
     * @return {OptionsBuilder}
     */
    ShortcutsHint(value: boolean): OptionsBuilder {
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
     * @return {OptionsBuilder}
     */
    Spellcheck(value: boolean): OptionsBuilder {
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
     * @return {OptionsBuilder}
     */
    TabIndex(value: number): OptionsBuilder {
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
     * @return {OptionsBuilder}
     */
    TabSpaces(value: number): OptionsBuilder {
      this._tabSpaces = value;
      return this;
    }
    get tabSpaces(): number {
      return this._tabSpaces;
    }

    /**
     * Specify the theme name to use in the editor.
     * The theme should be included as CSS.
     * For more details please read the https://www.froala.com/wysiwyg-editor/examples/color-themes.
     *
     * @param {Theme} value
     * @return {OptionsBuilder}
     */
    Theme(value: Theme): OptionsBuilder {
      this._theme = value;
      return this;
    }
    get theme(): Theme {
      return this._theme;
    }

    /**
     * Enable or disable positioning the toolbar at the bottom of the editor.
     * This option is not available on mobile devices.
     *
     * @param {boolean} value
     * @return {OptionsBuilder}
     */
    ToolbarBottom(value: boolean): OptionsBuilder {
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
     * @return {OptionsBuilder}
     */
    ToolbarButtons(values: string[] | object): OptionsBuilder {
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
     * @return {OptionsBuilder}
     */
    ToolbarButtonsMD(values: string[] | object): OptionsBuilder {
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
     * @return {OptionsBuilder}
     */
    ToolbarButtonsSM(values: string[] | object): OptionsBuilder {
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
     * @return {OptionsBuilder}
     */
    ToolbarButtonsXS(values: string[] | object): OptionsBuilder {
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
     * @return {OptionsBuilder}
     */
    ToolbarContainer(value: boolean): OptionsBuilder {
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
     * @return {OptionsBuilder}
     */
    ToolbarInline(value: boolean): OptionsBuilder {
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
     * @return {OptionsBuilder}
     */
    ToolbarSticky(value: boolean): OptionsBuilder {
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
     * @return {OptionsBuilder}
     */
    ToolbarStickyOffset(value: number): OptionsBuilder {
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
     * @return {OptionsBuilder}
     */
    ToolbarVisibleWithoutSelection(value: boolean): OptionsBuilder {
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
     * @return {OptionsBuilder}
     */
    Tooltips(value: boolean): OptionsBuilder {
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
     * @return {OptionsBuilder}
     */
    TypingTimer(value: number): OptionsBuilder {
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
     * @return {OptionsBuilder}
     */
    UseClasses(value: boolean): OptionsBuilder {
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
     * @return {OptionsBuilder}
     */
    Width(value: string): OptionsBuilder {
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
     * @return {OptionsBuilder}
     */
    ZIndex(value: number): OptionsBuilder {
      this._zIndex = value;
      return this;
    }
    get zIndex(): number {
      return this._zIndex;
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
    // General
    attribution: boolean;
    autofocus: boolean;
    direction: TextDirectionType;
    disableRightClick: boolean;
    documentReady: boolean;
    editInPopup: boolean;
    editorClass: string;
    enter: EnterKey;
    fullPage: boolean;
    height: number;
    heightMax: number;
    heightMin: number;
    htmlAllowComments: boolean;
    htmlAllowedAttrs: string[];
    htmlAllowedEmptyTags: string[];
    htmlAllowedStyleProps: string[];
    htmlAllowedTags: string[];
    htmlDoNotWrapTags: string[];
    htmlExecuteScripts: boolean;
    htmlIgnoreCSSProperties: string[];
    htmlRemoveTags: string[];
    htmlSimpleAmpersand: boolean;
    htmlUntouched: boolean;
    iconsTemplate: string;
    iframe: boolean;
    iframeDefaultStyle: string;
    iframeStyle: string;
    iframeStyleFiles: string[];
    indentMargin: number;
    initOnClick: boolean;
    keepFormatOnDelete: boolean;
    multiLine: boolean;
    pasteAllowedStyleProps: string[];
    pasteAllowLocalImages: boolean;
    pasteDeniedAttrs: string[];
    pasteDeniedTags: string[];
    pastePlain: boolean;
    placeholderText: string;
    pluginsEnabled: Plugin[];
    requestHeaders: object;
    requestWithCredentials: boolean;
    requestWithCORS: boolean;
    scrollableContainer: string;
    shortcutsEnabled: string[];
    shortcutsHint: boolean;
    spellcheck: boolean;
    tabIndex: number;
    tabSpaces: number;
    theme: Theme;
    toolbarBottom: boolean;
    toolbarButtons: string[] | object;
    toolbarButtonsMD: string[] | object;
    toolbarButtonsSM: string[] | object;
    toolbarButtonsXS: string[] | object;
    toolbarContainer: boolean;
    toolbarInline: boolean;
    toolbarSticky: boolean;
    toolbarStickyOffset: number;
    toolbarVisibleWithoutSelection: boolean;
    tooltips: boolean;
    typingTimer: number;
    useClasses: boolean;
    width: string;
    zIndex: number;

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

      if (!_.isNil(builder.attribution)) {
        this.attribution = builder.attribution;
      }
    }
  }

  export enum TextDirectionType {
    AUTO = 'auto',
    LTR = 'ltr',
    RTL = 'rtl',
  }

  export enum Theme {
    DARK = 'dark',
    GRAY = 'gray',
    ROYAL = 'royal',
  }

  export enum EnterKey {
    // ENTER_P = $.FroalaEditor.ENTER_P,
    // ENTER_DIV = $.FroalaEditor.ENTER_DIV,
    // ENTER_BR = $.FroalaEditor.ENTER_BR,
  }

  export enum Plugin {
    ALIGN = 'align',
    CHAR_COUNTER = 'charCounter',
    CODE_BEAUTIFIER = 'codeBeautifier',
    CODE_VIEW = 'codeView',
    COLORS = 'colors',
    DRAGGABLE = 'draggable',
    EMBEDLY = 'embedly',
    EMOTICONS = 'emoticons',
    ENTITIES = 'entities',
    FILE = 'file',
    FONT_AWESOME = 'fontAwesome',
    FONT_FAMILY = 'fontFamily',
    FONT_SIZE = 'fontSize',
    FULL_SCREEN = 'fullscreen',
    IMAGE = 'image',
    IMAGE_TUI = 'imageTUI',
    IMAGE_MANAGER = 'imageManager',
    INLINE_STYLE = 'inlineStyle',
    INLINE_CLASS = 'inlineClass',
    LINE_BREAKER = 'lineBreaker',
    LINE_HEIGHT = 'lineHeight',
    LINK = 'link',
    LISTS = 'lists',
    PARAGRAPH_FORMAT = 'paragraphFormat',
    PARAGRAPH_STYLE = 'paragraphStyle',
    QUICK_INSERT = 'quickInsert',
    QUOTE = 'quote',
    SAVE = 'save',
    TABLE = 'table',
    URL = 'url',
    VIDEO = 'video',
    WORD_PASTE = 'wordPaste',
  }
}
