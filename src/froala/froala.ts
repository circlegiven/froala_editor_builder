import * as _ from 'lodash';
import * as $ from 'jquery';
import {FroalaOptionsBuilder} from "./froala-options-builder";

export namespace Froala {
  export type GenericObject<T> = { [key: string]: T };
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
  export type UploadMethod = 'POST' | 'PUT';
  export type DeleteMethod = 'POST' | 'DELETE';
  export type GetMethod = 'GET' | 'POST';
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
    emoticonsSet: object[];
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
    imageStyles: object;
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
    inlineStyles: object;
    // Inline Class
    inlineClasses: object;
    // Language
    language: Language;
    // Line Breaker
    lineBreakerHorizontalOffset: number;
    lineBreakerOffset: number;
    lineBreakerTags: string[];
    // Link
    linkAlwaysBlank: boolean;
    linkAlwaysNoFollow: boolean;
    linkAttributes: object;
    linkAutoPrefix: string;
    linkConvertEmailAddress: boolean;
    linkEditButtons: string[];
    linkInsertButtons: string[];
    linkList: object[];
    linkMultipleStyles: boolean;
    linkNoOpener: boolean;
    linkNoReferrer: boolean;
    linkStyles: object;
    linkText: boolean;
    // Paragraph Format
    paragraphDefaultSelection: string;
    paragraphFormat: object;
    paragraphFormatSelection: boolean;
    paragraphMultipleStyles: boolean;
    paragraphStyles: object;
    lineHeights: object;
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
    specialCharactersSets: object;
    // WebSpellChecker TODO
    events: object;

    // Save
    saveInterval: number;
    saveMethod: UploadMethod;
    saveParam: string;
    saveParams: object;
    saveURL: string;
    // Table
    tableCellMultipleStyles: boolean;
    tableCellStyles: object;
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
    tableStyles: object;
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
      // TODO events

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
    }
  }
}
