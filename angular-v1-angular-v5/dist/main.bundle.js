webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/CoexistingUrlHandlingStrategy.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoexistingUrlHandlingStrategy; });
var CoexistingUrlHandlingStrategy = /** @class */ (function () {
    function CoexistingUrlHandlingStrategy() {
    }
    // Coexists with Angular 1 ngRoute by only handling urls that are true,
    CoexistingUrlHandlingStrategy.prototype.shouldProcessUrl = function (url) {
        return url.toString().startsWith('/view3')
            || url.toString() === '/';
    };
    CoexistingUrlHandlingStrategy.prototype.extract = function (url) {
        return url;
    };
    CoexistingUrlHandlingStrategy.prototype.merge = function (newUrlPart, rawUrl) {
        return newUrlPart;
    };
    return CoexistingUrlHandlingStrategy;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CoexistingUrlHandlingStrategy__ = __webpack_require__("./src/app/CoexistingUrlHandlingStrategy.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__view3_view3_component__ = __webpack_require__("./src/app/view3/view3.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var appRoutes = [
    // { path: '', component: HomeComponent },
    { path: 'view3', component: __WEBPACK_IMPORTED_MODULE_3__view3_view3_component__["a" /* View3Component */] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__view3_view3_component__["a" /* View3Component */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(appRoutes, {})
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* UrlHandlingStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_2__CoexistingUrlHandlingStrategy__["a" /* CoexistingUrlHandlingStrategy */] },
            ],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>{{title}}</h1>\n<ul>\n  <li><a href=\"/view1\">View 1</a></li> <!-- ng1 link -->\n  <li><a href=\"/view2\">View 2</a></li> <!-- ng1 link -->\n  <li><a routerLink='/view3' routerLinkActive='active'>View 3</a></li> <!-- ng2+ link -->\n</ul>\n\n<div ng-view class=\"view-frame\"></div> <!-- ng1 route content -->\n<router-outlet></router-outlet><!-- ng2+ route content -->\n\n<!-- <test-directive></test-directive> -->\n<test></test>\n<directive-with-native-service></directive-with-native-service>\n\n\n<h2>{{serviceTest}}</h2>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ng1_app_services_numberService__ = __webpack_require__("./src/app/ng1-app/services/numberService.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng1_app_services_nativeService__ = __webpack_require__("./src/app/ng1-app/services/nativeService.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(numberSevice, nativeService) {
        this.numberSevice = numberSevice;
        this.nativeService = nativeService;
        this.title = 'AngularJS/Angular 5 Hybrid Application';
        this.serviceTest = '';
        this.serviceTest = this.numberSevice.toVerySmallText(10000000);
        nativeService.tryHttp('http://localhost:3000/api/v1/places/all/names', function (err, result) {
            if (err) {
                console.log({ err: err });
            }
            else {
                console.log({ result: result });
            }
        });
        console.log(this.numberSevice.toVerySmallText(10000000));
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__ng1_app_services_numberService__["a" /* numberService */],
            __WEBPACK_IMPORTED_MODULE_2__ng1_app_services_nativeService__["a" /* nativeService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_nativeService__ = __webpack_require__("./src/app/services/nativeService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__imported_directive_with_native_service_directive_with_wative_service__ = __webpack_require__("./src/app/imported/directive-with-native-service/directive-with-wative-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_numberService__ = __webpack_require__("./src/app/services/numberService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__imported_ng1_test_directive_test_directive_component__ = __webpack_require__("./src/app/imported/ng1-test-directive/test-directive.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router_upgrade__ = __webpack_require__("./node_modules/@angular/router/esm5/upgrade.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_upgrade_static__ = __webpack_require__("./node_modules/@angular/upgrade/esm5/static.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ng1_app_app__ = __webpack_require__("./src/app/ng1-app/app.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AppModule = /** @class */ (function () {
    function AppModule(upgrade) {
        this.upgrade = upgrade;
        // bootstrap ng1 app
        this.upgrade.bootstrap(document.body, [__WEBPACK_IMPORTED_MODULE_10__ng1_app_app__["a" /* myApp */].name], { strictDi: false });
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_router_upgrade__["a" /* setUpLocationSync */])(this.upgrade); // https://github.com/angular/angular/issues/14081
    }
    AppModule.prototype.ngDoBootstrap = function (ref) {
        ref.bootstrap(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]); // manual bootstrap AppComponent
        console.log(__WEBPACK_IMPORTED_MODULE_10__ng1_app_app__["a" /* myApp */].name);
    };
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__imported_ng1_test_directive_test_directive_component__["a" /* testDirectiveComponent */],
                __WEBPACK_IMPORTED_MODULE_1__imported_directive_with_native_service_directive_with_wative_service__["a" /* TestDirectiveWithNativeService */],
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_upgrade_static__["b" /* UpgradeModule */]
            ],
            providers: [
                { provide: '$scope', useExisting: '$rootScope' },
                __WEBPACK_IMPORTED_MODULE_2__services_numberService__["a" /* numberServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_0__services_nativeService__["a" /* nativeServiceProvider */],
            ],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__angular_upgrade_static__["b" /* UpgradeModule */]])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/imported/directive-with-native-service/directive-with-wative-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestDirectiveWithNativeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_upgrade_static__ = __webpack_require__("./node_modules/@angular/upgrade/esm5/static.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestDirectiveWithNativeService = /** @class */ (function (_super) {
    __extends(TestDirectiveWithNativeService, _super);
    function TestDirectiveWithNativeService(elementRef, injector) {
        return _super.call(this, 'testDirectiveWithNativeService', elementRef, injector) || this;
    }
    TestDirectiveWithNativeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: 'directive-with-native-service'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injector */]])
    ], TestDirectiveWithNativeService);
    return TestDirectiveWithNativeService;
}(__WEBPACK_IMPORTED_MODULE_1__angular_upgrade_static__["a" /* UpgradeComponent */]));



/***/ }),

/***/ "./src/app/imported/ng1-test-directive/test-directive.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return testDirectiveComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_upgrade_static__ = __webpack_require__("./node_modules/@angular/upgrade/esm5/static.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var testDirectiveComponent = /** @class */ (function (_super) {
    __extends(testDirectiveComponent, _super);
    function testDirectiveComponent(elementRef, injector) {
        return _super.call(this, 'testDirective', elementRef, injector) || this;
    }
    testDirectiveComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: 'test'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injector */]])
    ], testDirectiveComponent);
    return testDirectiveComponent;
}(__WEBPACK_IMPORTED_MODULE_1__angular_upgrade_static__["a" /* UpgradeComponent */]));



/***/ }),

/***/ "./src/app/ng1-app/app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular_route__ = __webpack_require__("./node_modules/angular-route/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular_route___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular_route__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view1_view1__ = __webpack_require__("./src/app/ng1-app/view1/view1.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view2_view2__ = __webpack_require__("./src/app/ng1-app/view2/view2.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_version_version__ = __webpack_require__("./src/app/ng1-app/components/version/version.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_testDirective_test__ = __webpack_require__("./src/app/ng1-app/components/testDirective/test.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_services__ = __webpack_require__("./src/app/ng1-app/services/services.js");









// Declare app level module which depends on views, and components
const myApp = angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'myApp.test',
  'myApp.services',
])
.  config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
  // $locationProvider.hashPrefix('!');
    $locationProvider.html5Mode(true);

  // $routeProvider.otherwise({redirectTo: '/view1'});
  }]);
/* harmony export (immutable) */ __webpack_exports__["a"] = myApp;



/***/ }),

/***/ "./src/app/ng1-app/components/testDirective/test-directive.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular.module('myApp.test.test-directive', []).directive('testDirective', function() {
  return {
    restrict: 'E',
    scope: {
      id: '@',
    },
    controllerAs: '$ctrl',
    bindToController: true,
    controller: function () {
      this.subtitle = 'Esta semana';
    },
    template: `
    <div>
      dsadsad
      <h1>{{$ctrl.subtitle}}</h1>
      <h1>{{$ctrl.id}}</h1>
    </div>
    `,
    link: function(scope, elem) {
    }
  }
});



/***/ }),

/***/ "./src/app/ng1-app/components/testDirective/test.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__test_directive__ = __webpack_require__("./src/app/ng1-app/components/testDirective/test-directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__test_directive___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__test_directive__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__with_service__ = __webpack_require__("./src/app/ng1-app/components/testDirective/with-service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__with_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__with_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__with_nattive_service__ = __webpack_require__("./src/app/ng1-app/components/testDirective/with-nattive-service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__with_nattive_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__with_nattive_service__);







const myAppTest = angular.module('myApp.test', [
  'myApp.test.test-directive',
  'myApp.test.with-service',
  'myApp.test.with-native',
]);
/* unused harmony export myAppTest */



/***/ }),

/***/ "./src/app/ng1-app/components/testDirective/with-nattive-service.js":
/***/ (function(module, exports) {


angular.module('myApp.test.with-native', [])
  .directive('testDirectiveWithNativeService', () => { // eslint-disable-line
    return {
      restrict: 'E',
      scope: {
        id: '@',
      },
      controllerAs: '$ctrl',
      bindToController: true,
      controller: ['nativeService', 'numberService', directiveController],
      template: `
    <div>
      dsadsad
      <h1>{{$ctrl.subtitle}}</h1>
      <h1>{{$ctrl.id}}</h1>
      <h1>Resultado del servicio $http</h1>
      <h3>{{$ctrl.result}}</h3>
      <h3>number: {{$ctrl.number}}</h3>
    </div>
    `,
      link(scope, elem) {
        scope.$ctrl.onInit(elem);
      },
    };
  });


function directiveController(nativeService, numberService) {
  this.subtitle = 'con servicio nativo';
  this.onInit = () => {
    nativeService.tryHttp('http://localhost:3000/api/v1/places/all/names', (err, result) => {
      if (err) {
        console.log({ err });
      } else {
        this.result = result;
      }
    });
    this.number = numberService.toVerySmallText(10000000);
  };
}


/***/ }),

/***/ "./src/app/ng1-app/components/testDirective/with-service.js":
/***/ (function(module, exports) {



angular.module('myApp.test.with-service', [])
.directive('testDirectiveWithService', function(numberService) {
  return {
    restrict: 'E',
    scope: {
      id: '@',
    },
    controllerAs: '$ctrl',
    bindToController: true,
    controller: ['numberService',function (numberService) {
      this.subtitle = 'con servicio';
      this.onInit = function(elem) {
        this.serviceResult = numberService.toVerySmallText(1000000);
      }
    }],
    template: `
    <div>
      dsadsad
      <h1>{{$ctrl.subtitle}}</h1>
      <h1>{{$ctrl.id}}</h1>
      <h1>Resultado del servicio</h1>
      <h3>{{$ctrl.serviceResult}}</h3>
    </div>
    `,
    link: function(scope, elem) {
      scope.$ctrl.onInit(elem);
    }
  }
});
  
  

/***/ }),

/***/ "./src/app/ng1-app/components/version/interpolate-filter.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular.module('myApp.version.interpolate-filter', [])

.filter('interpolate', ['version', function(version) {
  return function(text) {
    return String(text).replace(/\%VERSION\%/mg, version);
  };
}]);


/***/ }),

/***/ "./src/app/ng1-app/components/version/version-directive.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular.module('myApp.version.version-directive', [])

.directive('appVersion', ['version', function(version) {
  return function(scope, elm, attrs) {
    elm.text(version);
  };
}]);


/***/ }),

/***/ "./src/app/ng1-app/components/version/version.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interpolate_filter__ = __webpack_require__("./src/app/ng1-app/components/version/interpolate-filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interpolate_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__interpolate_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__version_directive__ = __webpack_require__("./src/app/ng1-app/components/version/version-directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__version_directive___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__version_directive__);





const myAppVersion = angular.module('myApp.version', [
  'myApp.version.interpolate-filter',
  'myApp.version.version-directive'
])

.value('version', '0.1');
/* unused harmony export myAppVersion */



/***/ }),

/***/ "./src/app/ng1-app/services/native.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nativeService__ = __webpack_require__("./src/app/ng1-app/services/nativeService.js");




angular.module('myApp.services.native', [])
  .factory('nativeService', __WEBPACK_IMPORTED_MODULE_0__nativeService__["a" /* nativeService */]);


/***/ }),

/***/ "./src/app/ng1-app/services/nativeService.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* eslint-disable import/prefer-default-export */

class nativeService {

  constructor($http) {
    this.$http = $http;
  }

  tryHttp(url, callback) {
    this.$http.get(url)
      .success((results) => {
        callback(null, results);
      })
      .error((data) => {
        callback(data);
      });
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = nativeService;



/***/ }),

/***/ "./src/app/ng1-app/services/numberService.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* eslint-disable import/prefer-default-export */

class numberService {
  // constructor() {}

  toVerySmallText(n) {
    if (n < 1000) {
      return n.toString();
    }
    if (n > 500000) {
      return '>500k';
    }
    if (n < 1000000) {
      const x = Math.round(n / 1000);
      return `${x}k`;
    }

  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = numberService;



/***/ }),

/***/ "./src/app/ng1-app/services/service1.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__numberService__ = __webpack_require__("./src/app/ng1-app/services/numberService.js");




angular.module('myApp.services.service1', [])
  .factory('numberService', __WEBPACK_IMPORTED_MODULE_0__numberService__["a" /* numberService */]);


/***/ }),

/***/ "./src/app/ng1-app/services/services.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular_route__ = __webpack_require__("./node_modules/angular-route/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular_route___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular_route__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service1__ = __webpack_require__("./src/app/ng1-app/services/service1.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__native__ = __webpack_require__("./src/app/ng1-app/services/native.js");





const myAppServices = angular.module('myApp.services', [
  'myApp.services.service1',
  'myApp.services.native',
]);

/* unused harmony default export */ var _unused_webpack_default_export = (myAppServices);


/***/ }),

/***/ "./src/app/ng1-app/view1/view1.html":
/***/ (function(module, exports) {

module.exports = "<p>This is the partial for view 1.</p>\n<app-version></app-version>\n<test-directive id=\"5\"></test-directive>\n"

/***/ }),

/***/ "./src/app/ng1-app/view1/view1.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular_route__ = __webpack_require__("./node_modules/angular-route/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular_route___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular_route__);



angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    // templateUrl: 'view1/view1.html',
    template: __webpack_require__("./src/app/ng1-app/view1/view1.html"),
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function() {

}]);

/***/ }),

/***/ "./src/app/ng1-app/view2/view2.html":
/***/ (function(module, exports) {

module.exports = "<p>This is the partial for view 2.</p>\n<p>\n  Showing of 'interpolate' filter:\n  {{ 'Current version is v%VERSION%.' | interpolate }}\n</p>\n<app-version></app-version> "

/***/ }),

/***/ "./src/app/ng1-app/view2/view2.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular_route__ = __webpack_require__("./node_modules/angular-route/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular_route___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular_route__);



const view2 = angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    // templateUrl: 'view2/view2.html',
    template: __webpack_require__("./src/app/ng1-app/view2/view2.html"),
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', [function() {

}]);
/* unused harmony export view2 */



/***/ }),

/***/ "./src/app/services/nativeService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export nativeServiceFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return nativeServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ng1_app_services_nativeService__ = __webpack_require__("./src/app/ng1-app/services/nativeService.js");

function nativeServiceFactory(i) {
    return i.get('nativeService');
}
var nativeServiceProvider = {
    provide: __WEBPACK_IMPORTED_MODULE_0__ng1_app_services_nativeService__["a" /* nativeService */],
    useFactory: nativeServiceFactory,
    deps: ['$injector']
};


/***/ }),

/***/ "./src/app/services/numberService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export numberServiceFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return numberServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ng1_app_services_numberService__ = __webpack_require__("./src/app/ng1-app/services/numberService.js");

function numberServiceFactory(i) {
    return i.get('numberService');
}
var numberServiceProvider = {
    provide: __WEBPACK_IMPORTED_MODULE_0__ng1_app_services_numberService__["a" /* numberService */],
    useFactory: numberServiceFactory,
    deps: ['$injector']
};


/***/ }),

/***/ "./src/app/view3/view3.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>{{title}}</h2>\n<p>This is the partial for view 3.</p>\n<!-- <app-version></app-version> -->\n"

/***/ }),

/***/ "./src/app/view3/view3.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return View3Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var View3Component = /** @class */ (function () {
    function View3Component() {
        this.title = 'Angular 5 - View 3';
    }
    View3Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-view-3',
            template: __webpack_require__("./src/app/view3/view3.component.html"),
        })
    ], View3Component);
    return View3Component;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_upgrade_static__ = __webpack_require__("./node_modules/@angular/upgrade/esm5/static.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular__ = __webpack_require__("./node_modules/angular/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("./src/environments/environment.ts");






if (__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_2__angular_upgrade_static__["c" /* setAngularJSGlobal */])(__WEBPACK_IMPORTED_MODULE_3_angular__);
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map