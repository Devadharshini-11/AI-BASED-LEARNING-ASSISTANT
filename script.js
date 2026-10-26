const $=i=>document.getElementById(i);
const S=[["Math","🧮",["Algebra","Geometry"]],["Physics","⚛️",["Motion","Energy"]],["Chemistry","🧪",["Basics","Reactions"]],["Biology","🧬",["Cells","Human body"]],["English","📖",["Grammar","Vocabulary"]],["Hindi","अ",["वर्णमाला","शब्द"]],["Tamil","த",["எழுத்து","இலக்கியம்"]],["History & Civics","🏛️",["Freedom","Civics"]],["Geography","🗺️",["World","India"]],["Computer Sci","💻",["Basics","Coding"]],["GK","💡",["World","India"]],["Reasoning","🧩",["Series","Logic"]]];
// [subject, topic, level (1 easy, 2 harder), question, options, answer]
const Q=[
[0,0,1,"x + 5 = 12. x = ?",["5","7","17","6"],1],[0,0,2,"2x − 3 = 9. x = ?",["3","6","9","12"],1],[0,1,1,"Angles of a triangle add up to…",["90°","180°","270°","360°"],1],[0,1,2,"Area of a circle, radius 7 (π = 22/7)?",["154","44","22","49"],0],
[1,0,1,"SI unit of force?",["Joule","Newton","Watt","Pascal"],1],[1,0,2,"Newton’s third law says…",["Every action has an equal and opposite reaction","F = ma","Objects at rest stay at rest","Energy is conserved"],0],[1,1,1,"A moving body has which energy?",["Potential","Kinetic","Thermal","Nuclear"],1],[1,1,2,"Energy cannot be created or destroyed. This is…",["Conservation of energy","Ohm’s law","Hooke’s law","Boyle’s law"],0],
[2,0,1,"Formula of water?",["CO₂","H₂O","O₂","NaCl"],1],[2,0,2,"pH of a neutral solution?",["0","7","14","1"],1],[2,1,1,"Rusting of iron is…",["Oxidation","Reduction","Evaporation","Sublimation"],0],[2,1,2,"Zinc + dilute HCl releases…",["O₂","H₂","CO₂","N₂"],1],
[3,0,1,"Powerhouse of the cell?",["Nucleus","Ribosome","Mitochondria","Golgi body"],2],[3,0,2,"Which organelle holds the DNA?",["Nucleus","Vacuole","Lysosome","Cell wall"],0],[3,1,1,"Chambers in the human heart?",["2","3","4","5"],2],[3,1,2,"Which blood cells fight infection?",["Red","White","Platelets","Plasma"],1],
[4,0,1,"She ___ to school every day.",["go","goes","going","gone"],1],[4,0,2,"Neither of them ___ ready.",["are","were","is","be"],2],[4,1,1,"Synonym of ‘happy’?",["sad","joyful","angry","tired"],1],[4,1,2,"Antonym of ‘ancient’?",["old","modern","rare","huge"],1],
[5,0,1,"‘अ’ के बाद कौन सा स्वर आता है?",["आ","इ","उ","ए"],0],[5,0,2,"हिंदी में मानक स्वर कितने हैं?",["10","11","13","52"],1],[5,1,1,"‘सूरज’ का पर्यायवाची?",["चाँद","सूर्य","तारा","बादल"],1],[5,1,2,"‘दिन’ का विलोम शब्द?",["रात","सुबह","शाम","दोपहर"],0],
[6,0,1,"தமிழில் உயிரெழுத்துகள் எத்தனை?",["10","12","18","216"],1],[6,0,2,"தமிழில் மெய்யெழுத்துகள் எத்தனை?",["12","18","216","247"],1],[6,1,1,"திருக்குறளை இயற்றியவர் யார்?",["திருவள்ளுவர்","கம்பர்","பாரதியார்","இளங்கோவடிகள்"],0],[6,1,2,"திருக்குறளில் எத்தனை அதிகாரங்கள்?",["133","100","108","150"],0],
[7,0,1,"India became independent in…",["1945","1947","1950","1952"],1],[7,0,2,"Who wrote the Indian national anthem?",["Tagore","Gandhi","Bose","Nehru"],0],[7,1,1,"Voting age in India?",["16","18","21","25"],1],[7,1,2,"The Constitution came into effect in…",["1947","1949","1950","1952"],2],
[8,0,1,"Largest continent?",["Africa","Asia","Europe","Australia"],1],[8,0,2,"Longest river in the world (by common measure)?",["Amazon","Nile","Yangtze","Mississippi"],1],[8,1,1,"Longest river flowing in India?",["Ganga","Yamuna","Godavari","Brahmaputra"],0],[8,1,2,"Highest peak entirely within India?",["Kangchenjunga","Everest","K2","Nanda Devi"],0],
[9,0,1,"CPU stands for…",["Central Processing Unit","Computer Personal Unit","Central Program Utility","Core Processing Unit"],0],[9,0,2,"Decimal 5 in binary?",["101","110","011","111"],0],[9,1,1,"Which language styles web pages?",["Python","CSS","SQL","C"],1],[9,1,2,"Which Python function shows text on screen?",["echo","print()","cout","write.out"],1],
[10,0,1,"Capital of Japan?",["Seoul","Tokyo","Beijing","Bangkok"],1],[10,0,2,"Currency of the United Kingdom?",["Euro","Dollar","Pound","Yen"],2],[10,1,1,"National animal of India?",["Lion","Tiger","Elephant","Leopard"],1],[10,1,2,"Who is the ‘Missile Man of India’?",["A.P.J. Abdul Kalam","Homi Bhabha","Vikram Sarabhai","C.V. Raman"],0],
[11,0,1,"2, 4, 8, 16, ?",["24","32","30","20"],1],[11,0,2,"1, 4, 9, 16, ?",["20","24","25","36"],2],[11,1,1,"All cats are animals. Tom is a cat. So Tom is…",["an animal","a plant","a dog","none"],0],[11,1,2,"If A > B and B > C, then…",["A > C","C > A","A = C","B > A"],0]];

let st={xp:0,quizzes:0,secs:0,streak:0,last:"",t:{},d:{},sd:{},h:{},hist:[],goals:[{t:"Finish one practice quiz",d:0},{t:"Review one weak topic",d:0}],mode:"teen",theme:"auto",v:"home"};
try{Object.assign(st,JSON.parse(localStorage.getItem("brightpath")||"{}"))}catch(e){}
const save=()=>{try{localStorage.setItem("brightpath",JSON.stringify(st))}catch(e){}};
const D=n=>{const d=new Date(Date.now()-n*864e5);return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0")};
const esc=s=>s.replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const col=p=>p>=70?"var(--pri)":p>=50?"var(--sun)":"var(--cor)";
const tp=(s,t)=>{const v=st.t[s+"."+t];return v&&v[0]?Math.round(v[1]/v[0]*100):null};
const sp=s=>{let a=0,c=0;[0,1].forEach(t=>{const v=st.t[s+"."+t];if(v){a+=v[0];c+=v[1]}});return a?Math.round(c/a*100):null};
const all=()=>{const r=[];S.forEach((s,i)=>[0,1].forEach(t=>r.push({s:i,t,p:tp(i,t),n:s[0]+" · "+s[2][t]})));return r};
const overall=()=>{const v=S.map((_,i)=>sp(i)).filter(x=>x!==null);return v.length?Math.round(v.reduce((a,b)=>a+b)/v.length):0};
const gauge=(p,fg,bg,tx)=>`<svg viewBox="0 0 200 120" style="max-width:240px;margin:auto"><path d="M20 100A80 80 0 0 1 180 100" fill="none" stroke="${bg}" stroke-width="16" stroke-linecap="round"/><path d="M20 100A80 80 0 0 1 180 100" fill="none" stroke="${fg}" stroke-width="16" stroke-linecap="round" stroke-dasharray="${p*2.513} 251.3"/><text x="100" y="94" text-anchor="middle" font-size="34" font-weight="800" fill="${tx}" font-family="Bricolage Grotesque,system-ui">${p}%</text></svg>`;

function insight(){const s=S.map((x,i)=>({n:x[0],p:sp(i)})).filter(x=>x.p!==null).sort((a,b)=>b.p-a.p);
 if(s.length<2)return"Take a few quizzes and I’ll point out your strengths and the subjects that need attention.";
 const a=s[0],b=s[s.length-1];return`Strongest: <b>${a.n}</b> (${a.p}%). Needs attention: <b>${b.n}</b> (${b.p}%). Ten minutes a day on ${b.n} is the quickest way to raise your overall score.`}
function slots(){const N=[["🌅","Morning","5am–12"],["☀️","Afternoon","12–5pm"],["🌆","Evening","5–9pm"],["🌙","Night","9pm–5am"]];let best=-1,bp=-1;
 N.forEach((_,i)=>{const v=st.h[i];if(v&&v[0]>=5&&v[1]/v[0]>bp){bp=v[1]/v[0];best=i}});
 return`<div class="sl">`+N.map((n,i)=>{const v=st.h[i];return`<div class="${i===best?"best":""}">${n[0]}<b>${n[1]}</b><small>${n[2]}</small><small>${v&&v[0]?Math.round(v[1]/v[0]*100)+"% right":"no data"}</small></div>`}).join("")+`</div><div class="mut" style="margin-top:8px">${best<0?"Practise at different times of day and I’ll find when you score best.":"You score best in the "+N[best][1].toLowerCase()+". Plan hard topics then."}</div>`}
function cal(){const n=new Date(),y=n.getFullYear(),m=n.getMonth(),f=new Date(y,m,1).getDay(),dm=new Date(y,m+1,0).getDate();
 let h=`<div class="mut" style="margin-bottom:6px">${n.toLocaleString("en",{month:"long",year:"numeric"})}</div><div class="cal">`+"SMTWTFS".split("").map(c=>`<b>${c}</b>`).join("")+"<i></i>".repeat(f);
 for(let d=1;d<=dm;d++){const k=y+"-"+String(m+1).padStart(2,"0")+"-"+String(d).padStart(2,"0");h+=`<span class="${d===n.getDate()?"td":""} ${st.d[k]?"dn":""}">${d}</span>`}
 return h+`</div><div class="mut" style="margin-top:6px">Shaded days are days you practised.</div>`}
const goals=()=>st.goals.map((g,i)=>`<div class="gr"><label><input type="checkbox" ${g.d?"checked":""} onchange="tg(${i})"> <span class="${g.d?"dn2":""}">${g.t}</span></label><button class="ib" onclick="dg(${i})" aria-label="Delete goal">✕</button></div>`).join("")||`<div class="mut">No goals yet. Add one below.</div>`;
const tg=i=>{st.goals[i].d=!st.goals[i].d;save();render()},dg=i=>{st.goals.splice(i,1);save();render()};
function ag(){const v=$("gi").value.trim();if(!v)return;st.goals.push({t:esc(v),d:0});save();render()}

function home(){const o=overall(),weak=all().filter(x=>x.p!==null&&x.p<70).sort((a,b)=>a.p-b.p);
 return`<div class="g">
<section class="card dark"><h2>Mastery summary</h2><div class="flx">${gauge(o,"#f5b83d","#2a4560","#fff")}<div class="mut">${insight()}</div></div></section>
<section class="card"><h2>Best time to study</h2>${slots()}</section>
<section class="card"><h2>Weak topics</h2>${weak.length?weak.slice(0,5).map(x=>`<div class="row"><span>${x.n} <span class="mut">${x.p}%</span></span><button class="imp" onclick="qTopic(${x.s},${x.t})">Improve</button></div>`).join(""):`<div class="mut">${Object.keys(st.t).length?"No weak topics right now. 🎉":"Take a quiz and weak topics will appear here."}</div>`}
 <div class="acts" style="margin-top:10px"><button class="btn" onclick="qWeak()">Practise weak topics</button></div></section>
<section class="card"><h2>Quick actions</h2><div class="acts"><button class="btn" onclick="qMixed()">✏️ Mixed quiz</button><button class="btn sun" onclick="qExam()">⏱ Exam mode</button><button class="btn alt" onclick="go('learn')">🃏 Flashcards</button><button class="btn alt" onclick="go('learn')">🧭 Learning path</button></div></section>
<section class="card"><h2>Today’s goals</h2>${goals()}<div class="gi"><input id="gi" placeholder="Add a goal" maxlength="60"><button class="btn" onclick="ag()">Add</button></div></section>
<section class="card"><h2>Schedule</h2>${cal()}</section>
<section class="card full"><h2>Practice history</h2>${st.hist.length?st.hist.slice(-6).reverse().map(h=>`<div class="row"><span>${h.n}</span><b>${h.s}/${h.k}</b><span class="mut">${h.w}</span></div>`).join(""):`<div class="mut">Your finished quizzes will be listed here.</div>`}
<div class="acts" style="margin-top:12px"><button class="btn alt" onclick="demo()">Load sample data</button><button class="btn alt" onclick="resetAll()">Reset progress</button></div></section></div>`}

function practice(){const A=all(),m=A.filter(x=>x.p>=70).length,pr=A.filter(x=>x.p!==null&&x.p<70).length,n=A.length-m-pr,w=x=>x/A.length*100;
 return`<div class="card" style="margin-bottom:14px"><h2>Quiz performance</h2><div class="seg"><i style="width:${w(m)}%;background:var(--pri)"></i><i style="width:${w(pr)}%;background:var(--sun)"></i></div>
<div class="leg"><span><b style="background:var(--pri)"></b>Mastered ${m}</span><span><b style="background:var(--sun)"></b>In progress ${pr}</span><span><b style="background:var(--line)"></b>Not started ${n}</span></div>
<div class="acts" style="margin-top:12px"><button class="btn" onclick="qMixed()">✏️ Mixed quiz</button><button class="btn alt" onclick="qWeak()">🎯 Weak topics</button><button class="btn sun" onclick="qExam()">⏱ Exam mode · 10 Qs · 6 min</button></div></div>
<div class="tiles">`+S.map((s,i)=>{const p=sp(i);return`<div class="tile"><div class="e">${s[1]}</div><b>${s[0]}</b><div class="bar"><i style="width:${p||0}%;background:${p===null?"transparent":col(p)}"></i></div><div class="mut">${p===null?"Not started":p+"% mastery"}</div><button class="btn" style="width:100%;margin:8px 0 4px" onclick="qSubj(${i})">Start quiz</button>${s[2].map((t,j)=>`<button class="chip" onclick="qTopic(${i},${j})">${t}${tp(i,j)!==null?" "+tp(i,j)+"%":""}</button>`).join("")}</div>`}).join("")+`</div>`}

let fc={s:0,i:0,f:0};
function learn(){const dk=Q.filter(q=>q[0]===fc.s),q=dk[fc.i];
 const P=all().map(x=>({...x,r:x.p===null?70:x.p<70?x.p-100:x.p+100})).sort((a,b)=>a.r-b.r);
 return`<div class="g"><section class="card"><h2>Flashcards</h2><select onchange="fc={s:+this.value,i:0,f:0};render()" aria-label="Subject">${S.map((s,i)=>`<option value="${i}" ${i===fc.s?"selected":""}>${s[1]} ${s[0]}</option>`).join("")}</select>
<div class="fc" onclick="fc.f=!fc.f;render()" role="button" tabindex="0">${fc.f?"✅ "+q[4][q[5]]:q[3]}</div><div class="mut">Tap the card to flip · ${fc.i+1} of ${dk.length}</div>
<div class="acts" style="margin-top:10px"><button class="btn alt" onclick="fc.i=(fc.i+dk.length-1)%dk.length;fc.f=0;render()">Previous</button><button class="btn" onclick="fc.i=(fc.i+1)%dk.length;fc.f=0;render()">Next card</button></div></section>
<section class="card"><h2>Your learning path</h2><div class="mut">Weak topics first, then new ones, then revision.</div>`+P.map((x,i)=>`<div class="row"><span>${i+1}. ${x.n} <span class="mut">${x.p===null?"new":x.p+"%"}</span></span><button class="${x.p!==null&&x.p<70?"imp":"btn alt"}" style="padding:6px 12px;font-size:13px" onclick="qTopic(${x.s},${x.t})">${x.p===null?"Start":x.p<70?"Improve":"Review"}</button></div>`).join("")+`</section></div>`}

function heat(){const ds=[6,5,4,3,2,1,0].map(D);let h=`<div class="hm"><i></i>`;
 ds.forEach(d=>h+=`<b>${"SMTWTFS"[new Date(d+"T12:00").getDay()]}</b>`);
 S.forEach((s,i)=>{h+=`<span>${s[1]} ${s[0]}</span>`;ds.forEach(d=>{const v=st.sd[d+"|"+i];h+=v?`<u style="background:rgba(13,148,136,${.2+.8*v[1]/v[0]})" title="${Math.round(v[1]/v[0]*100)}%"></u>`:`<u></u>`})});
 return h+`</div><div class="leg" style="margin-top:8px"><span>Pale = needs support</span><span>Deep teal = advanced</span><span>Grey = no practice</span></div>`}
const bars=()=>`<svg viewBox="0 0 300 130" role="img" aria-label="Mastery by subject">`+S.map((s,i)=>{const p=sp(i)||0,x=10+i*24;return`<rect x="${x}" y="${105-p*.95}" width="16" height="${p*.95}" rx="4" fill="${col(p)}"/><text x="${x+8}" y="122" font-size="11" text-anchor="middle" fill="var(--tx)">${s[1]}</text>`}).join("")+`</svg>`;
function fore(){const L=overall();if(!L)return`<div class="mut">Complete a few quizzes to see your forecast.</div>`;
 const X=d=>20+(d+7)*7.3,Y=v=>10+(100-v)*1.0;let h=[0,50,100].map(v=>`<line x1="20" x2="290" y1="${Y(v)}" y2="${Y(v)}" stroke="var(--line)"/><text x="0" y="${Y(v)+4}" font-size="10" fill="var(--mut)">${v}</text>`).join("");
 const hp=[];for(let i=6;i>=0;i--){const v=st.d[D(i)];if(v&&v[0])hp.push([X(-i),Y(Math.round(v[1]/v[0]*100))])}
 if(hp.length)h+=`<polyline points="${hp.map(p=>p.join(",")).join(" ")}" fill="none" stroke="var(--tx)" stroke-width="2.5"/>`+hp.map(p=>`<circle cx="${p[0]}" cy="${p[1]}" r="3.5" fill="var(--tx)"/>`).join("");
 const ln=(f,c)=>{const p=[];for(let d=0;d<=30;d+=5)p.push(X(d)+","+Y(f(d)));return`<polyline points="${p.join(" ")}" fill="none" stroke="${c}" stroke-width="2.5" stroke-dasharray="5 4"/>`};
 h+=ln(d=>Math.min(100,L+d*.9),"var(--pri)")+ln(d=>Math.max(0,L-d*.35),"var(--cor)")+`<line x1="${X(0)}" x2="${X(0)}" y1="8" y2="112" stroke="var(--line)"/><text x="${X(0)-4}" y="124" font-size="10" text-anchor="end" fill="var(--mut)">Past 7 days</text><text x="${X(0)+4}" y="124" font-size="10" fill="var(--mut)">Next 30 days</text>`;
 return`<svg viewBox="0 0 300 130" role="img" aria-label="Score forecast">${h}</svg><div class="leg"><span><b style="background:var(--pri)"></b>With daily practice: about ${Math.min(100,Math.round(L+27))}%</span><span><b style="background:var(--cor)"></b>Without practice: about ${Math.max(0,Math.round(L-10))}%</span></div><div class="mut">A simple estimate from your current mastery, not a guarantee.</div>`}
function act(){let h="";for(let i=27;i>=0;i--){const v=st.d[D(i)],a=v?v[0]:0;h+=`<i style="height:${6+Math.min(a,30)*2.4}px;background:${a?"var(--pri)":"var(--line)"}"></i>`}return`<div class="tl">${h}</div><div class="mut" style="margin-top:6px">Questions answered in the last 28 days</div>`}
const insights=()=>`<div class="g"><section class="card full dark"><h2>Smart insight</h2><div>${insight()}</div></section>
<section class="card full"><h2>Mastery heat map · subjects by day</h2>${heat()}</section>
<section class="card"><h2>Average mastery by subject</h2>${bars()}</section><section class="card"><h2>Activity timeline</h2>${act()}</section>
<section class="card full"><h2>Growth trajectory</h2>${fore()}</section></div>`;

const V=[["home","🏠","Home"],["practice","✏️","Practice"],["learn","📚","Learn"],["insights","📈","Insights"]],TT={home:"Your learning hub",practice:"Practice",learn:"Learn",insights:"Insights"};
function render(){const lv=Math.floor(st.xp/100)+1;
 $("nav").innerHTML=`<div class="br">Brightpath</div>`+V.map(v=>`<button class="nb ${v[0]===st.v?"on":""}" onclick="go('${v[0]}')"><span>${v[1]}</span>${v[2]}</button>`).join("");
 const g={kid:"Let’s play and learn!",teen:"Level up your grades.",adult:"Keep your mind sharp."}[st.mode];
 $("main").innerHTML=`<div class="top"><div><h1>${TT[st.v]}</h1><div class="mut">${g}</div></div><span class="sp"></span><span class="pill">Lv ${lv}<div class="xp"><i style="width:${st.xp%100}%"></i></div></span><span class="pill">⭐ ${st.xp}</span><span class="pill">🔥 ${st.streak}</span>
 <select id="mode" aria-label="Learner type"><option value="kid">Kids (6–12)</option><option value="teen">Students (13–18)</option><option value="adult">Adults</option></select><button class="ib" id="th" aria-label="Switch theme">🌓</button></div>`+({home,practice,learn,insights})[st.v]();
 $("mode").value=st.mode;$("mode").onchange=e=>{st.mode=e.target.value;save();render()};
 $("th").onclick=()=>{const dk=document.documentElement.dataset.theme?document.documentElement.dataset.theme==="dark":matchMedia("(prefers-color-scheme:dark)").matches;st.theme=dk?"light":"dark";save();theme()}}
function theme(){if(st.theme==="light"||st.theme==="dark")document.documentElement.dataset.theme=st.theme;else delete document.documentElement.dataset.theme}
const go=v=>{st.v=v;save();render();scrollTo(0,0)};

let cur=null;
function start(f,title,n=5,lim=0){let l=Q.filter(f).sort(()=>Math.random()-.5);
 if(st.mode==="kid")l.sort((a,b)=>a[2]-b[2]);else if(st.mode==="adult")l.sort((a,b)=>b[2]-a[2]);
 l=l.slice(0,n);if(!l.length)return;cur={l,i:0,ok:0,ans:0,t0:Date.now(),title,lim};show();
 if(lim){const fm=r=>Math.floor(r/60)+":"+String(r%60).padStart(2,"0"),tk=()=>{const r=cur.lim-Math.round((Date.now()-cur.t0)/1e3);if($("tm"))$("tm").textContent="⏱ "+fm(Math.max(r,0));if(r<=0)fin()};tk();cur.iv=setInterval(tk,500)}}
const qSubj=s=>start(q=>q[0]===s,S[s][0]+" quiz"),qTopic=(s,t)=>start(q=>q[0]===s&&q[1]===t,S[s][2][t]+" practice"),qMixed=()=>start(()=>1,"Mixed quiz"),qExam=()=>start(()=>1,"Exam mode",10,360);
function qWeak(){const A=all(),tr=A.filter(x=>x.p!==null).sort((a,b)=>a.p-b.p);let w=tr.filter(x=>x.p<70);if(!w.length)w=A.filter(x=>x.p===null);if(!w.length)w=tr.slice(0,3);
 const k=new Set(w.map(x=>x.s+"."+x.t));start(q=>k.has(q[0]+"."+q[1]),"Personalised practice")}
function show(){const q=cur.l[cur.i];cur.done=false;
 $("qb").innerHTML=`<div class="row" style="border:0;padding:0"><b>${cur.title}</b><span>${cur.lim?`<span class="pill" id="tm"></span> `:""}<button class="ib" onclick="closeQ()" aria-label="Close">✕</button></span></div>
 <div class="bar"><i style="width:${cur.i/cur.l.length*100}%;background:var(--pri)"></i></div><div class="mut">${S[q[0]][1]} ${S[q[0]][0]} · ${S[q[0]][2][q[1]]} · ${cur.i+1}/${cur.l.length}</div><div class="q">${q[3]}</div>`+
 q[4].map((o,i)=>`<button class="opt" onclick="ans(${i},this)">${o}</button>`).join("")+`<div id="fb"></div>`;$("qz").classList.add("on")}
function ans(i,el){if(cur.done)return;cur.done=true;cur.ans++;const q=cur.l[cur.i],k=q[0]+"."+q[1],ok=i===q[5];
 const v=st.t[k]||[0,0];v[0]++;if(ok){v[1]++;cur.ok++;st.xp+=10}st.t[k]=v;
 const d=D(0),x=st.d[d]||[0,0],y=st.sd[d+"|"+q[0]]||[0,0],hr=new Date().getHours(),b=hr>=5&&hr<12?0:hr>=12&&hr<17?1:hr>=17&&hr<21?2:3,z=st.h[b]||[0,0];
 x[0]++;y[0]++;z[0]++;if(ok){x[1]++;y[1]++;z[1]++}st.d[d]=x;st.sd[d+"|"+q[0]]=y;st.h[b]=z;
 document.querySelectorAll(".opt").forEach((o,j)=>{o.disabled=true;if(j===q[5])o.classList.add("ok")});if(!ok)el.classList.add("no");
 const last=cur.i===cur.l.length-1;
 $("fb").innerHTML=`<p style="font-weight:800">${ok?"Correct! +10 XP 🎉":"Not quite. Answer: "+q[4][q[5]]}</p><button class="btn" onclick="${last?"fin()":"nxt()"}">${last?"See results":"Next question"}</button>`;save()}
const nxt=()=>{cur.i++;show()};
function fin(){clearInterval(cur.iv);const n=cur.ans;if(!n){closeQ();return}
 st.quizzes++;st.secs+=Math.round((Date.now()-cur.t0)/1e3);const t=D(0);if(st.last!==t){st.streak=st.last===D(1)?st.streak+1:1;st.last=t}
 st.hist.push({n:cur.title,s:cur.ok,k:n,w:new Date().toLocaleDateString("en",{day:"numeric",month:"short"})});st.hist=st.hist.slice(-20);save();
 const p=Math.round(cur.ok/n*100);
 $("qb").innerHTML=`<div style="text-align:center"><h2>Final score report</h2>${gauge(p,"var(--pri)","var(--line)","var(--tx)")}<p class="mut">${cur.ok} correct out of ${n} answered · +${cur.ok*10} XP</p><p>${p>=80?"Excellent work! 🏆":p>=50?"Good effort. Practise the weak spots to improve. 👏":"Every expert starts here. Try personalised practice next. 💪"}</p>
 <div class="acts" style="justify-content:center"><button class="btn" onclick="closeQ();qWeak()">Practise weak topics</button><button class="btn alt" onclick="closeQ()">Back to dashboard</button></div></div>`;cur=null;render()}
function closeQ(){if(cur)clearInterval(cur.iv);cur=null;$("qz").classList.remove("on");render()}
function demo(){const P=[78,60,70,55,91,73,66,68,52,80,60,64,58,84,62,70,75,48,66,72,54,50,69,77];st.t={};st.d={};st.sd={};let k=0;
 S.forEach((s,i)=>s[2].forEach((_,j)=>st.t[i+"."+j]=[20,Math.round(.2*P[k++])]));
 for(let n=0;n<14;n++)for(let i=0;i<12;i++)if((i+n)%2===0){const d=D(n),c=Math.round(6*P[i*2]/100),x=st.d[d]||[0,0];x[0]+=6;x[1]+=c;st.d[d]=x;st.sd[d+"|"+i]=[6,c]}
 st.h={0:[40,24],1:[30,18],2:[50,40],3:[20,10]};st.xp=1250;st.quizzes=37;st.secs=31320;st.streak=7;st.last=D(0);st.hist=[{n:"Mixed quiz",s:4,k:5,w:"today"},{n:"Algebra practice",s:5,k:5,w:"yesterday"}];save();render()}
function resetAll(){if(confirm("Reset all your progress?")){st={...st,xp:0,quizzes:0,secs:0,streak:0,last:"",t:{},d:{},sd:{},h:{},hist:[]};save();render()}}
theme();render();
