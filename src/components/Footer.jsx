import { Link } from 'react-router-dom'

// All icons are inline SVGs to avoid lucide-react version issues
const IconMapPin = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)
const IconClock = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
)
const IconPhone = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
)
const IconInstagram = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
)
const IconFacebook = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12.07h2.54V9.845c0-2.522 1.492-3.914 3.777-3.914 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12.07h2.773l-.443 2.89h-2.33v6.988C20.343 21.2 24 17.064 24 12.072z"/>
  </svg>
)
const IconWhatsApp = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

export default function Footer() {
  return (
    <footer style={{ background: '#1E2B25', color: '#C5CFC1' }} className="pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12" style={{ borderBottom: '1px solid rgba(158,172,144,0.15)' }}>

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <img
                src="/logo.png"
                alt="YogAmbika"
                style={{ height: '70px', width: 'auto', objectFit: 'contain', filter: 'brightness(0) invert(1) sepia(1) saturate(0.4) brightness(0.85)' }}
              />
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: '#8A9E8E' }}>
              A sacred space where ancient yogic wisdom meets modern healing. Restoring harmony to your mind, body, and spirit — one session at a time.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <IconInstagram />, href: '#' },
                { icon: <IconFacebook />, href: '#' },
                { icon: <IconWhatsApp />, href: 'https://wa.link/1td6k4' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{ background: 'rgba(158,172,144,0.15)', color: '#9EAC90' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(217,138,108,0.25)'; e.currentTarget.style.color = '#D98A6C' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(158,172,144,0.15)'; e.currentTarget.style.color = '#9EAC90' }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-5 text-sm tracking-widest uppercase" style={{ color: '#FDFBF7', fontFamily: '"Inter", sans-serif' }}>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About YogAmbika', path: '/about' },
                { name: 'Our Services', path: '/services' },
                { name: 'Contact & Booking', path: '/contact' },
              ].map(link => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm transition-colors duration-200"
                    style={{ color: '#8A9E8E' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#D98A6C'}
                    onMouseLeave={e => e.currentTarget.style.color = '#8A9E8E'}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-5 text-sm tracking-widest uppercase" style={{ color: '#FDFBF7', fontFamily: '"Inter", sans-serif' }}>
              Healing Services
            </h4>
            <ul className="space-y-3">
              {['Yoga Therapy', 'Chakra Healing', 'Meditation & Pranayama', 'Stress Relief Yoga', 'Energy Healing', 'Personalized Wellness'].map(s => (
                <li key={s}>
                  <Link to="/services" className="text-sm transition-colors duration-200" style={{ color: '#8A9E8E' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#D98A6C'}
                    onMouseLeave={e => e.currentTarget.style.color = '#8A9E8E'}
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-5 text-sm tracking-widest uppercase" style={{ color: '#FDFBF7', fontFamily: '"Inter", sans-serif' }}>
              Find Us
            </h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                <span className="shrink-0 mt-0.5" style={{ color: '#D98A6C' }}><IconMapPin /></span>
                <p className="text-sm" style={{ color: '#8A9E8E' }}>
                  ShivTirth Apartment,<br />Kharghar, Navi Mumbai,<br />Maharashtra, India
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <span className="shrink-0" style={{ color: '#D98A6C' }}><IconClock /></span>
                <p className="text-sm" style={{ color: '#8A9E8E' }}>Mon – Sat: 8:00 AM – 7:00 PM</p>
              </div>
              <a href="https://wa.link/1td6k4" target="_blank" rel="noopener noreferrer" className="flex gap-3 items-center">
                <span className="shrink-0" style={{ color: '#D98A6C' }}><IconPhone /></span>
                <p className="text-sm" style={{ color: '#8A9E8E' }}>WhatsApp to Book</p>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: '#5A7060' }}>
            © 2025 YogAmbika. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: '#5A7060' }}>
            Crafted with ♥ for holistic wellness · Kharghar, Navi Mumbai
          </p>
        </div>
      </div>
    </footer>
  )
}
