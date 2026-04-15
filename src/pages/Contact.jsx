import { useEffect, useRef, useState } from 'react'
import { MapPin, Clock, Phone, Mail, Send, CheckCircle } from 'lucide-react'

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

export default function Contact() {
  const [heroRef, heroInView] = useInView(0.1)
  const [formRef, formInView] = useInView()
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    document.title = 'Contact & Book | YogAmbika — Yoga Therapy & Healing · Kharghar, Navi Mumbai'
  }, [])

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitting(true)
    // Compose WhatsApp message
    const msg = `Hello YogAmbika! 🙏\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService Interest: ${form.service || 'General Enquiry'}\n\nMessage:\n${form.message}`
    const encoded = encodeURIComponent(msg)
    // Simulate brief delay then open WhatsApp
    setTimeout(() => {
      window.open(`https://wa.me/+919004900500?text=${encoded}`, '_blank')
      setSubmitting(false)
      setSubmitted(true)
    }, 800)
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden"
        style={{ background: 'linear-gradient(150deg, #E8EDE4 0%, #E8E0D8 60%, #EEE8DE 100%)' }}>
        <div className="absolute top-20 right-20 w-60 h-60 rounded-full opacity-20" style={{ background: 'radial-gradient(#9EAC90, transparent)', filter: 'blur(60px)' }} />
        <div ref={heroRef} className="max-w-3xl mx-auto px-6 text-center"
          style={{ opacity: heroInView ? 1 : 0, transform: heroInView ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.8s ease' }}>
          <span className="text-xs font-semibold tracking-widest uppercase mb-4 block" style={{ color: '#D98A6C' }}>Get in Touch</span>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6" style={{ fontFamily: '"Playfair Display", serif', color: '#1E2B25' }}>
            Your Healing Journey<br />Starts With Hello
          </h1>
          <p className="text-base leading-relaxed" style={{ color: '#4A6055' }}>
            Reach out on WhatsApp for the fastest response, or fill in the enquiry form below and we'll get back to you personally.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0" style={{ height: 60 }}>
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
            <path d="M0 60L48 52C96 44 192 28 288 24C384 20 480 28 576 36C672 44 768 52 864 48C960 44 1056 28 1152 24C1248 20 1344 28 1392 32L1440 36V60H0Z" fill="#FDFBF7" />
          </svg>
        </div>
      </section>

      {/* Quick WhatsApp CTA */}
      <section className="py-10" style={{ background: '#FDFBF7' }}>
        <div className="max-w-4xl mx-auto px-6">
          <a href="https://wa.link/1td6k4" target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-between gap-4 p-6 rounded-2xl transition-all hover:scale-[1.01] hover:shadow-xl"
            style={{ background: 'linear-gradient(135deg, #1E2B25, #2D3C33)', boxShadow: '0 8px 30px rgba(30,43,37,0.2)' }}>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0" style={{ background: '#25D366' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div>
                <p className="font-bold" style={{ color: '#FDFBF7', fontFamily: '"Playfair Display", serif' }}>Chat Instantly on WhatsApp</p>
                <p className="text-sm" style={{ color: '#9EAC90' }}>Fastest response · Free first consultation · No commitment</p>
              </div>
            </div>
            <div className="text-sm font-semibold px-5 py-2 rounded-full whitespace-nowrap"
              style={{ background: '#25D366', color: '#fff' }}>
              Message Now →
            </div>
          </a>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24" style={{ background: '#FDFBF7' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-5 gap-12">

            {/* Info Column */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: '"Playfair Display", serif', color: '#1E2B25' }}>
                  Visit or Connect
                </h2>
                <p className="text-sm leading-relaxed" style={{ color: '#5A7060' }}>
                  Come experience YogAmbika's healing space in person, or connect with us online from wherever you are in the world.
                </p>
              </div>

              {/* Info Cards */}
              {[
                {
                  icon: <MapPin size={18} />,
                  label: 'Studio Location',
                  value: 'ShivTirth Apartment, Sector 20, Kharghar, Navi Mumbai, Maharashtra 410210',
                  color: '#D98A6C',
                },
                {
                  icon: <Clock size={18} />,
                  label: 'Studio Hours',
                  value: 'Monday – Saturday\n8:00 AM – 7:00 PM',
                  color: '#9EAC90',
                },
                {
                  icon: <Phone size={18} />,
                  label: 'WhatsApp Bookings',
                  value: 'Message us on WhatsApp for fastest response. We typically reply within 1 hour.',
                  color: '#25D366',
                  link: 'https://wa.link/1td6k4',
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl" style={{ border: '1px solid rgba(158,172,144,0.2)', background: 'rgba(255,255,255,0.7)' }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${item.color}15`, color: item.color }}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: item.color }}>
                      {item.label}
                    </p>
                    {item.link ? (
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-sm leading-relaxed" style={{ color: '#4A6055' }}>
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm leading-relaxed whitespace-pre-line" style={{ color: '#4A6055' }}>{item.value}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* What to Expect */}
              <div className="p-5 rounded-2xl" style={{ background: 'linear-gradient(135deg, rgba(158,172,144,0.12), rgba(217,138,108,0.08))', border: '1px solid rgba(158,172,144,0.2)' }}>
                <h4 className="font-bold text-sm mb-3" style={{ fontFamily: '"Playfair Display", serif', color: '#1E2B25' }}>
                  What to Expect After You Reach Out
                </h4>
                <ol className="space-y-2">
                  {[
                    'Free 15-min consultation to understand your needs',
                    'Personalized service recommendation from Trijita',
                    'Flexible scheduling (in-person or online)',
                    'First session tailored entirely to your goals',
                  ].map((pt, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs" style={{ color: '#5A7060' }}>
                      <span className="font-bold shrink-0" style={{ color: '#D98A6C' }}>{i + 1}.</span>
                      {pt}
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Form Column */}
            <div ref={formRef} className="lg:col-span-3"
              style={{ opacity: formInView ? 1 : 0, transform: formInView ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.8s ease' }}>
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-12 rounded-2xl"
                  style={{ border: '1px solid rgba(158,172,144,0.3)', background: 'rgba(255,255,255,0.8)' }}>
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{ background: 'rgba(37,211,102,0.1)' }}>
                    <CheckCircle size={40} style={{ color: '#25D366' }} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: '"Playfair Display", serif', color: '#1E2B25' }}>
                    Your Message is On Its Way!
                  </h3>
                  <p className="text-sm mb-6" style={{ color: '#5A7060' }}>
                    Thank you for reaching out to YogAmbika. Trijita will personally respond to your inquiry on WhatsApp within a few hours.
                  </p>
                  <button onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-full text-sm font-medium transition-all hover:scale-105"
                    style={{ background: 'rgba(158,172,144,0.15)', color: '#2D3C33' }}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-6 md:p-8 rounded-2xl space-y-5"
                  style={{ border: '1px solid rgba(158,172,144,0.2)', background: 'rgba(255,255,255,0.85)', boxShadow: '0 8px 40px rgba(45,60,51,0.06)' }}>
                  <div>
                    <h3 className="text-xl font-bold mb-1" style={{ fontFamily: '"Playfair Display", serif', color: '#1E2B25' }}>
                      Send an Enquiry
                    </h3>
                    <p className="text-xs" style={{ color: '#8A9E8E' }}>Fill in your details and we'll connect with you on WhatsApp.</p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: '#2D3C33' }}>Full Name *</label>
                      <input type="text" name="name" value={form.name} onChange={handleChange} required
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                        style={{ border: '1px solid rgba(158,172,144,0.3)', background: '#FDFBF7', color: '#2D3C33', fontFamily: '"Inter", sans-serif' }}
                        onFocus={e => e.target.style.borderColor = '#9EAC90'}
                        onBlur={e => e.target.style.borderColor = 'rgba(158,172,144,0.3)'}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: '#2D3C33' }}>Phone Number *</label>
                      <input type="tel" name="phone" value={form.phone} onChange={handleChange} required
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                        style={{ border: '1px solid rgba(158,172,144,0.3)', background: '#FDFBF7', color: '#2D3C33', fontFamily: '"Inter", sans-serif' }}
                        onFocus={e => e.target.style.borderColor = '#9EAC90'}
                        onBlur={e => e.target.style.borderColor = 'rgba(158,172,144,0.3)'}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: '#2D3C33' }}>Email Address</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                      style={{ border: '1px solid rgba(158,172,144,0.3)', background: '#FDFBF7', color: '#2D3C33', fontFamily: '"Inter", sans-serif' }}
                      onFocus={e => e.target.style.borderColor = '#9EAC90'}
                      onBlur={e => e.target.style.borderColor = 'rgba(158,172,144,0.3)'}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: '#2D3C33' }}>Service You're Interested In</label>
                    <select name="service" value={form.service} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all appearance-none"
                      style={{ border: '1px solid rgba(158,172,144,0.3)', background: '#FDFBF7', color: form.service ? '#2D3C33' : '#8A9E8E', fontFamily: '"Inter", sans-serif' }}
                      onFocus={e => e.target.style.borderColor = '#9EAC90'}
                      onBlur={e => e.target.style.borderColor = 'rgba(158,172,144,0.3)'}
                    >
                      <option value="">Select a service (optional)</option>
                      <option>Yoga Therapy (Yog Asanas)</option>
                      <option>Chakra Healing</option>
                      <option>Meditation & Pranayama</option>
                      <option>Energy Healing</option>
                      <option>Stress Relief & Wellness</option>
                      <option>Therapeutic Yoga (Lifestyle Disorders)</option>
                      <option>Personalized Wellness Sessions</option>
                      <option>Online Sessions</option>
                      <option>Not sure — help me choose</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: '#2D3C33' }}>Your Message *</label>
                    <textarea name="message" value={form.message} onChange={handleChange} required
                      rows={4} placeholder="Tell us about your wellness goals or any health conditions you'd like support with..."
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all resize-none"
                      style={{ border: '1px solid rgba(158,172,144,0.3)', background: '#FDFBF7', color: '#2D3C33', fontFamily: '"Inter", sans-serif' }}
                      onFocus={e => e.target.style.borderColor = '#9EAC90'}
                      onBlur={e => e.target.style.borderColor = 'rgba(158,172,144,0.3)'}
                    />
                  </div>

                  <button type="submit" disabled={submitting}
                    className="w-full py-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all hover:scale-[1.01] hover:shadow-lg"
                    style={{ background: submitting ? '#9EAC90' : 'linear-gradient(135deg, #9EAC90, #6E8C74)', color: '#fff', boxShadow: '0 6px 20px rgba(110,140,116,0.35)' }}>
                    {submitting ? (
                      <>
                        <div className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Enquiry via WhatsApp
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs" style={{ color: '#8A9E8E' }}>
                    Your message will be sent to us via WhatsApp. No spam, ever. 🙏
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="py-0 pb-20 px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="rounded-2xl overflow-hidden" style={{ height: 320, border: '1px solid rgba(158,172,144,0.2)' }}>
          <iframe
            title="YogAmbika Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.7034948743456!2d73.07152907513088!3d19.04337228213199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3fd78ab0e37%3A0xb35b74f4f63e1069!2sKharghar%2C%20Navi%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  )
}
