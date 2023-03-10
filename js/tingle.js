const authorBtn = document.querySelector('#a-authors'),
      literatureBtn = document.querySelector('#a-literature'),
      glossaryBtn = document.querySelector('#a-glossary'),
      modal = document.querySelector('.modalMenu'),
      overlay = document.getElementById('overlay'),
      closeBtn = document.querySelector('.tingle-modal__close')


authorBtn.addEventListener('click', () => {
  overlay.style.display = 'flex'

    modal.style.display = 'block'
    modal.innerHTML = `
        <div class="tingle-modal-box__content"><div id="authors">
        <p class="caption">Автор</p>
        <hr>
        <div class="row">
        <div class="col text-center">
            <p><strong class="name">Ақажанова Алмагүл Аманжолқызы</strong> – п.ғ.м., аға оқытушы<i class="status"><i></i></i></p><i class="status"><i>
        </i></i></div><i class="status"><i>
        </i></i></div><i class="status"><i>
        </i></i></div><i class="status"><i>
        </i></i></div>
        `
})

overlay.addEventListener('click', e => {
  
  if (e.target.classList.contains('overlay')) {
    overlay.style.display = 'none'

    modal.style.display = 'none'
    modal.innerHTML = '' 
  }

})

literatureBtn.addEventListener('click', () => {
    overlay.style.display = 'flex'

    modal.style.display = 'block'
    modal.innerHTML = `
    <div id="literature">
    <p class="caption">Пайдалынған әдебиеттер</p>
    <hr>
    <div class="col list">
      <p><b>Негізгі:</b></p>
      <p>1. Ғ.К.Резуанова, А.А.Ақажанова. Қазақ тілі оқу-әдістемелік кешен.
      С.Сейфуллин атындағы ҚАТУ баспасы, Астана, 2017 ж.</p>
      <p>2. Ақпарат дереккөзі: <a href="https://massaget.kz/mangilik_el/shanyirak/salt-
      dastur/45734/">https://massaget.kz/mangilik_el/shanyirak/salt-
      dastur/45734/</a></p>
      <p>3. Бала тәрбиесіндегі отбасы дәстүрлерінің маңызы. <a href="http://startinfo.kz/buisness/bala-tarbiesi-
      otbacu/">http://startinfo.kz/buisness/bala-tarbiesi-
      otbacu/</a></p>
      <p>4. <a href="https://special-edu.kz/TEXTBOOKS/3RAZDEL/book/5.1.2/files/basic
      html/page225.html">https://special-edu.kz/TEXTBOOKS/3RAZDEL/book/5.1.2/files/basic
      html/page225.html</a></p>
      <p>5. <a href="https://bilimdiler.kz/kazakh_tili/7123-kazak-teatrlary.html">https://bilimdiler.kz/kazakh_tili/7123-kazak-teatrlary.html</a></p>
      <p>6. Қазақ тілі оқу құралы техникалық жоғары оқу орындарының студенттеріне
      арналған К.О.Жекеева – Алматы: АЭжБУ, 20149. – 85-б</p>
      <p>7. <a href="https://ust.kz/w ord/">https://ust.kz/w ord/</a></p>
      <p>8. Қ.Ж.Серғазина, Ж.А.Құсайынова. Қазақ тілі ОӘК«С.Сейфуллин атындағы
      Қазақ агротехникалық университеті» АҚ баспасы 2012 жыл</p>
      <p>9. <a href="http://www.altyn-orda.kz/">http://www.altyn-orda.kz/</a></p>
    </div>
  </div>
    `
})

glossaryBtn.addEventListener('click', () => {
  overlay.style.display = 'flex'

    modal.style.display = 'block'
    modal.innerHTML = `
    <div id="json-glossary">
    <p class="caption">Глоссарий</p>
    <hr>
    <div class='wrapper'>
      <p style='text-indent: 3%'><strong>Қазақ тілі</strong> – Қазақстан Республикасының мемлекеттік тілі.</p>
      <p style='text-indent: 3%'><strong>Мемлекеттiк тiл</strong> – мемлекеттiң бүкiл аумағында қоғамдық қатынастардың
      барлық саласында қолданылатын мемлекеттiк басқару, заң шығару, сот iсiн
      жҥргiзу және iс қағаздарын жүргiзу тiлi.</p>
      <p style='text-indent: 3%'><strong>Қазақ тілі</strong> – Қазақстан Республикасында тілдердің
      қолданылуының құқықтық негіздерін, оларды оқып-үйрену мен дамыту үшін
      жағдай жасау жөніндегі міндеттерді белгілеуде ҚР Конституциясына негізделген
      заң.
      </p>
      <p style='text-indent: 3%'><strong>«Тіл туралы» Заң</strong> – Қазақстан Республикасының мемлекеттік тілі.</p>
      <p style='text-indent: 3%'><strong>Қазақ тілі</strong> – адамның заңды міндеттері мен бостандықтары,
      сонымен қатар мемлекеттің әр адамның мемлекеттік оқу орындарында тегін орта
      білім алуына кепілдік беретін әлеуметтік және мәдени құқық.
      </p>
      <p style='text-indent: 3%'><strong>Білім алу құқығы</strong> – адамның заңды міндеттері мен бостандықтары,
      сонымен қатар мемлекеттің әр адамның мемлекеттік оқу орындарында тегін орта
      білім алуына кепілдік беретін әлеуметтік және мәдени құқық.</p>
      <p style='text-indent: 3%'><strong>Отбасы</strong> – бірлесіп күн көретін туыстық қатынаста тұратын адамдар тобы.
      Балалар тәрбиесін жүзеге асырып, басқа да қоғамдық тұрғыдан мәнді
      кажеттіліқтерді қанағаттандыратын некелік немесе туыстық қатынастармен
      байланысқан адамдар тобы. Отбасының маңызды сипаты - оның қызметі,
      құрылымы және динамикасы болып табылады.</p>
      <p style='text-indent: 3%'><strong>Отан, туған өлке</strong> – Адам үшін туған жерден артық ешнәрсе жоқ. Туған жер
      деп адам өзінің туып-өскен жерін айтады. Туған жер ұғымы – кең ұғым. Бұл
      ұғымға туған үйің, туған ауылың, туған қалаң жатады. Қазақ халқында туған жер
      мен туған ел, Отан деген түсініктер бір-бірінен бөлінбейтін ұғымдар.</p>
      <p style='text-indent: 3%'><strong>Баспана</strong> – адам тұратын үй, жай, қалқа немесе басқа архитектуалық
      құрылыс, ғимарат.
      </p>
      <p style='text-indent: 3%'><strong>Киіз үй </strong> – Орталық және Орта Азия халықтарының негізгі баспанасы,
      Орталық және Орта Азия халықтарының көшпелі тұрғын үйі. Ол -
      көшпенділердің тез жығып, шапшаң тігуге, яғни көшіп-қонуға ыңғайлы үйі.</p>
      <p style='text-indent: 3%'><strong>Мінез-құлық</strong> – адамның тұрақты психикалық ерекшеліктерінің
      жиынтығы. Мінез-құлық тірі организмнің барлығына ортақ қасиет. Оның басты
      белгісі – тіршілік иесінің қимыл-қозғалысының түрлі деңгейдегі көріністері.</p>
      <p style='text-indent: 3%'><strong>Келбет</strong> – 1) бет-әлпет, пішін, түр-тұлға, кескін, мүсін
      2) ауыспалы поэтикалық, көркемдік мағынада қолданылғанда
      бейнелік ұғым. Мысалы, өмір келбеті, сұлулық келбеті, ел келбеті. Бірақ,
      мұндағы келбет жай ғана бейне ұғымында емес – көркем, көрікті, сымбатты,
      ажарлы бейне ұғымында қолданылады.</p>
      <p style='text-indent: 3%'><strong>Қасиет</strong> – адамның не бір заттың өзіне тән сапалық болмысын, ерекшелігін
      айқындайтын ұғым.
      1) Адам бойындағы қасиет жағымды және жағымсыз болып
      жіктеледі. Жағымды қасиеттер (имандылық, инабаттылық, ізеттілік,
      адамгершілік, ар-абырой, адалдық пен әділеттілік, т.б.)
      2) Объектілердің немесе энергияның белгілі бір әсер еткен немесе
      өзара әсер еткен жағдайлар байқалатын сандық немесе сапалық сипаттамасы.</p>
      <p style='text-indent: 3%'><strong>Атаққұмарлық</strong> немесе <strong>амбиция</strong> – адам бойындағы мансапқа, даңққа
      қызығушылық, өркөкіректік пен өзімшілдік қасиет. Мансап құмарлыққа ұқсас.
      Атақ құмарлыққа шалдыққан адам өз бойындағы іскерлік, білімділік,
      парасаттылық қабілеттерінің бар-жоғымен санаспай, қалайда жоғары атаққа,
      лауазымды қызметке қол жеткізуді мақсат тұтады. Ол қызметі мен беделі жоғары
      адамдар алдында өзін өзгелерден ерекше көрсету үшін жағымпаздық жасайды.
      Көңіліне ұнамаған адамдар жайында өтірік-өсек тарату арқылы күншілдік пен
      қызғаншақтық көрсетеді.
      </p>
      <p style='text-indent: 3%'><strong>Амбиция</strong> – өзін-өзі сүю, өзіне сенушілік, басқа адамдарға деген жағымсыз
      қатынас, олардың күші мен жағдайларына сенбеушіліктің күшеюі. Амбиция
      адамдардың жанұяда, ұжымында қатынастарын қиындатады.
      </p>
      <p style='text-indent: 3%'><strong>Уақыт</strong> – өлшемдер жүйесінің оқиғаларды реттеу, олардың ұзақтығын және
      араларындағы интервалдарын сипаттауда, және нәрселердің қозғалысын
      сипаттауда пайдаланатын маңызды мүшесі.
      </p>
      <p style='text-indent: 3%'><strong>Қолөнер</strong> – қолданбалы өнер – дәстүрлі тұтыну және сәндік бұйымдарын
      жасайтын ұсақ өндіріс. Қолөнершілер негізінен табиғи шикізаттарды
      пайдаланып, қарапайым еңбек құралдарының көмегімен көркем композицияның
      шешімімен тұрмысқа қажетті мүліктер, музыкалық аспаптар, қару-жарақ, құралсаймандар жасайды. Әрбір қолөнер туындысы өз заманының материалдық
      мәдениетінің үлгісі және халық талғамының, әлеуметтік қоғамдық жағдайының,
      діни сенімінің, салт-дәстүрінің нақтылы көрінісі.</p>
      <p style='text-indent: 3%'><strong>Кино</strong> – (гр. kіneo – жылжытамын, жылжимын), кино өнері – өнердің бір
      саласы, кинематографияның техникалық негізде қалыптасқан көркем
      шығармашылық түрі.</p>
      <p style='text-indent: 3%'><strong>Театр</strong> – (грекше theatron – ойын-сауық орны; ойын-сауық) – сахналық
      өнердің өмір көріністерін драмалық әрекет арқылы көрермендердің көз алдында
      актерлер күшімен бейнелейтін бір түрі; ойын-сауық немесе спектакль; түрлі
      сахналық ойын-сауықтар, сонымен қатар жалпы мәдени шаралар өткізілетін
      орын-жай.</p>
      <p style='text-indent: 3%'><strong>Экология</strong> – тірі организмдер мен оның қауымдастығының өзара және
      қоршаған ортамен өзара әрекеттестігі туралы ғылым. Экология – гректің "ЭкоОйкос" деген сөзінен шыққан, үй, бізді қоршаған орта, біз өмір сүретін айнала
      деген ұғымды білдіреді.
      </p>
      <p style='text-indent: 3%'><strong>Ұлттық саябақ</strong> –  елімізде қорғалатын ландшафтылардың жаңа түрі. Олар
      әлі де толық өріс алып, дами қойған жоқ. Мұның қорықтардан айырмашылығы -
      туристер мен тынығушылардың кіріп көруіне рұқсат етіледі. Бірақ олардан
      табиғатты қорғау ретін сақтау талап етіледі. Қазақстанда 5 саябақ
      ұйымдастырылған.</p>
      <p style='text-indent: 3%'><strong>Университет</strong> – жаратылыстану, қоғамдық, техникалық, әлеуметтік
      ғылымдар саласынан кең көлемде жоғары білімді мамандар даярлайтын,
      көп салалы жоғары оқу орны.</p>
      <p style='text-indent: 3%'><strong>Қоғам</strong> – жалпы мағынасында, мәдениеті ортақ, белгілі бір аумақта тұратын
      және өздерін біртұтас, өзгеше бірлестік деп білетін адамдар тобы; тар
      мағынасында бұрыннан немесе жақсы танымал ұлттық бірлестік.</p>
      <p style='text-indent: 3%'><strong>Білім</strong> – адамдардың белгілі бір жүйедегі ұғымдарының, деректері мен
      пайымдауларының, т.б. жиынтығы. Білім адамзат мәдениетінің ең ауқымды
      ұғымдарының бірі болып табылады.</p>
    </div>
  </div>
    `
})

closeBtn.addEventListener('click', () => {
  overlay.style.display = 'none'

    modal.style.display = 'none'
    modal.innerHTML = ''
})
