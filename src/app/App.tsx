import { ArrowDown, ArrowRight, Instagram, Menu, Search, Twitter } from "lucide-react";

// Rasmlarni almashtirish uchun shu yerdagi URL/path larni o'zgartiring.
// Masalan: hero: "/images/hero.jpg" yoki import qilingan asset URL.
const IMAGES = {
  hero: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1800&h=1200&fit=crop&auto=format",
  hikerLevel: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=900&h=1150&fit=crop&auto=format",
  gear: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900&h=1150&fit=crop&auto=format",
  mapTiming: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=900&h=1150&fit=crop&auto=format",
};

const navLinks = ["Equipment", "About us", "Blog"];

const articles = [
  {
    number: "01",
    eyebrow: "GET STARTED",
    title: "What level of hiker are you?",
    body: "Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites, trails and parks.",
    image: IMAGES.hikerLevel,
    alt: "Hiker standing on a green mountain trail",
  },
  {
    number: "02",
    eyebrow: "HIKING ESSENTIALS",
    title: "Picking the right Hiking Gear!",
    body: "The nice thing about beginning hiking is that you don't really need any special gear. You can probably get away with things you already have. Start with good shoes, a weather-ready layer, and a pack that sits comfortably.",
    image: IMAGES.gear,
    alt: "Mountain trail and hiking gear view",
    reverse: true,
  },
  {
    number: "03",
    eyebrow: "WHERE YOU GO IS THE KEY",
    title: "Understand Your Map & Timing",
    body: "To start, print out the hiking guide and map. Study them to get a feel for the terrain, climb, and timing. With a little preparation you can keep the adventure calm, focused, and safe.",
    image: IMAGES.mapTiming,
    alt: "Hand holding a compass over mountain landscape",
  },
];

function Eyebrow({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.32em] text-primary">
      <span className="h-px w-14 bg-primary" />
      {children}
    </div>
  );
}

function ReadMoreLink() {
  return (
    <a href="#" className="group mt-7 inline-flex items-center gap-2 text-[13px] font-semibold text-primary transition hover:gap-3">
      read more
      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
    </a>
  );
}

function ArticleCard({ article }: { article: (typeof articles)[number] }) {
  return (
    <article className="grid items-center gap-10 lg:grid-cols-2 lg:gap-24">
      <div className={`relative ${article.reverse ? "lg:order-2" : ""}`}>
        <span className="pointer-events-none absolute -left-2 -top-16 font-sans text-[112px] font-bold leading-none text-white/[0.055] sm:text-[150px] lg:-left-24 lg:-top-20 lg:text-[210px]">
          {article.number}
        </span>
        <div className="relative z-10 max-w-xl lg:pl-6">
          <Eyebrow>{article.eyebrow}</Eyebrow>
          <h2 className="mt-5 font-serif text-[34px] font-semibold leading-[1.08] text-white sm:text-5xl lg:text-[58px]">
            {article.title}
          </h2>
          <p className="mt-6 max-w-[560px] text-[15px] font-medium leading-8 text-white/78">
            {article.body}
          </p>
          <ReadMoreLink />
        </div>
      </div>

      <div className={`relative ${article.reverse ? "lg:order-1" : ""}`}>
        <div className="absolute -inset-4 bg-primary/10 blur-2xl" />
        <div className="relative aspect-[0.78] max-h-[720px] overflow-hidden bg-secondary shadow-2xl shadow-black/35">
          <img src={article.image} alt={article.alt} className="h-full w-full object-cover transition duration-700 hover:scale-105" />
        </div>
      </div>
    </article>
  );
}

export default function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <section className="relative min-h-[820px] lg:min-h-[1030px]">
        <img src={IMAGES.hero} alt="Large mountain range under mist" className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,31,36,.24)_0%,rgba(11,31,36,.04)_36%,rgba(11,31,36,.72)_70%,#0b1f24_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,.18),transparent_34%)]" />

        <header className="relative z-20 mx-auto flex max-w-[1760px] items-center justify-between px-6 py-8 text-white sm:px-10 lg:px-16">
          <a href="#" className="font-serif text-[22px] font-bold tracking-[0.04em]">MNTN</a>
          <nav className="hidden items-center gap-10 text-[13px] font-bold md:flex">
            {navLinks.map((item) => (
              <a key={item} href="#" className="text-white/90 transition hover:text-primary">{item}</a>
            ))}
          </nav>
          <a href="#" className="hidden items-center gap-2 text-[13px] font-bold text-white/90 transition hover:text-primary md:flex">
            <Search className="h-4 w-4" /> Account
          </a>
          <button className="rounded-full border border-white/20 p-2 md:hidden" aria-label="Open menu">
            <Menu className="h-5 w-5" />
          </button>
        </header>

        <div className="absolute left-6 top-[250px] z-10 hidden flex-col items-center gap-6 text-white/80 lg:flex xl:left-16">
          <span className="origin-center -rotate-90 text-[13px] font-bold">Follow us</span>
          <Instagram className="h-4 w-4" />
          <Twitter className="h-4 w-4" />
        </div>

        <div className="absolute right-8 top-[220px] z-10 hidden text-right text-[13px] font-bold text-white/85 lg:block xl:right-16">
          <div className="relative flex flex-col gap-9 pr-6">
            <span>Start</span><span>01</span><span>02</span><span>03</span>
            <span className="absolute right-0 top-0 h-[210px] w-px bg-white/30"><span className="block h-14 w-px bg-white" /></span>
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-6 pt-28 sm:px-10 sm:pt-36 lg:pt-44">
          <Eyebrow>A HIKING GUIDE</Eyebrow>
          <h1 className="mt-7 font-serif text-[46px] font-semibold leading-[1.04] text-white drop-shadow-2xl sm:text-7xl lg:text-[92px]">
            Be Prepared For The Mountains And Beyond!
          </h1>
          <a href="#content" className="mt-9 inline-flex items-center gap-2 text-[14px] font-bold text-white/90 transition hover:text-primary">
            scroll down <ArrowDown className="h-4 w-4" />
          </a>
        </div>
      </section>

      <section id="content" className="relative -mt-40 bg-background px-6 pb-28 sm:px-10 lg:-mt-52 lg:px-16">
        <div className="mx-auto max-w-[1460px] space-y-24 lg:space-y-36">
          {articles.map((article) => (
            <ArticleCard key={article.number} article={article} />
          ))}
        </div>
      </section>

      <footer className="bg-background px-6 pb-12 text-white sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-[1460px] gap-12 border-t border-white/10 pt-14 md:grid-cols-[1.4fr_.75fr_.75fr]">
          <div>
            <div className="font-serif text-[22px] font-bold tracking-[0.04em]">MNTN</div>
            <p className="mt-5 max-w-sm text-[14px] font-semibold leading-7 text-white/75">
              Get out there & discover your next slope, mountain & destination!
            </p>
            <p className="mt-16 text-[12px] text-white/35">Copyright 2026 MNTN, Inc. Terms & Privacy</p>
          </div>
          <div>
            <h3 className="font-bold text-primary">More on The Blog</h3>
            <ul className="mt-5 space-y-4 text-[14px] text-white/75">
              <li>About MNTN</li><li>Contributors & Writers</li><li>Write For Us</li><li>Contact Us</li><li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-primary">More on MNTN</h3>
            <ul className="mt-5 space-y-4 text-[14px] text-white/75">
              <li>The Team</li><li>Jobs</li><li>Press</li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  );
}
