function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/about-me/about-me.component.ts":
  /*!************************************************!*\
    !*** ./src/app/about-me/about-me.component.ts ***!
    \************************************************/

  /*! exports provided: AboutMeComponent */

  /***/
  function srcAppAboutMeAboutMeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutMeComponent", function () {
      return AboutMeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AboutMeComponent = /*#__PURE__*/function () {
      function AboutMeComponent() {
        _classCallCheck(this, AboutMeComponent);
      }

      _createClass(AboutMeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutMeComponent;
    }();

    AboutMeComponent.ɵfac = function AboutMeComponent_Factory(t) {
      return new (t || AboutMeComponent)();
    };

    AboutMeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutMeComponent,
      selectors: [["about-me"]],
      decls: 77,
      vars: 0,
      consts: [[1, "about-me-container-outer"], [1, "about-me-container-inner"], [1, "main-row"], ["id", "picture-and-name", 1, "contentLeft"], [1, "profile-picture"], ["src", "./../../assets/images/profile_pic.png", "alt", "profilePic", "id", "profilePic"], [1, "name-and-location"], [1, "socialMedia"], ["href", "https://www.linkedin.com/in/samuel-hapgood-785518156/", "target", "_blank"], ["src", "./../../assets/images/linkedin-grey.png", "alt", "LinkedIn Logo"], ["href", "https://github.com/HappyDev95", "target", "_blank"], ["src", "./../../assets/images/github.png", "alt", "Github Logo"], [1, "contentRight"], [1, "about-me-summary"], ["id", "AboutMeHeader"], [1, "skills-hobbies-interests"], [1, "contentLeft"], [1, "techSkillList"], [1, "resume-container"], ["href", "./../../assets/images/resume.pdf", "target", "_blank"], ["src", "./../../assets/images/resume_background.png", "alt", "Resume Image"]],
      template: function AboutMeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Sam Hapgood");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Applications Developer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Pittsburgh, Pennsylvania");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h1", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "About Me");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Motivated and quality-focused Applications Developer skilled in developing complex programs. Ability to quickly master new software packages, API\u2019s and framework technologies. Passionate about the work I do and diligent in the way I do it. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Currently, I am employed at First National Bank as a member of an Applications Development Team working on Teller and sales oriented banking applications. I'm an avid runner and who enjoys the outdoors - the background picture was taken from a hike in the White Mountains. I graduated from Florida State University *Go Noles* and earned a Bachelors of Science degree in Computer Science with a minor in Mathematics as well as Natural Sciences. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Presently, my interests are in learning more about front-end technologies which led me to pickup Angular and TypeScript. Among other things I like to keep myself entertained with projects such as this website, running, and consistently learning. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "section", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Technical Skills");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "ul", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Programming Languages:\tJava, JavaScript, HTML5, CSS, SCSS, XML, C++, JCL, COBOL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Editors:\tEclipse, Visual Studios, Atom, Android Studio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Tools & Software:\tGit, Git Extensions, J2EE, JPA, XSLT, JAXB, JUnit, Java SWT, Batch Scripting, Apache Ant, Eclipse Debugger, Oracle WebLogic, Oracle SQL Developer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Databases: Oracle, MySQL, Google Firebase, IBM IMS, IBM DB2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Frameworks & Methodologies: JSF, Angular, Service Oriented Architecture, ExpressJS ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Environments:\tWindows, Unix/Linux, TSO z/OS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Certifications:\tAWS Certified Cloud Practitioner, Java SE 8 Programmer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Resume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Click To View Resume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Professional and Academic");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "In college much of my coursework focused on mathematics, algorithms, algorithm analysis, understanding object oriented design principals and patterns, and strong emphasis on implementing these techniques in the C++ programming language. The foundation of knowledge I built at FSU abetted the transition from academic to professional tremendously, and taught me invaluable lessons about trusting your preparation. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "At DXC Technology, day-to-day work as an Applications Developer involved tasks such as writing backend business logic for Java EE web applications. This typically included interfacing with clients to determine an appropriate data model, communicating with DBA\u2019s to accurately map out and ensure effective database design for our applications. A sample of some of the techniques and technologies that I leveraged are the follwing: prepared statements, JDBC, JPA, Oracle SQL Developer and a whole lot of StackOverflow. Additionally, I wrote stand-alone ETL (extract, transform, and load) applications using service oriented architecture and leveraged the following technologies: Java, JAXB, XSL, XSLT, XPath queries, and SQL. Daily I communicated with L3 support teams to deploy software to production as well as troubleshoot problems. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "My position at DXC Technology as member on the Applications Development Team taught me a tremendous amount about professional software development. My expertise in Java, knowledge of software design and best practices, and technical skillset has been strengthened because of my time there. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Hobbies and Interests");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Frontend development is exciting and always caught my attention as it continuously evolves. Over the course of the past year I have immersed myself in learning as much as I can about client-side web development with technologies like JavaScript, TypeScript, and Angular. This excitement led me to want to create and host my own website, and recently has brought me to the AWS cloud to explore serverless content hosting and serverless APIs with Lambda, S3, and CloudFormation. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "I love the outdoors and the challenges it presents through activities such as running and hiking (and trying to get a new PR on a half or full marathon).");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".about-me-container-outer[_ngcontent-%COMP%] {\n  height: 800px;\n  width: 100%;\n  background: url('Green.png');\n  background-size: cover;\n}\n.about-me-container-outer[_ngcontent-%COMP%]   .about-me-container-inner[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n.main-row[_ngcontent-%COMP%] {\n  display: flex;\n  font-family: \"Roboto\", sans-serif;\n  height: 100%;\n  width: 100%;\n}\n.main-row[_ngcontent-%COMP%]   .contentLeft[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 50%;\n  padding: 10px;\n  margin: 50px 30px;\n}\n.main-row[_ngcontent-%COMP%]   .contentLeft[_ngcontent-%COMP%]   .profile-picture[_ngcontent-%COMP%] {\n  display: block;\n  height: 270px;\n  width: 500px;\n  margin: 7% auto;\n}\n.main-row[_ngcontent-%COMP%]   .contentLeft[_ngcontent-%COMP%]   .profile-picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 123px;\n  height: 224px;\n  border-radius: 100%;\n  border: solid 6px rgba(33, 114, 106, 0.7);\n}\n.main-row[_ngcontent-%COMP%]   .contentLeft[_ngcontent-%COMP%]   .name-and-location[_ngcontent-%COMP%] {\n  background-color: #21726a;\n  border-radius: 15px;\n  width: 54%;\n  margin: auto;\n}\n.main-row[_ngcontent-%COMP%]   .contentLeft[_ngcontent-%COMP%]   .name-and-location[_ngcontent-%COMP%]   .socialMedia[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  padding: 8px 13px;\n  height: 35px;\n  width: 35px;\n}\n.main-row[_ngcontent-%COMP%]   .contentRight[_ngcontent-%COMP%] {\n  width: 50%;\n  padding: 10px;\n  text-align: center;\n  margin: 50px 30px;\n}\n.main-row[_ngcontent-%COMP%]   .contentRight[_ngcontent-%COMP%]   .about-me-summary[_ngcontent-%COMP%] {\n  background-color: #21726a;\n  border-radius: 15px;\n  padding: 10px;\n  margin-top: 125px;\n}\n.techSkillList[_ngcontent-%COMP%] {\n  list-style: none;\n  text-align: left;\n  padding: 0;\n  margin: 10%;\n}\n.techSkillList[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 14px auto;\n}\n.resume-container[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.resume-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: auto;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\nh1[_ngcontent-%COMP%] {\n  font-family: \"Playfair Display SC\", sans-serif;\n  font-weight: 400;\n  letter-spacing: 7px;\n  font-size: 40px;\n  margin: 20px auto;\n}\n#AboutMeHeader[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: block;\n  margin: 0 auto;\n  width: 40%;\n  padding-top: 20px;\n  border-bottom: 1px solid black;\n}\nh2[_ngcontent-%COMP%] {\n  font-family: \"Playfair Display SC\", sans-serif;\n  color: #21726a;\n  font-weight: 400;\n  font-size: 35px;\n  letter-spacing: 1px;\n  margin: 15px auto;\n}\nh3[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 400;\n  font-size: 20px;\n  margin: 10px auto;\n}\nh4[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  color: #6f995f;\n  font-weight: 400;\n  font-size: 15px;\n  margin: 10px auto;\n}\n@media screen and (max-width: 768px) and (max-height: 1024px) {\n  .about-me-container-outer[_ngcontent-%COMP%] {\n    height: 1000px;\n  }\n\n  #picture-and-name[_ngcontent-%COMP%] {\n    padding-top: 230px;\n  }\n\n  .main-row[_ngcontent-%COMP%]   .contentLeft[_ngcontent-%COMP%] {\n    margin: 0 auto;\n  }\n  .main-row[_ngcontent-%COMP%]   .contentLeft[_ngcontent-%COMP%]   .profile-picture[_ngcontent-%COMP%] {\n    height: auto;\n    width: auto;\n    margin: 0 auto;\n  }\n  .main-row[_ngcontent-%COMP%]   .contentLeft[_ngcontent-%COMP%]   .name-and-location[_ngcontent-%COMP%] {\n    margin: 0 auto;\n    width: 88%;\n  }\n  .main-row[_ngcontent-%COMP%]   .contentRight[_ngcontent-%COMP%] {\n    margin: 0 auto;\n  }\n}\n@media screen and (max-width: 600px) {\n  .about-me-container-outer[_ngcontent-%COMP%] {\n    height: 100%;\n  }\n  .about-me-container-outer[_ngcontent-%COMP%]   .about-me-container-inner[_ngcontent-%COMP%] {\n    padding-bottom: 30px;\n  }\n\n  .main-row[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    height: 100%;\n  }\n  .main-row[_ngcontent-%COMP%]   #picture-and-name[_ngcontent-%COMP%] {\n    padding-top: 40px;\n  }\n  .main-row[_ngcontent-%COMP%]   .contentLeft[_ngcontent-%COMP%] {\n    margin: auto;\n    padding: 0;\n    width: 90%;\n    padding-top: 50px;\n  }\n  .main-row[_ngcontent-%COMP%]   .contentLeft[_ngcontent-%COMP%]   .profile-picture[_ngcontent-%COMP%] {\n    height: auto;\n    width: auto;\n    margin: 0 auto;\n  }\n  .main-row[_ngcontent-%COMP%]   .contentLeft[_ngcontent-%COMP%]   .name-and-location[_ngcontent-%COMP%] {\n    width: 88%;\n    margin: 0 auto;\n  }\n  .main-row[_ngcontent-%COMP%]   .contentRight[_ngcontent-%COMP%] {\n    margin: auto;\n    padding: 0;\n    width: 90%;\n    padding-top: 0;\n  }\n  .main-row[_ngcontent-%COMP%]   .contentRight[_ngcontent-%COMP%]   .about-me-summary[_ngcontent-%COMP%] {\n    width: 80%;\n    margin: 0 auto;\n    margin-top: 50px;\n  }\n\n  h2[_ngcontent-%COMP%]:after {\n    content: \"\";\n    display: block;\n    margin: 0 auto;\n    width: 40%;\n    padding-top: 20px;\n    border-bottom: 1px solid #902424;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQtbWUvQzpcXE15LVByb2plY3RzXFxUZXN0L3NyY1xcYXBwXFxhYm91dC1tZVxcYWJvdXQtbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Fib3V0LW1lL2Fib3V0LW1lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FDQ0Y7QURDRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDQ0o7QURHQTtFQUNFLGFBQUE7RUFDQSxpQ0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQUY7QURFRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQ0FKO0FERUk7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDQU47QURFTTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5Q0FBQTtBQ0FSO0FESUk7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNGTjtBREtRO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0hWO0FEU0U7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNQSjtBRFNJO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQ1BOO0FEZ0JBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDYkY7QURjRTtFQUNFLGlCQUFBO0FDWko7QURnQkE7RUFDRSxrQkFBQTtBQ2JGO0FEZUU7RUFDRSxZQUFBO0VBQ0Esc0JBQUE7S0FBQSxtQkFBQTtBQ2JKO0FEaUJBO0VBQ0UsOENBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDZEY7QURpQkE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtBQ2RGO0FEaUJBO0VBQ0UsOENBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ2RGO0FEaUJBO0VBQ0UsaUNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ2RGO0FEaUJBO0VBQ0UsaUNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNkRjtBRGlCQTtFQUNFO0lBQ0UsY0FBQTtFQ2RGOztFRGlCQTtJQUNFLGtCQUFBO0VDZEY7O0VEa0JFO0lBQ0UsY0FBQTtFQ2ZKO0VEaUJJO0lBQ0UsWUFBQTtJQUNBLFdBQUE7SUFDQSxjQUFBO0VDZk47RURrQkk7SUFDRSxjQUFBO0lBQ0EsVUFBQTtFQ2hCTjtFRG9CRTtJQUNFLGNBQUE7RUNsQko7QUFDRjtBRHNCQTtFQUVFO0lBQ0UsWUFBQTtFQ3JCRjtFRHNCRTtJQUNFLG9CQUFBO0VDcEJKOztFRHdCQTtJQUNFLGNBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtFQ3JCRjtFRHVCRTtJQUNFLGlCQUFBO0VDckJKO0VEd0JFO0lBQ0UsWUFBQTtJQUNBLFVBQUE7SUFDQSxVQUFBO0lBQ0EsaUJBQUE7RUN0Qko7RUR3Qkk7SUFDRSxZQUFBO0lBQ0EsV0FBQTtJQUNBLGNBQUE7RUN0Qk47RUR5Qkk7SUFDRSxVQUFBO0lBQ0EsY0FBQTtFQ3ZCTjtFRDJCRTtJQUNFLFlBQUE7SUFDQSxVQUFBO0lBQ0EsVUFBQTtJQUNBLGNBQUE7RUN6Qko7RUQyQkk7SUFDRSxVQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0VDekJOOztFRCtCQTtJQUNFLFdBQUE7SUFDQSxjQUFBO0lBQ0EsY0FBQTtJQUNBLFVBQUE7SUFDQSxpQkFBQTtJQUNBLGdDQUFBO0VDNUJGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hYm91dC1tZS9hYm91dC1tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hYm91dC1tZS1jb250YWluZXItb3V0ZXIge1xyXG4gIGhlaWdodDogODAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiLi8uLi8uLi9hc3NldHMvaW1hZ2VzL0dyZWVuLnBuZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cclxuICAuYWJvdXQtbWUtY29udGFpbmVyLWlubmVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuLm1haW4tcm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIC5jb250ZW50TGVmdCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbjogNTBweCAzMHB4O1xyXG5cclxuICAgIC5wcm9maWxlLXBpY3R1cmUge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgaGVpZ2h0OiAyNzBweDtcclxuICAgICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgICBtYXJnaW46IDclIGF1dG87XHJcblxyXG4gICAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMjNweDtcclxuICAgICAgICBoZWlnaHQ6IDIyNHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyOiBzb2xpZCA2cHggcmdiKDMzLCAxMTQsIDEwNiwgMC43KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5uYW1lLWFuZC1sb2NhdGlvbiB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzMywgMTE0LCAxMDYpOyAvL2dyZWVuXHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgIHdpZHRoOiA1NCU7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuXHJcbiAgICAgIC5zb2NpYWxNZWRpYSB7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDhweCAxM3B4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY29udGVudFJpZ2h0IHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiA1MHB4IDMwcHg7XHJcblxyXG4gICAgLmFib3V0LW1lLXN1bW1hcnkge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzMsIDExNCwgMTA2KTsgLy9ncmVlblxyXG4gICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMjVweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5za2lsbHMtaG9iYmllcy1pbnRlcmVzdHN7XHJcbiAgLy8gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYigyNDUsIDI0NSwgMjQ1LCAwLjUpLCByZ2IoMjA4LCAyMDgsIDIwOCwgMC44KSk7XHJcbn1cclxuXHJcbi50ZWNoU2tpbGxMaXN0IHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDEwJTtcclxuICBsaSB7XHJcbiAgICBtYXJnaW46IDE0cHggYXV0bztcclxuICB9XHJcbn1cclxuXHJcbi5yZXN1bWUtY29udGFpbmVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIGltZyB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gIH1cclxufVxyXG5cclxuaDEge1xyXG4gIGZvbnQtZmFtaWx5OiAnUGxheWZhaXIgRGlzcGxheSBTQycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBsZXR0ZXItc3BhY2luZzogN3B4O1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBtYXJnaW46IDIwcHggYXV0bztcclxufVxyXG5cclxuI0Fib3V0TWVIZWFkZXI6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgd2lkdGg6IDQwJTtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7ICAgLy9yZWRcclxufVxyXG5cclxuaDIge1xyXG4gIGZvbnQtZmFtaWx5OiAnUGxheWZhaXIgRGlzcGxheSBTQycsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6IHJnYigzMywgMTE0LCAxMDYpOyAvL2dyZWVuXHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXNpemU6IDM1cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICBtYXJnaW46IDE1cHggYXV0bztcclxufVxyXG5cclxuaDMge1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBtYXJnaW46IDEwcHggYXV0bztcclxufVxyXG5cclxuaDQge1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogcmdiKDExMSwgMTUzLCA5NSk7ICAgLy9ncmVlblxyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIG1hcmdpbjogMTBweCBhdXRvO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkgYW5kIChtYXgtaGVpZ2h0OiAxMDI0cHgpIHtcclxuICAuYWJvdXQtbWUtY29udGFpbmVyLW91dGVyIHtcclxuICAgIGhlaWdodDogMTAwMHB4O1xyXG4gIH1cclxuXHJcbiAgI3BpY3R1cmUtYW5kLW5hbWUge1xyXG4gICAgcGFkZGluZy10b3A6IDIzMHB4O1xyXG4gIH1cclxuXHJcbiAgLm1haW4tcm93e1xyXG4gICAgLmNvbnRlbnRMZWZ0e1xyXG4gICAgICBtYXJnaW46IDAgYXV0bztcclxuXHJcbiAgICAgIC5wcm9maWxlLXBpY3R1cmUge1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgfVxyXG5cclxuICAgICAgLm5hbWUtYW5kLWxvY2F0aW9uIHtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICB3aWR0aDogODglO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnRSaWdodHtcclxuICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG5cclxuICAuYWJvdXQtbWUtY29udGFpbmVyLW91dGVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIC5hYm91dC1tZS1jb250YWluZXItaW5uZXIge1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5tYWluLXJvdyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgICNwaWN0dXJlLWFuZC1uYW1lIHtcclxuICAgICAgcGFkZGluZy10b3A6IDQwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnRMZWZ0IHtcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICB3aWR0aDogOTAlO1xyXG4gICAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuXHJcbiAgICAgIC5wcm9maWxlLXBpY3R1cmUge1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgfVxyXG5cclxuICAgICAgLm5hbWUtYW5kLWxvY2F0aW9uIHtcclxuICAgICAgICB3aWR0aDogODglO1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnRSaWdodCB7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgcGFkZGluZy10b3A6IDA7XHJcblxyXG4gICAgICAuYWJvdXQtbWUtc3VtbWFyeSB7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgaDI6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIHJnYigxNDQsIDM2LCAzNik7ICAgLy9yZWRcclxuICB9XHJcblxyXG59XHJcbiIsIi5hYm91dC1tZS1jb250YWluZXItb3V0ZXIge1xuICBoZWlnaHQ6IDgwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi8uLi8uLi9hc3NldHMvaW1hZ2VzL0dyZWVuLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi5hYm91dC1tZS1jb250YWluZXItb3V0ZXIgLmFib3V0LW1lLWNvbnRhaW5lci1pbm5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYWluLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm1haW4tcm93IC5jb250ZW50TGVmdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDUwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiA1MHB4IDMwcHg7XG59XG4ubWFpbi1yb3cgLmNvbnRlbnRMZWZ0IC5wcm9maWxlLXBpY3R1cmUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAyNzBweDtcbiAgd2lkdGg6IDUwMHB4O1xuICBtYXJnaW46IDclIGF1dG87XG59XG4ubWFpbi1yb3cgLmNvbnRlbnRMZWZ0IC5wcm9maWxlLXBpY3R1cmUgaW1nIHtcbiAgd2lkdGg6IDEyM3B4O1xuICBoZWlnaHQ6IDIyNHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBib3JkZXI6IHNvbGlkIDZweCByZ2JhKDMzLCAxMTQsIDEwNiwgMC43KTtcbn1cbi5tYWluLXJvdyAuY29udGVudExlZnQgLm5hbWUtYW5kLWxvY2F0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxNzI2YTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgd2lkdGg6IDU0JTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLm1haW4tcm93IC5jb250ZW50TGVmdCAubmFtZS1hbmQtbG9jYXRpb24gLnNvY2lhbE1lZGlhIGltZyB7XG4gIHBhZGRpbmc6IDhweCAxM3B4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIHdpZHRoOiAzNXB4O1xufVxuLm1haW4tcm93IC5jb250ZW50UmlnaHQge1xuICB3aWR0aDogNTAlO1xuICBwYWRkaW5nOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogNTBweCAzMHB4O1xufVxuLm1haW4tcm93IC5jb250ZW50UmlnaHQgLmFib3V0LW1lLXN1bW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE3MjZhO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMjVweDtcbn1cblxuLnRlY2hTa2lsbExpc3Qge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDEwJTtcbn1cbi50ZWNoU2tpbGxMaXN0IGxpIHtcbiAgbWFyZ2luOiAxNHB4IGF1dG87XG59XG5cbi5yZXN1bWUtY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnJlc3VtZS1jb250YWluZXIgaW1nIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBvYmplY3QtZml0OiBjb250YWluO1xufVxuXG5oMSB7XG4gIGZvbnQtZmFtaWx5OiBcIlBsYXlmYWlyIERpc3BsYXkgU0NcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDdweDtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBtYXJnaW46IDIwcHggYXV0bztcbn1cblxuI0Fib3V0TWVIZWFkZXI6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiA0MCU7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG59XG5cbmgyIHtcbiAgZm9udC1mYW1pbHk6IFwiUGxheWZhaXIgRGlzcGxheSBTQ1wiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzIxNzI2YTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBtYXJnaW46IDE1cHggYXV0bztcbn1cblxuaDMge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW46IDEwcHggYXV0bztcbn1cblxuaDQge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICM2Zjk5NWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luOiAxMHB4IGF1dG87XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSBhbmQgKG1heC1oZWlnaHQ6IDEwMjRweCkge1xuICAuYWJvdXQtbWUtY29udGFpbmVyLW91dGVyIHtcbiAgICBoZWlnaHQ6IDEwMDBweDtcbiAgfVxuXG4gICNwaWN0dXJlLWFuZC1uYW1lIHtcbiAgICBwYWRkaW5nLXRvcDogMjMwcHg7XG4gIH1cblxuICAubWFpbi1yb3cgLmNvbnRlbnRMZWZ0IHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuICAubWFpbi1yb3cgLmNvbnRlbnRMZWZ0IC5wcm9maWxlLXBpY3R1cmUge1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogYXV0bztcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuICAubWFpbi1yb3cgLmNvbnRlbnRMZWZ0IC5uYW1lLWFuZC1sb2NhdGlvbiB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgd2lkdGg6IDg4JTtcbiAgfVxuICAubWFpbi1yb3cgLmNvbnRlbnRSaWdodCB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5hYm91dC1tZS1jb250YWluZXItb3V0ZXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICAuYWJvdXQtbWUtY29udGFpbmVyLW91dGVyIC5hYm91dC1tZS1jb250YWluZXItaW5uZXIge1xuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICB9XG5cbiAgLm1haW4tcm93IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgLm1haW4tcm93ICNwaWN0dXJlLWFuZC1uYW1lIHtcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcbiAgfVxuICAubWFpbi1yb3cgLmNvbnRlbnRMZWZ0IHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcGFkZGluZzogMDtcbiAgICB3aWR0aDogOTAlO1xuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xuICB9XG4gIC5tYWluLXJvdyAuY29udGVudExlZnQgLnByb2ZpbGUtcGljdHVyZSB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG4gIC5tYWluLXJvdyAuY29udGVudExlZnQgLm5hbWUtYW5kLWxvY2F0aW9uIHtcbiAgICB3aWR0aDogODglO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG4gIC5tYWluLXJvdyAuY29udGVudFJpZ2h0IHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcGFkZGluZzogMDtcbiAgICB3aWR0aDogOTAlO1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICB9XG4gIC5tYWluLXJvdyAuY29udGVudFJpZ2h0IC5hYm91dC1tZS1zdW1tYXJ5IHtcbiAgICB3aWR0aDogODAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gIH1cblxuICBoMjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB3aWR0aDogNDAlO1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOTAyNDI0O1xuICB9XG59Il19 */"]
    });

    (function () {
      (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutMeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'about-me',
          templateUrl: './about-me.component.html',
          styleUrls: ['./about-me.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
      return new (t || AppRoutingModule)();
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();

    (function () {
      (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./about-me/about-me.component */
    "./src/app/about-me/about-me.component.ts");
    /* harmony import */


    var _projects_projects_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./projects/projects.component */
    "./src/app/projects/projects.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'HappyDevPortfolio';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 4,
      vars: 0,
      consts: [[1, "main-app-container"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "about-me");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "projects");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_1__["AboutMeComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_2__["ProjectsComponent"]],
      styles: [".main-app-container[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to bottom, rgba(245, 245, 245, 0.5), rgba(220, 220, 220, 0.6));\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXE15LVByb2plY3RzXFxUZXN0L3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdHQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1hcHAtY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2IoMjQ1LCAyNDUsIDI0NSwgMC41KSwgcmdiKDIyMCwgMjIwLCAyMjAsIDAuNikpO1xyXG59XHJcbiIsIi5tYWluLWFwcC1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDI0NSwgMjQ1LCAyNDUsIDAuNSksIHJnYmEoMjIwLCAyMjAsIDIyMCwgMC42KSk7XG59Il19 */"]
    });

    (function () {
      (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./about-me/about-me.component */
    "./src/app/about-me/about-me.component.ts");
    /* harmony import */


    var _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./projects/projects.component */
    "./src/app/projects/projects.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵfac = function AppModule_Factory(t) {
      return new (t || AppModule)();
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_4__["AboutMeComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]
      });
    })();

    (function () {
      (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_4__["AboutMeComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/projects/projects.component.ts":
  /*!************************************************!*\
    !*** ./src/app/projects/projects.component.ts ***!
    \************************************************/

  /*! exports provided: ProjectsComponent */

  /***/
  function srcAppProjectsProjectsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function () {
      return ProjectsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ProjectsComponent = /*#__PURE__*/function () {
      function ProjectsComponent() {
        _classCallCheck(this, ProjectsComponent);
      }

      _createClass(ProjectsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProjectsComponent;
    }();

    ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) {
      return new (t || ProjectsComponent)();
    };

    ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProjectsComponent,
      selectors: [["projects"]],
      decls: 77,
      vars: 0,
      consts: [[1, "projects-section"], [1, "main-row"], [1, "contentLeft"], [1, "project-info"], ["id", "deadDirectoryUrl", "href", "http://deaddirectorywebapp.s3-website-us-east-1.amazonaws.com/", "target", "_blank"], [1, "contentRight"], ["href", "https://github.com/HappyDev95/Dead-Directory", "target", "_blank"], ["src", ".\\..\\..\\..\\assets\\images\\gratefulDeadBears_image.png", "alt", "Dancing Bears"], ["href", "https://github.com/HappyDev95/HappyDev95.github.io", "target", "_blank"], ["src", ".\\..\\..\\..\\assets\\images\\github_image.png", "alt", "Github Image"], ["href", "https://github.com/Silcore/SpinnerApplication", "target", "_blank"], ["src", ".\\..\\..\\..\\assets\\images\\spinner.png", "alt", "Dancing Bears"], ["href", "https://github.com/HappyDev95/compression_proj", "target", "_blank"]],
      template: function ProjectsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Projects");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Dead Directory");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Date: Winter 2020 - Spring 2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Description: Angular web application in conjunction with ExpressJS API to serve Grateful Dead tour data. Deployed serverlessly to AWS using Lambda, API Gateway, CloudFormation, and S3. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Technologies Used: Angular, TypeScript, Javascript, HTML, SCSS, NodeJS, ExpressJS, AWS Services");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Contributors: Only Me");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Check out the live site, click me!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Click image to view source code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "HappyDev95 Portfolio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Date: Ongoing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Description: This webpage! It serves as way for me to put some of my ideas out there... Originally it started as raw HTML and CSS and since its inception it has been converted to an Angular web application. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Technologies Used: Angular, TypeScript, HTML, SCSS, NPM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Contributors: Only Me");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Click image to view source code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Spinner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Date: Summer 2018");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "This unique social game is meant to bring friends together to enjoy a dizzying competitive challenge for the whole room to enjoy. Whether you're at a party or looking to kill time, simply pull out your phone, start a game, and wait for direction callouts. Each time the phone calls a direction, quickly spin to face that direction to earn points. Accurately spin as many times as you can in thirty seconds to rack up the most points. Compare your scores to your friends and publish them online on your quest to become the spinning champion! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Technologies Used: Java, Gradle, Android Studio, Google Firebase, Google Firebase Authentication");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Contributors: Group Effort");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Click image to view source code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Huffman Tree Compression");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Date: Summer 2018");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "A lossless compression implementation to be used on bitsets. An experiment to understand how compression works which turned into designing a basic Huffman Tree compression algorithm. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Technologies Used: C++");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Contributors: Only Me");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Click image to view source code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  text-align: center;\n}\n\n.main-row[_ngcontent-%COMP%] {\n  display: flex;\n  font-family: \"Roboto\", sans-serif;\n  height: 100%;\n  width: 100%;\n}\n\n.main-row[_ngcontent-%COMP%]   .contentLeft[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 60%;\n  padding: 10px;\n  margin: 50px 30px;\n}\n\n.main-row[_ngcontent-%COMP%]   .contentLeft[_ngcontent-%COMP%]   .project-info[_ngcontent-%COMP%] {\n  border-radius: 15px;\n  padding: 10px;\n}\n\n.main-row[_ngcontent-%COMP%]   .contentLeft[_ngcontent-%COMP%]   .project-info[_ngcontent-%COMP%]   #deadDirectoryUrl[_ngcontent-%COMP%] {\n  color: #902424;\n}\n\n.main-row[_ngcontent-%COMP%]   .contentRight[_ngcontent-%COMP%] {\n  width: 40%;\n  padding: 10px;\n  text-align: center;\n  margin: 50px 30px;\n}\n\n.main-row[_ngcontent-%COMP%]   .contentRight[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  -o-object-fit: contain;\n     object-fit: contain;\n  height: 100%;\n  width: 100%;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-family: \"Playfair Display SC\", sans-serif;\n  font-weight: 400;\n  letter-spacing: 7px;\n  font-size: 40px;\n  margin: 20px auto;\n}\n\nh1[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: block;\n  margin: 0 auto;\n  width: 40%;\n  padding-top: 20px;\n  border-bottom: 1px solid #902424;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-family: \"Playfair Display SC\", sans-serif;\n  color: #21726a;\n  font-weight: 400;\n  font-size: 35px;\n  letter-spacing: 1px;\n  margin: 15px auto;\n}\n\nh3[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 400;\n  font-size: 20px;\n  margin: 10px auto;\n}\n\nh4[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  color: #21726a;\n  font-weight: 400;\n  font-size: 15px;\n  margin: 10px auto;\n}\n\n@media screen and (max-width: 600px) {\n  .about-me-container-outer[_ngcontent-%COMP%] {\n    height: 100%;\n  }\n\n  .main-row[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    margin: 0 auto;\n  }\n  .main-row[_ngcontent-%COMP%]   .contentLeft[_ngcontent-%COMP%] {\n    margin: 0 auto;\n    padding: 0;\n    width: 90%;\n    padding-top: 50px;\n  }\n  .main-row[_ngcontent-%COMP%]   .contentRight[_ngcontent-%COMP%] {\n    margin: 0 auto;\n    padding: 0;\n    width: 90%;\n  }\n\n  .main-row[_ngcontent-%COMP%]:before {\n    content: \"\";\n    display: block;\n    margin-top: 25px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvQzpcXE15LVByb2plY3RzXFxUZXN0L3NyY1xcYXBwXFxwcm9qZWN0c1xccHJvamVjdHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsaUNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0NGOztBRENFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FEQ0k7RUFDRSxtQkFBQTtFQUNBLGFBQUE7QUNDTjs7QURDTTtFQUNFLGNBQUE7QUNDUjs7QURJRTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0ZKOztBRElJO0VBQ0Usc0JBQUE7S0FBQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDRk47O0FEUUE7RUFDRSw4Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNMRjs7QURRQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGdDQUFBO0FDTEY7O0FEUUE7RUFDRSw4Q0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDTEY7O0FEUUE7RUFDRSxpQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDTEY7O0FEUUE7RUFDRSxpQ0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0xGOztBRFFBO0VBRUU7SUFDRSxZQUFBO0VDTkY7O0VEU0E7SUFDRSxjQUFBO0lBQ0EsV0FBQTtJQUNBLGNBQUE7RUNORjtFRFFFO0lBQ0UsY0FBQTtJQUNBLFVBQUE7SUFDQSxVQUFBO0lBQ0EsaUJBQUE7RUNOSjtFRFNFO0lBQ0UsY0FBQTtJQUNBLFVBQUE7SUFDQSxVQUFBO0VDUEo7O0VEV0E7SUFDRSxXQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0VDUkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm1haW4tcm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIC5jb250ZW50TGVmdCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbjogNTBweCAzMHB4O1xyXG5cclxuICAgIC5wcm9qZWN0LWluZm8ge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG5cclxuICAgICAgI2RlYWREaXJlY3RvcnlVcmwge1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMTQ0LCAzNiwgMzYpOyAgIC8vcmVkXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jb250ZW50UmlnaHQge1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDUwcHggMzBweDtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICB9XHJcbn1cclxuXHJcbmgxIHtcclxuICBmb250LWZhbWlseTogJ1BsYXlmYWlyIERpc3BsYXkgU0MnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDdweDtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbn1cclxuXHJcbmgxOmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHdpZHRoOiA0MCU7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICByZ2IoMTQ0LCAzNiwgMzYpOyAgIC8vcmVkXHJcbn1cclxuXHJcbmgyIHtcclxuICBmb250LWZhbWlseTogJ1BsYXlmYWlyIERpc3BsYXkgU0MnLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiByZ2IoMzMsIDExNCwgMTA2KTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogMzVweDtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIG1hcmdpbjogMTVweCBhdXRvO1xyXG59XHJcblxyXG5oMyB7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIG1hcmdpbjogMTBweCBhdXRvO1xyXG59XHJcblxyXG5oNCB7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiByZ2IoMzMsIDExNCwgMTA2KTsgLy9ncmVlblxyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIG1hcmdpbjogMTBweCBhdXRvO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG5cclxuICAuYWJvdXQtbWUtY29udGFpbmVyLW91dGVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5tYWluLXJvdyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcblxyXG4gICAgLmNvbnRlbnRMZWZ0IHtcclxuICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250ZW50UmlnaHQge1xyXG4gICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgd2lkdGg6IDkwJTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5tYWluLXJvdzpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICB9XHJcbn1cclxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWFpbi1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cbi5tYWluLXJvdyAuY29udGVudExlZnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiA2MCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogNTBweCAzMHB4O1xufVxuLm1haW4tcm93IC5jb250ZW50TGVmdCAucHJvamVjdC1pbmZvIHtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5tYWluLXJvdyAuY29udGVudExlZnQgLnByb2plY3QtaW5mbyAjZGVhZERpcmVjdG9yeVVybCB7XG4gIGNvbG9yOiAjOTAyNDI0O1xufVxuLm1haW4tcm93IC5jb250ZW50UmlnaHQge1xuICB3aWR0aDogNDAlO1xuICBwYWRkaW5nOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogNTBweCAzMHB4O1xufVxuLm1haW4tcm93IC5jb250ZW50UmlnaHQgaW1nIHtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuaDEge1xuICBmb250LWZhbWlseTogXCJQbGF5ZmFpciBEaXNwbGF5IFNDXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiA3cHg7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG59XG5cbmgxOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogNDAlO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5MDI0MjQ7XG59XG5cbmgyIHtcbiAgZm9udC1mYW1pbHk6IFwiUGxheWZhaXIgRGlzcGxheSBTQ1wiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzIxNzI2YTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBtYXJnaW46IDE1cHggYXV0bztcbn1cblxuaDMge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW46IDEwcHggYXV0bztcbn1cblxuaDQge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMyMTcyNmE7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luOiAxMHB4IGF1dG87XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5hYm91dC1tZS1jb250YWluZXItb3V0ZXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuXG4gIC5tYWluLXJvdyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbiAgLm1haW4tcm93IC5jb250ZW50TGVmdCB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgcGFkZGluZzogMDtcbiAgICB3aWR0aDogOTAlO1xuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xuICB9XG4gIC5tYWluLXJvdyAuY29udGVudFJpZ2h0IHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nOiAwO1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cblxuICAubWFpbi1yb3c6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gIH1cbn0iXX0= */"]
    });

    (function () {
      (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'projects',
          templateUrl: './projects.component.html',
          styleUrls: ['./projects.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\My-Projects\Test\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map