/* =========================================================================
   Play Tycoon — Indie Dev Simulator
   Vanilla JS. No dependencies. Saves to localStorage.
   ========================================================================= */
'use strict';

/* ------------------------------------------------------------------ i18n */
const I18N = {
  en: {
    'app.name':'Play Tycoon',
    'app.tagline':'Indie Dev Simulator',

    'nav.dashboard':'Dashboard','nav.develop':'Develop','nav.publish':'Publish',
    'nav.studio':'Studio','nav.portfolio':'Portfolio','nav.settings':'Settings',

    'stat.money':'Cash','stat.rep':'Rep','stat.dl':'Downloads','stat.day':'Day',

    'foot.nextDay':'Next Day ▶','foot.day':'Day',

    'dash.title':'Studio Dashboard',
    'dash.sub':'Somehow still in business.',
    'dash.project':'Active Project','dash.noProject':'No active project',
    'dash.noProjectHint':'Start a new game in the Develop tab before the rent is due.',
    'dash.goDevelop':'Start a game',
    'dash.notifs':'Recent Activity','dash.noNotifs':'Nothing has happened. Enjoy it while it lasts.',
    'dash.trend':'Market Trend','dash.trendText':'{genre} games are trending right now.',
    'dash.competitor':'Competitor','dash.compText':'{name} has {dl} downloads. They launched yesterday.',
    'dash.daily':'Daily Report','dash.income':'Income','dash.expenses':'Expenses',
    'dash.net':'Net','dash.staffCost':'Staff salaries',
    'dash.ach':'Achievements','dash.achCount':'{a} / {b} unlocked',
    'dash.repLine':'Reputation grows as you publish good games. It affects downloads.',

    'dev.title':'Game Development',
    'dev.newGame':'New Project','dev.newSub':'Pick a genre. Pick a name. Pray.',
    'dev.genre':'Genre','dev.name':'Game name','dev.namePlaceholder':'Untitled Masterpiece',
    'dev.create':'Create project','dev.needName':'Please enter a game name.',
    'dev.costMul':'Cost ×{m}','dev.revMul':'Revenue ×{m}',
    'dev.graphics':'Graphics','dev.gameplay':'Gameplay','dev.stability':'Stability',
    'dev.testing':'Testing','dev.progress':'Progress','dev.bugs':'Bugs',
    'dev.actions':'Work on it',
    'dev.act.code':'Code','dev.act.art':'Art','dev.act.test':'Playtest','dev.act.fix':'Fix bugs',
    'dev.act.code.d':'Progress + gameplay','dev.act.art.d':'Progress + graphics',
    'dev.act.test.d':'Testing + fewer bugs','dev.act.fix.d':'Kill bugs',
    'dev.submit':'Submit for review','dev.submitNeed':'Needs {p}% progress and {t}% testing',
    'dev.abandon':'Abandon project',
    'dev.abandonQ':'Abandon this project? All progress is lost.',
    'dev.ready':'Ready to submit!',
    'dev.rejected':'Your last submission was rejected: {reason}',
    'dev.quality':'Estimated quality',

    'pub.title':'Publishing & Review',
    'pub.pending':'Under review',
    'pub.pendingMsg':'Estimated completion: sometime this century. ({d} day(s))',
    'pub.noProject':'Nothing to publish','pub.noProjectHint':'Build a game first, then come back here.',
    'pub.approved':'Approved!',
    'pub.rejectTitle':'Rejected',
    'pub.fixHint':'Fix the problems, then resubmit.',
    'pub.resubmit':'Resubmit ({c})','pub.noMoney':'You need {c} to resubmit.',
    'pub.lastGame':'Latest release',

    'reason.bugs':'Too many bugs. Testers were eaten by them.',
    'reason.testing':'Not enough beta testing. Nobody knows what this game does.',
    'reason.quality':'Overall quality too low. A tester called it "a loading screen".',
    'reason.random':'A reviewer sneezed on the keyboard. Rejected.',
    'reason.policy':'Privacy policy missing for your offline single-player game.',

    'studio.title':'Studio Management',
    'studio.staff':'Staff','studio.staffSub':'They cost money every single day. Just like rent.',
    'studio.hire':'Hire','studio.salary':'{s}/day','studio.owned':'Owned: {n}',
    'studio.upgrades':'R&D Upgrades','studio.upgradesSub':'Permanent boosts. Buy once, benefit forever.',
    'studio.marketing':'Marketing','studio.campaign':'Run ad campaign',
    'studio.campaignCost':'Cost: {c} · +60% downloads for 5 days',
    'studio.campaignActive':'Campaign live — {d} day(s) left',
    'studio.campaignRunning':'A campaign is already running.',

    'staff.dev':'Developer','staff.dev.d':'+1 gameplay, +2 progress per day',
    'staff.artist':'Artist','staff.artist.d':'+1 graphics, +2 progress per day',
    'staff.tester':'Tester','staff.tester.d':'-1 bug per day',
    'staff.marketing':'Marketer','staff.marketing.d':'+5% downloads per day',

    'upg.engine':'Game Engine','upg.engine.d':'+5% game quality per level',
    'upg.tooling':'Tooling','upg.tooling.d':'-8% action cost per level',
    'upg.analytics':'Analytics','upg.analytics.d':'+10% revenue per level',
    'upg.community':'Community','upg.community.d':'+10% initial downloads per level',
    'upg.level':'Lv {n} / {m}','upg.maxed':'MAX','upg.buy':'Buy {c}',

    'port.title':'Portfolio','port.empty':'You have published nothing. Your portfolio is a blank page. Fitting.',
    'port.quality':'Quality','port.dl':'Downloads','port.rev':'Revenue',
    'port.pubDay':'Published day {d}','port.daily':'{n}/day','port.dead':'Exhausted',

    'set.title':'Settings','set.language':'Language','set.sound':'Sound effects',
    'set.on':'On','set.off':'Off','set.data':'Save Data',
    'set.save':'Save now','set.load':'Load save','set.reset':'Reset progress',
    'set.saved':'Game saved.','set.loaded':'Save loaded.',
    'set.noSave':'No valid save found.','set.resetQ':'Reset everything? This cannot be undone.',
    'set.resetDone':'Fresh start. Good luck.',
    'set.about':'About','set.aboutText':'Play Tycoon is a parody. It is not affiliated with Google, Google Play, or any real company. All brands are fictional. Any resemblance to your actual app store experience is unfortunate.',
    'set.autosave':'Progress saves automatically each day.',

    'ach.first':'First Release','ach.rich':'$1,000 Cash','ach.rep50':'50 Reputation',
    'ach.port5':'5 Games','ach.dl10k':'10K Downloads','ach.rej3':'Rejected 3×',
    'ach.staff':'First Hire','ach.tenK':'$10,000 Cash',

    'toast.saved':'Saved','toast.notEnough':'Not enough money.',
    'toast.hired':'Hired!','toast.bought':'Purchased!','toast.maxed':'Already maxed.',
    'toast.published':'Published: {n}','toast.rejected':'Rejected. Again.',
    'toast.day':'Day {d}','toast.campaign':'Campaign started!',
    'toast.freelance':'Freelance gig paid {c}. You fixed a neighbor\'s printer.',
    'toast.ach':'Achievement unlocked: {n}',
    'toast.income':'Earned {c} today.',
    'toast.broke':'You are broke. Rent is due. You are not.',

    'ev.ok':'OK','ev.no':'No thanks','ev.yes':'Do it',
    'ev.accept':'Accept','ev.decline':'Decline','ev.pay':'Pay {c}','ev.ignore':'Ignore',

    'err.save':'Could not save (storage blocked).','err.load':'Save data was corrupted and has been reset.'
  },

  tr: {
    'app.name':'Play Tycoon',
    'app.tagline':'Bağımsız Oyun Simülatörü',

    'nav.dashboard':'Panel','nav.develop':'Geliştir','nav.publish':'Yayınla',
    'nav.studio':'Stüdyo','nav.portfolio':'Portföy','nav.settings':'Ayarlar',

    'stat.money':'Kasa','stat.rep':'İtibar','stat.dl':'İndirme','stat.day':'Gün',

    'foot.nextDay':'Sonraki Gün ▶','foot.day':'Gün',

    'dash.title':'Stüdyo Paneli',
    'dash.sub':'Bir şekilde hâlâ ayaktasın.',
    'dash.project':'Aktif Proje','dash.noProject':'Aktif proje yok',
    'dash.noProjectHint':'Kira gelmeden önce Geliştir sekmesinden yeni bir oyun başlat.',
    'dash.goDevelop':'Oyun başlat',
    'dash.notifs':'Son Hareketler','dash.noNotifs':'Hiçbir şey olmadı. Tadını çıkar.',
    'dash.trend':'Pazar Trendi','dash.trendText':'Şu anda {genre} oyunları trend.',
    'dash.competitor':'Rakip','dash.compText':'{name} {dl} indirmeye ulaştı. Dün çıktı.',
    'dash.daily':'Günlük Rapor','dash.income':'Gelir','dash.expenses':'Gider',
    'dash.net':'Net','dash.staffCost':'Personel maaşları',
    'dash.ach':'Başarımlar','dash.achCount':'{a} / {b} açıldı',
    'dash.repLine':'İyi oyunlar yayınladıkça itibarın artar. İndirmeleri etkiler.',

    'dev.title':'Oyun Geliştirme',
    'dev.newGame':'Yeni Proje','dev.newSub':'Bir tür seç. Bir isim seç. Dua et.',
    'dev.genre':'Tür','dev.name':'Oyun adı','dev.namePlaceholder':'İsimsiz Şaheser',
    'dev.create':'Proje oluştur','dev.needName':'Lütfen bir oyun adı gir.',
    'dev.costMul':'Maliyet ×{m}','dev.revMul':'Gelir ×{m}',
    'dev.graphics':'Grafikler','dev.gameplay':'Oynanış','dev.stability':'Kararlılık',
    'dev.testing':'Test','dev.progress':'İlerleme','dev.bugs':'Hatalar',
    'dev.actions':'Üzerinde çalış',
    'dev.act.code':'Kodla','dev.act.art':'Çiz','dev.act.test':'Test Et','dev.act.fix':'Hata Düzelt',
    'dev.act.code.d':'İlerleme + oynanış','dev.act.art.d':'İlerleme + grafik',
    'dev.act.test.d':'Test + daha az hata','dev.act.fix.d':'Hataları öldür',
    'dev.submit':'İncelemeye gönder','dev.submitNeed':'{p}% ilerleme ve {t}% test gerekli',
    'dev.abandon':'Projeyi bırak',
    'dev.abandonQ':'Bu proje bırakılsın mı? Tüm ilerleme kaybolur.',
    'dev.ready':'Göndermeye hazır!',
    'dev.rejected':'Son gönderimin reddedildi: {reason}',
    'dev.quality':'Tahmini kalite',

    'pub.title':'Yayınlama ve İnceleme',
    'pub.pending':'İncelemede',
    'pub.pendingMsg':'Tahmini tamamlanma: bu yüzyıl içinde bir ara. ({d} gün)',
    'pub.noProject':'Yayınlanacak bir şey yok','pub.noProjectHint':'Önce bir oyun geliştir, sonra buraya gel.',
    'pub.approved':'Onaylandı!',
    'pub.rejectTitle':'Reddedildi',
    'pub.fixHint':'Sorunları düzelt, sonra tekrar gönder.',
    'pub.resubmit':'Tekrar gönder ({c})','pub.noMoney':'Tekrar göndermek için {c} gerekiyor.',
    'pub.lastGame':'Son sürüm',

    'reason.bugs':'Çok fazla hata. Testçileri hatalar yedi.',
    'reason.testing':'Yeterli beta testi yok. Kimse bu oyunun ne yaptığını bilmiyor.',
    'reason.quality':'Genel kalite çok düşük. Bir testçi buna "yükleme ekranı" dedi.',
    'reason.random':'Bir inceleyici klavyeye hapşırdı. Reddedildi.',
    'reason.policy':'Çevrimdışı tek oyunculu oyunun için gizlilik politikası eksik.',

    'studio.title':'Stüdyo Yönetimi',
    'studio.staff':'Personel','studio.staffSub':'Her gün para götürürler. Tıpkı kira gibi.',
    'studio.hire':'İşe al','studio.salary':'{s}/gün','studio.owned':'Mevcut: {n}',
    'studio.upgrades':'Ar-Ge Yükseltmeleri','studio.upgradesSub':'Kalıcı bonuslar. Bir kez al, hep kazan.',
    'studio.marketing':'Pazarlama','studio.campaign':'Reklam kampanyası başlat',
    'studio.campaignCost':'Maliyet: {c} · 5 gün boyunca %60 fazla indirme',
    'studio.campaignActive':'Kampanya sürüyor — {d} gün kaldı',
    'studio.campaignRunning':'Zaten bir kampanya sürüyor.',

    'staff.dev':'Geliştirici','staff.dev.d':'Günde +1 oynanış, +2 ilerleme',
    'staff.artist':'Sanatçı','staff.artist.d':'Günde +1 grafik, +2 ilerleme',
    'staff.tester':'Testçi','staff.tester.d':'Günde -1 hata',
    'staff.marketing':'Pazarlamacı','staff.marketing.d':'Günde %5 fazla indirme',

    'upg.engine':'Oyun Motoru','upg.engine.d':'Seviye başına %5 kalite',
    'upg.tooling':'Araçlar','upg.tooling.d':'Seviye başına %8 daha az maliyet',
    'upg.analytics':'Analitik','upg.analytics.d':'Seviye başına %10 gelir',
    'upg.community':'Topluluk','upg.community.d':'Seviye başına %10 başlangıç indirmesi',
    'upg.level':'Sv {n} / {m}','upg.maxed':'MAKS','upg.buy':'Al {c}',

    'port.title':'Portföy','port.empty':'Hiç oyun yayınlamadın. Portföyün boş bir sayfa. Çok uygun.',
    'port.quality':'Kalite','port.dl':'İndirme','port.rev':'Gelir',
    'port.pubDay':'{d}. gün yayınlandı','port.daily':'{n}/gün','port.dead':'Tükendi',

    'set.title':'Ayarlar','set.language':'Dil','set.sound':'Ses efektleri',
    'set.on':'Açık','set.off':'Kapalı','set.data':'Kayıt Verisi',
    'set.save':'Şimdi kaydet','set.load':'Kaydı yükle','set.reset':'İlerlemeyi sıfırla',
    'set.saved':'Oyun kaydedildi.','set.loaded':'Kayıt yüklendi.',
    'set.noSave':'Geçerli kayıt bulunamadı.','set.resetQ':'Her şey sıfırlansın mı? Bu geri alınamaz.',
    'set.resetDone':'Temiz başlangıç. Bol şans.',
    'set.about':'Hakkında','set.aboutText':'Play Tycoon bir parodidir. Google, Google Play veya herhangi bir gerçek şirketle bağlantılı değildir. Tüm markalar kurgusaldır. Gerçek uygulama mağazası deneyimine benzemesi talihsizliktir.',
    'set.autosave':'İlerleme her gün otomatik kaydedilir.',

    'ach.first':'İlk Sürüm','ach.rich':'1.000$ Kasa','ach.rep50':'50 İtibar',
    'ach.port5':'5 Oyun','ach.dl10k':'10B İndirme','ach.rej3':'3× Reddedildi',
    'ach.staff':'İlk İşe Alım','ach.tenK':'10.000$ Kasa',

    'toast.saved':'Kaydedildi','toast.notEnough':'Yeterli para yok.',
    'toast.hired':'İşe alındı!','toast.bought':'Satın alındı!','toast.maxed':'Zaten maksimumda.',
    'toast.published':'Yayınlandı: {n}','toast.rejected':'Reddedildi. Yine.',
    'toast.day':'Gün {d}','toast.campaign':'Kampanya başladı!',
    'toast.freelance':'Serbest iş {c} kazandırdı. Komşunun yazıcısını tamir ettin.',
    'toast.ach':'Başarım açıldı: {n}',
    'toast.income':'Bugün {c} kazandın.',
    'toast.broke':'Beş parasızsın. Kira geldi. Sen gelemedin.',

    'ev.ok':'Tamam','ev.no':'Hayır','ev.yes':'Yap',
    'ev.accept':'Kabul et','ev.decline':'Reddet','ev.pay':'Öde {c}','ev.ignore':'Yoksay',

    'err.save':'Kaydedilemedi (depolama engelli).','err.load':'Kayıt bozuktu ve sıfırlandı.'
  }
};

/* --------------------------------------------------------------- constants */
const SAVE_KEY = 'playtycoon_save_v1';
const BASE_RENT = 2;

const GENRES = [
  { key:'arcade',  icon:'🕹️', costMul:1.00, revMul:1.00, pop:1.00 },
  { key:'puzzle',  icon:'🧩', costMul:0.90, revMul:1.10, pop:1.10 },
  { key:'racing',  icon:'🏎️', costMul:1.20, revMul:1.20, pop:0.90 },
  { key:'sim',     icon:'🏗️', costMul:1.10, revMul:1.05, pop:1.00 },
  { key:'rpg',     icon:'⚔️', costMul:1.30, revMul:1.40, pop:0.85 }
];
const genreByKey = k => GENRES.find(g => g.key === k) || GENRES[0];

const UPGRADES = [
  { key:'engine',    icon:'⚙️', max:5, baseCost:70, mul:1.90 },
  { key:'tooling',   icon:'🧰', max:5, baseCost:55, mul:1.85 },
  { key:'analytics', icon:'📊', max:5, baseCost:80, mul:1.90 },
  { key:'community', icon:'💬', max:5, baseCost:65, mul:1.90 }
];

const STAFF = [
  { key:'dev',       icon:'👨‍💻', salary:9, cost:60 },
  { key:'artist',    icon:'🎨', salary:8, cost:55 },
  { key:'tester',    icon:'🔍', salary:6, cost:45 },
  { key:'marketing', icon:'📣', salary:7, cost:50 }
];

const ACTIONS = [
  { key:'code', icon:'⌨️', cost:4, progress:16, gameplay:3, bugs:1  },
  { key:'art',  icon:'🖌️', cost:6, progress:12, graphics:5, bugs:0 },
  { key:'test', icon:'🧪', cost:3, progress:8,  testing:12, bugs:-1 },
  { key:'fix',  icon:'🔧', cost:5, progress:5,  bugs:-8 }
];

const ACHIEVEMENTS = [
  { key:'first', icon:'🚀', cond:s => s.publishedCount >= 1 },
  { key:'rich',  icon:'💰', cond:s => s.money >= 1000 },
  { key:'rep50', icon:'⭐', cond:s => s.reputation >= 50 },
  { key:'port5', icon:'📦', cond:s => s.portfolio.length >= 5 },
  { key:'dl10k', icon:'📈', cond:s => s.totalDownloads >= 10000 },
  { key:'rej3',  icon:'📨', cond:s => s.rejections >= 3 },
  { key:'staff', icon:'👥', cond:s => Object.values(s.staff).some(v => v > 0) },
  { key:'tenK',  icon:'🏦', cond:s => s.money >= 10000 }
];

const CAMPAIGN_COST = 50;
const RESUBMIT_COST = 10;

/* ------------------------------------------------------------------ events */
const EVENTS = [
  { id:'tester_bugs', weight:3,
    t:{ en:'QA Report', tr:'QA Raporu' },
    b:{ en:'A tester played for 3 seconds and reported 47 bugs. Two of them are about the tester.',
        tr:'Bir testçi 3 saniye oynadı ve 47 hata bildirdi. İkisi testçinin kendisiyle ilgili.' },
    apply(s){ if(s.project){ s.project.bugs += 8; } else { s.reputation = Math.max(0, s.reputation - 1); } } },

  { id:'invisible', weight:2,
    t:{ en:'Approved! And Invisible', tr:'Onaylandı! Ve Görünmez' },
    b:{ en:'Your game has been approved! Unfortunately, nobody can find it in search. Including you.',
        tr:'Oyunun onaylandı! Ne yazık ki kimse aramada bulamıyor. Sen dahil.' },
    apply(s){ s.reputation = Math.max(0, s.reputation - 2); } },

  { id:'update_bugs', weight:3,
    t:{ en:'Update Deployed', tr:'Güncelleme Yayınlandı' },
    b:{ en:'Your latest update fixed 2 bugs and introduced 14 new ones. Net progress!',
        tr:'Son güncellemen 2 hatayı düzeltti ve 14 yeni hata ekledi. Net ilerleme!' },
    apply(s){ if(s.project) s.project.bugs += 10; else s.money = Math.max(0, s.money - 4); } },

  { id:'fridge', weight:2,
    t:{ en:'One-Star Review', tr:'Bir Yıldızlı Yorum' },
    b:{ en:'A user left a one-star review: "The game crashes on my refrigerator."',
        tr:'Bir kullanıcı bir yıldız verdi: "Oyun buzdolabımda çöküyor."' },
    apply(s){ s.reputation = Math.max(0, s.reputation - 1); } },

  { id:'cents', weight:3,
    t:{ en:'Passive Income', tr:'Pasif Gelir' },
    b:{ en:'Your game earned $0.03 in advertising revenue. Time to retire.',
        tr:'Oyunun reklam gelirinden 0.03$ kazandı. Emekli olma vakti.' },
    apply(s){ s.money += 0.03; } },

  { id:'privacy', weight:2,
    t:{ en:'Policy Request', tr:'Politika Talebi' },
    b:{ en:'The review team requested a privacy policy for your offline single-player calculator game.',
        tr:'İnceleme ekibi, çevrimdışı tek oyunculu hesap makinesi oyunun için gizlilik politikası istedi.' },
    choices:[
      { l:{ en:'Pay a lawyer ($15)', tr:'Avukata öde (15$)' },
        apply(s){ if(s.money >= 15){ s.money -= 15; s.reputation += 2; } else { s.reputation = Math.max(0, s.reputation - 1); } } },
      { l:{ en:'Ignore it', tr:'Yoksay' },
        apply(s){ s.reputation = Math.max(0, s.reputation - 3); } }
    ] },

  { id:'competitor', weight:2,
    t:{ en:'Competitor News', tr:'Rakip Haberi' },
    b:{ en:'A competitor published a game made in 10 minutes and received 1 million downloads. It is called "Tap."',
        tr:'Bir rakip 10 dakikada yapılmış bir oyun yayınladı ve 1 milyon indirme aldı. Adı "Dokun".' },
    apply(s){ s.reputation = Math.max(0, s.reputation - 2); s.competitor.downloads += 1000000; } },

  { id:'century', weight:2,
    t:{ en:'Still Reviewing', tr:'Hâlâ İnceleniyor' },
    b:{ en:'Your application update is under review. Estimated completion: sometime this century.',
        tr:'Uygulama güncellemen inceleniyor. Tahmini tamamlanma: bu yüzyıl içinde bir ara.' },
    apply(s){ if(s.review) s.review.daysLeft += 1; else s.money += 3; } },

  { id:'hundred', weight:2,
    t:{ en:'Milestone!', tr:'Kilometre Taşı!' },
    b:{ en:'You finally reached 100 downloads. 97 of them are your testers. One is your mom.',
        tr:'Sonunda 100 indirmeye ulaştın. 97\'si testçilerin. Biri annen.' },
    apply(s){ s.reputation += 1; s.totalDownloads += 100; } },

  { id:'platform_fee', weight:2,
    t:{ en:'Platform Fee', tr:'Platform Ücreti' },
    b:{ en:'A mysterious "platform fee" appeared on your invoice. It is 12 dollars and a vague feeling of dread.',
        tr:'Faturanda gizemli bir "platform ücreti" belirdi. 12 dolar ve belirsiz bir korku.' },
    apply(s){ s.money = Math.max(0, s.money - 12); } },

  { id:'streamer', weight:2,
    t:{ en:'Influencer Moment', tr:'Fenomen Anı' },
    b:{ en:'A streamer with 3 followers played your game. It went... okay. They said "huh" twice.',
        tr:'3 takipçili bir yayıncı oyununu oynadı. Fena değildi. İki kez "hı" dedi.' },
    apply(s){ s.totalDownloads += 40; if(s.portfolio.length){ s.portfolio[0].dailyDl += 25; } } },

  { id:'crash_log', weight:3,
    t:{ en:'Crash Report', tr:'Çökme Raporu' },
    b:{ en:'Crash report received. Description: "It crashed." Attached files: none. Thanks.',
        tr:'Çökme raporu alındı. Açıklama: "Çöktü." Ekli dosya: yok. Teşekkürler.' },
    apply(s){ if(s.project) s.project.bugs += 5; else s.reputation = Math.max(0, s.reputation - 1); } },

  { id:'klingon', weight:2,
    t:{ en:'Localization Demand', tr:'Yerelleştirme Talebi' },
    b:{ en:'A user demands Klingon localization. They rated your game 1 star "preemptively".',
        tr:'Bir kullanıcı Klingonca yerelleştirme talep ediyor. Oyununa "peşinen" 1 yıldız verdi.' },
    choices:[
      { l:{ en:'Hire a translator ($20)', tr:'Çevirmen tut (20$)' },
        apply(s){ if(s.money >= 20){ s.money -= 20; s.reputation += 4; } else { s.reputation = Math.max(0, s.reputation - 1); } } },
      { l:{ en:'Ignore it', tr:'Yoksay' },
        apply(s){ s.reputation = Math.max(0, s.reputation - 2); } }
    ] },

  { id:'ai_startup', weight:2,
    t:{ en:'AI Startup', tr:'Yapay Zeka Girişimi' },
    b:{ en:'An AI startup offers to "revolutionize your workflow" for $40. Their demo is a Google Slides presentation.',
        tr:'Bir yapay zeka girişimi 40$ karşılığında "iş akışını devrimleştirmeyi" teklif ediyor. Demoları bir sunum dosyası.' },
    choices:[
      { l:{ en:'Pay $40', tr:'40$ öde' },
        apply(s){ if(s.money >= 40){ s.money -= 40; if(s.project){ s.project.gameplay += 8; s.project.graphics += 5; } else { s.reputation += 1; } } } },
      { l:{ en:'Decline', tr:'Reddet' },
        apply(s){ s.reputation += 1; } }
    ] },

  { id:'investor', weight:1,
    t:{ en:'Investor Offer', tr:'Yatırımcı Teklifi' },
    b:{ en:'An investor offers $200 for 0.0001% of your studio and a seat on your couch.',
        tr:'Bir yatırımcı stüdyonun %0.0001\'i ve kanepede bir yer karşılığında 200$ teklif ediyor.' },
    choices:[
      { l:{ en:'Take the money', tr:'Parayı al' },
        apply(s){ s.money += 200; s.reputation = Math.max(0, s.reputation - 2); } },
      { l:{ en:'Stay independent', tr:'Bağımsız kal' },
        apply(s){ s.reputation += 3; } }
    ] },

  { id:'coffee', weight:3,
    t:{ en:'Coffee Incident', tr:'Kahve Kazası' },
    b:{ en:'You spilled coffee on your keyboard. It now types in cursive and deletes random files.',
        tr:'Klavyene kahve döktün. Artık el yazısıyla yazıyor ve rastgele dosya siliyor.' },
    apply(s){ s.money = Math.max(0, s.money - 5); if(s.project) s.project.bugs += 2; } },

  { id:'review_bomb', weight:2,
    t:{ en:'Review Bombing', tr:'Yorum Bombardımanı' },
    b:{ en:'40 one-star reviews arrived from users who never installed the game. One says "too many bugs" about a menu.',
        tr:'Oyunu hiç kurmamış 40 kullanıcıdan bir yıldız geldi. Biri menü için "çok hata var" diyor.' },
    apply(s){ s.reputation = Math.max(0, s.reputation - 4); } },

  { id:'lucky_ad', weight:2,
    t:{ en:'Accounting Error', tr:'Muhasebe Hatası' },
    b:{ en:'An ad network accidentally paid you twice. They have not noticed. Do not email them.',
        tr:'Bir reklam ağı yanlışlıkla sana iki kez ödeme yaptı. Fark etmediler. Sakın e-posta atma.' },
    apply(s){ s.money += 25; } },

  { id:'server_bill', weight:2,
    t:{ en:'Cloud Bill', tr:'Bulut Faturası' },
    b:{ en:'Your cloud bill arrived. It is just a picture of a burning wallet with the caption "thanks".',
        tr:'Bulut faturan geldi. İçinde sadece yanan bir cüzdan resmi var, altında "teşekkürler" yazıyor.' },
    apply(s){ s.money = Math.max(0, s.money - 15); } },

  { id:'praise', weight:3,
    t:{ en:'Genuine Praise', tr:'Gerçek Övgü' },
    b:{ en:'A tester said your game is "actually pretty good." You printed it and framed it.',
        tr:'Bir testçi oyunun için "aslında gayet iyi" dedi. Çıktısını alıp çerçevelettin.' },
    apply(s){ s.reputation += 3; } },

  { id:'trend_shift', weight:2,
    t:{ en:'Market Shift', tr:'Pazar Değişimi' },
    b:{ en:'The market has spoken. A new genre is trending. Nobody knows why.',
        tr:'Pazar konuştu. Yeni bir tür trend. Kimse nedenini bilmiyor.' },
    apply(s){
      const opts = GENRES.filter(g => g.key !== s.trend.genre);
      s.trend.genre = opts[Math.floor(Math.random() * opts.length)].key;
      s.trend.daysLeft = 12;
    } },

  { id:'bug_halo', weight:2,
    t:{ en:'Creative Fix', tr:'Yaratıcı Çözüm' },
    b:{ en:'You fixed the bug by deleting the feature. Users call it "minimalist".',
        tr:'Hatayı özelliği silerek düzelttin. Kullanıcılar buna "minimalist" diyor.' },
    apply(s){ if(s.project){ s.project.bugs = Math.max(0, s.project.bugs - 6); s.project.gameplay = Math.max(0, s.project.gameplay - 2); } else { s.reputation += 1; } } }
];

/* ---------------------------------------------------------------- helpers */
const $  = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const rand = (a, b) => a + Math.random() * (b - a);
const randInt = (a, b) => Math.floor(rand(a, b + 1));
const pick = arr => arr[Math.floor(Math.random() * arr.length)];

let state = null;

function t(key, vars) {
  const lang = (state && state.lang) || 'en';
  let str = (I18N[lang] && I18N[lang][key]);
  if (str === undefined) str = I18N.en[key];
  if (str === undefined) return key;
  if (vars) for (const k in vars) str = str.split('{' + k + '}').join(vars[k]);
  return str;
}

function fmt(n) {
  const lang = (state && state.lang) || 'en';
  return Math.round(n).toLocaleString(lang === 'tr' ? 'tr-TR' : 'en-US');
}
function money(n) {
  const v = Math.abs(n);
  const str = v.toFixed(v < 100 ? 2 : 0).replace(/\.00$/, '');
  return (n < 0 ? '-$' : '$') + str;
}

/* ------------------------------------------------------------------ audio */
const Sfx = {
  ctx: null,
  init() {
    if (this.ctx) return;
    try {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (AC) this.ctx = new AC();
    } catch (e) { this.ctx = null; }
  },
  beep(freq, dur, type, gain) {
    if (!state || !state.sound) return;
    this.init();
    if (!this.ctx) return;
    try {
      if (this.ctx.state === 'suspended') this.ctx.resume();
      const o = this.ctx.createOscillator();
      const g = this.ctx.createGain();
      o.type = type || 'sine';
      o.frequency.value = freq;
      const now = this.ctx.currentTime;
      g.gain.setValueAtTime(gain || 0.04, now);
      g.gain.exponentialRampToValueAtTime(0.0001, now + dur);
      o.connect(g); g.connect(this.ctx.destination);
      o.start(now); o.stop(now + dur + 0.02);
    } catch (e) { /* audio must never break the game */ }
  },
  click() { this.beep(520, 0.05, 'triangle', 0.03); },
  buy()   { this.beep(660, 0.07, 'square', 0.03); setTimeout(() => this.beep(880, 0.09, 'square', 0.03), 65); },
  good()  { [523, 659, 784].forEach((f, i) => setTimeout(() => this.beep(f, 0.11, 'sine', 0.045), i * 85)); },
  bad()   { this.beep(190, 0.18, 'sawtooth', 0.035); },
  cash()  { this.beep(980, 0.06, 'sine', 0.045); setTimeout(() => this.beep(1240, 0.09, 'sine', 0.045), 55); }
};

/* ---------------------------------------------------------------- toasts */
let toastSeq = 0;
function toast(msg, kind) {
  const root = $('#toasts');
  if (!root) return;
  const el = document.createElement('div');
  el.className = 'toast ' + (kind || '');
  el.textContent = msg;
  el.dataset.id = String(++toastSeq);
  root.appendChild(el);
  while (root.children.length > 4) root.removeChild(root.firstChild);
  setTimeout(() => {
    el.style.transition = 'opacity .25s, transform .25s';
    el.style.opacity = '0';
    el.style.transform = 'translateY(8px)';
    setTimeout(() => el.remove(), 260);
  }, 2600);
}

/* ---------------------------------------------------------------- modals */
let modalOpen = false;
function showModal(opts) {
  const root = $('#modalRoot');
  if (!root) return;
  modalOpen = true;
  const buttons = opts.buttons || [{ label: t('ev.ok'), kind: 'primary' }];
  root.innerHTML =
    '<div class="modal-backdrop"><div class="modal">' +
      (opts.icon ? '<div class="modal-icon">' + opts.icon + '</div>' : '') +
      '<h3>' + (opts.title || '') + '</h3>' +
      '<div class="modal-body">' + (opts.body || '') + '</div>' +
      '<div class="modal-btns">' +
        buttons.map((b, i) => '<button class="btn ' + (b.kind || 'primary') + '" data-mbtn="' + i + '">' + b.label + '</button>').join('') +
      '</div>' +
    '</div></div>';

  $$('[data-mbtn]', root).forEach(btn => {
    btn.addEventListener('click', () => {
      const b = buttons[Number(btn.dataset.mbtn)];
      root.innerHTML = '';
      modalOpen = false;
      Sfx.click();
      if (b && b.onClick) b.onClick();
    });
  });
}

/* ------------------------------------------------------------------ state */
function freshState() {
  return {
    version: 1,
    day: 1,
    money: 100,
    reputation: 10,
    lang: 'en',
    sound: true,
    tab: 'dashboard',
    staff: { dev: 0, artist: 0, tester: 0, marketing: 0 },
    upgrades: { engine: 0, tooling: 0, analytics: 0, community: 0 },
    marketingCampaign: null,
    project: null,
    review: null,
    portfolio: [],
    achievements: [],
    notifications: [],
    pendingGenre: 'arcade',
    pendingName: '',
    trend: { genre: 'puzzle', daysLeft: 10 },
    competitor: { name: 'Pixel Bros', downloads: 48213 },
    totalDownloads: 0,
    publishedCount: 0,
    rejections: 0,
    lastReport: { income: 0, expenses: 0 }
  };
}

function save() {
  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify(state));
    return true;
  } catch (e) {
    toast(t('err.save'), 'bad');
    return false;
  }
}

function load() {
  let raw = null;
  try { raw = localStorage.getItem(SAVE_KEY); } catch (e) { raw = null; }
  if (!raw) return null;
  let data;
  try { data = JSON.parse(raw); } catch (e) {
    try { localStorage.removeItem(SAVE_KEY); } catch (e2) {}
    return null;
  }
  if (!data || typeof data !== 'object' || typeof data.money !== 'number') return null;

  const base = freshState();
  const merged = Object.assign(base, data);
  merged.staff = Object.assign({ dev: 0, artist: 0, tester: 0, marketing: 0 }, data.staff || {});
  merged.upgrades = Object.assign({ engine: 0, tooling: 0, analytics: 0, community: 0 }, data.upgrades || {});
  merged.portfolio = Array.isArray(data.portfolio) ? data.portfolio : [];
  merged.achievements = Array.isArray(data.achievements) ? data.achievements : [];
  merged.notifications = Array.isArray(data.notifications) ? data.notifications.slice(0, 30) : [];
  merged.lang = (data.lang === 'tr') ? 'tr' : 'en';
  merged.sound = data.sound !== false;
  merged.money = Number.isFinite(data.money) ? Math.max(0, data.money) : 100;
  merged.reputation = Number.isFinite(data.reputation) ? Math.max(0, data.reputation) : 10;
  merged.day = Number.isFinite(data.day) ? Math.max(1, data.day) : 1;
  merged.totalDownloads = Number.isFinite(data.totalDownloads) ? Math.max(0, data.totalDownloads) : 0;
  merged.publishedCount = Number.isFinite(data.publishedCount) ? data.publishedCount : 0;
  merged.rejections = Number.isFinite(data.rejections) ? data.rejections : 0;
  if (!merged.trend || !merged.trend.genre) merged.trend = { genre: 'puzzle', daysLeft: 10 };
  if (!merged.competitor) merged.competitor = { name: 'Pixel Bros', downloads: 48213 };
  if (merged.project && typeof merged.project !== 'object') merged.project = null;
  if (merged.review && !merged.review.project) merged.review = null;
  if (!Array.isArray(merged.notifications)) merged.notifications = [];
  return merged;
}

function note(text, kind) {
  if (!state) return;
  state.notifications.unshift({ text: text, day: state.day, kind: kind || '' });
  if (state.notifications.length > 30) state.notifications.length = 30;
}

/* ------------------------------------------------------------ game math */
function toolingMultiplier() { return 1 - 0.08 * state.upgrades.tooling; }

function actionCost(act) {
  const g = state.project ? genreByKey(state.project.genre) : genreByKey('arcade');
  return Math.max(1, Math.round(act.cost * g.costMul * toolingMultiplier()));
}

function stabilityOf(p) { return clamp(100 - p.bugs * 4, 0, 100); }

function qualityOf(p) {
  const stab = stabilityOf(p);
  const raw = p.graphics * 0.35 + p.gameplay * 0.40 + stab * 0.25;
  const bonus = 1 + 0.05 * state.upgrades.engine;
  return clamp(raw * bonus, 0, 100);
}

function hireCost(staffDef) {
  const owned = state.staff[staffDef.key] || 0;
  return Math.round(staffDef.cost * Math.pow(1.7, owned));
}

function upgradeCost(u) {
  const lvl = state.upgrades[u.key] || 0;
  return Math.round(u.baseCost * Math.pow(u.mul, lvl));
}

/* ------------------------------------------------------------- rendering */
const TABS = ['dashboard', 'develop', 'publish', 'studio', 'portfolio', 'settings'];
const TAB_ICON = { dashboard:'📊', develop:'🛠️', publish:'📤', studio:'🏢', portfolio:'📦', settings:'⚙️' };

function render() {
  renderStats();
  renderTabs();
  renderFoot();
  const view = $('#view');
  if (!view) return;
  const map = {
    dashboard: renderDashboard,
    develop: renderDevelop,
    publish: renderPublish,
    studio: renderStudio,
    portfolio: renderPortfolio,
    settings: renderSettings
  };
  const fn = map[state.tab] || renderDashboard;
  view.innerHTML = fn();
  document.documentElement.lang = state.lang;
}

function renderStats() {
  const el = $('#statsBar');
  if (!el) return;
  el.innerHTML =
    '<div class="stat"><span class="stat-ico">💵</span><div><b>' + money(state.money) + '</b><small>' + t('stat.money') + '</small></div></div>' +
    '<div class="stat"><span class="stat-ico">⭐</span><div><b>' + Math.round(state.reputation) + '</b><small>' + t('stat.rep') + '</small></div></div>' +
    '<div class="stat"><span class="stat-ico">⬇️</span><div><b>' + fmt(state.totalDownloads) + '</b><small>' + t('stat.dl') + '</small></div></div>' +
    '<div class="stat"><span class="stat-ico">📅</span><div><b>' + state.day + '</b><small>' + t('stat.day') + '</small></div></div>';
}

function renderTabs() {
  const el = $('#tabs');
  if (!el) return;
  const pendingDot = state.review ? ' has-new' : '';
  el.innerHTML = TABS.map(k =>
    '<button class="tab' + (state.tab === k ? ' active' : '') + (k === 'publish' && pendingDot ? pendingDot : '') + '" data-tab="' + k + '">' +
      '<span>' + TAB_ICON[k] + '</span>' + t('nav.' + k) +
      (k === 'publish' && state.review ? '<span class="dot"></span>' : '') +
    '</button>'
  ).join('');
}

function renderFoot() {
  const el = $('#foot');
  if (!el) return;
  el.innerHTML =
    '<div class="day-badge">📅 <b>' + state.day + '</b> · ' + t('foot.day') + '</div>' +
    '<button class="btn primary" data-action="nextDay">' + t('foot.nextDay') + '</button>';
}

/* ------------------------------------------------------------- dashboard */
function renderDashboard() {
  let html = '';

  html += '<div class="card"><h2><span class="ico">🏠</span>' + t('dash.title') + '</h2><p class="sub">' + t('dash.sub') + '</p>';

  if (state.project) {
    const p = state.project;
    const q = qualityOf(p);
    html +=
      '<div class="row-item">' +
        '<div class="r-ico">' + genreByKey(p.genre).icon + '</div>' +
        '<div class="r-main">' +
          '<div class="r-title">' + escapeHtml(p.name) + ' <span class="pill">' + t('dev.quality') + ': ' + Math.round(q) + '</span></div>' +
          '<div class="r-sub">' + t('dev.progress') + ': ' + Math.round(Math.min(100, p.progress)) + '% · ' + t('dev.bugs') + ': ' + p.bugs + '</div>' +
        '</div>' +
        '<div class="r-right"><button class="btn sm primary" data-action="gotoDevelop">' + t('nav.develop') + '</button></div>' +
      '</div>';
  } else if (state.review) {
    html += '<div class="note">📨 ' + t('pub.pending') + ' — ' + t('pub.pendingMsg', { d: state.review.daysLeft }) + '</div>';
  } else {
    html +=
      '<div class="empty"><span class="big">🕳️</span>' + t('dash.noProject') +
      '<div style="margin-top:10px"><button class="btn primary" data-action="gotoDevelop">' + t('dash.goDevelop') + '</button></div>' +
      '<div style="margin-top:8px;font-size:12px">' + t('dash.noProjectHint') + '</div></div>';
  }
  html += '</div>';

  html += '<div class="grid two">';

  // Daily report
  const staffCost = STAFF.reduce((s, x) => s + x.salary * (state.staff[x.key] || 0), 0);
  const expenses = BASE_RENT + staffCost;
  html +=
    '<div class="card"><h2><span class="ico">🧾</span>' + t('dash.daily') + '</h2>' +
      '<div class="kv"><span>' + t('dash.income') + '</span><b style="color:var(--accent)">' + money(state.lastReport.income) + '</b></div>' +
      '<div class="kv"><span>' + t('dash.expenses') + '</span><b style="color:var(--bad)">' + money(expenses) + '</b></div>' +
      '<div class="kv"><span>' + t('dash.staffCost') + '</span><b>' + money(staffCost) + '</b></div>' +
      '<div class="kv"><span>' + t('dash.net') + '</span><b style="color:' + (state.lastReport.income - expenses >= 0 ? 'var(--accent)' : 'var(--bad)') + '">' + money(state.lastReport.income - expenses) + '</b></div>' +
    '</div>';

  // Trend + competitor
  const trendG = genreByKey(state.trend.genre);
  html +=
    '<div class="card"><h2><span class="ico">📈</span>' + t('dash.trend') + '</h2>' +
      '<div class="row-item"><div class="r-ico">' + trendG.icon + '</div><div class="r-main">' +
        '<div class="r-title">' + t('dash.trendText', { genre: trendG.key.toUpperCase() }) + '</div>' +
        '<div class="r-sub">' + state.trend.daysLeft + ' days</div></div></div>' +
      '<div class="row-item"><div class="r-ico">🏴</div><div class="r-main">' +
        '<div class="r-title">' + t('dash.compText', { name: escapeHtml(state.competitor.name), dl: fmt(state.competitor.downloads) }) + '</div>' +
      '</div></div>' +
    '</div>';

  html += '</div>';

  // Notifications
  html += '<div class="card"><h2><span class="ico">🔔</span>' + t('dash.notifs') + '</h2>';
  if (!state.notifications.length) {
    html += '<div class="empty" style="padding:16px">' + t('dash.noNotifs') + '</div>';
  } else {
    html += state.notifications.slice(0, 6).map(n =>
      '<div class="row-item" style="padding:8px 10px"><div class="r-ico">' + (n.kind === 'good' ? '✅' : n.kind === 'bad' ? '⚠️' : '•') + '</div>' +
      '<div class="r-main"><div class="r-title" style="font-weight:600;font-size:12.5px">' + escapeHtml(n.text) + '</div>' +
      '<div class="r-sub">' + t('foot.day') + ' ' + n.day + '</div></div></div>'
    ).join('');
  }
  html += '</div>';

  // Achievements
  html += '<div class="card"><h2><span class="ico">🏆</span>' + t('dash.ach') +
    ' <span class="pill">' + t('dash.achCount', { a: state.achievements.length, b: ACHIEVEMENTS.length }) + '</span></h2>' +
    '<div class="ach-grid">' +
    ACHIEVEMENTS.map(a =>
      '<div class="ach' + (state.achievements.includes(a.key) ? ' on' : '') + '">' +
      '<span class="a-ico">' + a.icon + '</span>' + t('ach.' + a.key) + '</div>'
    ).join('') + '</div></div>';

  return html;
}

/* --------------------------------------------------------------- develop */
function renderDevelop() {
  let html = '<div class="card"><h2><span class="ico">🛠️</span>' + t('dev.title') + '</h2>';

  if (!state.project) {
    html += '<p class="sub">' + t('dev.newSub') + '</p>';
    html += '<label class="field">' + t('dev.genre') + '</label><div class="genres">';
    html += GENRES.map(g =>
      '<button class="genre' + (state.pendingGenre === g.key ? ' sel' : '') + '" data-action="pickGenre" data-genre="' + g.key + '">' +
        '<span class="g-ico">' + g.icon + '</span>' +
        '<span class="g-name">' + g.key.toUpperCase() + '</span>' +
        '<span class="g-meta">' + t('dev.costMul', { m: g.costMul.toFixed(2) }) + '</span>' +
        '<span class="g-meta">' + t('dev.revMul', { m: g.revMul.toFixed(2) }) + '</span>' +
      '</button>'
    ).join('');
    html += '</div>';
    html += '<div style="margin-top:14px"><label class="field">' + t('dev.name') + '</label>' +
      '<input type="text" id="gameName" maxlength="28" placeholder="' + t('dev.namePlaceholder') + '" value="' + escapeAttr(state.pendingName) + '"></div>';
    html += '<div style="margin-top:12px"><button class="btn primary block" data-action="createProject">✨ ' + t('dev.create') + '</button></div>';
    html += '</div>';
    return html;
  }

  const p = state.project;
  const g = genreByKey(p.genre);
  const q = qualityOf(p);

  if (p.rejection) {
    html += '<div class="note bad">📨 ' + t('dev.rejected', { reason: t('reason.' + p.rejection) }) + '</div>';
  }

  html += '<p class="sub">' + g.icon + ' <b>' + escapeHtml(p.name) + '</b> · ' + p.genre.toUpperCase() + ' · ' + t('dev.quality') + ': <b>' + Math.round(q) + '</b></p>';

  const statRow = (label, val, cls, suffix) =>
    '<div class="statline"><div class="row"><span class="lbl">' + label + '</span><b>' + Math.round(val) + (suffix || '') + '</b></div>' +
    '<div class="bar"><div class="bar-fill ' + cls + '" style="width:' + clamp(val, 0, 100) + '%"></div></div></div>';

  html += statRow(t('dev.graphics'), p.graphics, 'f-graphics');
  html += statRow(t('dev.gameplay'), p.gameplay, 'f-gameplay');
  html += statRow(t('dev.stability'), stabilityOf(p), 'f-stability');
  html += statRow(t('dev.testing'), p.testing, 'f-testing');
  html += statRow(t('dev.progress'), Math.min(100, p.progress), 'f-progress');

  html += '<div class="statline"><div class="row"><span class="lbl">' + t('dev.bugs') + '</span><b style="color:var(--bad)">' + p.bugs + '</b></div>' +
    '<div class="bar"><div class="bar-fill f-bugs" style="width:' + clamp(p.bugs * 4, 0, 100) + '%"></div></div></div>';

  html += '<h2 style="margin-top:18px"><span class="ico">💼</span>' + t('dev.actions') + '</h2><div class="actions">';
  html += ACTIONS.map(a => {
    const cost = actionCost(a);
    const can = state.money >= cost;
    return '<button class="action-btn" data-action="doAction" data-act="' + a.key + '"' + (can ? '' : ' disabled') + '>' +
      '<span class="a-ico">' + a.icon + '</span>' +
      '<span class="a-name">' + t('dev.act.' + a.key) + '</span>' +
      '<span class="a-cost">' + money(cost) + '</span>' +
      '<span class="a-desc">' + t('dev.act.' + a.key + '.d') + '</span>' +
    '</button>';
  }).join('');
  html += '</div>';

  const ready = p.progress >= 100 && p.testing >= 50;
  html += '<div style="margin-top:16px">';
  if (ready) {
    html += '<div class="note good" style="text-align:center">✅ ' + t('dev.ready') + '</div>';
  } else {
    html += '<div class="note" style="text-align:center">' + t('dev.submitNeed', { p: 100, t: 50 }) + '</div>';
  }
  html += '<div class="btn-row">' +
    '<button class="btn primary" style="flex:1" data-action="submitGame"' + (ready ? '' : ' disabled') + '>📤 ' + t('dev.submit') + '</button>' +
    '<button class="btn ghost" data-action="abandonProject">🗑️ ' + t('dev.abandon') + '</button>' +
    '</div></div>';

  html += '</div>';
  return html;
}

/* --------------------------------------------------------------- publish */
function renderPublish() {
  let html = '<div class="card"><h2><span class="ico">📤</span>' + t('pub.title') + '</h2>';

  if (state.review) {
    html +=
      '<div class="banner"><span class="b-ico">⏳</span>' +
      '<h3>' + t('pub.pending') + '</h3>' +
      '<p>' + t('pub.pendingMsg', { d: state.review.daysLeft }) + '</p></div>' +
      '<div class="kv"><span>' + t('dev.name') + '</span><b>' + escapeHtml(state.review.project.name) + '</b></div>' +
      '<div class="kv"><span>' + t('dev.quality') + '</span><b>' + Math.round(qualityOf(state.review.project)) + '</b></div>' +
      '<div class="kv"><span>' + t('dev.bugs') + '</span><b>' + state.review.project.bugs + '</b></div>' +
      '<div class="kv"><span>' + t('dev.testing') + '</span><b>' + Math.round(state.review.project.testing) + '%</b></div>';
  } else if (state.project) {
    const p = state.project;
    const ready = p.progress >= 100 && p.testing >= 50;
    if (p.rejection) {
      html += '<div class="note bad">📨 ' + t('dev.rejected', { reason: t('reason.' + p.rejection) }) + '</div>';
      html += '<p class="sub">' + t('pub.fixHint') + '</p>';
      html += '<div class="kv"><span>' + t('dev.bugs') + '</span><b>' + p.bugs + '</b></div>';
      html += '<div class="kv"><span>' + t('dev.testing') + '</span><b>' + Math.round(p.testing) + '%</b></div>';
      const canPay = state.money >= RESUBMIT_COST;
      html += '<div style="margin-top:14px"><button class="btn primary block" data-action="resubmitGame"' + (canPay ? '' : ' disabled') + '>' +
        '🔁 ' + t('pub.resubmit', { c: money(RESUBMIT_COST) }) + '</button></div>';
      if (!canPay) html += '<div class="note warn" style="margin-top:10px">' + t('pub.noMoney', { c: money(RESUBMIT_COST) }) + '</div>';
    } else {
      html += '<div class="note">' + t('dev.submitNeed', { p: 100, t: 50 }) + '</div>';
      html += '<button class="btn primary block" data-action="gotoDevelop">' + t('nav.develop') + '</button>';
    }
  } else {
    html += '<div class="empty"><span class="big">📭</span>' + t('pub.noProject') +
      '<div style="margin-top:8px;font-size:12px">' + t('pub.noProjectHint') + '</div>' +
      '<div style="margin-top:12px"><button class="btn primary" data-action="gotoDevelop">' + t('dash.goDevelop') + '</button></div></div>';
  }

  html += '</div>';

  if (state.portfolio.length) {
    const last = state.portfolio[state.portfolio.length - 1];
    const g = genreByKey(last.genre);
    html += '<div class="card"><h2><span class="ico">🎉</span>' + t('pub.lastGame') + '</h2>' +
      '<div class="row-item"><div class="r-ico">' + g.icon + '</div><div class="r-main">' +
        '<div class="r-title">' + escapeHtml(last.name) + ' <span class="pill good">' + t('port.quality') + ' ' + last.quality + '</span></div>' +
        '<div class="r-sub">' + t('port.dl') + ': ' + fmt(last.downloads) + ' · ' + t('port.rev') + ': ' + money(last.totalRevenue) + '</div>' +
      '</div></div></div>';
  }

  return html;
}

/* ---------------------------------------------------------------- studio */
function renderStudio() {
  let html = '<div class="card"><h2><span class="ico">👥</span>' + t('studio.staff') + '</h2><p class="sub">' + t('studio.staffSub') + '</p>';

  html += STAFF.map(s => {
    const owned = state.staff[s.key] || 0;
    const cost = hireCost(s);
    const can = state.money >= cost;
    return '<div class="row-item">' +
      '<div class="r-ico">' + s.icon + '</div>' +
      '<div class="r-main">' +
        '<div class="r-title">' + t('staff.' + s.key) + ' <span class="pill">' + t('studio.owned', { n: owned }) + '</span></div>' +
        '<div class="r-sub">' + t('staff.' + s.key + '.d') + ' · ' + t('studio.salary', { s: money(s.salary) }) + '</div>' +
      '</div>' +
      '<div class="r-right"><button class="btn sm primary" data-action="hire" data-staff="' + s.key + '"' + (can ? '' : ' disabled') + '>' +
        '+ ' + money(cost) + '</button></div>' +
    '</div>';
  }).join('');
  html += '</div>';

  html += '<div class="card"><h2><span class="ico">🔬</span>' + t('studio.upgrades') + '</h2><p class="sub">' + t('studio.upgradesSub') + '</p>';
  html += UPGRADES.map(u => {
    const lvl = state.upgrades[u.key] || 0;
    const maxed = lvl >= u.max;
    const cost = upgradeCost(u);
    const can = !maxed && state.money >= cost;
    return '<div class="row-item">' +
      '<div class="r-ico">' + u.icon + '</div>' +
      '<div class="r-main">' +
        '<div class="r-title">' + t('upg.' + u.key) + ' <span class="pill blue">' + t('upg.level', { n: lvl, m: u.max }) + '</span></div>' +
        '<div class="r-sub">' + t('upg.' + u.key + '.d') + '</div>' +
      '</div>' +
      '<div class="r-right"><button class="btn sm ' + (maxed ? 'ghost' : 'primary') + '" data-action="buyUpgrade" data-upg="' + u.key + '"' + (can ? '' : ' disabled') + '>' +
        (maxed ? t('upg.maxed') : money(cost)) + '</button></div>' +
    '</div>';
  }).join('');
  html += '</div>';

  html += '<div class="card"><h2><span class="ico">📣</span>' + t('studio.marketing') + '</h2>';
  if (state.marketingCampaign && state.marketingCampaign.daysLeft > 0) {
    html += '<div class="note good">' + t('studio.campaignActive', { d: state.marketingCampaign.daysLeft }) + '</div>';
  }
  const canCamp = !state.marketingCampaign && state.money >= CAMPAIGN_COST;
  html += '<button class="btn primary block" data-action="startCampaign"' + (canCamp ? '' : ' disabled') + '>' +
    '📢 ' + t('studio.campaign') + ' — ' + t('studio.campaignCost', { c: money(CAMPAIGN_COST) }) + '</button>';
  if (state.marketingCampaign) html += '<div class="note warn" style="margin-top:10px">' + t('studio.campaignRunning') + '</div>';
  html += '</div>';

  return html;
}

/* -------------------------------------------------------------- portfolio */
function renderPortfolio() {
  let html = '<div class="card"><h2><span class="ico">📦</span>' + t('port.title') + '</h2>';
  if (!state.portfolio.length) {
    html += '<div class="empty"><span class="big">🗂️</span>' + t('port.empty') + '</div>';
  } else {
    html += state.portfolio.slice().reverse().map(g => {
      const gen = genreByKey(g.genre);
      const dead = g.dailyDl <= 0;
      return '<div class="row-item">' +
        '<div class="r-ico">' + gen.icon + '</div>' +
        '<div class="r-main">' +
          '<div class="r-title">' + escapeHtml(g.name) + ' <span class="pill ' + (g.quality >= 60 ? 'good' : g.quality >= 35 ? 'warn' : 'bad') + '">' + t('port.quality') + ' ' + g.quality + '</span></div>' +
          '<div class="r-sub">' + t('port.pubDay', { d: g.publishedDay }) + ' · ' + t('port.dl') + ': ' + fmt(g.downloads) + ' · ' + t('port.rev') + ': ' + money(g.totalRevenue) + '</div>' +
        '</div>' +
        '<div class="r-right"><span class="pill ' + (dead ? '' : 'blue') + '">' + (dead ? t('port.dead') : t('port.daily', { n: fmt(g.dailyDl) })) + '</span></div>' +
      '</div>';
    }).join('');
  }
  html += '</div>';
  return html;
}

/* --------------------------------------------------------------- settings */
function renderSettings() {
  let html = '<div class="card"><h2><span class="ico">⚙️</span>' + t('set.title') + '</h2>';

  html += '<label class="field">' + t('set.language') + '</label>' +
    '<select id="langSelect">' +
      '<option value="en"' + (state.lang === 'en' ? ' selected' : '') + '>English</option>' +
      '<option value="tr"' + (state.lang === 'tr' ? ' selected' : '') + '>Türkçe</option>' +
    '</select>';

  html += '<div style="margin-top:16px"><label class="field">' + t('set.sound') + '</label>' +
    '<button class="btn ' + (state.sound ? 'primary' : '') + '" data-action="toggleSound">' +
      (state.sound ? '🔊 ' + t('set.on') : '🔇 ' + t('set.off')) + '</button></div>';

  html += '</div>';

  html += '<div class="card"><h2><span class="ico">💾</span>' + t('set.data') + '</h2><p class="sub">' + t('set.autosave') + '</p>' +
    '<div class="btn-row">' +
      '<button class="btn primary" data-action="saveGame">💾 ' + t('set.save') + '</button>' +
      '<button class="btn" data-action="loadGame">📂 ' + t('set.load') + '</button>' +
      '<button class="btn bad" data-action="resetGame">🗑️ ' + t('set.reset') + '</button>' +
    '</div></div>';

  html += '<div class="card"><h2><span class="ico">ℹ️</span>' + t('set.about') + '</h2>' +
    '<p class="sub" style="margin-bottom:0">' + t('set.aboutText') + '</p></div>';

  return html;
}

/* --------------------------------------------------------------- escapes */
function escapeHtml(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}
function escapeAttr(s) { return escapeHtml(s); }

/* --------------------------------------------------------------- actions */
function handleAction(action, el) {
  if (action === 'gotoDevelop') {
    state.tab = 'develop'; Sfx.click(); render(); return;
  }
  if (action === 'nextDay') { Sfx.click(); nextDay(); return; }
  if (action === 'pickGenre') {
    state.pendingGenre = el.dataset.genre; Sfx.click(); render(); return;
  }
  if (action === 'createProject') { createProject(); return; }
  if (action === 'doAction') { doProjectAction(el.dataset.act); return; }
  if (action === 'submitGame') { submitGame(); return; }
  if (action === 'abandonProject') { confirmAbandon(); return; }
  if (action === 'resubmitGame') { resubmitGame(); return; }
  if (action === 'hire') { hireStaff(el.dataset.staff); return; }
  if (action === 'buyUpgrade') { buyUpgrade(el.dataset.upg); return; }
  if (action === 'startCampaign') { startCampaign(); return; }
  if (action === 'toggleSound') {
    state.sound = !state.sound;
    if (state.sound) { Sfx.init(); Sfx.good(); }
    save(); render(); return;
  }
  if (action === 'saveGame') {
    if (save()) { Sfx.cash(); toast(t('set.saved'), 'good'); }
    render(); return;
  }
  if (action === 'loadGame') {
    const loaded = load();
    if (loaded) {
      state = loaded;
      Sfx.good(); toast(t('set.loaded'), 'good'); render();
    } else {
      toast(t('set.noSave'), 'bad');
    }
    return;
  }
  if (action === 'resetGame') { confirmReset(); return; }
}

/* --------------------------------------------------------- create project */
function createProject() {
  const input = $('#gameName');
  const name = (input ? input.value : state.pendingName || '').trim();
  if (!name) { Sfx.bad(); toast(t('dev.needName'), 'bad'); return; }
  state.project = {
    name: name.slice(0, 28),
    genre: state.pendingGenre || 'arcade',
    graphics: 5,
    gameplay: 5,
    bugs: 0,
    testing: 0,
    progress: 0,
    dayStarted: state.day,
    rejection: null
  };
  state.pendingName = '';
  Sfx.buy();
  note('📦 ' + name + ' — ' + t('dev.title'), '');
  checkAchievements();
  save();
  render();
}

/* -------------------------------------------------------- project action */
function doProjectAction(key) {
  const p = state.project;
  if (!p) return;
  const def = ACTIONS.find(a => a.key === key);
  if (!def) return;
  const cost = actionCost(def);
  if (state.money < cost) { Sfx.bad(); toast(t('toast.notEnough'), 'bad'); return; }

  state.money -= cost;
  p.progress += def.progress || 0;
  if (def.gameplay) p.gameplay = clamp(p.gameplay + def.gameplay, 0, 100);
  if (def.graphics) p.graphics = clamp(p.graphics + def.graphics, 0, 100);
  if (def.testing)  p.testing  = clamp(p.testing + def.testing, 0, 100);
  if (def.bugs)     p.bugs     = Math.max(0, p.bugs + def.bugs);

  Sfx.click();
  save();
  render();
}

/* --------------------------------------------------------------- abandon */
function confirmAbandon() {
  showModal({
    icon: '🗑️',
    title: t('dev.abandon'),
    body: t('dev.abandonQ'),
    buttons: [
      { label: t('ev.decline'), kind: 'ghost' },
      { label: t('ev.yes'), kind: 'bad', onClick() {
        state.project = null;
        Sfx.bad(); save(); render();
      } }
    ]
  });
}

/* ---------------------------------------------------------------- submit */
function submitGame() {
  const p = state.project;
  if (!p) return;
  if (p.progress < 100 || p.testing < 50) return;
  state.review = { project: p, daysLeft: randInt(1, 2) };
  state.project = null;
  state.tab = 'publish';
  Sfx.buy();
  note('📤 ' + p.name + ' → review', '');
  save();
  render();
}

function resubmitGame() {
  const p = state.project;
  if (!p || !p.rejection) return;
  if (state.money < RESUBMIT_COST) { Sfx.bad(); toast(t('toast.notEnough'), 'bad'); return; }
  state.money -= RESUBMIT_COST;
  p.rejection = null;
  state.review = { project: p, daysLeft: 1 };
  state.project = null;
  state.tab = 'publish';
  Sfx.buy();
  save();
  render();
}

/* ------------------------------------------------------------ resolution */
function resolveReview() {
  const r = state.review;
  if (!r) return;
  const p = r.project;
  state.review = null;

  const q = qualityOf(p);
  let reason = null;

  if (p.bugs > 12) reason = 'bugs';
  else if (p.testing < 45) reason = 'testing';
  else if (q < 20) reason = 'quality';
  else if (Math.random() < 0.12) reason = pick(['random', 'policy']);

  if (reason) {
    p.rejection = reason;
    state.project = p;
    state.rejections += 1;
    Sfx.bad();
    note('❌ ' + p.name + ' — ' + t('reason.' + reason), 'bad');
    state.tab = 'publish';
    showModal({
      icon: '📨',
      title: t('pub.rejectTitle'),
      body: '<b>' + escapeHtml(p.name) + '</b><br><br>' + t('reason.' + reason) + '<br><br>' + t('pub.fixHint'),
      buttons: [{ label: t('ev.ok'), kind: 'primary' }]
    });
    return;
  }

  publishGame(p);
}

function publishGame(p) {
  const q = qualityOf(p);
  const g = genreByKey(p.genre);
  const trendBoost = state.trend.genre === p.genre ? 1.5 : 1.0;
  const communityBoost = 1 + 0.10 * state.upgrades.community;

  let baseDl = (30 + q * 3 + state.reputation * 1.5) * g.pop * trendBoost * communityBoost;
  baseDl = Math.max(5, Math.round(baseDl));

  const game = {
    id: 'g' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
    name: p.name,
    genre: p.genre,
    quality: Math.round(q),
    graphics: Math.round(p.graphics),
    gameplay: Math.round(p.gameplay),
    bugs: p.bugs,
    downloads: 0,
    totalRevenue: 0,
    dailyDl: baseDl,
    publishedDay: state.day
  };

  state.portfolio.push(game);
  state.publishedCount += 1;
  state.reputation += Math.round(2 + q / 25);

  Sfx.good();
  note('✅ ' + p.name + ' — ' + t('pub.approved'), 'good');
  toast(t('toast.published', { n: p.name }), 'good');

  showModal({
    icon: '🎉',
    title: t('pub.approved'),
    body: '<b>' + escapeHtml(p.name) + '</b><br><br>' +
      t('port.quality') + ': <b>' + Math.round(q) + '</b><br>' +
      t('port.daily', { n: fmt(baseDl) }) + '<br><br>' +
      'Nobody can find it in search, but it exists.',
    buttons: [{ label: t('ev.ok'), kind: 'primary' }]
  });

  checkAchievements();
  save();
  render();
}

/* ---------------------------------------------------------------- hiring */
function hireStaff(key) {
  const def = STAFF.find(s => s.key === key);
  if (!def) return;
  const cost = hireCost(def);
  if (state.money < cost) { Sfx.bad(); toast(t('toast.notEnough'), 'bad'); return; }
  state.money -= cost;
  state.staff[key] = (state.staff[key] || 0) + 1;
  Sfx.buy();
  toast(t('toast.hired'), 'good');
  checkAchievements();
  save();
  render();
}

function buyUpgrade(key) {
  const def = UPGRADES.find(u => u.key === key);
  if (!def) return;
  const lvl = state.upgrades[key] || 0;
  if (lvl >= def.max) { toast(t('toast.maxed'), 'warn'); return; }
  const cost = upgradeCost(def);
  if (state.money < cost) { Sfx.bad(); toast(t('toast.notEnough'), 'bad'); return; }
  state.money -= cost;
  state.upgrades[key] = lvl + 1;
  Sfx.buy();
  toast(t('toast.bought'), 'good');
  save();
  render();
}

function startCampaign() {
  if (state.marketingCampaign) { toast(t('studio.campaignRunning'), 'warn'); return; }
  if (state.money < CAMPAIGN_COST) { Sfx.bad(); toast(t('toast.notEnough'), 'bad'); return; }
  state.money -= CAMPAIGN_COST;
  state.marketingCampaign = { daysLeft: 5 };
  Sfx.buy();
  toast(t('toast.campaign'), 'good');
  save();
  render();
}

/* ---------------------------------------------------------------- reset */
function confirmReset() {
  showModal({
    icon: '⚠️',
    title: t('set.reset'),
    body: t('set.resetQ'),
    buttons: [
      { label: t('ev.decline'), kind: 'ghost' },
      { label: t('ev.yes'), kind: 'bad', onClick() {
        const lang = state.lang;
        const sound = state.sound;
        try { localStorage.removeItem(SAVE_KEY); } catch (e) {}
        state = freshState();
        state.lang = lang;
        state.sound = sound;
        save();
        toast(t('set.resetDone'), 'good');
        render();
      } }
    ]
  });
}

/* ------------------------------------------------------------ random event */
function fireRandomEvent() {
  if (modalOpen) return;
  if (Math.random() > 0.34) return;
  const pool = EVENTS.filter(e => true);
  const total = pool.reduce((s, e) => s + (e.weight || 1), 0);
  let r = Math.random() * total;
  let chosen = pool[0];
  for (const e of pool) {
    r -= (e.weight || 1);
    if (r <= 0) { chosen = e; break; }
  }
  showEvent(chosen);
}

function showEvent(ev) {
  const title = ev.t[state.lang] || ev.t.en;
  const body = ev.b[state.lang] || ev.b.en;

  if (ev.choices && ev.choices.length) {
    showModal({
      icon: '📰',
      title: title,
      body: body,
      buttons: ev.choices.map(c => ({
        label: c.l[state.lang] || c.l.en,
        kind: 'primary',
        onClick() {
          c.apply(state);
          state.money = Math.max(0, state.money);
          state.reputation = Math.max(0, state.reputation);
          note(title + ' — ' + (c.l[state.lang] || c.l.en), '');
          checkAchievements();
          save();
          render();
        }
      }))
    });
  } else {
    showModal({
      icon: '📰',
      title: title,
      body: body,
      buttons: [{
        label: t('ev.ok'),
        kind: 'primary',
        onClick() {
          ev.apply(state);
          state.money = Math.max(0, state.money);
          state.reputation = Math.max(0, state.reputation);
          note(title, '');
          checkAchievements();
          save();
          render();
        }
      }]
    });
  }
}

/* -------------------------------------------------------------- next day */
function nextDay() {
  if (modalOpen) return;

  state.day += 1;

  /* --- income from portfolio --- */
  let income = 0;
  const campMult = (state.marketingCampaign && state.marketingCampaign.daysLeft > 0) ? 1.6 : 1;
  const analyticsMult = 1 + 0.10 * state.upgrades.analytics;
  const marketerMult = 1 + 0.05 * (state.staff.marketing || 0);

  for (const g of state.portfolio) {
    const gen = genreByKey(g.genre);
    const dl = Math.max(0, Math.round(g.dailyDl * campMult * marketerMult));
    g.downloads += dl;
    state.totalDownloads += dl;
    const rev = dl * 0.10 * gen.revMul * analyticsMult;
    g.totalRevenue += rev;
    income += rev;
    g.dailyDl = Math.max(0, Math.round(g.dailyDl * 0.86));
  }

  /* --- expenses --- */
  let expenses = BASE_RENT;
  for (const s of STAFF) expenses += s.salary * (state.staff[s.key] || 0);

  state.money += income - expenses;
  state.lastReport = { income: income, expenses: expenses };

  if (state.money < 0) {
    state.money = 0;
    note(t('toast.broke'), 'bad');
  }

  /* --- staff passive work --- */
  if (state.project) {
    const p = state.project;
    if (state.staff.dev) {
      p.gameplay = clamp(p.gameplay + 1 * state.staff.dev, 0, 100);
      p.progress += 2 * state.staff.dev;
    }
    if (state.staff.artist) {
      p.graphics = clamp(p.graphics + 1 * state.staff.artist, 0, 100);
      p.progress += 2 * state.staff.artist;
    }
    if (state.staff.tester) {
      p.bugs = Math.max(0, p.bugs - 1 * state.staff.tester);
    }
  }

  /* --- marketing campaign countdown --- */
  if (state.marketingCampaign) {
    state.marketingCampaign.daysLeft -= 1;
    if (state.marketingCampaign.daysLeft <= 0) state.marketingCampaign = null;
  }

  /* --- market trend --- */
  state.trend.daysLeft -= 1;
  if (state.trend.daysLeft <= 0) {
    const opts = GENRES.filter(g => g.key !== state.trend.genre);
    state.trend.genre = pick(opts).key;
    state.trend.daysLeft = randInt(10, 16);
  }

  /* --- competitor slowly grows --- */
  state.competitor.downloads += randInt(800, 4000);

  /* --- review resolution --- */
  if (state.review) {
    state.review.daysLeft -= 1;
    if (state.review.daysLeft <= 0) {
      resolveReview();
    }
  }

  /* --- safety net --- */
  if (state.money < 10) {
    const gig = 12;
    state.money += gig;
    toast(t('toast.freelance', { c: money(gig) }), 'warn');
    note(t('toast.freelance', { c: money(gig) }), '');
  }

  if (income > 0) toast(t('toast.income', { c: money(income) }), 'good');

  checkAchievements();

  /* --- random event --- */
  fireRandomEvent();

  save();
  render();
}

/* --------------------------------------------------------- achievements */
function checkAchievements() {
  for (const a of ACHIEVEMENTS) {
    if (!state.achievements.includes(a.key) && a.cond(state)) {
      state.achievements.push(a.key);
      toast('🏆 ' + t('toast.ach', { n: t('ach.' + a.key) }), 'good');
      note('🏆 ' + t('ach.' + a.key), 'good');
      Sfx.good();
    }
  }
}

/* -------------------------------------------------------------- bootstrap */
function bindGlobalEvents() {
  // Tab navigation + view delegation
  const tabsEl = $('#tabs');
  if (tabsEl) {
    tabsEl.addEventListener('click', e => {
      const btn = e.target.closest('[data-tab]');
      if (!btn) return;
      state.tab = btn.dataset.tab;
      Sfx.click();
      render();
    });
  }

  const viewEl = $('#view');
  if (viewEl) {
    viewEl.addEventListener('click', e => {
      const btn = e.target.closest('[data-action]');
      if (!btn || btn.disabled) return;
      handleAction(btn.dataset.action, btn);
    });

    viewEl.addEventListener('input', e => {
      if (e.target && e.target.id === 'gameName') {
        state.pendingName = e.target.value;
      }
    });

    viewEl.addEventListener('change', e => {
      if (e.target && e.target.id === 'langSelect') {
        state.lang = e.target.value === 'tr' ? 'tr' : 'en';
        save();
        Sfx.click();
        render();
      }
    });
  }

  const footEl = $('#foot');
  if (footEl) {
    footEl.addEventListener('click', e => {
      const btn = e.target.closest('[data-action]');
      if (!btn || btn.disabled) return;
      handleAction(btn.dataset.action, btn);
    });
  }

  // Unlock audio on the first real gesture
  document.addEventListener('pointerdown', function once() {
    Sfx.init();
    document.removeEventListener('pointerdown', once);
  }, { once: true });

  // Keyboard shortcut: Space / Enter advances the day when nothing is focused
  document.addEventListener('keydown', e => {
    if (modalOpen) return;
    const tag = (document.activeElement && document.activeElement.tagName) || '';
    if (tag === 'INPUT' || tag === 'SELECT' || tag === 'TEXTAREA') return;
    if (e.key === 'n' || e.key === 'N') { e.preventDefault(); nextDay(); }
  });
}

function init() {
  const loaded = load();
  state = loaded || freshState();

  if (!I18N[state.lang]) state.lang = 'en';
  if (typeof state.sound !== 'boolean') state.sound = true;

  bindGlobalEvents();
  checkAchievements();
  render();

  if (!loaded) {
    setTimeout(() => {
      showModal({
        icon: '🎮',
        title: t('app.name'),
        body: t('dash.noProjectHint') + '<br><br>' + t('dash.repLine'),
        buttons: [{ label: t('ev.ok'), kind: 'primary' }]
      });
    }, 350);
  }
}

// Save on exit
window.addEventListener('beforeunload', () => { if (state) save(); });

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
