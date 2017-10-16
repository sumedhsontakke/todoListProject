webpackJsonp([2],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_call_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_database__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the TodoListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TodoListPage = (function () {
    function TodoListPage(database, navCtrl, navParams, httpCallService, loadingController) {
        this.database = database;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpCallService = httpCallService;
        this.loadingController = loadingController;
        this.todoList = [];
        this.add = "";
        this.item = navParams.get("obj");
        console.log(this.item);
        this.loadData(this.item.id);
    }
    TodoListPage.prototype.addNewTodo = function () {
        console.log("data", this.add);
        //get last obj
        var temp = this.wholeObj.data.length;
        var obj = { "completed": false, "id": this.wholeObj.data[temp - 1].id, "title": this.add, "userId": this.item.id };
        //obj = this.wholeObj[temp - 1].id;
        //insert into temp array
        this.todoList.unshift(obj);
        //insert into local db;
        this.wholeObj.data.push(obj);
        //select db
        this.database.userdb();
        this.database.update(this.wholeObj._id, this.wholeObj);
        this.add = "";
        var loader = this.loadingController.create({
            content: "Todo added successfully",
            spinner: "hide",
            duration: 2000
        });
        loader.present();
    };
    TodoListPage.prototype.loadData = function (id) {
        var _this = this;
        //get todo list by user
        //select db
        this.database.userdb();
        //get data 
        this.database.getAll().then(function (data) {
            console.log("DATA FOUND", data);
            //this.dbUniqueId = data["rows"][0].doc._id;
            _this.wholeObj = data["rows"][0].doc;
            for (var i = 0; i < data["rows"][0].doc.data.length; i++) {
                if (data["rows"][0].doc.data[i].userId == id) {
                    _this.todoList.push(data["rows"][0].doc.data[i]);
                }
            }
        }, function (err) {
            console.log("something went wrong.. while fetching datafrom local db");
        });
    };
    TodoListPage.prototype.updateDb = function (value) {
        console.log(value);
        this.wholeObj.data = value;
        this.database.update(this.wholeObj._id, this.wholeObj);
        var loader = this.loadingController.create({
            content: "Status Updated successfully",
            spinner: "hide",
            duration: 2000
        });
        loader.present();
    };
    TodoListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TodoListPage');
    };
    return TodoListPage;
}());
TodoListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-todo-list',template:/*ion-inline-start:"D:\wamp\www\sumedh\todo\src\pages\todo-list\todo-list.html"*/'<!--\n  Generated template for the TodoListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>todoList</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div>\n\n  </div>\n  <ion-card *ngFor="let value of todoList">\n\n    <ion-card-header>\n      Todo\n    </ion-card-header>\n\n    <ion-card-content padding>\n      <div>\n        Title: {{value.title}}\n      </div>\n      <div>\n       \n        <ion-item class="border">\n            <ion-label>Complete Status</ion-label>\n            <ion-checkbox color="dark" [checked]="value.completed" [(ngModel)]="value.completed" (click)="updateDb(todoList)"></ion-checkbox>\n          </ion-item>        \n      </div>\n\n    </ion-card-content>\n\n  </ion-card>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-row>\n        <ion-col col-10>\n            <ion-item>\n                <ion-label fixed>Create new todo</ion-label>\n                <ion-input type="text" [(ngModel)]="add" value=""></ion-input>\n              </ion-item>            \n          </ion-col>      \n      <ion-col col-2>\n          <button ion-button icon-only (click)="addNewTodo()" [disabled]=\'add == ""\'>\n              <ion-icon name="add"></ion-icon>\n            </button>\n              \n      </ion-col>\n     </ion-row> \n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"D:\wamp\www\sumedh\todo\src\pages\todo-list\todo-list.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__providers_database__["a" /* Database */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_database__["a" /* Database */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__providers_http_call_service__["a" /* HttpCallService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_http_call_service__["a" /* HttpCallService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]) === "function" && _e || Object])
], TodoListPage);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=todo-list.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_call_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_todo_list_todo_list__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the DashboardPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var DashboardPage = (function () {
    function DashboardPage(navCtrl, navParams, httpCallService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpCallService = httpCallService;
        this.loadData();
    }
    DashboardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DashboardPage');
    };
    DashboardPage.prototype.loadData = function () {
        var _this = this;
        this.httpCallService.postData("users", {}, Headers)
            .then(function (data) {
            _this.users = data;
        }, function (err) {
        });
    };
    DashboardPage.prototype.userSelect = function (data) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_todo_list_todo_list__["a" /* TodoListPage */], { "obj": data });
    };
    return DashboardPage;
}());
DashboardPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-dashboard',template:/*ion-inline-start:"D:\wamp\www\sumedh\todo\src\pages\dashboard\dashboard.html"*/'<!--\n  Generated template for the DashboardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>User List</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n  <div *ngFor = "let obj of users">\n    <ion-card>\n      <ion-card-header>\n        User Description\n      </ion-card-header>\n      <ion-card-content padding-top class="desc-data"> \n        <div>\n          <ion-icon class="icons-list" name="person"></ion-icon>\n          {{obj.name}}\n        </div>\n        <div>\n          <ion-icon class="icons-list" name="mail"></ion-icon>\n          {{obj.email}}\n        </div>\n        <div>\n          <ion-icon class="icons-list" name="home"></ion-icon>\n          {{obj.address.suite}}, {{ obj.address.street}}, {{obj.address.city}}, {{obj.address.zipcode}}\n        </div>\n        <div>\n          <ion-icon class="icons-list" name="call"></ion-icon>\n          {{obj.phone}}\n        </div>\n        <div>\n          <ion-icon class="icons-list" name="cloud-done"></ion-icon>\n          {{obj.website}}\n        </div> \n        <div>\n          <ion-icon class="icons-list" name="logo-buffer"></ion-icon>\n          {{obj.company.name}}\n        </div>        \n        <div>\n        <button margin-top margin-bottom (click)="userSelect(obj)"  ion-button>View Todos</button>  \n        </div>  \n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\wamp\www\sumedh\todo\src\pages\dashboard\dashboard.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_http_call_service__["a" /* HttpCallService */]])
], DashboardPage);

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 110:
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
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/dashboard/dashboard.module": [
		284,
		1
	],
	"../pages/todo-list/todo-list.module": [
		283,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 152;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Database; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_pouchdb__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_call_service__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the Database provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var Database = (function () {
    function Database(http, httpCallService) {
        var _this = this;
        this.http = http;
        this.httpCallService = httpCallService;
        console.log('Hello Userdb Provider');
        //this.db = new PouchDB("user");
        //check if user todo list is already there
        //select db
        this.userdb();
        this.getAll().then(function (data) {
            console.log("data found", data);
            if (data['total_rows'] == 0) {
                _this.httpCallService.postData("todos", {}, Headers)
                    .then(function (data) {
                    console.log("server data", data);
                    //push server data in local db
                    _this.insert({ data: data });
                }, function (err) {
                });
            }
        }, function (err) {
            console.log("data not found");
        });
    }
    Database.prototype.userdb = function () {
        this.db = new __WEBPACK_IMPORTED_MODULE_3_pouchdb__["a" /* default */]("user");
        this.db.info().then(function (data) {
            console.log("user db initiated", data);
        });
    };
    Database.prototype.getWhere = function (doc) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            //Inserting Document
            _this.db.get(doc, function (err, response) {
                if (err) {
                    return reject(err);
                }
                else {
                    return "inserted";
                }
            });
        });
    };
    Database.prototype.getAll = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            //Inserting Document
            _this.db.allDocs({
                include_docs: true,
                attachments: true
            }).then(function (result) {
                resolve(result);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    Database.prototype.insert = function (doc) {
        var _this = this;
        doc._id = (new Date().valueOf()).toString();
        return new Promise(function (resolve, reject) {
            //Inserting Document
            _this.db.put(doc, function (err, response) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve("inserted");
                }
            });
        });
    };
    //doc is unique _id and datatoupdate is object
    Database.prototype.update = function (doc, datatoupdate) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var self = _this;
            _this.db.get(doc).then(function (value) {
                datatoupdate._rev = value._rev;
                return self.db.put(datatoupdate);
            }).then(function (response) {
                resolve(response);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    Database.prototype.delete = function () {
        var db = this.db;
        return new Promise(function (resolve, reject) {
            db.allDocs().then(function (result) {
                // Promise isn't supported by all browsers; you may want to use bluebird
                return Promise.all(result.rows.map(function (row) {
                    return db.remove(row.id, row.value.rev);
                }));
            }).then(function () {
                resolve(true);
            }).catch(function (err) {
                console.log(err);
                reject(err);
            });
        });
    };
    Database.prototype.deleteDoc = function (mydoc) {
        var db = this.db;
        return new Promise(function (resolve, reject) {
            db.get(mydoc).then(function (doc) {
                return db.remove(doc);
            }).then(function (result) {
                resolve(true);
            }).catch(function (err) {
                console.log(err);
                reject(err);
            });
        });
    };
    return Database;
}());
Database = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__providers_http_call_service__["a" /* HttpCallService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_http_call_service__["a" /* HttpCallService */]) === "function" && _b || Object])
], Database);

var _a, _b;
//# sourceMappingURL=database.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(221);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_dashboard_dashboard__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_todo_list_todo_list__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_http_call_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_database__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









//providers


var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_dashboard_dashboard__["a" /* DashboardPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_todo_list_todo_list__["a" /* TodoListPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/todo-list/todo-list.module#TodoListPageModule', name: 'TodoListPage', segment: 'todo-list', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_dashboard_dashboard__["a" /* DashboardPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_todo_list_todo_list__["a" /* TodoListPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_9__providers_http_call_service__["a" /* HttpCallService */],
            __WEBPACK_IMPORTED_MODULE_10__providers_database__["a" /* Database */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_call_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_database__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_dashboard_dashboard__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(database, httpCallService, splashScreen, statusBar, platform) {
        this.database = database;
        this.httpCallService = httpCallService;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.platform = platform;
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Dashboard', component: __WEBPACK_IMPORTED_MODULE_6__pages_dashboard_dashboard__["a" /* DashboardPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        var self = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_dashboard_dashboard__["a" /* DashboardPage */]);
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        //check if page component is logout
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\wamp\www\sumedh\todo\src\app\app.html"*/'<ion-menu [content]="content" side="right">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>{{menuTitle}}</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-footer *ngIf="showFooter">\n  <ion-grid *ngIf="colSize == \'col-3\'; else elseBlock"  class="four-tabs-grid">\n    <ion-row>\n      <ion-col col-3  *ngFor="let tabs1 of footerTabsList" class="tabs">\n        <ion-toolbar>\n          <ion-title (click)="footerbarclick($event, tabs1.component)">\n            <img class="footer-icon" [src]="tabs1.imgSrc" /> <span>{{tabs1.text}}</span></ion-title>\n        </ion-toolbar>\n      </ion-col>\n    </ion-row>\n  </ion-grid> \n  <ng-template #elseBlock>\n  <ion-grid>\n      <ion-row>\n        <ion-col col-4 *ngFor="let tabs of footerTabsList" class="tabs">\n          <ion-toolbar>\n            <ion-title (click)="footerbarclick($event, tabs.component)">\n              <img class="footer-icon" [src]="tabs.imgSrc" />  <span>{{tabs.text}} </span></ion-title>\n          </ion-toolbar>\n        </ion-col>\n      </ion-row>\n    </ion-grid>  \n  </ng-template>\n</ion-footer>\n\n\n<!-- <ion-tabs>\n    <ion-tab tabIcon="call" [root]="tabOne" tabBadge="3" tabBadgeStyle="danger">sadfsadf</ion-tab>\n    <ion-tab tabIcon="chatbubbles" [root]="tabTwo" tabBadge="14" tabBadgeStyle="danger">asdfasdf</ion-tab>\n    <ion-tab tabIcon="musical-notes" [root]="tabthree">asdfasdf</ion-tab>\n    \n  </ion-tabs> -->\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"D:\wamp\www\sumedh\todo\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_database__["a" /* Database */], __WEBPACK_IMPORTED_MODULE_4__providers_http_call_service__["a" /* HttpCallService */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpCallService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
Generated class for the HttpCallService provider.

See https://angular.io/docs/ts/latest/guide/dependency-injection.html
for more info on providers and Angular DI.
*/
var HttpCallService = (function () {
    function HttpCallService(http) {
        // console.log('Hello HttpCallService Provider');
        this.http = http;
        this.baseUrl = "http://vahano.hurix.com";
        //public baseUrl = "http://172.18.14.169/vahano";
        this.sessionValue = "";
    }
    HttpCallService.prototype.init = function () {
    };
    HttpCallService.prototype.postData = function (credentials, type, headers) {
        var _this = this;
        var self = this;
        return new Promise(function (resolve, reject) {
            //console.log(JSON.stringify(credentials));
            //this.http.post(type, JSON.stringify(credentials), {headers: headers})
            var createdUrl = "https://jsonplaceholder.typicode.com/" + credentials;
            _this.http.get(createdUrl)
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    return HttpCallService;
}());
HttpCallService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], HttpCallService);

//# sourceMappingURL=http-call-service.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.js.map