import * as _ from 'lodash';
import * as $ from 'jquery';
import {FroalaOptionsBuilder} from "./froala-options-builder";

export namespace Froala {
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
  export enum ImageType {
    JPEG = 'jpeg',
    JPG = 'jpg',
    PNG = 'png',
    GIF = 'gif',
    WEBP = 'webp'
  }
  export enum ImageAlign {
    LEFT = 'left',
    CENTER = 'center',
    RIGHT = 'right',
  }
  export enum ImageDisplay {
    INLINE = 'inline',
    BLOCK = 'block'
  }
  export enum HttpMethod {
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
    GET = 'GET'
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
  export class Options {
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
    emoticonsSet: object[];
    emoticonsStep: number;
    // Entities
    entities: string;
    // File
    fileAllowedTypes: string[];
    fileInsertButtons: string[];
    fileMaxSize: number;
    fileUpload: boolean;
    fileUploadMethod: HttpMethod;
    fileUploadParam: string;
    fileUploadParams: object;
    fileUploadToS3: object;
    fileUploadURL: string;
    fileUseSelectedText: boolean;
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
    direction: TextDirection;
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
    // Help
    helpSets: object[];
    // Image
    imageAllowedTypes: ImageType[];
    imageAltButtons: string[];
    imageCORSProxy: string;
    imageDefaultAlign: ImageAlign;
    imageDefaultDisplay: ImageDisplay;
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
    imageStyles: object;
    imageTUIOptions: object;
    imageTextNear: boolean;
    imageUpload: boolean;
    imageAddNewLine: boolean;
    imageUploadMethod: HttpMethod;
    imageUploadParam: string;
    imageUploadParams: object;
    imageUploadRemoteUrls: boolean;
    imageUploadToS3: boolean;
    imageUploadURL: string;
    // Image Manager
    imageManagerDeleteMethod: HttpMethod;
    imageManagerDeleteParams: object;
    imageManagerDeleteURL: string;
    imageManagerLoadMethod: HttpMethod;
    imageManagerLoadParams: object;
    imageManagerLoadURL: string;
    imageManagerPageSize: number;
    imageManagerPreloader: string;
    imageManagerScrollOffset: number;
    imageManagerToggleTags: boolean;

    constructor(builder: FroalaOptionsBuilder) {
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
    }
  }
}
