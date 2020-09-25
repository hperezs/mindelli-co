(this["webpackJsonpecommerce-app-client"]=this["webpackJsonpecommerce-app-client"]||[]).push([[0],{112:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(18),o=r.n(c),i=(r(69),r(22)),l=r(7),s=r(12),u=r.n(s),m=r(23),d=r(3),b=r(8),f=r(49),h=r.n(f);r(71).config();var p=Object(n.createContext)(),x=h.a.buildClient({domain:"mindelli-co.myshopify.com",storefrontAccessToken:"3dda150cada0b74961f6d8b150e2f041"}),E=function(e){var t=e.children,r=Object(n.useState)({products:[],product:{},filteredProducts:[],sortedProducts:[],queriedProducts:[],productIsReady:!1}),c=Object(b.a)(r,2),o=c[0],i=c[1],l=Object(n.useState)({isCartOpen:!1}),s=Object(b.a)(l,2),f=s[0],h=s[1],E=Object(n.useState)({checkout:{}}),g=Object(b.a)(E,2),C=g[0],v=g[1],k=Object(n.useState)({}),j=Object(b.a)(k,2),O=j[0],w=j[1],y=Object(n.useState)({highToLow:!1}),D=Object(b.a)(y,2),S=D[0],I=D[1],P=Object(n.useState)(""),T=Object(b.a)(P,2),z=T[0],A=T[1];Object(n.useEffect)((function(){console.log(o),console.log(O)}),[o,O]),Object(n.useEffect)((function(){localStorage.checkout?R(localStorage.checkout):L()}),[]),Object(n.useEffect)((function(){if(0!==o.products.length)if(O.skirtsAreChecked||O.topsAreChecked||O.bottomsAreChecked||O.dressesAreChecked){var e=o.products,t=[],r=[],n=[],a=[];O.skirtsAreChecked&&(t=e.filter((function(e){return"Skirt"===e.productType}))),O.topsAreChecked&&(r=e.filter((function(e){return"Top"===e.productType}))),O.bottomsAreChecked&&(n=e.filter((function(e){return"Bottom"===e.productType}))),O.dressesAreChecked&&(a=e.filter((function(e){return"Dress"===e.productType})));var c=t.concat(r).concat(n).concat(a);i(Object(d.a)(Object(d.a)({},o),{},{filteredProducts:c}))}else i(Object(d.a)(Object(d.a)({},o),{},{filteredProducts:o.products}))}),[o.products,O]),Object(n.useEffect)((function(){if(0!==o.filteredProducts.length)if(S.highToLow){var e=o.filteredProducts.sort((function(e,t){return parseInt(e.variants[0].price)<parseInt(t.variants[0].price)?1:-1}));i(Object(d.a)(Object(d.a)({},o),{},{sortedProducts:e}))}else{var t=o.filteredProducts.sort((function(e,t){return parseInt(e.variants[0].price)>parseInt(t.variants[0].price)?1:-1}));i(Object(d.a)(Object(d.a)({},o),{},{sortedProducts:t}))}}),[o.filteredProducts,S]),Object(n.useEffect)((function(){if(0!==o.sortedProducts.length)if(""!==z){var e=o.sortedProducts.filter((function(e){return e.title.toLowerCase().includes(z)}));i(Object(d.a)(Object(d.a)({},o),{},{queriedProducts:e}))}else i(Object(d.a)(Object(d.a)({},o),{},{queriedProducts:o.sortedProducts}))}),[o.sortedProducts,z]);var L=function(){var e=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.checkout.create();case 2:t=e.sent,localStorage.setItem("checkout",t.id),v({checkout:t});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(m.a)(u.a.mark((function e(t){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.checkout.fetch(t);case 2:r=e.sent,v({checkout:r});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W=function(){var e=Object(m.a)(u.a.mark((function e(t){var r,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=[{variantId:t,quantity:1}],e.next=3,x.checkout.addLineItems(C.checkout.id,r);case 3:n=e.sent,v({checkout:n}),F();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(m.a)(u.a.mark((function e(t){var r,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=[t],e.next=3,x.checkout.removeLineItems(C.checkout.id,r);case 3:n=e.sent,v({checkout:n});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.product.fetchAll();case 2:t=e.sent,i(Object(d.a)(Object(d.a)({},o),{},{products:t}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),H=function(){var e=Object(m.a)(u.a.mark((function e(t){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(Object(d.a)(Object(d.a)({},o),{},{productIsReady:!1})),e.next=3,x.product.fetch(t);case 3:r=e.sent,i(Object(d.a)(Object(d.a)({},o),{},{product:r,productIsReady:!0}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(){h({isCartOpen:!0})};return a.a.createElement(p.Provider,{value:Object(d.a)(Object(d.a)({},o),{},{fetchAllProducts:B,queriedProducts:o.queriedProducts,fetchProduct:H,product:o.product,productIsReady:o.productIsReady,isCartOpen:f.isCartOpen,openCart:F,closeCart:function(){h({isCartOpen:!1})},addItemToCheckout:W,removeItemFromCheckout:q,fetchCheckout:R,checkout:C.checkout,updateCategoryFilters:function(e){w(e)},updatePriceSorter:function(e){I({highToLow:e})},searchProducts:function(e){A(e)}})},t)},g=r(32),C=r(1),v=r(33);r(48);function k(){var e=Object(g.a)(["\n    &:hover{\n        transform: scale(1.07, 1.07);\n    }\n    transition: all 0.3s ease;\n    animation-name: fadeIn;\n    animation-duration: 1s;\n    animation-delay: ","s;\n    animation-fill-mode: backwards;\n"]);return k=function(){return e},e}var j=function(e){var t=e.title,r=e.productImage,n=e.id,c=e.price,o=e.delay,l=v.a.div(k(),o);return a.a.createElement(C.Col,{size:{xs:"6",md:"3"}},a.a.createElement(i.b,{to:"/mindelli-co/product/".concat(n),style:{textDecoration:"none"}},a.a.createElement(C.Div,{p:{xs:"0.5rem",md:"2rem"}},a.a.createElement(l,null,a.a.createElement(C.Div,{border:"1px solid",borderColor:"gray300",shadow:"3",hoverShadow:"4",transition:"0.3s"},a.a.createElement(C.Div,{h:{xs:"12rem",md:"20rem"},m:{b:"0.5rem"},bgImg:r.src,bgSize:"cover",bgPos:"center center"}),a.a.createElement(C.Div,{m:{l:"0.5rem",b:"0.5rem"}},a.a.createElement(C.Text,{tag:"h3",textWeight:"400",textSize:"subheader",textColor:"black600"},t),a.a.createElement(C.Text,{tag:"h5",textWeight:"400",textSize:"body",textColor:"gray700"},"$",c)))))))},O=function(){var e=Object(n.useContext)(p).updateCategoryFilters,t=Object(n.useState)({showDropdown:!1}),r=Object(b.a)(t,2),c=r[0],o=r[1],i=Object(n.useState)({skirtsAreChecked:!1,topsAreChecked:!1,bottomsAreChecked:!1,dressesAreChecked:!1}),l=Object(b.a)(i,2),s=l[0],u=l[1];Object(n.useEffect)((function(){e(s)}),[s]);var m=a.a.createElement(C.Div,null,a.a.createElement(C.Label,{d:"block",p:"0.5rem"},a.a.createElement(C.Checkbox,{onChange:function(e){u(Object(d.a)(Object(d.a)({},s),{},{skirtsAreChecked:e.target.checked}))},checked:s.skirtsAreChecked})," Skirts"),a.a.createElement(C.Label,{d:"block",p:"0.5rem"},a.a.createElement(C.Checkbox,{onChange:function(e){u(Object(d.a)(Object(d.a)({},s),{},{topsAreChecked:e.target.checked}))},checked:s.topsAreChecked})," Tops"),a.a.createElement(C.Label,{d:"block",p:"0.5rem"},a.a.createElement(C.Checkbox,{onChange:function(e){u(Object(d.a)(Object(d.a)({},s),{},{bottomsAreChecked:e.target.checked}))},checked:s.bottomsAreChecked})," Bottoms"),a.a.createElement(C.Label,{d:"block",p:"0.5rem"},a.a.createElement(C.Checkbox,{onChange:function(e){u(Object(d.a)(Object(d.a)({},s),{},{dressesAreChecked:e.target.checked}))},checked:s.dressesAreChecked})," Dresses"));return a.a.createElement(C.Dropdown,{isOpen:c.showDropdown,onClick:function(){return o(Object(d.a)(Object(d.a)({},c),{},{showDropdown:!c.showDropdown}))},menu:m},"Filter")},w=function(){var e=Object(n.useContext)(p).updatePriceSorter,t=Object(n.useState)({showDropdown:!1}),r=Object(b.a)(t,2),c=r[0],o=r[1],i=Object(n.useState)({highToLow:!1}),l=Object(b.a)(i,2),s=l[0],u=l[1];Object(n.useEffect)((function(){e(s.highToLow)}),[s.highToLow]);var m=a.a.createElement(C.Div,null,a.a.createElement(C.Label,{d:"block",p:"0.5rem"},a.a.createElement(C.Radiobox,{onChange:function(e){u({highToLow:!s.highToLow})},checked:!s.highToLow})," Low to High"),a.a.createElement(C.Label,{d:"block",p:"0.5rem"},a.a.createElement(C.Radiobox,{onChange:function(e){u({highToLow:!s.highToLow})},checked:s.highToLow})," High to Low"));return a.a.createElement(C.Dropdown,{isOpen:c.showDropdown,onClick:function(){return o(Object(d.a)(Object(d.a)({},c),{},{showDropdown:!c.showDropdown}))},menu:m},"Sort by price")},y=function(){var e=Object(n.useContext)(p).searchProducts,t=Object(n.useState)(""),r=Object(b.a)(t,2),c=r[0],o=r[1];return a.a.createElement(C.Input,{value:c,onChange:function(e){o(e.target.value)},onKeyDown:function(t){"Enter"===t.key&&e(c)},placeholder:"Search",suffix:a.a.createElement(C.Icon,{name:"Search",size:"20px",cursor:"pointer",onClick:function(){return e(c)},pos:"absolute",top:"50%",right:"1rem",transform:"translateY(-50%)"})})},D=function(){var e=Object(n.useContext)(p).queriedProducts,t=Object(n.useState)([]),r=Object(b.a)(t,2),c=r[0],o=r[1];Object(n.useEffect)((function(){o(e)}),[e]);var i=0;return a.a.createElement(C.Container,{minH:"100rem"},a.a.createElement(C.Div,{m:{t:"2rem"}},a.a.createElement(C.Row,{justify:"center"},a.a.createElement(C.Col,{size:{xs:"12",md:"3"}},a.a.createElement(C.Div,{m:{b:{xs:"1rem",md:"0rem"}}},a.a.createElement(y,null))),a.a.createElement(C.Col,{size:{xs:"12",md:"3"}},a.a.createElement(C.Div,{m:{b:{xs:"1rem",md:"0rem"}}},a.a.createElement(O,null))),a.a.createElement(C.Col,{size:{xs:"12",md:"3"}},a.a.createElement(C.Div,{m:{b:{xs:"1rem",md:"0rem"}}},a.a.createElement(w,null)))),a.a.createElement(C.Row,null,c.map((function(e){return i+=.12,a.a.createElement(j,{title:e.title,productImage:e.images[0],key:e.id,id:e.id,price:e.variants[0].price,delay:i})})))))},S=r(114),I=(r(109),function(){return a.a.createElement(C.Container,null,a.a.createElement(S.a,{interval:"5000",controls:!1},a.a.createElement(S.a.Item,null,a.a.createElement(C.Div,{bgImg:"https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",bgSize:"cover",bgPos:"center center",h:{xs:"15rem",md:"25rem"},m:{t:"2rem"},p:{xs:"0.5rem",md:"2rem"},d:"flex",flexDir:"row",justify:"center"},a.a.createElement(C.Div,{m:"2rem",bg:"rgba(0, 0, 0, 0.29)",maxW:{xs:"90%",md:"65%"}},a.a.createElement(C.Text,{tag:"h2",textSize:{xs:"subheader",md:"heading"},textColor:"white",textWeight:"300",p:{xs:"1rem",md:"2rem"}},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra consequat diam.")))),a.a.createElement(S.a.Item,null,a.a.createElement(C.Div,{bgImg:"https://images.unsplash.com/photo-1512436991641-6745cdb1723f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",bgSize:"cover",bgPos:"center center",h:{xs:"15rem",md:"25rem"},m:{t:"2rem"},p:{xs:"0.5rem",md:"2rem"},d:"flex",flexDir:"row",justify:"center"},a.a.createElement(C.Div,{m:"2rem",bg:"rgba(0, 0, 0, 0.29)",maxW:{xs:"90%",md:"65%"}},a.a.createElement(C.Text,{tag:"h2",textSize:{xs:"subheader",md:"heading"},textColor:"white",textWeight:"300",p:{xs:"1rem",md:"2rem"}},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra consequat diam."))))))}),P=function(){var e=Object(n.useContext)(p).fetchAllProducts;return Object(n.useEffect)((function(){return e(),function(){}}),[]),a.a.createElement(a.a.Fragment,null,a.a.createElement(I,null),a.a.createElement(D,null))},T=function(){return a.a.createElement(C.Div,{bg:"transparent",d:"flex",align:"center",justify:"center",pos:"absolute",top:"0",bottom:"0",right:"0",left:"0",style:{zIndex:-1}},a.a.createElement(C.Icon,{name:"Loading3",size:"4rem",color:"brand500"}))};function z(){var e=Object(g.a)(["\n    animation-name: fadeIn;\n    animation-duration: 1s\n"]);return z=function(){return e},e}var A=v.a.div(z()),L=function(){var e=Object(l.f)().productId,t=Object(n.useContext)(p),r=t.fetchProduct,c=t.product,o=t.productIsReady,i=t.addItemToCheckout,s=Object(n.useState)(),u=Object(b.a)(s,2),m=u[0],d=u[1];Object(n.useEffect)((function(){return r(e),function(){}}),[e]),Object(n.useEffect)((function(){o&&f(c.images[0].src)}),[o]);var f=function(e){d(e)};return o?a.a.createElement(C.Container,null,a.a.createElement(A,null,a.a.createElement(C.Row,{m:{b:"8rem"}},a.a.createElement(C.Col,{size:{xs:"12",md:"1"}},a.a.createElement(C.Div,{d:{xs:"flex"},flexDir:{xs:"row",md:"column"},justify:{xs:"space-between"},m:{t:{xs:"1rem",md:"0"}}},c.images.map((function(e){return a.a.createElement(C.Div,{bgImg:e.src,bgSize:"cover",bgPos:"center center",h:"6rem",m:{t:{xs:"none",md:"2rem"}},onClick:function(){return f(e.src)},border:m===e.src?"4px solid":"none",borderColor:"brand500",key:e.src,w:{xs:"4rem",md:"auto"}})})))),a.a.createElement(C.Col,{size:{xs:"12",md:"5"}},a.a.createElement(C.Div,{bgImg:m,bgSize:"cover",bgPos:"center center",h:{xs:"40vh",md:"30rem"},m:{t:"2rem"}})),a.a.createElement(C.Col,{size:{xs:"12",md:"5"}},a.a.createElement(C.Div,{m:{t:{xs:"1rem",md:"2rem"},l:{xs:"none",md:"1rem"}}},a.a.createElement(C.Text,{tag:"h3",textSize:"heading",textWeight:"400",textColor:"black500"},c.title),a.a.createElement(C.Text,{tag:"h5",textSize:"title",textWeight:"300",textColor:"black400"},"$",c.variants[0].price),a.a.createElement(C.Text,{tag:"p",textSize:"subheader",m:{t:{xs:"1rem",md:"4rem"},b:"2rem"}},c.description),a.a.createElement(C.Button,{bg:"brand600",rounded:"xs",onClick:function(){return i(c.variants[0].id)},m:{b:"2rem"}},"Add to cart")))))):a.a.createElement(T,null)},R=function(){var e=Object(n.useContext)(p).openCart;return a.a.createElement(C.Container,{d:"flex",flexDir:"row",justify:"space-between",align:"center",p:{xs:"1rem",md:"2rem"},border:{b:"1px solid"},borderColor:"gray500"},a.a.createElement(i.b,{to:"/mindelli-co"},a.a.createElement(C.Icon,{name:"HomeSolid",size:{xs:"1.5rem",md:"2.5em"},color:"brand600"})),a.a.createElement(C.Text,{tag:"h1",textSize:{xs:"heading",md:"display2"},textWeight:"300"},"mindelli & co."),a.a.createElement(C.Anchor,{onClick:function(){return e()}},a.a.createElement(C.Icon,{name:"Bag",size:{xs:"1.5rem",md:"2.5em"},color:"brand600"})))},W=function(){var e=Object(n.useContext)(p),t=e.isCartOpen,r=e.closeCart,c=e.checkout,o=e.removeItemFromCheckout;return a.a.createElement(C.SideDrawer,{isOpen:t,onClose:r},a.a.createElement(C.Div,{d:"flex",flexDir:"row",justify:"space-between",m:{b:"2rem"},border:{b:"1px solid"},borderColor:"gray500"},a.a.createElement(C.Text,{textSize:"subheader",textWeight:"500",textColor:"black600",m:{l:"1rem"}},"Cart"),a.a.createElement(C.Anchor,{onClick:r},a.a.createElement(C.Icon,{name:"Cross",color:"black",size:"25px"}))),a.a.createElement(C.Div,{d:"flex",flexDir:"column"},void 0===c.lineItems?a.a.createElement(C.Text,null,"Cart is empty"):0===c.lineItems.length?a.a.createElement(C.Text,{textColor:"gray700",m:{l:"2rem",b:"2rem"}},"Your cart is currently empty."):c.lineItems.map((function(e){return a.a.createElement(C.Row,{p:"1rem"},a.a.createElement(C.Col,{size:"3"},a.a.createElement(C.Div,{h:"4rem",bgImg:e.variant.image.src,bgSize:"cover",bgPos:"center center"})),a.a.createElement(C.Col,{size:"6"},a.a.createElement(C.Text,null,e.title)),a.a.createElement(C.Col,{size:"2"},a.a.createElement(C.Text,null,"$",e.variant.price)),a.a.createElement(C.Col,{size:"1"},a.a.createElement(C.Anchor,{onClick:function(){return o(e.id)}}," ",a.a.createElement(C.Icon,{name:"Cross",color:"red",size:"20px"})," ")))}))),a.a.createElement(C.Div,{d:"flex",flexDir:"row",justify:"space-between",border:{t:"1px solid"},borderColor:"black500",p:"1rem"},a.a.createElement(C.Text,{textWeight:"500",textColor:"black600"},"Subtotal"),a.a.createElement(C.Text,null,"$",c.subtotalPrice)),a.a.createElement(C.Div,{d:"flex",justify:"flex-end"},a.a.createElement(C.Anchor,{href:c.webUrl,target:"_blank",style:{textDecoration:"none"}},a.a.createElement(C.Button,{bg:"brand600",rounded:"xs"},"Checkout"))))},q=function(){return a.a.createElement(C.Container,{minH:"15rem",border:{t:"1px solid"},borderColor:"gray400"},a.a.createElement(C.Text,{m:"2rem"},"Mindelli & Co 2020 \xa9"))};var B=function(){return a.a.createElement(E,null,a.a.createElement(i.a,null,a.a.createElement(R,null),a.a.createElement(W,null),a.a.createElement(l.c,null,a.a.createElement(l.a,{exact:!0,path:"/mindelli-co"},a.a.createElement(P,null)),a.a.createElement(l.a,{path:"/mindelli-co/product/:productId"},a.a.createElement(L,null))),a.a.createElement(q,null)))},H=r(14),F=r(58),$=(r(110),new F.a);o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(H.Provider,{value:$,debug:void 0,debugAfterHydration:!0},a.a.createElement(C.StyleReset,null),a.a.createElement(B,null))),document.getElementById("root"))},48:function(e,t,r){},64:function(e,t,r){e.exports=r(112)},69:function(e,t,r){}},[[64,1,2]]]);
//# sourceMappingURL=main.393481ac.chunk.js.map