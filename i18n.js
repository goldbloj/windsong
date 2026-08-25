(function () {
  'use strict';

  var LANG_KEY = 'windsong-lang';
  var THEME_KEY = 'windsong-theme';

  /** @type {Record<string, { en: string, hi: string }>} */
  var WINDSONG_I18N = {
    'page.title': {
      en: 'Windsong — Human Conditions',
      hi: 'विंडसॉन्ग — ह्यूमन कंडिशन्स',
    },
    'ui.langSwitchToHi': {
      en: 'Switch to Hindi',
      hi: 'हिन्दी में बदलें',
    },
    'ui.langSwitchToEn': {
      en: 'Switch to English',
      hi: 'अंग्रेज़ी में बदलें',
    },
    'theme.toLight.aria': {
      en: 'Switch to light mode',
      hi: 'हल्के मोड पर जाएँ',
    },
    'theme.toDark.aria': {
      en: 'Switch to dark mode',
      hi: 'गहरे मोड पर जाएँ',
    },
    'theme.toLight.title': {
      en: 'Light mode',
      hi: 'हल्का मोड',
    },
    'theme.toDark.title': {
      en: 'Dark mode',
      hi: 'गहरा मोड',
    },
    'aria.windsongInstagram': {
      en: 'Windsong on Instagram',
      hi: 'इंस्टाग्राम पर विंडसॉन्ग',
    },
    'aria.spotify': {
      en: 'Windsong on Spotify',
      hi: 'स्पॉटिफ़ाई पर विंडसॉन्ग',
    },
    'aria.appleMusic': {
      en: 'Windsong on Apple Music',
      hi: 'ऐपल म्यूज़िक पर विंडसॉन्ग',
    },
    'aria.humanConditionsSpotify': {
      en: 'Human Conditions on Spotify',
      hi: 'स्पॉटिफ़ाई पर ह्यूमन कंडिशन्स',
    },
    'alt.albumLogo': {
      en: 'Windsong — Human Conditions',
      hi: 'विंडसॉन्ग — ह्यूमन कंडिशन्स',
    },
    'alt.udaySitting': {
      en: 'Uday sitting, contemplative',
      hi: 'बैठे हुए उदय, चिंतनशील',
    },
    'alt.brandonPiano': {
      en: 'Brandon at the piano',
      hi: 'पियानो पर ब्रैंडन',
    },
    'alt.udayGuitar': {
      en: 'Uday playing guitar',
      hi: 'गिटार बजाते उदय',
    },
    'alt.brandonRecording': {
      en: 'Brandon recording vocals',
      hi: 'वोकल रिकॉर्ड करते ब्रैंडन',
    },
    'alt.filmmakerDog': {
      en: 'Filmmaker with dog during recording sessions',
      hi: 'रिकॉर्डिंग सत्र के दौरान कुत्ते के साथ फ़िल्मकार',
    },
    'alt.udayFriend': {
      en: 'Uday with friend',
      hi: 'दोस्त के साथ उदय',
    },
    'alt.udaySmiling': {
      en: 'Uday smiling',
      hi: 'मुस्कुराते उदय',
    },
    'alt.windsongWordmark': {
      en: 'Windsong',
      hi: 'विंडसॉन्ग',
    },
    'bio.intro': {
      en:
        '<em class="band-name">WINDSONG</em> is a Nashville-based indie folk band with roots in rock, blues and gospel music. Their first album “Human Conditions” was released in 2026. Uday Sehgal and Brandon Alexander — both addicts in recovery — founded the group after becoming friends at treatment in Tennessee. In an effort to heal, they began playing music together every night on the back patio of Windsong, the rehab house where they met and roomed together.',
      hi:
        '<em class="band-name">WINDSONG</em> नैशविले स्थित एक इंडी बैंड है जिसकी जड़ें रॉक, ब्लूज़, गॉस्पेल और शास्त्रीय संगीत में हैं। इनका पहला एल्बम “Human Conditions” 2026 में जारी हुआ। उदय सहगल और ब्रैंडन अलेक्ज़ेंडर — दोनों नशे से उबर रहे हैं — ने टेनेसी में इलाज के दौरान दोस्त बनने के बाद इस समूह की नींव रखी। ठीक होने की कोशिश में उन्होंने हर रात साथ में संगीत बजाना शुरू किया, विंडसॉन्ग के पिछले आँगन पर, उसी रिहैब घर में जहाँ वे मिले और साथ रहे।',
    },
    'bio.uday': {
      en:
        '<strong class="name">UDAY SEHGAL</strong> is an entrepreneur with a background in hotels, film and music. He was raised in Chicago, IL and grew up playing guitar in bands through high school and college. He began writing songs at 18 years old.',
      hi:
        '<strong class="name">UDAY SEHGAL</strong> उद्यमी हैं; होटल, फ़िल्म और संगीत में उनका पृष्ठभूमि अनुभव है। उनका पालन-पोषण शिकागो, इलिनॉय में हुआ और हाई स्कूल व कॉलेज के दौरान उन्होंने बैंडों में गिटार बजाया। 18 साल की उम्र में उन्होंने गाने लिखने शुरू किए। उदय ने नॉर्थवेस्टर्न विश्वविद्यालय में गणित का अध्ययन किया।',
    },
    'bio.brandon': {
      en:
        '<strong class="name">BRANDON ALEXANDER</strong> grew up in Nashville, TN. He was first exposed to music through church — playing piano, organ, and singing in the choir. Brandon went on to study at Fisk University, and was a member of the prestigious Fisk Jubilee Singers.',
      hi:
        '<strong class="name">BRANDON ALEXANDER</strong> का बचपन नैशविले, टेनेसी में बीता। संगीत से पहली बार चर्च में मुठभेड़ हुई — पियानो, ऑर्गन और गायक दल में गाना। ब्रैंडन ने फिस्क विश्वविद्यालय में पढ़ाई की और प्रतिष्ठित फिस्क जुबिली सिंगर्स के सदस्य रहे। वे अपनी प्यारी पत्नी के कृतज्ञ पति हैं और अपनी 4 साल की बेटी के गर्वित पिता हैं।',
    },
    'bio.savanna': {
      en:
          '<strong class="name">SAVANNA SMITH</strong> is a classically trained vocalist with extensive choir and ensemble experience.',
      hi:
          '<strong class="name">SAVANNA SMITH</strong> वह शास्त्रीय संगीत में प्रशिक्षित गायिका हैं और उन्हें गायन मंडली और समूह गायन का व्यापक अनुभव है।',
    },
    'bio.lacy': {
      en:
          '<strong class="name">LACY ROSTYAK</strong> is a conservatory-trained concert violinist featuring collaborations alongside Shania Twain, Deadmau5 and Dua Lipa.',
      hi:
          '<strong class="name">LACY ROSTYAK</strong> कंज़र्वेटरी-प्रशिक्षित कॉन्सर्ट वायलिनिस्ट हैं; शेनिया ट्वेन और डेडमाउ5 के साथ रिकॉर्डिंग का अनुभव है।',
    },
    'bio.john': {
      en:
        '<strong class="name">JOHN MASON</strong> is a session bass player and has toured with Darius Rucker for 18 years.',
      hi:
        '<strong class="name">JOHN MASON</strong> सेशन बास वादक हैं और 18 वर्षों से डेरियस रकर के साथ टूर कर चुके हैं।',
    },
    'bio.joe': {
      en:
        '<strong class="name">JOE TRAVERS</strong> plays drums and won a Grammy for live performance with the Zappa Band. He also toured with Joe Satriani and Duran Duran.',
      hi:
        '<strong class="name">JOE TRAVERS</strong> ड्रम बजाते हैं और ज़ैपा बैंड के साथ लाइव प्रदर्शन के लिए ग्रैमी जीत चुके हैं। उन्होंने जो सैट्रियानी और ड्यूरन ड्यूरन के साथ भी टूर किया है।',
    },
    'bio.jeff': {
      en:
        '<strong class="name">JEFF KITE</strong> is a producer, guitar and keyboard player who tours with The Voidz (Julian Casablanca) and Cigarettes After Sex.',
      hi:
        '<strong class="name">JEFF KITE</strong> निर्माता, गिटार और कीबोर्ड वादक हैं; द वॉइड्ज़ (जूलियन कैसाब्लांका) और सिगरेट्स आफ्टर सेक्स के साथ टूर करते हैं।',
    },
    'tracks.heading': {
      en: 'Track List Stories',
      hi: 'ट्रैक सूची की कहानियाँ',
    },
    'track.sunrise.title': { en: 'Sunrise-', hi: 'सनराइज़-' },
    'track.sunrise.body': {
      en:
        "My parents were raised in an ashram, a spiritual community in southern india, founded by Sri Aurobindo and Mira Alfassa, also known as The Mother. They wrote volumes on the nature of man, evolution of consciousness, integral yoga, and spiritual life. One of the seminal works is called 'The Life Divine' which I've always been drawn to. My folks later immigrated to Chicago, where my brother and I were born and raised. I was given the name Uday, by the ashram's caretaker, which in Sanskrit translates to sunrise.",
      hi:
        'मेरे माता-पिता दक्षिण भारत में श्री अरविंदो और मीरा अल्फासा (द मदर) द्वारा स्थापित एक आश्रम, एक आध्यात्मिक समुदाय में पले-बढ़े। उन्होंने मनुष्य के स्वरूप, चेतना के विकास, अभिन्न योग और आध्यात्मिक जीवन पर कई ग्रंथ लिखे। एक मौलिक रचना “द लाइफ डिवाइन” कहलाती है, जिसकी ओर मैं हमेशा खिंचा चला आया। बाद में मेरे लोग शिकागो चले गए, जहाँ मेरा भाई और मैं पैदा हुए और पले-बढ़े। आश्रम के प्रबंधक ने मुझे उदय नाम दिया, जो संस्कृत में सूर्योदय का अर्थ देता है।',
    },
    'track.weAreThrough.title': { en: 'We Are Through-', hi: 'वी आर थ्रू-' },
    'track.weAreThrough.body': {
      en:
        "I was diagnosed with bipolar II twenty years ago, and later developed a substance use disorder. After treatments and relapses, I have tried and failed my way to a clean healthy daily life. They are both progressive illnesses, that is, things tend to get worse over time — if you don't get better first. I came to characterize my addiction as the manifestation of a toxic relationship. Starts good, ends bad, and ultimately a radioactive way to cope. I can't quite compare the experience to anything else — the chaos and destruction of being brought to your knees by a drug. I wrote this to remind myself of the nature of the beast, who patiently waits at the door.",
      hi:
        'बीस साल पहले मुझे बाइपोलर II का पता चला, और बाद में पदार्थ उपयोग विकार विकसित हुआ। इलाज और लौटने के बाद, मैंने साफ़ स्वस्थ दैनिक जीवन की ओर कोशिश की और गिरा। दोनों प्रगतिशील बीमारियाँ हैं—यानी समय के साथ चीज़ें बिगड़ती जाती हैं—जब तक पहले बेहतर न हो जाओ। मैंने अपने नशे को एक विषैले रिश्ते के प्रकटीकरण जैसा देखा। शुरुआत अच्छी, अंत बुरा, और अंततः सामना करने का एक विकिरणीय तरीका। इस अनुभव की तुलना किसी और से कर पाना मुश्किल है—किसी दवा के सामने घुटने टेकने का अव्यवस्था और विनाश। मैंने यह खुद को उस “जानवर” की प्रकृति याद दिलाने के लिए लिखा, जो धैर्यपूर्वक दरवाज़े पर इंतज़ार करता है।',
    },
    'track.free.title': { en: 'Free-', hi: 'फ़्री-' },
    'track.free.body': {
      en:
        "My many experiences with depression have more in common than apart, characterized largely by an absolute eradication of my own will — to move, think, feel, or consider a future. That which you need most in the moment, is exactly what is not available. There is no ability to recognize a way forward, much less any point. I have noticed however, this too does pass. And what lies on the other side, once the pain becomes your ally, may actually be worth the walk.",
      hi:
        'अवसाद के साथ मेरे कई अनुभव अलग होने से ज़्यादा एक जैसे हैं—खासकर अपनी इच्छा का पूरी तरह समाप्त हो जाना—चलने, सोचने, महसूस करने या भविष्य की कल्पना करने की। जिस चीज़ की उस पल सबसे ज़्यादा ज़रूरत होती है, वही उपलब्ध नहीं होती। आगे का रास्ता पहचानने की क्षमता नहीं होती, ढंग से कोई मतलब तो दूर की बात है। फिर भी मैंने देखा है, यह भी गुज़र जाता है। और दूसरी तरफ जो है, जब दर्द आपका साथी बन जाता है, शायद चलना सचमुच लायक़ हो।',
    },
    'track.awake.title': { en: 'Awake-', hi: 'अवेक-' },
    'track.awake.body': {
      en:
        'It is said the final step of recovery is a spiritual awakening. I am looking forward to that moment. Truly on the edge of my seat.',
      hi:
        'कहा जाता है कि रिकवरी का अंतिम चरण आध्यात्मिक जागरण है। मैं उस पल का इंतज़ार कर रहा हूँ। सचमुच कुर्सी के किनारे पर बैठा हूँ।',
    },
    'track.hardWayHome.title': { en: 'Hard Way Home-', hi: 'हार्ड वे होम-' },
    'track.hardWayHome.body': {
      en:
        'I met Baker in treatment, we happened to cross over on both of our stays. He suffered intense early age trauma, and grew up in an environment of drug abuse. Baker regularly cut school in favor of the skate park, and on certain occasions, a jail cell. After a long journey, he is living a clean life for the first time. He likes to write poetry as his creative outlet, and provided these lyrics for me, as a record of his struggle.',
      hi:
        'मैं बेकर से इलाज के दौरान मिला; हमारे दोनों ठहरने में समय मिला। उन्होंने बचपन में गहरा आघात झेला, और नशे के माहौल में पले। बेकर अक्सर स्कूल छोड़कर स्केट पार्क जाते, कभी-कभी जेल की कोठरी में। लंबे सफर के बाद वे पहली बार साफ़ जीवन जी रहे हैं। रचनात्मक बहाव के लिए वे कविता लिखना पसंद करते हैं, और मुझे ये बोल दिए—अपने संघर्ष की दस्तावेज़ी के रूप में।',
    },
    'track.lindaLee.title': { en: 'Linda Lee-', hi: 'लिंडा ली-' },
    'track.lindaLee.body': {
      en:
        "My first experience with tragedy and loss was in high school. One of my best friends was out driving late at night with his mother, a vibrant and caring single mom of two. They got into a car crash, which she did not survive. It is one of those moments that still occurs in slow motion for me, with profound emotion, and gut wrenching to this day. I wrote the song when I was 18. It is dedicated to the incredibly loving memory of Linda Lee Lawrence.",
      hi:
        'दुःख और खो का मेरा पहला अनुभव हाई स्कूल में हुआ। मेरे एक घनिष्ठ मित्र रात देर से अपनी माँ के साथ गाड़ी चला रहे थे—दो बच्चों की जीवंत और देखभाल करने वाली एकल माँ। कार दुर्घटना हुई, जिसमें वे नहीं बचीं। वह क्षण आज भी धीमी गति में चलता है, गहरी भावना के साथ, और आज तक पेट में मरोड़। मैंने 18 साल की उम्र में गाना लिखा। यह लिंडा ली लॉरेंस की अद्भुत प्यारी याद को समर्पित है।',
    },
    'track.closeYourEyes.title': { en: 'Close Your Eyes-', hi: 'क्लोज़ योर आइज़-' },
    'track.closeYourEyes.body': {
      en:
        "I have a tight group of friends from growing up together. One of them is named Scott, a loving father of three, and an avid enthusiast of the Chicago Cubs and early 90's hip hop. After a high conflict divorce, job loss and subsequent battles with intense depression, Scott took his life. It was Thanksgiving day, just hours after we all were together with him. It is a very painful pill to swallow, in part, as it happened on our watch. The song is called 'close your eyes' — I would like to say it's a celebration of Scott, but in truth, it is an expression of pain and absence.",
      hi:
        'साथ बड़े होने से मेरा एक घना दोस्त समूह है। उनमें से एक स्कॉट है—तीन बच्चों का प्यार करने वाला पिता, शिकागो कब्स और 90 के दशक की शुरुआती हिप-हॉप का उत्साही प्रशंसक। तीखे तलाक़, नौकरी जाने और गहरे अवसाद की लड़ाइयों के बाद स्कॉट ने अपनी जान ले ली। थैंक्सगिविंग का दिन था, कुछ घंटे बाद जब हम सब उसके साथ थे। इसे निगलना बहुत दर्दनाक है—कुछ हद तक इसलिए कि यह हमारी निगरानी में हुआ। गाने का नाम “close your eyes” है—मैं कहना चाहूँ कि यह स्कॉट का उत्सव है, पर सच तो यह है कि यह दर्द और अनुपस्थिति की अभिव्यक्ति है।',
    },
    'track.hisLoveIsKind.title': { en: 'His Love is Kind-', hi: 'हिज़ लव इज़ काइन्ड-' },
    'track.hisLoveIsKind.body': {
      en:
        "My best friend from childhood is named Linda. We grew up together on the same street, would constantly walk around the mall, and talk on the phone even after we'd just been hanging out doing nothing. As we moved through high school and college, and she formed relationships with guys that I felt to be under-qualified for the position, she knew where I stood. Then she met Zac, her now husband, and the father of their two boys. He and I always got along great, several shared interests, particularly we both love Linda. Zac has always been kind, friendly, authentic; and extremely hospitable. We wrote this one for him. He, even while battling ALS, is the most courageous guy I know.",
      hi:
        'बचपन की मेरी सबसे अच्छी दोस्त का नाम लिंडा है। हम एक ही गली में बड़े हुए, मॉल में घूमते रहते, और कुछ न करने के बाद भी फ़ोन पर बात करते। हाई स्कूल और कॉलेज के दौरान जब उसने ऐसे लड़कों से रिश्ते बनाए जिन्हें मैं “पद” के लिए कमज़ोर समझता था, वह जानती थी मैं कहाँ खड़ा हूँ। फिर उसकी मुलाक़ात ज़ैक से हुई—अब उसके पति और दो बेटों के पिता। हम दोनों हमेशा अच्छे से मिले, कई रुचियाँ साझा, खासकर हम दोनों लिंडा से प्यार करते हैं। ज़ैक हमेशा दयालु, मित्रवत, सच्चे और बेहद मेहमाननवाज़ रहे। हमने यह उनके लिए लिखा। ALS से जूझते हुए भी वे मेरे जानने में सबसे बहादुर इंसान हैं।',
    },
    'film.intro': {
      en:
        'A feature documentary detailing the recording sessions, song backstories, and interview footage will be released on Apple TV in November 2026.',
      hi:
        'रिकॉर्डिंग सत्रों, गानों की पृष्ठभूमि और इंटरव्यू फुटेज पर आधारित एक फ़ीचर डॉक्यूमेंटरी फ़िल्म अभी पोस्ट-प्रोडक्शन में है—अगस्त 2026 में रिलीज़ की तारीख है। फ़िल्म का निर्माण CLJ Films ने किया है और निर्देशन जोसेफ़ गार्नर (Joker, Joker 2) का है।',
    },
    'film.logline': {
      en:
        '<em>Logline</em>: Two addicts meet in treatment, start writing music together, and record an album to explore the roots of pain and healing.',
      hi:
        '<em>लॉगलाइन</em>: दो नशेड़ी इलाज में मिलते हैं, साथ में संगीत लिखना शुरू करते हैं, और दर्द और उपचार की जड़ों को खोजने के लिए एक एल्बम रिकॉर्ड करते हैं।',
    },
  };

  function stripTags(s) {
    return String(s).replace(/<[^>]*>/g, '');
  }

  function t(key, lang) {
    var row = WINDSONG_I18N[key];
    if (!row) return '';
    return row[lang] || row.en || '';
  }

  function applyI18n(lang) {
    var root = document.documentElement;
    root.setAttribute('data-lang', lang);
    root.setAttribute('lang', lang === 'hi' ? 'hi' : 'en');
    try {
      localStorage.setItem(LANG_KEY, lang);
    } catch (e) {}

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var attr = el.getAttribute('data-i18n-attr');
      if (!key || !WINDSONG_I18N[key]) return;
      var val = t(key, lang);
      if (attr) {
        el.setAttribute(attr, stripTags(val));
      } else {
        el.innerHTML = val;
      }
    });

    document.title = t('page.title', lang);

    refreshLangToggleChrome(lang);

    refreshThemeChrome(lang);
  }

  function refreshLangToggleChrome(lang) {
    var btn = document.getElementById('lang-toggle');
    if (!btn) return;
    var next = lang === 'en' ? 'hi' : 'en';
    var key = next === 'hi' ? 'ui.langSwitchToHi' : 'ui.langSwitchToEn';
    var label = t(key, lang);
    btn.setAttribute('aria-label', label);
    btn.setAttribute('title', stripTags(label));
  }

  function refreshThemeChrome(lang) {
    var root = document.documentElement;
    var btn = document.getElementById('theme-toggle');
    if (!btn) return;
    var dark = root.getAttribute('data-theme') === 'dark';
    btn.setAttribute(
      'aria-label',
      dark ? t('theme.toLight.aria', lang) : t('theme.toDark.aria', lang)
    );
    btn.setAttribute('title', dark ? t('theme.toLight.title', lang) : t('theme.toDark.title', lang));
  }

  function applyTheme(theme) {
    var root = document.documentElement;
    root.setAttribute('data-theme', theme);
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch (e) {}
    var btn = document.getElementById('theme-toggle');
    if (btn) {
      var dark = theme === 'dark';
      btn.setAttribute('aria-pressed', dark ? 'true' : 'false');
    }
    var lang = root.getAttribute('data-lang') === 'hi' ? 'hi' : 'en';
    refreshThemeChrome(lang);
  }

  function init() {
    var root = document.documentElement;
    var lang = root.getAttribute('data-lang') === 'hi' ? 'hi' : 'en';
    applyI18n(lang);

    var langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
      langBtn.addEventListener('click', function () {
        var cur = root.getAttribute('data-lang') === 'hi' ? 'hi' : 'en';
        applyI18n(cur === 'en' ? 'hi' : 'en');
      });
    }

    var themeBtn = document.getElementById('theme-toggle');
    var currentTheme = root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
    applyTheme(currentTheme);
    if (themeBtn) {
      themeBtn.addEventListener('click', function () {
        applyTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();






const menuToggle = document.getElementById("menu-toggle");
const siteNavLinks = document.getElementById("site-nav-links");

if (menuToggle && siteNavLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.classList.toggle("is-open");

    siteNavLinks.classList.toggle("is-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
    );
  });

  siteNavLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.classList.remove("is-open");
      siteNavLinks.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
    });
  });
}
