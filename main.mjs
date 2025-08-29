import runtime from "./Runtime.mjs";
import Str from "./Str.mjs";
import Iter from "./Iter.mjs";
import XML from "./XML.mjs";
import Option from "./Option.mjs";
import Runtime from "./Runtime.mjs";
import Predef from "./Predef.mjs";
import MutMap from "./MutMap.mjs";
import Examples from "./Examples.mjs";
import MLscript from "./MLscript.mjs";
let Main1;
(class Main {
  static #query;
  static #editor;
  static #selector;
  static #parseButton;
  static #outputPanel;
  static #compileTimeReport;
  static #indentRegex;
  static #errorDisplayStyle;
  static {
    Main1 = Main;
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, lambda, lambda1, lambda2, lambda3;
    tmp = runtime.safeCall(globalThis.document.querySelector.bind(globalThis.document));
    Main.#query = tmp;
    tmp1 = runtime.safeCall(Main.#query("#editor"));
    Main.#editor = tmp1;
    tmp2 = runtime.safeCall(Main.#query("select#example"));
    Main.#selector = tmp2;
    tmp3 = runtime.safeCall(Main.#query("button#parse"));
    Main.#parseButton = tmp3;
    tmp4 = runtime.safeCall(Main.#query("#output"));
    Main.#outputPanel = tmp4;
    tmp5 = runtime.safeCall(Main.#query(".compile-time-report"));
    Main.#compileTimeReport = tmp5;
    (class tabs {
      static {
        Main.tabs = tabs;
        (class typer {
          static {
            tabs.typer = typer;
            let tmp15, tmp16;
            tmp15 = runtime.safeCall(Main.#query("#tab-typer"));
            this.el = tmp15;
            tmp16 = runtime.safeCall(typer.el.querySelector(".output"));
            this.output = tmp16;
            const diagnostics$class = class diagnostics {
              constructor() {
                let tmp17, tmp18, tmp19;
                tmp17 = runtime.safeCall(typer.el.querySelector(".diagnostics"));
                this.elem = tmp17;
                tmp18 = runtime.safeCall(this.elem.querySelector(".output"));
                this.output = tmp18;
                tmp19 = runtime.safeCall(this.elem.querySelector(".text"));
                this.text = tmp19;
              }
              toString() { return "diagnostics"; }
            };
            this.diagnostics = new diagnostics$class;
            this.diagnostics.class = diagnostics$class;
          }
          static toString() { return "typer"; }
        });
        (class parser {
          static {
            tabs.parser = parser;
            let tmp15, tmp16, tmp17, tmp18;
            tmp15 = runtime.safeCall(Main.#query("#tab-parser"));
            this.el = tmp15;
            tmp16 = runtime.safeCall(parser.el.querySelector("code.traces"));
            this.traces = tmp16;
            tmp17 = runtime.safeCall(parser.el.querySelector("div.trees"));
            this.trees = tmp17;
            tmp18 = runtime.safeCall(parser.el.querySelector("#show-traces"));
            this.showTraces = tmp18;
            const diagnostics$class = class diagnostics1 {
              constructor() {
                let tmp19, tmp20, tmp21;
                tmp19 = runtime.safeCall(parser.el.querySelector(".diagnostics"));
                this.elem = tmp19;
                tmp20 = runtime.safeCall(this.elem.querySelector(".output"));
                this.output = tmp20;
                tmp21 = runtime.safeCall(this.elem.querySelector(".text"));
                this.text = tmp21;
              }
              toString() { return "diagnostics"; }
            };
            this.diagnostics = new diagnostics$class;
            this.diagnostics.class = diagnostics$class;
          }
          static toString() { return "parser"; }
        });
        (class elaborator {
          static {
            tabs.elaborator = elaborator;
            let tmp15, tmp16, tmp17, tmp18;
            tmp15 = runtime.safeCall(Main.#query("#tab-elaborator"));
            this.el = tmp15;
            tmp16 = runtime.safeCall(elaborator.el.querySelector("code.traces"));
            this.traces = tmp16;
            tmp17 = runtime.safeCall(elaborator.el.querySelector("div.tree"));
            this.tree = tmp17;
            tmp18 = runtime.safeCall(elaborator.el.querySelector("#show-traces"));
            this.showTraces = tmp18;
            const diagnostics$class = class diagnostics2 {
              constructor() {
                let tmp19, tmp20, tmp21;
                tmp19 = runtime.safeCall(elaborator.el.querySelector(".diagnostics"));
                this.elem = tmp19;
                tmp20 = runtime.safeCall(this.elem.querySelector(".output"));
                this.output = tmp20;
                tmp21 = runtime.safeCall(this.elem.querySelector(".text"));
                this.text = tmp21;
              }
              toString() { return "diagnostics"; }
            };
            this.diagnostics = new diagnostics$class;
            this.diagnostics.class = diagnostics$class;
          }
          static toString() { return "elaborator"; }
        });
        (class resolver {
          static {
            tabs.resolver = resolver;
            let tmp15, tmp16, tmp17, tmp18;
            tmp15 = runtime.safeCall(Main.#query("#tab-resolver"));
            this.el = tmp15;
            tmp16 = runtime.safeCall(resolver.el.querySelector("code.traces"));
            this.traces = tmp16;
            tmp17 = runtime.safeCall(resolver.el.querySelector("div.tree"));
            this.tree = tmp17;
            tmp18 = runtime.safeCall(resolver.el.querySelector("#show-traces"));
            this.showTraces = tmp18;
            const diagnostics$class = class diagnostics3 {
              constructor() {
                let tmp19, tmp20, tmp21;
                tmp19 = runtime.safeCall(resolver.el.querySelector(".diagnostics"));
                this.elem = tmp19;
                tmp20 = runtime.safeCall(this.elem.querySelector(".output"));
                this.output = tmp20;
                tmp21 = runtime.safeCall(this.elem.querySelector(".text"));
                this.text = tmp21;
              }
              toString() { return "diagnostics"; }
            };
            this.diagnostics = new diagnostics$class;
            this.diagnostics.class = diagnostics$class;
          }
          static toString() { return "resolver"; }
        });
        (class lowering {
          static {
            tabs.lowering = lowering;
            let tmp15, tmp16, tmp17, tmp18;
            tmp15 = runtime.safeCall(Main.#query("#tab-lowering"));
            this.el = tmp15;
            tmp16 = runtime.safeCall(lowering.el.querySelector("code.traces"));
            this.traces = tmp16;
            tmp17 = runtime.safeCall(lowering.el.querySelector("div.tree"));
            this.tree = tmp17;
            tmp18 = runtime.safeCall(lowering.el.querySelector("#show-traces"));
            this.showTraces = tmp18;
            const diagnostics$class = class diagnostics4 {
              constructor() {
                let tmp19, tmp20, tmp21;
                tmp19 = runtime.safeCall(lowering.el.querySelector(".diagnostics"));
                this.elem = tmp19;
                tmp20 = runtime.safeCall(this.elem.querySelector(".output"));
                this.output = tmp20;
                tmp21 = runtime.safeCall(this.elem.querySelector(".text"));
                this.text = tmp21;
              }
              toString() { return "diagnostics"; }
            };
            this.diagnostics = new diagnostics$class;
            this.diagnostics.class = diagnostics$class;
          }
          static toString() { return "lowering"; }
        });
        (class codegen {
          static {
            tabs.codegen = codegen;
            let tmp15, tmp16, tmp17, tmp18;
            tmp15 = runtime.safeCall(Main.#query("#tab-code-generation"));
            this.el = tmp15;
            tmp16 = runtime.safeCall(codegen.el.querySelector(".output"));
            this.output = tmp16;
            tmp17 = runtime.safeCall(codegen.el.querySelector("code.traces"));
            this.traces = tmp17;
            tmp18 = runtime.safeCall(codegen.el.querySelector("#show-traces"));
            this.showTraces = tmp18;
            const diagnostics$class = class diagnostics5 {
              constructor() {
                let tmp19, tmp20, tmp21;
                tmp19 = runtime.safeCall(codegen.el.querySelector(".diagnostics"));
                this.elem = tmp19;
                tmp20 = runtime.safeCall(this.elem.querySelector(".output"));
                this.output = tmp20;
                tmp21 = runtime.safeCall(this.elem.querySelector(".text"));
                this.text = tmp21;
              }
              toString() { return "diagnostics"; }
            };
            this.diagnostics = new diagnostics$class;
            this.diagnostics.class = diagnostics$class;
          }
          static toString() { return "codegen"; }
        });
      }
      static toString() { return "tabs"; }
    });
    lambda = (undefined, function (caseScrut) {
      let first1, first0, key, example, option, scrut, tmp15, tmp16;
      if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
        first0 = caseScrut[0];
        first1 = caseScrut[1];
        key = first0;
        example = first1;
        tmp15 = runtime.safeCall(globalThis.document.createElement("option"));
        option = tmp15;
        option.value = key;
        option.textContent = example.name;
        tmp16 = runtime.safeCall(Main.#selector.appendChild(option));
        scrut = Main.#editor.value;
        if (scrut === "") {
          Main.#editor.value = example.source;
          return runtime.Unit
        } else {
          return runtime.Unit
        }
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp6 = lambda;
    tmp7 = Iter.each(Examples.examples, tmp6);
    lambda1 = (undefined, function (event) {
      let scrut, start, end, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20;
      scrut = event.key;
      if (scrut === "Tab") {
        tmp15 = runtime.safeCall(event.preventDefault());
        start = Main.#editor.selectionStart;
        end = Main.#editor.selectionEnd;
        tmp16 = Main.#editor.value.substring(0, start);
        tmp17 = tmp16 + "  ";
        tmp18 = runtime.safeCall(Main.#editor.value.substring(end));
        tmp19 = tmp17 + tmp18;
        Main.#editor.value = tmp19;
        tmp20 = start + 2;
        Main.#editor.selectionEnd = tmp20;
        Main.#editor.selectionStart = Main.#editor.selectionEnd;
        return runtime.Unit
      } else {
        return runtime.Unit
      }
    });
    tmp8 = lambda1;
    tmp9 = Main.#editor.addEventListener("keydown", tmp8);
    lambda2 = (undefined, function (event) {
      let scrut, param0, example, tmp15, tmp16, tmp17;
      tmp15 = MutMap.get(Main.#selector.value);
      scrut = Predef.pipeInto(Examples.examples, tmp15);
      if (scrut instanceof Option.Some.class) {
        param0 = scrut.value;
        example = param0;
        Main.#editor.value = example.source;
        return runtime.Unit
      } else if (scrut instanceof Option.None.class) {
        tmp16 = "Example \"" + Main.#selector.value;
        tmp17 = tmp16 + "\" not found";
        throw new globalThis.Error(tmp17);
      } else {
        return runtime.Unit
      }
    });
    tmp10 = lambda2;
    tmp11 = Main.#selector.addEventListener("change", tmp10);
    lambda3 = (undefined, function (event) {
      let tmp15, tmp16, lambda4, lambda5;
      lambda4 = (undefined, function () {
        let startTime, res, parser1, elaborator1, resolver1, lowering1, codegen1, elapsedSeconds, problematicStages, scrut, scrut1, scrut2, scrut3, scrut4, scrut5, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, lambda6;
        tmp17 = runtime.safeCall(globalThis.Date.now());
        startTime = tmp17;
        parser1 = Main.tabs.parser.showTraces.checked;
        elaborator1 = Main.tabs.elaborator.showTraces.checked;
        resolver1 = Main.tabs.resolver.showTraces.checked;
        lowering1 = Main.tabs.lowering.showTraces.checked;
        codegen1 = Main.tabs.codegen.showTraces.checked;
        tmp18 = MLscript.compile(Main.#editor.value, {
        "traces": {
          "parser": parser1, "elaborator": elaborator1, "resolver": resolver1, "lowering": lowering1, "codegen": codegen1
          }
        });
        res = tmp18;
        tmp19 = runtime.safeCall(globalThis.Date.now());
        tmp20 = tmp19 - startTime;
        tmp21 = tmp20 / 1000;
        tmp22 = runtime.safeCall(tmp21.toPrecision(3));
        elapsedSeconds = tmp22;
        tmp23 = "Compilation took " + elapsedSeconds;
        tmp24 = tmp23 + " seconds.";
        tmp25 = runtime.safeCall(globalThis.console.log(tmp24));
        tmp26 = runtime.safeCall(globalThis.console.log(res));
        problematicStages = [];
        scrut = res.typer.diagnostics.length > 0;
        if (scrut === true) {
          tmp27 = runtime.safeCall(problematicStages.push("typer"));
        } else {
          tmp27 = runtime.Unit;
        }
        scrut1 = res.parser.diagnostics.length > 0;
        if (scrut1 === true) {
          tmp28 = runtime.safeCall(problematicStages.push("parser"));
        } else {
          tmp28 = runtime.Unit;
        }
        scrut2 = res.elaborator.diagnostics.length > 0;
        if (scrut2 === true) {
          tmp29 = runtime.safeCall(problematicStages.push("elaborator"));
        } else {
          tmp29 = runtime.Unit;
        }
        scrut3 = res.resolver.diagnostics.length > 0;
        if (scrut3 === true) {
          tmp30 = runtime.safeCall(problematicStages.push("resolver"));
        } else {
          tmp30 = runtime.Unit;
        }
        scrut4 = res.lowering.diagnostics.length > 0;
        if (scrut4 === true) {
          tmp31 = runtime.safeCall(problematicStages.push("lowering"));
        } else {
          tmp31 = runtime.Unit;
        }
        scrut5 = res.codegen.diagnostics.length > 0;
        if (scrut5 === true) {
          tmp32 = runtime.safeCall(problematicStages.push("code generation"));
        } else {
          tmp32 = runtime.Unit;
        }
        Main.tabs.typer.output.innerHTML = res.typer.simplifiedType;
        tmp33 = Main.showDiagnostics(Main.tabs.typer.diagnostics, res.typer.diagnostics, problematicStages);
        Main.tabs.parser.traces.innerHTML = res.parser.traces;
        tmp34 = Main.showDiagnostics(Main.tabs.parser.diagnostics, res.parser.diagnostics, problematicStages);
        Main.tabs.parser.trees.innerHTML = "";
        lambda6 = (undefined, function (tree) {
          return Main.addCollapsibleTree(Main.tabs.parser.trees, tree)
        });
        tmp35 = Iter.each(res.parser.trees, lambda6);
        Main.tabs.elaborator.traces.innerHTML = res.elaborator.traces;
        Main.tabs.elaborator.tree.innerHTML = "";
        tmp36 = Main.addCollapsibleTree(Main.tabs.elaborator.tree, res.elaborator.tree);
        tmp37 = Main.showDiagnostics(Main.tabs.elaborator.diagnostics, res.elaborator.diagnostics, problematicStages);
        Main.tabs.resolver.traces.innerHTML = res.resolver.traces;
        Main.tabs.resolver.tree.innerHTML = "";
        tmp38 = Main.addCollapsibleTree(Main.tabs.resolver.tree, res.resolver.tree);
        tmp39 = Main.showDiagnostics(Main.tabs.resolver.diagnostics, res.resolver.diagnostics, problematicStages);
        Main.tabs.lowering.traces.innerHTML = res.lowering.traces;
        Main.tabs.lowering.tree.innerHTML = "";
        tmp40 = Main.addCollapsibleTree(Main.tabs.lowering.tree, res.lowering.tree);
        tmp41 = Main.showDiagnostics(Main.tabs.lowering.diagnostics, res.lowering.diagnostics, problematicStages);
        tmp42 = runtime.safeCall(res.codegen.vars.trim());
        tmp43 = tmp42 + "\n";
        tmp44 = runtime.safeCall(res.codegen.code.trim());
        tmp45 = tmp43 + tmp44;
        Main.tabs.codegen.output.innerHTML = tmp45;
        Main.tabs.codegen.traces.innerHTML = res.codegen.traces;
        return Main.showDiagnostics(Main.tabs.codegen.diagnostics, res.codegen.diagnostics, problematicStages)
      });
      tmp15 = lambda4;
      lambda5 = (undefined, function (error) {
        let errorDisplay, tmp17, tmp18, tmp19;
        tmp17 = runtime.safeCall(globalThis.console.log(error));
        tmp18 = runtime.safeCall(globalThis.document.createElement("error-display"));
        errorDisplay = tmp18;
        tmp19 = runtime.safeCall(errorDisplay.setError(error));
        return runtime.safeCall(Main.#outputPanel.appendChild(errorDisplay))
      });
      tmp16 = lambda5;
      return Runtime.try_catch(tmp15, tmp16)
    });
    tmp12 = Main.#parseButton.addEventListener("click", lambda3);
    tmp13 = new globalThis.RegExp("^(\\s*)");
    Main.#indentRegex = tmp13;
    Main.#errorDisplayStyle = "\n.error-container {\n  background-color: #fdd;\n  padding: 0.375rem 0.75rem 0.5rem;\n  font-family: var(--monospace);\n  color: #991b1bff;\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.error-message {\n  margin: 0;\n  font-weight: bold;\n  font-size: 1.125rem;\n}\n.stack-trace {\n  font-size: 0.875rem;\n  margin: 0;\n  list-style-type: none;\n  padding-left: 0.5rem;\n}";
    this.CollapsibleTree = class CollapsibleTree extends globalThis.HTMLElement {
      constructor() {
        super();
      }
      connectedCallback() {
        let rawText, treeData, treeElement, tmp15, tmp16;
        rawText = this.textContent;
        this.textContent = "";
        tmp15 = Main.parseIndentedText(rawText);
        treeData = tmp15;
        tmp16 = this.createDetailsTree(treeData, 0);
        treeElement = tmp16;
        return runtime.safeCall(this.appendChild(treeElement))
      } 
      createDetailsTree(nodes, depth) {
        let fragment, tmp15, tmp16, tmp17, lambda4;
        tmp15 = runtime.safeCall(globalThis.document.createDocumentFragment());
        fragment = tmp15;
        const this$CollapsibleTree = this;
        lambda4 = (undefined, function (node) {
          let details, scrut, summary, scrut1, rule, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27;
          tmp18 = runtime.safeCall(globalThis.document.createElement("details"));
          details = tmp18;
          scrut = depth < 4;
          if (scrut === true) {
            tmp19 = details.setAttribute("open", "");
          } else {
            tmp19 = runtime.Unit;
          }
          tmp20 = runtime.safeCall(globalThis.document.createElement("summary"));
          summary = tmp20;
          summary.textContent = node.text;
          tmp21 = runtime.safeCall(details.appendChild(summary));
          scrut1 = node.children.length > 0;
          if (scrut1 === true) {
            tmp22 = depth + 1;
            tmp23 = this$CollapsibleTree.createDetailsTree(node.children, tmp22);
            tmp24 = runtime.safeCall(details.appendChild(tmp23));
          } else {
            tmp24 = details.setAttribute("leaf", "");
          }
          tmp25 = runtime.safeCall(fragment.appendChild(details));
          tmp26 = runtime.safeCall(globalThis.document.createElement("rule"));
          rule = tmp26;
          tmp27 = runtime.safeCall(rule.classList.add("rule"));
          return runtime.safeCall(fragment.appendChild(rule))
        });
        tmp16 = lambda4;
        tmp17 = Iter.each(nodes, tmp16);
        return fragment
      }
      toString() { return "CollapsibleTree"; }
    };
    tmp14 = globalThis.customElements.define("collapsible-tree", Main.CollapsibleTree);
    this.ErrorDisplay = class ErrorDisplay extends globalThis.HTMLElement {
      #_error;
      constructor() {
        super();
        let tmp15;
        tmp15 = runtime.safeCall(this.attachShadow({
        "mode": "open"
        }));
        this.#_error = Option.None;
      }
      connectedCallback() {
        return runtime.safeCall(this.render())
      } 
      setError(value) {
        let tmp15;
        tmp15 = runtime.safeCall(Option.Some(value));
        this.#_error = tmp15;
        return runtime.safeCall(this.render())
      } 
      render() {
        let scrut, param0, error, stackLines, scrut1, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, lambda4;
        scrut = this.#_error;
        if (scrut instanceof Option.Some.class) {
          param0 = scrut.value;
          error = param0;
          tmp15 = runtime.safeCall(error.stack.split("\n"));
          stackLines = tmp15;
          scrut1 = runtime.safeCall(stackLines[0].startsWith(error.name));
          if (scrut1 === true) {
            tmp16 = runtime.safeCall(stackLines.shift());
          } else {
            tmp16 = runtime.Unit;
          }
          tmp17 = XML.elem("div", {
          "class": "error-container"
          });
          tmp18 = XML.elem("h3", {
          "class": "error-message"
          });
          tmp19 = error.name + ": ";
          tmp20 = tmp19 + error.message;
          tmp21 = runtime.safeCall(tmp18(tmp20));
          tmp22 = XML.elem("ul", {
          "class": "stack-trace"
          });
          lambda4 = (undefined, function (line) {
            let tmp30, tmp31;
            tmp30 = XML.elem("li");
            tmp31 = runtime.safeCall(line.trim());
            return runtime.safeCall(tmp30(tmp31))
          });
          tmp23 = lambda4;
          tmp24 = Iter.mapping(stackLines, tmp23);
          tmp25 = Iter.joined(tmp24, "");
          tmp26 = runtime.safeCall(tmp22(tmp25));
          tmp27 = XML.elem("style");
          tmp28 = runtime.safeCall(tmp27(Main.#errorDisplayStyle));
          tmp29 = runtime.safeCall(tmp17(tmp21, tmp26, tmp28));
          this.shadowRoot.innerHTML = tmp29;
          return runtime.Unit
        } else {
          return runtime.Unit
        }
      }
      toString() { return "ErrorDisplay"; }
    };
    globalThis.customElements.define("error-display", Main.ErrorDisplay)
  }
  static showDiagnostics(elems, diagnostics6, problematicStages) {
    let scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7;
    if (globalThis.Array.isArray(diagnostics6) && diagnostics6.length === 0) {
      if (globalThis.Array.isArray(problematicStages) && problematicStages.length === 0) {
        elems.text.innerHTML = "<em>Everything went smoothly, without any problems.</em>";
        return runtime.Unit
      } else {
        tmp = "<em>There is no issue with this stage, " + "but there are problems in the following stage";
        scrut = problematicStages.length > 1;
        if (scrut === true) {
          tmp1 = "s";
        } else {
          tmp1 = "";
        }
        tmp2 = tmp + tmp1;
        tmp3 = tmp2 + ": ";
        tmp4 = Iter.joined(problematicStages, ", ");
        tmp5 = tmp3 + tmp4;
        tmp6 = tmp5 + ".</em>";
        elems.text.innerHTML = tmp6;
        return runtime.Unit
      }
    } else {
      tmp7 = runtime.safeCall(diagnostics6.join("\n"));
      elems.output.innerHTML = tmp7;
      elems.text.innerHTML = "";
      return runtime.Unit
    }
  } 
  static addCollapsibleTree(element, tree) {
    let collapsibleTree, tmp;
    tmp = runtime.safeCall(globalThis.document.createElement("collapsible-tree"));
    collapsibleTree = tmp;
    collapsibleTree.textContent = tree;
    return runtime.safeCall(element.appendChild(collapsibleTree))
  } 
  static parseIndentedText(text) {
    let root, text1, children, stack, node, indent, tmp, tmp1, tmp2, tmp3, tmp4, lambda, lambda1;
    text1 = "";
    children = [];
    root = {
    "text": text1, "children": children
    };
    node = root;
    tmp = - 1;
    indent = tmp;
    stack = [
      {
      "node": node, "indent": indent
      }
    ];
    tmp1 = runtime.safeCall(text.split("\n"));
    lambda = (undefined, function (line) {
      let tmp5;
      tmp5 = runtime.safeCall(line.trim());
      return tmp5.length > 0
    });
    tmp2 = Iter.filtering(tmp1, lambda);
    lambda1 = (undefined, function (line) {
      let indent1, text2, scrut, newNode, text3, children1, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10;
      tmp5 = runtime.safeCall(line.match(Main.#indentRegex));
      indent1 = tmp5[1].length;
      tmp6 = runtime.safeCall(line.substring(indent1));
      text2 = tmp6;
      tmp11: while (true) {
        tmp7 = stack.length - 1;
        scrut = indent1 <= stack[tmp7].indent;
        if (scrut === true) {
          tmp8 = runtime.safeCall(stack.pop());
          continue tmp11;
        } else {
          tmp8 = runtime.Unit;
        }
        break;
      }
      text3 = text2;
      children1 = [];
      newNode = {
      "text": text3, "children": children1
      };
      tmp9 = stack.length - 1;
      tmp10 = runtime.safeCall(stack[tmp9].node.children.push(newNode));
      return runtime.safeCall(stack.push({
      "node": newNode, "indent": indent1
      }))
    });
    tmp3 = lambda1;
    tmp4 = Iter.each(tmp2, tmp3);
    return root.children
  }
  static toString() { return "Main"; }
});