import Icon from "@/components/ui/icon";

// ─── Реальные фото спецтехники с Unsplash (проверенные ID) ────────────────────
const P = {
  // Экскаватор Liebherr на строительной площадке
  excavator1: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&q=85&fit=crop",
  // Жёлтый экскаватор — крупный план ковша
  excavator2: "https://images.unsplash.com/photo-1572204097183-e1ab140342ed?w=900&q=85&fit=crop",
  // Строительный кран на фоне неба
  crane: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=900&q=85&fit=crop",
  // Самосвал / карьерный грузовик
  truck: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=85&fit=crop",
  // Бульдозер на грунтовой дороге
  bulldozer: "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=900&q=85&fit=crop",
  // Ночная стройка с техникой и освещением
  nightSite: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1400&q=85&fit=crop",
  // Грузовик / тягач крупным планом
  bigTruck: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=900&q=85&fit=crop",
  // Колёсный экскаватор на дороге
  roadWork: "https://images.unsplash.com/photo-1581092916357-16bcb09f87f4?w=900&q=85&fit=crop",
};

// ─── Шеврон-декор ─────────────────────────────────────────────────────────────
const Chevrons = ({ scale = 1, className = "" }: { scale?: number; className?: string }) => (
  <div className={`flex gap-0 ${className}`} style={{ transform: `scale(${scale})`, transformOrigin: "left center" }}>
    {[0, 1, 2].map((i) => (
      <div
        key={i}
        style={{
          width: 28,
          height: 40,
          clipPath: "polygon(0 0, 70% 0, 100% 50%, 70% 100%, 0 100%, 30% 50%)",
          background: i === 1 ? "#FFD600" : i === 0 ? "#c9a800" : "#7a6000",
          marginLeft: i === 0 ? 0 : -8,
        }}
      />
    ))}
  </div>
);

// ─── Жёлтая линия ─────────────────────────────────────────────────────────────
const YLine = ({ w = "100%", className = "" }: { w?: string; className?: string }) => (
  <div style={{ height: 3, width: w, background: "#FFD600" }} className={className} />
);

// ─── Метка раздела ────────────────────────────────────────────────────────────
const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-3 mb-4">
    <Chevrons />
    <h2
      className="uppercase text-yellow-400"
      style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700, fontSize: 22, letterSpacing: "0.1em" }}
    >
      {children}
    </h2>
  </div>
);

// ─── Реальное фото с оверлеем ─────────────────────────────────────────────────
const Photo = ({
  src,
  height = 160,
  position = "center",
  brightness = 0.75,
  label,
}: {
  src: string;
  height?: number;
  position?: string;
  brightness?: number;
  label?: string;
}) => (
  <div className="relative overflow-hidden" style={{ height, border: "1px solid rgba(255,214,0,0.25)" }}>
    <img
      src={src}
      alt=""
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: position,
        filter: `brightness(${brightness}) saturate(0.85)`,
        display: "block",
      }}
    />
    <div
      className="absolute inset-0"
      style={{ background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 55%)" }}
    />
    {label && (
      <div
        className="absolute bottom-2 left-3 text-white uppercase text-xs font-bold"
        style={{ fontFamily: "Oswald, sans-serif", letterSpacing: "0.12em", opacity: 0.9 }}
      >
        {label}
      </div>
    )}
  </div>
);

// ─── Страница А4 ──────────────────────────────────────────────────────────────
const A4 = ({
  children,
  bg,
  bgPos = "center",
  bgBrightness = 0.2,
  className = "",
}: {
  children: React.ReactNode;
  bg?: string;
  bgPos?: string;
  bgBrightness?: number;
  className?: string;
}) => (
  <div
    className={`relative overflow-hidden bg-black shadow-2xl mb-10 flex flex-col ${className}`}
    style={{ width: "210mm", minHeight: "297mm", margin: "0 auto 40px" }}
  >
    {bg && (
      <img
        src={bg}
        alt=""
        className="absolute inset-0 w-full h-full"
        style={{ objectFit: "cover", objectPosition: bgPos, filter: `brightness(${bgBrightness}) saturate(0.6)` }}
      />
    )}
    <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.75) 100%)" }} />
    <div className="relative z-10 flex flex-col flex-1">{children}</div>
  </div>
);

// ─── Нумерованный шаг ─────────────────────────────────────────────────────────
const Step = ({ n, text }: { n: number; text: string }) => (
  <div className="flex items-start gap-3">
    <div
      className="shrink-0 w-8 h-8 flex items-center justify-center text-black font-black text-sm rounded-sm"
      style={{ background: "#FFD600", fontFamily: "Montserrat, sans-serif" }}
    >
      {n}
    </div>
    <p className="text-gray-200 text-sm leading-snug pt-1" style={{ fontFamily: "Roboto Condensed, sans-serif" }}>
      {text}
    </p>
  </div>
);

// ─── Преимущество ─────────────────────────────────────────────────────────────
const Adv = ({ icon, title, text }: { icon: string; title: string; text: string }) => (
  <div className="flex gap-3 items-start">
    <Icon name={icon} size={18} className="text-yellow-400 shrink-0 mt-0.5" fallback="CheckCircle" />
    <div>
      <span className="text-yellow-400 font-bold uppercase text-xs" style={{ fontFamily: "Oswald, sans-serif", letterSpacing: "0.08em" }}>
        {title} —{" "}
      </span>
      <span className="text-gray-300 text-xs leading-snug" style={{ fontFamily: "Roboto Condensed, sans-serif" }}>
        {text}
      </span>
    </div>
  </div>
);

// ═════════════════════════════════════════════════════════════════════════════
export default function Index() {
  return (
    <div className="py-10 px-4" style={{ background: "#0a0a0a", fontFamily: "Montserrat, sans-serif" }}>

      {/* ══════════════════════════════════════════════════════════════
          СТРАНИЦА 1 — ОБЛОЖКА
          Фон: экскаватор Liebherr на стройке
      ══════════════════════════════════════════════════════════════ */}
      <div
        className="relative overflow-hidden shadow-2xl mb-10 flex flex-col"
        style={{ width: "210mm", minHeight: "297mm", margin: "0 auto 40px", background: "#000" }}
      >
        {/* Реальное фото полным фоном */}
        <img
          src={P.excavator1}
          alt="Экскаватор на строительной площадке"
          className="absolute inset-0 w-full h-full"
          style={{ objectFit: "cover", objectPosition: "center 30%", filter: "brightness(0.5) saturate(0.7)" }}
        />
        {/* Затемнение снизу */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.92) 100%)",
          }}
        />
        {/* Жёлтая полоса сверху */}
        <div className="absolute top-0 left-0 right-0" style={{ height: 10, background: "#FFD600", zIndex: 20 }} />

        {/* Контент */}
        <div className="relative z-10 flex flex-col flex-1 px-10">
          {/* Шапка */}
          <div className="flex justify-between items-center pt-10 mb-auto">
            <div
              className="border-2 border-yellow-400 px-4 py-1.5"
              style={{ fontFamily: "Oswald, sans-serif", color: "#FFD600", fontSize: 11, letterSpacing: "0.18em" }}
            >
              МЕСТО ДЛЯ ЛОГОТИПА
            </div>
            <div className="flex items-center gap-3">
              <Chevrons />
              <span style={{ fontFamily: "Oswald, sans-serif", color: "#FFD600", fontSize: 11, letterSpacing: "0.2em" }}>
                МУРМАНСКАЯ ОБЛ.
              </span>
            </div>
          </div>

          {/* Центр — героблок */}
          <div style={{ marginTop: "auto", paddingBottom: 40 }}>
            <div className="flex items-center gap-4 mb-6">
              <YLine w="48px" />
              <span style={{ fontFamily: "Oswald, sans-serif", color: "#FFD600", fontSize: 13, letterSpacing: "0.25em" }}>
                ДИСПЕТЧЕРСКАЯ СЛУЖБА СПЕЦТЕХНИКИ
              </span>
            </div>

            <h1
              className="uppercase text-white"
              style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 900, fontSize: 58, lineHeight: 0.95, letterSpacing: "-0.01em" }}
            >
              Перестань
              <br />
              <span style={{ color: "#FFD600" }}>терять деньги</span>
              <br />
              на простоях
            </h1>

            <p
              className="text-gray-300 mt-6 uppercase"
              style={{ fontFamily: "Roboto Condensed, sans-serif", fontSize: 16, letterSpacing: "0.08em" }}
            >
              Диспетчерская служба с ИИ-технологиями
            </p>

            <div className="flex gap-0 mt-8">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  style={{
                    width: 44,
                    height: 60,
                    clipPath: "polygon(0 0, 70% 0, 100% 50%, 70% 100%, 0 100%, 30% 50%)",
                    background: i === 2 ? "#FFD600" : i === 1 || i === 3 ? "#c9a800" : "#3a2e00",
                    marginLeft: i === 0 ? 0 : -13,
                    opacity: i === 0 || i === 5 ? 0.3 : 1,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Контакты снизу */}
        <div
          className="relative z-10 px-10 py-5 flex justify-between items-center flex-wrap gap-3"
          style={{ borderTop: "3px solid #FFD600", background: "rgba(0,0,0,0.9)" }}
        >
          <div className="flex items-center gap-2">
            <Icon name="Phone" size={16} className="text-yellow-400" />
            <span style={{ fontFamily: "Oswald, sans-serif", color: "white", fontSize: 20, letterSpacing: "0.03em" }}>
              +7 929 184-38-33
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="Mail" size={15} className="text-yellow-400" />
            <span style={{ fontFamily: "Roboto Condensed, sans-serif", color: "#bbb", fontSize: 14 }}>general.51@mail.ru</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="Send" size={15} className="text-yellow-400" />
            <span style={{ fontFamily: "Roboto Condensed, sans-serif", color: "#bbb", fontSize: 14 }}>Telegram: __________</span>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════
          СТРАНИЦА 2 — ПРОБЛЕМА + РЕШЕНИЕ + ФОТОГАЛЕРЕЯ ТЕХНИКИ
      ══════════════════════════════════════════════════════════════ */}
      <div
        className="relative overflow-hidden shadow-2xl mb-10 flex flex-col"
        style={{ width: "210mm", minHeight: "297mm", margin: "0 auto 40px", background: "#080808" }}
      >
        <div className="absolute top-0 left-0 right-0" style={{ height: 8, background: "#FFD600", zIndex: 20 }} />

        <div className="relative z-10 px-10 pt-8 pb-8 flex flex-col gap-6 flex-1">

          {/* ── Заголовок страницы ── */}
          <div className="flex items-center justify-between mb-2">
            <div style={{ fontFamily: "Oswald, sans-serif", color: "#FFD600", fontSize: 11, letterSpacing: "0.2em" }}>
              ДИСПЕТЧЕРСКАЯ СЛУЖБА СПЕЦТЕХНИКИ — МУРМАНСКАЯ ОБЛ.
            </div>
            <div style={{ fontFamily: "Oswald, sans-serif", color: "#555", fontSize: 11 }}>02</div>
          </div>

          {/* ── Галерея реальных фото 3 вида техники ── */}
          <div className="grid grid-cols-3 gap-2">
            <Photo src={P.crane} height={130} label="Краны" position="center top" brightness={0.8} />
            <Photo src={P.truck} height={130} label="Самосвалы" position="center" brightness={0.8} />
            <Photo src={P.bulldozer} height={130} label="Бульдозеры" position="center" brightness={0.8} />
          </div>

          {/* ── Проблема ── */}
          <div>
            <SectionLabel>Узнаёте себя?</SectionLabel>
            <div
              className="relative p-5 border border-gray-800"
              style={{ background: "rgba(255,214,0,0.03)" }}
            >
              <div className="absolute top-0 left-0 bottom-0" style={{ width: 3, background: "#FFD600" }} />
              <p className="text-gray-300 leading-relaxed text-sm pl-1" style={{ fontFamily: "Roboto Condensed, sans-serif" }}>
                Сейчас непростое время: заказы нестабильны, конкуренция растёт, а техника стоит —
                и каждый день простоя{" "}
                <span className="text-yellow-400 font-bold">съедает вашу прибыль</span>. Вы тратите
                часы на поиск работы, ведёте переговоры с сомнительными клиентами, потом контролируете
                оплату и сами готовите кипу документов. В итоге —{" "}
                <span className="text-white font-bold">нервы, простои, упущенная выгода.</span>
              </p>
            </div>
          </div>

          {/* ── Решение ── */}
          <div>
            <SectionLabel>А теперь — другой сценарий</SectionLabel>
            <div
              className="relative p-5 border-2 border-yellow-400"
              style={{ background: "rgba(255,214,0,0.05)" }}
            >
              <div className="absolute top-0 left-0 bottom-0" style={{ width: 3, background: "#FFD600" }} />
              <p className="text-white leading-relaxed text-sm pl-1" style={{ fontFamily: "Roboto Condensed, sans-serif" }}>
                Ваша техника работает{" "}
                <span className="text-yellow-400 font-bold">каждый день</span>, заказы поступают
                стабильно, а всю рутину — поиск, согласование, контроль, документы —{" "}
                <span className="text-yellow-400 font-bold">кто-то берёт на себя</span>. Вы просто
                занимаетесь развитием бизнеса — или отдыхаете, зная, что всё под контролем.
              </p>
            </div>
          </div>

          {/* ── Ещё одно фото — экскаватор на работе ── */}
          <Photo src={P.excavator2} height={120} label="Экскаваторы" position="center 60%" brightness={0.85} />

          {/* ── Преимущества ── */}
          <div>
            <SectionLabel>5 причин работать с нами</SectionLabel>
            <div className="flex flex-col gap-3">
              <Adv icon="Eye" title="Прозрачность" text="Деньги от клиентов идут напрямую на ваш счёт. Мы получаем только своё вознаграждение по договору." />
              <Adv icon="Cpu" title="ИИ-технологии" text="AI-агенты ведут холодный обзвон, обрабатывают заявки, готовят документы — без вашего участия." />
              <Adv icon="Clock" title="Освобождение времени" text="Вы больше не занимаетесь диспетчеризацией — занимайтесь тем, что важно." />
              <Adv icon="Shield" title="Юридическая защита" text="Работаем по договору, защищающему вас от обхода и недобросовестных клиентов." />
              <Adv icon="MapPin" title="70+ населённых пунктов" text="Вся Мурманская область. У нас и партнёров техника всегда в наличии под любой проект." />
            </div>
          </div>
        </div>

        <div className="relative z-10" style={{ height: 8, background: "#FFD600" }} />
      </div>

      {/* ══════════════════════════════════════════════════════════════
          СТРАНИЦА 3 — МОДЕЛИ ОПЛАТЫ + КАК МЫ РАБОТАЕМ
          Фон: ночная стройка
      ══════════════════════════════════════════════════════════════ */}
      <div
        className="relative overflow-hidden shadow-2xl mb-10 flex flex-col"
        style={{ width: "210mm", minHeight: "297mm", margin: "0 auto 40px", background: "#000" }}
      >
        {/* Реальное фото — грузовик */}
        <img
          src={P.bigTruck}
          alt="Грузовая спецтехника"
          className="absolute inset-0 w-full h-full"
          style={{ objectFit: "cover", objectPosition: "center", filter: "brightness(0.22) saturate(0.5)" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, rgba(0,0,0,0.9) 55%, rgba(15,12,0,0.85) 100%)" }}
        />
        <div className="absolute top-0 left-0 right-0" style={{ height: 8, background: "#FFD600", zIndex: 20 }} />

        <div className="relative z-10 px-10 pt-8 pb-6 flex flex-col gap-6 flex-1">

          <div className="flex items-center justify-between mb-2">
            <div style={{ fontFamily: "Oswald, sans-serif", color: "#FFD600", fontSize: 11, letterSpacing: "0.2em" }}>
              ДИСПЕТЧЕРСКАЯ СЛУЖБА СПЕЦТЕХНИКИ — МУРМАНСКАЯ ОБЛ.
            </div>
            <div style={{ fontFamily: "Oswald, sans-serif", color: "#555", fontSize: 11 }}>03</div>
          </div>

          {/* ── Фото дорожных работ ── */}
          <Photo src={P.roadWork} height={110} label="Дорожные работы" position="center" brightness={0.9} />

          {/* ── Модели оплаты ── */}
          <div>
            <SectionLabel>Модели сотрудничества</SectionLabel>
            <div className="grid grid-cols-2 gap-4">
              {/* Комиссионная */}
              <div
                className="relative overflow-hidden p-5"
                style={{ background: "#0d0d0d", border: "2px solid #FFD600" }}
              >
                <div
                  className="text-yellow-400 font-black leading-none mb-1"
                  style={{ fontFamily: "Montserrat, sans-serif", fontSize: 44 }}
                >
                  10%
                </div>
                <div
                  className="text-white font-bold uppercase mb-3 text-xs"
                  style={{ fontFamily: "Oswald, sans-serif", letterSpacing: "0.12em" }}
                >
                  Комиссионная модель
                </div>
                <YLine w="100%" className="mb-3" />
                <p className="text-gray-400 text-xs leading-snug" style={{ fontFamily: "Roboto Condensed, sans-serif" }}>
                  От оборота по каждому заказу, который мы нашли для вас.{" "}
                  <span className="text-white">Нет заказа — нет оплаты.</span> Наша
                  заинтересованность полностью совпадает с вашей.
                </p>
              </div>

              {/* Абонентское */}
              <div
                className="relative overflow-hidden p-5"
                style={{ background: "#FFD600", border: "2px solid #FFD600" }}
              >
                <div
                  className="text-black font-black leading-tight mb-1"
                  style={{ fontFamily: "Montserrat, sans-serif", fontSize: 28 }}
                >
                  от 20 000 ₽
                  <span className="text-lg font-bold"> /мес</span>
                </div>
                <div
                  className="text-black font-bold uppercase mb-3 text-xs"
                  style={{ fontFamily: "Oswald, sans-serif", letterSpacing: "0.12em" }}
                >
                  Абонентское обслуживание
                </div>
                <div className="h-0.5 bg-black opacity-25 mb-3" />
                <p className="text-black text-xs leading-snug" style={{ fontFamily: "Roboto Condensed, sans-serif" }}>
                  Полное управление парком: поиск заказов, планирование графика,
                  координация водителей, контроль, документы.
                </p>
              </div>
            </div>
          </div>

          {/* ── Как мы работаем ── */}
          <div>
            <SectionLabel>Как мы работаем</SectionLabel>
            <div className="flex flex-col gap-3">
              <Step n={1} text="Вы передаёте информацию о вашем парке техники." />
              <Step n={2} text="Мы находим заказы — AI-обзвон, реклама, своя наработанная база клиентов." />
              <Step n={3} text="Организуем выполнение: ставим задачу водителю, контролируем часы работы." />
              <Step n={4} text="Готовим документы — акты, УПД, путевые листы. Вы подписываете готовое." />
              <Step n={5} text="Вы получаете оплату от клиента напрямую на свой расчётный счёт." />
            </div>
          </div>

          {/* ── Фото кран ── */}
          <div className="grid grid-cols-2 gap-2 mt-auto">
            <Photo src={P.crane} height={90} label="Башенные краны" position="center top" brightness={0.85} />
            <Photo src={P.bulldozer} height={90} label="Бульдозеры / планировщики" position="center" brightness={0.85} />
          </div>
        </div>

        <div className="relative z-10" style={{ height: 8, background: "#FFD600" }} />
      </div>

      {/* ══════════════════════════════════════════════════════════════
          СТРАНИЦА 4 — ЗАДНЯЯ ОБЛОЖКА / CTA
          Фон: ночная стройка с прожекторами
      ══════════════════════════════════════════════════════════════ */}
      <div
        className="relative overflow-hidden shadow-2xl flex flex-col"
        style={{ width: "210mm", minHeight: "297mm", margin: "0 auto", background: "#000" }}
      >
        {/* Реальное фото полным фоном */}
        <img
          src={P.nightSite}
          alt="Строительная площадка"
          className="absolute inset-0 w-full h-full"
          style={{ objectFit: "cover", objectPosition: "center", filter: "brightness(0.35) saturate(0.6)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0.75) 80%, rgba(0,0,0,0.97) 100%)",
          }}
        />
        <div className="absolute top-0 left-0 right-0" style={{ height: 10, background: "#FFD600", zIndex: 20 }} />

        <div className="relative z-10 px-10 flex flex-col flex-1">
          {/* Шапка */}
          <div className="flex justify-between items-center pt-10 mb-8">
            <div
              className="border-2 border-yellow-400 px-4 py-1.5"
              style={{ fontFamily: "Oswald, sans-serif", color: "#FFD600", fontSize: 11, letterSpacing: "0.18em" }}
            >
              МЕСТО ДЛЯ ЛОГОТИПА
            </div>
            <Chevrons scale={1.2} />
          </div>

          {/* Середина — пустое место с фото (видно сквозь прозрачность) */}
          <div style={{ flex: 1 }} />

          {/* CTA блок */}
          <div className="pb-10">
            <div className="flex items-center gap-4 mb-5">
              <YLine w="48px" />
              <span style={{ fontFamily: "Oswald, sans-serif", color: "#FFD600", fontSize: 12, letterSpacing: "0.25em" }}>
                СДЕЛАЙТЕ ШАГ СЕГОДНЯ
              </span>
            </div>

            <h2
              className="text-white uppercase"
              style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 900, fontSize: 42, lineHeight: 1, letterSpacing: "-0.01em" }}
            >
              Ваша техника
              <br />
              начнёт работать{" "}
              <span style={{ color: "#FFD600" }}>завтра</span>
            </h2>

            {/* Карточки следующих шагов */}
            <div className="grid grid-cols-3 gap-3 mt-8">
              {[
                { n: "01", title: "Позвоните", text: "Бесплатная консультация 15 минут — оцениваем потенциал вашего парка." },
                { n: "02", title: "Аудит парка", text: "Анализируем загрузку, предлагаем оптимальную модель сотрудничества." },
                { n: "03", title: "Договор", text: "Пилотный месяц с минимальными обязательствами — проверьте результат." },
              ].map((item) => (
                <div
                  key={item.n}
                  className="p-4"
                  style={{ background: "rgba(0,0,0,0.75)", border: "1px solid rgba(255,214,0,0.3)" }}
                >
                  <div
                    className="text-yellow-400 font-black text-2xl mb-2 leading-none"
                    style={{ fontFamily: "Montserrat, sans-serif", opacity: 0.5 }}
                  >
                    {item.n}
                  </div>
                  <div
                    className="text-white font-bold uppercase text-xs mb-2"
                    style={{ fontFamily: "Oswald, sans-serif", letterSpacing: "0.08em" }}
                  >
                    {item.title}
                  </div>
                  <p className="text-gray-400 text-xs leading-snug" style={{ fontFamily: "Roboto Condensed, sans-serif" }}>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            {/* P.S. */}
            <div
              className="mt-6 p-4"
              style={{ borderLeft: "4px solid #FFD600", background: "rgba(0,0,0,0.6)" }}
            >
              <p className="text-gray-300 text-xs leading-relaxed italic" style={{ fontFamily: "Roboto Condensed, sans-serif" }}>
                <span className="text-yellow-400 font-bold not-italic">P.S.</span>{" "}
                Уже несколько владельцев техники в Мурманской области перешли на нашу систему и
                забыли о простоях. В сложное время стабильность особенно важна.{" "}
                <span className="text-white font-bold not-italic">
                  Позвоните прямо сейчас — это ничего не стоит.
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Финальная контактная панель */}
        <div
          className="relative z-10 px-10 py-5 flex justify-between items-center flex-wrap gap-3"
          style={{ borderTop: "3px solid #FFD600", background: "rgba(0,0,0,0.95)" }}
        >
          <div className="flex items-center gap-2">
            <Icon name="Phone" size={16} className="text-yellow-400" />
            <span style={{ fontFamily: "Oswald, sans-serif", color: "white", fontSize: 20 }}>
              +7 929 184-38-33
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="Mail" size={15} className="text-yellow-400" />
            <span style={{ fontFamily: "Roboto Condensed, sans-serif", color: "#bbb", fontSize: 14 }}>general.51@mail.ru</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="Send" size={15} className="text-yellow-400" />
            <span style={{ fontFamily: "Roboto Condensed, sans-serif", color: "#bbb", fontSize: 14 }}>Telegram: __________</span>
          </div>

          {/* QR-плейсхолдер */}
          <div
            className="border-2 border-dashed border-yellow-400 flex items-center justify-center"
            style={{ width: 60, height: 60 }}
          >
            <span style={{ fontFamily: "Roboto Condensed, sans-serif", color: "#FFD600", fontSize: 9, textAlign: "center" }}>
              QR
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
