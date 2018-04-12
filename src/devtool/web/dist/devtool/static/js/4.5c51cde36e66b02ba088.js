webpackJsonp([4],{SVpi:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s,r=i("jCeB"),a=(s=r)&&s.__esModule?s:{default:s};a.default.install=function(e){e.component(a.default.name,a.default)},t.default=a.default},b11i:function(e,t){},"c4/j":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i("4YfN"),r=i.n(s),a=i("aozt"),n=i.n(a),l=i("KatZ"),o=i("SVpi"),u=i.n(o),c=i("O/Dr"),d=i.n(c),v=i("EEJv"),f=i.n(v),h={name:"class-gen",components:r()({VForm:u.a,VCheckbox:d.a,VSelect:f.a},l),data:function(){return{show:!1,valid:!0,name:"demo",nameRules:[function(e){return!!e||"Name is required"},function(e){return e&&e.length<=10||"Name must be less than 10 characters"}],dir:"@app/Controllers",dirRules:[function(e){return!!e||"E-mail is required"},function(e){return/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e)||"E-mail must be valid"}],suffix:"Controller",tplDir:"@devtool/res/templates",tplFile:"controller.stub",select:"controller",items:["command","controller","listener","middleware","process","task","ws controller"],defaultTplFiles:["command.stub","controller-rest.stub","controller.stub","listener.stub","middleware.stub","process.stub","task.stub","ws-controller.stub"],override:!1,config:{}}},methods:{submit:function(){this.$refs.form.validate()&&n.a.post("/api/submit",{name:this.name,email:this.email,select:this.select,checkbox:this.checkbox})},clear:function(){this.$refs.form.reset()}}},p={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("v-subheader",[i("h1",[e._v(e._s(this.$route.name))])]),e._v(" "),i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{"d-flex":"",xs12:"",md4:""}},[i("v-card",[i("v-card-title",{staticClass:"blue lighten-5",attrs:{"primary-title":""}},[i("div",[i("div",{staticClass:"headline"},[e._v("Class Setting")]),e._v(" "),i("span",{staticClass:"grey--text"},[e._v("There are some setting for class generate!")])])]),e._v(" "),i("v-container",[i("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[i("v-select",{attrs:{label:"Class Type",items:e.items,rules:[function(e){return!!e||"Class type is required"}],required:""},model:{value:e.select,callback:function(t){e.select=t},expression:"select"}}),e._v(" "),i("v-text-field",{attrs:{label:"Class Name",rules:e.nameRules,counter:10,hint:"The class name, don't need suffix and ext(eg. demo)","persistent-hint":"",required:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),e._v(" "),i("v-text-field",{attrs:{label:"Save Directory",rules:e.dirRules,hint:"The class file save directory(default: @app/Controllers)","persistent-hint":"",required:""},model:{value:e.dir,callback:function(t){e.dir=t},expression:"dir"}}),e._v(" "),i("v-text-field",{attrs:{label:"Class Suffix",rules:[function(e){return/^[a-zA-Z]+$/.test(e)||"Suffix only allow alpha"}],hint:"The class name suffix. default is: Controller","persistent-hint":""},model:{value:e.suffix,callback:function(t){e.suffix=t},expression:"suffix"}}),e._v(" "),i("v-text-field",{attrs:{label:"Template Directory",rules:[function(e){return/^[a-zA-Z]+$/.test(e)||"Suffix only allow alpha"}],hint:"The template file dir path.(default: @devtool/res/templates)","persistent-hint":""},model:{value:e.tplDir,callback:function(t){e.tplDir=t},expression:"tplDir"}}),e._v(" "),i("v-text-field",{attrs:{label:"Template Filename",rules:[function(e){return/^[a-zA-Z]+$/.test(e)||"Suffix only allow alpha"}],hint:"The template file name.(default: controller.stub)","persistent-hint":""},model:{value:e.tplFile,callback:function(t){e.tplFile=t},expression:"tplFile"}}),e._v(" "),i("v-checkbox",{attrs:{label:"Force override exists file?"},model:{value:e.override,callback:function(t){e.override=t},expression:"override"}}),e._v(" "),i("v-btn",{attrs:{disabled:!e.valid,color:"success"},on:{click:e.submit}},[e._v("\n              submit\n            ")]),e._v(" "),i("v-btn",{on:{click:e.clear}},[e._v("clear")])],1)],1)],1)],1),e._v(" "),i("v-flex",{attrs:{"d-flex":"",xs12:"",md8:""}},[i("v-card",[i("v-card-title",{staticClass:"blue-grey lighten-5",attrs:{"primary-title":""}},[i("div",[i("div",{staticClass:"headline"},[e._v("Class Preview")]),e._v(" "),i("span",{staticClass:"grey--text"},[e._v("1,000 miles of wonder")])])]),e._v(" "),i("v-card-actions",[i("v-btn",{attrs:{flat:""}},[e._v("Share")]),e._v(" "),i("v-btn",{attrs:{flat:"",color:"purple"}},[e._v("Explore")]),e._v(" "),i("v-spacer"),e._v(" "),i("v-btn",{attrs:{flat:""},nativeOn:{click:function(t){e.show=!e.show}}},[e._v("\n            View "),i("v-icon",[e._v(e._s(e.show?"keyboard_arrow_down":"keyboard_arrow_up"))])],1)],1),e._v(" "),i("v-slide-y-transition",[i("v-card-text",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}]},[e._v("\n            escape.\n          ")])],1)],1)],1)],1)],1)},staticRenderFns:[]};var m=i("Z0/y")(h,p,!1,function(e){i("b11i")},"data-v-b21a95ee",null);t.default=m.exports},jCeB:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"v-form",inheritAttrs:!1,data:function(){return{inputs:[],errorBag:{}}},props:{value:Boolean,lazyValidation:Boolean},watch:{errorBag:{handler:function(){var e=Object.values(this.errorBag).includes(!0);return this.$emit("input",!e),!e},deep:!0}},methods:{getInputs:function(){var e=[];return function t(i){for(var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=0;r<i.length;r++){var a=i[r];void 0!==a.errorBucket?e.push(a):t(a.$children,s+1)}if(0===s)return e}(this.$children)},watchInputs:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getInputs(),t=0;t<e.length;t++){var i=e[t];this.inputs.includes(i)||(this.inputs.push(i),this.watchChild(i))}},watchChild:function(e){var t=this,i=function(e){e.$watch("valid",function(i){t.$set(t.errorBag,e._uid,!i)},{immediate:!0})};if(!this.lazyValidation)return i(e);e.$watch("shouldValidate",function(s){s&&(t.errorBag.hasOwnProperty(e._uid)||i(e))})},validate:function(){return!this.inputs.filter(function(e){return!e.validate(!0)}).length},reset:function(){for(var e=this.inputs.length;e--;)this.inputs[e].reset();this.lazyValidation&&(this.errorBag={})}},mounted:function(){this.watchInputs()},updated:function(){var e=this.getInputs();if(e.length<this.inputs.length)for(var t=this.inputs.filter(function(t){return!e.includes(t)}),i=0;i<t.length;i++){var s=t[i];this.$delete(this.errorBag,s._uid),this.$delete(this.inputs,this.inputs.indexOf(s))}this.watchInputs(e)},render:function(e){var t=this;return e("form",{attrs:Object.assign({novalidate:!0},this.$attrs),on:{submit:function(e){return t.$emit("submit",e)}}},this.$slots.default)}}}});
//# sourceMappingURL=4.5c51cde36e66b02ba088.js.map