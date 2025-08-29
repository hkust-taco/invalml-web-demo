import runtime from "./Runtime.mjs";
import Predef from "./Predef.mjs";
let StackTrace2;
(class StackTrace {
  static #stackTraceHead;
  static #stackTraceLine;
  static #parseStackTrace;
  static #nameAndFileTraceTemplate;
  static #nameAndFileTraceContent;
  static #fileOnlyTraceTemplate;
  static #fileOnlyTraceContent;
  static {
    StackTrace2 = StackTrace;
    let tmp, tmp1, tmp2, tmp3, tmp4, lambda;
    tmp = new globalThis.RegExp("^[$_\\p{ID_Start}][$_\\.\\u200C\\u200D\\p{ID_Continue}]*(?:: .+)?$", "u");
    StackTrace.#stackTraceHead = tmp;
    tmp1 = new globalThis.RegExp("^\\s*at(?:(?:\\s+(?<name>[$_\\p{ID_Start}][$_\\.\\u200C\\u200D\\p{ID_Continue}]*))?(?:\\s+\\((?<file>[^\\)]+)\\))?|\\s*(?<file>[^\\)]+))$", "u");
    StackTrace.#stackTraceLine = tmp1;
    lambda = (undefined, function (stackTrace) {
      let stackTraceLines, scrut, scrut1, tmp5, tmp6, tmp7, lambda1;
      tmp5 = runtime.safeCall(stackTrace.split("\n"));
      stackTraceLines = tmp5;
      scrut = stackTraceLines.length > 0;
      if (scrut === true) {
        scrut1 = runtime.safeCall(StackTrace.#stackTraceHead.test(stackTraceLines[0]));
        if (scrut1 === true) {
          tmp6 = runtime.safeCall(stackTraceLines.shift());
        } else {
          tmp6 = runtime.Unit;
        }
      } else {
        tmp6 = runtime.Unit;
      }
      lambda1 = (undefined, function (line, _, _1) {
        let scrut2, result, name, file, line1, tmp8;
        scrut2 = runtime.safeCall(line.match(StackTrace.#stackTraceLine));
        if (scrut2 === null) {
          line1 = line;
          return {
          "line": line1
          }
        } else {
          result = scrut2;
          tmp8 = runtime.safeCall(globalThis.console.log(result));
          name = result.groups.name;
          file = result.groups.file;
          return {
          "name": name, "file": file
          }
        }
      });
      tmp7 = lambda1;
      return runtime.safeCall(stackTraceLines.map(tmp7))
    });
    tmp2 = lambda;
    StackTrace.#parseStackTrace = tmp2;
    tmp3 = runtime.safeCall(globalThis.document.getElementById("stack-trace-name-and-file"));
    StackTrace.#nameAndFileTraceTemplate = tmp3;
    StackTrace.#nameAndFileTraceContent = StackTrace.#nameAndFileTraceTemplate.content;
    tmp4 = runtime.safeCall(globalThis.document.getElementById("stack-trace-file-only"));
    StackTrace.#fileOnlyTraceTemplate = tmp4;
    StackTrace.#fileOnlyTraceContent = StackTrace.#fileOnlyTraceTemplate.content;
    this.StackTrace = class StackTrace1 extends globalThis.HTMLElement {
      #template;
      #templateContent;
      #shadowRoot;
      #list;
      constructor() {
        super();
        let tmp5, tmp6, tmp7, tmp8, tmp9;
        tmp5 = runtime.safeCall(globalThis.document.getElementById("stack-trace"));
        this.#template = tmp5;
        this.#templateContent = this.#template.content;
        tmp6 = runtime.safeCall(this.attachShadow({
        "mode": "open"
        }));
        this.#shadowRoot = tmp6;
        tmp7 = runtime.safeCall(this.#templateContent.cloneNode(true));
        tmp8 = runtime.safeCall(this.#shadowRoot.appendChild(tmp7));
        tmp9 = runtime.safeCall(this.#shadowRoot.querySelector("ul"));
        this.#list = tmp9;
      }
      attributeChangedCallback(name, oldValue, newValue) {
        if (name === "data-stack-trace") {
          return this.update(newValue)
        } else {
          return runtime.Unit
        }
      } 
      createTextTrace(content) {
        let li, pre, code, tmp5, tmp6, tmp7, tmp8, tmp9;
        tmp5 = runtime.safeCall(globalThis.document.createElement("li"));
        li = tmp5;
        tmp6 = runtime.safeCall(globalThis.document.createElement("pre"));
        pre = tmp6;
        tmp7 = runtime.safeCall(globalThis.document.createElement("code"));
        code = tmp7;
        code.textContent = content;
        tmp8 = runtime.safeCall(pre.appendChild(code));
        tmp9 = runtime.safeCall(li.appendChild(pre));
        return li
      } 
      createFileOnlyTrace(file) {
        let element, anchor, segments, tmp5, tmp6, tmp7, tmp8, tmp9;
        tmp5 = runtime.safeCall(StackTrace.#fileOnlyTraceContent.cloneNode(true));
        element = tmp5;
        tmp6 = runtime.safeCall(element.querySelector("a"));
        anchor = tmp6;
        anchor.href = file;
        tmp7 = runtime.safeCall(file.split("/"));
        segments = tmp7;
        tmp8 = - 1;
        tmp9 = runtime.safeCall(segments.at(tmp8));
        anchor.textContent = tmp9;
        return element
      } 
      createNameAndFileTrace(name1, file1) {
        let element, code, anchor, segments, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10;
        tmp5 = runtime.safeCall(StackTrace.#nameAndFileTraceContent.cloneNode(true));
        element = tmp5;
        tmp6 = runtime.safeCall(element.querySelector("code"));
        code = tmp6;
        code.textContent = name1;
        tmp7 = runtime.safeCall(element.querySelector("a"));
        anchor = tmp7;
        anchor.href = file1;
        tmp8 = runtime.safeCall(file1.split("/"));
        segments = tmp8;
        tmp9 = - 1;
        tmp10 = runtime.safeCall(segments.at(tmp9));
        anchor.textContent = tmp10;
        return element
      } 
      update(stackTrace) {
        let tmp5, tmp6, lambda1;
        this.#list.innerHTML = "";
        if (stackTrace === null) {
          return runtime.Unit
        } else if (stackTrace === "") {
          return runtime.Unit
        } else {
          tmp5 = runtime.safeCall(StackTrace.#parseStackTrace(stackTrace));
          const this$StackTrace = this;
          lambda1 = (undefined, function (caseScrut) {
            let otherwise, fieldfile, fieldname, name2, file2, scrut, fieldline, line, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23;
            if (caseScrut instanceof Object) {
              if ("line" in caseScrut) {
                fieldline = caseScrut.line;
                line = fieldline;
                tmp7 = this$StackTrace.createTextTrace(line);
                return runtime.safeCall(this$StackTrace.#list.appendChild(tmp7))
              } else if (caseScrut instanceof Object) {
                if ("name" in caseScrut) {
                  fieldname = caseScrut.name;
                  if ("file" in caseScrut) {
                    fieldfile = caseScrut.file;
                    name2 = fieldname;
                    file2 = fieldfile;
                    scrut = name2 === globalThis.Unit;
                    if (scrut === true) {
                      tmp8 = this$StackTrace.createFileOnlyTrace(file2);
                      return runtime.safeCall(this$StackTrace.#list.appendChild(tmp8))
                    } else {
                      tmp9 = this$StackTrace.createNameAndFileTrace(name2, file2);
                      return runtime.safeCall(this$StackTrace.#list.appendChild(tmp9))
                    }
                  } else {
                    otherwise = caseScrut;
                    tmp10 = globalThis.String(otherwise);
                    tmp11 = this$StackTrace.createTextTrace(tmp10);
                    return runtime.safeCall(this$StackTrace.#list.appendChild(tmp11))
                  }
                } else {
                  otherwise = caseScrut;
                  tmp12 = globalThis.String(otherwise);
                  tmp13 = this$StackTrace.createTextTrace(tmp12);
                  return runtime.safeCall(this$StackTrace.#list.appendChild(tmp13))
                }
              } else {
                otherwise = caseScrut;
                tmp14 = globalThis.String(otherwise);
                tmp15 = this$StackTrace.createTextTrace(tmp14);
                return runtime.safeCall(this$StackTrace.#list.appendChild(tmp15))
              }
            } else if (caseScrut instanceof Object) {
              if ("name" in caseScrut) {
                fieldname = caseScrut.name;
                if ("file" in caseScrut) {
                  fieldfile = caseScrut.file;
                  name2 = fieldname;
                  file2 = fieldfile;
                  scrut = name2 === globalThis.Unit;
                  if (scrut === true) {
                    tmp16 = this$StackTrace.createFileOnlyTrace(file2);
                    return runtime.safeCall(this$StackTrace.#list.appendChild(tmp16))
                  } else {
                    tmp17 = this$StackTrace.createNameAndFileTrace(name2, file2);
                    return runtime.safeCall(this$StackTrace.#list.appendChild(tmp17))
                  }
                } else {
                  otherwise = caseScrut;
                  tmp18 = globalThis.String(otherwise);
                  tmp19 = this$StackTrace.createTextTrace(tmp18);
                  return runtime.safeCall(this$StackTrace.#list.appendChild(tmp19))
                }
              } else {
                otherwise = caseScrut;
                tmp20 = globalThis.String(otherwise);
                tmp21 = this$StackTrace.createTextTrace(tmp20);
                return runtime.safeCall(this$StackTrace.#list.appendChild(tmp21))
              }
            } else {
              otherwise = caseScrut;
              tmp22 = globalThis.String(otherwise);
              tmp23 = this$StackTrace.createTextTrace(tmp22);
              return runtime.safeCall(this$StackTrace.#list.appendChild(tmp23))
            }
          });
          tmp6 = lambda1;
          return runtime.safeCall(tmp5.forEach(tmp6))
        }
      } 
      connectedCallback() {
        return this.update(this.dataset.stackTrace)
      }
      toString() { return "StackTrace"; }
    };
    StackTrace.StackTrace.observedAttributes = [
      "data-stack-trace"
    ];
    globalThis.customElements.define("stack-trace", StackTrace.StackTrace)
  }
  static toString() { return "StackTrace"; }
});
let StackTrace = StackTrace2; export default StackTrace;
