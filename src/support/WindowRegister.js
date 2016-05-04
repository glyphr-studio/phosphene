export default class WindowRegister {
  _rootObjectName;
  _staticRootObjectName;

  constructor(rootObjectName, staticsObjectName) {
    this._rootObjectName = rootObjectName;
    this._staticRootObjectName = staticsObjectName;

    if (window[this._rootObjectName] && typeof window[this._rootObjectName] !== "object") {
      throw new TypeError(`window.${this._rootObjectName} must be either of type undefined or object, got ${typeof window[this._rootObjectName]}`);
    }
    // Initialize window registry onto the window object if needed
    else if(typeof window[this._rootObjectName] === "undefined") {
      window[this._rootObjectName] = {
        [this._staticRootObjectName]: {}
      };
    }
  }

  getRoot() {
    // Ask for read access
    return window[this._rootObjectName];
  }

  getStatic(name) {
    return window[this._rootObjectName][this._staticRootObjectName][name];
  }

    attachStatic(object) {
    return window[this._rootObjectName][this._staticRootObjectName] = Object.assign(this.getStatic() || {}, object);

  }

  detachStatic(object) {
    for (var sObject in window[this._rootObjectName][this._staticRootObjectName]) {
      var current = window[this._rootObjectName][this._staticRootObjectName][sObject];
      if (current === object) {
        delete window[this._rootObjectName][this._staticRootObjectName][sObject];
        return current;
      }
    }
  }
}