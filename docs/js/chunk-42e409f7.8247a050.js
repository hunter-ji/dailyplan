(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-42e409f7"],{"16c0":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container"},[e("div",{staticStyle:{width:"800px"}},[e("welcome",{attrs:{task_list_undone_count:t.task_list_count,task_list_length:t.task_list.length}}),e("div",[e("el-input",{staticClass:"input-new-task",attrs:{placeholder:"快速添加今日待办事项","prefix-icon":"el-icon-plus"},nativeOn:{keyup:function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"enter",13,s.key,"Enter")?null:t.add_task(s)}},model:{value:t.new_task.title,callback:function(s){t.$set(t.new_task,"title",s)},expression:"new_task.title"}},[e("el-select",{staticStyle:{width:"150px"},attrs:{slot:"prepend",placeholder:"请选择"},slot:"prepend",model:{value:t.new_task.checklist_id,callback:function(s){t.$set(t.new_task,"checklist_id",s)},expression:"new_task.checklist_id"}},t._l(t.checklist,(function(t,s){return e("el-option",{key:s,attrs:{label:t.label,value:t.value}})})),1)],1)],1),t.task_list.length?e("div",t._l(t.task_list_sort,(function(s,a){return e("el-card",{key:a,staticClass:"box-card",attrs:{shadow:"hover"}},[e("el-row",{attrs:{gutter:10}},[e("el-col",{attrs:{span:1}},[e("div",{staticClass:"task-icon",on:{click:function(e){return t.change_task_status(s)}}},[s.status?e("span",[e("i",{staticClass:"el-icon-check"})]):e("span",[e("i",{staticClass:"el-icon-s-flag"})])])]),e("el-col",{attrs:{span:s.task_time?15:20}},[e("div",{class:{task_finished:s.status}},[t._v(" "+t._s(s.title)+" ")])]),e("el-col",{attrs:{span:s.task_time?5:0}},[e("div",{staticClass:"task-time"},[t._v(" "+t._s(s.task_time)+" ")])]),e("el-col",{attrs:{span:3}},[e("div",{staticClass:"box-card__tool box-card__show"},[e("i",{staticClass:"el-icon-more",on:{click:function(e){return t.edit_task(s,a)}}}),e("i",{staticClass:"el-icon-document-copy",on:{click:function(e){return t.clip_task(s.title)}}}),e("i",{staticClass:"el-icon-delete",on:{click:function(e){return t.delete_task(s)}}})])])],1)],1)})),1):e("div",{staticClass:"no-task"},[e("i",{staticClass:"el-icon-info"}),t._v(" 还没有待办事项呢 ")]),e("task-dialog",{attrs:{dialog:t.dialog,"task-info":t.target_task},on:{dialogchange:t.dialogchange,taskinfochange:t.taskinfochange}})],1)])},i=[],n=(e("4de4"),e("4160"),e("a434"),e("b64b"),e("159b"),e("b199")),c=e("5227"),l=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"wl-container"},[e("div",{staticClass:"wl-title"},[e("span",{staticClass:"wl-title-lg"},[t._v("今天")]),t._v(" 是"+t._s(t.time)+"，"+t._s(t.week)+"。 ")]),e("transition",{attrs:{name:"fade-transform"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.task_list_length,expression:"task_list_length"}],staticClass:"wl-tip"},[e("span",{staticClass:"wl-tip__inner"},[t._v("还剩")]),t._v(" "+t._s(t.task_list_undone_count)+" "),e("span",{staticClass:"wl-tip__inner"},[t._v("个待办事项，共有")]),e("span",{staticClass:"wl-tip__inner2"},[t._v("/")]),t._v(" "+t._s(t.task_list_length)+" "),e("span",{staticClass:"wl-tip__inner"},[t._v("个待办事项")])])])],1)},o=[],_=(e("a9e3"),{props:{task_list_length:{type:Number,default:function(){return 3}},task_list_undone_count:{type:Number,default:function(){return 2}}},data:function(){return{time:this.$moment().format("Y年MM月DD日"),week:this.$moment().format("dddd")}}}),r=_,u=(e("203c"),e("2877")),k=Object(u["a"])(r,l,o,!1,null,"0ac55cda",null),d=k.exports,h=e("94c7"),f={components:{Welcome:d,taskDialog:h["a"]},data:function(){return{new_task:{title:"",content:"",cycle:"",checklist_id:"1"},task_list:[],dialog:!1,dialog_status:!0,target_task_index:0,target_task:{title:"",content:"",cycle:"0",task_time:""},checklist:[]}},methods:{fetch_data:function(){var t=this,s={date:this.$moment().format("Y-MM-DD")};Object(n["g"])(this.$store.getters.token,s).then((function(s){t.task_list=s.data})),Object(c["a"])(this.$store.getters.token).then((function(s){t.checklist=s.data,t.new_task.checklist_id=s.default_checklist_id}))},add_task:function(){var t=this;if(this.new_task.title){var s={title:this.new_task.title,content:this.new_task.content,add_time:this.$moment().format("Y-MM-DD"),checklist_id:this.new_task.checklist_id};Object(n["a"])(this.$store.getters.token,s).then((function(){t.fetch_data(),t.$notify({title:"系统通知",message:"添加待办事项成功",type:"success"}),Object.keys(t.new_task).forEach((function(s){return t.new_task[s]=""}))}))}else this.$notify({title:"系统通知",message:"待办事项名不可为空",type:"warning"})},clip_task:function(t){var s=this;this.$copyText(t).then((function(){s.$notify({title:"系统通知",message:"复制待办事项成功",type:"success"})}))},delete_task:function(t){var s=this;Object(n["c"])(this.$store.getters.token,t.task_id).then((function(){for(var e=0;e<s.task_list.length;e++)s.task_list[e]===t&&(s.task_list.splice(e,1),s.$notify({title:"系统通知",message:"删除待办事项成功",type:"success"}))}))},change_task:function(t){var s={title:t.title,content:t.content,status:t.status,cycle:t.cycle,task_time:t.task_time};Object(n["b"])(this.$store.getters.token,t.task_id,s)},edit_task:function(t,s){this.target_task=JSON.parse(JSON.stringify(t)),this.target_task_index=s,this.dialog=!0,this.dialog_status=!1},change_task_status:function(t){this.task_list.forEach((function(s){s===t&&(s.status=!s.status)})),this.change_task(t),t.status?this.$notify({title:"系统通知",message:"完成待办事项成功",type:"success"}):this.$notify({title:"系统通知",message:"取消待办事项完成",type:"success"})},dialogchange:function(t){this.dialog=t,this.target_task={title:"",content:"",task_time:"",cycle:"0"}},taskinfochange:function(t){var s=this;this.task_list[this.target_task_index]=t,this.dialog_status?Object(n["a"])(this.$store.getters.token,t).then((function(){s.$notify({title:"系统通知",message:"添加成功",type:"success"})})):Object(n["b"])(this.$store.getters.token,t.task_id,t).then((function(){s.dialog_status=!0,s.$notify({title:"系统通知",message:"修改成功",type:"success"})}))}},created:function(){this.fetch_data()},computed:{task_list_sort:function(){return this.task_list.sort((function(t,s){return t.status!==s.status?t.status-s.status:t.task_id-s.task_id}))},task_list_count:function(){var t=this.task_list.filter((function(t){return!t.status}));return t.length}}},g=f,p=(e("f916"),Object(u["a"])(g,a,i,!1,null,"0db8cf46",null));s["default"]=p.exports},"203c":function(t,s,e){"use strict";var a=e("6424"),i=e.n(a);i.a},6424:function(t,s,e){},6539:function(t,s,e){},f916:function(t,s,e){"use strict";var a=e("6539"),i=e.n(a);i.a}}]);
//# sourceMappingURL=chunk-42e409f7.8247a050.js.map