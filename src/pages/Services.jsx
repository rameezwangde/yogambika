import { useEffect, useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'

function useInView(threshold = 0.1) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, inView]
}

const services = [
  {
    icon: '🌿',
    title: 'Yoga Therapy (Yog Asanas)',
    tag: 'Core Practice',
    tagColor: '#9EAC90',
    desc: 'Personalized, alignment-based asana sequences designed to address specific physical conditions. Ideal for joint disorders, back pain, lifestyle diseases, and postural correction.',
    points: ['Alignment-based & safe', 'Breath-integrated movement', 'Individualized to your body', 'Suitable for all ages'],
  },
  {
    icon: '⚡',
    title: 'Chakra Healing',
    tag: 'Signature Service',
    tagColor: '#D98A6C',
    desc: 'A deep energetic practice that identifies blocked or imbalanced chakras and uses yogic techniques to restore their natural flow — leading to emotional clarity, physical vitality, and spiritual grounding.',
    points: ['7-chakra assessment', 'Energy blockage release', 'Emotional & physical balance', 'Root-level transformation'],
  },
  {
    icon: '🌬️',
    title: 'Meditation & Pranayama',
    tag: 'Mind Mastery',
    tagColor: '#A89CC8',
    desc: 'Guided breathwork (pranayama) and meditation sessions that calm the nervous system, sharpen mental focus, and cultivate a deep sense of inner peace and awareness.',
    points: ['Therapeutic breath practices', 'Mindfulness & awareness', 'Stress hormone regulation', 'Deep relaxation states'],
  },
  {
    icon: '✨',
    title: 'Energy Healing',
    tag: 'Holistic Healing',
    tagColor: '#D4A96A',
    desc: 'Rooted in ancient yogic energy science (prana vidya), these sessions work to clear energetic disturbances, revitalize the subtle body, and restore your natural energetic blueprint.',
    points: ['Prana (life-force) activation', 'Subtle body cleansing', 'Deep emotional release', 'Revitalized life energy'],
  },
  {
    icon: '💊',
    title: 'Stress Relief & Wellness',
    tag: 'Modern Life Support',
    tagColor: '#6EA8A0',
    desc: 'Specialized sessions designed for individuals managing chronic stress, anxiety, burnout, and the pressures of modern life — using yoga, breath, and mindfulness as therapeutic tools.',
    points: ['Workplace stress recovery', 'Anxiety management', 'Sleep improvement', 'Nervous system reset'],
  },
  {
    icon: '🩺',
    title: 'Therapeutic Yoga (Lifestyle Disorders)',
    tag: 'Condition-Specific',
    tagColor: '#C4A882',
    desc: 'Specialized yoga therapy for managing and potentially reversing lifestyle-related health conditions through consistent, precise practice under expert guidance.',
    points: ['Diabetes management', 'Hypertension & BP control', 'Weight management', 'Cancer support & recovery'],
  },
  {
    icon: '🧘',
    title: 'Personalized Wellness Sessions',
    tag: 'Custom Journey',
    tagColor: '#9EAC90',
    desc: 'A fully customized 1-on-1 healing program that combines multiple modalities — yoga, meditation, pranayama, and energy work — into a single cohesive wellness journey built around you.',
    points: ['Personal health assessment', 'Multi-modality healing', 'Progress tracking', 'Ongoing lifestyle guidance'],
  },
  {
    icon: '💻',
    title: 'Online Sessions',
    tag: 'Virtual Healing',
    tagColor: '#D98A6C',
    desc: 'Experience the full breadth of YogAmbika\'s healing services from anywhere in the world via personalized online sessions — with the same level of attention and customization as in-person classes.',
    points: ['Live 1-on-1 video sessions', 'Flexible scheduling', 'All levels welcome', 'Available nationwide'],
  },
]

export default function Services() {
  const [heroRef, heroInView] = useInView(0.1)
  const [gridRef, gridInView] = useInView(0.05)

  useEffect(() => {
    document.title = 'Services | YogAmbika — Yoga Therapy, Chakra Healing & Meditation · Navi Mumbai'
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden"
        style={{ background: 'linear-gradient(150deg, #EDE4DC 0%, #E8EDE4 60%, #ECE6DC 100%)' }}>
        <div className="absolute top-20 left-16 w-64 h-64 rounded-full opacity-20" style={{ background: 'radial-gradient(#D98A6C, transparent)', filter: 'blur(60px)' }} />
        <div ref={heroRef} className="max-w-3xl mx-auto px-6 text-center"
          style={{ opacity: heroInView ? 1 : 0, transform: heroInView ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.8s ease' }}>
          <span className="text-xs font-semibold tracking-widest uppercase mb-4 block" style={{ color: '#D98A6C' }}>Holistic Services</span>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6" style={{ fontFamily: '"Playfair Display", serif', color: '#1E2B25' }}>
            Every Path to Wellness<br />Is Unique — So Are We
          </h1>
          <p className="text-base leading-relaxed mb-8" style={{ color: '#4A6055' }}>
            From targeted yoga therapy to deep chakra healing and online sessions — each YogAmbika service is built on the principle that your healing journey deserves exceptional, personalized care.
          </p>
          <a href="https://wa.link/1td6k4" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold transition-all hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #9EAC90, #6E8C74)', color: '#fff', boxShadow: '0 8px 25px rgba(110,140,116,0.35)' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Enquire About a Service
          </a>
        </div>
        <div className="absolute bottom-0 left-0 right-0" style={{ height: 60 }}>
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
            <path d="M0 60L48 52C96 44 192 28 288 24C384 20 480 28 576 36C672 44 768 52 864 48C960 44 1056 28 1152 24C1248 20 1344 28 1392 32L1440 36V60H0Z" fill="#FDFBF7" />
          </svg>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28" style={{ background: '#FDFBF7' }}>
        <div ref={gridRef} className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <div key={i}
                className="p-6 md:p-8 rounded-2xl group transition-all duration-400 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
                style={{
                  border: '1px solid rgba(158,172,144,0.2)',
                  background: 'rgba(255,255,255,0.8)',
                  opacity: gridInView ? 1 : 0,
                  transform: gridInView ? 'translateY(0)' : 'translateY(40px)',
                  transition: `all 0.6s ease ${i * 0.07}s`,
                  boxShadow: '0 2px 20px rgba(45,60,51,0.05)',
                }}>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 transition-transform"
                    style={{ background: `${s.tagColor}15` }}>
                    {s.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <h3 className="font-bold text-base" style={{ fontFamily: '"Playfair Display", serif', color: '#1E2B25' }}>{s.title}</h3>
                      <span className="text-xs px-2.5 py-0.5 rounded-full font-medium"
                        style={{ background: `${s.tagColor}18`, color: s.tagColor }}>
                        {s.tag}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: '#5A7060' }}>{s.desc}</p>
                    <div className="grid grid-cols-2 gap-1.5">
                      {s.points.map((pt, j) => (
                        <div key={j} className="flex items-center gap-1.5">
                          <div className="w-1 h-1 rounded-full shrink-0" style={{ background: s.tagColor }} />
                          <span className="text-xs" style={{ color: '#6A8070' }}>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <a href="https://wa.link/1td6k4" target="_blank" rel="noopener noreferrer"
                  className="mt-5 flex items-center gap-1 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300"
                  style={{ color: s.tagColor }}>
                  Enquire about this service <ArrowRight size={12} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28" style={{ background: 'linear-gradient(160deg, #F0EBE0 0%, #E8EDE4 100%)' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold tracking-widest uppercase mb-3 block" style={{ color: '#D98A6C' }}>How It Works</span>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: '"Playfair Display", serif', color: '#1E2B25' }}>
              Your Healing Journey in 4 Steps
            </h2>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-6 bottom-6 w-px" style={{ background: 'rgba(158,172,144,0.3)', transform: 'translateX(-50%)' }} />
            {[
              { step: '01', title: 'Free Consultation', desc: 'We begin with a holistic assessment of your physical, emotional, and energetic state on a free WhatsApp consultation call.' },
              { step: '02', title: 'Custom Program Design', desc: 'Based on our assessment, Trijita designs a personalized healing program integrating the most appropriate modalities for your needs.' },
              { step: '03', title: 'Your Healing Sessions', desc: 'Begin your sessions — either in-person at Kharghar or online. Each session is guided, intentional, and adapted as you progress.' },
              { step: '04', title: 'Sustained Transformation', desc: 'Experience lasting change as you deepen your practice and Trijita refines your program for continuous growth and wellbeing.' },
            ].map((st, i) => (
              <div key={i} className={`relative flex gap-8 items-center mb-10 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`flex-1 p-6 rounded-2xl ${i % 2 === 1 ? 'md:text-right' : ''}`}
                  style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(158,172,144,0.2)', boxShadow: '0 4px 20px rgba(45,60,51,0.06)' }}>
                  <span className="text-xs font-bold tracking-widest mb-2 block" style={{ color: '#D98A6C' }}>STEP {st.step}</span>
                  <h4 className="font-bold text-base mb-2" style={{ fontFamily: '"Playfair Display", serif', color: '#1E2B25' }}>{st.title}</h4>
                  <p className="text-sm leading-relaxed" style={{ color: '#5A7060' }}>{st.desc}</p>
                </div>
                <div className="hidden md:flex w-10 h-10 rounded-full items-center justify-center shrink-0 font-bold text-white text-sm z-10"
                  style={{ background: 'linear-gradient(135deg, #9EAC90, #D98A6C)' }}>
                  {i + 1}
                </div>
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center" style={{ background: 'linear-gradient(135deg, #1E2B25, #2D3C33)' }}>
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: '"Playfair Display", serif', color: '#FDFBF7' }}>
            Not Sure Which Service is Right for You?
          </h2>
          <p className="text-sm mb-8" style={{ color: '#9EAC90' }}>
            Message us on WhatsApp and Trijita will personally recommend the best path for your unique wellness journey.
          </p>
          <a href="https://wa.link/1td6k4" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold transition-all hover:scale-105"
            style={{ background: '#25D366', color: '#fff', boxShadow: '0 6px 20px rgba(37,211,102,0.3)' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Get a Free Recommendation
          </a>
        </div>
      </section>
    </>
  )
}
