import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  MessageCircle,
  MapPin,
  Clock,
  Calendar,
  Activity,
  Target,
  Users,
  Zap,
  HeartPulse,
  Trophy,
  Compass,
  CheckCircle2,
  ChevronDown,
  Instagram,
  Mail,
  Phone,
  Stethoscope,
  Apple,
  Pill,
  Dumbbell,
} from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Counter } from "@/components/site/Counter";
import { Reveal } from "@/components/site/Reveal";
import logoMark from "@/assets/logo-mark.png";
import heroImg from "@/assets/hero-runner.jpg";
import coachImg from "@/assets/coach.jpg";
import parkImg from "@/assets/park.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Outlier Running — Assessoria de Corrida em Curitiba" },
      {
        name: "description",
        content:
          "Assessoria esportiva de corrida em Curitiba. Treinos no Parque Barigui para quem quer evoluir constantemente. Planos online e presencial com funcional.",
      },
      { property: "og:title", content: "Outlier Running — Corra Fora da Média" },
      {
        property: "og:description",
        content:
          "Assessoria de corrida em Curitiba para quem busca evolução real. Treinos presenciais no Parque Barigui e plano online personalizado.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <div id="top" className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Coach />
      <Plans />
      <HowItWorks />
      <Location />
      <Differentials />
      <Numbers />
      <Partners />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppFab />
    </div>
  );
}

/* ───────────────────────────── HERO ───────────────────────────── */
function Hero() {
  return (
    <section className="relative isolate flex min-h-screen items-center overflow-hidden bg-gradient-hero pt-28">
      {/* bg image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt=""
          width={1920}
          height={1080}
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background" />
        <div className="absolute inset-0 grid-lines opacity-50" />
      </div>

      {/* gold blob */}
      <div className="pointer-events-none absolute -right-40 top-1/4 h-[500px] w-[500px] rounded-full bg-gold/20 blur-[120px]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-primary/10 blur-[100px]" />

      {/* diagonal stripe */}
      <div className="pointer-events-none absolute inset-y-0 left-1/2 -z-0 hidden h-full w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent lg:block" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <Reveal>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
              </span>
              <span className="text-xs font-medium uppercase tracking-widest text-gold">
                Treinos no Parque Barigui — Curitiba
              </span>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="font-display text-[clamp(3.5rem,10vw,8.5rem)] leading-[0.85] tracking-tight">
              CORRA
              <br />
              <span className="text-gradient-gold">FORA DA</span>
              <br />
              MÉDIA.
            </h1>
          </Reveal>

          <Reveal delay={240}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Assessoria de corrida em Curitiba para quem quer{" "}
              <span className="text-foreground">evoluir constantemente</span>,
              superar limites e treinar com propósito.
            </p>
          </Reveal>

          <Reveal delay={360}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contato"
                className="group inline-flex items-center justify-center gap-2 rounded-md bg-gradient-gold px-7 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-gold transition-transform hover:scale-[1.03]"
              >
                Agende seu Treino Experimental
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="https://wa.me/5541999999999?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20a%20Outlier%20Running."
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-md border border-border bg-card/40 px-7 py-4 text-sm font-bold uppercase tracking-wider text-foreground backdrop-blur transition-colors hover:border-gold/50 hover:text-gold"
              >
                <MessageCircle size={18} />
                Falar no WhatsApp
              </a>
            </div>
          </Reveal>
        </div>

        {/* Stat column */}
        <div className="lg:col-span-4 lg:pt-12">
          <Reveal delay={500}>
            <div className="grid grid-cols-3 gap-4 lg:grid-cols-1 lg:gap-6">
              {[
                { v: "10.158", l: "km corridos", small: "+" },
                { v: "1.162", l: "corridas registradas", small: "+" },
                { v: "8", l: "anos na corrida", small: "+" },
              ].map((s) => (
                <div
                  key={s.l}
                  className="relative overflow-hidden rounded-xl border border-border bg-card/40 p-5 backdrop-blur transition-colors hover:border-gold/40"
                >
                  <div className="font-display text-4xl text-gradient-gold lg:text-5xl">
                    {s.small}
                    {s.v}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      {/* speed lines */}
      <svg
        aria-hidden
        className="pointer-events-none absolute bottom-10 right-0 hidden h-24 w-1/2 opacity-30 lg:block"
        viewBox="0 0 600 100"
        fill="none"
      >
        <path d="M0 50 Q 150 0 300 50 T 600 50" stroke="url(#g)" strokeWidth="2" />
        <path d="M0 70 Q 150 30 300 70 T 600 70" stroke="url(#g)" strokeWidth="1" opacity="0.6" />
        <defs>
          <linearGradient id="g" x1="0" x2="1">
            <stop offset="0" stopColor="oklch(0.78 0.14 80)" stopOpacity="0" />
            <stop offset="1" stopColor="oklch(0.78 0.14 80)" />
          </linearGradient>
        </defs>
      </svg>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <ChevronDown className="animate-bounce text-gold/70" size={26} />
      </div>
    </section>
  );
}

/* ───────────────────────────── SOBRE ───────────────────────────── */
function About() {
  return (
    <section id="sobre" className="relative py-28">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <SectionLabel>01 — A Assessoria</SectionLabel>
          <h2 className="mt-4 font-display text-5xl leading-[0.9] sm:text-6xl">
            Mais do que <span className="text-gradient-gold">correr.</span>
          </h2>
        </Reveal>
        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground lg:col-span-7">
          <Reveal delay={100}>
            <p>
              A Outlier Running nasceu da paixão real pela corrida e da pele em risco.
              De quem não conseguia dar uma volta caminhando no Parque Barigui em 2016 
              para uma maratona sub-3h30.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p>
              Observando corredores treinando, surgiu a vontade de
              descobrir <span className="text-foreground">até onde o corpo poderia chegar</span>.
              Hoje, essa busca virou método — e o método virou assessoria.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <p>
              Nossa filosofia é simples: <span className="text-gold">evolução contínua</span>,
              constância, disciplina e corrida com propósito. Não para atletas
              de elite. Para quem quer sair da curva — dentro da própria
              realidade.
            </p>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { icon: Target, label: "Propósito" },
                { icon: Activity, label: "Constância" },
                { icon: Compass, label: "Direção" },
                { icon: Trophy, label: "Evolução" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-2 rounded-lg border border-border bg-card/40 p-4 text-center"
                >
                  <Icon className="text-gold" size={22} />
                  <span className="text-xs font-semibold uppercase tracking-widest">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── COACH ───────────────────────────── */
function Coach() {
  const prs = [
    { d: "5 km", t: "20:19" },
    { d: "10 km", t: "43:28" },
    { d: "Meia", t: "1:34:06" },
    { d: "Maratona", t: "3:29:15" },
  ];

  return (
    <section id="treinador" className="relative bg-navy-deep py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <div className="relative">
            <div className="absolute -inset-2 rounded-2xl bg-gradient-gold opacity-20 blur-xl" />
            <div className="relative overflow-hidden rounded-2xl border border-border">
              <img
                src={coachImg}
                alt="Luiz Gustavo Ladanivski"
                width={1024}
                height={1024}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <div className="text-xs uppercase tracking-widest text-gold">
                  Treinador
                </div>
                <div className="font-display text-3xl leading-tight">
                  Luiz Gustavo
                  <br />
                  Ladanivski
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal>
            <SectionLabel>02 — Por Trás do Método</SectionLabel>
            <h2 className="mt-4 font-display text-5xl leading-[0.9] sm:text-6xl">
              Treinado por quem <span className="text-gradient-gold">vive</span> a corrida.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Estudante de Educação Física na Universidade Positivo, mais de 8
              anos de corrida no asfalto e na pista. Cada planilha que sai
              daqui passou primeiro pelas pernas de quem a escreveu.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {prs.map((p, i) => (
              <Reveal key={p.d} delay={i * 80}>
                <div className="group relative overflow-hidden rounded-xl border border-border bg-card/60 p-5 transition-all hover:border-gold/50 hover:-translate-y-1">
                  <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    PR · {p.d}
                  </div>
                  <div className="mt-2 font-display text-3xl text-gradient-gold">
                    {p.t}
                  </div>
                  <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition">
                    <Trophy size={80} />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={400}>
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-muted-foreground">
              <Stat icon={Activity} v="10.158+" l="km registrados" />
              <Stat icon={Zap} v="1.162+" l="corridas no Strava" />
              <Stat icon={HeartPulse} v="8+ anos" l="de experiência prática" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Stat({
  icon: Icon,
  v,
  l,
}: {
  icon: typeof Activity;
  v: string;
  l: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="rounded-md border border-gold/30 bg-gold/10 p-2">
        <Icon className="text-gold" size={18} />
      </div>
      <div>
        <div className="font-display text-xl text-foreground">{v}</div>
        <div className="text-xs uppercase tracking-widest">{l}</div>
      </div>
    </div>
  );
}

/* ───────────────────────────── PLANS ───────────────────────────── */
function Plans() {
  return (
    <section id="planos" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl">
          <SectionLabel>03 — Modalidades</SectionLabel>
          <h2 className="mt-4 font-display text-5xl leading-[0.9] sm:text-6xl">
            Escolha sua <span className="text-gradient-gold">linha de chegada.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Dois caminhos. O mesmo padrão de exigência.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <Reveal delay={100}>
            <PlanCard
              tag="Plano 01"
              title="Assessoria de Corrida"
              subtitle="Treine onde estiver (Online) ou com a gente no parque."
              items={[
                "Planilha 100% personalizada",
                "Acompanhamento mensal",
                "Suporte direto via WhatsApp",
                "Análise contínua de treinos",
                "Feedback semanal",
                "Acesso futuro à plataforma com educativos, alongamento, aquecimento e desaquecimento",
              ]}
              ideal="Para quem treina sozinho (Online) ou presencial sem funcional."
            />
          </Reveal>

          <Reveal delay={200}>
            <PlanCard
              tag="Plano 02"
              title="Presencial + Funcional"
              subtitle="No coração do Barigui. Com a equipe ao lado."
              featured
              items={[
                "Treinos presenciais no Parque Barigui",
                "Corrida + funcional + educativos",
                "Biomecânica aplicada",
                "Fortalecimento específico de corredor",
                "Acompanhamento próximo de evolução",
              ]}
              schedule={[
                { d: "Seg & Qua", t: "Funcional + educativos + biomecânica" },
                { d: "Ter & Qui", t: "Treino de corrida" },
              ]}
              ideal="Para quem quer estrutura, comunidade e olho no detalhe."
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function PlanCard({
  tag,
  title,
  subtitle,
  items,
  schedule,
  ideal,
  featured,
}: {
  tag: string;
  title: string;
  subtitle: string;
  items: string[];
  schedule?: { d: string; t: string }[];
  ideal: string;
  featured?: boolean;
}) {
  return (
    <div
      className={`relative h-full overflow-hidden rounded-2xl border p-8 sm:p-10 transition-all hover:-translate-y-1 ${
        featured
          ? "border-gold/40 bg-gradient-to-br from-navy to-navy-deep shadow-gold"
          : "border-border bg-card/40"
      }`}
    >
      {featured && (
        <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-gold/20 blur-3xl" />
      )}
      <div className="relative">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">
            {tag}
          </span>
          {featured && (
            <span className="rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-gold">
              Mais Procurado
            </span>
          )}
        </div>
        <h3 className="mt-4 font-display text-5xl leading-none">{title}</h3>
        <p className="mt-3 text-muted-foreground">{subtitle}</p>

        <ul className="mt-8 space-y-3">
          {items.map((it) => (
            <li key={it} className="flex gap-3 text-sm">
              <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-gold" />
              <span className="text-foreground/90">{it}</span>
            </li>
          ))}
        </ul>

        {schedule && (
          <div className="mt-8 space-y-2 rounded-xl border border-border bg-background/40 p-4">
            {schedule.map((s) => (
              <div key={s.d} className="flex items-start gap-3 text-sm">
                <span className="min-w-[90px] font-semibold uppercase tracking-wider text-gold">
                  {s.d}
                </span>
                <span className="text-muted-foreground">{s.t}</span>
              </div>
            ))}
          </div>
        )}

        <p className="mt-8 text-sm italic text-muted-foreground">{ideal}</p>

        <a
          href="#contato"
          className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-md px-6 py-3.5 text-sm font-bold uppercase tracking-wider transition-transform hover:scale-[1.02] ${
            featured
              ? "bg-gradient-gold text-primary-foreground shadow-gold"
              : "border border-border text-foreground hover:border-gold/50 hover:text-gold"
          }`}
        >
          Quero esse plano <ArrowRight size={16} />
        </a>
      </div>
    </div>
  );
}

/* ───────────────────────────── HOW IT WORKS ───────────────────────────── */
function HowItWorks() {
  const steps = [
    { t: "Contato pelo WhatsApp", d: "Mande mensagem. Resposta no mesmo dia." },
    { t: "Conversa inicial", d: "Entendemos sua rotina, histórico e expectativas." },
    { t: "Avaliação de objetivos", d: "Definimos metas reais e mensuráveis." },
    { t: "Aula experimental", d: "Você sente o método antes de fechar." },
    { t: "Início dos treinos", d: "Planilha entregue e equipe ao seu lado." },
    { t: "Evolução contínua", d: "Ajustes, provas e novos PRs." },
  ];

  return (
    <section id="como-funciona" className="relative bg-navy-deep py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl">
          <SectionLabel>04 — O Caminho</SectionLabel>
          <h2 className="mt-4 font-display text-5xl leading-[0.9] sm:text-6xl">
            Como <span className="text-gradient-gold">funciona.</span>
          </h2>
        </Reveal>

        <div className="relative mt-16">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-gold via-gold/40 to-transparent lg:left-1/2 lg:block" />
          <ol className="space-y-8 lg:space-y-12">
            {steps.map((s, i) => (
              <Reveal key={s.t} delay={i * 80}>
                <li
                  className={`relative grid items-center gap-6 lg:grid-cols-2 ${
                    i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className={`${i % 2 === 1 ? "lg:text-left lg:pl-16" : "lg:text-right lg:pr-16"}`}>
                    <div className="font-display text-7xl text-gradient-gold leading-none">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="mt-2 font-display text-2xl">{s.t}</h3>
                    <p className="mt-2 text-muted-foreground">{s.d}</p>
                  </div>
                  <div className="hidden lg:block" />
                  <div className="absolute left-0 top-8 hidden h-4 w-4 -translate-x-1/2 rounded-full bg-gold shadow-gold lg:left-1/2 lg:block animate-pulse-gold" />
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── LOCATION ───────────────────────────── */
function Location() {
  return (
    <section id="local" className="relative py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12">
        <Reveal className="lg:col-span-6">
          <SectionLabel>05 — Onde Acontece</SectionLabel>
          <h2 className="mt-4 font-display text-5xl leading-[0.9] sm:text-6xl">
            Treinos no coração da{" "}
            <span className="text-gradient-gold">corrida de Curitiba.</span>
          </h2>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">
            O Parque Barigui é nosso laboratório a céu aberto. Asfalto, terra
            batida, subidas curtas e a melhor vibe de corrida da cidade.
          </p>

          <div className="mt-10 space-y-4">
            <InfoRow icon={MapPin} title="Local" text="Parque Barigui — Curitiba/PR" />
            <InfoRow icon={Calendar} title="Dias" text="Segunda a Quinta-feira" />
            <InfoRow
              icon={Clock}
              title="Manhã"
              text="05h30 às 09h00"
            />
            <InfoRow icon={Clock} title="Noite" text="18h00 às 20h30" />
          </div>
        </Reveal>

        <Reveal delay={150} className="lg:col-span-6">
          <div className="relative overflow-hidden rounded-2xl border border-border shadow-elevated">
            <img
              src={parkImg}
              alt="Parque Barigui em Curitiba"
              width={1600}
              height={1000}
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-navy-deep/90 via-navy-deep/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <div className="text-xs uppercase tracking-widest text-gold">
                  Ponto de encontro
                </div>
                <div className="font-display text-3xl">Parque Barigui</div>
              </div>
              <a
                href="https://maps.google.com/?q=Parque+Barigui+Curitiba"
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-gold/40 bg-background/60 px-4 py-2 text-xs font-bold uppercase tracking-wider text-gold backdrop-blur hover:bg-gold/10"
              >
                Ver no mapa
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function InfoRow({
  icon: Icon,
  title,
  text,
}: {
  icon: typeof MapPin;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-start gap-4 rounded-xl border border-border bg-card/40 p-4">
      <div className="rounded-md bg-gold/10 p-2.5 ring-1 ring-gold/30">
        <Icon className="text-gold" size={20} />
      </div>
      <div>
        <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          {title}
        </div>
        <div className="text-lg text-foreground">{text}</div>
      </div>
    </div>
  );
}

/* ───────────────────────────── DIFFERENTIALS ───────────────────────────── */
function Differentials() {
  const items = [
    { icon: Target, t: "Acompanhamento próximo", d: "Você não é um nome em planilha." },
    { icon: Activity, t: "Evolução individual", d: "Carga e estímulo respeitando você." },
    { icon: MessageCircle, t: "Suporte via WhatsApp", d: "Dúvida hoje, resposta hoje." },
    { icon: Dumbbell, t: "Funcional específico", d: "Força para correr mais e melhor." },
    { icon: Zap, t: "Educativos de corrida", d: "Técnica destrava performance." },
    { icon: HeartPulse, t: "Biomecânica aplicada", d: "Correr sem deixar peças pelo caminho." },
    { icon: Users, t: "Comunidade real", d: "Confraternizações mensais e parcerias." },
    { icon: Trophy, t: "Performance inteligente", d: "Sem pressão exagerada. Com método." },
  ];

  return (
    <section className="relative bg-navy-deep py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl">
          <SectionLabel>06 — Diferenciais</SectionLabel>
          <h2 className="mt-4 font-display text-5xl leading-[0.9] sm:text-6xl">
            Performance <span className="text-gradient-gold">inteligente.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, t, d }, i) => (
            <Reveal key={t} delay={i * 50}>
              <div className="group h-full bg-background p-7 transition-colors hover:bg-card">
                <Icon className="text-gold transition-transform group-hover:scale-110" size={28} />
                <h3 className="mt-5 font-display text-xl">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── NUMBERS ───────────────────────────── */
function Numbers() {
  const data = [
    { v: 10158, suffix: "+", l: "km corridos" },
    { v: 1162, suffix: "+", l: "corridas registradas" },
    { v: 8, suffix: "+", l: "anos treinando" },
    { v: 30, suffix: "+", l: "provas concluídas" },
  ];
  return (
    <section className="relative overflow-hidden py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-navy/40 to-background" />
      <div className="absolute inset-0 grid-lines opacity-40" />
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal className="text-center">
          <SectionLabel className="justify-center">07 — Números que correm com você</SectionLabel>
          <h2 className="mt-4 font-display text-5xl leading-[0.9] sm:text-6xl">
            Experiência <span className="text-gradient-gold">no asfalto.</span>
          </h2>
        </Reveal>

        <div className="mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {data.map((s, i) => (
            <Reveal key={s.l} delay={i * 100}>
              <div className="text-center">
                <div className="font-display text-7xl leading-none text-gradient-gold sm:text-8xl">
                  <Counter to={s.v} suffix={s.suffix} />
                </div>
                <div className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                  {s.l}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── PARTNERS ───────────────────────────── */
function Partners() {
  const slots = [
    { icon: Apple, label: "Nutrição" },
    { icon: HeartPulse, label: "Fisioterapia" },
    { icon: Stethoscope, label: "Medicina Esportiva" },
    { icon: Pill, label: "Suplementação" },
  ];
  return (
    <section className="relative bg-navy-deep py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl">
          <SectionLabel>08 — Ecossistema</SectionLabel>
          <h2 className="mt-4 font-display text-5xl leading-[0.9] sm:text-6xl">
            Uma rede para sua <span className="text-gradient-gold">evolução.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Construindo uma rede completa de profissionais parceiros para
            cuidar do atleta em todas as frentes.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {slots.map(({ icon: Icon, label }, i) => (
            <Reveal key={label} delay={i * 80}>
              <div className="group relative flex aspect-square flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-border bg-card/30 p-6 transition-all hover:border-gold/40">
                <Icon className="text-muted-foreground transition-colors group-hover:text-gold" size={40} />
                <div className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                  {label}
                </div>
                <span className="absolute top-3 right-3 rounded-full border border-border bg-background/60 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  Em breve
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={400}>
          <p className="mt-10 text-center text-sm uppercase tracking-widest text-muted-foreground">
            Quer ser parceiro?{" "}
            <a href="#contato" className="text-gold hover:underline">
              Fale com a gente
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────────────────────── FAQ ───────────────────────────── */
function FAQ() {
  const faqs = [
    {
      q: "Preciso já correr para participar?",
      a: "Não. Recebemos pessoas de todos os níveis, do primeiro km ao corredor experiente. O método se ajusta a você.",
    },
    {
      q: "Posso fazer aula experimental?",
      a: "Sim. A aula experimental é grátis e serve para você sentir o método antes de qualquer compromisso.",
    },
    {
      q: "Como funciona o acompanhamento?",
      a: "No presencial, equipe junto em todo treino. No online, planilha personalizada, feedback contínuo e suporte direto via WhatsApp.",
    },
    {
      q: "O treino é individualizado?",
      a: "Sim. Mesmo treinando em grupo, cada planilha é construída para o seu objetivo, histórico e disponibilidade.",
    },
    {
      q: "Os treinos servem para iniciantes?",
      a: "Servem e foram pensados também para quem está começando. A progressão respeita seu ritmo.",
    },
    {
      q: "Como funciona o plano online?",
      a: "Você recebe a planilha semanal/mensal, envia retorno dos treinos e tem suporte direto. Em breve, acesso à plataforma com vídeos.",
    },
    {
      q: "Onde acontecem os treinos?",
      a: "No Parque Barigui, em Curitiba. De segunda a quinta, manhã e noite.",
    },
    {
      q: "O funcional está incluso?",
      a: "Está incluso no Plano Presencial + Funcional, com sessões dedicadas em dias específicos da semana.",
    },
  ];

  return (
    <section id="faq" className="relative py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <SectionLabel>09 — Dúvidas</SectionLabel>
          <h2 className="mt-4 font-display text-5xl leading-[0.9] sm:text-6xl">
            Tira a <span className="text-gradient-gold">dúvida.</span>
          </h2>
          <p className="mt-6 text-muted-foreground">
            Se ficou algo de fora, manda no WhatsApp. A gente responde rápido.
          </p>
        </Reveal>

        <div className="lg:col-span-8">
          {faqs.map((f, i) => (
            <FAQItem key={f.q} {...f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <Reveal delay={index * 50}>
      <div className="border-b border-border">
        <button
          onClick={() => setOpen(!open)}
          className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:text-gold"
        >
          <span className="font-display text-lg sm:text-xl">{q}</span>
          <ChevronDown
            className={`shrink-0 text-gold transition-transform ${
              open ? "rotate-180" : ""
            }`}
            size={22}
          />
        </button>
        <div
          className={`grid overflow-hidden transition-all duration-300 ${
            open ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="min-h-0">
            <p className="text-muted-foreground">{a}</p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

/* ───────────────────────────── CONTACT ───────────────────────────── */
function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const msg = `Olá! Quero treinar com a Outlier.%0A%0ANome: ${data.get("nome")}%0AObjetivo: ${data.get("objetivo")}%0AExperiência: ${data.get("experiencia")}`;
    window.open(`https://wa.me/5541999999999?text=${msg}`, "_blank");
    setSent(true);
  };

  return (
    <section id="contato" className="relative overflow-hidden py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep via-background to-background" />
      <div className="absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full bg-gold/10 blur-[140px]" />

      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <SectionLabel>10 — Vamos correr</SectionLabel>
          <h2 className="mt-4 font-display text-5xl leading-[0.9] sm:text-6xl">
            Comece sua <span className="text-gradient-gold">evolução</span> hoje.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Preencha o formulário e abriremos a conversa no WhatsApp na hora.
            Sua aula experimental está a um clique.
          </p>

          <div className="mt-10 space-y-4">
            <a
              href="https://wa.me/5541999999999"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-xl border border-border bg-card/40 p-4 transition-colors hover:border-gold/50"
            >
              <div className="rounded-md bg-gold/10 p-2.5 ring-1 ring-gold/30">
                <MessageCircle className="text-gold" size={20} />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                  WhatsApp
                </div>
                <div className="text-foreground">Falar agora com o time</div>
              </div>
            </a>
            <div className="flex items-center gap-4 rounded-xl border border-border bg-card/40 p-4">
              <div className="rounded-md bg-gold/10 p-2.5 ring-1 ring-gold/30">
                <MapPin className="text-gold" size={20} />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                  Onde treinamos
                </div>
                <div className="text-foreground">Parque Barigui — Curitiba/PR</div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150} className="lg:col-span-7">
          <form
            onSubmit={onSubmit}
            className="relative rounded-2xl border border-border bg-card/60 p-8 backdrop-blur shadow-elevated sm:p-10"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field name="nome" label="Nome" placeholder="Seu nome completo" required />
              <Field name="email" label="E-mail" type="email" placeholder="voce@email.com" required />
              <Field name="telefone" label="Telefone" placeholder="(41) 99999-9999" required />
              <Select
                name="objetivo"
                label="Objetivo"
                options={[
                  "Começar a correr",
                  "Voltar a correr",
                  "Melhorar performance",
                  "Treinar para uma prova",
                  "Emagrecimento",
                ]}
              />
            </div>

            <div className="mt-5">
              <Select
                name="experiencia"
                label="Experiência com corrida"
                options={[
                  "Nunca corri",
                  "Iniciante (até 6 meses)",
                  "Intermediário (6 meses a 2 anos)",
                  "Avançado (2+ anos)",
                ]}
              />
            </div>

            <button
              type="submit"
              className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-md bg-gradient-gold px-7 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-gold transition-transform hover:scale-[1.01]"
            >
              {sent ? "Conversa aberta no WhatsApp" : "Enviar e abrir WhatsApp"}
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </button>

            <p className="mt-4 text-center text-xs text-muted-foreground">
              Resposta em até algumas horas, em horário comercial.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-md border border-border bg-background/60 px-4 py-3 text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-gold/60 focus:ring-2 focus:ring-gold/20"
      />
    </label>
  );
}

function Select({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      <select
        name={name}
        className="w-full rounded-md border border-border bg-background/60 px-4 py-3 text-foreground outline-none transition-colors focus:border-gold/60 focus:ring-2 focus:ring-gold/20"
        defaultValue=""
      >
        <option value="" disabled>
          Selecione...
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}

/* ───────────────────────────── FOOTER ───────────────────────────── */
function Footer() {
  return (
    <footer className="relative border-t border-border bg-navy-deep py-16">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3">
            <img src={logoMark} alt="" width={40} height={40} className="h-10 w-10" />
            <span className="font-display text-2xl tracking-[0.18em]">
              OUTLIER<span className="text-gold">.</span>
            </span>
          </div>
          <p className="mt-6 max-w-sm text-muted-foreground">
            Assessoria de corrida em Curitiba para quem quer evoluir
            constantemente — dentro da própria realidade.
          </p>
        </div>

        <div className="lg:col-span-3">
          <h4 className="font-display text-sm uppercase tracking-widest text-gold">
            Navegação
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><a href="#sobre" className="hover:text-gold">Sobre</a></li>
            <li><a href="#planos" className="hover:text-gold">Planos</a></li>
            <li><a href="#como-funciona" className="hover:text-gold">Como Funciona</a></li>
            <li><a href="#local" className="hover:text-gold">Local & Horários</a></li>
            <li><a href="#faq" className="hover:text-gold">FAQ</a></li>
          </ul>
        </div>

        <div className="lg:col-span-4">
          <h4 className="font-display text-sm uppercase tracking-widest text-gold">
            Contato
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><MapPin size={16} className="text-gold" /> Parque Barigui — Curitiba/PR</li>
            <li className="flex items-center gap-2"><Clock size={16} className="text-gold" /> Seg–Qui · 05h30–09h00 e 18h00–20h30</li>
            <li className="flex items-center gap-2"><Phone size={16} className="text-gold" /> WhatsApp em breve</li>
            <li className="flex items-center gap-2"><Mail size={16} className="text-gold" /> contato em breve</li>
          </ul>
          <div className="mt-6 flex gap-3">
            <a aria-label="Instagram" href="#" className="rounded-md border border-border bg-card/40 p-2.5 text-muted-foreground hover:border-gold/40 hover:text-gold">
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-7xl border-t border-border px-6 pt-8 pb-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          
          <div className="flex-1 flex justify-start">
            <p className="font-display text-sm uppercase tracking-[0.25em] text-muted-foreground text-center sm:text-left">
              Outlier Running — <span className="text-gold">evolução constante.</span>
            </p>
          </div>

          <div className="flex-1 flex justify-center text-[11px] font-sans tracking-wider text-muted-foreground items-center gap-1 select-none">
            <span>Designed by</span>
            <a href="https://www.linkedin.com/in/lucas-kumegawa/" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center text-muted-foreground transition-all duration-300 hover:text-foreground">
              <span className="font-oleo text-[16px] text-primary tracking-normal normal-case transition-all duration-300 group-hover:text-gold">Kumegawa</span>
            </a>
          </div>

          <div className="flex-1 flex justify-end">
            <p className="text-xs text-muted-foreground text-center sm:text-right">
              © {new Date().getFullYear()} Outlier Running. Todos os direitos reservados.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}

/* ───────────────────────────── FAB ───────────────────────────── */
function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/5541999999999"
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-gold text-primary-foreground shadow-gold transition-transform hover:scale-110 animate-pulse-gold"
    >
      <MessageCircle size={26} />
    </a>
  );
}

/* ───────────────────────────── helpers ───────────────────────────── */
function SectionLabel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="h-px w-10 bg-gold" />
      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
        {children}
      </span>
    </div>
  );
}