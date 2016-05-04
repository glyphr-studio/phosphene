import WindowRegister from "./support/WindowRegister";
import EventUnit from "./jqueryEventUnit/EventUnit";

export default class EventStream {
  _windowRegister;
  _DOMEventStream;
  _options = {
    rootStreamName: "_eventStream",
    staticsName: "_statics",
    namespaceURI: "http://www.w3.org/1999/xhtml",
    qualifiedName: "root",
    doctype: null
  };
  
  constructor(options) {
    this._options = Object.assign(this._options, options);
    var options = this._options;

    this._windowRegister = new WindowRegister(options.rootStreamName, options.staticsName);

    if(this._windowRegister.getStatic(this._options.rootStreamName)) return this._windowRegister.getStatic(this._options.rootStreamName);
    else return this._init(options);
  }

  _init(options) {
    this._DOMEventStream = document.implementation.createDocument(options.namespaceURI, options.qualifiedName, options.doctype);
    this._windowRegister.attachStatic({
      [this._options.rootStreamName]: this._DOMEventStream
    });
    return this._windowRegister.getStatic(this._options.rootStreamName);
  }

  get DOMEventStream() {
    return this._DOMEventStream;
  }
}