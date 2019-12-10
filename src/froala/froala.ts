import * as _ from 'lodash';
import {FroalaOptionsBuilder} from "./froala-options-builder";
import * as $ from 'JQuery';
import FroalaEditor from 'froala-editor';

export namespace Froala {
  export type GenericObject<T> = { [key: string]: T };
  export type UploadMethod = 'POST' | 'PUT';
  export type DeleteMethod = 'POST' | 'DELETE';
  export type GetMethod = 'GET' | 'POST';
  export enum TextDirection {
    AUTO = 'auto',
    LTR = 'ltr',
    RTL = 'rtl',
  }
  export enum Theme {
    DARK = 'dark',
    GRAY = 'gray',
    ROYAL = 'royal',
  }
  export enum Align {
    LEFT = 'left',
    CENTER = 'center',
    RIGHT = 'right',
  }
  export enum Display {
    INLINE = 'inline',
    BLOCK = 'block'
  }
  export enum ImageType {
    JPEG = 'jpeg',
    JPG = 'jpg',
    PNG = 'png',
    GIF = 'gif',
    WEBP = 'webp'
  }
  export enum VideoType {
    MP4 = 'mp4',
    WEBM = 'webm',
    OGG = 'ogg',
  }
  export enum Enter {
    ENTER_DIV = FroalaEditor.ENTER_DIV,
    ENTER_P = FroalaEditor.ENTER_P,
    ENTER_BR = FroalaEditor.ENTER_BR,
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
  export enum Language {
    AR = 'ar',
    BS = 'bs',
    CS = 'cs',
    DA = 'da',
    DE = 'de',
    EL = 'el',
    EN_CA = 'en_ca',
    EN_GB = 'en_gb',
    ES = 'es',
    ET = 'et',
    FA = 'fa',
    FI = 'fi',
    HE = 'he',
    HR = 'hr',
    HU = 'hu',
    ID = 'id',
    IT = 'it',
    JA = 'ja',
    KO = 'ko',
    KU = 'ku',
    ME = 'me',
    NB = 'nb',
    NL = 'nl',
    PL = 'pl',
    PT_BR = 'pt_br',
    PT_PT = 'pt_pt',
    RO = 'ro',
    RU = 'ru',
    SK = 'sk',
    SR = 'sr',
    SV = 'sv',
    TH = 'th',
    TR = 'tr',
    UK = 'uk',
    VI = 'vi',
    ZH_CN = 'zh_cn',
    ZH_TW = 'zh_tw',
  }
  export interface ToolbarButtons {
    [key: string]: {
      buttons: string[];
      align?: string;
      buttonsVisible?: number;
    };
  }
  export interface SpecialCharacterSet {
    title: string;
    list: {
      char: string;
      desc: string;
    }[];
  }
  export interface EmoticonButton {
    code: string;
    desc: string;
  }
  export interface Error {
    code: number;
    message: string;
  }
  export interface Events {
    // Triggered when the buttons should be refreshed.
    // Note: Returning 'false' in the handler assigned to the event will cancel the current action.
    'buttons.refresh': () => void;
    // Triggered when the maxCharNumber was exceeded.
    'charCounter.exceeded': () => void;
    // Triggered when the charCounter should update.
    'charCounter.update': () => void;
    // Triggered when the code view is changed.
    'codeView.update': () => void;
    // This event is a generic event that is triggered after every command executed in the editor.
    'commands.after': (command, param1, param2) => void;
    // This event is a generic event that is triggered before every command executed in the editor.
    // Note: Returning 'false' in the handler assigned to the event will cancel the current action.
    'commands.before': (command, param1, param2) => void;
    // This event is a generic event that is triggered after every command clicked in the editor.
    'commands.mousedown': (button) => void;
    // This event is a generic event that is triggered after command redo.
    'commands.redo': () => void;
    // This event is a generic event that is triggered after command undo.
    'commands.undo': () => void;
    // Triggered after the editor is enabled for editing.
    'edit.on': () => void;
    // Triggered after the editor is disabled for editing.
    'edit.off': () => void;
    // Triggered after the any element is dropped in editor.
    'element.dropped': (element) => void;
    // Triggered before the embedly embeded is removed from editor.
    'embedly.beforeRemove': (embeded) => void;
    // Triggered before uploading a file to the server.
    // Note: Returning 'false' in the handler assigned to the event will cancel the current action.
    'file.beforeUpload': (files) => void;
    // Triggered after error is occured in uploading a file to the server.
    // Note: Returning 'false' in the handler assigned to the event will cancel the current action.
    'file.error': (error, response) => void;
    // Triggered after the request to upload a file has been completed successfully.
    'file.inserted': ($file, response) => void;
    // Triggered after removing a file link.
    // Note: Returning 'false' in the handler assigned to the event will cancel the current action.
    'file.unlink': (link) => void;
    // Triggered after the file was uploaded.
    // Note: Returning 'false' in the handler assigned to the event will cancel the current action.
    'file.uploaded': (response) => void;
    // Triggered after the file was uploaded to S3.
    'file.uploadedToS3': (link, key, response) => void;
    // Triggered after the Froala Rich Text Editor looses "focus".
    blur: () => void;
    // Triggered by the click event of the editable area.
    click: (clickEvent: JQuery.Event) => void;
    // Triggered when the content from the Froala Rich Text Editor has changed.
    contentChanged: () => void;
    // Triggered when the destroy method was called.
    destroy: () => void;
    // Triggered by the drop event of the editable area.
    // Instead of assigning the event this way, it is better to assign it like described in the dropped event example.
    drop: (dropEvent) => void;
    // Triggered after the Froala Rich Text Editor gets focused.
    focus: () => void;
    // Triggered when the Froala Rich Text Editor has finished to initialize.
    initialized: () => void;
    // Triggered when the Froala Rich Text Editor has finished to do basic initialization for initOnClick option.
    initializationDelayed: () => void;
    // Triggered by the input event of the editable area.
    input: (inputEvent: JQuery.Event) => void;
    // Triggered by the keydown event of the editable area.
    keydown: (keydownEvent: JQuery.Event) => void;
    // Triggered by the keypress event of the editable area.
    keypress: (keypressEvent: JQuery.Event) => void;
    // Triggered by the keyup event of the editable area.
    keyup: (keyupEvent: JQuery.Event) => void;
    // Triggered by the mousedown event of the editable area.
    mousedown: (mousedownEvent: JQuery.Event) => void;
    // Triggered by the mouseup event of the editable area.
    mouseup: (mouseupEvent: JQuery.Event) => void;
    // Triggered before the command is executed via shortcut.
    shortcut: (event: Event, command: string, shortcutValue: any) => void;
    // Triggered by the touchstart event of the editable area.
    touchstart: (touchstartEvent: JQuery.Event) => void;
    // Triggered by the touchend event of the editable area.
    touchend: (touchendEvent: JQuery.Event) => void;
    // Triggered after the HTML was served to the html.get method.
    'html.afterGet': () => void;
    // Triggered before the HTML was served to the html.get method.
    'html.beforeGet': () => void;
    // Triggered before the HTML is getting cleaned.
    'html.processGet': (element) => void;
    // Triggered when the HTML of the editor is saved or synced.
    // If a string is returned, then the new string will be used.
    'html.get': (html) => void;
    // Triggered after the HTML was set into the editor.
    'html.set': () => void;
    // Triggered before uploading a pasted image from clipboard to the server.
    // Note: Returning 'false' in the handler assigned to the event will cancel the current action.
    'image.beforePasteUpload': (image) => void;
    // Triggered after user confirms to remove the image from the Froala Rich Text Editor, but before actually removing it.
    // Note: The image is removed only from the editable box and no delete request is being made the server.
    // Note: Returning 'false' in the handler assigned to the event will cancel the current action.
    'image.beforeRemove': ($img) => void;
    // Triggered before uploading an image to the server.
    // Note: Returning 'false' in the handler assigned to the event will cancel the current action.
    'image.beforeUpload': (images) => void;
    // Triggered before uploading an image to the server.
    // Note: Returning 'false' in the handler assigned to the event will cancel the current action.
    'image.hideResizer': (images) => void;
    // Triggered by an error occurred while trying to load the image. (https://www.froala.com/wysiwyg-editor/docs/events#image.error)
    'image.error': (error: Error, response) => void;
    // Triggered after image was inserted in the Froala Rich Text Editor.
    'image.inserted': ($img, response) => void;
    // Triggered when an image has finished to load successfully.
    'image.loaded': ($img) => void;
    // Triggered after image is removed from the Froala Rich Text Editor.
    // Note: The image is removed only from the editable box and no delete request is being made the server.
    'image.removed': ($img) => void;
    // Triggered after image was replaced with a new one.
    'image.replaced': ($img, response) => void;
    // Triggered while doing image resize.
    'image.resize': ($img) => void;
    // Triggered when image resize has finished.
    'image.resizeEnd': ($img) => void;
    // Triggered after the image was uploaded.
    // Note: Returning 'false' in the handler assigned to the event will cancel the current action.
    'image.uploaded': (response) => void;
    // Triggered after image was uploaded to S3.
    'image.uploadedToS3': (link, key, response) => void;
    // Triggered before deleting an image from the image manager.
    'imageManager.beforeDeleteImage': ($img) => void;
    // Triggered by an error occurred while trying to load images inside the image manager. (https://www.froala.com/wysiwyg-editor/docs/events#imageManager.error)
    'imageManager.error': (error: Error, response) => void;
    // Triggered after the image was deleted from image manager.
    'imageManager.imageDeleted': (data) => void;
    // Triggered after an image was loaded in image manager.
    'imageManager.imageLoaded': ($img) => void;
    // Triggered after the request to load images in the media manager has been completed successfully.
    'imageManager.imagesLoaded': (data) => void;
    // Triggered when a bad link is typed for insertion into the Froala Rich Text Editor.
    'link.bad': (original_href) => void;
    // Triggered before inserting a link inside the editor
    // Note: Returning 'false' in the handler assigned to the event will cancel the current action.
    'link.beforeInsert': (link, text, attrs) => void;
    // Triggered before removing a link inside the editor
    // Note: Returning 'false' in the handler assigned to the event will cancel the current action.
    'link.beforeRemove': (link, text, attrs) => void;
    // Triggered after pasting something into the Froala Rich Text Editor.
    'paste.after': () => void;
    // Triggered after the content was pasted from the clipboard into the Froala Rich Text Editor and it was cleaned up.
    // If a string is returned, the new string will be used as the pasted content.
    'paste.afterCleanup': (clipboard_html) => void;
    // Triggered before pasting something into the Froala Rich Text Editor.
    // Note: Returning 'false' in the handler assigned to the event will cancel the current action.
    'paste.before': (original_event: JQuery.Event) => void;
    // Triggered after the content is pasted from the clipboard into the Froala Rich Text Editor.
    // If a string is returned the new string will be used as the pasted content.
    'paste.beforeCleanup': (clipboard_html) => void;
    // Triggered after the content is pasted from the MS Office into the Froala Rich Text Editor.
    'paste.wordPaste': (clipboard_html) => void;
    // Triggered when a popup is hidden.
    // [id] should be replaced with the id of the popup.
    'popups.hide.[id]': () => void;
    // Triggered when a popup is shown.
    // [id] should be replaced with the id of the popup.
    'popups.show.[id]': () => void;
    // Triggered before the position of toolbar is refreshed.
    'position.refresh': () => void;
    // Triggered after the save request.
    'save.after': (data) => void;
    // Triggered before doing the save request.
    // If a string is returned, the new string will be used as the saved content.
    // Note: Returning 'false' in the handler assigned to the event will cancel the current action.
    'save.before': (html) => void;
    // Triggered when an error occurs during save request.
    'save.error': (error: Error, response) => void;
    // Triggered after getting a snapshot
    'snapshot.after': () => void;
    // Triggered before getting a snapshot.
    'snapshot.before': () => void;
    // Triggered after the table was inserted.
    'table.inserted': (table) => void;
    // Triggered after the table was resized.
    'table.resized': (table) => void;
    // Triggered before hiding the toolbar on pressing esc key.
    // Note: Returning 'false' in the handler assigned to the event will cancel the current action.
    'toolbar.esc': () => void;
    // Triggered when doing focus on editor.
    // Note: Returning 'false' in the handler assigned to the event will cancel the current action.
    'toolbar.focusEditor': () => void;
    // Triggered when hiding the editor toolbar.
    // Note: Returning 'false' in the handler assigned to the event will cancel the current action.
    'toolbar.hide': () => void;
    // Triggered when showing the editor toolbar.
    // Note: Returning 'false' in the handler assigned to the event will cancel the current action.
    'toolbar.show': () => void;
    // Triggered by an error occurred while trying to insert a video by embedded code.
    'video.codeError': (code) => void;
    // Triggered after video was inserted.
    'video.inserted': ($video) => void;
    // Triggered after video was replaced.
    'video.replaced': ($video) => void;
    // Triggered by an error occurred while trying to insert a video by URL.
    'video.linkError': (link) => void;
    // Triggered after video was removed.
    'video.removed': ($video) => void;
    // Triggered after video was loaded.
    'video.loaded': ($video) => void;
    // Triggered after video was uploaded.
    'video.uploaded': (response) => void;
    // Triggered after video was uploaded to S3.
    'video.uploadedToS3': (link, key, response) => void;
    // Triggered before video is uploaded.
    // Note: Returning 'false' in the handler assigned to the event will cancel the current action.
    'video.beforeUpload': ($video) => void;
    // Triggered before video is removed.
    // Note: Returning 'false' in the handler assigned to the event will cancel the current action.
    'video.beforeRemove': ($video) => void;
    // Triggered after hiding the edit toolbar.
    // Note: Returning 'false' in the handler assigned to the event will cancel the current action.
    'video.hideResizer': () => void;
    // This event is a generic event that is triggered after every command inside the Quick Insert tool is executed.
    // The command information are passed through the 'command' parameter.
    'quickInsert.commands.after': (command) => void;
    // This event is a generic event that is triggered before every command inside the Quick Insert tool is executed.
    // The command information are passed through the 'command' parameter.
    // Note: Returning 'false' in the handler assigned to the event will cancel the current action.
    'quickInsert.commands.before': (command) => void;
    // Triggered after auto-linking an url while typing.
    'url.linked': (link) => void;
    // Triggered after cut command is executed.
    'window.cut': () => void;
    // Triggered after copy command is executed.
    'window.copy': () => void;
  }
  export class Options {
    // License key
    key: string;
    // Aviary Editor
    aviaryKey: boolean;
    aviaryOptions: GenericObject<any>;
    // Char Counter
    charCounterCount: boolean;
    charCounterMax: number;
    // Code Beautifier
    codeBeautifierOptions: GenericObject<any>;
    // Code View
    codeMirror: object;
    codeMirrorOptions: GenericObject<any>;
    codeViewKeepActiveButtons: string[];
    // Colors
    colorsBackground: string[];
    colorsButtons: string[];
    colorsHEXInput: boolean;
    colorsStep: number;
    colorsText: string[];
    // Draggable
    dragInline: boolean;
    // Embedly
    embedlyKey: string;
    embedlyEditButtons: string[];
    embedlyInsertButtons: string[];
    embedlyScriptPath: string;
    // Emoticons
    emoticonsButtons: string[];
    emoticonsUseImage: boolean;
    emoticonsSet: EmoticonButton[];
    emoticonsStep: number;
    // Entities
    entities: string;
    // File
    fileAllowedTypes: string[];
    fileInsertButtons: string[];
    fileMaxSize: number;
    fileUpload: boolean;
    fileUploadMethod: UploadMethod;
    fileUploadParam: string;
    fileUploadParams: object;
    fileUploadToS3: object;
    fileUploadURL: string;
    fileUseSelectedText: boolean;
    // Font Family
    fontFamily: GenericObject<string>;
    fontFamilyDefaultSelection: string;
    fontFamilySelection: boolean;
    // Font Size
    fontSizeSelection: boolean;
    fontSize: string[];
    fontSizeDefaultSelection: string;
    fontSizeUnit: string;
    // Form
    formEditButtons: string[];
    formMultipleStyles: boolean;
    formStyles: GenericObject<string>;
    formUpdateButtons: string[];
    // General
    attribution: boolean;
    autofocus: boolean;
    direction: TextDirection;
    disableRightClick: boolean;
    documentReady: boolean;
    editInPopup: boolean;
    editorClass: string;
    enter: Enter;
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
    requestHeaders: GenericObject<string>;
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
    toolbarButtons: Partial<ToolbarButtons>;
    toolbarButtonsMD: Partial<ToolbarButtons>;
    toolbarButtonsSM: Partial<ToolbarButtons>;
    toolbarButtonsXS: Partial<ToolbarButtons>;
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
    // Help
    helpSets: object[];
    // Image
    imageAllowedTypes: ImageType[];
    imageAltButtons: string[];
    imageCORSProxy: string;
    imageDefaultAlign: Align;
    imageDefaultDisplay: Display;
    imageDefaultMargin: number;
    imageDefaultWidth: number;
    imageEditButtons: string[];
    imageInsertButtons: string[];
    imageMaxSize: number;
    imageMinWidth: number;
    imageMove: boolean;
    imageMultipleStyles: boolean;
    imagePaste: boolean;
    imagePasteProcess: boolean;
    imageResize: boolean;
    imageResizeWithPercent: boolean;
    imageRoundPercent: boolean;
    imageOutputSize: boolean;
    imageSizeButtons: string[];
    imageSplitHTML: boolean;
    imageStyles: GenericObject<string>;
    imageTUIOptions: object;
    imageTextNear: boolean;
    imageUpload: boolean;
    imageAddNewLine: boolean;
    imageUploadMethod: UploadMethod;
    imageUploadParam: string;
    imageUploadParams: object;
    imageUploadRemoteUrls: boolean;
    imageUploadToS3: object;
    imageUploadURL: string;
    // Image Manager
    imageManagerDeleteMethod: DeleteMethod;
    imageManagerDeleteParams: object;
    imageManagerDeleteURL: string;
    imageManagerLoadMethod: GetMethod;
    imageManagerLoadParams: object;
    imageManagerLoadURL: string;
    imageManagerPageSize: number;
    imageManagerPreloader: string;
    imageManagerScrollOffset: number;
    imageManagerToggleTags: boolean;
    // Inline Style
    inlineStyles: GenericObject<string>;
    // Inline Class
    inlineClasses: GenericObject<string>;
    // Language
    language: Language;
    // Line Breaker
    lineBreakerHorizontalOffset: number;
    lineBreakerOffset: number;
    lineBreakerTags: string[];
    // Link
    linkAlwaysBlank: boolean;
    linkAlwaysNoFollow: boolean;
    linkAttributes: GenericObject<any>;
    linkAutoPrefix: string;
    linkConvertEmailAddress: boolean;
    linkEditButtons: string[];
    linkInsertButtons: string[];
    linkList: GenericObject<string>[];
    linkMultipleStyles: boolean;
    linkNoOpener: boolean;
    linkNoReferrer: boolean;
    linkStyles: GenericObject<string>;
    linkText: boolean;
    // Paragraph Format
    paragraphDefaultSelection: string;
    paragraphFormat: GenericObject<string>;
    paragraphFormatSelection: boolean;
    paragraphMultipleStyles: boolean;
    paragraphStyles: GenericObject<string>;
    lineHeights: GenericObject<string>;
    // Lists
    listAdvancedTypes: boolean;
    // Quick Insert
    quickInsertButtons: string[];
    quickInsertEnabled: boolean;
    quickInsertTags: string[];
    // Font Awesome
    faButtons: string[];
    fontAwesomeSets: object;
    fontAwesomeTemplate: string;
    // Special Characters
    specialCharButtons: string[];
    specialCharactersSets: SpecialCharacterSet[];
    // WebSpellChecker
    events: Partial<Events>;
    // Save
    saveInterval: number;
    saveMethod: UploadMethod;
    saveParam: string;
    saveParams: object;
    saveURL: string;
    // Table
    tableCellMultipleStyles: boolean;
    tableCellStyles: GenericObject<string>;
    tableColors: string[];
    tableColorsButtons: string[];
    tableColorsStep: number;
    tableDefaultWidth: string;
    tableEditButtons: string[];
    tableInsertButtons: string[];
    tableInsertHelper: boolean;
    tableInsertHelperOffset: number;
    tableInsertMaxSize: number;
    tableMultipleStyles: boolean;
    tableResizer: boolean;
    tableResizerOffset: number;
    tableResizingLimit: number;
    tableStyles: GenericObject<string>;
    // Video
    videoAllowedProviders: string[];
    videoAllowedTypes: VideoType[];
    videoDefaultAlign: Align;
    videoDefaultDisplay: Display;
    videoDefaultWidth: number;
    videoEditButtons: string[];
    videoInsertButtons: string[];
    videoMaxSize: number;
    videoMove: boolean;
    videoResize: boolean;
    videoResponsive: boolean;
    videoSizeButtons: string[];
    videoSplitHTML: boolean;
    videoTextNear: boolean;
    videoUpload: boolean;
    videoUploadMethod: UploadMethod;
    videoUploadParam: string;
    videoUploadParams: object;
    videoUploadToS3: object;
    videoUploadURL: string;
    // Word
    wordAllowedStyleProps: string[];
    wordDeniedAttrs: string[];
    wordDeniedTags: string[];
    wordPasteModal: boolean;
    wordPasteKeepFormatting: boolean;
    // Angular
    immediateAngularModelUpdate: boolean;

    constructor(builder: FroalaOptionsBuilder) {
      if (!_.isNil(builder.key)) {
        this.key = builder.key;
      }
      if (!_.isNil(builder.aviaryKey)) {
        this.aviaryKey = builder.aviaryKey;
      }
      if (!_.isNil(builder.aviaryOptions)) {
        this.aviaryOptions = builder.aviaryOptions;
      }
      if (!_.isNil(builder.charCounterCount)) {
        this.charCounterCount = builder.charCounterCount;
      }
      if (!_.isNil(builder.charCounterMax)) {
        this.charCounterMax = builder.charCounterMax;
      }
      if (!_.isNil(builder.codeBeautifierOptions)) {
        this.codeBeautifierOptions = builder.codeBeautifierOptions;
      }
      if (!_.isNil(builder.codeMirror)) {
        this.codeMirror = builder.codeMirror;
      }
      if (!_.isNil(builder.codeMirrorOptions)) {
        this.codeMirrorOptions = builder.codeMirrorOptions;
      }
      if (!_.isNil(builder.codeViewKeepActiveButtons)) {
        this.codeViewKeepActiveButtons = builder.codeViewKeepActiveButtons;
      }
      if (!_.isNil(builder.colorsBackground)) {
        this.colorsBackground = builder.colorsBackground;
      }
      if (!_.isNil(builder.colorsButtons)) {
        this.colorsButtons = builder.colorsButtons;
      }
      if (!_.isNil(builder.colorsHEXInput)) {
        this.colorsHEXInput = builder.colorsHEXInput;
      }
      if (!_.isNil(builder.colorsStep)) {
        this.colorsStep = builder.colorsStep;
      }
      if (!_.isNil(builder.colorsText)) {
        this.colorsText = builder.colorsText;
      }
      if (!_.isNil(builder.dragInline)) {
        this.dragInline = builder.dragInline;
      }
      if (!_.isNil(builder.embedlyKey)) {
        this.embedlyKey = builder.embedlyKey;
      }
      if (!_.isNil(builder.embedlyEditButtons)) {
        this.embedlyEditButtons = builder.embedlyEditButtons;
      }
      if (!_.isNil(builder.embedlyInsertButtons)) {
        this.embedlyInsertButtons = builder.embedlyInsertButtons;
      }
      if (!_.isNil(builder.embedlyScriptPath)) {
        this.embedlyScriptPath = builder.embedlyScriptPath;
      }
      if (!_.isNil(builder.emoticonsButtons)) {
        this.emoticonsButtons = builder.emoticonsButtons;
      }
      if (!_.isNil(builder.emoticonsUseImage)) {
        this.emoticonsUseImage = builder.emoticonsUseImage;
      }
      if (!_.isNil(builder.emoticonsSet)) {
        this.emoticonsSet = builder.emoticonsSet;
      }
      if (!_.isNil(builder.emoticonsStep)) {
        this.emoticonsStep = builder.emoticonsStep;
      }
      if (!_.isNil(builder.entities)) {
        this.entities = builder.entities;
      }
      if (!_.isNil(builder.fileAllowedTypes)) {
        this.fileAllowedTypes = builder.fileAllowedTypes;
      }
      if (!_.isNil(builder.fileInsertButtons)) {
        this.fileInsertButtons = builder.fileInsertButtons;
      }
      if (!_.isNil(builder.fileMaxSize)) {
        this.fileMaxSize = builder.fileMaxSize;
      }
      if (!_.isNil(builder.fileUpload)) {
        this.fileUpload = builder.fileUpload;
      }
      if (!_.isNil(builder.fileUploadMethod)) {
        this.fileUploadMethod = builder.fileUploadMethod;
      }
      if (!_.isNil(builder.fileUploadParam)) {
        this.fileUploadParam = builder.fileUploadParam;
      }
      if (!_.isNil(builder.fileUploadParams)) {
        this.fileUploadParams = builder.fileUploadParams;
      }
      if (!_.isNil(builder.fileUploadToS3)) {
        this.fileUploadToS3 = builder.fileUploadToS3;
      }
      if (!_.isNil(builder.fileUploadURL)) {
        this.fileUploadURL = builder.fileUploadURL;
      }
      if (!_.isNil(builder.fileUseSelectedText)) {
        this.fileUseSelectedText = builder.fileUseSelectedText;
      }
      if (!_.isNil(builder.fontFamily)) {
        this.fontFamily = builder.fontFamily;
      }
      if (!_.isNil(builder.fontFamilyDefaultSelection)) {
        this.fontFamilyDefaultSelection = builder.fontFamilyDefaultSelection;
      }
      if (!_.isNil(builder.fontFamilySelection)) {
        this.fontFamilySelection = builder.fontFamilySelection;
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
      if (!_.isNil(builder.formEditButtons)) {
          this.formEditButtons = builder.formEditButtons;
      }
      if (!_.isNil(builder.formMultipleStyles)) {
          this.formMultipleStyles = builder.formMultipleStyles;
      }
      if (!_.isNil(builder.formStyles)) {
          this.formStyles = builder.formStyles;
      }
      if (!_.isNil(builder.formUpdateButtons)) {
          this.formUpdateButtons = builder.formUpdateButtons;
      }
      if (!_.isNil(builder.attribution)) {
        this.attribution = builder.attribution;
      }
      if (!_.isNil(builder.autofocus)) {
        this.autofocus = builder.autofocus;
      }
      if (!_.isNil(builder.direction)) {
        this.direction = builder.direction;
      }
      if (!_.isNil(builder.disableRightClick)) {
        this.disableRightClick = builder.disableRightClick;
      }
      if (!_.isNil(builder.documentReady)) {
        this.documentReady = builder.documentReady;
      }
      if (!_.isNil(builder.editInPopup)) {
        this.editInPopup = builder.editInPopup;
      }
      if (!_.isNil(builder.editorClass)) {
        this.editorClass = builder.editorClass;
      }
      if (!_.isNil(builder.enter)) {
        this.enter = builder.enter;
      }
      if (!_.isNil(builder.fullPage)) {
        this.fullPage = builder.fullPage;
      }
      if (!_.isNil(builder.height)) {
        this.height = builder.height;
      }
      if (!_.isNil(builder.heightMax)) {
        this.heightMax = builder.heightMax;
      }
      if (!_.isNil(builder.heightMin)) {
        this.heightMin = builder.heightMin;
      }
      if (!_.isNil(builder.htmlAllowComments)) {
        this.htmlAllowComments = builder.htmlAllowComments;
      }
      if (!_.isNil(builder.htmlAllowedAttrs)) {
        this.htmlAllowedAttrs = builder.htmlAllowedAttrs;
      }
      if (!_.isNil(builder.htmlAllowedEmptyTags)) {
        this.htmlAllowedEmptyTags = builder.htmlAllowedEmptyTags;
      }
      if (!_.isNil(builder.htmlAllowedStyleProps)) {
        this.htmlAllowedStyleProps = builder.htmlAllowedStyleProps;
      }
      if (!_.isNil(builder.htmlAllowedTags)) {
        this.htmlAllowedTags = builder.htmlAllowedTags;
      }
      if (!_.isNil(builder.htmlDoNotWrapTags)) {
        this.htmlDoNotWrapTags = builder.htmlDoNotWrapTags;
      }
      if (!_.isNil(builder.htmlExecuteScripts)) {
        this.htmlExecuteScripts = builder.htmlExecuteScripts;
      }
      if (!_.isNil(builder.htmlIgnoreCSSProperties)) {
        this.htmlIgnoreCSSProperties = builder.htmlIgnoreCSSProperties;
      }
      if (!_.isNil(builder.htmlRemoveTags)) {
        this.htmlRemoveTags = builder.htmlRemoveTags;
      }
      if (!_.isNil(builder.htmlSimpleAmpersand)) {
        this.htmlSimpleAmpersand = builder.htmlSimpleAmpersand;
      }
      if (!_.isNil(builder.htmlUntouched)) {
        this.htmlUntouched = builder.htmlUntouched;
      }
      if (!_.isNil(builder.iconsTemplate)) {
        this.iconsTemplate = builder.iconsTemplate;
      }
      if (!_.isNil(builder.iframe)) {
        this.iframe = builder.iframe;
      }
      if (!_.isNil(builder.iframeDefaultStyle)) {
        this.iframeDefaultStyle = builder.iframeDefaultStyle;
      }
      if (!_.isNil(builder.iframeStyle)) {
        this.iframeStyle = builder.iframeStyle;
      }
      if (!_.isNil(builder.iframeStyleFiles)) {
        this.iframeStyleFiles = builder.iframeStyleFiles;
      }
      if (!_.isNil(builder.indentMargin)) {
        this.indentMargin = builder.indentMargin;
      }
      if (!_.isNil(builder.initOnClick)) {
        this.initOnClick = builder.initOnClick;
      }
      if (!_.isNil(builder.keepFormatOnDelete)) {
        this.keepFormatOnDelete = builder.keepFormatOnDelete;
      }
      if (!_.isNil(builder.multiLine)) {
        this.multiLine = builder.multiLine;
      }
      if (!_.isNil(builder.pasteAllowedStyleProps)) {
        this.pasteAllowedStyleProps = builder.pasteAllowedStyleProps;
      }
      if (!_.isNil(builder.pasteAllowLocalImages)) {
        this.pasteAllowLocalImages = builder.pasteAllowLocalImages;
      }
      if (!_.isNil(builder.pasteDeniedAttrs)) {
        this.pasteDeniedAttrs = builder.pasteDeniedAttrs;
      }
      if (!_.isNil(builder.pasteDeniedTags)) {
        this.pasteDeniedTags = builder.pasteDeniedTags;
      }
      if (!_.isNil(builder.pastePlain)) {
        this.pastePlain = builder.pastePlain;
      }
      if (!_.isNil(builder.placeholderText)) {
        this.placeholderText = builder.placeholderText;
      }
      if (!_.isNil(builder.pluginsEnabled)) {
        this.pluginsEnabled = builder.pluginsEnabled;
      }
      if (!_.isNil(builder.requestHeaders)) {
        this.requestHeaders = builder.requestHeaders;
      }
      if (!_.isNil(builder.requestWithCredentials)) {
        this.requestWithCredentials = builder.requestWithCredentials;
      }
      if (!_.isNil(builder.requestWithCORS)) {
        this.requestWithCORS = builder.requestWithCORS;
      }
      if (!_.isNil(builder.scrollableContainer)) {
        this.scrollableContainer = builder.scrollableContainer;
      }
      if (!_.isNil(builder.shortcutsEnabled)) {
        this.shortcutsEnabled = builder.shortcutsEnabled;
      }
      if (!_.isNil(builder.shortcutsHint)) {
        this.shortcutsHint = builder.shortcutsHint;
      }
      if (!_.isNil(builder.spellcheck)) {
        this.spellcheck = builder.spellcheck;
      }
      if (!_.isNil(builder.tabIndex)) {
        this.tabIndex = builder.tabIndex;
      }
      if (!_.isNil(builder.tabSpaces)) {
        this.tabSpaces = builder.tabSpaces;
      }
      if (!_.isNil(builder.theme)) {
        this.theme = builder.theme;
      }
      if (!_.isNil(builder.toolbarBottom)) {
        this.toolbarBottom = builder.toolbarBottom;
      }
      if (!_.isNil(builder.toolbarButtons)) {
        this.toolbarButtons = builder.toolbarButtons;
      }
      if (!_.isNil(builder.toolbarButtonsMD)) {
        this.toolbarButtonsMD = builder.toolbarButtonsMD;
      }
      if (!_.isNil(builder.toolbarButtonsSM)) {
        this.toolbarButtonsSM = builder.toolbarButtonsSM;
      }
      if (!_.isNil(builder.toolbarButtonsXS)) {
        this.toolbarButtonsXS = builder.toolbarButtonsXS;
      }
      if (!_.isNil(builder.toolbarContainer)) {
        this.toolbarContainer = builder.toolbarContainer;
      }
      if (!_.isNil(builder.toolbarInline)) {
        this.toolbarInline = builder.toolbarInline;
      }
      if (!_.isNil(builder.toolbarSticky)) {
        this.toolbarSticky = builder.toolbarSticky;
      }
      if (!_.isNil(builder.toolbarStickyOffset)) {
        this.toolbarStickyOffset = builder.toolbarStickyOffset;
      }
      if (!_.isNil(builder.toolbarVisibleWithoutSelection)) {
        this.toolbarVisibleWithoutSelection = builder.toolbarVisibleWithoutSelection;
      }
      if (!_.isNil(builder.tooltips)) {
        this.tooltips = builder.tooltips;
      }
      if (!_.isNil(builder.typingTimer)) {
        this.typingTimer = builder.typingTimer;
      }
      if (!_.isNil(builder.useClasses)) {
        this.useClasses = builder.useClasses;
      }
      if (!_.isNil(builder.width)) {
        this.width = builder.width;
      }
      if (!_.isNil(builder.zIndex)) {
        this.zIndex = builder.zIndex;
      }

      if (!_.isNil(builder.helpSets)) {
        this.helpSets = builder.helpSets;
      }
      if (!_.isNil(builder.imageAllowedTypes)) {
        this.imageAllowedTypes = builder.imageAllowedTypes;
      }
      if (!_.isNil(builder.imageAltButtons)) {
        this.imageAltButtons = builder.imageAltButtons;
      }
      if (!_.isNil(builder.imageCORSProxy)) {
        this.imageCORSProxy = builder.imageCORSProxy;
      }
      if (!_.isNil(builder.imageDefaultAlign)) {
        this.imageDefaultAlign = builder.imageDefaultAlign;
      }
      if (!_.isNil(builder.imageDefaultDisplay)) {
        this.imageDefaultDisplay = builder.imageDefaultDisplay;
      }
      if (!_.isNil(builder.imageDefaultMargin)) {
        this.imageDefaultMargin = builder.imageDefaultMargin;
      }
      if (!_.isNil(builder.imageDefaultWidth)) {
        this.imageDefaultWidth = builder.imageDefaultWidth;
      }
      if (!_.isNil(builder.imageEditButtons)) {
        this.imageEditButtons = builder.imageEditButtons;
      }
      if (!_.isNil(builder.imageInsertButtons)) {
        this.imageInsertButtons = builder.imageInsertButtons;
      }
      if (!_.isNil(builder.imageMaxSize)) {
        this.imageMaxSize = builder.imageMaxSize;
      }
      if (!_.isNil(builder.imageMinWidth)) {
        this.imageMinWidth = builder.imageMinWidth;
      }
      if (!_.isNil(builder.imageMove)) {
        this.imageMove = builder.imageMove;
      }
      if (!_.isNil(builder.imageMultipleStyles)) {
        this.imageMultipleStyles = builder.imageMultipleStyles;
      }
      if (!_.isNil(builder.imagePaste)) {
        this.imagePaste = builder.imagePaste;
      }
      if (!_.isNil(builder.imagePasteProcess)) {
        this.imagePasteProcess = builder.imagePasteProcess;
      }
      if (!_.isNil(builder.imageResize)) {
        this.imageResize = builder.imageResize;
      }
      if (!_.isNil(builder.imageResizeWithPercent)) {
        this.imageResizeWithPercent = builder.imageResizeWithPercent;
      }
      if (!_.isNil(builder.imageRoundPercent)) {
        this.imageRoundPercent = builder.imageRoundPercent;
      }
      if (!_.isNil(builder.imageOutputSize)) {
        this.imageOutputSize = builder.imageOutputSize;
      }
      if (!_.isNil(builder.imageSizeButtons)) {
        this.imageSizeButtons = builder.imageSizeButtons;
      }
      if (!_.isNil(builder.imageSplitHTML)) {
        this.imageSplitHTML = builder.imageSplitHTML;
      }
      if (!_.isNil(builder.imageStyles)) {
        this.imageStyles = builder.imageStyles;
      }
      if (!_.isNil(builder.imageTUIOptions)) {
        this.imageTUIOptions = builder.imageTUIOptions;
      }
      if (!_.isNil(builder.imageTextNear)) {
        this.imageTextNear = builder.imageTextNear;
      }
      if (!_.isNil(builder.imageUpload)) {
        this.imageUpload = builder.imageUpload;
      }
      if (!_.isNil(builder.imageAddNewLine)) {
        this.imageAddNewLine = builder.imageAddNewLine;
      }
      if (!_.isNil(builder.imageUploadMethod)) {
        this.imageUploadMethod = builder.imageUploadMethod;
      }
      if (!_.isNil(builder.imageUploadParam)) {
        this.imageUploadParam = builder.imageUploadParam;
      }
      if (!_.isNil(builder.imageUploadParams)) {
        this.imageUploadParams = builder.imageUploadParams;
      }
      if (!_.isNil(builder.imageUploadRemoteUrls)) {
        this.imageUploadRemoteUrls = builder.imageUploadRemoteUrls;
      }
      if (!_.isNil(builder.imageUploadToS3)) {
        this.imageUploadToS3 = builder.imageUploadToS3;
      }
      if (!_.isNil(builder.imageUploadURL)) {
        this.imageUploadURL = builder.imageUploadURL;
      }
      if (!_.isNil(builder.imageManagerDeleteMethod)) {
        this.imageManagerDeleteMethod = builder.imageManagerDeleteMethod;
      }
      if (!_.isNil(builder.imageManagerDeleteParams)) {
        this.imageManagerDeleteParams = builder.imageManagerDeleteParams;
      }
      if (!_.isNil(builder.imageManagerDeleteURL)) {
        this.imageManagerDeleteURL = builder.imageManagerDeleteURL;
      }
      if (!_.isNil(builder.imageManagerLoadMethod)) {
        this.imageManagerLoadMethod = builder.imageManagerLoadMethod;
      }
      if (!_.isNil(builder.imageManagerLoadParams)) {
        this.imageManagerLoadParams = builder.imageManagerLoadParams;
      }
      if (!_.isNil(builder.imageManagerLoadURL)) {
        this.imageManagerLoadURL = builder.imageManagerLoadURL;
      }
      if (!_.isNil(builder.imageManagerPageSize)) {
        this.imageManagerPageSize = builder.imageManagerPageSize;
      }
      if (!_.isNil(builder.imageManagerPreloader)) {
        this.imageManagerPreloader = builder.imageManagerPreloader;
      }
      if (!_.isNil(builder.imageManagerScrollOffset)) {
        this.imageManagerScrollOffset = builder.imageManagerScrollOffset;
      }
      if (!_.isNil(builder.imageManagerToggleTags)) {
        this.imageManagerToggleTags = builder.imageManagerToggleTags;
      }
      if (!_.isNil(builder.inlineStyles)) {
        this.inlineStyles = builder.inlineStyles;
      }
      if (!_.isNil(builder.inlineClasses)) {
        this.inlineClasses = builder.inlineClasses;
      }
      if (!_.isNil(builder.language)) {
        this.language = builder.language;
      }
      if (!_.isNil(builder.lineBreakerHorizontalOffset)) {
        this.lineBreakerHorizontalOffset = builder.lineBreakerHorizontalOffset;
      }
      if (!_.isNil(builder.lineBreakerOffset)) {
        this.lineBreakerOffset = builder.lineBreakerOffset;
      }
      if (!_.isNil(builder.lineBreakerTags)) {
        this.lineBreakerTags = builder.lineBreakerTags;
      }
      if (!_.isNil(builder.linkAlwaysBlank)) {
        this.linkAlwaysBlank = builder.linkAlwaysBlank;
      }
      if (!_.isNil(builder.linkAlwaysNoFollow)) {
        this.linkAlwaysNoFollow = builder.linkAlwaysNoFollow;
      }
      if (!_.isNil(builder.linkAttributes)) {
        this.linkAttributes = builder.linkAttributes;
      }
      if (!_.isNil(builder.linkAutoPrefix)) {
        this.linkAutoPrefix = builder.linkAutoPrefix;
      }
      if (!_.isNil(builder.linkConvertEmailAddress)) {
        this.linkConvertEmailAddress = builder.linkConvertEmailAddress;
      }
      if (!_.isNil(builder.linkEditButtons)) {
        this.linkEditButtons = builder.linkEditButtons;
      }
      if (!_.isNil(builder.linkInsertButtons)) {
        this.linkInsertButtons = builder.linkInsertButtons;
      }
      if (!_.isNil(builder.linkList)) {
        this.linkList = builder.linkList;
      }
      if (!_.isNil(builder.linkMultipleStyles)) {
        this.linkMultipleStyles = builder.linkMultipleStyles;
      }
      if (!_.isNil(builder.linkNoOpener)) {
        this.linkNoOpener = builder.linkNoOpener;
      }
      if (!_.isNil(builder.linkNoReferrer)) {
        this.linkNoReferrer = builder.linkNoReferrer;
      }
      if (!_.isNil(builder.linkStyles)) {
        this.linkStyles = builder.linkStyles;
      }
      if (!_.isNil(builder.linkText)) {
        this.linkText = builder.linkText;
      }
      if (!_.isNil(builder.paragraphDefaultSelection)) {
        this.paragraphDefaultSelection = builder.paragraphDefaultSelection;
      }
      if (!_.isNil(builder.paragraphFormatSelection)) {
        this.paragraphFormatSelection = builder.paragraphFormatSelection;
      }
      if (!_.isNil(builder.paragraphFormat)) {
        this.paragraphFormat = builder.paragraphFormat;
      }
      if (!_.isNil(builder.paragraphMultipleStyles)) {
        this.paragraphMultipleStyles = builder.paragraphMultipleStyles;
      }
      if (!_.isNil(builder.paragraphStyles)) {
        this.paragraphStyles = builder.paragraphStyles;
      }
      if (!_.isNil(builder.lineHeights)) {
        this.lineHeights = builder.lineHeights;
      }
      if (!_.isNil(builder.listAdvancedTypes)) {
        this.listAdvancedTypes = builder.listAdvancedTypes;
      }
      if (!_.isNil(builder.quickInsertButtons)) {
        this.quickInsertButtons = builder.quickInsertButtons;
      }
      if (!_.isNil(builder.quickInsertEnabled)) {
        this.quickInsertEnabled = builder.quickInsertEnabled;
      }
      if (!_.isNil(builder.quickInsertTags)) {
        this.quickInsertTags = builder.quickInsertTags;
      }
      if (!_.isNil(builder.fontAwesomeButtons)) {
        this.faButtons = builder.fontAwesomeButtons;
      }
      if (!_.isNil(builder.fontAwesomeSets)) {
        this.fontAwesomeSets = builder.fontAwesomeSets;
      }
      if (!_.isNil(builder.fontAwesomeTemplate)) {
        this.fontAwesomeTemplate = builder.fontAwesomeTemplate;
      }
      if (!_.isNil(builder.specialCharButtons)) {
        this.specialCharButtons = builder.specialCharButtons;
      }
      if (!_.isNil(builder.specialCharactersSets)) {
        this.specialCharactersSets = builder.specialCharactersSets;
      }
      if (!_.isNil(builder.events)) {
        this.events = builder.events;
      }
      if (!_.isNil(builder.saveInterval)) {
        this.saveInterval = builder.saveInterval;
      }
      if (!_.isNil(builder.saveMethod)) {
        this.saveMethod = builder.saveMethod;
      }
      if (!_.isNil(builder.saveParam)) {
        this.saveParam = builder.saveParam;
      }
      if (!_.isNil(builder.saveParams)) {
        this.saveParams = builder.saveParams;
      }
      if (!_.isNil(builder.saveURL)) {
        this.saveURL = builder.saveURL;
      }
      if (!_.isNil(builder.tableCellMultipleStyles)) {
        this.tableCellMultipleStyles = builder.tableCellMultipleStyles;
      }
      if (!_.isNil(builder.tableCellStyles)) {
        this.tableCellStyles = builder.tableCellStyles;
      }
      if (!_.isNil(builder.tableColors)) {
        this.tableColors = builder.tableColors;
      }
      if (!_.isNil(builder.tableColorsButtons)) {
        this.tableColorsButtons = builder.tableColorsButtons;
      }
      if (!_.isNil(builder.tableColorsStep)) {
        this.tableColorsStep = builder.tableColorsStep;
      }
      if (!_.isNil(builder.tableDefaultWidth)) {
        this.tableDefaultWidth = builder.tableDefaultWidth;
      }
      if (!_.isNil(builder.tableEditButtons)) {
        this.tableEditButtons = builder.tableEditButtons;
      }
      if (!_.isNil(builder.tableInsertButtons)) {
        this.tableInsertButtons = builder.tableInsertButtons;
      }
      if (!_.isNil(builder.tableInsertHelper)) {
        this.tableInsertHelper = builder.tableInsertHelper;
      }
      if (!_.isNil(builder.tableInsertHelperOffset)) {
        this.tableInsertHelperOffset = builder.tableInsertHelperOffset;
      }
      if (!_.isNil(builder.tableInsertMaxSize)) {
        this.tableInsertMaxSize = builder.tableInsertMaxSize;
      }
      if (!_.isNil(builder.tableMultipleStyles)) {
        this.tableMultipleStyles = builder.tableMultipleStyles;
      }
      if (!_.isNil(builder.tableResizer)) {
        this.tableResizer = builder.tableResizer;
      }
      if (!_.isNil(builder.tableResizerOffset)) {
        this.tableResizerOffset = builder.tableResizerOffset;
      }
      if (!_.isNil(builder.tableResizingLimit)) {
        this.tableResizingLimit = builder.tableResizingLimit;
      }
      if (!_.isNil(builder.tableStyles)) {
        this.tableStyles = builder.tableStyles;
      }
      if (!_.isNil(builder.videoAllowedProviders)) {
        this.videoAllowedProviders = builder.videoAllowedProviders;
      }
      if (!_.isNil(builder.videoAllowedTypes)) {
        this.videoAllowedTypes = builder.videoAllowedTypes;
      }
      if (!_.isNil(builder.videoDefaultAlign)) {
        this.videoDefaultAlign = builder.videoDefaultAlign;
      }
      if (!_.isNil(builder.videoDefaultDisplay)) {
        this.videoDefaultDisplay = builder.videoDefaultDisplay;
      }
      if (!_.isNil(builder.videoDefaultWidth)) {
        this.videoDefaultWidth = builder.videoDefaultWidth;
      }
      if (!_.isNil(builder.videoEditButtons)) {
        this.videoEditButtons = builder.videoEditButtons;
      }
      if (!_.isNil(builder.videoInsertButtons)) {
        this.videoInsertButtons = builder.videoInsertButtons;
      }
      if (!_.isNil(builder.videoMaxSize)) {
        this.videoMaxSize = builder.videoMaxSize;
      }
      if (!_.isNil(builder.videoMove)) {
        this.videoMove = builder.videoMove;
      }
      if (!_.isNil(builder.videoResize)) {
        this.videoResize = builder.videoResize;
      }
      if (!_.isNil(builder.videoResponsive)) {
        this.videoResponsive = builder.videoResponsive;
      }
      if (!_.isNil(builder.videoSizeButtons)) {
        this.videoSizeButtons = builder.videoSizeButtons;
      }
      if (!_.isNil(builder.videoSplitHTML)) {
        this.videoSplitHTML = builder.videoSplitHTML;
      }
      if (!_.isNil(builder.videoTextNear)) {
        this.videoTextNear = builder.videoTextNear;
      }
      if (!_.isNil(builder.videoUpload)) {
        this.videoUpload = builder.videoUpload;
      }
      if (!_.isNil(builder.videoUploadMethod)) {
        this.videoUploadMethod = builder.videoUploadMethod;
      }
      if (!_.isNil(builder.videoUploadParam)) {
        this.videoUploadParam = builder.videoUploadParam;
      }
      if (!_.isNil(builder.videoUploadParams)) {
        this.videoUploadParams = builder.videoUploadParams;
      }
      if (!_.isNil(builder.videoUploadToS3)) {
        this.videoUploadToS3 = builder.videoUploadToS3;
      }
      if (!_.isNil(builder.videoUploadURL)) {
        this.videoUploadURL = builder.videoUploadURL;
      }
      if (!_.isNil(builder.wordAllowedStyleProps)) {
        this.wordAllowedStyleProps = builder.wordAllowedStyleProps;
      }
      if (!_.isNil(builder.wordDeniedAttrs)) {
        this.wordDeniedAttrs = builder.wordDeniedAttrs;
      }
      if (!_.isNil(builder.wordDeniedTags)) {
        this.wordDeniedTags = builder.wordDeniedTags;
      }
      if (!_.isNil(builder.wordPasteModal)) {
        this.wordPasteModal = builder.wordPasteModal;
      }
      if (!_.isNil(builder.wordPasteKeepFormatting)) {
        this.wordPasteKeepFormatting = builder.wordPasteKeepFormatting;
      }
      if (!_.isNil(builder.immediateAngularModelUpdate)) {
        this.immediateAngularModelUpdate = builder.immediateAngularModelUpdate;
      }
    }
  }
}
