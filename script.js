// M.B. INTERIO — App logic
const IMG = (id, w=800) => `https://images.unsplash.com/${id}?q=80&w=${w}&auto=format&fit=crop`;

const PRODUCTS = [
  {id:'p1', name:'Aria L-Shape Modular Kitchen', cat:'kitchens', price:185000, mrp:229000, rating:4.9, img:IMG('photo-1556911220-bff31c812dba'), desc:'Acrylic gloss, tall pantry, soft-close Blum-style hardware, quartz counter.'},
  {id:'p2', name:'Isola Island Kitchen with Breakfast Counter', cat:'kitchens', price:325000, mrp:389000, rating:4.8, img:IMG('photo-1600489000022-c2086d79f9d4'), desc:'Island + hob + chimney ready, waterfall quartz, profile lighting.'},
  {id:'p3', name:'Nordic Parallel Kitchen in Sage', cat:'kitchens', price:149000, mrp:179000, rating:4.7, img:IMG('photo-1631679706909-1844bbd07221'), desc:'Compact parallel layout ideal for Kolkata apartments, easy-clean laminate.'},
  {id:'p4', name:'Heritage U-Shape Wooden Kitchen', cat:'kitchens', price:265000, mrp:310000, rating:4.9, img:IMG('photo-1600607687939-ce8a6c25118c'), desc:'Warm veneer + fluted glass shutters, brass handles, spice pull-outs.'},
  {id:'p5', name:'Royale King Bed - Sheesham Wood', cat:'furniture', price:48999, mrp:64999, rating:4.8, img:IMG('photo-1505693416388-ac5ce068fe85'), desc:'Solid sheesham, box storage, melamine matte finish, 5-yr warranty.'},
  {id:'p6', name:'Calcutta 6-Seater Dining Table', cat:'furniture', price:52999, mrp:69999, rating:4.9, img:IMG('photo-1617806118233-18e1de247200'), desc:'Teak-finish top, cushioned chairs, scratch-resistant, seats 6 comfortably.'},
  {id:'p7', name:'CloudRest 3-Seater Fabric Sofa', cat:'furniture', price:39999, mrp:52999, rating:4.7, img:IMG('photo-1555041469-a586c61ea9bc'), desc:'Deep seats, solid wood frame, washable covers in 12 colours.'},
  {id:'p8', name:'SlideLine 4-Door Wardrobe with Loft', cat:'furniture', price:44999, mrp:58999, rating:4.8, img:IMG('photo-1595428774223-ef52624120d2'), desc:'Sliding shutters, mirror, locker + LED, anti-rust fittings.'},
  {id:'p9', name:'Oslo Study / TV Unit Combo', cat:'furniture', price:18999, mrp:24999, rating:4.6, img:IMG('photo-1594026112284-02bb6f3352fe'), desc:'Engineered wood with veneer edge, cable management, wall-mount safe.'},
  {id:'p10', name:'Windor 90cm Auto-Clean Chimney', cat:'appliances', price:24990, mrp:32990, rating:4.7, img:IMG('photo-1574269909862-7e1d70bb8078'), desc:'1400 m3/h suction, filterless auto-clean, touch + motion sensor.'},
  {id:'p11', name:'FlamePro 4-Burner Hob + Glass Top', cat:'appliances', price:16990, mrp:21990, rating:4.6, img:IMG('photo-1556911220-e15b29be8c8f'), desc:'Toughened glass, brass burners, 5-yr glass warranty, LPG/PNG.'},
  {id:'p12', name:'BakeMaster 60L Built-in Oven + Microwave', cat:'appliances', price:42990, mrp:54990, rating:4.8, img:IMG('photo-1571175443880-49e1d25b2bc5'), desc:'Convection + grill, child lock, Kolkata service support.'},
  {id:'p13', name:'Cozy Queen Bed with Cushioned Headboard', cat:'furniture', price:35999, mrp:45999, rating:4.7, img:IMG('photo-1540518614846-7eded433c457'), desc:'Upholstered headboard, hydraulic storage, termite-treated.'},
  {id:'p14', name:'Verde 4-Seater Round Dining Set', cat:'furniture', price:32999, mrp:42999, rating:4.6, img:IMG('photo-1577140917170-285929fb55b7'), desc:'Space-saver round table for flats, solid legs, easy-clean top.'},
  {id:'p15', name:'AirPure 60cm Curved Glass Chimney', cat:'appliances', price:18990, mrp:25990, rating:4.5, img:IMG('photo-1584267385494-9fdd9a71ad75'), desc:'1200 m3/h, oil collector, low noise 58dB, baiti filter.'},
  {id:'p16', name:'Lounge Accent Chair - Mustard Boucle', cat:'furniture', price:12999, mrp:17999, rating:4.7, img:IMG('photo-1493663284031-b7e3aefcae8e'), desc:'Solid wood legs, boucle fabric, perfect reading corner.'},
  {id:'p17', name:'Serene Linen Bedroom Set', cat:'furniture', price:54999, mrp:71999, rating:4.8, img:IMG('photo-1567016432779-094069958ea5'), desc:'Bed + side tables + wardrobe in warm oak, soft-close drawers.'},
  {id:'p18', name:'Atelier Writing Desk in Walnut', cat:'furniture', price:15999, mrp:21999, rating:4.6, img:IMG('photo-1524758631624-e2822e304c36'), desc:'Solid wood work desk, home-office ready, cable tray included.'},
  {id:'p19', name:'Majlis 8-Seater Dining Ensemble', cat:'furniture', price:74999, mrp:94999, rating:4.9, img:IMG('photo-1519710164239-da123dc03ef4'), desc:'Grand family dining, cushioned chairs, stain-guard polish.'},
  {id:'p20', name:'Deco Curved Sofa in Ivory', cat:'furniture', price:46999, mrp:61999, rating:4.8, img:IMG('photo-1616486338812-3dadae4b4ace'), desc:'Statement curved sofa, feather-blend cushions, teak legs.'},
  {id:'p21', name:'Opal Dresser with Mirror', cat:'furniture', price:21999, mrp:28999, rating:4.6, img:IMG('photo-1595526114035-0d45ed16cfbf'), desc:'Bedroom dresser + full mirror, velvet-lined jewellery drawer.'},
  {id:'p22', name:'Galleria Lounge Corner Set', cat:'furniture', price:59999, mrp:78999, rating:4.7, img:IMG('photo-1600121848594-d8644e57abab'), desc:'Premium living-room set, solid frame, 5-year warranty.'},
  {id:'p23', name:'Ivory Chef Parallel Kitchen', cat:'kitchens', price:169000, mrp:199000, rating:4.7, img:IMG('photo-1600585152220-90363fe7e115'), desc:'Bright parallel kitchen, tall storage, easy-clean shutters.'},
  {id:'p24', name:'Sizzle & Steam Cooking Range Kitchen', cat:'kitchens', price:239000, mrp:279000, rating:4.8, img:IMG('photo-1556909212-d5b604d0c90d'), desc:'Heavy-duty cooking zone, chimney ducting + hob included.'},
  {id:'p25', name:'Reading Corner Armchair', cat:'furniture', price:14499, mrp:19999, rating:4.7, img:IMG('photo-1586023492125-27b2c045efd7'), desc:'Sculpted armchair, premium fabric, perfect with floor lamp.'},
];

const GALLERY = [
  {img:IMG('photo-1556911220-bff31c812dba'), tag:'kitchen', cap:'Acrylic L-shape, Salt Lake'},
  {img:IMG('photo-1600489000022-c2086d79f9d4'), tag:'kitchen', cap:'Island kitchen, New Town'},
  {img:IMG('photo-1600210492486-724fe5c67fb0'), tag:'living', cap:'Living + dining, Ballygunge'},
  {img:IMG('photo-1505693416388-ac5ce068fe85'), tag:'bedroom', cap:'Sheesham bed, Behala'},
  {img:IMG('photo-1617806118233-18e1de247200'), tag:'living', cap:'6-seater dining, Howrah'},
  {img:IMG('photo-1555041469-a586c61ea9bc'), tag:'living', cap:'Fabric sofa, Park Street'},
  {img:IMG('photo-1618220179428-22790b461013'), tag:'bedroom', cap:'Wardrobe wall, Dum Dum'},
  {img:IMG('photo-1600607687939-ce8a6c25118c'), tag:'kitchen', cap:'Veneer U-shape, Rajarhat'},
  {img:IMG('photo-1618221195710-dd6b41faaea6'), tag:'living', cap:'Deco living room, Alipore'},
  {img:IMG('photo-1600585152220-90363fe7e115'), tag:'kitchen', cap:'Parallel kitchen, Garia'},
  {img:IMG('photo-1567016432779-094069958ea5'), tag:'bedroom', cap:'Linen bedroom, Jadavpur'},
  {img:IMG('photo-1524758631624-e2822e304c36'), tag:'living', cap:'Study corner, Sector V'},
  {img:IMG('photo-1616486338812-3dadae4b4ace'), tag:'living', cap:'Curved sofa lounge, Ballygunge'},
  {img:IMG('photo-1556909212-d5b604d0c90d'), tag:'kitchen', cap:'Cooking-range kitchen, Kasba'},
];

let cart = JSON.parse(localStorage.getItem('mb_cart')||'[]');
let wish = JSON.parse(localStorage.getItem('mb_wish')||'[]');
let activeCat='all', searchQ='', sortBy='pop';

const $ = s=>document.querySelector(s);
const $$ = s=>[...document.querySelectorAll(s)];
const fmt = n=>'₹'+Number(n).toLocaleString('en-IN');
// graceful fallback so a broken photo never shows an empty box
const FALLBACK_IMG = IMG('photo-1555041469-a586c61ea9bc');
document.addEventListener('error', e=>{
  const t=e.target;
  if(t && t.tagName==='IMG' && !t.dataset.fbk){ t.dataset.fbk='1'; t.src=FALLBACK_IMG; }
}, true);
// logo: knock the baked-in black background out to transparent, so the red
// seal always sits on a clean white badge (works for any logo file, no edits)
const __wlCache={};
function whitenLogo(img){
  if(!img||img.dataset.wl) return; img.dataset.wl='1';
  const src=img.getAttribute('src'); if(!src||src.startsWith('data:')) return;
  if(__wlCache[src]){ img.src=__wlCache[src]; return; }
  const tmp=new Image();
  tmp.onload=()=>{
    try{
      const c=document.createElement('canvas'); c.width=tmp.naturalWidth; c.height=tmp.naturalHeight;
      const x=c.getContext('2d'); x.drawImage(tmp,0,0);
      const d=x.getImageData(0,0,c.width,c.height); const p=d.data;
      for(let i=0;i<p.length;i+=4){
        const m=Math.max(p[i],p[i+1],p[i+2]);
        if(m<40) p[i+3]=0;
        else if(m<95) p[i+3]=Math.round(255*(m-40)/55);
      }
      x.putImageData(d,0,0);
      const out=c.toDataURL('image/png'); __wlCache[src]=out; img.src=out;
    }catch(err){ /* e.g. file:// CORS — keep original logo */ }
  };
  tmp.src=src;
}

function toast(msg){ const w=$('#toasts'); const d=document.createElement('div'); d.className='toast'; d.innerHTML=`<span>✓</span><span>${msg}</span>`; w.appendChild(d); setTimeout(()=>{d.style.opacity='0'; setTimeout(()=>d.remove(),300)},2600); }
function save(){ localStorage.setItem('mb_cart',JSON.stringify(cart)); localStorage.setItem('mb_wish',JSON.stringify(wish)); updateCartUI(); }

function renderProducts(){
  const grid=$('#prodGrid'); if(!grid) return;
  let list=[...PRODUCTS];
  if(activeCat!=='all') list=list.filter(p=>p.cat===activeCat);
  if(searchQ) list=list.filter(p=>(p.name+p.desc).toLowerCase().includes(searchQ));
  if(sortBy==='low') list.sort((a,b)=>a.price-b.price);
  if(sortBy==='high') list.sort((a,b)=>b.price-a.price);
  if(sortBy==='rate') list.sort((a,b)=>b.rating-a.rating);
  grid.innerHTML=list.map(p=>`
    <article class="clay-sm prod reveal visible">
      <div class="pimg"><img loading="lazy" src="${p.img}" alt="${p.name}">
        <span class="tag">-${Math.round((1-p.price/p.mrp)*100)}%</span>
        <button class="wish ${wish.includes(p.id)?'active':''}" onclick="toggleWish('${p.id}')">♥</button>
      </div>
      <div class="cat">${p.cat}</div><h4>${p.name}</h4>
      <div class="row"><span class="stars">${'★'.repeat(Math.round(p.rating))} ${p.rating}</span></div>
      <div class="row"><div class="pr"><b>${fmt(p.price)}</b><s>${fmt(p.mrp)}</s></div></div>
      <div class="actions">
        <button class="mini-btn add" onclick="addCart('${p.id}')">Add to Cart</button>
        <button class="mini-btn" onclick="quickView('${p.id}')">👁 Quick View</button>
      </div>
    </article>`).join('') || `<p style="grid-column:span 4;text-align:center;padding:2rem" class="clay-sm">No products found. Try another search.</p>`;
}
window.toggleWish=id=>{ wish=wish.includes(id)?wish.filter(x=>x!==id):[...wish,id]; save(); renderProducts(); toast(wish.includes(id)?'Added to wishlist ♥':'Removed from wishlist'); };
window.addCart=(id,qty=1)=>{ const f=cart.find(c=>c.id===id); if(f) f.qty+=qty; else cart.push({id,qty}); save(); toast('Added to cart 🛒'); openCart(); };
window.quickView=id=>{
  const p=PRODUCTS.find(x=>x.id===id); if(!p) return;
  $('#qvBody').innerHTML=`<div class="cols">
    <div><img class="main" src="${p.img}" alt=""><div style="display:flex;gap:.6rem;margin-top:.7rem">
      <span class="pill">✓ 10-yr warranty</span><span class="pill">✓ Free install</span></div></div>
    <div><span class="pill">${p.cat}</span><h2 style="margin:.7rem 0">${p.name}</h2>
    <div class="stars">${'★'.repeat(5)} ${p.rating} · 212 reviews</div>
    <p style="color:#5A6380;margin:.8rem 0">${p.desc}</p>
    <div style="display:flex;gap:.7rem;align-items:baseline;margin:.6rem 0"><b style="font-size:1.8rem;color:var(--brand)">${fmt(p.price)}</b><s style="color:#888">${fmt(p.mrp)}</s><span class="pill">EMI from ${fmt(Math.round(p.price/12))}/mo</span></div>
    <div style="display:flex;gap:.6rem;flex-wrap:wrap;margin-top:1rem">
      <button class="btn btn-brand" onclick="addCart('${p.id}');closeModal('qv')">Add to Cart 🛒</button>
      <button class="btn" onclick="buyNow('${p.id}')">Buy on WhatsApp</button>
    </div>
    <ul style="margin-top:1rem;color:#5A6380;font-size:.9rem;line-height:1.8"><li>✓ Free site measurement in Kolkata</li><li>✓ 45-day delivery promise</li><li>✓ Easy EMI + cards + UPI</li></ul>
    </div></div>`;
  openModal('qv');
};
window.buyNow=id=>{ const p=PRODUCTS.find(x=>x.id===id); const url=`https://wa.me/919830978677?text=${encodeURIComponent('Hi M.B. Interio! I want to buy: '+p.name+' ('+fmt(p.price)+')')}`; window.open(url,'_blank'); };

function updateCartUI(){
  const n=cart.reduce((a,c)=>a+c.qty,0);
  $$('.cart-count').forEach(e=>{ e.textContent=n; e.classList.remove('bump'); void e.offsetWidth; e.classList.add('bump'); });
  const box=$('#cartItems'); if(!box) return;
  if(!cart.length){ box.innerHTML=`<div style="text-align:center;padding:2rem" class="clay-sm"><div style="font-size:2.5rem">🛒</div><b>Your cart is empty</b><p style="color:#666;font-size:.9rem">Add kitchens, beds, chimneys & more</p></div>`; }
  else box.innerHTML=cart.map(c=>{ const p=PRODUCTS.find(x=>x.id===c.id); return `<div class="citem">
    <img src="${p.img}"><div style="flex:1"><b style="font-size:.88rem">${p.name}</b><div style="font-size:.85rem;color:var(--brand);font-weight:800">${fmt(p.price)} × ${c.qty}</div>
    <div class="qty" style="margin-top:.3rem"><button onclick="chQty('${c.id}',-1)">−</button><b>${c.qty}</b><button onclick="chQty('${c.id}',1)">+</button>
    <button onclick="rmItem('${c.id}')" style="margin-left:auto;background:none;border:0;cursor:pointer">🗑</button></div></div></div>`}).join('');
  const total=cart.reduce((a,c)=>{const p=PRODUCTS.find(x=>x.id===c.id); return a+p.price*c.qty},0);
  $('#cartTotal').textContent=fmt(total);
  $('#cartMrp').textContent=fmt(cart.reduce((a,c)=>{const p=PRODUCTS.find(x=>x.id===c.id); return a+p.mrp*c.qty},0));
}
window.chQty=(id,d)=>{ const it=cart.find(c=>c.id===id); if(!it) return; it.qty+=d; if(it.qty<=0) cart=cart.filter(c=>c.id!==id); save(); };
window.rmItem=id=>{ cart=cart.filter(c=>c.id!==id); save(); };
function openCart(){ $('#cartDrawer').classList.add('open'); $('#overlay').classList.add('show'); }
function closeCart(){ $('#cartDrawer').classList.remove('open'); $('#overlay').classList.remove('show'); }
function openModal(id){ $('#'+id).classList.add('show'); $('#overlay').classList.add('show'); }
window.closeModal=id=>{ $('#'+id).classList.remove('show'); if(!$('#cartDrawer').classList.contains('open')) $('#overlay').classList.remove('show'); };

// estimator
function calcEst(){
  const lenA=+($('#lenA')?.value||10), lenB=+($('#lenB')?.value||8);
  const finish=document.querySelector('.opt.sel[data-finish]')?.dataset.finish||'laminate';
  const mult={laminate:1850, acrylic:2650, veneer:3150, pu:3450}[finish];
  const counter=+($('#counterSel')?.value||0);
  let acc=0; $$('.acc:checked').forEach(c=>acc+=+c.value);
  const base=(lenA+lenB)*mult;
  const total=Math.round(base+counter+acc);
  $('#estOut').textContent=fmt(total);
  $('#estBreak').innerHTML=`<li>📐 Kitchen size: ${lenA} + ${lenB} ft = ${lenA+lenB} ft × ${fmt(mult)}</li><li>🪨 Countertop: ${counter?fmt(counter):'included basic'}</li><li>✨ Accessories: ${fmt(acc)}</li><li>🏷️ Includes GST + installation in Kolkata</li>`;
  $('#estEmi').textContent='EMI from '+fmt(Math.round(total/24))+'/mo × 24';
}
function calcEmi(){
  const P=+($('#emiPrice')?.value||150000), down=+($('#emiDown')?.value||30000), n=+($('#emiMonths')?.value||24), r=1.1/100/12*13.2;
  // simple flat 13.2% reducing
  const principal=Math.max(P-down,0); const rate=0.011; const emi=Math.round(principal*rate*Math.pow(1+rate,n)/(Math.pow(1+rate,n)-1)||0);
  if($('#emiOut')) $('#emiOut').textContent=fmt(emi||0)+' / month';
}

// reviews
let revIdx=0;
function revGo(i){ const t=$('#revTrack'); if(!t) return; const n=t.children.length; revIdx=(i+n)%n; t.style.transform=`translateX(-${revIdx*100}%)`; }
let revTimer=setInterval(()=>revGo(revIdx+1),5000);
function pauseRevs(){ clearInterval(revTimer); }
function resumeRevs(){ clearInterval(revTimer); revTimer=setInterval(()=>revGo(revIdx+1),5000); }

// gallery
function renderGal(f='all'){ const g=$('#galGrid'); if(!g) return; g.innerHTML=GALLERY.filter(x=>f==='all'||x.tag===f).map((x,i)=>`<div class="clay-sm gal" onclick="openLB('${x.img}')"><img loading="lazy" src="${x.img}" alt="${x.cap}"><div style="padding:.6rem .3rem;font-weight:800;font-size:.85rem">📍 ${x.cap}</div></div>`).join(''); }
window.openLB=src=>{ $('#lbImg').src=src; $('#lightbox').classList.add('show'); };

// init
document.addEventListener('DOMContentLoaded',()=>{
  renderProducts(); renderGal(); updateCartUI();
  $$('.mark-frame img').forEach(whitenLogo);

  // nav scroll
  const hdr=$('#navbar'); const topBtn=$('#topBtn');
  addEventListener('scroll',()=>{ hdr.classList.toggle('scrolled',scrollY>20); topBtn.style.display=scrollY>600?'grid':'none';
    const pb=$('#progressBar'); if(pb){ const h=document.documentElement; const max=h.scrollHeight-h.clientHeight; pb.style.width=(max>0?(h.scrollTop/max*100):0)+'%'; }
    // scrollspy
    const secs=$$('section[id]'); let cur='home'; secs.forEach(s=>{ if(scrollY>=s.offsetTop-160) cur=s.id; });
    $$('.nav-links a').forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+cur));
  });

  $('#hamburger').onclick=()=>$('#mmenu').classList.toggle('show');
  $$('#mmenu a').forEach(a=>a.onclick=()=>$('#mmenu').classList.remove('show'));

  // shop filters
  $$('.chip').forEach(c=>c.onclick=()=>{ $$('.chip').forEach(x=>x.classList.remove('active')); c.classList.add('active'); activeCat=c.dataset.cat; renderProducts(); });
  $('#searchInput').oninput=e=>{ searchQ=e.target.value.toLowerCase(); renderProducts(); };
  $('#sortSel').onchange=e=>{ sortBy=e.target.value; renderProducts(); };
  $$('.tab[data-kit]').forEach(t=>t.onclick=()=>{
    $$('.tab[data-kit]').forEach(x=>x.classList.remove('active')); t.classList.add('active');
    const f=t.dataset.kit; $$('#kitGrid > div').forEach(k=>k.style.display=(f==='all'||k.dataset.k===f)?'':'none');
  });
  $$('.chip2[data-gal]').forEach(b=>b.onclick=()=>{ $$('.chip2[data-gal]').forEach(x=>x.classList.remove('active')); b.classList.add('active'); renderGal(b.dataset.gal); });
  $$('.opt[data-finish]').forEach(o=>o.onclick=()=>{ $$('.opt[data-finish]').forEach(x=>x.classList.remove('sel')); o.classList.add('sel'); calcEst(); });
  ['lenA','lenB','counterSel'].forEach(id=>$('#'+id)?.addEventListener('input',calcEst));
  $$('.acc').forEach(c=>c.onchange=calcEst); calcEst();
  ['emiPrice','emiDown','emiMonths'].forEach(id=>$('#'+id)?.addEventListener('input',calcEmi)); calcEmi();
  $('#lenAVal') && ($('#lenA').oninput=e=>{ $('#lenAVal').textContent=e.target.value+' ft'; calcEst(); });
  $('#lenBVal') && ($('#lenB').oninput=e=>{ $('#lenBVal').textContent=e.target.value+' ft'; calcEst(); });

  // faq
  $$('.faq-q').forEach(q=>q.onclick=()=>q.parentElement.classList.toggle('open'));

  // counters + staggered entrances (delay clears after reveal so hovers stay snappy)
  const io=new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('visible');
    setTimeout(()=>{ e.target.style.transitionDelay='0ms'; },950);
    if(e.target.classList.contains('stat')){ const el=e.target.querySelector('.num'); const end=+el.dataset.count; let s=0; const t=setInterval(()=>{ s+=Math.ceil(end/40); if(s>=end){s=end;clearInterval(t)} el.innerHTML=s.toLocaleString('en-IN')+'<em>+</em>'; },40); io.unobserve(e.target); }
  }}),{threshold:.15});
  $$('.reveal,.stat').forEach(el=>{
    const sibs=[...el.parentElement.children].filter(c=>c.classList&&(c.classList.contains('reveal')||c.classList.contains('stat')));
    el.style.transitionDelay=(Math.min(sibs.indexOf(el),6)*80)+'ms';
    io.observe(el);
  });

  // forms
  const bind=(id,msg)=>{ const f=$('#'+id); if(!f) return; f.onsubmit=e=>{ e.preventDefault(); if(!f.checkValidity()){ toast('Please fill all required fields'); return; } toast(msg); f.reset(); }; };
  bind('quoteForm','Quote request sent! We will call you in 30 mins ✓');
  bind('contactForm','Message sent! Visit us in Kolkata soon ✓');
  bind('bookForm','Showroom visit booked! Check SMS ✓');
  bind('newsForm','Subscribed! Welcome to MB Interio family ✓');

  const rf=$('#revForm'); rf && (rf.onsubmit=e=>{ e.preventDefault();
    const name=$('#rName').value||'Guest', txt=$('#rText').value, st=+($('#rStar').value||5);
    const d=document.createElement('div'); d.className='clay-sm rev';
    d.innerHTML=`<div class="stars">${'★'.repeat(st)}${'☆'.repeat(5-st)}</div><p style="margin:.6rem 0">“${txt}”</p><div class="who"><img src="${IMG('photo-1535713875002-d1d0cf377fde',100)}"><div><b>${name}</b><br><small style="color:#777">Just now · Kolkata</small></div></div>`;
    $('#revTrack').appendChild(d); toast('Review published. Thank you! ⭐'); rf.reset();
  });

  $('#overlay').onclick=()=>{ closeCart(); $$('.modal.show').forEach(m=>m.classList.remove('show')); $('#overlay').classList.remove('show'); };
  $('#checkoutBtn').onclick=()=>{ if(!cart.length){toast('Cart is empty');return;} const total=$('#cartTotal').textContent;
    const msg=cart.map(c=>{const p=PRODUCTS.find(x=>x.id===c.id); return `• ${p.name} x${c.qty} - ${fmt(p.price*c.qty)}`}).join('\n');
    window.open(`https://wa.me/919830978677?text=${encodeURIComponent('Hi M.B. Interio! I want to order:\n'+msg+'\nTotal: '+total)}`,'_blank'); };

  // date min
  const dt=$('#bookDate'); if(dt) dt.min=new Date().toISOString().split('T')[0];

  // cursor spotlight follows the mouse across cards
  document.addEventListener('mousemove',e=>{
    const card=e.target.closest?.('.clay,.clay-sm'); if(!card) return;
    const r=card.getBoundingClientRect();
    card.style.setProperty('--mx',(e.clientX-r.left)+'px');
    card.style.setProperty('--my',(e.clientY-r.top)+'px');
  },{passive:true});

  // reviews pause while being read
  const rs=document.querySelector('.rev-slider');
  if(rs){ rs.addEventListener('mouseenter',pauseRevs); rs.addEventListener('mouseleave',resumeRevs); }

  // live offer countdown to month-end
  const ot=$('#offerTimer');
  if(ot){
    const tick=()=>{
      const now=new Date(); const end=new Date(now.getFullYear(),now.getMonth()+1,0,23,59,59);
      let s=Math.max(0,Math.floor((end-now)/1000));
      const d=Math.floor(s/86400); s%=86400; const h=Math.floor(s/3600); s%=3600;
      const m=Math.floor(s/60); const sec=s%60;
      ot.textContent=`${d}d ${h}h ${m}m ${sec}s`;
    };
    tick(); setInterval(tick,1000);
  }
});
