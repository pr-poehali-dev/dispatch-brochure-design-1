import Icon from "@/components/ui/icon";

// Реальные фотографии спецтехники с Unsplash (открытая лицензия)
const PHOTOS = {
  // Экскаватор на стройке — ночная съёмка
  hero: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&q=80&fit=crop",
  // Жёлтый экскаватор крупным планом
  excavator: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=900&q=80&fit=crop",
  // Самосвал / грузовик на стройке
  truck: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80&fit=crop",
  // Бульдозер / тяжёлая техника
  bulldozer: "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=900&q=80&fit=crop",
  // Кран строительный
  crane: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80&fit=crop&crop=right",
};

// ─── Шеврон-декор ─────────────────────────────────────────────────────────────
const Chevrons = ({ className = "" }: { className?: string }) => (
  <div className={`flex gap-0 ${className}`}>
    {[0, 1, 2].map((i) => (
      <div
        key={i}
        style={{
          width: 28,
          height: 40,
          clipPath: "polygon(0 0, 70% 0, 100% 50%, 70% 100%, 0 100%, 30% 50%)",
          background: i === 1 ? "#FFD600" : i === 0 ? "#c9a800" : "#8a7000",
          marginLeft: i === 0 ? 0 : -8,
        }}
      />
    ))}
  </div>
);

// ─── Жёлтый разделитель ───────────────────────────────────────────────────────
const YellowLine = ({ className = "" }: { className?: string }) => (
  <div className={`h-1 bg-yellow-400 ${className}`} />
);

// ─── Нумерованный шаг ─────────────────────────────────────────────────────────
const Step = ({
  n,
  text,
}: {
  n: number;
  text: string;
}) => (
  <div className="flex items-start gap-4">
    <div
      className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-black font-black text-lg"
      style={{ background: "#FFD600", fontFamily: "Montserrat, sans-serif" }}
    >
      {n}
    </div>
    <p
      className="text-white leading-snug pt-1"
      style={{ fontFamily: "Roboto Condensed, sans-serif", fontSize: 15 }}
    >
      {text}
    </p>
  </div>
);

// ─── Преимущество ─────────────────────────────────────────────────────────────
const Advantage = ({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) => (
  <div className="flex gap-3 items-start">
    <div className="shrink-0 mt-0.5">
      <Icon name={icon} size={22} className="text-yellow-400" fallback="CheckCircle" />
    </div>
    <div>
      <span
        className="text-yellow-400 font-bold uppercase"
        style={{ fontFamily: "Oswald, sans-serif", fontSize: 14, letterSpacing: "0.08em" }}
      >
        {title} —{" "}
      </span>
      <span
        className="text-gray-300 text-sm leading-snug"
        style={{ fontFamily: "Roboto Condensed, sans-serif" }}
      >
        {text}
      </span>
    </div>
  </div>
);

// ─── Страница-обёртка (имитирует A4) ──────────────────────────────────────────
const Page = ({
  children,
  className = "",
  style = {},
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) => (
  <div
    className={`relative overflow-hidden bg-black shadow-2xl ${className}`}
    style={{
      width: "210mm",
      minHeight: "297mm",
      margin: "0 auto",
      ...style,
    }}
  >
    {children}
  </div>
);

// ─── ГЛАВНЫЙ КОМПОНЕНТ ────────────────────────────────────────────────────────
export default function Index() {
  return (
    <div
      className="min-h-screen py-10 px-4"
      style={{ background: "#111", fontFamily: "Montserrat, sans-serif" }}
    >
      {/* ════════════════════════════════════════════════════════════
          СТРАНИЦА 1 — ОБЛОЖКА
      ════════════════════════════════════════════════════════════ */}
      <Page className="mb-8 flex flex-col">
        {/* Фоновое фото */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${PHOTOS.hero})`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
            filter: "brightness(0.45) saturate(0.8)",
          }}
        />
        {/* Жёлтый градиент снизу */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.6) 55%, rgba(20,16,0,0.95) 100%)",
          }}
        />
        {/* Диагональная жёлтая полоса */}
        <div
          className="absolute"
          style={{
            top: 0,
            left: 0,
            width: "100%",
            height: 8,
            background: "#FFD600",
          }}
        />

        {/* Верхний логотип-плейсхолдер */}
        <div className="relative z-10 flex justify-between items-center px-10 pt-8">
          <div
            className="border-2 border-yellow-400 px-4 py-1"
            style={{
              fontFamily: "Oswald, sans-serif",
              color: "#FFD600",
              fontSize: 11,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            [ место для логотипа ]
          </div>
          <div className="flex items-center gap-2">
            <Chevrons />
            <span
              style={{
                fontFamily: "Oswald, sans-serif",
                color: "#FFD600",
                fontSize: 11,
                letterSpacing: "0.2em",
              }}
            >
              МУРМАНСКАЯ ОБЛ.
            </span>
          </div>
        </div>

        {/* Центральный блок */}
        <div className="relative z-10 flex-1 flex flex-col justify-center px-10 pt-16 pb-12">
          {/* Мелкий лейбл */}
          <div className="flex items-center gap-3 mb-5">
            <YellowLine className="w-12" />
            <span
              style={{
                fontFamily: "Oswald, sans-serif",
                color: "#FFD600",
                fontSize: 13,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
              }}
            >
              Диспетчерская служба
            </span>
          </div>

          {/* Главный заголовок */}
          <h1
            className="text-white leading-none mb-4 uppercase"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(36px, 8vw, 64px)",
              lineHeight: 1,
            }}
          >
            Перестань
            <br />
            <span style={{ color: "#FFD600" }}>терять деньги</span>
            <br />
            на простоях
          </h1>

          {/* Подзаголовок */}
          <p
            className="text-gray-300 mt-4"
            style={{
              fontFamily: "Roboto Condensed, sans-serif",
              fontSize: 18,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            Диспетчерская служба с ИИ-технологиями
          </p>

          {/* Шеврон-декор большой */}
          <div className="flex gap-0 mt-8">
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                style={{
                  width: 40,
                  height: 56,
                  clipPath:
                    "polygon(0 0, 70% 0, 100% 50%, 70% 100%, 0 100%, 30% 50%)",
                  background:
                    i === 2
                      ? "#FFD600"
                      : i === 1 || i === 3
                      ? "#c9a800"
                      : "#5a4a00",
                  marginLeft: i === 0 ? 0 : -12,
                  opacity: i === 0 || i === 4 ? 0.4 : 1,
                }}
              />
            ))}
          </div>
        </div>

        {/* Нижняя полоса с контактами */}
        <div
          className="relative z-10 px-10 py-5"
          style={{
            borderTop: "3px solid #FFD600",
            background: "rgba(0,0,0,0.85)",
          }}
        >
          <div className="flex justify-between items-center flex-wrap gap-3">
            <div className="flex items-center gap-2">
              <Icon name="Phone" size={16} className="text-yellow-400" />
              <span
                style={{
                  fontFamily: "Oswald, sans-serif",
                  color: "white",
                  fontSize: 18,
                  letterSpacing: "0.05em",
                }}
              >
                +7 929 184-38-33
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Mail" size={16} className="text-yellow-400" />
              <span
                style={{
                  fontFamily: "Roboto Condensed, sans-serif",
                  color: "#ccc",
                  fontSize: 14,
                }}
              >
                general.51@mail.ru
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Send" size={16} className="text-yellow-400" />
              <span
                style={{
                  fontFamily: "Roboto Condensed, sans-serif",
                  color: "#ccc",
                  fontSize: 14,
                }}
              >
                Telegram: _______________
              </span>
            </div>
          </div>
        </div>
      </Page>

      {/* ════════════════════════════════════════════════════════════
          СТРАНИЦА 2 — РАЗВОРОТ: ПРОБЛЕМА + РЕШЕНИЕ + МОДЕЛИ
      ════════════════════════════════════════════════════════════ */}
      <Page className="mb-8" style={{ minHeight: "297mm" }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${PHOTOS.excavator})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.15) saturate(0.4)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(0,0,0,0.97) 60%, rgba(20,15,0,0.9) 100%)",
          }}
        />
        {/* Верхняя полоса */}
        <div style={{ height: 8, background: "#FFD600", position: "relative", zIndex: 10 }} />

        <div className="relative z-10 px-10 py-8 flex flex-col gap-8">
          {/* ── Блок: ПРОБЛЕМА ── */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Chevrons />
              <h2
                className="uppercase text-yellow-400"
                style={{
                  fontFamily: "Oswald, sans-serif",
                  fontWeight: 700,
                  fontSize: 26,
                  letterSpacing: "0.1em",
                }}
              >
                Узнаёте себя?
              </h2>
            </div>
            <div
              className="relative border border-gray-700 p-5"
              style={{ background: "rgba(255,214,0,0.04)" }}
            >
              <div
                className="absolute top-0 left-0 w-1 h-full"
                style={{ background: "#FFD600" }}
              />
              <p
                className="text-gray-300 leading-relaxed"
                style={{
                  fontFamily: "Roboto Condensed, sans-serif",
                  fontSize: 15,
                }}
              >
                Сейчас непростое время: заказы нестабильны, конкуренция растёт,
                а техника стоит — и каждый день простоя{" "}
                <span className="text-yellow-400 font-bold">
                  съедает вашу прибыль
                </span>
                . Вы тратите часы на поиск работы, ведёте переговоры с
                сомнительными клиентами, потом контролируете оплату и сами
                готовите кипу документов. В итоге —{" "}
                <span className="text-white font-bold">
                  нервы, простои, упущенная выгода.
                </span>
              </p>
            </div>
          </div>

          {/* ── Блок: РЕШЕНИЕ ── */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Chevrons />
              <h2
                className="uppercase text-yellow-400"
                style={{
                  fontFamily: "Oswald, sans-serif",
                  fontWeight: 700,
                  fontSize: 26,
                  letterSpacing: "0.1em",
                }}
              >
                А теперь — другой сценарий
              </h2>
            </div>
            <div
              className="relative border border-yellow-400 p-5"
              style={{ background: "rgba(255,214,0,0.06)" }}
            >
              <div
                className="absolute top-0 left-0 w-1 h-full"
                style={{ background: "#FFD600" }}
              />
              <p
                className="text-white leading-relaxed"
                style={{
                  fontFamily: "Roboto Condensed, sans-serif",
                  fontSize: 15,
                }}
              >
                Ваша техника работает{" "}
                <span className="text-yellow-400 font-bold">каждый день</span>,
                заказы поступают стабильно, а всю рутину — поиск, согласование,
                контроль, документы —{" "}
                <span className="text-yellow-400 font-bold">
                  кто-то берёт на себя
                </span>
                . Вы просто занимаетесь развитием бизнеса — или отдыхаете, зная,
                что всё под контролем.
              </p>
            </div>
          </div>

          {/* ── Фотострип техники ── */}
          <div className="grid grid-cols-3 gap-2" style={{ height: 90 }}>
            {[PHOTOS.hero, PHOTOS.excavator, PHOTOS.truck].map((src, i) => (
              <div
                key={i}
                className="relative overflow-hidden"
                style={{ border: "1px solid rgba(255,214,0,0.3)" }}
              >
                <img
                  src={src}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    filter: "brightness(0.85) saturate(0.9)",
                    display: "block",
                  }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 60%)",
                  }}
                />
              </div>
            ))}
          </div>

          {/* ── Блок: МОДЕЛИ ОПЛАТЫ ── */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Chevrons />
              <h2
                className="uppercase text-yellow-400"
                style={{
                  fontFamily: "Oswald, sans-serif",
                  fontWeight: 700,
                  fontSize: 26,
                  letterSpacing: "0.1em",
                }}
              >
                Модели сотрудничества
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {/* Комиссионная */}
              <div
                className="relative overflow-hidden p-5"
                style={{
                  background: "#111",
                  border: "2px solid #FFD600",
                }}
              >
                <div
                  className="absolute -right-4 -top-4 w-20 h-20 rounded-full opacity-10"
                  style={{ background: "#FFD600" }}
                />
                <div
                  className="text-yellow-400 font-black text-3xl mb-1"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  10%
                </div>
                <div
                  className="text-white font-bold uppercase mb-3 text-sm"
                  style={{
                    fontFamily: "Oswald, sans-serif",
                    letterSpacing: "0.1em",
                  }}
                >
                  Комиссионная модель
                </div>
                <YellowLine className="mb-3" />
                <p
                  className="text-gray-400 text-sm leading-snug"
                  style={{ fontFamily: "Roboto Condensed, sans-serif" }}
                >
                  От оборота по каждому заказу, который мы нашли для вас.{" "}
                  <span className="text-white">Нет заказа — нет оплаты.</span> Наша
                  заинтересованность полностью совпадает с вашей.
                </p>
              </div>

              {/* Абонентское */}
              <div
                className="relative overflow-hidden p-5"
                style={{
                  background: "#FFD600",
                  border: "2px solid #FFD600",
                }}
              >
                <div
                  className="absolute -right-4 -top-4 w-20 h-20 rounded-full opacity-20"
                  style={{ background: "#000" }}
                />
                <div
                  className="text-black font-black text-2xl mb-1 leading-tight"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  от 20 000 ₽
                  <span className="text-lg font-bold">/мес</span>
                </div>
                <div
                  className="text-black font-bold uppercase mb-3 text-sm"
                  style={{
                    fontFamily: "Oswald, sans-serif",
                    letterSpacing: "0.1em",
                  }}
                >
                  Абонентское
                </div>
                <div className="h-0.5 bg-black mb-3 opacity-30" />
                <p
                  className="text-black text-sm leading-snug"
                  style={{ fontFamily: "Roboto Condensed, sans-serif" }}
                >
                  Полное управление парком: поиск заказов, планирование графика,
                  координация водителей, контроль, документы.
                </p>
              </div>
            </div>
          </div>

          {/* ── Блок: ПРЕИМУЩЕСТВА ── */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Chevrons />
              <h2
                className="uppercase text-yellow-400"
                style={{
                  fontFamily: "Oswald, sans-serif",
                  fontWeight: 700,
                  fontSize: 24,
                  letterSpacing: "0.1em",
                }}
              >
                5 причин, почему с нами выгодно
              </h2>
            </div>
            <div className="flex flex-col gap-4">
              <Advantage
                icon="Eye"
                title="Прозрачность"
                text="Деньги от клиентов идут напрямую на ваш счёт. Мы получаем только своё вознаграждение по договору."
              />
              <Advantage
                icon="Cpu"
                title="ИИ-технологии"
                text="Наши AI-агенты ведут холодный обзвон, обрабатывают заявки, готовят документы."
              />
              <Advantage
                icon="Clock"
                title="Освобождение времени"
                text="Вы больше не занимаетесь диспетчеризацией — занимайтесь тем, что важно."
              />
              <Advantage
                icon="Shield"
                title="Юридическая защита"
                text="Работаем по договору, защищающему вас от «обхода» и недобросовестных клиентов."
              />
              <Advantage
                icon="MapPin"
                title="География и ресурс"
                text="Мурманская область, 70+ населённых пунктов. У нас и партнёров техника всегда в наличии."
              />
            </div>
          </div>
        </div>

        {/* Нижняя полоса */}
        <div style={{ height: 8, background: "#FFD600", position: "relative", zIndex: 10, marginTop: "auto" }} />
      </Page>

      {/* ════════════════════════════════════════════════════════════
          СТРАНИЦА 3 — ЗАДНЯЯ СТОРОНА
      ════════════════════════════════════════════════════════════ */}
      <Page>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${PHOTOS.truck})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.15) saturate(0.25)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom right, rgba(0,0,0,0.96) 50%, rgba(12,10,0,0.92) 100%)",
          }}
        />
        <div style={{ height: 8, background: "#FFD600", position: "relative", zIndex: 10 }} />

        <div className="relative z-10 px-10 py-8 flex flex-col gap-8">
          {/* ── Как мы работаем ── */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Chevrons />
              <h2
                className="uppercase text-yellow-400"
                style={{
                  fontFamily: "Oswald, sans-serif",
                  fontWeight: 700,
                  fontSize: 28,
                  letterSpacing: "0.1em",
                }}
              >
                Как мы работаем
              </h2>
            </div>
            <div className="flex flex-col gap-4">
              <Step n={1} text="Вы передаёте информацию о вашем парке техники." />
              <Step
                n={2}
                text="Мы находим заказы — AI-обзвон, реклама, своя наработанная база клиентов."
              />
              <Step
                n={3}
                text="Организуем выполнение: ставим задачу водителю, контролируем часы работы."
              />
              <Step
                n={4}
                text="Готовим документы — акты, УПД, путевые листы. Вы подписываете готовое."
              />
              <Step
                n={5}
                text="Вы получаете оплату от клиента напрямую на свой расчётный счёт."
              />
            </div>
          </div>

          <YellowLine />

          {/* ── Что дальше ── */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Chevrons />
              <h2
                className="uppercase text-yellow-400"
                style={{
                  fontFamily: "Oswald, sans-serif",
                  fontWeight: 700,
                  fontSize: 24,
                  letterSpacing: "0.1em",
                }}
              >
                Что дальше?
              </h2>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[
                {
                  n: "01",
                  title: "Свяжитесь с нами",
                  text: "Позвоните или напишите — мы ответим быстро.",
                },
                {
                  n: "02",
                  title: "Бесплатный аудит",
                  text: "Оценим ваш парк и предложим оптимальную модель.",
                },
                {
                  n: "03",
                  title: "Подпишем договор",
                  text: "Пилотный режим: первый месяц — без риска для вас.",
                },
              ].map((item) => (
                <div
                  key={item.n}
                  className="p-4 border border-gray-700"
                  style={{ background: "rgba(255,214,0,0.04)" }}
                >
                  <div
                    className="text-yellow-400 font-black text-3xl mb-2 leading-none"
                    style={{ fontFamily: "Montserrat, sans-serif", opacity: 0.6 }}
                  >
                    {item.n}
                  </div>
                  <div
                    className="text-white font-bold uppercase text-sm mb-2"
                    style={{
                      fontFamily: "Oswald, sans-serif",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {item.title}
                  </div>
                  <p
                    className="text-gray-400 text-xs leading-snug"
                    style={{ fontFamily: "Roboto Condensed, sans-serif" }}
                  >
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Контакты ── */}
          <div
            className="p-6 border-2 border-yellow-400"
            style={{ background: "rgba(255,214,0,0.06)" }}
          >
            <h3
              className="text-yellow-400 uppercase font-bold mb-4 text-center"
              style={{
                fontFamily: "Oswald, sans-serif",
                fontSize: 18,
                letterSpacing: "0.15em",
              }}
            >
              Свяжитесь с нами прямо сейчас
            </h3>
            <div className="grid grid-cols-3 gap-3 text-center">
              <div>
                <div className="flex justify-center mb-1">
                  <Icon name="Phone" size={20} className="text-yellow-400" />
                </div>
                <div
                  className="text-white font-bold"
                  style={{
                    fontFamily: "Oswald, sans-serif",
                    fontSize: 16,
                  }}
                >
                  +7 929 184-38-33
                </div>
              </div>
              <div>
                <div className="flex justify-center mb-1">
                  <Icon name="Mail" size={20} className="text-yellow-400" />
                </div>
                <div
                  className="text-white"
                  style={{
                    fontFamily: "Roboto Condensed, sans-serif",
                    fontSize: 14,
                  }}
                >
                  general.51@mail.ru
                </div>
              </div>
              <div>
                <div className="flex justify-center mb-1">
                  <Icon name="Send" size={20} className="text-yellow-400" />
                </div>
                <div
                  className="text-gray-400"
                  style={{
                    fontFamily: "Roboto Condensed, sans-serif",
                    fontSize: 14,
                  }}
                >
                  Telegram: _____________
                </div>
              </div>
            </div>
          </div>

          {/* ── P.S. ── */}
          <div
            className="p-4 border-l-4"
            style={{
              borderColor: "#FFD600",
              background: "rgba(0,0,0,0.4)",
            }}
          >
            <p
              className="text-gray-300 text-sm leading-relaxed italic"
              style={{ fontFamily: "Roboto Condensed, sans-serif" }}
            >
              <span className="text-yellow-400 font-bold not-italic">P.S.</span>{" "}
              Уже несколько владельцев техники в Мурманской области перешли на
              нашу систему и забыли о простоях. В сложное время стабильность
              особенно важна.{" "}
              <span className="text-white font-bold not-italic">
                Сделайте звонок сегодня — ваша техника начнёт работать завтра.
              </span>
            </p>
          </div>

          {/* ── QR + Лого плейсхолдеры ── */}
          <div className="flex justify-between items-center">
            <div
              className="border-2 border-yellow-400 border-dashed flex items-center justify-center"
              style={{ width: 80, height: 80 }}
            >
              <span
                className="text-yellow-400 text-xs text-center"
                style={{ fontFamily: "Roboto Condensed, sans-serif" }}
              >
                QR-код
              </span>
            </div>
            <div className="flex items-center">
              <Chevrons />
              <Chevrons className="ml-1 opacity-50" />
            </div>
            <div
              className="border-2 border-dashed border-gray-600 flex items-center justify-center px-4"
              style={{ width: 120, height: 50 }}
            >
              <span
                className="text-gray-600 text-xs text-center"
                style={{ fontFamily: "Roboto Condensed, sans-serif" }}
              >
                ВАШ ЛОГОТИП
              </span>
            </div>
          </div>
        </div>

        <div style={{ height: 8, background: "#FFD600", position: "relative", zIndex: 10, marginTop: 16 }} />
      </Page>
    </div>
  );
}