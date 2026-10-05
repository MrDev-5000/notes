"use strict";
var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// src/settings.js
var require_settings = __commonJS({
  "src/settings.js"(exports2, module2) {
    "use strict";
    var { PluginSettingTab, Setting } = require("obsidian");
    var LANGUAGE_OPTIONS = [
      {
        value: "zh-CN",
        label: "\u4E2D\u6587",
        commandName: "\u5C06\u5F53\u524D\u9605\u8BFB\u89C6\u56FE\u5BFC\u51FA\u4E3APDF",
        ribbonTitle: "\u5C06\u5F53\u524D\u9605\u8BFB\u89C6\u56FE\u5BFC\u51FA\u4E3APDF",
        settingsText: {
          languageName: "Language / \u8BED\u8A00",
          languageDesc: "\u63D2\u4EF6\u663E\u793A\u7684\u754C\u9762\u8BED\u8A00",
          outputSection: "\u8F93\u51FA",
          outputDirectoryName: "\u8F93\u51FA\u8DEF\u5F84",
          outputDirectoryDesc: "PDF \u4FDD\u5B58\u76EE\u5F55\uFF1B\u652F\u6301\u7CFB\u7EDF\u7EDD\u5BF9\u8DEF\u5F84\uFF0C\u7559\u7A7A\u5219\u4F7F\u7528\u4ED3\u5E93\u6839\u76EE\u5F55",
          outputDirectoryPlaceholder: "\u4ED3\u5E93\u6839\u76EE\u5F55",
          outputDirectoryReset: "\u91CD\u7F6E",
          pdfSection: "PDF \u5BFC\u51FA",
          landscapeName: "\u6A2A\u5411\u9875\u9762",
          landscapeDesc: "\u4F7F\u7528\u6A2A\u5411\u9875\u9762\u65B9\u5411",
          displayHeaderFooterName: "\u663E\u793A\u9875\u7709\u9875\u811A",
          displayHeaderFooterDesc: "\u5728 PDF \u4E2D\u663E\u793A\u81EA\u5B9A\u4E49\u9875\u7709\u548C\u9875\u811A",
          printBackgroundName: "\u6253\u5370\u80CC\u666F",
          printBackgroundDesc: "\u5728 PDF \u4E2D\u4FDD\u7559\u80CC\u666F\u989C\u8272\u548C\u80CC\u666F\u56FE\u7247",
          scaleName: "\u7F29\u653E\u6BD4\u4F8B",
          scaleDesc: "\u8BBE\u7F6E\u9875\u9762\u5185\u5BB9\u7684\u7F29\u653E\u6BD4\u4F8B\uFF080.1\u20132.0\uFF09",
          pageSizeName: "\u9875\u9762\u5C3A\u5BF8",
          pageSizeDesc: "\u8BBE\u7F6E PDF \u4F7F\u7528\u7684\u7EB8\u5F20\u5C3A\u5BF8",
          marginTopName: "\u4E0A\u8FB9\u8DDD",
          marginBottomName: "\u4E0B\u8FB9\u8DDD",
          marginLeftName: "\u5DE6\u8FB9\u8DDD",
          marginRightName: "\u53F3\u8FB9\u8DDD",
          marginDesc: "\u9875\u9762\u8FB9\u8DDD\uFF0C\u5355\u4F4D\u4E3A\u82F1\u5BF8",
          preferCssPageSizeName: "\u4F18\u5148\u4F7F\u7528 CSS \u9875\u9762\u5C3A\u5BF8",
          preferCssPageSizeDesc: "\u4F18\u5148\u91C7\u7528 CSS @page \u5B9A\u4E49\u7684\u5C3A\u5BF8\uFF0C\u800C\u4E0D\u662F\u4E0A\u9762\u7684\u9875\u9762\u5C3A\u5BF8",
          resetName: "\u91CD\u7F6E PDF \u8BBE\u7F6E",
          resetDesc: "\u5C06\u6240\u6709 PDF \u5BFC\u51FA\u9009\u9879\u6062\u590D\u4E3A\u9ED8\u8BA4\u503C",
          resetButton: "\u91CD\u7F6E"
        }
      },
      {
        value: "en",
        label: "English",
        commandName: "Export Read-view PDF",
        ribbonTitle: "Export current reading view as PDF",
        settingsText: {
          languageName: "Language",
          languageDesc: "Interface language for plugin.",
          outputSection: "Output",
          outputDirectoryName: "Output path",
          outputDirectoryDesc: "PDF directory; system paths are allowed. Leave empty for the vault root.",
          outputDirectoryPlaceholder: "Vault root",
          outputDirectoryReset: "Reset",
          pdfSection: "PDF export",
          landscapeName: "Landscape",
          landscapeDesc: "Use landscape page orientation.",
          displayHeaderFooterName: "Display headers and footers",
          displayHeaderFooterDesc: "Display custom headers and footers in the PDF.",
          printBackgroundName: "Print background",
          printBackgroundDesc: "Preserve background colors and images in the PDF.",
          scaleName: "Scale",
          scaleDesc: "Set the page content scale (0.1\u20132.0).",
          pageSizeName: "Page size",
          pageSizeDesc: "Set the paper size used by the PDF.",
          marginTopName: "Top margin",
          marginBottomName: "Bottom margin",
          marginLeftName: "Left margin",
          marginRightName: "Right margin",
          marginDesc: "Page margin in inches.",
          preferCssPageSizeName: "Prefer CSS page size",
          preferCssPageSizeDesc: "Prefer the size defined by CSS @page over the paper size above.",
          resetName: "Reset PDF settings",
          resetDesc: "Restore every PDF export option to its default value.",
          resetButton: "Reset"
        }
      }
    ];
    var PDF_PAGE_SIZES = ["A3", "A4", "A5", "Legal", "Letter", "Tabloid"];
    var PDF_MARGIN_MINIMUM = 0.1;
    var PDF_MARGIN_MAXIMUM = 2;
    var PDF_MARGIN_STEP = 0.1;
    var DEFAULT_PDF_OPTIONS = {
      landscape: false,
      displayHeaderFooter: false,
      printBackground: true,
      scale: 1,
      pageSize: "A4",
      margins: { top: 0.4, bottom: 0.4, left: 0.4, right: 0.4 },
      preferCSSPageSize: false,
      generateTaggedPDF: true,
      generateDocumentOutline: true
    };
    var PdfOptions = class {
      static normalize(value) {
        const options = value && typeof value === "object" ? value : {};
        const margins = options.margins && typeof options.margins === "object" ? options.margins : {};
        return {
          landscape: this.booleanOrDefault(options.landscape, DEFAULT_PDF_OPTIONS.landscape),
          displayHeaderFooter: this.booleanOrDefault(
            options.displayHeaderFooter,
            DEFAULT_PDF_OPTIONS.displayHeaderFooter
          ),
          printBackground: this.booleanOrDefault(
            options.printBackground,
            DEFAULT_PDF_OPTIONS.printBackground
          ),
          scale: this.numberOrDefault(options.scale, DEFAULT_PDF_OPTIONS.scale, 0.1, 2),
          pageSize: PDF_PAGE_SIZES.includes(options.pageSize) ? options.pageSize : DEFAULT_PDF_OPTIONS.pageSize,
          margins: {
            top: this.numberOrDefault(margins.top, DEFAULT_PDF_OPTIONS.margins.top),
            bottom: this.numberOrDefault(margins.bottom, DEFAULT_PDF_OPTIONS.margins.bottom),
            left: this.numberOrDefault(margins.left, DEFAULT_PDF_OPTIONS.margins.left),
            right: this.numberOrDefault(margins.right, DEFAULT_PDF_OPTIONS.margins.right)
          },
          preferCSSPageSize: this.booleanOrDefault(
            options.preferCSSPageSize,
            DEFAULT_PDF_OPTIONS.preferCSSPageSize
          ),
          generateTaggedPDF: this.booleanOrDefault(
            options.generateTaggedPDF,
            DEFAULT_PDF_OPTIONS.generateTaggedPDF
          ),
          generateDocumentOutline: this.booleanOrDefault(
            options.generateDocumentOutline,
            DEFAULT_PDF_OPTIONS.generateDocumentOutline
          )
        };
      }
      static clone(value) {
        return this.normalize(value);
      }
      static booleanOrDefault(value, defaultValue) {
        return typeof value === "boolean" ? value : defaultValue;
      }
      static numberOrDefault(value, defaultValue, minimum = -Infinity, maximum = Infinity) {
        return typeof value === "number" && Number.isFinite(value) && value >= minimum && value <= maximum ? value : defaultValue;
      }
    };
    var ExportReadViewPdfSettings2 = class {
      constructor(plugin, onLanguageChanged) {
        this.plugin = plugin;
        this.onLanguageChanged = onLanguageChanged || (() => {
        });
        this.value = null;
      }
      get uiText() {
        const language = this.value && this.value.language;
        return LANGUAGE_OPTIONS.find((option) => option.value === language) || LANGUAGE_OPTIONS[0];
      }
      async load() {
        const savedData = await this.plugin.loadData();
        const saved = savedData && typeof savedData === "object" ? savedData : {};
        const language = LANGUAGE_OPTIONS.some((option) => option.value === saved.language) ? saved.language : LANGUAGE_OPTIONS[0].value;
        this.value = {
          language,
          outputDirectory: typeof saved.outputDirectory === "string" ? saved.outputDirectory.trim() : "",
          pdfOptions: PdfOptions.normalize(saved.pdfOptions)
        };
        return this.value;
      }
      async setLanguage(language) {
        if (!LANGUAGE_OPTIONS.some((option) => option.value === language)) return;
        this.value.language = language;
        await this.save();
        this.onLanguageChanged();
      }
      async setPdfOptions(pdfOptions) {
        this.value.pdfOptions = PdfOptions.normalize(pdfOptions);
        await this.save();
      }
      async resetPdfOptions() {
        await this.setPdfOptions(DEFAULT_PDF_OPTIONS);
      }
      async setOutputDirectory(outputDirectory) {
        this.value.outputDirectory = String(outputDirectory || "").trim();
        await this.save();
      }
      async resetOutputDirectory() {
        await this.setOutputDirectory("");
      }
      async save() {
        try {
          await this.plugin.saveData(this.value);
        } catch (saveError) {
          try {
            await this.load();
            this.onLanguageChanged();
          } catch (loadError) {
            console.error(
              "export-readview-pdf: failed to reload settings after save failure",
              loadError
            );
          }
          throw saveError;
        }
      }
    };
    var ExportReadViewPdfSettingTab2 = class extends PluginSettingTab {
      constructor(app, settings) {
        super(app, settings.plugin);
        this.settings = settings;
      }
      display() {
        this.containerEl.empty();
        const text = this.settings.uiText.settingsText;
        const value = this.settings.value;
        new Setting(this.containerEl).setName(text.languageName).setDesc(text.languageDesc).addDropdown((dropdown) => {
          for (const option of LANGUAGE_OPTIONS) dropdown.addOption(option.value, option.label);
          dropdown.setValue(value.language).onChange(async (language) => {
            try {
              await this.settings.setLanguage(language);
            } finally {
              this.display();
            }
          });
        });
        this.containerEl.createEl("h2", { text: text.outputSection });
        new Setting(this.containerEl).setName(text.outputDirectoryName).setDesc(text.outputDirectoryDesc).addText((input) => {
          input.setPlaceholder(text.outputDirectoryPlaceholder).setValue(value.outputDirectory).onChange(async (directory) => this.settings.setOutputDirectory(directory));
        }).addButton((button) => {
          button.setButtonText(text.outputDirectoryReset).onClick(async () => {
            button.setDisabled(true);
            try {
              await this.settings.resetOutputDirectory();
            } finally {
              this.display();
            }
          });
        });
        this.containerEl.createEl("h2", { text: text.pdfSection });
        this.addToggle("landscape", text.landscapeName, text.landscapeDesc);
        this.addToggle("displayHeaderFooter", text.displayHeaderFooterName, text.displayHeaderFooterDesc);
        this.addToggle("printBackground", text.printBackgroundName, text.printBackgroundDesc);
        const scaleSetting = new Setting(this.containerEl).setName(text.scaleName).setDesc(text.scaleDesc);
        scaleSetting.addSlider((slider) => {
          slider.setLimits(0.1, 2, 0.1).setValue(value.pdfOptions.scale);
          if (typeof slider.setDynamicTooltip === "function") slider.setDynamicTooltip();
          const updateValue = this.addVisibleSliderValue(
            scaleSetting,
            slider,
            value.pdfOptions.scale,
            (scale) => `${scale.toFixed(1)}x`
          );
          slider.onChange(async (scale) => {
            updateValue(scale);
            await this.updatePdfOption("scale", scale);
          });
        });
        new Setting(this.containerEl).setName(text.pageSizeName).setDesc(text.pageSizeDesc).addDropdown((dropdown) => {
          for (const size of PDF_PAGE_SIZES) dropdown.addOption(size, size);
          dropdown.setValue(value.pdfOptions.pageSize).onChange(async (size) => this.updatePdfOption("pageSize", size));
        });
        this.addMargin("top", text.marginTopName, text.marginDesc);
        this.addMargin("bottom", text.marginBottomName, text.marginDesc);
        this.addMargin("left", text.marginLeftName, text.marginDesc);
        this.addMargin("right", text.marginRightName, text.marginDesc);
        this.addToggle("preferCSSPageSize", text.preferCssPageSizeName, text.preferCssPageSizeDesc);
        new Setting(this.containerEl).setName(text.resetName).setDesc(text.resetDesc).addButton((button) => {
          button.setButtonText(text.resetButton).onClick(async () => {
            button.setDisabled(true);
            try {
              await this.settings.resetPdfOptions();
            } finally {
              this.display();
            }
          });
        });
      }
      addToggle(name, label, description) {
        new Setting(this.containerEl).setName(label).setDesc(description).addToggle((toggle) => {
          toggle.setValue(this.settings.value.pdfOptions[name]).onChange(async (enabled) => this.updatePdfOption(name, enabled));
        });
      }
      addMargin(side, label, description) {
        const marginSetting = new Setting(this.containerEl).setName(label).setDesc(description);
        marginSetting.addSlider((slider) => {
          slider.setLimits(PDF_MARGIN_MINIMUM, PDF_MARGIN_MAXIMUM, PDF_MARGIN_STEP).setValue(this.settings.value.pdfOptions.margins[side]);
          if (typeof slider.setDynamicTooltip === "function") slider.setDynamicTooltip();
          const updateValue = this.addVisibleSliderValue(
            marginSetting,
            slider,
            this.settings.value.pdfOptions.margins[side],
            (margin) => `${margin.toFixed(1)}`
          );
          slider.onChange(async (margin) => {
            updateValue(margin);
            const options = PdfOptions.normalize(this.settings.value.pdfOptions);
            options.margins[side] = margin;
            await this.settings.setPdfOptions(options);
          });
        });
      }
      addVisibleSliderValue(setting, slider, initialValue, formatter) {
        const valueEl = setting.controlEl.createEl("output", {
          cls: "export-readview-pdf-slider-value"
        });
        slider.sliderEl.before(valueEl);
        valueEl.style.display = "inline-block";
        valueEl.style.fontVariantNumeric = "tabular-nums";
        valueEl.style.minWidth = "4.5em";
        valueEl.style.textAlign = "right";
        valueEl.style.whiteSpace = "nowrap";
        const update = (value) => {
          const formatted = formatter(value);
          valueEl.value = formatted;
          valueEl.setText(formatted);
          slider.sliderEl.setAttribute("aria-valuetext", formatted);
        };
        update(initialValue);
        return update;
      }
      async updatePdfOption(name, value) {
        const options = PdfOptions.normalize(this.settings.value.pdfOptions);
        options[name] = value;
        await this.settings.setPdfOptions(options);
      }
    };
    module2.exports = {
      DEFAULT_PDF_OPTIONS,
      ExportReadViewPdfSettingTab: ExportReadViewPdfSettingTab2,
      LANGUAGE_OPTIONS,
      PdfOptions,
      PdfOptionsUtils: PdfOptions,
      ExportReadViewPdfSettings: ExportReadViewPdfSettings2,
      PluginSettings: ExportReadViewPdfSettings2
    };
  }
});

// src/snapshot.js
var require_snapshot = __commonJS({
  "src/snapshot.js"(exports2, module2) {
    "use strict";
    var RENDERER_READY_TIMEOUT_MS = 2e4;
    var DOM_QUIET_MS = 800;
    var DOM_SETTLE_TIMEOUT_MS = 12e4;
    var EXPORT_LAYOUT_CSS = `
html {
    height: auto !important;
    min-height: 100%;
    overflow: visible !important;
    background: var(--background-primary, #ffffff);
}

body.export-readview-document {
    height: auto !important;
    min-height: 100vh;
    margin: 0 !important;
    overflow: visible !important;
    contain: none !important;
    background: var(--background-primary, #ffffff);
    color: var(--text-normal, #1f1f1f);
}

body.export-readview-document .export-readview-root {
    position: relative !important;
    inset: auto !important;
    box-sizing: border-box;
    width: 100% !important;
    height: auto !important;
    min-height: 100vh !important;
    max-height: none !important;
    overflow: visible !important;
    scroll-behavior: auto !important;
}

body.export-readview-document .export-readview-context {
    display: contents !important;
}

.export-readview-root .markdown-preview-view {
    position: relative !important;
    width: 100% !important;
    height: auto !important;
    min-height: 0 !important;
    max-height: none !important;
    overflow: visible !important;
    scrollbar-gutter: auto !important;
}

.export-readview-root .markdown-preview-sizer {
    min-height: 0 !important;
    margin-right: auto !important;
    margin-left: auto !important;
    padding-bottom: 4rem !important;
}

.export-readview-root .markdown-preview-pusher {
    display: none !important;
}

.export-readview-root,
.export-readview-root * {
    animation-play-state: paused !important;
    transition-delay: 0s !important;
    transition-duration: 0s !important;
}

.export-readview-canvas {
    display: block;
    max-width: 100%;
}

@media print {
    html,
    body.export-readview-document {
        height: auto !important;
        min-height: 0 !important;
        overflow: visible !important;
        contain: none !important;
        background: var(--background-primary, #ffffff) !important;
        print-color-adjust: exact;
        -webkit-print-color-adjust: exact;
    }

    body.export-readview-document .export-readview-root {
        min-height: 0 !important;
    }

    .export-readview-root .markdown-preview-sizer {
        padding-bottom: 0 !important;
    }

    .export-readview-root h1,
    .export-readview-root h2,
    .export-readview-root h3,
    .export-readview-root h4,
    .export-readview-root h5,
    .export-readview-root h6 {
        break-after: avoid-page;
    }

    .export-readview-root .el-p,
    .export-readview-root pre,
    .export-readview-root table,
    .export-readview-root .callout {
        break-inside: avoid-page;
    }
}
`;
    var ReadingViewMaterializer = class _ReadingViewMaterializer {
      static getReadingContainer(view) {
        const previewContainer = view.previewMode && view.previewMode.containerEl;
        if (previewContainer && previewContainer.nodeType === 1) {
          return previewContainer;
        }
        return view.contentEl.querySelector(".markdown-preview-view");
      }
      constructor(app, view, sourceRoot) {
        this.app = app;
        this.view = view;
        this.sourceRoot = sourceRoot;
        this.renderer = view.previewMode && view.previewMode.renderer;
        this.host = null;
        this.root = null;
        this.cleaned = false;
      }
      async materialize() {
        this.assertActive();
        const renderer = this.renderer;
        if (!renderer || !Array.isArray(renderer.sections) || !renderer.sizerEl || !renderer.previewEl) {
          throw new Error("This Obsidian version does not expose the complete Reading view renderer");
        }
        await this.waitForRendererReady();
        this.assertActive();
        if (typeof renderer.updateShownSections === "function") {
          renderer.updateShownSections();
        }
        const sections = renderer.sections.filter((section) => section && section.el && section.rendered && section.shown !== false);
        if (sections.length === 0) {
          throw new Error("The complete Reading view renderer contains no visible sections");
        }
        const doc = this.sourceRoot.ownerDocument;
        this.root = this.createMaterializedRoot(sections, doc);
        this.host = doc.createElement("div");
        this.host.className = "export-readview-materializer";
        const previewWidth = Math.max(
          320,
          Math.ceil(renderer.previewEl.getBoundingClientRect().width || renderer.previewEl.clientWidth || 0)
        );
        this.host.style.setProperty("position", "fixed", "important");
        this.host.style.setProperty("top", "0", "important");
        this.host.style.setProperty("left", "-100000px", "important");
        this.host.style.setProperty("width", `${previewWidth}px`, "important");
        this.host.style.setProperty("height", "auto", "important");
        this.host.style.setProperty("max-height", "none", "important");
        this.host.style.setProperty("overflow", "visible", "important");
        this.host.style.setProperty("opacity", "0", "important");
        this.host.style.setProperty("pointer-events", "none", "important");
        this.host.style.setProperty("z-index", "-2147483647", "important");
        this.host.appendChild(this.root);
        try {
          this.assertActive();
          this.sourceRoot.appendChild(this.host);
          await this.waitForInjectedContent(this.root);
          if (!this.root.isConnected) {
            throw new Error("The Reading view was closed while it was being materialized");
          }
          return this.root;
        } catch (error) {
          this.dispose();
          throw error;
        }
      }
      dispose() {
        if (this.cleaned) return;
        this.cleaned = true;
        const host = this.host;
        this.host = null;
        this.root = null;
        if (host) {
          try {
            host.remove();
          } catch (error) {
            console.warn("export-readview-pdf: failed to remove materialized view", error);
          }
        }
      }
      assertActive() {
        if (this.cleaned) {
          throw new Error("Reading-view export was cancelled");
        }
      }
      async waitForRendererReady() {
        if (!this.rendererIsReady() && typeof this.renderer.queueRender === "function") {
          this.renderer.queueRender();
        }
        const ready = await this.waitForCondition(
          () => this.rendererIsReady(),
          RENDERER_READY_TIMEOUT_MS,
          50
        );
        if (!ready) {
          throw new Error("Timed out while waiting for Obsidian to render every Reading view section");
        }
      }
      rendererIsReady() {
        const renderer = this.renderer;
        return Array.isArray(renderer.sections) && renderer.sections.length > 0 && renderer.sections.every((section) => section && section.rendered) && !renderer.queued && !renderer.parsing && !renderer.rendered && (!Array.isArray(renderer.asyncSections) || renderer.asyncSections.length === 0);
      }
      createMaterializedRoot(sections, doc) {
        const root = this.sourceRoot.cloneNode(true);
        DomSnapshotUtils.syncLiveElementState(this.sourceRoot, root);
        const preview = root.querySelector(":scope > .markdown-preview-view") || root.querySelector(".markdown-preview-view");
        const sizer = preview && (preview.querySelector(":scope > .markdown-preview-sizer") || preview.querySelector(".markdown-preview-sizer"));
        if (!preview || !sizer) {
          throw new Error("Could not locate the Reading view section container");
        }
        const sectionClones = sections.map((section) => this.cloneRenderedElement(section.el, doc));
        const pusher = this.renderer.pusherEl ? this.renderer.pusherEl.cloneNode(true) : doc.createElement("div");
        pusher.classList.add("markdown-preview-pusher");
        pusher.style.marginBottom = "0";
        sizer.replaceChildren(pusher, ...sectionClones);
        root.dataset.exportReadviewSections = String(sectionClones.length);
        root.style.setProperty("height", "auto", "important");
        root.style.setProperty("max-height", "none", "important");
        root.style.setProperty("overflow", "visible", "important");
        preview.style.setProperty("height", "auto", "important");
        preview.style.setProperty("min-height", "0", "important");
        preview.style.setProperty("max-height", "none", "important");
        preview.style.setProperty("overflow", "visible", "important");
        sizer.style.setProperty("min-height", "0", "important");
        sizer.style.setProperty("padding-bottom", "0", "important");
        return root;
      }
      cloneRenderedElement(source, doc) {
        const clone = source.cloneNode(true);
        DomSnapshotUtils.syncLiveElementState(source, clone);
        DomSnapshotUtils.snapshotCanvases(source, clone, doc);
        DomSnapshotUtils.copyOpenShadowRoots(source, clone);
        return clone;
      }
      async waitForInjectedContent(root) {
        const startedAt = Date.now();
        let lastMutationAt = startedAt;
        let observedBusyState = false;
        const MutationObserverClass = root.ownerDocument.defaultView.MutationObserver;
        const observer = new MutationObserverClass(() => {
          lastMutationAt = Date.now();
        });
        observer.observe(root, {
          attributes: true,
          characterData: true,
          childList: true,
          subtree: true
        });
        try {
          while (true) {
            if (this.cleaned) {
              throw new Error("Reading-view export was cancelled");
            }
            const now = Date.now();
            const busy = this.isInjectedContentBusy(root);
            observedBusyState = observedBusyState || busy;
            if (!busy && now - lastMutationAt >= DOM_QUIET_MS && now - startedAt >= DOM_QUIET_MS) {
              return;
            }
            const timeout = observedBusyState ? DOM_SETTLE_TIMEOUT_MS : 5e3;
            if (now - startedAt >= timeout) {
              if (busy) {
                throw new Error("Timed out while waiting for reading-view plugins to finish rendering");
              }
              return;
            }
            await _ReadingViewMaterializer.waitMs(100);
          }
        } finally {
          observer.disconnect();
        }
      }
      isInjectedContentBusy(root) {
        if (root.querySelector('.it-loading, [aria-busy="true"]')) {
          return true;
        }
        try {
          const manager = this.app.plugins;
          const interlinear = manager && (typeof manager.getPlugin === "function" && manager.getPlugin("interlinear") || manager.plugins && manager.plugins.interlinear);
          const controller = interlinear && interlinear.controller;
          return Boolean(
            controller && typeof controller.isBusy === "function" && controller.isBusy(this.view.file.path)
          );
        } catch (_error) {
          return false;
        }
      }
      async waitForCondition(predicate, timeoutMs, intervalMs) {
        const startedAt = Date.now();
        while (Date.now() - startedAt < timeoutMs) {
          this.assertActive();
          if (predicate()) return true;
          await _ReadingViewMaterializer.waitMs(intervalMs);
        }
        this.assertActive();
        return predicate();
      }
      static waitMs(milliseconds) {
        return new Promise((resolve) => window.setTimeout(resolve, milliseconds));
      }
    };
    var HtmlSnapshotBuilder = class {
      constructor(sourceRoot, sourcePath, title, contextSourceRoot = sourceRoot, pluginVersion = "0.4.0") {
        this.sourceRoot = sourceRoot;
        this.sourcePath = sourcePath;
        this.title = title;
        this.contextSourceRoot = contextSourceRoot;
        this.pluginVersion = pluginVersion;
      }
      async build() {
        const sourceRoot = this.sourceRoot;
        const doc = sourceRoot.ownerDocument;
        const win = doc.defaultView;
        const clone = sourceRoot.cloneNode(true);
        clone.classList.add("export-readview-root");
        clone.removeAttribute("tabindex");
        DomSnapshotUtils.syncLiveElementState(sourceRoot, clone);
        StyleSnapshotUtils.copyCustomProperties(sourceRoot, clone, win);
        const styleText = [
          StyleSnapshotUtils.collectDocumentStyles(doc),
          StyleSnapshotUtils.customPropertyRule(doc.documentElement, ":root", win),
          StyleSnapshotUtils.customPropertyRule(doc.body, "body.export-readview-document", win),
          EXPORT_LAYOUT_CSS
        ].filter(Boolean).join("\n\n");
        const htmlAttributes = HtmlSerializationUtils.serializeDocumentAttributes(doc.documentElement);
        const bodyAttributes = HtmlSerializationUtils.serializeDocumentAttributes(
          doc.body,
          "export-readview-document"
        );
        const languageElement = sourceRoot.closest("[lang]");
        const language = (languageElement ? languageElement.getAttribute("lang") : "") || doc.documentElement.lang;
        const generatedAt = (/* @__PURE__ */ new Date()).toISOString();
        const imageResult = await ImageSnapshotUtils.inlineRenderedImages(sourceRoot, clone, win);
        DomSnapshotUtils.snapshotCanvases(sourceRoot, clone, doc);
        DomSnapshotUtils.copyOpenShadowRoots(sourceRoot, clone);
        const snapshotTree = DomSnapshotUtils.wrapInAncestorContext(this.contextSourceRoot, clone);
        DomSnapshotUtils.sanitizeSnapshot(snapshotTree);
        if (language && !doc.documentElement.hasAttribute("lang")) {
          clone.setAttribute("lang", language);
        }
        const html = `<!DOCTYPE html>
<html${htmlAttributes}>
<head>
    <meta charset="utf-8">
    <base href="${HtmlSerializationUtils.escapeAttribute(doc.baseURI)}">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="generator" content="export-readview-pdf ${this.pluginVersion}">
    <meta name="obsidian-source-path" content="${HtmlSerializationUtils.escapeAttribute(this.sourcePath)}">
    <meta name="exported-at" content="${HtmlSerializationUtils.escapeAttribute(generatedAt)}">
    <title>${HtmlSerializationUtils.escapeText(this.title)}</title>
    <style>
${HtmlSerializationUtils.escapeStyleText(styleText)}
    </style>
</head>
<body${bodyAttributes}>
${snapshotTree.outerHTML}
</body>
</html>
`;
        return {
          html,
          unembeddedLocalImages: imageResult.failed
        };
      }
    };
    var DomSnapshotUtils = class {
      static wrapInAncestorContext(sourceRoot, cloneRoot) {
        let sourceParent = sourceRoot.parentElement;
        let tree = cloneRoot;
        while (sourceParent && sourceParent !== sourceRoot.ownerDocument.body) {
          const wrapper = sourceParent.cloneNode(false);
          wrapper.removeAttribute("id");
          wrapper.classList.add("export-readview-context");
          wrapper.appendChild(tree);
          tree = wrapper;
          sourceParent = sourceParent.parentElement;
        }
        return tree;
      }
      static copyOpenShadowRoots(sourceRoot, cloneRoot) {
        const sourceElements = [sourceRoot, ...sourceRoot.querySelectorAll("*")];
        const cloneElements = [cloneRoot, ...cloneRoot.querySelectorAll("*")];
        const count = Math.min(sourceElements.length, cloneElements.length);
        for (let index = 0; index < count; index += 1) {
          const source = sourceElements[index];
          const shadowRoot = source.shadowRoot;
          if (!shadowRoot || shadowRoot.mode !== "open") {
            continue;
          }
          const template = cloneRoot.ownerDocument.createElement("template");
          template.setAttribute("shadowrootmode", "open");
          template.innerHTML = shadowRoot.innerHTML;
          cloneElements[index].insertBefore(template, cloneElements[index].firstChild);
        }
      }
      static syncLiveElementState(sourceRoot, cloneRoot) {
        this.forEachElementPair(sourceRoot, cloneRoot, "input", (source, clone) => {
          clone.setAttribute("value", source.value);
          this.syncBooleanAttribute(clone, "checked", source.checked);
          if (source.indeterminate) {
            clone.setAttribute("aria-checked", "mixed");
          }
        });
        this.forEachElementPair(sourceRoot, cloneRoot, "textarea", (source, clone) => {
          clone.textContent = source.value;
        });
        this.forEachElementPair(sourceRoot, cloneRoot, "option", (source, clone) => {
          this.syncBooleanAttribute(clone, "selected", source.selected);
        });
        this.forEachElementPair(sourceRoot, cloneRoot, "details", (source, clone) => {
          this.syncBooleanAttribute(clone, "open", source.open);
        });
        this.forEachElementPair(sourceRoot, cloneRoot, "dialog", (source, clone) => {
          this.syncBooleanAttribute(clone, "open", source.open);
        });
        this.forEachElementPair(sourceRoot, cloneRoot, "progress, meter", (source, clone) => {
          clone.setAttribute("value", String(source.value));
        });
      }
      static forEachElementPair(sourceRoot, cloneRoot, selector, callback) {
        const sourceElements = sourceRoot.querySelectorAll(selector);
        const cloneElements = cloneRoot.querySelectorAll(selector);
        const count = Math.min(sourceElements.length, cloneElements.length);
        for (let index = 0; index < count; index += 1) {
          callback(sourceElements[index], cloneElements[index]);
        }
      }
      static syncBooleanAttribute(element, name, enabled) {
        if (enabled) {
          element.setAttribute(name, "");
        } else {
          element.removeAttribute(name);
        }
      }
      static snapshotCanvases(sourceRoot, cloneRoot, doc) {
        const sourceCanvases = sourceRoot.querySelectorAll("canvas");
        const cloneCanvases = cloneRoot.querySelectorAll("canvas");
        const count = Math.min(sourceCanvases.length, cloneCanvases.length);
        for (let index = 0; index < count; index += 1) {
          const source = sourceCanvases[index];
          const clone = cloneCanvases[index];
          try {
            const image = doc.createElement("img");
            for (const attribute of Array.from(clone.attributes)) {
              image.setAttribute(attribute.name, attribute.value);
            }
            image.classList.add("export-readview-canvas");
            image.setAttribute("src", source.toDataURL("image/png"));
            image.setAttribute("width", String(source.width));
            image.setAttribute("height", String(source.height));
            image.setAttribute("alt", image.getAttribute("aria-label") || "Canvas snapshot");
            clone.replaceWith(image);
          } catch (error) {
            console.warn("export-readview-pdf: could not snapshot canvas", error);
          }
        }
      }
      static sanitizeSnapshot(root) {
        this.sanitizeNodeTree(root);
        for (const template of root.querySelectorAll("template[shadowrootmode]")) {
          this.sanitizeNodeTree(template.content);
        }
      }
      static sanitizeNodeTree(root) {
        for (const script of root.querySelectorAll("script")) {
          script.remove();
        }
        const elements = root.nodeType === 1 ? [root, ...root.querySelectorAll("*")] : [...root.querySelectorAll("*")];
        for (const element of elements) {
          for (const attribute of Array.from(element.attributes)) {
            const name = attribute.name.toLowerCase();
            const value = attribute.value.trim().toLowerCase();
            if (name.startsWith("on") || name === "nonce") {
              element.removeAttribute(attribute.name);
            } else if ((name === "href" || name === "src") && value.startsWith("javascript:")) {
              element.removeAttribute(attribute.name);
            }
          }
          if (element.hasAttribute("contenteditable")) {
            element.setAttribute("contenteditable", "false");
          }
        }
      }
    };
    var StyleSnapshotUtils = class {
      static copyCustomProperties(source, clone, win) {
        if (!win || typeof win.getComputedStyle !== "function") {
          return;
        }
        let computed;
        try {
          computed = win.getComputedStyle(source);
        } catch (_error) {
          return;
        }
        for (let index = 0; index < computed.length; index += 1) {
          const property = computed.item(index);
          if (property.startsWith("--")) {
            clone.style.setProperty(property, computed.getPropertyValue(property));
          }
        }
      }
      static customPropertyRule(element, selector, win) {
        if (!element || !win || typeof win.getComputedStyle !== "function") {
          return "";
        }
        let computed;
        try {
          computed = win.getComputedStyle(element);
        } catch (_error) {
          return "";
        }
        const declarations = [];
        for (let index = 0; index < computed.length; index += 1) {
          const property = computed.item(index);
          if (!property.startsWith("--")) {
            continue;
          }
          const value = computed.getPropertyValue(property);
          if (value) {
            declarations.push(`  ${property}: ${value};`);
          }
        }
        return declarations.length > 0 ? `${selector} {
${declarations.join("\n")}
}` : "";
      }
      static collectDocumentStyles(doc) {
        const sheets = [];
        const seen = /* @__PURE__ */ new Set();
        for (const sheet of Array.from(doc.styleSheets || [])) {
          sheets.push(sheet);
          seen.add(sheet);
        }
        for (const sheet of Array.from(doc.adoptedStyleSheets || [])) {
          if (!seen.has(sheet)) {
            sheets.push(sheet);
          }
        }
        return sheets.map((sheet) => this.serializeStyleSheet(sheet)).filter(Boolean).join("\n\n");
      }
      static serializeStyleSheet(sheet) {
        if (sheet.disabled) {
          return "";
        }
        let css = "";
        try {
          css = Array.from(sheet.cssRules || [], (rule) => rule.cssText).join("\n");
        } catch (_error) {
          const owner = sheet.ownerNode;
          if (owner && owner.tagName === "STYLE") {
            css = owner.textContent || "";
          } else if (sheet.href) {
            css = `@import url(${JSON.stringify(sheet.href)});`;
          }
        }
        if (!css) {
          return "";
        }
        const media = sheet.media && sheet.media.mediaText;
        if (media && media !== "all") {
          return `@media ${media} {
${css}
}`;
        }
        return css;
      }
    };
    var ImageSnapshotUtils = class {
      static async inlineRenderedImages(sourceRoot, cloneRoot, win) {
        const sourceImages = sourceRoot.querySelectorAll("img");
        const cloneImages = cloneRoot.querySelectorAll("img");
        const count = Math.min(sourceImages.length, cloneImages.length);
        let failed = 0;
        for (let index = 0; index < count; index += 1) {
          const source = sourceImages[index];
          const clone = cloneImages[index];
          const sourceUrl = source.currentSrc || source.src;
          if (!sourceUrl) {
            continue;
          }
          clone.setAttribute("src", sourceUrl);
          clone.removeAttribute("srcset");
          clone.removeAttribute("sizes");
          clone.setAttribute("loading", "eager");
          if (!this.shouldInlineUrl(sourceUrl, win)) {
            continue;
          }
          try {
            clone.setAttribute("src", await this.resourceToDataUrl(sourceUrl, win));
          } catch (fetchError) {
            try {
              clone.setAttribute("src", this.renderedImageToDataUrl(source, win));
            } catch (canvasError) {
              failed += 1;
              console.warn(
                "export-readview-pdf: could not embed image",
                sourceUrl,
                fetchError,
                canvasError
              );
            }
          }
        }
        return { failed };
      }
      static shouldInlineUrl(sourceUrl, win) {
        let url;
        try {
          url = new URL(sourceUrl, win && win.document ? win.document.baseURI : void 0);
        } catch (_error) {
          return true;
        }
        if (url.protocol === "data:") {
          return false;
        }
        if (["app:", "file:", "blob:", "capacitor:"].includes(url.protocol)) {
          return true;
        }
        return Boolean(win && win.location && url.origin === win.location.origin);
      }
      static async resourceToDataUrl(sourceUrl, win) {
        const fetchFunction = win && typeof win.fetch === "function" ? win.fetch.bind(win) : globalThis.fetch.bind(globalThis);
        const response = await fetchFunction(sourceUrl);
        if (!response.ok && response.status !== 0) {
          throw new Error(`HTTP ${response.status}`);
        }
        let blob = await response.blob();
        if (!blob.type) {
          const mimeType = this.imageMimeType(sourceUrl);
          if (mimeType) {
            const BlobClass = win && win.Blob ? win.Blob : globalThis.Blob;
            blob = new BlobClass([await blob.arrayBuffer()], { type: mimeType });
          }
        }
        return this.blobToDataUrl(blob, win);
      }
      static renderedImageToDataUrl(image, win) {
        if (!image.complete || image.naturalWidth === 0 || image.naturalHeight === 0) {
          throw new Error("The rendered image is not loaded");
        }
        const doc = win && win.document ? win.document : image.ownerDocument;
        const canvas = doc.createElement("canvas");
        canvas.width = image.naturalWidth;
        canvas.height = image.naturalHeight;
        const context = canvas.getContext("2d");
        if (!context) {
          throw new Error("A 2D canvas context is unavailable");
        }
        context.drawImage(image, 0, 0);
        return canvas.toDataURL("image/png");
      }
      static blobToDataUrl(blob, win) {
        const FileReaderClass = win && win.FileReader ? win.FileReader : globalThis.FileReader;
        return new Promise((resolve, reject) => {
          const reader = new FileReaderClass();
          reader.addEventListener("load", () => resolve(String(reader.result)));
          reader.addEventListener("error", () => reject(reader.error || new Error("FileReader failed")));
          reader.readAsDataURL(blob);
        });
      }
      static imageMimeType(sourceUrl) {
        let path = sourceUrl;
        try {
          path = new URL(sourceUrl).pathname;
        } catch (_error) {
        }
        const extension = path.split(".").pop().toLowerCase();
        return {
          avif: "image/avif",
          bmp: "image/bmp",
          gif: "image/gif",
          ico: "image/x-icon",
          jpeg: "image/jpeg",
          jpg: "image/jpeg",
          png: "image/png",
          svg: "image/svg+xml",
          webp: "image/webp"
        }[extension] || "";
      }
    };
    var HtmlSerializationUtils = class {
      static serializeDocumentAttributes(element, extraClass = "") {
        if (!element) {
          return extraClass ? ` class="${this.escapeAttribute(extraClass)}"` : "";
        }
        const attributes = [];
        const classes = new Set((element.getAttribute("class") || "").split(/\s+/).filter(Boolean));
        for (const className of extraClass.split(/\s+/).filter(Boolean)) {
          classes.add(className);
        }
        for (const attribute of Array.from(element.attributes)) {
          const name = attribute.name.toLowerCase();
          if (name === "class" || name.startsWith("on") || name === "nonce") {
            continue;
          }
          attributes.push(`${attribute.name}="${this.escapeAttribute(attribute.value)}"`);
        }
        if (classes.size > 0) {
          attributes.unshift(`class="${this.escapeAttribute(Array.from(classes).join(" "))}"`);
        }
        return attributes.length > 0 ? ` ${attributes.join(" ")}` : "";
      }
      static escapeText(value) {
        return String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
      }
      static escapeAttribute(value) {
        return this.escapeText(value).replaceAll('"', "&quot;");
      }
      static escapeStyleText(value) {
        return String(value).replace(/<\/style/gi, "<\\/style");
      }
    };
    module2.exports = {
      DomSnapshotUtils,
      HtmlSerializationUtils,
      HtmlSnapshotBuilder,
      ImageSnapshotUtils,
      ReadingViewMaterializer,
      StyleSnapshotUtils
    };
  }
});

// src/export.js
var require_export = __commonJS({
  "src/export.js"(exports2, module2) {
    "use strict";
    var fs = require("fs");
    var os = require("os");
    var path = require("path");
    var { PdfOptions } = require_settings();
    var { HtmlSnapshotBuilder, ReadingViewMaterializer } = require_snapshot();
    var EXPORT_FILE_SUFFIX = ".readview.pdf";
    var PDF_MINIMUM_MARGIN_INCHES = 0.1;
    var PDF_MAXIMUM_MARGIN_INCHES = 2;
    var PDF_HEADER_FOOTER_MINIMUM_MARGIN_INCHES = 0.5;
    var PDF_HEADER_TEMPLATE = `
<div style="
    box-sizing: border-box;
    color: #666;
    display: flex;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    font-size: 10px;
    gap: 12px;
    padding: 0 0.4in;
    width: 100%;
">
    <span class="date" style="flex: none;"></span>
    <span class="title" style="
        flex: 1;
        overflow: hidden;
        text-align: right;
        text-overflow: ellipsis;
        white-space: nowrap;
    "></span>
</div>`;
    var PDF_FOOTER_TEMPLATE = `
<div style="
    box-sizing: border-box;
    color: #666;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    font-size: 10px;
    padding: 0 0.4in;
    text-align: center;
    width: 100%;
">
    <span class="pageNumber"></span>/<span class="totalPages"></span>
</div>`;
    var PDF_FULL_WIDTH_STYLE = `
body.export-readview-document,
.export-readview-root,
.export-readview-root.markdown-preview-view,
.export-readview-root .markdown-preview-view,
.export-readview-root.markdown-preview-sizer,
.export-readview-root .markdown-preview-sizer,
.export-readview-root.markdown-preview-section,
.export-readview-root .markdown-preview-section {
    box-sizing: border-box !important;
    max-width: none !important;
    width: 100% !important;
}

body.export-readview-document,
.export-readview-root,
.export-readview-root.markdown-preview-view,
.export-readview-root .markdown-preview-view,
.export-readview-root.markdown-preview-sizer,
.export-readview-root .markdown-preview-sizer,
.export-readview-root.markdown-preview-section,
.export-readview-root .markdown-preview-section {
    margin-left: 0 !important;
    margin-right: 0 !important;
    padding-left: 0 !important;
    padding-right: 0 !important;
}`;
    var ExportReadViewPdfJob2 = class {
      constructor(app, pluginVersion) {
        this.app = app;
        this.pluginVersion = pluginVersion;
        this.pdfPrinter = new PdfPrinter();
        this.activeMaterializer = null;
      }
      getReadingContainer(view) {
        return ReadingViewMaterializer.getReadingContainer(view);
      }
      async run(view, settings) {
        const readingContainer = this.getReadingContainer(view);
        if (!readingContainer) {
          throw new Error("The active Reading view has not finished rendering yet");
        }
        let materializer = null;
        try {
          materializer = new ReadingViewMaterializer(this.app, view, readingContainer);
          this.activeMaterializer = materializer;
          const materializedRoot = await materializer.materialize();
          const snapshot = await new HtmlSnapshotBuilder(
            materializedRoot,
            view.file.path,
            view.file.basename,
            readingContainer,
            this.pluginVersion
          ).build();
          materializer.dispose();
          this.clearMaterializer(materializer);
          materializer = null;
          const pdfData = await this.pdfPrinter.render(
            snapshot.html,
            readingContainer.ownerDocument.defaultView,
            view.file.basename,
            settings.pdfOptions
          );
          const outputPath = await PdfOutputWriter.writePdf(
            this.app.vault,
            settings.outputDirectory,
            view.file.basename,
            pdfData
          );
          return {
            outputPath,
            unembeddedLocalImages: snapshot.unembeddedLocalImages
          };
        } finally {
          if (materializer) {
            materializer.dispose();
            this.clearMaterializer(materializer);
          }
        }
      }
      clearMaterializer(materializer) {
        if (this.activeMaterializer === materializer) {
          this.activeMaterializer = null;
        }
      }
      dispose() {
        if (this.activeMaterializer) {
          this.activeMaterializer.dispose();
          this.activeMaterializer = null;
        }
        this.pdfPrinter.dispose();
      }
    };
    var PdfPrinter = class _PdfPrinter {
      constructor() {
        this.printWindows = /* @__PURE__ */ new Set();
        this.disposed = false;
      }
      dispose() {
        this.disposed = true;
        for (const printWindow of this.printWindows) {
          this.destroyPrintWindow(printWindow);
        }
        this.printWindows.clear();
      }
      async render(html, sourceWindow, title, pdfOptions) {
        if (this.disposed) {
          throw new Error("The PDF printer is no longer available");
        }
        const blobUrl = this.createHtmlBlobUrl(html, sourceWindow);
        const printOptions = PdfOptions.normalize(pdfOptions);
        let printWindow = null;
        try {
          printWindow = this.createPrintWindow(sourceWindow, title);
          this.printWindows.add(printWindow);
          await printWindow.loadURL(blobUrl);
          if (!printOptions.preferCSSPageSize) {
            await this.clearReadableLineWidth(printWindow.webContents);
          }
          const layout = await this.waitForPrintableLayout(printWindow.webContents);
          if (!layout || layout.height < 1 || layout.textLength < 1) {
            throw new Error("The print window rendered an empty document");
          }
          for (const side of ["top", "bottom", "left", "right"]) {
            printOptions.margins[side] = Math.min(
              PDF_MAXIMUM_MARGIN_INCHES,
              Math.max(PDF_MINIMUM_MARGIN_INCHES, printOptions.margins[side])
            );
          }
          if (printOptions.displayHeaderFooter) {
            printOptions.headerTemplate = PDF_HEADER_TEMPLATE;
            printOptions.footerTemplate = PDF_FOOTER_TEMPLATE;
            printOptions.margins.top = Math.max(
              PDF_HEADER_FOOTER_MINIMUM_MARGIN_INCHES,
              printOptions.margins.top
            );
            printOptions.margins.bottom = Math.max(
              PDF_HEADER_FOOTER_MINIMUM_MARGIN_INCHES,
              printOptions.margins.bottom
            );
          }
          const pdfBuffer = await printWindow.webContents.printToPDF(printOptions);
          return _PdfPrinter.toVerifiedArrayBuffer(pdfBuffer);
        } finally {
          if (printWindow) {
            this.printWindows.delete(printWindow);
            this.destroyPrintWindow(printWindow);
          }
          this.revokeHtmlBlobUrl(blobUrl, sourceWindow);
        }
      }
      createHtmlBlobUrl(html, sourceWindow) {
        const BlobClass = sourceWindow && sourceWindow.Blob;
        const urlApi = sourceWindow && sourceWindow.URL;
        if (typeof BlobClass !== "function" || !urlApi || typeof urlApi.createObjectURL !== "function") {
          throw new Error("The Obsidian window does not expose the Blob URL API");
        }
        const blob = new BlobClass([html], { type: "text/html;charset=utf-8" });
        return urlApi.createObjectURL(blob);
      }
      async clearReadableLineWidth(webContents) {
        const styleText = JSON.stringify(PDF_FULL_WIDTH_STYLE);
        await webContents.executeJavaScript(`
            (() => {
                document.querySelectorAll(".is-readable-line-width").forEach((element) => {
                    element.classList.remove("is-readable-line-width");
                });

                document.documentElement.style.setProperty("--file-line-width", "100%");
                const existingStyle = document.getElementById("export-readview-full-width-style");
                if (existingStyle) existingStyle.remove();

                const style = document.createElement("style");
                style.id = "export-readview-full-width-style";
                style.textContent = ${styleText};
                document.head.appendChild(style);
            })();
        `);
      }
      revokeHtmlBlobUrl(blobUrl, sourceWindow) {
        try {
          const urlApi = sourceWindow && sourceWindow.URL;
          if (urlApi && typeof urlApi.revokeObjectURL === "function") {
            urlApi.revokeObjectURL(blobUrl);
          }
        } catch (error) {
          console.warn("export-readview-pdf: failed to revoke HTML Blob URL", error);
        }
      }
      createPrintWindow(sourceWindow, title) {
        const electron = sourceWindow && sourceWindow.electron;
        const remote = electron && electron.remote;
        let BrowserWindow = remote && remote.BrowserWindow;
        if (typeof BrowserWindow !== "function" && sourceWindow && typeof sourceWindow.require === "function") {
          try {
            BrowserWindow = sourceWindow.require("@electron/remote").BrowserWindow;
          } catch (_error) {
          }
        }
        if (typeof BrowserWindow !== "function") {
          throw new Error("Electron BrowserWindow is unavailable; restart Obsidian and try again");
        }
        let printWindow = null;
        try {
          printWindow = new BrowserWindow({
            title: `${title} - read-view PDF`,
            width: 900,
            height: 1200,
            show: false,
            frame: false,
            focusable: false,
            skipTaskbar: true,
            backgroundColor: "#ffffff",
            webPreferences: {
              backgroundThrottling: false,
              contextIsolation: true,
              devTools: false,
              javascript: true,
              nodeIntegration: false,
              sandbox: true,
              spellcheck: false
            }
          });
          printWindow.setMenuBarVisibility(false);
          printWindow.webContents.setZoomFactor(1);
          return printWindow;
        } catch (error) {
          if (printWindow) {
            this.destroyPrintWindow(printWindow);
          }
          throw error;
        }
      }
      async waitForPrintableLayout(webContents) {
        return webContents.executeJavaScript(`
            (() => {
                const delay = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));
                const images = Array.from(document.images);
                const waitForImage = (image) => {
                    if (image.complete) return Promise.resolve();
                    return Promise.race([
                        new Promise((resolve) => {
                            image.addEventListener("load", resolve, { once: true });
                            image.addEventListener("error", resolve, { once: true });
                        }),
                        delay(5000),
                    ]);
                };
                const fontsReady = document.fonts
                    ? Promise.race([document.fonts.ready.catch(() => undefined), delay(5000)])
                    : Promise.resolve();

                return Promise.all([Promise.all(images.map(waitForImage)), fontsReady])
                    .then(() => delay(100))
                    .then(() => {
                        window.scrollTo(0, 0);
                        const root = document.documentElement;
                        const body = document.body;
                        return {
                            height: Math.max(
                                root.scrollHeight,
                                root.offsetHeight,
                                body.scrollHeight,
                                body.offsetHeight,
                                body.getBoundingClientRect().height,
                            ),
                            textLength: (body.textContent || "").trim().length,
                            imageCount: images.length,
                        };
                    });
            })()
        `, true);
      }
      destroyPrintWindow(printWindow) {
        try {
          if (!printWindow.isDestroyed()) {
            printWindow.destroy();
          }
        } catch (error) {
          console.warn("export-readview-pdf: failed to destroy print window", error);
        }
      }
      static toVerifiedArrayBuffer(value) {
        let arrayBuffer;
        if (Object.prototype.toString.call(value) === "[object ArrayBuffer]") {
          arrayBuffer = value.slice(0);
        } else if (ArrayBuffer.isView(value)) {
          arrayBuffer = value.buffer.slice(value.byteOffset, value.byteOffset + value.byteLength);
        } else if (value && value.type === "Buffer" && Array.isArray(value.data)) {
          arrayBuffer = Uint8Array.from(value.data).buffer;
        } else if (value && typeof value.length === "number") {
          arrayBuffer = Uint8Array.from(value).buffer;
        } else {
          throw new Error("Electron returned an unsupported PDF buffer");
        }
        const bytes = new Uint8Array(arrayBuffer);
        const signature = String.fromCharCode(...bytes.slice(0, 5));
        if (bytes.byteLength < 5 || signature !== "%PDF-") {
          throw new Error("Electron returned invalid PDF data");
        }
        return arrayBuffer;
      }
    };
    var PdfOutputWriter = class {
      static async writePdf(vault, configuredDirectory, sourceBaseName, pdfData) {
        const directory = this.resolveOutputDirectory(vault, configuredDirectory);
        const bytes = this.toBytes(pdfData);
        const safeBaseName = path.basename(String(sourceBaseName || "untitled"));
        for (let suffix = 0; suffix < 1e4; suffix += 1) {
          const fileName = suffix === 0 ? `${safeBaseName}${EXPORT_FILE_SUFFIX}` : `${safeBaseName}.readview-${suffix}.pdf`;
          const candidate = path.join(directory, fileName);
          try {
            await this.writeFileExclusive(candidate, bytes);
            return candidate;
          } catch (error) {
            if (error && error.code === "EEXIST") {
              continue;
            }
            throw this.formatWriteError(error, directory);
          }
        }
        throw new Error("Could not find an available export filename");
      }
      static async writeFileExclusive(candidate, bytes) {
        let fileHandle = null;
        try {
          fileHandle = await fs.promises.open(candidate, "wx");
          await fileHandle.writeFile(bytes);
          await fileHandle.close();
          fileHandle = null;
        } catch (error) {
          if (fileHandle) {
            try {
              await fileHandle.close();
            } catch (closeError) {
              console.warn("export-readview-pdf: failed to close partial PDF", closeError);
            }
            try {
              await fs.promises.unlink(candidate);
            } catch (removeError) {
              if (!removeError || removeError.code !== "ENOENT") {
                console.warn(
                  "export-readview-pdf: failed to remove partial PDF",
                  removeError
                );
              }
            }
          }
          throw error;
        }
      }
      static resolveOutputDirectory(vault, configuredDirectory) {
        const value = String(configuredDirectory || "").trim();
        const vaultRoot = this.getVaultRoot(vault);
        if (!value) {
          return vaultRoot;
        }
        const expandedValue = this.expandHomeDirectory(value);
        return path.isAbsolute(expandedValue) ? path.normalize(expandedValue) : path.resolve(vaultRoot, expandedValue);
      }
      static getVaultRoot(vault) {
        const adapter = vault && vault.adapter;
        if (!adapter || typeof adapter.getBasePath !== "function") {
          throw new Error("Could not resolve the vault root path");
        }
        return adapter.getBasePath();
      }
      static expandHomeDirectory(value) {
        if (value === "~") {
          return os.homedir();
        }
        if (value.startsWith("~/") || value.startsWith("~\\")) {
          return path.join(os.homedir(), value.slice(2));
        }
        return value;
      }
      static toBytes(pdfData) {
        if (pdfData instanceof ArrayBuffer) {
          return Buffer.from(pdfData);
        }
        if (ArrayBuffer.isView(pdfData)) {
          return Buffer.from(pdfData.buffer, pdfData.byteOffset, pdfData.byteLength);
        }
        throw new Error("Could not prepare PDF data for writing");
      }
      static formatWriteError(error, directory) {
        const code = error && error.code;
        if (code === "ENOENT") {
          return new Error(`PDF output directory does not exist: ${directory}`);
        }
        if (code === "EACCES" || code === "EPERM") {
          return new Error(`No permission to write PDF to: ${directory}`);
        }
        if (code === "ENOTDIR") {
          return new Error(`PDF output path is not a directory: ${directory}`);
        }
        const detail = error && error.message ? ` ${error.message}` : "";
        return new Error(`Could not write PDF to ${directory}.${detail}`);
      }
    };
    module2.exports = {
      ExportReadViewPdfJob: ExportReadViewPdfJob2,
      PdfOutputWriter,
      PdfPrinter,
      ExportPathUtils: PdfOutputWriter
    };
  }
});

// src/main.js
var {
  MarkdownView,
  Notice,
  Plugin,
  setTooltip
} = require("obsidian");
var {
  ExportReadViewPdfSettingTab,
  ExportReadViewPdfSettings
} = require_settings();
var { ExportReadViewPdfJob } = require_export();
var PLUGIN_VERSION = "0.4.0";
var EXPORT_COMMAND_ID = "export-read-view-pdf";
var RIBBON_ICON_ID = "book-open-text";
var NOTICE_DURATION_MS = 4e3;
var ExportReadViewPdfPlugin = class extends Plugin {
  constructor(...args) {
    super(...args);
    this.exporting = false;
    this.settings = null;
    this.settingsStore = null;
    this.exportJob = null;
    this.exportCommand = null;
    this.ribbonIconEl = null;
    this.exportReadingView = () => {
      void this.exportActiveReadingView();
    };
  }
  async onload() {
    this.settingsStore = new ExportReadViewPdfSettings(this, () => {
      this.settings = this.settingsStore.value;
      this.refreshLocalizedEntryLabels();
    });
    await this.loadSettings();
    this.exportJob = new ExportReadViewPdfJob(this.app, PLUGIN_VERSION);
    this.exportCommand = this.addCommand({
      id: EXPORT_COMMAND_ID,
      name: this.uiText.commandName,
      callback: this.exportReadingView
    });
    this.ribbonIconEl = this.addRibbonIcon(
      RIBBON_ICON_ID,
      this.uiText.ribbonTitle,
      this.exportReadingView
    );
    this.addSettingTab(new ExportReadViewPdfSettingTab(this.app, this.settingsStore));
  }
  onunload() {
    if (this.exportJob) {
      this.exportJob.dispose();
      this.exportJob = null;
    }
  }
  get uiText() {
    return this.settingsStore ? this.settingsStore.uiText : {
      commandName: "\u5C06\u5F53\u524D\u9605\u8BFB\u89C6\u56FE\u5BFC\u51FA\u4E3APDF",
      ribbonTitle: "\u5C06\u5F53\u524D\u9605\u8BFB\u89C6\u56FE\u5BFC\u51FA\u4E3APDF"
    };
  }
  async loadSettings() {
    this.settings = await this.settingsStore.load();
    return this.settings;
  }
  async setLanguage(language) {
    await this.settingsStore.setLanguage(language);
    this.settings = this.settingsStore.value;
  }
  async setPdfOptions(pdfOptions) {
    await this.settingsStore.setPdfOptions(pdfOptions);
    this.settings = this.settingsStore.value;
  }
  async resetPdfOptions() {
    await this.settingsStore.resetPdfOptions();
    this.settings = this.settingsStore.value;
  }
  async setOutputDirectory(outputDirectory) {
    await this.settingsStore.setOutputDirectory(outputDirectory);
    this.settings = this.settingsStore.value;
  }
  async resetOutputDirectory() {
    await this.settingsStore.resetOutputDirectory();
    this.settings = this.settingsStore.value;
  }
  async saveSettings() {
    await this.settingsStore.save();
    this.settings = this.settingsStore.value;
  }
  refreshLocalizedEntryLabels() {
    if (this.exportCommand) {
      if (typeof this.removeCommand === "function") {
        this.removeCommand(EXPORT_COMMAND_ID);
        this.exportCommand = this.addCommand({
          id: EXPORT_COMMAND_ID,
          name: this.uiText.commandName,
          callback: this.exportReadingView
        });
      } else {
        this.exportCommand.name = this.uiText.commandName;
      }
    }
    if (this.ribbonIconEl) {
      if (typeof setTooltip === "function") {
        setTooltip(this.ribbonIconEl, this.uiText.ribbonTitle);
      }
      this.ribbonIconEl.setAttribute("aria-label", this.uiText.ribbonTitle);
    }
  }
  async exportActiveReadingView() {
    if (this.exporting) {
      new Notice("A read-view export is already in progress.", NOTICE_DURATION_MS);
      return;
    }
    const view = this.app.workspace.getActiveViewOfType(MarkdownView);
    if (!view || view.getMode() !== "preview" || !view.file) {
      new Notice("Open a note in Reading view before exporting.", NOTICE_DURATION_MS);
      return;
    }
    if (!this.exportJob || !this.exportJob.getReadingContainer(view)) {
      new Notice(
        "The active Reading view has not finished rendering yet.",
        NOTICE_DURATION_MS
      );
      return;
    }
    this.exporting = true;
    try {
      new Notice("Rendering read-view PDF...", NOTICE_DURATION_MS);
      const result = await this.exportJob.run(view, this.settings);
      const imageWarning = result.unembeddedLocalImages > 0 ? ` ${result.unembeddedLocalImages} local image(s) could not be embedded and were kept as links.` : "";
      new Notice(
        `Exported read-view PDF to ${result.outputPath}.${imageWarning}`,
        NOTICE_DURATION_MS
      );
    } catch (error) {
      console.error("export-readview-pdf: export failed", error);
      const message = error instanceof Error ? error.message : String(error);
      new Notice(`Read-view export failed: ${message}`, NOTICE_DURATION_MS);
    } finally {
      this.exporting = false;
    }
  }
};
module.exports = ExportReadViewPdfPlugin;

/* nosourcemap */