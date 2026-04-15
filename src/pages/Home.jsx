import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// ── Inline SVG Icons (no lucide-react needed) ──────────────────────────────
const ArrowRight = ({ size = 16 }) => (
  <svg width={size} height={size} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
  </svg>
)
const ChevronLeft = ({ size = 18 }) => (
  <svg width={size} height={size} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
  </svg>
)
const ChevronRight = ({ size = 18 }) => (
  <svg width={size} height={size} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
  </svg>
)
const StarIcon = () => (
  <svg width={12} height={12} fill="#D98A6C" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
)

// ── Animation hook ──────────────────────────────────────────────────────────
function useInView(threshold = 0.12) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, inView]
}

// ── Data ────────────────────────────────────────────────────────────────────
const services = [
  { emoji: '🌿', title: 'Yoga Therapy', desc: 'Safe, alignment-based asana practices tailored for your physical condition, healing joint disorders and lifestyle imbalances at the root level.', color: '#9EAC90' },
  { emoji: '🔮', title: 'Chakra Healing', desc: 'Energy-based practices that unblock, balance, and harmonize your seven chakras — restoring vitality, emotional clarity, and inner peace.', color: '#D98A6C' },
  { emoji: '🌬️', title: 'Meditation & Pranayama', desc: 'Purpose-driven breathwork and guided meditation sessions designed to calm the nervous system, sharpen focus, and elevate awareness.', color: '#A89CC8' },
  { emoji: '✨', title: 'Energy Healing', desc: 'Holistic energy work rooted in ancient yogic wisdom, designed to release deep-seated stress patterns and restore your natural energetic flow.', color: '#D4A96A' },
]

const corePillars = [
  {
    number: '01',
    icon: '🔮',
    title: 'Chakra-Centric Therapy',
    desc: 'Root-level healing that balances mind, body, and energy through guided yogic and energy practices. Each session works on the energetic core — not just the surface.',
    accent: '#D98A6C',
    bg: 'rgba(217,138,108,0.07)',
    border: 'rgba(217,138,108,0.2)',
  },
  {
    number: '02',
    icon: '🤲',
    title: 'Personalized Healing',
    desc: 'Customized yoga, meditation, and chakra healing sessions built around your individual physical, emotional, and energetic landscape — because no two journeys are alike.',
    accent: '#9EAC90',
    bg: 'rgba(158,172,144,0.07)',
    border: 'rgba(158,172,144,0.25)',
  },
  {
    number: '03',
    icon: '🛡️',
    title: 'Safe & Aligned Practice',
    desc: 'Gentle, breath-integrated techniques ensuring safety, comfort, and long-term wellbeing for all age groups — beginners, seniors, and those managing health conditions.',
    accent: '#A89CC8',
    bg: 'rgba(168,156,200,0.07)',
    border: 'rgba(168,156,200,0.22)',
  },
]

const testimonials = [
  { name: 'Ashwaani Mehta', text: "Trijita's personalized approach combines gentle asanas, pranayama, and meditation tailored to my health challenges — helping me stabilize blood sugar, reduce hypertension, and shed 12 kg. A true healer!", rating: 5 },
  { name: 'Sushanta Goswami', text: "I've been a cancer patient since 2014. Regular practice of Yogambika's yoga lessons has kept the effects of cancer broadly under control. Truly life-changing.", rating: 5 },
  { name: 'Smruti Sanghavi', text: 'Kind, patient, and motivating — each session feels different and positive. The energy and care in every class is genuinely special.', rating: 5 },
  { name: 'Manjury Dwivedi', text: 'It is very calm and quiet. The yoga practices are really good — I feel very light and rejuvenated whenever I attend these classes.', rating: 5 },
  { name: 'Hitesh Patel', text: 'They guide, motivate, and help people connect with their body, mind, and breath. Tailored practices that genuinely improve flexibility and overall wellbeing.', rating: 5 },
]

const pillars = [
  { title: 'Holistic Healing', desc: 'Balancing mind, body, and energy for lasting transformation, not temporary relief.' },
  { title: 'Chakra-Centric', desc: 'Root-level therapy targeting the energetic source of physical and emotional imbalance.' },
  { title: 'Personalized Care', desc: 'Every session is uniquely designed for your body, emotional state, and wellness goals.' },
  { title: 'Safe for All Ages', desc: 'Gentle, alignment-based yoga suitable for beginners, seniors, and those with health concerns.' },
]

// ── Testimonial Slider ──────────────────────────────────────────────────────
function TestimonialSlider() {
  const [current, setCurrent] = useState(0)
  const prev = () => setCurrent(c => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent(c => (c + 1) % testimonials.length)
  const [ref, inView] = useInView()

  useEffect(() => {
    const t = setInterval(next, 5000)
    return () => clearInterval(t)
  })

  const t = testimonials[current]
  return (
    <div ref={ref} className="relative max-w-2xl mx-auto" style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.7s ease' }}>
      <div className="p-8 md:p-12 rounded-3xl relative overflow-hidden"
        style={{ background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(20px)', border: '1px solid rgba(158,172,144,0.25)', boxShadow: '0 20px 60px rgba(45,60,51,0.08)' }}>
        <div className="text-7xl leading-none mb-2" style={{ color: '#D98A6C', opacity: 0.25, fontFamily: 'serif' }}>"</div>
        <p className="text-base md:text-lg leading-relaxed mb-6" style={{ color: '#3D5045', fontFamily: '"Inter", sans-serif' }}>{t.text}</p>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
            style={{ background: 'linear-gradient(135deg, #9EAC90, #D98A6C)' }}>
            {t.name[0]}
          </div>
          <div>
            <p className="font-semibold text-sm" style={{ color: '#2D3C33', fontFamily: '"Playfair Display", serif' }}>{t.name}</p>
            <div className="flex gap-0.5 mt-0.5">{[...Array(t.rating)].map((_, i) => <StarIcon key={i} />)}</div>
          </div>
          <div className="ml-auto text-xs" style={{ color: '#9EAC90' }}>Google Review ✓</div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 mt-6">
        <button onClick={prev} className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
          style={{ background: 'rgba(158,172,144,0.2)', color: '#2D3C33' }}>
          <ChevronLeft size={18} />
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} className="rounded-full transition-all duration-300"
              style={{ width: i === current ? 24 : 8, height: 8, background: i === current ? '#D98A6C' : '#9EAC90', opacity: i === current ? 1 : 0.4 }} />
          ))}
        </div>
        <button onClick={next} className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
          style={{ background: 'rgba(158,172,144,0.2)', color: '#2D3C33' }}>
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  )
}

// ── FAQ Item ────────────────────────────────────────────────────────────────
function FaqItem({ faq }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-2xl overflow-hidden transition-all duration-300"
      style={{ border: '1px solid rgba(158,172,144,0.25)', background: open ? 'rgba(158,172,144,0.08)' : 'rgba(255,255,255,0.6)' }}>
      <button onClick={() => setOpen(!open)} className="w-full text-left p-5 flex items-center justify-between gap-4"
        style={{ fontFamily: '"Inter", sans-serif' }}>
        <span className="font-medium text-sm" style={{ color: '#1E2B25' }}>{faq.q}</span>
        <span style={{ color: '#9EAC90', transform: open ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.3s', flexShrink: 0, display: 'inline-flex' }}>
          <ChevronRight size={16} />
        </span>
      </button>
      {open && (
        <div className="px-5 pb-5">
          <p className="text-sm leading-relaxed" style={{ color: '#5A7060' }}>{faq.a}</p>
        </div>
      )}
    </div>
  )
}

// ── Core Pillars Section (unique design) ────────────────────────────────────
function CorePillars() {
  const [ref, inView] = useInView(0.08)

  return (
    <section className="py-20 md:py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #1E2B25 0%, #253325 60%, #1E2B25 100%)' }}>

      {/* Subtle radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div style={{ position: 'absolute', top: '20%', left: '10%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(158,172,144,0.08) 0%, transparent 70%)' }} />
        <div style={{ position: 'absolute', bottom: '10%', right: '5%', width: 350, height: 350, borderRadius: '50%', background: 'radial-gradient(circle, rgba(217,138,108,0.07) 0%, transparent 70%)' }} />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase mb-4 block" style={{ color: '#D98A6C' }}>
            Why It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ fontFamily: '"Playfair Display", serif', color: '#FDFBF7' }}>
            Our Core Healing Principles
          </h2>
          <p className="max-w-xl mx-auto text-sm leading-relaxed" style={{ color: '#7A9E80' }}>
            Every modality at YogAmbika is built on three foundational pillars — working together to create lasting change.
          </p>
        </div>

        {/* Three pillar cards — staggered, asymmetric layout */}
        <div className="grid md:grid-cols-3 gap-0 md:gap-0 relative">

          {/* Connecting line on desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px"
            style={{ background: 'linear-gradient(90deg, transparent 5%, rgba(158,172,144,0.2) 30%, rgba(217,138,108,0.3) 50%, rgba(158,172,144,0.2) 70%, transparent 95%)', zIndex: 0 }} />

          {corePillars.map((p, i) => (
            <div key={i}
              className="relative flex flex-col items-center text-center px-8 py-10 group"
              style={{
                borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                opacity: inView ? 1 : 0,
                transform: inView
                  ? `translateY(${i === 1 ? '-12px' : '0px'})`
                  : 'translateY(40px)',
                transition: `all 0.7s ease ${i * 0.15}s`,
              }}>

              {/* Big faded number in background */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 text-8xl font-black select-none pointer-events-none"
                style={{ color: 'rgba(255,255,255,0.03)', fontFamily: '"Playfair Display", serif', lineHeight: 1 }}>
                {p.number}
              </div>

              {/* Icon orb */}
              <div className="relative mb-6 z-10">
                {/* Outer ring */}
                <div className="w-20 h-20 rounded-full flex items-center justify-center transition-transform duration-500 group-hover:scale-110"
                  style={{ background: p.bg, border: `1px solid ${p.border}` }}>
                  {/* Inner glow dot */}
                  <div className="w-14 h-14 rounded-full flex items-center justify-center"
                    style={{ background: `linear-gradient(135deg, ${p.accent}18, ${p.accent}30)` }}>
                    <span className="text-2xl">{p.icon}</span>
                  </div>
                </div>
                {/* Pulse ring animation */}
                <div className="absolute inset-0 rounded-full animate-ping opacity-0 group-hover:opacity-20"
                  style={{ background: p.accent, animationDuration: '2s' }} />
              </div>

              {/* Step badge */}
              <span className="text-xs font-bold tracking-widest uppercase mb-3 px-3 py-1 rounded-full"
                style={{ color: p.accent, background: `${p.accent}15`, border: `1px solid ${p.border}` }}>
                Pillar {p.number}
              </span>

              <h3 className="text-lg font-bold mb-3"
                style={{ fontFamily: '"Playfair Display", serif', color: '#FDFBF7' }}>
                {p.title}
              </h3>

              <p className="text-sm leading-relaxed"
                style={{ color: '#8A9E8E', maxWidth: 240, margin: '0 auto' }}>
                {p.desc}
              </p>

              {/* Bottom accent line */}
              <div className="mt-6 h-px w-12 mx-auto transition-all duration-500 group-hover:w-20"
                style={{ background: `linear-gradient(90deg, transparent, ${p.accent}, transparent)` }} />
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="text-center mt-14">
          <a href="https://wa.link/1td6k4" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105"
            style={{ background: 'rgba(158,172,144,0.15)', border: '1px solid rgba(158,172,144,0.3)', color: '#C5CFC1' }}>
            <span>Experience all three pillars firsthand</span>
            <span style={{ display: 'inline-flex' }}><ArrowRight size={15} /></span>
          </a>
        </div>
      </div>
    </section>
  )
}

// ── Main Home Page ──────────────────────────────────────────────────────────
export default function Home() {
  const [servRef, servInView] = useInView()
  const [pillRef, pillInView] = useInView()
  const [ctaRef, ctaInView] = useInView()

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: 'linear-gradient(145deg, #EEE8DE 0%, #F5EFE6 40%, #DDE7D8 100%)' }}>
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #9EAC90, transparent)', filter: 'blur(60px)' }} />
        <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, #D98A6C, transparent)', filter: 'blur(80px)' }} />
        {/* Concentric circles decoration */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-5 flex items-center justify-center pointer-events-none">
          {[600,500,400,300].map(s => (
            <div key={s} className="absolute rounded-full border"
              style={{ width: s, height: s, borderColor: '#2D3C33', borderWidth: 1 }} />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-16 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium tracking-widest uppercase mb-8"
              style={{ background: 'rgba(158,172,144,0.2)', color: '#5A7060', border: '1px solid rgba(158,172,144,0.3)' }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#9EAC90' }} />
              Holistic Wellness · Kharghar, Navi Mumbai
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              style={{ fontFamily: '"Playfair Display", serif', color: '#1E2B25' }}>
              Restore Balance.<br />
              <span style={{ color: '#D98A6C' }}>Heal from Within.</span>
            </h1>

            <p className="text-base md:text-lg leading-relaxed mb-10 max-w-lg"
              style={{ color: '#4A6055', fontFamily: '"Inter", sans-serif' }}>
              Experience India's most personalized yoga therapy, chakra healing, and meditation — guided by Trijita Goswami at YogAmbika, Kharghar. Trusted by 100+ clients for root-level transformation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.link/1td6k4" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #9EAC90, #6E8C74)', color: '#fff', boxShadow: '0 8px 30px rgba(110,140,116,0.4)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Book a Free Session
              </a>
              <Link to="/services"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-sm font-semibold transition-all duration-300"
                style={{ border: '1.5px solid rgba(45,60,51,0.25)', color: '#2D3C33' }}
                onMouseEnter={e => e.currentTarget.style.gap = '10px'}
                onMouseLeave={e => e.currentTarget.style.gap = '8px'}>
                Explore Services <ArrowRight size={16} />
              </Link>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap items-center gap-6 mt-10">
              {[
                { val: '100+', label: 'Happy Clients' },
                { val: '5★', label: 'Google Rating' },
                { val: '10+', label: 'Years Experience' },
                { val: 'Online', label: 'Sessions Available' },
              ].map(item => (
                <div key={item.label}>
                  <p className="text-lg font-bold" style={{ fontFamily: '"Playfair Display", serif', color: '#2D3C33' }}>{item.val}</p>
                  <p className="text-xs" style={{ color: '#8A9E8E' }}>{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0" style={{ height: 80 }}>
          <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
            <path d="M0 80L48 69.3C96 59 192 37 288 32C384 27 480 37 576 48C672 59 768 69 864 64C960 59 1056 37 1152 32C1248 27 1344 37 1392 42.7L1440 48V80H0Z" fill="#FDFBF7" />
          </svg>
        </div>
      </section>

      {/* ── ABOUT SNIPPET ── */}
      <section className="py-20 md:py-28" style={{ background: '#FDFBF7' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase mb-4 block" style={{ color: '#D98A6C' }}>About YogAmbika</span>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6" style={{ fontFamily: '"Playfair Display", serif', color: '#1E2B25' }}>
                More Than a Practice —<br />A Path to Inner Harmony
              </h2>
              <p className="leading-relaxed mb-5" style={{ color: '#4A6055' }}>
                YogAmbika is a sacred holistic wellness space in Kharghar, Navi Mumbai, dedicated to restoring harmony between your mind, body, and energy. Under the expert guidance of <strong>Trijita Goswami</strong>, our approach goes beyond physical postures.
              </p>
              <p className="leading-relaxed mb-8" style={{ color: '#4A6055' }}>
                Whether you're managing chronic conditions, stress, emotional blocks, or simply seeking inner calm — YogAmbika offers a compassionate, results-oriented healing journey tailored exclusively for you.
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200" style={{ color: '#D98A6C' }}>
                Discover Our Story <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '🌿', title: 'Root-Level Healing', desc: 'Targeting the source of imbalance, not just symptoms' },
                { icon: '🧘', title: 'Breath-Integrated', desc: 'Every movement guided by conscious, healing breath' },
                { icon: '✨', title: 'Chakra-Focused', desc: 'Energetic alignment for complete inner transformation' },
                { icon: '🤝', title: 'Personalized Care', desc: 'Uniquely tailored to your physical and emotional needs' },
              ].map((item, i) => (
                <div key={i} className="p-5 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                  style={{ background: i % 2 === 0 ? 'rgba(158,172,144,0.1)' : 'rgba(217,138,108,0.08)', border: '1px solid rgba(158,172,144,0.2)' }}>
                  <span className="text-2xl mb-3 block">{item.icon}</span>
                  <h4 className="font-semibold text-sm mb-1" style={{ fontFamily: '"Playfair Display", serif', color: '#1E2B25' }}>{item.title}</h4>
                  <p className="text-xs leading-relaxed" style={{ color: '#6A8070' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE PILLARS (new premium section) ── */}
      <CorePillars />

      {/* ── SERVICES ── */}
      <section className="py-20 md:py-28 relative overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #F5F0E8 0%, #EDE6D9 100%)' }}>
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #2D3C33 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div ref={servRef} className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold tracking-widest uppercase mb-3 block" style={{ color: '#D98A6C' }}>What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: '"Playfair Display", serif', color: '#1E2B25' }}>
              Healing Services Designed for You
            </h2>
            <p className="mt-3 max-w-xl mx-auto text-sm leading-relaxed" style={{ color: '#5A7060' }}>
              Each modality works synergistically to address your unique physical, emotional, and energetic needs.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <div key={i}
                className="p-6 rounded-2xl group transition-all duration-400 hover:-translate-y-2 cursor-pointer"
                style={{
                  background: 'rgba(255,255,255,0.75)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.8)',
                  boxShadow: '0 4px 20px rgba(45,60,51,0.06)',
                  opacity: servInView ? 1 : 0,
                  transform: servInView ? 'translateY(0)' : 'translateY(40px)',
                  transition: `all 0.6s ease ${i * 0.1}s`,
                }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-2xl transition-transform group-hover:scale-110"
                  style={{ background: `${s.color}20` }}>
                  {s.emoji}
                </div>
                <h3 className="font-bold text-base mb-2" style={{ fontFamily: '"Playfair Display", serif', color: '#1E2B25' }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#5A7060' }}>{s.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: s.color }}>
                  Learn more <ArrowRight size={12} />
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105"
              style={{ background: '#2D3C33', color: '#FDFBF7' }}>
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-20 md:py-28" style={{ background: '#FDFBF7' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold tracking-widest uppercase mb-3 block" style={{ color: '#D98A6C' }}>Why YogAmbika</span>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: '"Playfair Display", serif', color: '#1E2B25' }}>
              The YogAmbika Difference
            </h2>
          </div>
          <div ref={pillRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p, i) => (
              <div key={i} className="text-center p-6"
                style={{
                  opacity: pillInView ? 1 : 0,
                  transform: pillInView ? 'translateY(0)' : 'translateY(30px)',
                  transition: `all 0.6s ease ${i * 0.12}s`,
                }}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: 'linear-gradient(135deg, rgba(158,172,144,0.2), rgba(217,138,108,0.15))' }}>
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#9EAC90" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-base mb-2" style={{ fontFamily: '"Playfair Display", serif', color: '#1E2B25' }}>{p.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#5A7060' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 md:py-28 relative overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #E8EDE4 0%, #EDE4DC 100%)' }}>
        <div className="absolute top-0 left-0 w-full h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(158,172,144,0.4), transparent)' }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-widest uppercase mb-3 block" style={{ color: '#D98A6C' }}>Client Stories</span>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: '"Playfair Display", serif', color: '#1E2B25' }}>
              Lives Transformed at YogAmbika
            </h2>
            <p className="mt-3 text-sm" style={{ color: '#5A7060' }}>Real experiences from real people on their healing journey with us.</p>
          </div>
          <TestimonialSlider />
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 md:py-24" style={{ background: '#FDFBF7' }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-widest uppercase mb-3 block" style={{ color: '#D98A6C' }}>FAQ</span>
            <h2 className="text-3xl font-bold" style={{ fontFamily: '"Playfair Display", serif', color: '#1E2B25' }}>Common Questions</h2>
          </div>
          <div className="space-y-3">
            {[
              { q: 'Are the yoga sessions suitable for beginners?', a: 'Absolutely. All sessions are gentle, safe, and designed to be beginner-friendly. We start where you are and progress at your own pace.' },
              { q: 'Do you offer online sessions?', a: 'Yes, flexible online yoga and meditation sessions are available for clients who prefer to heal from the comfort of their home.' },
              { q: 'Can chakra healing help with stress and anxiety?', a: 'Yes — chakra healing directly supports the regulation of your nervous system, emotional processing, and mental clarity.' },
              { q: 'Are sessions personalized to my needs?', a: 'Every single session is tailored to your physical condition, emotional state, and energy requirements. We take a deeply individual approach.' },
              { q: 'What are your operating hours and location?', a: 'YogAmbika is open Monday–Saturday, 8 AM – 7 PM, located at ShivTirth Apartment, Kharghar, Navi Mumbai.' },
            ].map((faq, i) => <FaqItem key={i} faq={faq} />)}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section ref={ctaRef} className="py-20 md:py-28 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1E2B25 0%, #2D3C33 50%, #1E2B25 100%)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, #9EAC90 0%, transparent 70%)' }} />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 70% 50%, #D98A6C 0%, transparent 70%)' }} />
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10"
          style={{ opacity: ctaInView ? 1 : 0, transform: ctaInView ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.8s ease' }}>
          <span className="text-xs font-semibold tracking-widest uppercase mb-4 block" style={{ color: '#9EAC90' }}>Start Your Journey</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight" style={{ fontFamily: '"Playfair Display", serif', color: '#FDFBF7' }}>
            Your Healing Begins<br />with One Step
          </h2>
          <p className="text-base leading-relaxed mb-10 max-w-xl mx-auto" style={{ color: '#9EAC90' }}>
            Reach out on WhatsApp to schedule a free consultation. Discover how personalized yoga therapy and holistic healing can transform your life — not just your body.
          </p>
          <a href="https://wa.link/1td6k4" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105"
            style={{ background: '#25D366', color: '#fff', boxShadow: '0 8px 30px rgba(37,211,102,0.35)' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Chat on WhatsApp — It's Free
          </a>
        </div>
      </section>
    </>
  )
}
