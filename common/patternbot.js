(function () {
/**
 * Patternbot includes
 * https://github.com/thomasjbradley/patternbot-includes
 * @author Thomas J Bradley <hey@thomasjbradley.ca>
 * @copyright 2018 Thomas J Bradley
 * @license MIT
 */
const patternBotIncludes = function (manifest) {
  'use strict';

  const loadingScreenConfig = {
    id: 'patternbot-loading-screen',
    cssId: 'patternbot-loading-screen-css',
    get css() { return `
      div#${loadingScreenConfig.id} {
        all: initial;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-content: center;
        margin: 0;
        padding: 0;
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        z-index: 10000;
        background-color: ${manifest.commonInfo.readme.attributes.backgroundColour};
        border: 0;
        opacity: 1;
        color: rgba(${manifest.commonInfo.interfaceColours.primary}, ${manifest.commonInfo.interfaceColours.primary}, ${manifest.commonInfo.interfaceColours.primary}, 1);
        text-align: center;
      }

      h1#patternbot-loading-screen-title {
        all: initial;
        margin: 0;
        padding: 0;
        background-color: transparent;
        font-size: 18px;
        font-weight: normal;
        line-height: 1.5;
        color: rgba(${manifest.commonInfo.interfaceColours.primary}, ${manifest.commonInfo.interfaceColours.primary}, ${manifest.commonInfo.interfaceColours.primary}, 1);
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
        text-align: center;
      }

      svg#patternbot-loading-gears {
        margin-bottom: 10px;
        height: 64px;
        width: 64px;
        opacity: .8;
        fill: rgba(${manifest.commonInfo.interfaceColours.primary}, ${manifest.commonInfo.interfaceColours.primary}, ${manifest.commonInfo.interfaceColours.primary}, 1);
      }

      path#patternbot-loading-gears-top {
        opacity: .5;
        animation: patternbot-loading-spin 2s linear infinite;
        transform-origin: 80.8px 80.8px;
        fill: rgba(${manifest.commonInfo.interfaceColours.primary}, ${manifest.commonInfo.interfaceColours.primary}, ${manifest.commonInfo.interfaceColours.primary}, 1);
      }

      path#patternbot-loading-gears-bottom {
        opacity: .7;
        animation: patternbot-loading-spin 2s linear reverse infinite;
        transform-origin: 176.3px 176.3px;
        fill: rgba(${manifest.commonInfo.interfaceColours.primary}, ${manifest.commonInfo.interfaceColours.primary}, ${manifest.commonInfo.interfaceColours.primary}, 1);
      }

      @keyframes patternbot-loading-spin {
        0% { transform: rotate(0); }
        100% { transform: rotate(360deg); }
      }
    `},
    get html() { return `
      <div id="${loadingScreenConfig.id}">
        <svg id="patternbot-loading-gears" viewBox="0 0 256 256" width="256" height="256">
          <path id="patternbot-loading-gears-top" d="M151.3 86.9a51.3 51.3 0 0 0 .2-6.1 51.3 51.3 0 0 0-.2-6.1l-12-.9a57.9 57.9 0 0 0-4.3-15.9l9.9-6.8a59.2 59.2 0 0 0-6.1-10.6l-10.9 5a59.6 59.6 0 0 0-11.6-11.6l5.3-10.9a59.2 59.2 0 0 0-10.6-6.2l-7.1 9.7a60.2 60.2 0 0 0-15.8-4.2l-.9-12a57.5 57.5 0 0 0-6.4-.2 51.3 51.3 0 0 0-6.1.2l-.9 12A57.9 57.9 0 0 0 58 26.5l-7-9.7A59.2 59.2 0 0 0 40.4 23l5 10.9a68.4 68.4 0 0 0-11.8 11.5l-10.6-5A59.2 59.2 0 0 0 16.8 51l9.7 6.8a59.5 59.5 0 0 0-4.2 16l-11.8.9a23 23 0 0 0-.5 5.9 51.3 51.3 0 0 0 .2 6.1l11.8.9a59.5 59.5 0 0 0 4.2 16l-9.7 6.8a59.2 59.2 0 0 0 6.1 10.6l10.6-5A54.8 54.8 0 0 0 45 127.6l-5 10.9a59.2 59.2 0 0 0 10.6 6.1l6.8-9.7a60.2 60.2 0 0 0 15.8 4.2l.9 12h6.4a51.3 51.3 0 0 0 6.1-.2l.9-12a60.2 60.2 0 0 0 15.8-4.2l6.8 9.9a59.2 59.2 0 0 0 10.6-6.1l-5-11.1a53.7 53.7 0 0 0 11.6-11.6l10.9 5.2a59.2 59.2 0 0 0 6.1-10.6l-9.7-6.8a60.2 60.2 0 0 0 4.2-15.8zm-70.5 29.3a35.4 35.4 0 1 1 35.4-35.4 35.3 35.3 0 0 1-35.4 35.4z"/>
          <path id="patternbot-loading-gears-bottom" d="M242.8 200.6a51.3 51.3 0 0 0 1.8-5.9 51.3 51.3 0 0 0 1.4-6l-11.4-4a57.9 57.9 0 0 0 0-16.4l11.3-4a59.2 59.2 0 0 0-3.2-11.8l-11.8 2a59.6 59.6 0 0 0-8.1-14.2l7.8-9.1a59.2 59.2 0 0 0-8.7-8.7l-9.4 7.5a60.2 60.2 0 0 0-14.2-8.2l2.2-11.9a57.5 57.5 0 0 0-6.1-1.9 51.3 51.3 0 0 0-6-1.4l-4 11.4a57.9 57.9 0 0 0-16.4 0l-4.1-11.1a59.2 59.2 0 0 0-11.8 3.2l2 11.8a68.4 68.4 0 0 0-14.4 8.1l-9-7.5a59.2 59.2 0 0 0-8.7 8.7l7.6 9.1a59.5 59.5 0 0 0-8.3 14.4l-11.3-2.4a23 23 0 0 0-2 5.6 51.3 51.3 0 0 0-1.4 6l11.1 4a59.5 59.5 0 0 0-.1 16.6l-11.1 4.1a59.2 59.2 0 0 0 3.2 11.8l11.5-2a54.8 54.8 0 0 0 8.4 14.2l-7.6 9.2a59.2 59.2 0 0 0 8.7 8.7l9.1-7.6a60.2 60.2 0 0 0 14.2 8.2l-2.3 11.9 6.1 1.7a51.3 51.3 0 0 0 6 1.4l4-11.4a60.2 60.2 0 0 0 16.4 0l4 11.3a59.2 59.2 0 0 0 11.8-3.2l-1.9-12a53.7 53.7 0 0 0 14.2-8.1l9.1 7.8a59.2 59.2 0 0 0 8.7-8.7l-7.6-9.1a60.2 60.2 0 0 0 8.2-14.2zm-75.7 9.9a35.4 35.4 0 1 1 43.4-24.9 35.3 35.3 0 0 1-43.4 24.9z"/>
        </svg>
        <h1 id="patternbot-loading-screen-title">Building page…</h1>
      </div>
    `},
  };

  let downloadedAssets = {};

  const downloadHandler = function (e) {
    e.target.removeEventListener('load', downloadHandler);
    downloadedAssets[e.target.getAttribute('href')] = true;
  };

  const findRootPath = function () {
    const rootMatcher = /\/common\//;
    const allScripts = document.querySelectorAll('script:not([type])');
    let t = allScripts.length, i = 0;

    for (i = 0; i < t; i++) {
      if (rootMatcher.test(allScripts[i].src)) {
        return allScripts[i].src.split(rootMatcher)[0];
      }
    }
  };

  const addCssFile = function (href) {
    const newLink = document.createElement('link');

    downloadedAssets[href] = false;

    newLink.setAttribute('rel', 'stylesheet');
    newLink.setAttribute('href', href);
    newLink.addEventListener('load', downloadHandler);

    document.head.appendChild(newLink);
  }

  const bindAllCssFiles = function (rootPath) {
    if (manifest.commonInfo && manifest.commonInfo.readme && manifest.commonInfo.readme.attributes &&  manifest.commonInfo.readme.attributes.fontUrl) {
      addCssFile(manifest.commonInfo.readme.attributes.fontUrl);
    }

    if (manifest.patternLibFiles && manifest.patternLibFiles.commonParsable) {
      if (manifest.patternLibFiles.commonParsable.modulifier) addCssFile(`..${manifest.config.commonFolder}/${manifest.config.commonParsableFilenames.modulifier}`);
      if (manifest.patternLibFiles.commonParsable.gridifier) addCssFile(`..${manifest.config.commonFolder}/${manifest.config.commonParsableFilenames.gridifier}`);
      if (manifest.patternLibFiles.commonParsable.typografier) addCssFile(`..${manifest.config.commonFolder}/${manifest.config.commonParsableFilenames.typografier}`);
      if (manifest.patternLibFiles.commonParsable.theme) addCssFile(`..${manifest.config.commonFolder}/${manifest.config.commonParsableFilenames.theme}`);
    }

    manifest.userPatterns.forEach((pattern) => {
      if (!pattern.css) return;

      pattern.css.forEach((css) => {
        addCssFile(`../${css.localPath}`);
      });
    });
  };

  const getPatternInfo = function (patternElem) {
    let patternInfoJson;
    const data = patternElem.innerText.trim();

    if (!data) return {};

    try {
      patternInfoJson = JSON.parse(data);
      return patternInfoJson;
    } catch (e) {
      console.group('JSON error in pattern include');
      console.log(patternElem.dataset.pattern);
      console.log(patternElem.innerText);
      console.log(e);
      console.groupEnd();
      return {};
    }
  };

  const getPatternUrl = function (rootPath, patternName) {
    patternName = (patternName.slice(-5) === '.html') ? patternName.slice(0, -5) : patternName;
    return `${rootPath}/patterns/${patternName}.html`;
  };

  const constructPattern = function (rootPath, patternElem) {
    return {
      name: patternElem.dataset.pattern,
      url: getPatternUrl(rootPath, patternElem.dataset.pattern),
      html: false,
      elem: false,
    };
  };

  const correctHrefPaths = function (html) {
    const hrefSearch = /href\s*=\s*"\.\.\/\.\.\//g;
    const srcSearch = /src\s*=\s*"\.\.\/\.\.\//g;
    const urlSearch = /url\((["']*)\.\.\/\.\.\//g;

    return html
      .replace(hrefSearch, 'href="../')
      .replace(srcSearch, 'src="../')
      .replace(urlSearch, 'url($1../')
    ;
  };

  const buildAccurateSelectorFromElem = function (elem) {
    let theSelector = elem.tagName.toLowerCase();

    if (elem.id) theSelector += `#${elem.id}`;
    if (elem.getAttribute('role')) theSelector += `[role="${elem.getAttribute('role')}"]`;
    if (elem.classList.length > 0) theSelector += `.${[].join.call(elem.classList, '.')}`;

    theSelector += ':first-of-type';

    return theSelector;
  };

  /**
   * This is an ugly mess: Blink does not properly render SVGs when using DOMParser alone.
   * But, I need DOMParser to determine the correct element to extract.
   *
   * I only want to get the first element within the `<body>` tag of the loaded document.
   * This dumps the whole, messy, HTML document into a temporary `<div>`,
   * then uses the DOMParser version, of the same element, to create an accurate selector,
   * then finds that single element in the temporary `<div>` using the selector and returns it.
   */
  const htmlStringToElem = function (html) {
    let theSelector = '';
    const tmpDoc = document.createElement('div');
    const finalTmpDoc = document.createElement('div');
    const doc = (new DOMParser()).parseFromString(html, 'text/html');

    tmpDoc.innerHTML = html;
    theSelector = buildAccurateSelectorFromElem(doc.body.firstElementChild);
    finalTmpDoc.appendChild(tmpDoc.querySelector(theSelector));

    return finalTmpDoc;
  };

  const replaceElementValue = function (elem, sel, data) {
    elem.innerText = data;
  };

  const replaceAttributeValue = function (elem, sel, data) {
    const isXlinkAttr = /xlink\:/.test(sel);
    const attr = sel.match(/\[([^\]]+)\]$/)[1];

    if (isXlinkAttr) {
      elem.setAttributeNS('http://www.w3.org/1999/xlink', attr, data);
    } else {
      elem.setAttribute(attr, data);
    }
  };

  const outputPattern = function (patternElem, patternDetails) {
    let patternOutElem, patternData;

    if (!patternDetails.html) return;

    patternOutElem = htmlStringToElem(correctHrefPaths(patternDetails.html));
    patternData = getPatternInfo(patternElem);

    Object.keys(patternData).forEach((sel) => {
      const isAttributeSelector = /\[.*\]/.test(sel);
      const jsSel = sel.replace(/\[.*:/, '[*|');
      const elem = patternOutElem.querySelector(jsSel);

      if (!elem) {
        console.group('Cannot find element');
        console.log(`Selector: ${sel}`);
        console.log(`Pattern: ${patternDetails.name}`);
        console.log(JSON.stringify(patternData, null, 2));
        console.groupEnd();
        return;
      }

      if (isAttributeSelector) {
        replaceAttributeValue(elem, sel, patternData[sel]);
      } else {
        replaceElementValue(elem, sel, patternData[sel]);
      }
    });

    patternElem.parentNode.replaceChild(patternOutElem.firstElementChild, patternElem);
  };

  const showLoadingScreen = function () {
    const loadCssElem = document.createElement('style');

    loadCssElem.id = loadingScreenConfig.cssId;
    loadCssElem.appendChild(document.createTextNode(loadingScreenConfig.css));
    document.head.appendChild(loadCssElem);
    document.body.innerHTML += loadingScreenConfig.html;
  };

  const hideLoadingScreen = function () {
    let allDownloadedInterval = setInterval(() => {
      if (Object.values(downloadedAssets).includes(false)) return;

      clearInterval(allDownloadedInterval);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          document.getElementById(loadingScreenConfig.id).remove();
          document.getElementById(loadingScreenConfig.cssId).remove();
        });
      });
    }, 50);
  };

  const findAllPatternTags = function () {
    return document.querySelectorAll('script[type="application/json"][data-pattern]');
  };

  const constructAllPatterns = function (rootPath, allPatternTags) {
    let allPatterns = {};

    [].forEach.call(allPatternTags, (patternElem) => {
      if (allPatterns[patternElem.dataset.pattern]) return;

      allPatterns[patternElem.dataset.pattern] = constructPattern(rootPath, patternElem);
    });

    return allPatterns;
  };

  const buildPatternFetchPromises = function (allPatternUrls) {
    return allPatternUrls.map((url) => {
      return new Promise((resolve, reject) => {
        downloadedAssets[url] = false;

        fetch(url).then((resp) => {
          if (resp.status >= 200 && resp.status <= 299) {
            return resp.text();
          } else {
            console.group('Cannot locate pattern');
            console.log(resp.url);
            console.log(`Error ${resp.status}: ${resp.statusText}`);
            console.groupEnd();
            return '';
          }
        }).then(function (html) {
          downloadedAssets[url] = true;
          resolve(html);
        }).catch((e) => {
          console.group('Download error');
          console.log(url);
          console.log(e);
          console.groupEnd();
          resolve('');
        });
      });
    });
  };

  const loadAllPatterns = function (allPatterns) {
    let patternUrls = {};
    let allPatternKeys = Object.keys(allPatterns);

    allPatternKeys.forEach((patternKey) => {
      patternUrls[patternKey] = allPatterns[patternKey].url;
    });

    return new Promise((resolve, reject) => {
      Promise.all(buildPatternFetchPromises(Object.values(patternUrls))).then((allPatternsHtml) => {
        allPatternsHtml.forEach((html, i) => {
          allPatterns[allPatternKeys[i]].html = html;
        });
        resolve(allPatterns);
      }).catch((e) => {
        console.group('Pattern load error');
        console.log(e);
        console.groupEnd();
        resolve(allPatterns);
      });
    });
  };

  const renderAllPatterns = function (allPatternTags, allLoadedPatterns) {
    [].forEach.call(allPatternTags, (elem) => {
      outputPattern(elem, allLoadedPatterns[elem.dataset.pattern]);
    });
  };

  const init = function () {
    let rootPath, patternsToLoad, allPatternTags = [], allPatterns = [];

    showLoadingScreen();

    rootPath = findRootPath();
    bindAllCssFiles(rootPath);
    allPatternTags = findAllPatternTags();
    allPatterns = constructAllPatterns(rootPath, allPatternTags);

    loadAllPatterns(allPatterns).then((allLoadedPatterns) => {
      renderAllPatterns(allPatternTags, allLoadedPatterns);
      hideLoadingScreen();
    }).catch((e) => {
      console.group('Pattern load error');
      console.log(e);
      console.groupEnd();
    });
  };

  document.addEventListener('DOMContentLoaded', init);
};


/** 
 * Patternbot library manifest
 * /Users/jennifersommerfeld/Documents/graphic-design/web-dev-4/week-03/ecommerce-pattern-library
 * @version 1523979009822
 */
const patternManifest_1523979009822 = {
  "commonInfo": {
    "modulifier": [
      "responsive",
      "images",
      "list-group",
      "embed",
      "media-object",
      "icons",
      "hidden",
      "positioning",
      "nice-lists",
      "forms",
      "buttons",
      "accessibility",
      "print"
    ],
    "modulifierUrl": "responsive;images;list-group;embed;media-object;icons;hidden;positioning;nice-lists;forms;buttons;accessibility;print",
    "gridifier": [
      {
        "prefix": "xs",
        "columns": 4,
        "mq": 0
      },
      {
        "prefix": "s",
        "columns": 4,
        "mq": 25
      },
      {
        "prefix": "m",
        "columns": 4,
        "mq": 38
      },
      {
        "prefix": "l",
        "columns": 4,
        "mq": 60
      }
    ],
    "gridifierUrl": "xs,4,0,0,0;s,4,25,0,0;m,4,38,1,1;l,4,60,1,1",
    "typografier": [
      {
        "mq": 0,
        "fontSize": 100,
        "lineHeight": 1.3,
        "scale": 1.067
      },
      {
        "mq": 38,
        "fontSize": 110,
        "lineHeight": 1.4,
        "scale": 1.125
      },
      {
        "mq": 60,
        "fontSize": 120,
        "lineHeight": 1.5,
        "scale": 1.125
      },
      {
        "mq": 90,
        "fontSize": 130,
        "lineHeight": 1.5,
        "scale": 1.125
      }
    ],
    "typografierUrl": "0,100,1.3,1.067,0;38,110,1.4,1.125,1;60,120,1.5,1.125,1;90,130,1.5,1.125,1",
    "theme": {
      "colours": {
        "primary": [
          {
            "name": "--color-primary",
            "namePretty": "Primary",
            "raw": "#404040",
            "hex": "#404040",
            "rgba": "rgba(64, 64, 64, 1)"
          },
          {
            "name": "--color-primary-light",
            "namePretty": "Primary light",
            "raw": "#707070",
            "hex": "#707070",
            "rgba": "rgba(112, 112, 112, 1)"
          }
        ],
        "secondary": [],
        "neutral": [],
        "accent": [
          {
            "name": "--color-accent-red",
            "namePretty": "Accent red",
            "raw": "#d52d3e",
            "hex": "#d52d3e",
            "rgba": "rgba(213, 45, 62, 1)"
          },
          {
            "name": "--color-accent-green",
            "namePretty": "Accent green",
            "raw": "#98d75c",
            "hex": "#98d75c",
            "rgba": "rgba(152, 215, 92, 1)"
          },
          {
            "name": "--color-background",
            "namePretty": "Background",
            "raw": "#404040",
            "hex": "#404040",
            "rgba": "rgba(64, 64, 64, 1)"
          }
        ]
      },
      "fonts": {
        "primary": {
          "name": "--font-primary",
          "namePretty": "Open Sans",
          "raw": "\"Open Sans\", sans-serif",
          "weights": {
            "normal": {
              "weight": "normal",
              "hasNormal": true,
              "hasItalic": false
            }
          }
        },
        "secondary": {
          "name": "--font-secondary",
          "namePretty": "Orbitron",
          "raw": "\"Orbitron\", sans-serif",
          "weights": {
            "normal": {
              "weight": "normal",
              "hasNormal": true,
              "hasItalic": false
            }
          }
        },
        "accent": [
          {
            "name": "--font-color-primary",
            "namePretty": "#fff",
            "raw": "#fff",
            "weights": {
              "normal": {
                "weight": "normal",
                "hasNormal": true,
                "hasItalic": false
              }
            }
          },
          {
            "name": "--font-color-secondary",
            "namePretty": "#404040",
            "raw": "#404040",
            "weights": {
              "normal": {
                "weight": "normal",
                "hasNormal": true,
                "hasItalic": false
              }
            }
          },
          {
            "name": "--font-weight-primary",
            "namePretty": "Normal",
            "raw": "normal",
            "weights": {
              "normal": {
                "weight": "normal",
                "hasNormal": true,
                "hasItalic": false
              }
            }
          },
          {
            "name": "--font-weight-secondary",
            "namePretty": "Bold",
            "raw": "bold",
            "weights": {
              "normal": {
                "weight": "normal",
                "hasNormal": true,
                "hasItalic": false
              }
            }
          },
          {
            "name": "--font-style-primary",
            "namePretty": "Normal",
            "raw": "normal",
            "weights": {
              "normal": {
                "weight": "normal",
                "hasNormal": true,
                "hasItalic": false
              }
            }
          },
          {
            "name": "--font-style-secondary",
            "namePretty": "Italic",
            "raw": "italic",
            "weights": {
              "normal": {
                "weight": "normal",
                "hasNormal": true,
                "hasItalic": false
              }
            }
          }
        ]
      },
      "coloursRaw": {
        "--color-primary": "#404040",
        "--color-primary-light": "#707070",
        "--color-accent-red": "#d52d3e",
        "--color-accent-green": "#98d75c",
        "--color-background": "#404040"
      },
      "fontsRaw": {
        "--font-primary": "\"Open Sans\", sans-serif",
        "--font-secondary": "\"Orbitron\", sans-serif",
        "--font-color-primary": "#fff",
        "--font-color-secondary": "#404040",
        "--font-weight-primary": "normal",
        "--font-weight-secondary": "bold",
        "--font-style-primary": "normal",
        "--font-style-secondary": "italic"
      }
    },
    "readme": {
      "attributes": {
        "name": "Fidget",
        "fontUrl": "https://fonts.googleapis.com/css?family=Open+Sans|Orbitron",
        "backgroundColour": "#fff",
        "interfaceColours": {
          "primary": 0,
          "opposite": 255
        }
      },
      "bodyRaw": "\nFidget was created to help people overcome their bad tendencies. Since the Fidget Spinner was released, we've expanded our selection to Fidget Cubes and Accessories.\n",
      "bodyBasic": "Fidget was created to help people overcome their bad tendencies. Since the Fidget Spinner was released, we've expanded our selection to Fidget Cubes and Accessories."
    },
    "icons": [
      "accessory-1",
      "fidget-cube-1",
      "fidget-spinner-1",
      "cancel-1",
      "instagram-1",
      "logo-16",
      "logo-32",
      "logo-64",
      "next-1",
      "logo-256",
      "search-1",
      "shopping-cart-1",
      "submit-1",
      "toggle-nav-hamburger-1",
      "toggle-nav-close-1",
      "twitter-1"
    ],
    "interfaceColours": {
      "primary": 0,
      "opposite": 255
    }
  },
  "patternLibFiles": {
    "commonParsable": {
      "gridifier": "/Users/jennifersommerfeld/Documents/graphic-design/web-dev-4/week-03/ecommerce-pattern-library/common/grid.css",
      "typografier": "/Users/jennifersommerfeld/Documents/graphic-design/web-dev-4/week-03/ecommerce-pattern-library/common/type.css",
      "modulifier": "/Users/jennifersommerfeld/Documents/graphic-design/web-dev-4/week-03/ecommerce-pattern-library/common/modules.css",
      "theme": "/Users/jennifersommerfeld/Documents/graphic-design/web-dev-4/week-03/ecommerce-pattern-library/common/theme.css"
    },
    "imagesParsable": {
      "icons": "/Users/jennifersommerfeld/Documents/graphic-design/web-dev-4/week-03/ecommerce-pattern-library/images/icons.svg"
    },
    "logos": {
      "sizeLarge": "/Users/jennifersommerfeld/Documents/graphic-design/web-dev-4/week-03/ecommerce-pattern-library/images/logo-256.svg",
      "size64": "/Users/jennifersommerfeld/Documents/graphic-design/web-dev-4/week-03/ecommerce-pattern-library/images/logo-64.svg",
      "size32": "/Users/jennifersommerfeld/Documents/graphic-design/web-dev-4/week-03/ecommerce-pattern-library/images/logo-32.svg",
      "size16": "/Users/jennifersommerfeld/Documents/graphic-design/web-dev-4/week-03/ecommerce-pattern-library/images/logo-16.svg",
      "size16Local": "logo-16.svg",
      "sizeLargeLocal": "logo-256.svg",
      "size32Local": "logo-32.svg",
      "size64Local": "logo-64.svg"
    },
    "patterns": [
      "/Users/jennifersommerfeld/Documents/graphic-design/web-dev-4/week-03/ecommerce-pattern-library/patterns/banners",
      "/Users/jennifersommerfeld/Documents/graphic-design/web-dev-4/week-03/ecommerce-pattern-library/patterns/buttons",
      "/Users/jennifersommerfeld/Documents/graphic-design/web-dev-4/week-03/ecommerce-pattern-library/patterns/cards",
      "/Users/jennifersommerfeld/Documents/graphic-design/web-dev-4/week-03/ecommerce-pattern-library/patterns/footer",
      "/Users/jennifersommerfeld/Documents/graphic-design/web-dev-4/week-03/ecommerce-pattern-library/patterns/forms",
      "/Users/jennifersommerfeld/Documents/graphic-design/web-dev-4/week-03/ecommerce-pattern-library/patterns/header",
      "/Users/jennifersommerfeld/Documents/graphic-design/web-dev-4/week-03/ecommerce-pattern-library/patterns/pages",
      "/Users/jennifersommerfeld/Documents/graphic-design/web-dev-4/week-03/ecommerce-pattern-library/patterns/photo-arrays"
    ],
    "pages": []
  },
  "userPatterns": [
    {
      "name": "banners",
      "namePretty": "Banners",
      "path": "/Users/jennifersommerfeld/Documents/graphic-design/web-dev-4/week-03/ecommerce-pattern-library/patterns/banners",
      "html": [
        {
          "name": "call-to-action-banner",
          "namePretty": "Call to action banner",
          "filename": "call-to-action-banner",
          "path": "/Users/jennifersommerfeld/Documents/graphic-design/web-dev-4/week-03/ecommerce-pattern-library/patterns/banners/call-to-action-banner.html",
          "localPath": "patterns/banners/call-to-action-banner.html"
        },
        {
          "name": "sectional-banner",
          "namePretty": "Sectional banner",
          "filename": "sectional-banner",
          "path": "/Users/jennifersommerfeld/Documents/graphic-design/web-dev-4/week-03/ecommerce-pattern-library/patterns/banners/sectional-banner.html",
          "localPath": "patterns/banners/sectional-banner.html"
        },
        {
          "name": "top-of-checkout-page-banner",
          "namePretty": "Top of checkout page banner",
          "filename": "top-of-checkout-page-banner",
          "path": "/Users/jennifersommerfeld/Documents/graphic-design/web-dev-4/week-03/ecommerce-pattern-library/patterns/banners/top-of-checkout-page-banner.html",
          "localPath": "patterns/banners/top-of-checkout-page-banner.html"
        },
        {
          "name": "top-of-products-page-banner",
          "namePretty": "Top of products page banner",
          "filename": "top-of-products-page-banner",
          "path": "/Users/jennifersommerfeld/Documents/graphic-design/web-dev-4/week-03/ecommerce-pattern-library/patterns/banners/top-of-products-page-banner.html",
          "localPath": "patterns/banners/top-of-products-page-banner.html"
        }
      ],
      "md": [
        {
          "name": "readme",
          "namePretty": "Readme",
          "filename": "README",
          "path": "/Users/jennifersommerfeld/Documents/graphic-design/web-dev-4/week-03/ecommerce-pattern-library/patterns/banners/README.md",
          "localPath": "patterns/banners/README.md"
        }
      ],
      "css": [
        {
          "name": "call-to-action-banner",
          "namePretty": "Call to action banner",
          "filename": "call-to-action-banner",
          "path": "/Users/jennifersommerfeld/Documents/graphic-design/web-dev-4/week-03/ecommerce-pattern-library/patterns/banners/call-to-action-banner.css",
          "localPath": "patterns/banners/call-to-action-banner.css"
        },
        {
          "name": "sectional-banner",
          "namePretty": "Sectional banner",
          "filename": "sectional-banner",
          "path": "/Users/jennifersommerfeld/Documents/graphic-design/web-dev-4/week-03/ecommerce-pattern-library/patterns/banners/sectional-banner.css",
          "localPath": "patterns/banners/sectional-banner.css"
        },
        {
          "name": "top-of-page-banner",
          "namePretty": "Top of page banner",
          "filename": "top-of-page-banner",
          "path": "/Users/jennifersommerfeld/Documents/graphic-design/web-dev-4/week-03/ecommerce-pattern-library/patterns/banners/top-of-page-banner.css",
          "localPath": "patterns/banners/top-of-page-banner.css"
        }
      ]
    },
    {
      "name": "buttons",
      "namePretty": "Buttons",
      "path": "/Users/jennifersommerfeld/Documents/graphic-design/web-dev-4/week-03/ecommerce-pattern-library/patterns/buttons",
      "html": [
        {
          "name": "cancel-buttons",
          "namePretty": "Cancel buttons",
          "filename": "cancel-buttons",
          "path": "/Users/jennifersommerfeld/Documents/graphic-design/web-dev-4/week-03/ecommerce-pattern-library/patterns/buttons/cancel-buttons.html",
          "localPath": "patterns/buttons/cancel-buttons.html"
        },
        {
          "name": "ghost-buttons",
          "namePretty": "Ghost buttons",
          "filename": "ghost-buttons",
          "path": "/Users/jennifersommerfeld/Documents/graphic-design/web-dev-4/week-03/ecommerce-pattern-library/patterns/buttons/ghost-buttons.html",
          "localPath": "patterns/buttons/ghost-buttons.html"
        },
        {
          "name": "light-buttons",
          "namePretty": "Light buttons",
          "filename": "light-buttons",
          "path": "/Users/jennifersommerfeld/Documents/graphic-design/web-dev-4/week-03/ecommerce-pattern-library/patterns/buttons/light-buttons.html",
          "localPath": "patterns/buttons/light-buttons.html"
        },
        {
          "name": "next-buttons",
          "namePretty": "Next buttons",
          "filename": "next-buttons",
          "path": "/Users/jennifersommerfeld/Documents/graphic-design/web-dev-4/week-03/ecommerce-pattern-library/patterns/buttons/next-buttons.html",
          "localPath": "patterns/buttons/next-buttons.html"
        },
        {
          "name": "standard-buttons",
          "namePretty": "Standard buttons",
          "filename": "standard-buttons",
          "path": "/Users/jennifersommerfeld/Documents/graphic-design/web-dev-4/week-03/ecommerce-pattern-library/patterns/buttons/standard-buttons.html",
          "localPath": "patterns/buttons/standard-buttons.html"
        },
        {
          "name": "submit-buttons",
          "namePretty": "Submit buttons",
          "filename": "submit-buttons",
          "path": "/Users/jennifersommerfeld/Documents/graphic-design/web-dev-4/week-03/ecommerce-pattern-library/patterns/buttons/submit-buttons.html",
          "localPath": "patterns/buttons/submit-buttons.html"
        }
      ],
      "md": [
        {
          "name": "readme",
          "namePretty": "Readme",
          "filename": "README",
          "path": "/Users/jennifersommerfeld/Documents/graphic-design/web-dev-4/week-03/ecommerce-pattern-library/patterns/buttons/README.md",
          "localPath": "patterns/buttons/README.md"
        }
      ],
      "css": [
        {
          "name": "buttons",
          "namePretty": "Buttons",
          "filename": "buttons",
          "path": "/Users/jennifersommerfeld/Documents/graphic-design/web-dev-4/week-03/ecommerce-pattern-library/patterns/buttons/buttons.css",
          "localPath": "patterns/buttons/buttons.css"
        }
      ]
    },
    {
      "name": "cards",
      "namePretty": "Cards",
      "path": "/Users/jennifersommerfeld/Documents/graphic-design/web-dev-4/week-03/ecommerce-pattern-library/patterns/cards",
      "html": [
        {
          "name": "accessories-icon-card",
          "namePretty": "Accessories icon card",
          "filename": "accessories-icon-card",
          "path": "/Users/jennifersommerfeld/Documents/graphic-design/web-dev-4/week-03/ecommerce-pattern-library/patterns/cards/accessories-icon-card.html",
          "localPath": "patterns/cards/accessories-icon-card.html"
        },
        {
          "name": "accessories-info-card",
          "namePretty": "Accessories info card",
          "filename": "accessories-info-card",
          "path": "/Users/jennifersommerfeld/Documents/graphic-design/web-dev-4/week-03/ecommerce-pattern-library/patterns/cards/accessories-info-card.html",
          "localPath": "patterns/cards/accessories-info-card.html"
        },
        {
          "name": "basic-card",
          "namePretty": "Basic card",
          "filename": "basic-card",
          "path": "/Users/jennifersommerfeld/Documents/graphic-design/web-dev-4/week-03/ecommerce-pattern-library/patterns/cards/basic-card.html",
          "localPath": "patterns/cards/basic-card.html"
        },
        {
          "name": "fidget-cubes-icon-card",
          "namePretty": "Fidget cubes icon card",
          "filename": "fidget-cubes-icon-card",
          "path": "/Users/jennifersommerfeld/Documents/graphic-design/web-dev-4/week-03/ecommerce-pattern-library/patterns/cards/fidget-cubes-icon-card.html",
          "localPath": "patterns/cards/fidget-cubes-icon-card.html"
        },
        {
          "name": "fidget-cubes-info-card",
          "namePretty": "Fidget cubes info card",
          "filename": "fidget-cubes-info-card",
          "path": "/Users/jennifersommerfeld/Documents/graphic-design/web-dev-4/week-03/ecommerce-pattern-library/patterns/cards/fidget-cubes-info-card.html",
          "localPath": "patterns/cards/fidget-cubes-info-card.html"
        },
        {
          "name": "fidget-spinners-icon-card",
          "namePretty": "Fidget spinners icon card",
          "filename": "fidget-spinners-icon-card",
          "path": "/Users/jennifersommerfeld/Documents/graphic-design/web-dev-4/week-03/ecommerce-pattern-library/patterns/cards/fidget-spinners-icon-card.html",
          "localPath": "patterns/cards/fidget-spinners-icon-card.html"
        },
        {
          "name": "fidget-spinners-info-card",
          "namePretty": "Fidget spinners info card",
          "filename": "fidget-spinners-info-card",
          "path": "/Users/jennifersommerfeld/Documents/graphic-design/web-dev-4/week-03/ecommerce-pattern-library/patterns/cards/fidget-spinners-info-card.html",
          "localPath": "patterns/cards/fidget-spinners-info-card.html"
        },
        {
          "name": "product-info-card",
          "namePretty": "Product info card",
          "filename": "product-info-card",
          "path": "/Users/jennifersommerfeld/Documents/graphic-design/web-dev-4/week-03/ecommerce-pattern-library/patterns/cards/product-info-card.html",
          "localPath": "patterns/cards/product-info-card.html"
        }
      ],
      "md": [
        {
          "name": "readme",
          "namePretty": "Readme",
          "filename": "README",
          "path": "/Users/jennifersommerfeld/Documents/graphic-design/web-dev-4/week-03/ecommerce-pattern-library/patterns/cards/README.md",
          "localPath": "patterns/cards/README.md"
        }
      ],
      "css": [
        {
          "name": "cards",
          "namePretty": "Cards",
          "filename": "cards",
          "path": "/Users/jennifersommerfeld/Documents/graphic-design/web-dev-4/week-03/ecommerce-pattern-library/patterns/cards/cards.css",
          "localPath": "patterns/cards/cards.css"
        }
      ]
    },
    {
      "name": "footer",
      "namePretty": "Footer",
      "path": "/Users/jennifersommerfeld/Documents/graphic-design/web-dev-4/week-03/ecommerce-pattern-library/patterns/footer",
      "html": [
        {
          "name": "footer",
          "namePretty": "Footer",
          "filename": "footer",
          "path": "/Users/jennifersommerfeld/Documents/graphic-design/web-dev-4/week-03/ecommerce-pattern-library/patterns/footer/footer.html",
          "localPath": "patterns/footer/footer.html"
        }
      ],
      "md": [
        {
          "name": "readme",
          "namePretty": "Readme",
          "filename": "README",
          "path": "/Users/jennifersommerfeld/Documents/graphic-design/web-dev-4/week-03/ecommerce-pattern-library/patterns/footer/README.md",
          "localPath": "patterns/footer/README.md"
        }
      ],
      "css": [
        {
          "name": "footer",
          "namePretty": "Footer",
          "filename": "footer",
          "path": "/Users/jennifersommerfeld/Documents/graphic-design/web-dev-4/week-03/ecommerce-pattern-library/patterns/footer/footer.css",
          "localPath": "patterns/footer/footer.css"
        }
      ]
    },
    {
      "name": "forms",
      "namePretty": "Forms",
      "path": "/Users/jennifersommerfeld/Documents/graphic-design/web-dev-4/week-03/ecommerce-pattern-library/patterns/forms",
      "html": [
        {
          "name": "checkboxes",
          "namePretty": "Checkboxes",
          "filename": "checkboxes",
          "path": "/Users/jennifersommerfeld/Documents/graphic-design/web-dev-4/week-03/ecommerce-pattern-library/patterns/forms/checkboxes.html",
          "localPath": "patterns/forms/checkboxes.html",
          "readme": {
            "background-color": "var(--color-primary)",
            "backgroundColour": "#404040",
            "interfaceColours": {
              "primary": 255,
              "opposite": 0
            }
          }
        },
        {
          "name": "drop-downs",
          "namePretty": "Drop downs",
          "filename": "drop-downs",
          "path": "/Users/jennifersommerfeld/Documents/graphic-design/web-dev-4/week-03/ecommerce-pattern-library/patterns/forms/drop-downs.html",
          "localPath": "patterns/forms/drop-downs.html",
          "readme": {
            "background-color": "var(--color-primary)",
            "backgroundColour": "#404040",
            "interfaceColours": {
              "primary": 255,
              "opposite": 0
            }
          }
        },
        {
          "name": "email-inputs",
          "namePretty": "Email inputs",
          "filename": "email-inputs",
          "path": "/Users/jennifersommerfeld/Documents/graphic-design/web-dev-4/week-03/ecommerce-pattern-library/patterns/forms/email-inputs.html",
          "localPath": "patterns/forms/email-inputs.html",
          "readme": {
            "background-color": "var(--color-primary)",
            "backgroundColour": "#404040",
            "interfaceColours": {
              "primary": 255,
              "opposite": 0
            }
          }
        },
        {
          "name": "radio-buttons",
          "namePretty": "Radio buttons",
          "filename": "radio-buttons",
          "path": "/Users/jennifersommerfeld/Documents/graphic-design/web-dev-4/week-03/ecommerce-pattern-library/patterns/forms/radio-buttons.html",
          "localPath": "patterns/forms/radio-buttons.html",
          "readme": {
            "background-color": "var(--color-primary)",
            "backgroundColour": "#404040",
            "interfaceColours": {
              "primary": 255,
              "opposite": 0
            }
          }
        },
        {
          "name": "text-areas",
          "namePretty": "Text areas",
          "filename": "text-areas",
          "path": "/Users/jennifersommerfeld/Documents/graphic-design/web-dev-4/week-03/ecommerce-pattern-library/patterns/forms/text-areas.html",
          "localPath": "patterns/forms/text-areas.html",
          "readme": {
            "background-color": "var(--color-primary)",
            "backgroundColour": "#404040",
            "interfaceColours": {
              "primary": 255,
              "opposite": 0
            }
          }
        },
        {
          "name": "text-inputs",
          "namePretty": "Text inputs",
          "filename": "text-inputs",
          "path": "/Users/jennifersommerfeld/Documents/graphic-design/web-dev-4/week-03/ecommerce-pattern-library/patterns/forms/text-inputs.html",
          "localPath": "patterns/forms/text-inputs.html",
          "readme": {
            "background-color": "var(--color-primary)",
            "backgroundColour": "#404040",
            "interfaceColours": {
              "primary": 255,
              "opposite": 0
            }
          }
        }
      ],
      "md": [
        {
          "name": "readme",
          "namePretty": "Readme",
          "filename": "README",
          "path": "/Users/jennifersommerfeld/Documents/graphic-design/web-dev-4/week-03/ecommerce-pattern-library/patterns/forms/README.md",
          "localPath": "patterns/forms/README.md"
        }
      ],
      "css": [
        {
          "name": "forms",
          "namePretty": "Forms",
          "filename": "forms",
          "path": "/Users/jennifersommerfeld/Documents/graphic-design/web-dev-4/week-03/ecommerce-pattern-library/patterns/forms/forms.css",
          "localPath": "patterns/forms/forms.css"
        },
        {
          "name": "modules",
          "namePretty": "Modules",
          "filename": "modules",
          "path": "/Users/jennifersommerfeld/Documents/graphic-design/web-dev-4/week-03/ecommerce-pattern-library/patterns/forms/modules.css",
          "localPath": "patterns/forms/modules.css"
        },
        {
          "name": "type",
          "namePretty": "Type",
          "filename": "type",
          "path": "/Users/jennifersommerfeld/Documents/graphic-design/web-dev-4/week-03/ecommerce-pattern-library/patterns/forms/type.css",
          "localPath": "patterns/forms/type.css"
        }
      ]
    },
    {
      "name": "header",
      "namePretty": "Header",
      "path": "/Users/jennifersommerfeld/Documents/graphic-design/web-dev-4/week-03/ecommerce-pattern-library/patterns/header",
      "html": [
        {
          "name": "header",
          "namePretty": "Header",
          "filename": "header",
          "path": "/Users/jennifersommerfeld/Documents/graphic-design/web-dev-4/week-03/ecommerce-pattern-library/patterns/header/header.html",
          "localPath": "patterns/header/header.html"
        }
      ],
      "md": [
        {
          "name": "readme",
          "namePretty": "Readme",
          "filename": "README",
          "path": "/Users/jennifersommerfeld/Documents/graphic-design/web-dev-4/week-03/ecommerce-pattern-library/patterns/header/README.md",
          "localPath": "patterns/header/README.md"
        }
      ],
      "css": [
        {
          "name": "header",
          "namePretty": "Header",
          "filename": "header",
          "path": "/Users/jennifersommerfeld/Documents/graphic-design/web-dev-4/week-03/ecommerce-pattern-library/patterns/header/header.css",
          "localPath": "patterns/header/header.css"
        }
      ]
    },
    {
      "name": "pages",
      "namePretty": "Pages",
      "path": "/Users/jennifersommerfeld/Documents/graphic-design/web-dev-4/week-03/ecommerce-pattern-library/patterns/pages",
      "html": [
        {
          "name": "checkout-form-page",
          "namePretty": "Checkout form page",
          "filename": "checkout-form-page",
          "path": "/Users/jennifersommerfeld/Documents/graphic-design/web-dev-4/week-03/ecommerce-pattern-library/patterns/pages/checkout-form-page.html",
          "localPath": "patterns/pages/checkout-form-page.html"
        },
        {
          "name": "homepage",
          "namePretty": "Homepage",
          "filename": "homepage",
          "path": "/Users/jennifersommerfeld/Documents/graphic-design/web-dev-4/week-03/ecommerce-pattern-library/patterns/pages/homepage.html",
          "localPath": "patterns/pages/homepage.html"
        },
        {
          "name": "product-details-page",
          "namePretty": "Product details page",
          "filename": "product-details-page",
          "path": "/Users/jennifersommerfeld/Documents/graphic-design/web-dev-4/week-03/ecommerce-pattern-library/patterns/pages/product-details-page.html",
          "localPath": "patterns/pages/product-details-page.html"
        },
        {
          "name": "product-list-page",
          "namePretty": "Product list page",
          "filename": "product-list-page",
          "path": "/Users/jennifersommerfeld/Documents/graphic-design/web-dev-4/week-03/ecommerce-pattern-library/patterns/pages/product-list-page.html",
          "localPath": "patterns/pages/product-list-page.html"
        }
      ],
      "md": [
        {
          "name": "readme",
          "namePretty": "Readme",
          "filename": "README",
          "path": "/Users/jennifersommerfeld/Documents/graphic-design/web-dev-4/week-03/ecommerce-pattern-library/patterns/pages/README.md",
          "localPath": "patterns/pages/README.md"
        }
      ],
      "css": [
        {
          "name": "checkout-form-page",
          "namePretty": "Checkout form page",
          "filename": "checkout-form-page",
          "path": "/Users/jennifersommerfeld/Documents/graphic-design/web-dev-4/week-03/ecommerce-pattern-library/patterns/pages/checkout-form-page.css",
          "localPath": "patterns/pages/checkout-form-page.css"
        },
        {
          "name": "homepage",
          "namePretty": "Homepage",
          "filename": "homepage",
          "path": "/Users/jennifersommerfeld/Documents/graphic-design/web-dev-4/week-03/ecommerce-pattern-library/patterns/pages/homepage.css",
          "localPath": "patterns/pages/homepage.css"
        },
        {
          "name": "product-details-page",
          "namePretty": "Product details page",
          "filename": "product-details-page",
          "path": "/Users/jennifersommerfeld/Documents/graphic-design/web-dev-4/week-03/ecommerce-pattern-library/patterns/pages/product-details-page.css",
          "localPath": "patterns/pages/product-details-page.css"
        },
        {
          "name": "product-list-page",
          "namePretty": "Product list page",
          "filename": "product-list-page",
          "path": "/Users/jennifersommerfeld/Documents/graphic-design/web-dev-4/week-03/ecommerce-pattern-library/patterns/pages/product-list-page.css",
          "localPath": "patterns/pages/product-list-page.css"
        }
      ]
    },
    {
      "name": "photo-arrays",
      "namePretty": "Photo arrays",
      "path": "/Users/jennifersommerfeld/Documents/graphic-design/web-dev-4/week-03/ecommerce-pattern-library/patterns/photo-arrays",
      "html": [
        {
          "name": "photo-arrays",
          "namePretty": "Photo arrays",
          "filename": "photo-arrays",
          "path": "/Users/jennifersommerfeld/Documents/graphic-design/web-dev-4/week-03/ecommerce-pattern-library/patterns/photo-arrays/photo-arrays.html",
          "localPath": "patterns/photo-arrays/photo-arrays.html"
        }
      ],
      "md": [
        {
          "name": "readme",
          "namePretty": "Readme",
          "filename": "README",
          "path": "/Users/jennifersommerfeld/Documents/graphic-design/web-dev-4/week-03/ecommerce-pattern-library/patterns/photo-arrays/README.md",
          "localPath": "patterns/photo-arrays/README.md"
        }
      ],
      "css": [
        {
          "name": "photo-arrays",
          "namePretty": "Photo arrays",
          "filename": "photo-arrays",
          "path": "/Users/jennifersommerfeld/Documents/graphic-design/web-dev-4/week-03/ecommerce-pattern-library/patterns/photo-arrays/photo-arrays.css",
          "localPath": "patterns/photo-arrays/photo-arrays.css"
        }
      ]
    }
  ],
  "config": {
    "patternLibFilename": "index.html",
    "manifestFilename": ".patternbot-manifest.json",
    "includesFilename": "patternbot.js",
    "commonFolder": "/common",
    "commonParsableFilenames": {
      "modulifier": "modules.css",
      "gridifier": "grid.css",
      "typografier": "type.css",
      "theme": "theme.css"
    },
    "imagesFolder": "/images",
    "imagesParsableFilenames": {
      "icons": "icons.svg"
    },
    "patternsFolder": "/patterns",
    "pagesFolder": "/pages"
  }
};

patternBotIncludes(patternManifest_1523979009822);
}());