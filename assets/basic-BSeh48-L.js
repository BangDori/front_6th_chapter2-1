import"./modulepreload-polyfill-B5Qt9EMX.js";function Pt(){return`
    <button
      id="add-to-cart"
      class="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
    >
      Add to Cart
    </button>
  `}function Tt(){return`
    <select
      id="product-select"
      class="w-full p-3 border border-gray-300 rounded-lg text-base mb-3"
    ></select>
  `}function Et(){return`
    <div id="stock-status" class="text-xs text-red-500 mt-3 whitespace-pre-line"></div>
  `}function Ct(){return`
    <div class="mb-6 pb-6 border-b border-gray-200">
      ${Tt()} ${Pt()} ${Et()}
    </div>
  `}function Dt(){return' <div id="cart-items"></div> '}function It(){return`
    <div class="bg-white border border-gray-200 p-8 overflow-y-auto">
      ${Ct()} ${Dt()}
    </div>
  `}function $t({bonusPoints:t=0,pointsDetail:e}){return t===0?"적립 포인트: 0p":`
    <div>적립 포인트: <span class="font-bold">${t}p</span></div>
    ${e.length>0?`<div class="text-2xs opacity-70 mt-1">${e.join(", ")}</div>`:""}
  `}const M="p1",A="p2",U="p3",z="p4",q="p5",et=20,at=5,X=10,Q=25,v={[M]:10,[A]:15,[U]:20,[z]:5,[q]:25},T=10,W=30,Mt=5,m={SMALL:10,MEDIUM:20,LARGE:30},At=1e3,ct=2,p={KEYBOARD_MOUSE_SET:50,FULL_SET:100,BULK_PURCHASE:{SMALL:20,MEDIUM:50,LARGE:100}},Ut=1e4,wt=3e4,Ot=2e4,kt=3e3;function Rt({total:t=0,bonusPoints:e=0,pointsDetail:n=[]}){return`
    <div class="bg-gray-900 text-white p-8 overflow-y-auto">
      <div class="flex flex-col h-full">
        <div class="mb-6">
          <h2 class="text-lg font-medium mb-4">Order Summary</h2>
          <div id="summary-details" class="space-y-3"></div>
        </div>
        <div class="mt-auto">
          <div id="discount-info" class="mb-4"></div>
          <div id="cart-total" class="pt-5 border-t border-white/10">
            <div class="flex justify-between items-baseline">
              <span class="text-sm uppercase tracking-wider">Total</span>
              <div class="text-2xl tracking-tight">₩${t.toLocaleString()}</div>
            </div>
            <div id="loyalty-points" class="text-xs text-blue-400 mt-2 text-right">
              ${$t({bonusPoints:e,pointsDetail:n})}
            </div>
          </div>
          <div id="tuesday-special" class="mt-4 p-3 bg-white/10 rounded-lg hidden">
            <div class="flex items-center gap-2">
              <span class="text-2xs">🎉</span>
              <span class="text-xs uppercase tracking-wide"
                >Tuesday Special ${X}% Applied</span
              >
            </div>
          </div>
        </div>
      </div>
      <button
        class="w-full py-4 bg-white text-black text-sm font-normal uppercase tracking-super-wide cursor-pointer mt-6 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/30"
      >
        Proceed to Checkout
      </button>
      <p class="mt-4 text-2xs text-white/60 text-center leading-relaxed">
        Free shipping on all orders.<br />
        <span id="points-notice">Earn loyalty points with purchase.</span>
      </p>
    </div>
  `}function Bt({total:t=0,bonusPoints:e=0,pointsDetail:n=[]}){return`
    <div class="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6 flex-1 overflow-hidden">
      ${It()} ${Rt({total:t,bonusPoints:e,pointsDetail:n})}
    </div>
  `}function _t({itemCount:t=0}){return`
    <div class="mb-8">
      <h1 class="text-xs font-medium tracking-extra-wide uppercase mb-2">
        🛒 Hanghae Online Store
      </h1>
      <div class="text-5xl tracking-tight leading-none">Shopping Cart</div>
      <p id="item-count" class="text-sm text-gray-500 font-normal mt-3">
        🛍️ ${t} items in cart
      </p>
    </div>
  `}function qt(){return`
    <div
      id="manual-column"
      class="fixed right-0 top-0 h-full w-80 bg-white shadow-2xl p-6 overflow-y-auto z-50 transform translate-x-full transition-transform duration-300"
    >
      <button
        class="absolute top-4 right-4 text-gray-500 hover:text-black"
        onclick="document.querySelector('.fixed.inset-0').classList.add('hidden'); this.parentElement.classList.add('translate-x-full')"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
      <h2 class="text-xl font-bold mb-4">📖 이용 안내</h2>
      <div class="mb-6">
        <h3 class="text-base font-bold mb-3">💰 할인 정책</h3>
        <div class="space-y-3">
          <div class="bg-gray-100 rounded-lg p-3">
            <p class="font-semibold text-sm mb-1">개별 상품</p>
            <p class="text-gray-700 text-xs pl-2">
              • 키보드 ${T}개↑:
              ${v[M]}%<br />
              • 마우스 ${T}개↑: ${v[A]}%<br />
              • 모니터암 ${T}개↑:
              ${v[U]}%<br />
              • 스피커 ${T}개↑: ${v[q]}%
            </p>
          </div>
          <div class="bg-gray-100 rounded-lg p-3">
            <p class="font-semibold text-sm mb-1">전체 수량</p>
            <p class="text-gray-700 text-xs pl-2">
              • ${W}개 이상: ${Q}%
            </p>
          </div>
          <div class="bg-gray-100 rounded-lg p-3">
            <p class="font-semibold text-sm mb-1">특별 할인</p>
            <p class="text-gray-700 text-xs pl-2">
              • 화요일: +${X}%<br />
              • ⚡번개세일: ${et}%<br />
              • 💝추천할인: ${at}%
            </p>
          </div>
        </div>
      </div>
      <div class="mb-6">
        <h3 class="text-base font-bold mb-3">🎁 포인트 적립</h3>
        <div class="space-y-3">
          <div class="bg-gray-100 rounded-lg p-3">
            <p class="font-semibold text-sm mb-1">기본</p>
            <p class="text-gray-700 text-xs pl-2">• 구매액의 0.1%</p>
          </div>
          <div class="bg-gray-100 rounded-lg p-3">
            <p class="font-semibold text-sm mb-1">추가</p>
            <p class="text-gray-700 text-xs pl-2">
              • 화요일: ${ct}배<br />
              • 키보드+마우스: +${p.KEYBOARD_MOUSE_SET}p<br />
              • 풀세트: +${p.FULL_SET}p<br />
              • ${m.SMALL}개↑: +${p.BULK_PURCHASE.SMALL}p /
              ${m.MEDIUM}개↑: +${p.BULK_PURCHASE.MEDIUM}p /
              ${m.LARGE}개↑: +${p.BULK_PURCHASE.LARGE}p
            </p>
          </div>
        </div>
      </div>
      <div class="border-t border-gray-200 pt-4 mt-4">
        <p class="text-xs font-bold mb-1">💡 TIP</p>
        <p class="text-2xs text-gray-600 leading-relaxed">
          • 화요일 대량구매 = MAX 혜택<br />
          • ⚡+💝 중복 가능<br />
          • 상품4 = 품절
        </p>
      </div>
    </div>
  `}function Ht(){return`
    <div
      id="manual-overlay"
      class="fixed inset-0 bg-black/50 z-40 hidden transition-opacity duration-300"
    >
      ${qt()}
    </div>
  `}function Nt(){return`
    <button
      id="manual-toggle"
      class="fixed top-4 right-4 bg-black text-white p-3 rounded-full hover:bg-gray-900 transition-colors z-50"
    >
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
    </button>
  `}const S={total:0,itemCount:0,items:[]},K={updateTotal(t){S.total=t},updateItemCount(t){S.itemCount=t},updateItems(t){S.items=t},reset(){S.total=0,S.itemCount=0,S.items=[]}},ut=[];function Gt(t){ut.push(t)}function Kt(){ut.forEach(t=>t(S))}function j(t,...e){t(...e),Kt()}const O={updateTotal:t=>j(K.updateTotal,t),updateItemCount:t=>j(K.updateItemCount,t),updateItems:t=>j(K.updateItems,t),reset:()=>j(K.reset)};function jt(){return`
    <div>
      ${_t({itemCount:S.itemCount})}
      ${Bt({total:S.total,bonusPoints:0,pointsDetail:[]})}
      ${Nt()} ${Ht()}
    </div>
  `}const Vt=2;function st(){return new Date().getDay()===Vt}function E(t,e){return t.find(n=>n.id===e)||null}function Ft(t){return t.onSale&&t.suggestSale?"⚡💝":t.onSale?"⚡":t.suggestSale?"💝":""}function Yt(t){return t.onSale&&t.suggestSale?"text-purple-600":t.onSale?"text-red-500":t.suggestSale?"text-blue-500":""}function zt(t){const{productList:e,cartDisp:n,summaryDetails:a,totalDiv:o,discountInfoDiv:s,itemCountElement:i}=t;let l=0,r=0,d=0,c=0,g=0;const C=[],y=n.children;for(let w=0;w<y.length;w++){const J=E(e,y[w].id),Lt=y[w].querySelector(".quantity-number"),N=parseInt(Lt.textContent),ot=J.val*N;let G=0;r+=N,c+=ot,Qt(y[w],N),N>=T&&(G=Wt(J.id),G>0&&C.push({name:J.name,discount:G*100})),l+=ot*(1-G)}const{finalTotal:ht,discRate:yt}=Xt(l,c,r);l=ht,d=c;const{finalTotal:bt,finalDiscRate:xt}=Jt(l,d,yt);return l=bt,g=xt,Zt(y,c,r,C,e,a),ee(l,o),ne(d,l,g,s),ae(r,i),{totalAmt:Math.round(l),itemCnt:r,originalTotal:d,discRate:g}}function Qt(t,e){t.querySelectorAll(".text-lg, .text-xs").forEach(function(a){a.classList.contains("text-lg")&&(a.style.fontWeight=e>=T?"bold":"normal")})}function Wt(t){return{[M]:v[M]/100,[A]:v[A]/100,[U]:v[U]/100,[z]:v[z]/100,[q]:v[q]/100}[t]||0}function Xt(t,e,n){let a=0;return n>=W?(t=e*(100-Q)/100,a=Q/100):a=(e-t)/e,{finalTotal:t,discRate:a}}function Jt(t,e,n){const a=document.getElementById("tuesday-special");return a&&(st()&&t>0?(t=t*(100-X)/100,n=1-t/e,a.classList.remove("hidden")):a.classList.add("hidden")),{finalTotal:t,finalDiscRate:n}}function Zt(t,e,n,a,o,s){if(s.innerHTML="",e>0){for(let i=0;i<t.length;i++){const l=E(o,t[i].id),r=t[i].querySelector(".quantity-number"),d=parseInt(r.textContent),c=l.val*d;s.innerHTML+=`
        <div class="flex justify-between text-xs tracking-wide text-gray-400">
          <span>${l.name} x ${d}</span>
          <span>₩${c.toLocaleString()}</span>
        </div>
      `}s.innerHTML+=`
      <div class="border-t border-white/10 my-3"></div>
      <div class="flex justify-between text-sm tracking-wide">
        <span>Subtotal</span>
        <span>₩${e.toLocaleString()}</span>
      </div>
    `,te(n,a,s),s.innerHTML+=`
      <div class="flex justify-between text-sm tracking-wide text-gray-400">
        <span>Shipping</span>
        <span>Free</span>
      </div>
    `}}function te(t,e,n){t>=W?n.innerHTML+=`
      <div class="flex justify-between text-sm tracking-wide text-green-400">
        <span class="text-xs">🎉 대량구매 할인 (${W}개 이상)</span>
        <span class="text-xs">-${Q}%</span>
      </div>
    `:e.length>0&&e.forEach(a=>{n.innerHTML+=`
        <div class="flex justify-between text-sm tracking-wide text-green-400">
          <span class="text-xs">${a.name} (${T}개↑)</span>
          <span class="text-xs">-${a.discount}%</span>
        </div>
      `}),st()&&(n.innerHTML+=`
      <div class="flex justify-between text-sm tracking-wide text-purple-400">
        <span class="text-xs">🌟 화요일 추가 할인</span>
        <span class="text-xs">-${X}%</span>
      </div>
    `)}function ee(t,e){e&&(e.textContent=`₩${Math.round(t).toLocaleString()}`)}function ne(t,e,n,a){if(a.innerHTML="",n>0&&e>0){const o=t-e;a.innerHTML=`
      <div class="bg-green-500/20 rounded-lg p-3">
        <div class="flex justify-between items-center mb-1">
          <span class="text-xs uppercase tracking-wide text-green-400">총 할인율</span>
          <span class="text-sm font-medium text-green-400">${(n*100).toFixed(1)}%</span>
        </div>
        <div class="text-2xs text-gray-300">
          ₩${Math.round(o).toLocaleString()} 할인되었습니다
        </div>
      </div>
    `}}function ae(t,e){if(e){const n=parseInt(e.textContent.match(/\d+/)||0);e.textContent=`��️  ${t} items in cart`,n!==t&&e.setAttribute("data-changed","true")}}const b={lightningSaleInterval:null,lightningSaleTimeout:null};function se(t,e){const n=Math.random()*Ut;b.lightningSaleTimeout=setTimeout(()=>{b.lightningSaleInterval=setInterval(()=>{ie(t,e)},wt)},n)}function ie(t,e){const n=Math.floor(Math.random()*t.length),a=t[n];a.q>0&&!a.onSale&&(a.val=Math.round(a.originalVal*(100-et)/100),a.onSale=!0,alert(`⚡번개세일! ${a.name} 이(가) ${et}% 할인 중입니다!`),e())}function oe(){b.lightningSaleTimeout&&(clearTimeout(b.lightningSaleTimeout),b.lightningSaleTimeout=null),b.lightningSaleInterval&&(clearInterval(b.lightningSaleInterval),b.lightningSaleInterval=null)}function le(t){t.forEach(e=>{e.onSale&&(e.val=e.originalVal,e.onSale=!1)})}function re(t,e){return{startLightningSaleTimer:()=>se(t,e),stopLightningSaleTimer:oe,resetLightningSale:()=>le(t)}}function ce(t){const{productList:e,cartDisp:n,cartState:a}=t;if(n.children.length===0)return dt(),{bonusPoints:0,pointsDetail:[]};const o=Math.floor(a.total/At),s=[];let i=0;o>0&&(i=o,s.push(`기본: ${o}p`)),st()&&o>0&&(i=o*ct,s.push("화요일 2배"));const l=ue(e,n);i+=l.points,s.push(...l.details);const r=de(a.itemCount);return i+=r.points,s.push(...r.details),{bonusPoints:i,pointsDetail:s}}function ue(t,e){let n=0;const a=[],{hasKeyboard:o,hasMouse:s,hasMonitorArm:i}=pe(t,e);return o&&s&&(n+=p.KEYBOARD_MOUSE_SET,a.push(`키보드+마우스 세트 +${p.KEYBOARD_MOUSE_SET}p`)),o&&s&&i&&(n+=p.FULL_SET,a.push(`풀세트 구매 +${p.FULL_SET}p`)),{points:n,details:a}}function de(t){let e=0;const n=[];return t>=m.LARGE?(e+=p.BULK_PURCHASE.LARGE,n.push(`대량구매(${m.LARGE}개+) +${p.BULK_PURCHASE.LARGE}p`)):t>=m.MEDIUM?(e+=p.BULK_PURCHASE.MEDIUM,n.push(`대량구매(${m.MEDIUM}개+) +${p.BULK_PURCHASE.MEDIUM}p`)):t>=m.SMALL&&(e+=p.BULK_PURCHASE.SMALL,n.push(`대량구매(${m.SMALL}개+) +${p.BULK_PURCHASE.SMALL}p`)),{points:e,details:n}}function pe(t,e){let n=!1,a=!1,o=!1;const s=e.children;for(const i of s){const l=E(t,i.id);l&&(l.id===M?n=!0:l.id===A?a=!0:l.id===U&&(o=!0))}return{hasKeyboard:n,hasMouse:a,hasMonitorArm:o}}function ge(t,e){const n=document.getElementById("loyalty-points");n&&(n.innerHTML=fe(t,e),n.style.display="block")}function dt(){const t=document.getElementById("loyalty-points");t&&(t.style.display="none")}function fe(t,e){return t===0?"적립 포인트: 0p":`
    <div>적립 포인트: <span class="font-bold">${t}p</span></div>
    ${e.length>0?`<div class="text-2xs opacity-70 mt-1">${e.join(", ")}</div>`:""}
  `}function Se(t,e,n){return{calculateBonusPoints:()=>ce({productList:t,cartDisp:e,cartState:n}),updateLoyaltyPointsDisplay:ge,hideLoyaltyPoints:dt}}function me(t){const{productList:e,cartDisp:n,handleCalculateCartStuff:a}=t,o=n.children;for(let s=0;s<o.length;s++){const i=o[s].id,l=E(e,i);l&&ve(o[s],l)}a()}function ve(t,e){const n=t.querySelector(".text-lg"),a=t.querySelector("h3");!n||!a||(e.onSale&&e.suggestSale?he(n,a,e):e.onSale?ye(n,a,e):e.suggestSale?be(n,a,e):xe(n,a,e))}function he(t,e,n){t.innerHTML=`
    <span class="line-through text-gray-400">
      ₩${n.originalVal.toLocaleString()}
    </span>
    <span class="text-purple-600">
      ₩${n.val.toLocaleString()}
    </span>
  `,e.textContent=`⚡💝${n.name}`}function ye(t,e,n){t.innerHTML=`
    <span class="line-through text-gray-400">
      ₩${n.originalVal.toLocaleString()}
    </span>
    <span class="text-red-500">
      ₩${n.val.toLocaleString()}
    </span>
  `,e.textContent=`⚡${n.name}`}function be(t,e,n){t.innerHTML=`
    <span class="line-through text-gray-400">
      ₩${n.originalVal.toLocaleString()}
    </span>
    <span class="text-blue-500">
      ₩${n.val.toLocaleString()}
    </span>
  `,e.textContent=`💝${n.name}`}function xe(t,e,n){t.textContent=`₩${n.val.toLocaleString()}`,e.textContent=n.name}function Le(t,e,n){return{updatePricesInCart:()=>me({productList:t,cartDisp:e,handleCalculateCartStuff:n})}}const x={suggestSaleInterval:null,suggestSaleTimeout:null};function Pe(t,e,n){const a=Math.random()*Ot;x.suggestSaleTimeout=setTimeout(()=>{x.suggestSaleInterval=setInterval(()=>{Te(t,e,n)},kt)},a)}function Te(t,e,n){if(e.selectedProduct){const a=Ee(t,e.selectedProduct);a&&(alert(`�� ${a.name} 은(는) 어떠세요? 지금 구매하시면 ${at}% 추가 할인!`),Ce(a),n())}}function Ee(t,e){return t.find(n=>n.id!==e&&n.q>0&&!n.suggestSale)}function Ce(t){t.val=Math.round(t.val*(100-at)/100),t.suggestSale=!0}function De(){x.suggestSaleTimeout&&(clearTimeout(x.suggestSaleTimeout),x.suggestSaleTimeout=null),x.suggestSaleInterval&&(clearInterval(x.suggestSaleInterval),x.suggestSaleInterval=null)}function Ie(t){t.forEach(e=>{e.suggestSale&&(e.val=e.originalVal,e.suggestSale=!1)})}function $e(t,e,n){return{startSuggestSaleTimer:()=>Pe(t,e,n),stopSuggestSaleTimer:De,resetSuggestSale:()=>Ie(t)}}function Me({item:t}){const{id:e,name:n,val:a,originalVal:o,onSale:s,suggestSale:i}=t;return`
    <div
      id="${e}"
      class="grid grid-cols-[80px_1fr_auto] gap-5 py-5 border-b border-gray-100 first:pt-0 last:border-b-0 last:pb-0"
    >
      <div class="w-20 h-20 bg-gradient-black relative overflow-hidden">
        <div
          class="absolute top-1/2 left-1/2 w-[60%] h-[60%] bg-white/10 -translate-x-1/2 -translate-y-1/2 rotate-45"
        ></div>
      </div>
      <div>
        <h3 class="text-base font-normal mb-1 tracking-tight">
          ${Ft({onSale:s,suggestSale:i})}${n}
        </h3>
        <p class="text-xs text-gray-500 mb-0.5 tracking-wide">PRODUCT</p>
        <p class="text-xs text-black mb-3">
          ${lt({onSale:s,suggestSale:i,originalVal:o,val:a})}
        </p>
        <div class="flex items-center gap-4">
          <button
            class="quantity-change w-6 h-6 border border-black bg-white text-sm flex items-center justify-center transition-all hover:bg-black hover:text-white"
            data-product-id="${e}"
            data-change="-1"
          >
            -
          </button>
          <span class="quantity-number text-sm font-normal min-w-[20px] text-center tabular-nums"
            >1</span
          >
          <button
            class="quantity-change w-6 h-6 border border-black bg-white text-sm flex items-center justify-center transition-all hover:bg-black hover:text-white"
            data-product-id="${e}"
            data-change="1"
          >
            +
          </button>
        </div>
      </div>
      <div class="text-right">
        <div class="text-lg mb-2 tracking-tight tabular-nums">
          ${lt({onSale:s,suggestSale:i,originalVal:o,val:a})}
        </div>
        <a
          class="remove-item text-2xs text-gray-500 uppercase tracking-wider cursor-pointer transition-colors border-b border-transparent hover:text-black hover:border-black"
          data-product-id="${e}"
          >Remove</a
        >
      </div>
    </div>
  `}function lt({onSale:t,suggestSale:e,originalVal:n,val:a}){return t||e?`
        <span class="line-through text-gray-400">₩${n}</span>
        <span class="${Yt({onSale:t,suggestSale:e})}">₩${a}</span>
      `:`₩${a}`}function Ae({item:t}){const{id:e,name:n,val:a,q:o,onSale:s,suggestSale:i}=t,l=[];s&&l.push("⚡SALE"),i&&l.push("💝SUGGEST");const r=o===0?"품절":`${o}개`,d=l.length>0?` (${l.join(", ")})`:"";return`
    <option value="${e}" ${o===0?"disabled":""}>
      ${n}${d} - ${a}원 - ${r}
    </option>
  `}const h=[{id:M,name:"버그 없애는 키보드",val:1e4,originalVal:1e4,q:50,onSale:!1,suggestSale:!1},{id:A,name:"생산성 폭발 마우스",val:2e4,originalVal:2e4,q:30,onSale:!1,suggestSale:!1},{id:U,name:"거북목 탈출 모니터암",val:3e4,originalVal:3e4,q:20,onSale:!1,suggestSale:!1},{id:z,name:"에러 방지 노트북 파우치",val:15e3,originalVal:15e3,q:0,onSale:!1,suggestSale:!1},{id:q,name:"코딩할 때 듣는 Lo-Fi 스피커",val:25e3,originalVal:25e3,q:10,onSale:!1,suggestSale:!1}];function Ue(t){return t.filter(e=>e.q<Mt)}function we(t){return t.map(e=>e.q===0?`${e.name}: 품절`:`${e.name}: 재고 부족 (${e.q}개 남음)`).join(`
`)}function H(t,e,n){const a=t.find(s=>s.id===e);if(!a)return!1;const o=a.q+n;return o<0?!1:(a.q=o,!0)}function Oe(t,e){const{productList:n,cartDisp:a,sel:o,handleCalculateCartStuff:s,stateActions:i,NewItem:l}=e,r=o.value,d=n.some(g=>g.id===r);if(!r||!d)return;const c=E(n,r);if(c&&c.q>0){const g=document.getElementById(c.id);if(g){const C=g.querySelector(".quantity-number"),y=parseInt(C.textContent)+1;y<=c.q+parseInt(C.textContent)?(C.textContent=y,H(n,c.id,-1)):alert("재고가 부족합니다.")}else a.innerHTML+=l({item:c}),H(n,c.id,-1);s(),i.updateSelectedProduct(r)}}function ke(t,e){const{productList:n,handleCalculateCartStuff:a}=e,o=t.target,s=o.dataset.productId,i=document.getElementById(s),l=E(n,s);if(!l||!i)return;const r=parseInt(o.dataset.change),d=i.querySelector(".quantity-number"),c=parseInt(d.textContent),g=c+r;g>0&&g<=l.q+c?(d.textContent=g,H(n,s,-r)):g<=0?(H(n,s,c),i.remove()):alert("재고가 부족합니다."),a()}function Re(t,e){const{productList:n,handleCalculateCartStuff:a}=e,s=t.target.dataset.productId,i=document.getElementById(s);if(!E(n,s)||!i)return;const r=i.querySelector(".quantity-number"),d=parseInt(r.textContent);H(n,s,d),i.remove(),a()}function Be(t,e){const n=t.target;n.classList.contains("quantity-change")?ke(t,e):n.classList.contains("remove-item")&&Re(t,e)}function _e(t,e){const{stateActions:n}=e;n.toggleManualOverlay()}function qe(t,e){const{stateActions:n}=e;t.target.classList.contains("fixed")&&n.toggleManualOverlay()}function He(t,e){const{onUpdateSelectOptions:n}=e;n()}function Ne(t){const{addBtn:e,cartDisp:n,manualToggle:a,manualOverlay:o,sel:s}=t;e.addEventListener("click",i=>Oe(i,t)),n.addEventListener("click",i=>Be(i,t)),a.addEventListener("click",i=>_e(i,t)),o.addEventListener("click",i=>qe(i,t)),s.addEventListener("change",i=>He(i,t))}const _={selectedProduct:null},Z={updateSelectedProduct(t){_.selectedProduct=t},clearSelectedProduct(){_.selectedProduct=null},reset(){_.selectedProduct=null}},pt=[];function Ge(t){pt.push(t)}function Ke(){pt.forEach(t=>t(_))}function tt(t,...e){t(...e),Ke()}const V={updateSelectedProduct:t=>tt(Z.updateSelectedProduct,t),clearSelectedProduct:()=>tt(Z.clearSelectedProduct),reset:()=>tt(Z.reset)},f={appliedDiscounts:[],totalDiscountRate:0,savedAmount:0},k={updateDiscounts(t){f.appliedDiscounts=t.appliedDiscounts||f.appliedDiscounts,f.totalDiscountRate=t.totalDiscountRate||f.totalDiscountRate,f.savedAmount=t.savedAmount||f.savedAmount},updateAppliedDiscounts(t){f.appliedDiscounts=t},updateTotalDiscountRate(t){f.totalDiscountRate=t},updateSavedAmount(t){f.savedAmount=t},reset(){f.appliedDiscounts=[],f.totalDiscountRate=0,f.savedAmount=0}},gt=[];function je(t){gt.push(t)}function Ve(){gt.forEach(t=>t(f))}function R(t,...e){t(...e),Ve()}const D={updateDiscounts:t=>R(k.updateDiscounts,t),updateAppliedDiscounts:t=>R(k.updateAppliedDiscounts,t),updateTotalDiscountRate:t=>R(k.updateTotalDiscountRate,t),updateSavedAmount:t=>R(k.updateSavedAmount,t),reset:()=>R(k.reset)},u={basePoints:0,bonusPoints:0,totalPoints:0,pointsDetail:[]},I={updatePoints(t){u.basePoints=t.basePoints||u.basePoints,u.bonusPoints=t.bonusPoints||u.bonusPoints,u.totalPoints=t.totalPoints||u.totalPoints,u.pointsDetail=t.pointsDetail||u.pointsDetail},updateBasePoints(t){u.basePoints=t},updateBonusPoints(t){u.bonusPoints=t},updateTotalPoints(t){u.totalPoints=t},updatePointsDetail(t){u.pointsDetail=t},reset(){u.basePoints=0,u.bonusPoints=0,u.totalPoints=0,u.pointsDetail=[]}},ft=[];function Fe(t){ft.push(t)}function Ye(){ft.forEach(t=>t(u))}function $(t,...e){t(...e),Ye()}const L={updatePoints:t=>$(I.updatePoints,t),updateBasePoints:t=>$(I.updateBasePoints,t),updateBonusPoints:t=>$(I.updateBonusPoints,t),updateTotalPoints:t=>$(I.updateTotalPoints,t),updatePointsDetail:t=>$(I.updatePointsDetail,t),reset:()=>$(I.reset)},P={isManualOpen:!1},F={toggleManualOverlay(){P.isManualOpen=!P.isManualOpen},openManualOverlay(){P.isManualOpen=!0},closeManualOverlay(){P.isManualOpen=!1},reset(){P.isManualOpen=!1}},St=[];function ze(t){St.push(t)}function Qe(){St.forEach(t=>t(P))}function Y(t,...e){t(...e),Qe()}const B={toggleManualOverlay:()=>Y(F.toggleManualOverlay),openManualOverlay:()=>Y(F.openManualOverlay),closeManualOverlay:()=>Y(F.closeManualOverlay),reset:()=>Y(F.reset)},nt={updateCartTotal:O.updateTotal,updateCartItemCount:O.updateItemCount,updateCartItems:O.updateItems,resetCart:O.reset,updateSelectedProduct:V.updateSelectedProduct,clearSelectedProduct:V.clearSelectedProduct,resetProduct:V.reset,toggleManualOverlay:B.toggleManualOverlay,openManualOverlay:B.openManualOverlay,closeManualOverlay:B.closeManualOverlay,resetUI:B.reset,updateDiscounts:D.updateDiscounts,updateAppliedDiscounts:D.updateAppliedDiscounts,updateTotalDiscountRate:D.updateTotalDiscountRate,updateSavedAmount:D.updateSavedAmount,resetDiscounts:D.reset,updatePoints:L.updatePoints,updateBasePoints:L.updateBasePoints,updateBonusPoints:L.updateBonusPoints,updateTotalPoints:L.updateTotalPoints,updatePointsDetail:L.updatePointsDetail,resetPoints:L.reset,resetAll(){O.reset(),V.reset(),B.reset(),D.reset(),L.reset()}};function We(t){Gt(t),ze(t),Ge(t),je(t),Fe(t)}function Xe(){const t=Je(),e=tn(t),n=en(t,e);nn(n),an(),sn(e),on(t,e)}function Je(){const t=document.getElementById("app");if(!t)throw new Error("Root element #app not found");const e={sel:t.querySelector("#product-select"),addBtn:t.querySelector("#add-to-cart"),stockInfo:t.querySelector("#stock-status"),cartDisp:t.querySelector("#cart-items"),sum:t.querySelector("#cart-total"),manualToggle:t.querySelector("#manual-toggle"),manualOverlay:t.querySelector("#manual-overlay")};return Ze(e),e}function Ze(t){const e={sel:"#product-select",addBtn:"#add-to-cart",cartDisp:"#cart-items",sum:"#cart-total"};for(const[n,a]of Object.entries(e))if(!t[n])throw new Error(`Required element ${a} not found`)}function tn(t){return{cartCalculation:{calculateCart:()=>zt({productList:h,cartDisp:t.cartDisp,summaryDetails:document.getElementById("summary-details"),totalDiv:t.sum.querySelector(".text-2xl"),discountInfoDiv:document.getElementById("discount-info"),itemCountElement:document.getElementById("item-count")})},pointsCalculation:Se(h,t.cartDisp,S),priceUpdate:Le(h,t.cartDisp,()=>it(t,services)),lightningSale:re(h,()=>rt(t,services)),suggestSale:$e(h,_,()=>rt(t,services))}}function en(t,e){return{productList:h,cartDisp:t.cartDisp,sel:t.sel,addBtn:t.addBtn,manualToggle:t.manualToggle,manualOverlay:t.manualOverlay,stockInfo:t.stockInfo,handleCalculateCartStuff:()=>it(t,e),stateActions:nt,NewItem:un(),ProductOption:vt(),onUpdateSelectOptions:()=>mt(t)}}function nn(t){Ne(t)}function an(){We(()=>{rn()})}function sn(t){t.lightningSale.startLightningSaleTimer(),t.suggestSale.startSuggestSaleTimer()}function on(t,e){mt(t),it(t,e)}function it(t,e){const n=e.cartCalculation.calculateCart();nt.updateCartTotal(n.totalAmt),nt.updateCartItemCount(n.itemCnt),cn(t),ln(t,e)}function ln(t,e){const{bonusPoints:n,pointsDetail:a}=e.pointsCalculation.calculateBonusPoints();t.cartDisp.children.length>0&&e.pointsCalculation.updateLoyaltyPointsDisplay(n,a)}function rn(){const t=document.getElementById("item-count");t&&(t.textContent=`��️  ${S.itemCount} items in cart`);const e=document.querySelector("#manual-overlay"),n=e?.querySelector("#manual-column");e&&n&&(P.isManualOpen?(e.classList.remove("hidden"),n.classList.remove("translate-x-full")):(e.classList.add("hidden"),n.classList.add("translate-x-full")))}function cn(t){const e=Ue(h);t.stockInfo.textContent=we(e)}function rt(t,e){e.priceUpdate.updatePricesInCart()}function mt(t){t.sel.innerHTML="";const e=h.reduce((a,o)=>a+o.q,0),n=h.map(a=>vt()({item:a})).join("");t.sel.innerHTML=n,e<100?t.sel.style.borderColor="orange":t.sel.style.borderColor=""}function un(){return Me}function vt(){return Ae}function dn(){try{const t=document.getElementById("app");t.innerHTML=jt(),Xe()}catch(t){console.error("Error initializing app:",t)}}dn();
