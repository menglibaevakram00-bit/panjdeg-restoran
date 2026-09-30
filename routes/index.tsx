import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { Reveal } from "@/components/Reveal";
import { menu, restaurant, reviews, telHref } from "@/data/restaurant";
import heroImg from "@/assets/hero-plov.jpg";
import galleryPlov from "@/assets/gallery-plov.jpg";
import gallerySamsa from "@/assets/gallery-samsa.jpg";
import galleryMeat from "@/assets/gallery-meat.jpg";
import gallerySoup from "@/assets/gallery-soup.jpg";
import galleryInterior from "@/assets/gallery-interior.jpg";

const title = "Панчдег — национальная кухня в Душанбе";
const description =
  "Панчдег — ресторан национальной кухни в Шохмансурском районе Душанбе. Плов, самса, мясные блюда, супы и традиционная кухня.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "restaurant.restaurant" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navLinks = [
  { href: "#top", label: "Главная" },
  { href: "#about", label: "О ресторане" },
  { href: "#menu", label: "Меню" },
  { href: "#gallery", label: "Галерея" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#contacts", label: "Контакты" },
];

// Замените изображения на настоящие фотографии ресторана, когда они появятся.
const gallery = [
  { src: galleryPlov, category: "Плов", alt: "Плов на медном блюде" },
  { src: gallerySamsa, category: "Самса", alt: "Самса на глиняной тарелке" },
  { src: galleryMeat, category: "Мясные блюда", alt: "Шашлык на мангале" },
  { src: gallerySoup, category: "Супы", alt: "Суп шурбо в глиняной пиале" },
  { src: heroImg, category: "Блюда", alt: "Блюда национальной кухни" },
  { src: galleryInterior, category: "Интерьер", alt: "Интерьер в национальном стиле" },
];

function Index() {
  const [open, setOpen] = useState(false);
  const [phone1, phone2] = restaurant.phones;

  return (
    <div className="min-h-screen bg-paper font-body text-ink antialiased selection:bg-clay/20">
      <header className="sticky top-0 z-40 border-b border-line bg-paper/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <a href="#top" className="font-display text-lg font-extrabold tracking-tight">
            ПАНЧДЕГ
          </a>
          <nav className="hidden items-center gap-7 text-sm font-medium text-ink-soft md:flex">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="transition-colors hover:text-clay">
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href={telHref(phone1)}
              className="hidden items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-sm font-semibold text-paper ring-1 ring-black/5 transition-colors hover:bg-clay sm:inline-flex"
            >
              {phone1}
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="grid size-11 place-items-center rounded-xl border border-line md:hidden"
              aria-label="Меню"
              aria-expanded={open}
            >
              <span className="block w-5 space-y-1">
                <span className="block h-0.5 bg-ink" />
                <span className="block h-0.5 bg-ink" />
                <span className="block h-0.5 bg-ink" />
              </span>
            </button>
          </div>
        </div>
        {open && (
          <nav className="border-t border-line bg-paper px-5 py-4 md:hidden">
            <ul className="space-y-1">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-3 text-base font-medium text-ink-soft transition-colors hover:bg-paper-2 hover:text-clay"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden bg-ember text-paper">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Плов, нон и чай национальной кухни"
            width={1920}
            height={1088}
            className="h-full min-h-[560px] w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ember via-ember/55 to-ember/20" />
        <div className="drift pointer-events-none absolute -right-24 top-10 h-[420px] w-[420px] rounded-[40px] border border-white/20 bg-white/10 backdrop-blur-xl" />
        <div className="drift pointer-events-none absolute -left-16 bottom-0 h-[300px] w-[300px] rounded-[36px] border border-white/10 bg-saffron/15 backdrop-blur-xl [animation-delay:-6s]" />
        <div className="relative mx-auto max-w-6xl px-5 pb-28 pt-24 md:pb-36 md:pt-32">
          <div className="max-w-2xl">
            <p className="rise font-mono text-xs uppercase tracking-[0.3em] text-saffron [animation-delay:60ms]">
              {restaurant.tagline}
            </p>
            <h1 className="rise mt-4 font-display text-6xl font-extrabold leading-[0.95] tracking-tight [animation-delay:140ms] md:text-8xl">
              {restaurant.name}
            </h1>
            <p className="rise mt-6 max-w-[46ch] text-pretty text-lg text-paper/80 [animation-delay:220ms] md:text-xl">
              {restaurant.intro}
            </p>
            <div className="rise mt-9 flex flex-col gap-3 [animation-delay:300ms] sm:flex-row">
              <a
                href="#menu"
                className="inline-flex items-center justify-center rounded-full bg-saffron px-7 py-4 text-base font-bold text-ink ring-1 ring-black/5 transition-colors hover:bg-paper"
              >
                Посмотреть меню
              </a>
              <a
                href={telHref(phone1)}
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-7 py-4 text-base font-semibold backdrop-blur-md transition-colors hover:bg-white/20"
              >
                Позвонить {phone1}
              </a>
              <a
                href={telHref(phone2)}
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-4 text-base font-semibold transition-colors hover:bg-white/10"
              >
                {phone2}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="grid items-center gap-10 md:grid-cols-12 md:gap-14">
          <Reveal className="md:col-span-5">
            <img
              src={galleryInterior}
              alt="Зал в национальном стиле"
              loading="lazy"
              width={1024}
              height={1024}
              className="aspect-[4/5] w-full rounded-[28px] object-cover"
            />
          </Reveal>
          <Reveal className="md:col-span-7" delay={80}>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-clay">(a) О ресторане</p>
            <h2 className="mt-4 text-balance font-display text-3xl font-bold tracking-tight md:text-5xl">
              Кухня, которая не торопится
            </h2>
            <p className="mt-6 max-w-[52ch] text-pretty text-lg text-ink-soft">
              Панчдег — ресторан национальной кухни в Душанбе. Здесь готовят традиционные блюда:
              плов, мясо, самсу и супы.
            </p>
            <p className="mt-4 max-w-[52ch] text-pretty text-lg text-ink-soft">
              Национальная кухня, ароматные мясные блюда, плов, самса и традиционные блюда — в зале
              на три этажа, ежедневно с 10:00 до 24:00.
            </p>
          </Reveal>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="bg-ember text-paper">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-saffron">(b) Меню</p>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-5xl">
                Что мы готовим
              </h2>
            </div>
            <p className="font-mono text-xs text-paper/50">цены в сомони</p>
          </div>

          <div className="mt-12 grid gap-x-10 gap-y-12 md:grid-cols-3">
            {menu.map((category, i) => (
              <Reveal key={category.title} delay={i * 80}>
                <h3 className="font-display text-xl font-bold text-saffron">{category.title}</h3>
                <ul className="mt-5 space-y-4">
                  {category.items.map((item) => (
                    <li key={item.name} className="flex items-baseline gap-3">
                      <span className="text-base">{item.name}</span>
                      <span className="flex-1 border-b border-dotted border-paper/25" />
                      <span
                        className={
                          item.price
                            ? "whitespace-nowrap font-mono text-sm text-saffron"
                            : "whitespace-nowrap font-mono text-sm text-paper/40"
                        }
                      >
                        {item.price ?? "Уточняйте цену"}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
          <p className="mt-14 text-balance font-display text-2xl font-medium text-saffron md:text-3xl">
            И это далеко не всё — в Панчдег вас ждёт ещё много блюд национальной кухни.
          </p>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-clay">(c) Галерея</p>
        <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-5xl">
          Из тандыра и с огня
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
          {gallery.map((g, i) => (
            <Reveal
              key={g.category}
              delay={i * 60}
              className={i === 0 ? "col-span-2 row-span-2" : ""}
            >
              <figure className="group relative h-full overflow-hidden rounded-[24px] bg-paper-2">
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="aspect-square h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-4 font-mono text-[11px] uppercase tracking-[0.15em] text-paper">
                  {g.category}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="bg-paper-2">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-clay">(d) Отзывы</p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-5xl">
            Отзывы наших гостей
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {reviews.map((r, i) => (
              <Reveal key={r.text} delay={i * 80}>
                <figure className="h-full rounded-[24px] bg-paper p-7 ring-1 ring-black/5 transition-transform duration-300 hover:-translate-y-1">
                  <p className="text-pretty text-lg">«{r.text}»</p>
                  <figcaption className="mt-5 font-mono text-xs uppercase tracking-[0.15em] text-ink-soft">
                    {r.author ?? "Гость"} · {r.date}
                    {r.meta ? ` · ${r.meta}` : ""}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERY */}
      <section id="delivery" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="relative overflow-hidden rounded-[32px] bg-clay p-8 text-paper md:p-14">
          <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-saffron/30 blur-2xl" />
          <div className="relative max-w-xl">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-paper/70">Доставка</p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-4xl">
              Не хотите выходить из дома?
            </h2>
            <p className="mt-4 text-pretty text-lg text-paper/85">
              В Панчдег доступна служба доставки.
            </p>
            <a
              href={telHref(phone1)}
              className="mt-7 inline-flex items-center justify-center rounded-full bg-paper px-7 py-4 text-base font-bold text-clay-deep ring-1 ring-black/5 transition-colors hover:bg-ink hover:text-paper"
            >
              Позвонить и заказать · {phone1}
            </a>
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="bg-ember text-paper">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <div className="grid gap-10 md:grid-cols-2 md:gap-14">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-saffron">
                (e) Контакты
              </p>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-5xl">
                Приходите в гости
              </h2>
              <dl className="mt-8 space-y-6">
                <div>
                  <dt className="font-mono text-xs uppercase tracking-[0.2em] text-paper/50">
                    Адрес
                  </dt>
                  <dd className="mt-1 text-lg">
                    {restaurant.address}
                    <br />
                    {restaurant.district}
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-xs uppercase tracking-[0.2em] text-paper/50">
                    Часы работы
                  </dt>
                  <dd className="mt-1 text-lg">{restaurant.hours}</dd>
                </div>
                <div>
                  <dt className="font-mono text-xs uppercase tracking-[0.2em] text-paper/50">
                    Телефоны
                  </dt>
                  <dd className="mt-1 space-x-3 text-lg">
                    <a href={telHref(phone1)} className="hover:text-saffron">
                      {phone1}
                    </a>
                    <span className="text-paper/40">·</span>
                    <a href={telHref(phone2)} className="hover:text-saffron">
                      {phone2}
                    </a>
                  </dd>
                </div>
              </dl>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={telHref(phone1)}
                  className="inline-flex items-center justify-center rounded-full bg-saffron px-7 py-4 text-base font-bold text-ink ring-1 ring-black/5 transition-colors hover:bg-paper"
                >
                  Позвонить
                </a>
                <a
                  href={restaurant.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-4 text-base font-semibold transition-colors hover:bg-white/10"
                >
                  Построить маршрут
                </a>
              </div>
            </div>
            <a
              href={restaurant.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative grid min-h-[280px] place-items-center overflow-hidden rounded-[28px] border border-white/10 bg-ember/60 p-8 text-center transition-colors hover:bg-ember/40 md:min-h-full"
            >
              <div>
                <p className="font-display text-2xl font-bold">Панчдег на карте 2GIS</p>
                <p className="mt-3 text-paper/70">
                  {restaurant.address}, {restaurant.district}
                </p>
                <span className="mt-6 inline-flex rounded-full bg-saffron px-6 py-3 text-base font-bold text-ink">
                  Открыть 2GIS
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-ink text-paper/70">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <p className="font-display text-lg font-bold text-paper">ПАНЧДЕГ</p>
            <p className="mt-2 font-mono text-xs uppercase tracking-[0.15em]">
              {restaurant.tagline}
            </p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-paper/45">Адрес</p>
            <p className="mt-2">{restaurant.address}</p>
            <p>{restaurant.district}</p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-paper/45">Телефоны</p>
            <p className="mt-2">
              <a href={telHref(phone1)} className="hover:text-saffron">
                {phone1}
              </a>
            </p>
            <p>
              <a href={telHref(phone2)} className="hover:text-saffron">
                {phone2}
              </a>
            </p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-paper/45">Часы</p>
            <p className="mt-2">{restaurant.hours}</p>
            <a
              href={restaurant.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-saffron hover:underline"
            >
              2GIS
            </a>
          </div>
        </div>
      </footer>

      <a
        href={telHref(phone1)}
        className="fixed inset-x-4 bottom-4 z-50 inline-flex items-center justify-center rounded-full bg-clay px-6 py-4 text-base font-bold text-paper shadow-lg shadow-black/20 ring-1 ring-black/10 md:hidden"
      >
        Позвонить {phone1}
      </a>
    </div>
  );
}
