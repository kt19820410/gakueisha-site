(function(){
  var page=document.body.getAttribute('data-page')||'top';
  var nav=[['hp.html','HP制作','var(--hp)','hp'],['ast.html','AST（時間割作成）','var(--ast)','ast'],['spp.html','SPP（学習計画作成）','var(--spp)','spp'],['consult.html','経営コンサル','var(--con)','con']];
  var hd=document.getElementById('hd');
  if(hd){
    hd.outerHTML='<header class="top"><div class="wrap"><a class="logo" href="index.html"><span class="mk">学</span><span><b>株式会社学栄社</b><small>学習塾のための4つのサービス</small></span></a>'+
    '<button class="menu-btn" type="button" aria-label="メニュー" aria-expanded="false"><span></span></button>'+
    '<nav class="gnav">'+nav.map(function(n){return '<a href="'+n[0]+'"'+(n[3]===page?' aria-current="page"':'')+'><i style="background:'+n[2]+'"></i>'+n[1]+'</a>'}).join('')+
    '<a class="cta" href="#contact">お問い合わせ</a></nav></div></header>';
  }
  var ct=document.getElementById('ct');
  if(ct){
    var subj=ct.getAttribute('data-subject')||'お問い合わせ';
    ct.outerHTML='<section class="contact" id="contact"><div class="wrap center"><p class="eyebrow">Contact</p><h2 class="h2">'+(ct.getAttribute('data-title')||'まずはお気軽にご相談ください')+'</h2>'+
    '<p class="lead">'+(ct.getAttribute('data-lead')||'塾名と、気になっていることを一言送っていただくだけで大丈夫です。')+'</p>'+
    '<div class="cbox" style="text-align:left"><div><p class="k">LINE</p><p class="addr">@899xhfgq</p><p class="hint">株式会社学栄社 問合せ窓口</p><p class="hint">いちばん早くお返事できます</p><a class="btn btn-line" href="https://line.me/R/ti/p/%40899xhfgq" target="_blank" rel="noopener">LINEで友だち追加</a></div>'+
    '<div><p class="k">MAIL</p><p class="addr" id="mail">gakueisha.co@gmail.com</p><p class="hint">件名に「'+subj+'」と入れてお送りください</p><a class="btn btn-ghost" style="background:none;color:#fff;border-color:rgba(255,255,255,.4)" href="mailto:gakueisha.co@gmail.com?subject='+encodeURIComponent(subj)+'">メールを送る</a><button class="copy" type="button" id="copy-mail">アドレスをコピー</button></div></div></div></section>';
  }
  var ft=document.getElementById('ft');
  if(ft){
    ft.outerHTML='<footer><div class="wrap"><b>株式会社学栄社</b><nav><a href="index.html">トップ</a>'+nav.map(function(n){return '<a href="'+n[0]+'">'+n[1]+'</a>'}).join('')+'</nav><span>表示価格はすべて税抜です。</span><span>© Gakueisha Inc.</span></div></footer>';
  }
  if(['hp','ast','spp','con'].indexOf(page)>-1){
    var fb=document.createElement('div');fb.className='fixbar';
    fb.innerHTML='<a class="l" href="https://line.me/R/ti/p/%40899xhfgq" target="_blank" rel="noopener">LINEで相談</a><a class="c" href="#contact">'+(page==='ast'?'無料体験版':page==='spp'?'資料請求':'無料相談')+'</a>';
    document.body.appendChild(fb);document.body.classList.add('has-fix');
    var tick=function(){var c=document.getElementById('contact');var y=scrollY;var nearC=c&&c.getBoundingClientRect().top<innerHeight;fb.classList.toggle('on',y>500&&!nearC)};
    addEventListener('scroll',tick,{passive:true});tick();
  }
  var btn=document.querySelector('.menu-btn'),g=document.querySelector('.gnav');
  if(btn){btn.addEventListener('click',function(){var o=g.classList.toggle('open');btn.setAttribute('aria-expanded',o)});
    g.addEventListener('click',function(e){if(e.target.closest('a'))g.classList.remove('open')})}
  var cp=document.getElementById('copy-mail');
  if(cp)cp.addEventListener('click',function(){var el=document.getElementById('mail');
    function sel(){var r=document.createRange();r.selectNodeContents(el);var s=getSelection();s.removeAllRanges();s.addRange(r);cp.textContent='選択しました。長押しでコピー'}
    try{navigator.clipboard.writeText(el.textContent).then(function(){cp.textContent='コピーしました'},sel)}catch(e){sel()}});
  var rv=document.querySelectorAll('.rv');
  if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('on');io.unobserve(e.target)}})},{rootMargin:'0px 0px -8% 0px'});rv.forEach(function(el){io.observe(el)})}
  else rv.forEach(function(el){el.classList.add('on')});
})();
