webpackJsonp([0],{

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(15);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(112);

var _Header = __webpack_require__(145);

var _Header2 = _interopRequireDefault(_Header);

var _Home = __webpack_require__(148);

var _Home2 = _interopRequireDefault(_Home);

var _Listings = __webpack_require__(149);

var _Listings2 = _interopRequireDefault(_Listings);

var _Category = __webpack_require__(146);

var _Category2 = _interopRequireDefault(_Category);

var _Details = __webpack_require__(147);

var _Details2 = _interopRequireDefault(_Details);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.clickedBtn = function () {
      console.log("");
    };

    _this.state = {
      name: "Johnny"
    };
    return _this;
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        _reactRouterDom.BrowserRouter,
        null,
        _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement(_Header2.default, null),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: "/", component: _Home2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: "/:city", component: _Home2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: "/:city/:category", component: _Category2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: "/:city/:category/:listings", component: _Listings2.default }),
          _react2.default.createElement(_reactRouterDom.Route, {
            exact: true,
            path: "/:city/:category/:listings/:item",
            component: _Details2.default
          })
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(15);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(125);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Import App.js is inside of the same directory called craigslist


var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(_App2.default, null), app);

/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(15);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _axios = __webpack_require__(69);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.clickedBtn = function () {
      console.log("");
    };

    _this.state = {
      name: "Johnny",
      cityDropDown: false,
      selectedCity: "nyc",
      citiesData: []
    };
    return _this;
  }

  _createClass(Header, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var self = this;
      _axios2.default.get("/api/cities").then(function (response) {
        self.setState({
          categoriesData: response.data
        }, function () {
          console.log(self.state);
        });
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "container" },
        _react2.default.createElement(
          "header",
          null,
          _react2.default.createElement(
            "div",
            { className: "left-menu" },
            _react2.default.createElement(
              "div",
              { className: "logo" },
              "Craigslist"
            ),
            _react2.default.createElement(
              "div",
              { className: "city" },
              "Atlanta",
              _react2.default.createElement("i", { className: "fas fa-chevron-down" }),
              _react2.default.createElement(
                "div",
                { className: "dropdown" },
                _react2.default.createElement(
                  "ul",
                  null,
                  _react2.default.createElement(
                    "li",
                    null,
                    "New York City"
                  ),
                  _react2.default.createElement(
                    "li",
                    null,
                    "New York City"
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "right-menu" },
            _react2.default.createElement(
              "div",
              { className: "user-img" },
              "img"
            ),
            _react2.default.createElement(
              "div",
              { className: "user-dropdown" },
              "My Account",
              _react2.default.createElement("i", { className: "fas fa-chevron-down" })
            ),
            _react2.default.createElement(
              "div",
              { className: "post-btn" },
              "Post to Classifieds"
            )
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(15);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Category = function (_Component) {
  _inherits(Category, _Component);

  function Category() {
    _classCallCheck(this, Category);

    var _this = _possibleConstructorReturn(this, (Category.__proto__ || Object.getPrototypeOf(Category)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(Category, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          match = _props.match,
          location = _props.location,
          history = _props.history;

      return _react2.default.createElement(
        "div",
        { className: "category" },
        _react2.default.createElement(
          "div",
          { className: "container" },
          "This category is ",
          match.params.category
        )
      );
    }
  }]);

  return Category;
}(_react.Component);

exports.default = Category;

/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(15);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Gallery = __webpack_require__(150);

var _Gallery2 = _interopRequireDefault(_Gallery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Details = function (_Component) {
  _inherits(Details, _Component);

  function Details() {
    _classCallCheck(this, Details);

    var _this = _possibleConstructorReturn(this, (Details.__proto__ || Object.getPrototypeOf(Details)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(Details, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          match = _props.match,
          location = _props.location,
          history = _props.history;

      return _react2.default.createElement(
        "div",
        { className: "details-page" },
        _react2.default.createElement(
          "div",
          { className: "container" },
          _react2.default.createElement(
            "div",
            { className: "white-box" },
            _react2.default.createElement(
              "section",
              { className: "submenu" },
              _react2.default.createElement(
                "div",
                { className: "direction" },
                _react2.default.createElement(
                  "a",
                  { href: "#", className: "prev" },
                  "Prev"
                ),
                _react2.default.createElement(
                  "a",
                  { href: "#", className: "next" },
                  "Next"
                )
              ),
              _react2.default.createElement(
                "nav",
                { className: "sub-links" },
                _react2.default.createElement(
                  "a",
                  { href: "#" },
                  "More Ads by User"
                ),
                _react2.default.createElement(
                  "a",
                  { href: "#" },
                  "Print"
                ),
                _react2.default.createElement(
                  "a",
                  { href: "#" },
                  "Share"
                ),
                _react2.default.createElement(
                  "a",
                  { href: "#" },
                  "Contact Seller"
                )
              )
            ),
            _react2.default.createElement(
              "section",
              { className: "content-area" },
              _react2.default.createElement(
                "div",
                { className: "media-column" },
                _react2.default.createElement(_Gallery2.default, null)
              ),
              _react2.default.createElement(
                "div",
                { className: "details-column" },
                _react2.default.createElement(
                  "div",
                  { className: "date" },
                  "Posted: March 28th"
                ),
                _react2.default.createElement(
                  "h3",
                  { className: "title" },
                  "Silver 2017 BMW"
                ),
                _react2.default.createElement(
                  "h4",
                  { className: "price" },
                  "44,000"
                ),
                _react2.default.createElement(
                  "div",
                  { className: "more-details" },
                  _react2.default.createElement(
                    "div",
                    { className: "info" },
                    _react2.default.createElement(
                      "label",
                      null,
                      "Vin"
                    ),
                    _react2.default.createElement(
                      "h5",
                      null,
                      "1HHBH41JXMN109186"
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "info" },
                    _react2.default.createElement(
                      "label",
                      null,
                      "Mileage"
                    ),
                    _react2.default.createElement(
                      "h5",
                      null,
                      "5,600"
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "info" },
                    _react2.default.createElement(
                      "label",
                      null,
                      "Transmission"
                    ),
                    _react2.default.createElement(
                      "h5",
                      null,
                      "6-Speed Automatic"
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "info" },
                    _react2.default.createElement(
                      "label",
                      null,
                      "Fuel"
                    ),
                    _react2.default.createElement(
                      "h5",
                      null,
                      "Gasoline"
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "info" },
                    _react2.default.createElement(
                      "label",
                      null,
                      "Exterior Color"
                    ),
                    _react2.default.createElement(
                      "h5",
                      null,
                      "Silver"
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "info" },
                    _react2.default.createElement(
                      "label",
                      null,
                      "Drive"
                    ),
                    _react2.default.createElement(
                      "h5",
                      null,
                      "Rear Wheel Drive"
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "info" },
                    _react2.default.createElement(
                      "label",
                      null,
                      "Type"
                    ),
                    _react2.default.createElement(
                      "h5",
                      null,
                      "Sedan"
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "info" },
                    _react2.default.createElement(
                      "label",
                      null,
                      "Interior Color"
                    ),
                    _react2.default.createElement(
                      "h5",
                      null,
                      "Black Leather"
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "info" },
                    _react2.default.createElement(
                      "label",
                      null,
                      "Condition"
                    ),
                    _react2.default.createElement(
                      "h5",
                      null,
                      "Like New"
                    )
                  )
                ),
                _react2.default.createElement(
                  "div",
                  { className: "description" },
                  _react2.default.createElement(
                    "label",
                    null,
                    "Description"
                  ),
                  _react2.default.createElement(
                    "p",
                    null,
                    "The fully redesigned 2017 BMW 5 Series brings a slew of new features, making it one of the most technologically advanced luxury midsize cars. The 5 Series' ride emphasizes comfort, and while it's fairly composed, sportier rivals provide a more engaging driving experience."
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Details;
}(_react.Component);

exports.default = Details;

/***/ }),

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(15);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(112);

var _axios = __webpack_require__(69);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
	_inherits(Home, _Component);

	function Home() {
		_classCallCheck(this, Home);

		var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this));

		_this.clickedBtn = function () {
			console.log('');
		};

		_this.loopCategories = function () {
			var _this$props = _this.props,
			    match = _this$props.match,
			    history = _this$props.history;
			//if statement for data

			if (_this.state.categoriesData != '') {
				//  return back the loop of categories
				return _this.state.categoriesData.map(function (category, i) {
					// created a loop for the listings
					var loopListings = function loopListings() {
						return category.listings.map(function (listing, index) {
							return _react2.default.createElement(
								_reactRouterDom.Link,
								{ to: '/' + match.params.city + '/' + category.title + '/' + listing.slug, key: index },
								listing.name
							);
						});
					};
					return _react2.default.createElement(
						'div',
						{ className: 'categories', key: i },
						_react2.default.createElement(
							'a',
							{ href: '/' + match.params.city + '/' + category.title, className: 'title' },
							category.title
						),
						_react2.default.createElement(
							'div',
							{ className: 'group-links ' + (category.title == 'jobs' || category.title == 'personals' || category.title == 'housing' ? 'single-col' : '') },
							loopListings()
						)
					);
				});
			} else {
				return 'Loading Section';
			}
		};

		_this.loopTags = function () {
			var testTags = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
			return testTags.map(function (item, i) {
				return _react2.default.createElement(
					'div',
					{ key: i, className: 'tag' },
					'Apple Macbook Pro',
					' '
				);
			});
		};

		_this.state = {
			name: 'Johnny',
			categoriesData: ''
		};
		return _this;
	}

	_createClass(Home, [{
		key: 'componentWillMount',
		value: function componentWillMount() {}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _props = this.props,
			    match = _props.match,
			    history = _props.history;

			if (match.params.city == undefined) {
				history.push('/nyc');
			}

			var self = this;
			_axios2.default.get('/api/' + match.params.city).then(function (response) {
				self.setState({
					categoriesData: response.data
				}, function () {
					console.log(self.state);
				});
			}).catch(function (error) {
				console.log(error);
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'home' },
				_react2.default.createElement(
					'div',
					{ className: 'container' },
					_react2.default.createElement(
						'h1',
						null,
						'Connecting People ',
						_react2.default.createElement('br', null),
						' Everywhere :)'
					),
					_react2.default.createElement(
						'section',
						{ className: 'links' },
						this.loopCategories()
					),
					_react2.default.createElement(
						'section',
						{ className: 'trending' },
						_react2.default.createElement('input', { type: 'text', name: 'search', className: 'search' }),
						_react2.default.createElement(
							'div',
							{ className: 'title' },
							_react2.default.createElement('i', { className: 'far fa-clock' }),
							' Trending Now!!'
						),
						_react2.default.createElement(
							'div',
							{ className: 'trending-tags' },
							this.loopTags()
						)
					)
				)
			);
		}
	}]);

	return Home;
}(_react.Component);

exports.default = Home;

/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(15);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Listings = function (_Component) {
  _inherits(Listings, _Component);

  function Listings() {
    _classCallCheck(this, Listings);

    var _this = _possibleConstructorReturn(this, (Listings.__proto__ || Object.getPrototypeOf(Listings)).call(this));

    _this.loopItems = function () {
      var testArray = [1, 2, 3, 4, 5, 6, 7, 8];
      return testArray.map(function (item, i) {
        return _react2.default.createElement(
          "div",
          { className: "item" },
          _react2.default.createElement(
            "div",
            { className: "image" },
            _react2.default.createElement(
              "div",
              { className: "price" },
              "$9,000"
            ),
            "Image"
          ),
          _react2.default.createElement(
            "div",
            { className: "details" },
            _react2.default.createElement("i", { className: "fa fa-star", "aria-hidden": "true" }),
            _react2.default.createElement(
              "h5",
              null,
              "2017 BMW 5-Series"
            ),
            _react2.default.createElement(
              "h6",
              null,
              "Atlanta"
            )
          )
        );
      });
    };

    _this.state = {};
    return _this;
  }

  _createClass(Listings, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          match = _props.match,
          location = _props.location,
          history = _props.history;

      return _react2.default.createElement(
        "div",
        { className: "listings-page" },
        _react2.default.createElement(
          "div",
          { className: "container" },
          _react2.default.createElement(
            "section",
            { id: "filter" },
            _react2.default.createElement(
              "div",
              { className: "form-group price" },
              _react2.default.createElement(
                "label",
                null,
                "PRICE"
              ),
              _react2.default.createElement(
                "div",
                { className: "min-max" },
                _react2.default.createElement(
                  "select",
                  { name: "price", className: "min-price" },
                  _react2.default.createElement(
                    "option",
                    { value: "0" },
                    "0"
                  )
                ),
                _react2.default.createElement(
                  "select",
                  { name: "max-price", className: "max-price" },
                  _react2.default.createElement(
                    "option",
                    { value: "1000" },
                    "1000"
                  )
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "form-group make" },
              _react2.default.createElement(
                "label",
                null,
                "MAKE"
              ),
              _react2.default.createElement(
                "select",
                { name: "make", className: "make" },
                _react2.default.createElement(
                  "option",
                  { value: "0" },
                  "0"
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "form-group model" },
              _react2.default.createElement(
                "label",
                null,
                "MODEL"
              ),
              _react2.default.createElement(
                "select",
                { name: "model", className: "model" },
                _react2.default.createElement(
                  "option",
                  { value: "BMW" },
                  "BMW"
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "form-group button" },
              _react2.default.createElement(
                "div",
                { className: "primary-btn" },
                "Update"
              ),
              _react2.default.createElement(
                "div",
                { className: "reset-btn" },
                "Reset"
              )
            )
          )
        ),
        _react2.default.createElement(
          "section",
          { id: "list-view" },
          _react2.default.createElement(
            "div",
            { className: "container" },
            _react2.default.createElement(
              "div",
              { className: "white-box" },
              _react2.default.createElement(
                "section",
                { className: "change-view" },
                _react2.default.createElement(
                  "div",
                  { className: "form-group view-dropdown" },
                  _react2.default.createElement(
                    "select",
                    { name: "select-view", className: "select-view" },
                    _react2.default.createElement(
                      "option",
                      { value: "gallery" },
                      "Gallery View"
                    ),
                    _react2.default.createElement(
                      "option",
                      { value: "list" },
                      "List View"
                    ),
                    _react2.default.createElement(
                      "option",
                      { value: "thumb" },
                      "Thumb View"
                    )
                  )
                ),
                _react2.default.createElement(
                  "div",
                  { className: "form-group sort-dropdown" },
                  _react2.default.createElement(
                    "select",
                    { name: "sort-dropdown", className: "sort-dropdown" },
                    _react2.default.createElement(
                      "option",
                      { value: "gallery" },
                      "Newest"
                    )
                  )
                )
              ),
              _react2.default.createElement(
                "section",
                { className: "all-items" },
                this.loopItems()
              )
            )
          )
        )
      );
    }
  }]);

  return Listings;
}(_react.Component);

exports.default = Listings;

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(15);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Gallery = function (_Component) {
  _inherits(Gallery, _Component);

  function Gallery() {
    _classCallCheck(this, Gallery);

    var _this = _possibleConstructorReturn(this, (Gallery.__proto__ || Object.getPrototypeOf(Gallery)).call(this));

    _this.allImagesLoop = function () {
      console.log(_this.state.allImages);
      return _this.state.allImages.map(function (item, i) {
        return _react2.default.createElement("div", { key: i, onClick: _this.clickedThumb.bind(null, i), className: "thumb-image", style: {
            "backgroundImage": "url('" + item + "')"
          } });
      });
    };

    _this.nextBtn = function () {
      if (_this.state.currentIndex != _this.state.allImages.length - 1) {
        _this.setState({
          currentIndex: _this.state.currentIndex + 1
        });
      }
    };

    _this.prevBtn = function () {
      if (_this.state.currentIndex != 0) {
        _this.setState({
          currentIndex: _this.state.currentIndex - 1
        });
      }
    };

    _this.clickedThumb = function (index) {
      _this.setState({
        currentIndex: index
      });
    };

    _this.state = {
      allImages: '',
      currentImage: '',
      currentIndex: 0
    };
    return _this;
  }

  _createClass(Gallery, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var allImages = ['https://cars.usnews.com/static/images/Auto/custom/13372/2017_BMW_5-Series_5.jpg', 'https://cars.usnews.com/static/images/Auto/custom/13372/2017_BMW_5-Series_6.jpg', 'https://cars.usnews.com/static/images/Auto/custom/13372/2017_BMW_5-Series_7.jpg', 'https://cars.usnews.com/static/images/Auto/custom/13372/2017_BMW_5-Series_12.jpg', 'https://cars.usnews.com/static/images/Auto/custom/13372/2017_BMW_5-Series_13.jpg', 'https://cars.usnews.com/static/images/Auto/custom/13372/2017_BMW_5-Series_14.jpg'];

      this.setState({
        allImages: allImages,
        currentImage: allImages[this.state.currentIndex]
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          match = _props.match,
          location = _props.location,
          history = _props.history;

      return _react2.default.createElement(
        "div",
        { className: "gallery" },
        _react2.default.createElement(
          "div",
          { className: "slider" },
          _react2.default.createElement(
            "div",
            { className: "main-image" },
            _react2.default.createElement(
              "div",
              { className: "arrows left-arrow", onClick: this.prevBtn },
              _react2.default.createElement("i", { className: "fa fa-chevron-circle-left", "aria-hidden": "true" })
            ),
            _react2.default.createElement(
              "div",
              { className: "arrows right-arrow", onClick: this.nextBtn },
              _react2.default.createElement("i", { className: "fa fa-arrow-circle-right", "aria-hidden": "true" })
            ),
            _react2.default.createElement("div", { className: "image-1", style: {
                "backgroundImage": "url('" + this.state.allImages[this.state.currentIndex] + "')"
              } })
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "thumbnails" },
          this.allImagesLoop()
        )
      );
    }
  }]);

  return Gallery;
}(_react.Component);

exports.default = Gallery;

/***/ })

},[144]);