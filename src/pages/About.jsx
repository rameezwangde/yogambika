import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

function useInView(threshold = 0.15) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, inView]
}

const values = [
  { icon: '🌸', title: 'Compassionate Guidance', desc: 'Every student is met with patience, empathy, and deep respect for their unique healing journey.' },
  { icon: '🧬', title: 'Root-Level Transformation', desc: 'We address the true source of your imbalances — physical, emotional, and energetic.' },
  { icon: '🌍', title: 'Ancient Wisdom, Modern Life', desc: 'Classical yogic practices adapted thoughtfully for the demands of contemporary living.' },
  { icon: '🤲', title: 'Inclusive & Accessible', desc: 'Safe, gentle practices for all ages, backgrounds, and physical abilities.' },
]

export default function About() {
  const [heroRef, heroInView] = useInView(0.1)
  const [valRef, valInView] = useInView()
  const [guideRef, guideInView] = useInView()

  useEffect(() => {
    document.title = 'About YogAmbika | Holistic Yoga & Energy Healing · Kharghar, Navi Mumbai'
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden"
        style={{ background: 'linear-gradient(150deg, #E8EDE4 0%, #EDE4DC 60%, #E0E8DC 100%)' }}>
        <div className="absolute top-20 right-16 w-60 h-60 rounded-full opacity-20" style={{ background: 'radial-gradient(#9EAC90, transparent)', filter: 'blur(50px)' }} />
        <div ref={heroRef} className="max-w-3xl mx-auto px-6 text-center"
          style={{ opacity: heroInView ? 1 : 0, transform: heroInView ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.8s ease' }}>
          <span className="text-xs font-semibold tracking-widest uppercase mb-4 block" style={{ color: '#D98A6C' }}>Our Story</span>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6" style={{ fontFamily: '"Playfair Display", serif', color: '#1E2B25' }}>
            A Sanctuary for<br />Mind, Body & Soul
          </h1>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: '#4A6055' }}>
            YogAmbika was born from a deeply personal calling — to create a space where authentic healing is not a luxury, but an accessible and transformative way of life.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0" style={{ height: 60 }}>
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
            <path d="M0 60L48 52C96 44 192 28 288 24C384 20 480 28 576 36C672 44 768 52 864 48C960 44 1056 28 1152 24C1248 20 1344 28 1392 32L1440 36V60H0Z" fill="#FDFBF7" />
          </svg>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 md:py-24" style={{ background: '#FDFBF7' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase mb-4 block" style={{ color: '#D98A6C' }}>Our Mission</span>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6" style={{ fontFamily: '"Playfair Display", serif', color: '#1E2B25' }}>
                Healing That Goes Beyond the Surface
              </h2>
              <p className="leading-relaxed mb-4" style={{ color: '#4A6055' }}>
                At YogAmbika, we believe that true wellness cannot be achieved by treating symptoms alone. Our philosophy centers on <em>root-level transformation</em> — understanding and harmonizing the subtle interplay of energy, breath, emotion, and movement that governs your wellbeing.
              </p>
              <p className="leading-relaxed mb-4" style={{ color: '#4A6055' }}>
                We specialize in personalized yoga therapy, meditation, chakra healing, and lifestyle-based guidance — each element woven together into a coherent, deeply personal healing journey.
              </p>
              <p className="leading-relaxed" style={{ color: '#4A6055' }}>
                Every client who walks through our doors — or joins us online — is greeted with genuine care, patience, and a customized program designed to grow with them.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                { label: 'Physical Healing', pct: 92 },
                { label: 'Emotional Balance', pct: 88 },
                { label: 'Energetic Alignment', pct: 95 },
                { label: 'Stress Reduction', pct: 97 },
              ].map((bar, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-sm font-medium" style={{ color: '#2D3C33' }}>{bar.label}</span>
                    <span className="text-sm" style={{ color: '#9EAC90' }}>{bar.pct}% success rate</span>
                  </div>
                  <div className="h-2 rounded-full overflow-hidden" style={{ background: 'rgba(158,172,144,0.2)' }}>
                    <div className="h-full rounded-full transition-all duration-1000"
                      style={{ width: `${bar.pct}%`, background: 'linear-gradient(90deg, #9EAC90, #D98A6C)' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Healer */}
      <section ref={guideRef} className="py-20 md:py-28"
        style={{ background: 'linear-gradient(160deg, #F0EBE0 0%, #E8EDE4 100%)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mx-auto text-center"
            style={{ opacity: guideInView ? 1 : 0, transform: guideInView ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.8s ease' }}>
            <span className="text-xs font-semibold tracking-widest uppercase mb-4 block" style={{ color: '#D98A6C' }}>Meet Your Guide</span>
            <div className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl"
              style={{ background: 'linear-gradient(135deg, #9EAC90, #D98A6C)', boxShadow: '0 8px 30px rgba(158,172,144,0.4)' }}>
              🧘‍♀️
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: '"Playfair Display", serif', color: '#1E2B25' }}>
              Trijita Goswami
            </h2>
            <p className="text-sm tracking-wider mb-6" style={{ color: '#9EAC90' }}>CERTIFIED YOGA THERAPIST · CHAKRA HEALER · MEDITATION GUIDE</p>
            <p className="leading-relaxed mb-4" style={{ color: '#4A6055' }}>
              With over a decade of dedicated practice and study, Trijita Goswami brings a rare combination of classical yogic knowledge and modern therapeutic understanding to every session she leads.
            </p>
            <p className="leading-relaxed mb-8" style={{ color: '#4A6055' }}>
              Her approach is renowned for its sensitivity, precision, and results — helping clients navigate diabetes, hypertension, chronic stress, cancer support, weight management, and emotional recovery through the power of integrated yogic healing.
            </p>
            <a href="https://wa.link/1td6k4" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #9EAC90, #7E9C82)', color: '#fff', boxShadow: '0 6px 20px rgba(110,140,116,0.35)' }}>
              Book a Session with Trijita
            </a>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 md:py-24" style={{ background: '#FDFBF7' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-widest uppercase mb-3 block" style={{ color: '#D98A6C' }}>Our Values</span>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: '"Playfair Display", serif', color: '#1E2B25' }}>
              What We Stand For
            </h2>
          </div>
          <div ref={valRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="p-6 rounded-2xl text-center transition-all duration-300 hover:-translate-y-1"
                style={{
                  border: '1px solid rgba(158,172,144,0.25)',
                  background: 'rgba(255,255,255,0.7)',
                  opacity: valInView ? 1 : 0,
                  transform: valInView ? 'translateY(0)' : 'translateY(30px)',
                  transition: `all 0.6s ease ${i * 0.1}s`,
                }}>
                <span className="text-3xl mb-4 block">{v.icon}</span>
                <h4 className="font-bold text-sm mb-2" style={{ fontFamily: '"Playfair Display", serif', color: '#1E2B25' }}>{v.title}</h4>
                <p className="text-xs leading-relaxed" style={{ color: '#5A7060' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center" style={{ background: 'linear-gradient(135deg, #1E2B25, #2D3C33)' }}>
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: '"Playfair Display", serif', color: '#FDFBF7' }}>
            Ready to Begin Your Healing Story?
          </h2>
          <p className="text-sm mb-8" style={{ color: '#9EAC90' }}>
            Your first consultation is free. Take the step today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.link/1td6k4" target="_blank" rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-full text-sm font-semibold transition-all hover:scale-105"
              style={{ background: '#25D366', color: '#fff' }}>
              WhatsApp Us Now
            </a>
            <Link to="/services"
              className="px-7 py-3.5 rounded-full text-sm font-semibold transition-all hover:scale-105 inline-flex items-center gap-2 justify-center"
              style={{ border: '1px solid rgba(158,172,144,0.4)', color: '#9EAC90' }}>
              Browse Services <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
