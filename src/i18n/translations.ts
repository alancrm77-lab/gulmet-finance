import type { LangCode, Translation } from "./types";

// Copy preserved verbatim from the original Claude Design prototype so the
// four-language content stays byte-for-byte identical to what the user approved.
export const translations: Record<LangCode, Translation> = {
  en: {
    nav: { home: "Home", about: "About", services: "Services", contact: "Contact", cta: "Book a Consultation", role: "Financial Professional" },
    hero: {
      eyebrow: "Seattle · Financial Professional",
      title: "Building lasting financial confidence for your family.",
      subtitle: "I help families, professionals, and business owners protect what matters most and plan for a secure future — with trusted guidance in your language.",
      ctaPrimary: "Book a Consultation", ctaSecondary: "Explore Services",
      langsLabel: "I advise clients in", location: "Based in Seattle, WA",
    },
    servicesIntro: { eyebrow: "What I Do", title: "Comprehensive guidance for every stage of life", subtitle: "Four core areas of expertise, tailored to your goals and your family's future." },
    services: [
      { name: "Life Insurance", short: "Protect your loved ones with coverage built around your family's needs and budget.", long: "The right life insurance gives your family financial security if the unexpected happens. I help you choose term, whole, or universal coverage that fits your stage of life and budget — so the people you love are always protected.", points: ["Term, whole & universal life options", "Coverage matched to your budget", "Protection for income, mortgage & education"] },
      { name: "Long-Term Wealth Planning", short: "A clear, personalized roadmap to grow and preserve your wealth over time.", long: "Wealth doesn't happen by accident — it's planned. Together we build a long-term strategy that grows your assets, reduces risk, and keeps your goals on track through every market and life change.", points: ["Personalized financial roadmap", "Goal-based saving strategies", "Regular reviews as life evolves"] },
      { name: "Retirement & Annuities", short: "Create dependable income you won't outlive, so you can retire with confidence.", long: "Retirement should be the reward for a lifetime of work. I help you turn savings into reliable, guaranteed income through annuities and retirement strategies designed to last as long as you do.", points: ["Guaranteed lifetime income options", "Tax-efficient retirement strategies", "Income that lasts a lifetime"] },
      { name: "Investments & Wealth Management", short: "Strategies aligned with your goals, your comfort with risk, and your time horizon.", long: "Smart investing balances growth with peace of mind. I build and manage a diversified strategy aligned with your goals and risk comfort — and adjust it as markets and your life change.", points: ["Diversified, goal-aligned portfolios", "Risk managed to your comfort", "Ongoing guidance & rebalancing"] },
    ],
    why: {
      eyebrow: "Why Work With Me", title: "A trusted advisor who speaks your language", subtitle: "More than products — a partner invested in your family's future.",
      points: [
        { title: "Guidance in your language", desc: "English, Russian, Turkish, and Turkmen — clear advice with no translation barriers." },
        { title: "A personal, long-term partnership", desc: "I take time to understand your goals and stay with you as life changes." },
        { title: "Backed by a trusted institution", desc: "As a financial professional with New York Life, I offer proven products and lasting stability." },
        { title: "Clarity over jargon", desc: "Complex decisions explained simply, so you always feel in control." },
      ],
    },
    about: {
      eyebrow: "About", title: "Meet Gulmet Kulmedov", role: "Financial Professional · Seattle",
      lead: "A Seattle–based financial professional helping families, professionals, and business owners build security and lasting wealth — in the language they're most comfortable speaking.",
      body1: "For me, financial planning is personal. Having served a diverse, multilingual community, I understand that real guidance starts with truly listening — to your goals, your worries, and the future you want for your family.",
      body2: "As a financial professional with New York Life, I combine the strength and stability of a trusted institution with a hands-on, relationship-first approach. Whether you're protecting your family, planning for retirement, or growing your wealth, I'm here for the long term.",
      focusTitle: "Areas of focus", langTitle: "Languages I speak", valuesTitle: "What I value",
      values: ["Trust earned over time", "Honest, jargon-free advice", "Your family's future, first"],
    },
    contact: {
      eyebrow: "Contact", title: "Let's plan your future together", subtitle: "Reach out for a complimentary, no-pressure consultation. I'll respond within one business day.",
      detailsTitle: "Get in touch", emailLabel: "Email", phoneLabel: "Phone", officeLabel: "Office", hoursLabel: "Hours", hoursValue: "Mon–Fri · 9:00–18:00 ET\nEvenings & weekends by appointment", followLabel: "Follow",
      form: { name: "Full name", email: "Email address", phone: "Phone (optional)", topic: "What can I help with?", topicOptions: ["Life Insurance", "Wealth Planning", "Retirement & Annuities", "Investments", "Something else"], message: "Your message", submit: "Request Consultation", sending: "Sending…", success: "Thank you — your request has been received. I'll be in touch within one business day.", error: "Something went wrong sending your message. Please try again, or email me directly." },
    },
    ctaBand: { title: "Ready to take the next step?", subtitle: "Schedule a free, no-obligation consultation today.", button: "Book a Consultation" },
    footer: { tagline: "Financial guidance for families and businesses — in your language.", contactTitle: "Contact", followTitle: "Follow", rights: "© 2026 Gulmet Kulmedov. All rights reserved.", disclaimer: "Gulmet Kulmedov is a financial professional based in Seattle. This website is for informational purposes only and does not constitute financial, tax, or legal advice. Contact details shown are placeholders." },
  },

  ru: {
    nav: { home: "Главная", about: "Обо мне", services: "Услуги", contact: "Контакты", cta: "Записаться", role: "Финансовый консультант" },
    hero: {
      eyebrow: "Сиэтл · Финансовый консультант",
      title: "Уверенность в финансовом будущем вашей семьи.",
      subtitle: "Помогаю семьям, специалистам и владельцам бизнеса защитить самое важное и спланировать надёжное будущее — на вашем родном языке.",
      ctaPrimary: "Записаться на консультацию", ctaSecondary: "Наши услуги",
      langsLabel: "Консультирую на языках", location: "Сиэтл, США",
    },
    servicesIntro: { eyebrow: "Чем я занимаюсь", title: "Комплексное сопровождение на каждом этапе жизни", subtitle: "Четыре направления экспертизы под ваши цели и будущее вашей семьи." },
    services: [
      { name: "Страхование жизни", short: "Защитите близких с программой, подобранной под нужды и бюджет вашей семьи.", long: "Правильное страхование жизни обеспечивает финансовую защиту вашей семьи в непредвиденных ситуациях. Я помогу выбрать срочную, пожизненную или универсальную программу, подходящую вашему этапу жизни и бюджету.", points: ["Срочное, пожизненное и универсальное", "Покрытие под ваш бюджет", "Защита дохода, ипотеки и образования"] },
      { name: "Долгосрочное планирование", short: "Чёткий персональный план для роста и сохранения вашего капитала.", long: "Благосостояние не возникает случайно — его планируют. Вместе мы построим долгосрочную стратегию, которая приумножает активы, снижает риски и удерживает ваши цели на курсе.", points: ["Персональная стратегия", "Накопления под цели", "Регулярный пересмотр плана"] },
      { name: "Пенсия и аннуитеты", short: "Создайте надёжный доход на всю жизнь и выходите на пенсию уверенно.", long: "Пенсия должна быть наградой за годы труда. Я помогу превратить накопления в надёжный гарантированный доход с помощью аннуитетов и пенсионных стратегий.", points: ["Гарантированный пожизненный доход", "Налогово-эффективные стратегии", "Доход на всю жизнь"] },
      { name: "Инвестиции и управление капиталом", short: "Стратегии, соответствующие вашим целям, отношению к риску и горизонту планирования.", long: "Разумные инвестиции сочетают рост и спокойствие. Я создаю и сопровождаю диверсифицированную стратегию, соответствующую вашим целям и допустимому риску.", points: ["Диверсифицированный портфель", "Управление риском", "Сопровождение и ребалансировка"] },
    ],
    why: {
      eyebrow: "Почему я", title: "Надёжный консультант, который говорит на вашем языке", subtitle: "Больше, чем продукты — партнёр, заинтересованный в будущем вашей семьи.",
      points: [
        { title: "Консультации на вашем языке", desc: "Английский, русский, турецкий и туркменский — понятные советы без языковых барьеров." },
        { title: "Личное долгосрочное партнёрство", desc: "Я вникаю в ваши цели и сопровождаю вас по мере изменений в жизни." },
        { title: "Поддержка надёжного института", desc: "Как финансовый консультант New York Life, я предлагаю проверенные продукты и стабильность." },
        { title: "Ясность вместо жаргона", desc: "Сложные решения объясняю простыми словами — вы всегда контролируете ситуацию." },
      ],
    },
    about: {
      eyebrow: "Обо мне", title: "Gulmet Kulmedov", role: "Финансовый консультант · Сиэтл",
      lead: "Финансовый консультант из Сиэтла, помогающий семьям, специалистам и владельцам бизнеса создавать защиту и долгосрочное благосостояние — на удобном для них языке.",
      body1: "Для меня финансовое планирование — это личное. Работая с многоязычным сообществом, я понимаю, что настоящая помощь начинается с умения слушать — ваши цели, тревоги и будущее, которое вы хотите для своей семьи.",
      body2: "Как финансовый консультант New York Life, я сочетаю надёжность проверенного института с личным подходом, где на первом месте — отношения. Защита семьи, подготовка к пенсии или рост капитала — я рядом надолго.",
      focusTitle: "Направления работы", langTitle: "Языки", valuesTitle: "Мои ценности",
      values: ["Доверие, заслуженное временем", "Честные советы без жаргона", "Будущее вашей семьи — прежде всего"],
    },
    contact: {
      eyebrow: "Контакты", title: "Спланируем ваше будущее вместе", subtitle: "Запишитесь на бесплатную консультацию без обязательств. Я отвечу в течение одного рабочего дня.",
      detailsTitle: "Связаться", emailLabel: "Почта", phoneLabel: "Телефон", officeLabel: "Офис", hoursLabel: "Часы", hoursValue: "Пн–Пт · 9:00–18:00 ET\nВечера и выходные — по записи", followLabel: "Соцсети",
      form: { name: "Имя и фамилия", email: "Электронная почта", phone: "Телефон (необязательно)", topic: "С чем помочь?", topicOptions: ["Страхование жизни", "Финансовое планирование", "Пенсия и аннуитеты", "Инвестиции", "Другое"], message: "Ваше сообщение", submit: "Записаться на консультацию", sending: "Отправка…", success: "Спасибо — ваша заявка получена. Я свяжусь с вами в течение одного рабочего дня.", error: "Не удалось отправить сообщение. Попробуйте ещё раз или напишите мне напрямую." },
    },
    ctaBand: { title: "Готовы сделать следующий шаг?", subtitle: "Запишитесь на бесплатную консультацию без обязательств уже сегодня.", button: "Записаться" },
    footer: { tagline: "Финансовое сопровождение семей и бизнеса — на вашем языке.", contactTitle: "Контакты", followTitle: "Соцсети", rights: "© 2026 Gulmet Kulmedov. Все права защищены.", disclaimer: "Гулмет Кулмедов — финансовый консультант из Сиэтла. Сайт носит исключительно информационный характер и не является финансовой, налоговой или юридической консультацией. Контактные данные указаны для примера." },
  },

  tr: {
    nav: { home: "Ana Sayfa", about: "Hakkımda", services: "Hizmetler", contact: "İletişim", cta: "Randevu Alın", role: "Finansal Danışman" },
    hero: {
      eyebrow: "Seattle · Finansal Danışman",
      title: "Aileniz için kalıcı finansal güven inşa ediyorum.",
      subtitle: "Ailelere, profesyonellere ve işletme sahiplerine en değerli varlıklarını korumaları ve güvenli bir gelecek planlamaları için kendi dilinizde rehberlik ediyorum.",
      ctaPrimary: "Danışmanlık Randevusu Alın", ctaSecondary: "Hizmetleri Keşfedin",
      langsLabel: "Danışmanlık verdiğim diller", location: "Seattle, ABD",
    },
    servicesIntro: { eyebrow: "Ne Yapıyorum", title: "Hayatın her aşaması için kapsamlı rehberlik", subtitle: "Hedeflerinize ve ailenizin geleceğine göre uyarlanmış dört uzmanlık alanı." },
    services: [
      { name: "Hayat Sigortası", short: "Sevdiklerinizi, ailenizin ihtiyaç ve bütçesine göre tasarlanmış teminatla koruyun.", long: "Doğru hayat sigortası, beklenmedik durumlarda ailenize finansal güvence sağlar. Yaşam evrenize ve bütçenize uygun süreli, ömür boyu veya üniversal poliçe seçmenize yardımcı olurum — sevdikleriniz her zaman korunsun.", points: ["Süreli, ömür boyu ve üniversal seçenekler", "Bütçenize uygun teminat", "Gelir, konut kredisi ve eğitim koruması"] },
      { name: "Uzun Vadeli Servet Planlaması", short: "Servetinizi zaman içinde büyütmek ve korumak için net, kişiselleştirilmiş bir yol haritası.", long: "Servet tesadüfen oluşmaz — planlanır. Birlikte varlıklarınızı büyüten, riski azaltan ve her piyasa ve yaşam değişiminde hedeflerinizi koruyan uzun vadeli bir strateji oluştururuz.", points: ["Kişiye özel finansal yol haritası", "Hedef odaklı tasarruf stratejileri", "Düzenli gözden geçirmeler"] },
      { name: "Emeklilik ve Anüiteler", short: "Ömür boyu tükenmeyecek güvenilir bir gelir oluşturarak güvenle emekli olun.", long: "Emeklilik, bir ömür boyu çalışmanın ödülü olmalı. Birikimlerinizi, ömrünüz boyunca sürecek şekilde tasarlanmış anüiteler ve emeklilik stratejileriyle güvenilir, garantili gelire dönüştürmenize yardımcı olurum.", points: ["Ömür boyu garantili gelir seçenekleri", "Vergi açısından verimli stratejiler", "Ömür boyu süren gelir"] },
      { name: "Yatırım ve Servet Yönetimi", short: "Hedeflerinize, risk konforunuza ve zaman ufkunuza uygun stratejiler.", long: "Akıllı yatırım, büyüme ile huzuru dengeler. Hedeflerinize ve risk konforunuza uygun çeşitlendirilmiş bir strateji oluşturur, yönetir ve piyasa ile hayatınız değiştikçe güncellerim.", points: ["Çeşitlendirilmiş, hedefe uygun portföyler", "Konforunuza göre risk yönetimi", "Sürekli rehberlik ve yeniden dengeleme"] },
    ],
    why: {
      eyebrow: "Neden Ben", title: "Sizin dilinizi konuşan güvenilir bir danışman", subtitle: "Üründen fazlası — ailenizin geleceğine yatırım yapan bir ortak.",
      points: [
        { title: "Kendi dilinizde rehberlik", desc: "İngilizce, Rusça, Türkçe ve Türkmence — dil engeli olmadan net tavsiye." },
        { title: "Kişisel, uzun vadeli ortaklık", desc: "Hedeflerinizi anlamak için zaman ayırır, hayatınız değiştikçe yanınızda olurum." },
        { title: "Güvenilir bir kurumun desteği", desc: "New York Life finansal danışmanı olarak kanıtlanmış ürünler ve istikrar sunarım." },
        { title: "Jargon yerine netlik", desc: "Karmaşık kararları basitçe açıklarım, böylece kontrol her zaman sizde olur." },
      ],
    },
    about: {
      eyebrow: "Hakkımda", title: "Gulmet Kulmedov", role: "Finansal Danışman · Seattle",
      lead: "Ailelere, profesyonellere ve işletme sahiplerine en rahat konuştukları dilde güvence ve kalıcı servet oluşturmaları için yardımcı olan, Seattle merkezli bir finansal danışman.",
      body1: "Benim için finansal planlama kişiseldir. Çok dilli bir toplulukla çalışarak, gerçek rehberliğin dinlemekle başladığını öğrendim — hedeflerinizi, endişelerinizi ve aileniz için istediğiniz geleceği.",
      body2: "New York Life finansal danışmanı olarak, güvenilir bir kurumun gücünü, ilişkiyi önceleyen kişisel bir yaklaşımla birleştiriyorum. İster ailenizi koruyun, ister emekliliğe hazırlanın, ister servetinizi büyütün — uzun vadede yanınızdayım.",
      focusTitle: "Uzmanlık alanları", langTitle: "Konuştuğum diller", valuesTitle: "Değer verdiklerim",
      values: ["Zamanla kazanılan güven", "Dürüst, jargonsuz tavsiye", "Önce ailenizin geleceği"],
    },
    contact: {
      eyebrow: "İletişim", title: "Geleceğinizi birlikte planlayalım", subtitle: "Ücretsiz, baskısız bir görüşme için bana ulaşın. Bir iş günü içinde yanıt veririm.",
      detailsTitle: "İletişime geçin", emailLabel: "E-posta", phoneLabel: "Telefon", officeLabel: "Ofis", hoursLabel: "Saatler", hoursValue: "Pzt–Cum · 9:00–18:00 ET\nAkşamlar ve hafta sonu randevuyla", followLabel: "Takip",
      form: { name: "Ad soyad", email: "E-posta adresi", phone: "Telefon (isteğe bağlı)", topic: "Nasıl yardımcı olabilirim?", topicOptions: ["Hayat Sigortası", "Servet Planlaması", "Emeklilik ve Anüiteler", "Yatırımlar", "Diğer"], message: "Mesajınız", submit: "Danışmanlık Talep Et", sending: "Gönderiliyor…", success: "Teşekkürler — talebiniz alındı. Bir iş günü içinde sizinle iletişime geçeceğim.", error: "Mesajınız gönderilirken bir hata oluştu. Lütfen tekrar deneyin veya bana doğrudan e-posta gönderin." },
    },
    ctaBand: { title: "Bir sonraki adımı atmaya hazır mısınız?", subtitle: "Bugün ücretsiz, yükümlülüksüz bir görüşme planlayın.", button: "Randevu Alın" },
    footer: { tagline: "Aileler ve işletmeler için finansal rehberlik — kendi dilinizde.", contactTitle: "İletişim", followTitle: "Takip", rights: "© 2026 Gulmet Kulmedov. Tüm hakları saklıdır.", disclaimer: "Gulmet Kulmedov, Seattle merkezli bir finansal danışmandır. Bu web sitesi yalnızca bilgilendirme amaçlıdır; finansal, vergi veya hukuki tavsiye niteliği taşımaz. Gösterilen iletişim bilgileri örnektir." },
  },

  tk: {
    nav: { home: "Baş sahypa", about: "Hakymda", services: "Hyzmatlar", contact: "Habarlaşmak", cta: "Maslahat üçin ýazylıň", role: "Maliýe Geňeşçisi" },
    hero: {
      eyebrow: "Sietl · Maliýe Geňeşçisi",
      title: "Maşgalaňyz üçin uzak möhletli maliýe ynamyny döredýärin.",
      subtitle: "Maşgalalara, hünärmenlere we telekeçilere iň gymmatly zatlaryny goramaga we ygtybarly geljeği meýilleşdirmage öz diliňizde ýardam berýärin.",
      ctaPrimary: "Maslahat üçin ýazylıň", ctaSecondary: "Hyzmatlary görüň",
      langsLabel: "Maslahat berýän dillerim", location: "Sietl, ABŞ",
    },
    servicesIntro: { eyebrow: "Men näme edýärin", title: "Durmuşyň her tapgyry üçin hemmetaraplaýyn maslahat", subtitle: "Maksatlaryňyza we maşgalaňyzyň geljeğine görä uýgunlaşdyrylan dört ugur." },
    services: [
      { name: "Ömür Ätiýaçlandyryşy", short: "Söýgülileriňizi maşgalaňyzyň zerurlyklaryna we býujetine görä düzülen ätiýaçlandyryş bilen goraň.", long: "Dogry ömür ätiýaçlandyryşy garaşylmadyk ýagdaýlarda maşgalaňyza maliýe goragyny berýär. Durmuş tapgyryňyza we býujetiňize laýyk gelýän möhletli, ömürlik ýa-da uniwersal ätiýaçlandyryşy saýlamaga ýardam berýärin.", points: ["Möhletli, ömürlik we uniwersal görnüşler", "Býujetiňize görä gorag", "Girdeýi, ipoteka we bilim goragy"] },
      { name: "Uzak Möhletli Baýlyk Meýilnamasy", short: "Baýlygyňyzy wagtyň dowamynda artdyrmak we gorap saklamak üçin aýdyň, şahsy ýol kartasy.", long: "Baýlyk tötänden döremýär — meýilleşdirilýär. Bilelikde emläkleriňizi artdyrýän, töwekgelçiligi azaldýän we her bazar hem durmuş üýtgemesinde maksatlaryňyzy gorap saklaýän uzak möhletli strategiýa düzýäris.", points: ["Şahsy maliýe ýol kartasy", "Maksada gönükdirilen tygşytlamalar", "Yzygiderli täzeden gözden geçirmek"] },
      { name: "Pensiýa we Annuitetler", short: "Ömrüňiziň ahyryna çenli ýeterlik, ygtybarly girdeýi dörediň we arkaýyn pensiýa çykyň.", long: "Pensiýa ömürboýy zähmetiň sylagy bolmaly. Tygşytlamalaryňyzy ömrüňiziň dowamynda dowam etjek annuitetler we pensiýa strategiýalary arkaly ygtybarly, kepillendirilen girdeýä öwurmage ýardam berýärin.", points: ["Ömürlik kepillendirilen girdeýi", "Salyk taýdan amatly strategiýalar", "Ömrüň dowamynda girdeýi"] },
      { name: "Maýa goýumlary we Baýlyk Dolandyryşy", short: "Maksatlaryňyza, töwekgelçilige garaýşyňyza we wagt çäklerinize laýyk strategiýalar.", long: "Akylly maýa goýum ösüşi rahatlyk bilen deňagramlaşdyrýär. Maksatlaryňyza we töwekgelçilik amatlylygyňyza laýyk dürlüleşdirilen strategiýa döredýärin, dolandyrýäryn we bazar bilen durmuşyňyz üýtgändigiçe sazlaýäryn.", points: ["Dürlüleşdirilen, maksada laýyk portfeller", "Amatlylygyňyza görä töwekgelçilik dolandyryşy", "Yzygiderli maslahat we deňleşdirme"] },
    ],
    why: {
      eyebrow: "Näme üçin men", title: "Siziň diliňizde gepleýän ynamdar geňeşçi", subtitle: "Diňe önüm däl — maşgalaňyzyň geljeğine goşulýän hyzmatdaş.",
      points: [
        { title: "Öz diliňizde maslahat", desc: "Iňlis, rus, türk we türkmen — dil päsgelçiligi bolmazdan aýdyň maslahat." },
        { title: "Şahsy, uzak möhletli hyzmatdaşlyk", desc: "Maksatlaryňyza düşünmek üçin wagt sarp edýärin we durmuşyňyz üýtgändigiçe ýanyňyzda bolýäryn." },
        { title: "Ynamdar edaranıň goldawy", desc: "New York Life maliýe geňeşçisi hökmünde subut edilen önümleri we durnuklylygy hödürlýärin." },
        { title: "žargon däl-de aýdyňlyk", desc: "Çylşyrymly çözgütleri ýönekey düşündirýärin, şonuň üçin gözegçilik elmydama sizde bolýär." },
      ],
    },
    about: {
      eyebrow: "Hakymda", title: "Gulmet Kulmedov", role: "Maliýe Geňeşçisi · Sietl",
      lead: "Maşgalalara, hünärmenlere we telekeçilere iň oňaýly gepleýän dilinde howpsuzlyk we uzak möhletli baýlyk döretmage ýardam berýän, Sietlde ýerleşýän maliýe geňeşçisi.",
      body1: "Meniň üçin maliýe meýilnamasy şahsy zat. Köpdilli jemgyýet bilen işläp, hakyky maslahatyň diňlemekden başlaýandygyna düşündim — maksatlaryňyzy, aladalaryňyzy we maşgalaňyz üçin isleýän geljeğiňizi.",
      body2: "New York Life maliýe geňeşçisi hökmünde ynamdar edaranıň güýjuni gatnaşyga esaslaýän şahsy çemeleşme bilen birleşdirýärin. Maşgalaňyzy goramak, pensiýa taýýarlanmak ýa-da baýlygyňyzy artdyrmak bolsun — men uzak möhletde ýanyňyzda.",
      focusTitle: "Üns berýän ugurlarym", langTitle: "Gepleýän dillerim", valuesTitle: "Gymmat berýän zatlarym",
      values: ["Wagtyň dowamynda gazanylan ynam", "Dogruçyl, žargonsyz maslahat", "Ilki bilen maşgalaňyzyň geljeği"],
    },
    contact: {
      eyebrow: "Habarlaşmak", title: "Geljeğiňizi bilelikde meýilleşdireliň", subtitle: "Mugt, hiç hili borçlanmasyz maslahat üçin ýüz tutuň. Bir iş gününiň dowamynda jogap bererin.",
      detailsTitle: "Habarlaşyň", emailLabel: "E-poçta", phoneLabel: "Telefon", officeLabel: "Ofis", hoursLabel: "Iş wagty", hoursValue: "Duş–Anna · 9:00–18:00 ET\nAgşamlar we dynç günleri ýazgy boýunça", followLabel: "Yzarlaň",
      form: { name: "Ady we familiýasy", email: "E-poçta salgysy", phone: "Telefon (hökman däl)", topic: "Näme bilen kömek edip bilerin?", topicOptions: ["Ömür Ätiýaçlandyryşy", "Baýlyk Meýilnamasy", "Pensiýa we Annuitetler", "Maýa goýumlary", "Başga zat"], message: "Habaryňyz", submit: "Maslahat soramak", sending: "Ugradylýar…", success: "Sag boluň — ýüztutmaňyz kabul edildi. Bir iş gününiň dowamynda siziň bilen habarlaşaryn.", error: "Habaryňyz ugradylanda näsazlyk ýüze çykdy. Täzeden synanyşyň ýa-da maňa göni e-poçta ýazyň." },
    },
    ctaBand: { title: "Indiki ädimi ätmäge taýýarmy?", subtitle: "Şu gün mugt, borçlanmasyz maslahata ýazylyň.", button: "Maslahat üçin ýazylıň" },
    footer: { tagline: "Maşgalalar we işewürlik üçin maliýe maslahaty — öz diliňizde.", contactTitle: "Habarlaşmak", followTitle: "Yzarlamak", rights: "© 2026 Gulmet Kulmedov. Ähli hukuklar goralan.", disclaimer: "Gulmet Kulmedov — Sietlde ýerleşýän maliýe geňeşçisi. Bu web sahypasy diňe maglumat maksatly bolup, maliýe, salgyt ýa-da hukuk maslahaty däldir. Görkezilen habarlaşmak maglumatlary mysal üçindir." },
  },
};
