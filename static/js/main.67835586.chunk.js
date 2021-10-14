(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,t,a){e.exports={imageGalleryItem:"ImageGalleryItem_imageGalleryItem__2OULF",imageGalleryItemImage:"ImageGalleryItem_imageGalleryItemImage__1BGsU"}},11:function(e,t,a){e.exports={imageGallery:"ImageGallery_imageGallery__3Ppio"}},13:function(e,t){},16:function(e,t,a){e.exports={loader:"Loader_loader__1p3B_"}},22:function(e,t,a){},23:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),c=a(14),s=a.n(c),o=(a(22),a(3)),i=a(4),u=a(6),l=a(5),h=(a(23),a(2)),m=a.n(h),g=a(7),p=a.n(g),b=a(17),d=a(0),j=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={searchQuery:""},e.handleChange=function(t){var a=t.currentTarget.value;e.setState({searchQuery:a})},e.reset=function(){e.setState({searchQuery:""})},e.handleSubmit=function(t){t.preventDefault();var a=e.state.searchQuery.trim().toLowerCase();""!==a?(e.props.onSubmit(a),e.reset()):alert("Input is empty")},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(d.jsxs)("header",{className:p.a.searchbar,children:[Object(d.jsx)("div",{className:p.a.logo,children:Object(d.jsx)("a",{href:"https://pixabay.com/",children:Object(d.jsx)("img",{src:"https://pixabay.com/static/img/public/medium_rectangle_a.png",alt:"Pixabay",width:"48"})})}),Object(d.jsxs)("form",{onSubmit:this.handleSubmit,className:p.a.searchForm,children:[Object(d.jsxs)("button",{type:"submit",className:p.a.searchFormButton,children:[Object(d.jsx)(b.a,{size:"20"}),Object(d.jsx)("span",{className:p.a.searchFormButtonLabel,children:"Search"})]}),Object(d.jsx)("input",{className:p.a.searchFormInput,type:"text",autoComplete:"off",value:this.state.searchQuery,onChange:this.handleChange,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",autoFocus:!0,placeholder:"Search images and photos"})]})]})}}]),a}(r.Component),y=j;j.prototypes={onSubmit:m.a.func};var f=a(12),O=a(15),v=a.n(O),x=(a(13),a(10)),_=a.n(x),S=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(d.jsx)(d.Fragment,{children:this.props.images.map((function(e){return Object(d.jsx)("li",{className:_.a.imageGalleryItem,children:Object(d.jsx)("img",{className:_.a.imageGalleryItemImage,"data-set":e.largeImageURL,src:e.webformatURL,alt:e.tag})},e.id)}))})}}]),a}(r.Component);S.protoType={images:m.a.array};var I=S;function Q(e){var t=e.errorSearchQuery;return console.log(t),Object(d.jsxs)("p",{children:['Images with the name "',t,'" were not found, try again! ']})}Q.protoType={errorSearchQuery:m.a.string};var F=Q,w=a(9),G=a.n(w);function N(e){var t=e.addImages,a=e.pages,r=e.currentPage;console.log("pages button = availablePages",a);var n=r<a?"Load more...":"That's all",c=!(r<a);return Object(d.jsx)("button",{type:"button",className:G.a.button,onClick:function(){return t()},disabled:c,children:n})}N.protoType={addImages:m.a.func,pages:m.a.string};var B=N,P=a(11),k=a.n(P),C=a(16),T=a.n(C);a(45);var L={fetchImg:function(e,t){var a="".concat("https://pixabay.com/api/","?key=").concat("22960570-8de4834e5e1a62c8570402763","&q=").concat(e,"&image_type=photo&orientation=horizontal&page=").concat(t,"&per_page=12");return console.log("url",a),console.log("searchQuery",e),console.log("page",t),fetch(a).then((function(e){return e.json()})).then((function(e){return console.log("data",e),e})).catch((function(e){return console.worm(e)}))}},A=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={images:[],imagesTotal:null,error:null,status:"idle",currentPage:1,searchQuery:""},e.addImages=function(){e.setState({status:"pending"});var t=e.state.searchQuery,a=e.state.currentPage+1;L.fetchImg(t,a).then((function(t){e.setState((function(e){return{images:[].concat(Object(f.a)(e.images),Object(f.a)(t.hits)),status:"resolved",currentPage:a}}))})).finally((function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}))},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this,r=e.searchQuery,n=this.props.searchQuery,c=this.state,s=c.currentPage;c.searchQuery;r!==n&&(this.setState({status:"pending",currentPage:1}),L.fetchImg(n,s).then((function(e){return 0!==e.total?(a.setState({imagesTotal:e.total,searchQuery:n}),a.setState({images:e.hits,status:"resolved"})):a.setState({status:"rejected"})})).catch((function(e){return a.setState({error:e,status:"rejected"})})))}},{key:"render",value:function(){var e=this.state,t=e.images,a=(e.error,e.status),r=e.imagesTotal,n=e.currentPage,c=this.props.searchQuery,s=Math.ceil(r/12);return"idle"===a?Object(d.jsx)("div",{children:"input name"}):"pending"===a?Object(d.jsx)(v.a,{className:T.a.loader,type:"BallTriangle",color:"#00BFFF",height:80,width:80,timeout:3e3}):"rejected"===a?Object(d.jsx)(F,{errorSearchQuery:c}):"resolved"===a&&s>1?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("ul",{className:k.a.imageGallery,children:Object(d.jsx)(I,{images:t})}),Object(d.jsx)(B,{pages:s,currentPage:n,addImages:this.addImages})]}):"resolved"===a||1===s?(console.log("=1"),Object(d.jsx)("ul",{className:k.a.imageGallery,children:Object(d.jsx)(I,{images:t})})):void 0}}]),a}(r.Component);A.prototypes={searchQuery:m.a.string};var Z=A,z=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={searchQuery:""},e.formSubmitHandler=function(t){e.setState({searchQuery:t})},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(y,{onSubmit:this.formSubmitHandler}),Object(d.jsx)(Z,{searchQuery:this.state.searchQuery})]})}}]),a}(r.Component),H=z;a(46);s.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(H,{})}),document.getElementById("root"))},7:function(e,t,a){e.exports={searchbar:"Searchbar_searchbar__xFmR5",logo:"Searchbar_logo__p0ZMZ",searchForm:"Searchbar_searchForm__211Jw",searchFormButton:"Searchbar_searchFormButton__eiMNS",searchFormButtonLabel:"Searchbar_searchFormButtonLabel__3x66H",searchFormInput:"Searchbar_searchFormInput__kouHs"}},9:function(e,t,a){e.exports={button:"Button_button__X3BZJ"}}},[[47,1,2]]]);
//# sourceMappingURL=main.67835586.chunk.js.map