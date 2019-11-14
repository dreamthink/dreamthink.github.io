webpackHotUpdate("main",{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sounds_chime_mp3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sounds/chime.mp3 */ "./src/sounds/chime.mp3");
/* harmony import */ var _sounds_chime_mp3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sounds_chime_mp3__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ControlButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ControlButton */ "./src/ControlButton.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _sounds_singingBowl_mp3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sounds/singingBowl.mp3 */ "./src/sounds/singingBowl.mp3");
/* harmony import */ var _sounds_singingBowl_mp3__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_sounds_singingBowl_mp3__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Timer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Timer.js */ "./src/Timer.js");
/* harmony import */ var _TimerInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TimerInput */ "./src/TimerInput.js");
/* harmony import */ var _material_ui_lab_ToggleButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/lab/ToggleButton */ "./node_modules/@material-ui/lab/esm/ToggleButton/index.js");
/* harmony import */ var _material_ui_lab_ToggleButtonGroup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/lab/ToggleButtonGroup */ "./node_modules/@material-ui/lab/esm/ToggleButtonGroup/index.js");
var _jsxFileName = "/Users/emilychen/Documents/clock/src/App.js";












const FormikForm = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_4__["Formik"], {
  initialValues: {
    audioSelection: "",
    minutes: ""
  },
  onSubmit: values => {
    alert(JSON.stringify(values));
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, formikProps => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_4__["Form"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
  id: "minutes",
  name: "minutes",
  type: "number",
  onChange: formikProps.handleChange("minutes"),
  value: formikProps.values.minutes,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
}), "Select sound:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_lab_ToggleButtonGroup__WEBPACK_IMPORTED_MODULE_9__["default"], {
  value: formikProps.values.audioSelection,
  onChange: formikProps.handleChange("audioSelection"),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_lab_ToggleButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
  value: "chime",
  onClick: e => {
    console.log('>>>e: ', e.target.value); // formikProps.setFieldValue('audioSelection', e.target.value)
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40
  },
  __self: undefined
}, "chime"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_lab_ToggleButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
  value: "singingBowl",
  onClick: e => {
    console.log('>>>e: ', e.target.value); // formikProps.setFieldValue('audioSelection', e.target.value)
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49
  },
  __self: undefined
}, "Tibetan bowl"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_lab_ToggleButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
  value: "nothing",
  onClick: e => {
    console.log('>>>e: ', e.target.value); // formikProps.setFieldValue('audioSelection', e.target.value)
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58
  },
  __self: undefined
}, "None")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 67
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
  title: "submit",
  onClick: formikProps.handleSubmit,
  type: "submit",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 68
  },
  __self: undefined
}, "Submit"))));

class App extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      audioSelection: 'chime',
      isPlayingAudio: false,
      minutes: '10',
      seconds: '00',
      timerEnded: false,
      timerRunning: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.playChime = this.playChime.bind(this);
    this.playSingingBowl = this.playSingingBowl.bind(this);
    this.startCountdown = this.startCountdown.bind(this);
    this.stopCountdown = this.stopCountdown.bind(this);
    this.tick = this.tick.bind(this);
  }

  handleChange(event) {
    this.setState({
      minutes: event.target.value
    });
  }

  playAudio() {
    const audioEl = document.getElementsByClassName("audio-element")[0];
    audioEl.pause();
    audioEl.load();
    audioEl.play();
  }

  playChime() {
    this.setState({
      audioSelection: 'chime'
    }, () => {
      this.playAudio();
    });
  }

  playSingingBowl() {
    this.setState({
      audioSelection: 'singingBowl'
    }, () => {
      this.playAudio();
    });
  }

  startCountdown() {
    const audioEl = document.getElementsByClassName("audio-element")[0];
    audioEl.pause();
    audioEl.currentTime = "0";
    this.intervalHandle = setInterval(this.tick, 1000);
    let time = this.state.minutes;
    this.secondsRemaining = time * 60;
    this.setState({
      timerRunning: true
    });
  }

  stopCountdown() {
    const audioEl = document.getElementsByClassName("audio-element")[0];
    audioEl.pause();
    audioEl.currentTime = "0";
    this.setState({
      timerRunning: false
    });
    clearInterval(this.intervalHandle);
    this.setState({
      minutes: 10
    });
  }

  tick() {
    var min = Math.floor(this.secondsRemaining / 60);
    var sec = this.secondsRemaining - min * 60;
    this.setState({
      minutes: min,
      seconds: sec
    });

    if (sec < 10) {
      this.setState({
        seconds: "0" + this.state.seconds
      });
    }

    if (min < 10) {
      this.setState({
        value: "0" + min
      });
    }

    if (min === 0 & sec === 0) {
      this.playChime();
      clearInterval(this.intervalHandle);
      console.log('>>>timer ended!');
      this.setState({
        timerEnded: true
      });
    }

    this.secondsRemaining--;
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "App",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
      className: "App-header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormikForm, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("audio", {
      className: "audio-element",
      preload: "auto",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("source", {
      src: this.state.audioSelection === "chime" ? _sounds_chime_mp3__WEBPACK_IMPORTED_MODULE_2___default.a : _sounds_singingBowl_mp3__WEBPACK_IMPORTED_MODULE_5___default.a,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236
      },
      __self: this
    }))));
  }

} // const NewApp = ({
//   minutes,
//   handleChange
// }) => (
//   <div>
//     <input type="text" name="minute" placeholder={minutes} value={minutes} onChange={handleChange}/>
//   </div>
// )
// const FormikApp = withFormik({
//   mapPropsToValues() {
//     return {
//       minutes: '3'
//     }
//   }
// })(NewApp)


/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=main.00dce8df9c1ef8ce774b.hot-update.js.map