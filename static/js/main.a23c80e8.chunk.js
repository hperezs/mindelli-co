(this["webpackJsonpecommerce-app-client"]=this["webpackJsonpecommerce-app-client"]||[]).push([[0],{111:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),c=r(17),o=r.n(c),i=(r(68),r(21)),l=r(6),u=r(11),m=r(10),s=r.n(m),d=r(22),p=r(31),b=r(46),f=r.n(b);r(70).config();var h=Object(a.createContext)(),x=f.a.buildClient({domain:"mindelli-co.myshopify.com",storefrontAccessToken:"3dda150cada0b74961f6d8b150e2f041"}),E=function(e){var t=e.children,r=Object(a.useState)({products:[],product:{},productIsReady:!1,isCartOpen:!1}),c=Object(p.a)(r,2),o=c[0],i=c[1],l=Object(a.useState)({checkout:{}}),m=Object(p.a)(l,2),b=m[0],f=m[1];Object(a.useEffect)((function(){localStorage.checkout?g(localStorage.checkout):E()}),[]);var E=function(){var e=Object(d.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.checkout.create();case 2:t=e.sent,localStorage.setItem("checkout",t.id),f({checkout:t});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(d.a)(s.a.mark((function e(t){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.checkout.fetch(t);case 2:r=e.sent,f({checkout:r});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(d.a)(s.a.mark((function e(t){var r,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=[{variantId:t,quantity:1}],e.next=3,x.checkout.addLineItems(b.checkout.id,r);case 3:a=e.sent,f({checkout:a}),O();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(d.a)(s.a.mark((function e(t){var r,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=[t],e.next=3,x.checkout.removeLineItems(b.checkout.id,r);case 3:a=e.sent,f({checkout:a});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(d.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.product.fetchAll();case 2:t=e.sent,i(Object(u.a)(Object(u.a)({},o),{},{products:t}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(d.a)(s.a.mark((function e(t){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(Object(u.a)(Object(u.a)({},o),{},{productIsReady:!1})),e.next=3,x.product.fetch(t);case 3:r=e.sent,i(Object(u.a)(Object(u.a)({},o),{},{product:r,productIsReady:!0}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){i(Object(u.a)(Object(u.a)({},o),{},{isCartOpen:!0}))};return n.a.createElement(h.Provider,{value:Object(u.a)(Object(u.a)({},o),{},{fetchAllProducts:k,products:o.products,fetchProduct:j,product:o.product,productIsReady:o.productIsReady,isCartOpen:o.isCartOpen,openCart:O,closeCart:function(){i(Object(u.a)(Object(u.a)({},o),{},{isCartOpen:!1}))},addItemToCheckout:v,removeItemFromCheckout:C,fetchCheckout:g,checkout:b.checkout})},t)},g=r(47),v=r(1);function C(){var e=Object(g.a)(["\n    &:hover{\n        transform: scale(1.07, 1.07);\n    }\n    transition: 0.3s ease;\n"]);return C=function(){return e},e}var k=r(49).a.div(C()),j=function(e){var t=e.title,r=e.productImage,a=e.id,c=e.price;return n.a.createElement(v.Col,{size:"3"},n.a.createElement(i.b,{to:"/mindelli-co/product/".concat(a),style:{textDecoration:"none"}},n.a.createElement(v.Div,{p:"2rem"},n.a.createElement(k,null,n.a.createElement(v.Div,{border:"1px solid",borderColor:"gray300",shadow:"3",hoverShadow:"4",transition:"0.3s"},n.a.createElement(v.Div,{h:"20rem",m:{b:"0.5rem"},bgImg:r.src,bgSize:"cover",bgPos:"center center"}),n.a.createElement(v.Div,{m:{l:"0.5rem",b:"0.5rem"}},n.a.createElement(v.Text,{tag:"h3",textWeight:"400",textSize:"subheader",textColor:"black600"},t),n.a.createElement(v.Text,{tag:"h5",textWeight:"400",textSize:"body",textColor:"gray700"},"$",c)))))))},O=function(e){var t=e.products;return n.a.createElement(v.Container,null,n.a.createElement(v.Row,null,t.map((function(e){return n.a.createElement(j,{title:e.title,productImage:e.images[0],key:e.id,id:e.id,price:e.variants[0].price})}))))},y=r(113),I=(r(108),function(){return n.a.createElement(v.Container,null,n.a.createElement(y.a,{interval:"4000"},n.a.createElement(y.a.Item,null,n.a.createElement(v.Div,{bgImg:"https://images.unsplash.com/photo-1512436991641-6745cdb1723f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",bgSize:"cover",bgPos:"center center",h:"40vh",m:{t:"2rem"},p:"2rem",d:"flex",flexDir:"row",justify:"center"},n.a.createElement(v.Div,{m:"2rem",bg:"rgba(0, 0, 0, 0.29)",maxW:"65%"},n.a.createElement(v.Text,{tag:"h2",textSize:"heading",textColor:"white",textWeight:"300",p:"2rem"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra consequat diam. In metus risus, aliquam non massa tempus, gravida commodo orci. Praesent interdum pharetra quam eu pharetra.")))),n.a.createElement(y.a.Item,null,n.a.createElement(v.Div,{bgImg:"https://images.unsplash.com/photo-1523199455310-87b16c0eed11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",bgSize:"cover",bgPos:"center center",h:"40vh",m:{t:"2rem"},p:"2rem",d:"flex",flexDir:"row",justify:"center"},n.a.createElement(v.Div,{m:"2rem",bg:"rgba(0, 0, 0, 0.29)",maxW:"65%"},n.a.createElement(v.Text,{tag:"h2",textSize:"heading",textColor:"white",textWeight:"300",p:"2rem"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra consequat diam. In metus risus, aliquam non massa tempus, gravida commodo orci. Praesent interdum pharetra quam eu pharetra."))))))}),w=function(){var e=Object(a.useContext)(h),t=e.fetchAllProducts,r=e.products;return Object(a.useEffect)((function(){return t(),function(){}}),[]),n.a.createElement(n.a.Fragment,null,n.a.createElement(I,null),n.a.createElement(O,{products:r}))},S=function(){return n.a.createElement(v.Div,{bg:"transparent",d:"flex",align:"center",justify:"center",pos:"absolute",top:"0",bottom:"0",right:"0",left:"0",style:{zIndex:-1}},n.a.createElement(v.Icon,{name:"Loading3",size:"4rem",color:"brand500"}))},z=function(){var e=Object(l.f)().productId,t=Object(a.useContext)(h),r=t.fetchProduct,c=t.product,o=t.productIsReady,i=t.addItemToCheckout,u=Object(a.useState)(),m=Object(p.a)(u,2),s=m[0],d=m[1];Object(a.useEffect)((function(){return r(e),function(){}}),[e]),Object(a.useEffect)((function(){o&&b(c.images[0].src)}),[o]);var b=function(e){d(e)};return o?n.a.createElement(v.Container,null,n.a.createElement(v.Row,null,n.a.createElement(v.Col,{size:"1"},c.images.map((function(e){return n.a.createElement(v.Div,{bgImg:e.src,bgSize:"cover",bgPos:"center center",h:"6rem",m:{t:"2rem"},onClick:function(){return b(e.src)},border:s===e.src?"4px solid":"none",borderColor:"brand500",key:e.src})}))),n.a.createElement(v.Col,null,n.a.createElement(v.Div,{bgImg:s,bgSize:"cover",bgPos:"center center",h:"30rem",m:{t:"2rem"}})),n.a.createElement(v.Col,null,n.a.createElement(v.Div,{m:{t:"2rem",l:"2rem"}},n.a.createElement(v.Text,{tag:"h3",textSize:"heading",textWeight:"400",textColor:"black500"},c.title),n.a.createElement(v.Text,{tag:"h5",textSize:"title",textWeight:"300",textColor:"black400"},"$",c.variants[0].price),n.a.createElement(v.Text,{tag:"p",textSize:"subheader",m:{t:"4rem",b:"2rem"}},c.description),n.a.createElement(v.Button,{bg:"brand600",rounded:"xs",onClick:function(){return i(c.variants[0].id)}},"Add to cart"))))):n.a.createElement(S,null)},D=function(){var e=Object(a.useContext)(h).openCart;return n.a.createElement(v.Container,{d:"flex",flexDir:"row",justify:"space-between",align:"center",p:"2rem",border:{b:"1px solid"},borderColor:"gray500"},n.a.createElement(i.b,{to:"/mindelli-co"},n.a.createElement(v.Icon,{name:"HomeSolid",size:"2.5em",color:"brand600"})),n.a.createElement(v.Text,{tag:"h1",textSize:"display2",textWeight:"300"},"mindelli & co."),n.a.createElement(v.Anchor,{onClick:function(){return e()}},n.a.createElement(v.Icon,{name:"Bag",size:"2.5em",color:"brand600"})))},T=function(){var e=Object(a.useContext)(h),t=e.isCartOpen,r=e.closeCart,c=e.checkout,o=e.removeItemFromCheckout;return n.a.createElement(v.SideDrawer,{isOpen:t,onClose:r},n.a.createElement(v.Div,{d:"flex",flexDir:"row",justify:"space-between",m:{b:"2rem"},border:{b:"1px solid"},borderColor:"gray500"},n.a.createElement(v.Text,{textSize:"subheader",textWeight:"500",textColor:"black600",m:{l:"1rem"}},"Cart"),n.a.createElement(v.Anchor,{onClick:r},n.a.createElement(v.Icon,{name:"Cross",color:"black",size:"25px"}))),n.a.createElement(v.Div,{d:"flex",flexDir:"column"},void 0===c.lineItems?n.a.createElement(v.Text,null,"Cart is empty"):0===c.lineItems.length?n.a.createElement(v.Text,{textColor:"gray700",m:{b:"2rem"}},"Your cart is currently empty."):c.lineItems.map((function(e){return n.a.createElement(v.Row,{p:"1rem"},n.a.createElement(v.Col,{size:"3"},n.a.createElement(v.Div,{h:"4rem",bgImg:e.variant.image.src,bgSize:"cover",bgPos:"center center"})),n.a.createElement(v.Col,{size:"6"},n.a.createElement(v.Text,null,e.title)),n.a.createElement(v.Col,{size:"2"},n.a.createElement(v.Text,null,"$",e.variant.price)),n.a.createElement(v.Col,{size:"1"},n.a.createElement(v.Anchor,{onClick:function(){return o(e.id)}}," ",n.a.createElement(v.Icon,{name:"Cross",color:"red",size:"20px"})," ")))}))),n.a.createElement(v.Div,{d:"flex",flexDir:"row",justify:"space-between",border:{t:"1px solid"},borderColor:"black500",p:"1rem"},n.a.createElement(v.Text,{textWeight:"500",textColor:"black600"},"Subtotal"),n.a.createElement(v.Text,null,"$",c.subtotalPrice)),n.a.createElement(v.Div,{d:"flex",justify:"flex-end"},n.a.createElement(v.Anchor,{href:c.webUrl,target:"_blank"},n.a.createElement(v.Button,{bg:"brand600"},"Checkout"))))};var P=function(){return n.a.createElement(E,null,n.a.createElement(i.a,null,n.a.createElement(D,null),n.a.createElement(T,null),n.a.createElement(l.c,null,n.a.createElement(l.a,{exact:!0,path:"/mindelli-co"},n.a.createElement(w,null)),n.a.createElement(l.a,{path:"/mindelli-co/product/:productId"},n.a.createElement(z,null)))))},W=r(13),A=r(57),R=(r(109),new A.a);o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(W.Provider,{value:R,debug:void 0,debugAfterHydration:!0},n.a.createElement(v.StyleReset,null),n.a.createElement(P,null))),document.getElementById("root"))},63:function(e,t,r){e.exports=r(111)},68:function(e,t,r){}},[[63,1,2]]]);
//# sourceMappingURL=main.a23c80e8.chunk.js.map