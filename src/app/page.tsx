"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Phone, 
  MapPin, 
  CheckCircle2,
  Menu,
  Clock, 
  Stethoscope,
  Activity,
  Syringe,
  Sparkles,
  Heart,
  Accessibility,
  Laptop,
  MessageCircle,
  Calendar,
  Star,
  Quote
} from 'lucide-react';

const InstagramIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
  </svg>
);

const WhatsAppIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    message: ''
  });

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello Dr. Jinal, I would like to book an appointment.\nName: ${formData.name}\nPhone: ${formData.phone}\nDate: ${formData.date}\nMessage: ${formData.message}`;
    const encodedMessage = encodeURIComponent(text);
    window.open(`https://wa.me/919879364544?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* Top Bar */}
      <div className="bg-teal-700 text-white py-2 px-4 hidden md:flex justify-between items-center text-sm font-medium">
        <div className="flex items-center space-x-4">
          <span className="flex items-center"><Clock className="w-4 h-4 mr-2" /> Opens at 10 AM</span>
          <span className="flex items-center"><MapPin className="w-4 h-4 mr-2" /> Valsad, Gujarat</span>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="https://instagram.com/harinidentalcare" target="_blank" className="hover:text-teal-200 transition">
            <InstagramIcon className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 transition-all">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <Image 
              src="/harini.webp" 
              alt="Harini Dental Care Logo" 
              width={48} 
              height={48} 
              className="w-12 h-12 object-contain group-hover:scale-105 transition-transform"
            />
            <span className="font-bold text-teal-700 text-sm md:text-lg">
              Harini Dental Care & Implant Center
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8 font-semibold text-slate-600">
            <Link href="#home" className="hover:text-teal-600 transition">Home</Link>
            <Link href="#services" className="hover:text-teal-600 transition">Services</Link>
            <Link href="#about" className="hover:text-teal-600 transition">About Dr. Jinal</Link>
            <Link href="#contact" className="hover:text-teal-600 transition">Contact</Link>
          </nav>

          <div className="hidden md:flex items-center space-x-3">
            <a href="tel:+919879364544" className="flex items-center bg-teal-50 text-teal-700 border border-teal-100 px-5 py-2.5 rounded-full font-bold hover:bg-teal-100 transition-all duration-300">
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </a>
            <a href="#booking-form" className="flex items-center bg-teal-600 text-white px-6 py-2.5 rounded-full font-bold hover:bg-teal-700 hover:shadow-lg hover:shadow-teal-500/30 transition-all duration-300 transform hover:-translate-y-0.5">
              Book Appointment
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-slate-800 hover:text-teal-600 transition">
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section id="home" className="relative bg-slate-50 pt-20 pb-28 lg:pt-32 lg:pb-40 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-100/50 via-slate-50 to-white pointer-events-none"></div>
          <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center relative z-10">
            <div className="lg:w-1/2 lg:pr-12 text-center lg:text-left mb-16 lg:mb-0">
              <div className="inline-block bg-white text-teal-700 font-bold px-5 py-2 rounded-full text-sm mb-6 shadow-sm border border-teal-100">
                ✨ Transforming smiles and restoring confidence
              </div>
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black text-slate-900 leading-[1.1] mb-6">
                Let's Keep Your <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">Mouth Clean</span>
              </h1>
              <p className="text-xl text-slate-600 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Experience world-class dental care with state-of-the-art technology in a warm, comfortable, and highly hygienic environment.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="#booking-form" className="bg-teal-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-teal-700 hover:shadow-xl hover:shadow-teal-600/20 transition-all duration-300 flex items-center justify-center transform hover:-translate-y-1">
                  Book an Appointment
                </a>
                <a href="#services" className="bg-white text-teal-700 border-2 border-teal-100 px-8 py-4 rounded-full font-bold text-lg hover:border-teal-600 hover:bg-teal-50 transition-all duration-300 flex items-center justify-center">
                  Explore Services
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 w-full relative max-w-lg lg:max-w-none mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-300 to-blue-300 rounded-full blur-3xl opacity-20 transform translate-x-10 translate-y-10"></div>
              {/* Hero Image */}
              <div className="relative aspect-square lg:aspect-[4/3] bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white flex items-center justify-center bg-slate-100 group">
                <Image 
                  src="/harini2.webp"
                  alt="Happy Patient at Harini Dental Care"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center lg:space-x-20">
              <div className="lg:w-5/12 w-full max-w-md mx-auto mb-16 lg:mb-0 relative">
                <div className="aspect-[3/4] bg-teal-50 rounded-[2.5rem] overflow-hidden shadow-xl border border-teal-100 flex items-center justify-center group relative z-10">
                  <Image 
                    src="/harini1.webp"
                    alt="Dr. Jinal Lad"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                {/* Decorative blob behind */}
                <div className="absolute -inset-4 bg-teal-600/5 rounded-[3rem] -z-0"></div>
                
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -right-6 lg:-right-10 bg-white p-5 rounded-2xl shadow-xl border border-slate-100 flex items-center space-x-4 z-20">
                  <div className="bg-teal-100 p-4 rounded-full text-teal-600">
                    <Heart className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="font-black text-2xl text-slate-800">10+ Years</div>
                    <div className="text-sm text-slate-500 font-bold uppercase tracking-wider">Experience</div>
                  </div>
                </div>
              </div>
              <div className="lg:w-7/12">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-12 h-1 bg-teal-600 rounded-full"></div>
                  <h2 className="text-teal-600 font-bold uppercase tracking-widest text-sm">About The Doctor</h2>
                </div>
                <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Dr. Jinal Lad</h3>
                <p className="text-2xl text-teal-700 font-semibold mb-8">
                  Dental Surgeon, Cosmetic Specialist & Smile Designer
                </p>
                <div className="space-y-5 text-lg text-slate-600 leading-relaxed mb-10">
                  <p>
                    With over a decade of dedicated clinical experience, Dr. Jinal Lad is committed to providing empathetic, patient-centric care. She believes that a healthy smile is the foundation of overall well-being.
                  </p>
                  <p>
                    Harini Dental Care & Implant Center is proud to be a <strong className="text-slate-800 bg-teal-50 px-2 py-0.5 rounded">Women-owned business</strong>, creating a welcoming and nurturing environment for patients of all ages to receive painless, high-quality dental treatments.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex items-center space-x-3 text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <CheckCircle2 className="w-6 h-6 text-teal-500" />
                    <span className="font-bold text-lg">Empathetic Care</span>
                  </div>
                  <div className="flex items-center space-x-3 text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <CheckCircle2 className="w-6 h-6 text-teal-500" />
                    <span className="font-bold text-lg">Cosmetic Expert</span>
                  </div>
                  <div className="flex items-center space-x-3 text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <CheckCircle2 className="w-6 h-6 text-teal-500" />
                    <span className="font-bold text-lg">Women-Owned</span>
                  </div>
                  <div className="flex items-center space-x-3 text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <CheckCircle2 className="w-6 h-6 text-teal-500" />
                    <span className="font-bold text-lg">Smile Designer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 lg:py-32 bg-slate-50 border-t border-slate-100">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <div className="w-12 h-1 bg-teal-600 rounded-full"></div>
                <h2 className="text-teal-600 font-bold uppercase tracking-widest text-sm">Our Services</h2>
                <div className="w-12 h-1 bg-teal-600 rounded-full"></div>
              </div>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Comprehensive Dental Care</h3>
              <p className="text-xl text-slate-600">From routine checkups to advanced cosmetic procedures, we offer a full spectrum of treatments under one roof.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Dental Consultation', icon: <Stethoscope className="w-8 h-8" />, desc: 'Comprehensive oral examinations to detect and prevent dental issues early for a lasting healthy smile.' },
                { title: 'Dental Implants', icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>, desc: 'Permanent, natural-looking replacements for missing teeth that restore both function and aesthetics.' },
                { title: 'Root Canal', icon: <Activity className="w-8 h-8" />, desc: 'Painless endodontic therapy to save severely infected teeth and relieve severe toothaches.' },
                { title: 'Tooth Extraction', icon: <Syringe className="w-8 h-8" />, desc: 'Safe and gentle removal of problematic teeth, including complex wisdom teeth extractions.' },
              ].map((service, idx) => (
                <div key={idx} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-2xl hover:-translate-y-2 hover:border-teal-200 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-teal-600 text-teal-600 group-hover:text-white transition-all duration-300 shadow-sm">
                    {service.icon}
                  </div>
                  <h4 className="text-2xl font-bold text-slate-800 mb-4">{service.title}</h4>
                  <p className="text-lg text-slate-600 leading-relaxed">{service.desc}</p>
                </div>
              ))}

              <div className="bg-gradient-to-br from-teal-600 to-blue-700 p-10 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group lg:col-span-2 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 -mt-10 -mr-10 opacity-10 group-hover:scale-110 transition-transform duration-700">
                  <Sparkles className="w-64 h-64" />
                </div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-8 text-white border border-white/30">
                    <Sparkles className="w-8 h-8" />
                  </div>
                  <h4 className="text-3xl font-bold mb-4">Cosmetic Dentistry & Smile Makeover</h4>
                  <p className="text-xl text-teal-50 leading-relaxed max-w-2xl">
                    Transform your confidence with our smile designing services, including teeth whitening, veneers, aligners, and comprehensive aesthetic improvements tailored perfectly to your facial structure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Before & After Section */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-teal-600 font-bold uppercase tracking-widest text-sm mb-4">Real Results</h2>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900">Transforming Smiles</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
              <div className="bg-slate-50 rounded-3xl p-4 shadow-sm border border-slate-100 group">
                <div className="relative aspect-video rounded-2xl overflow-hidden mb-4">
                  <Image src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80" alt="Teeth Whitening Before" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase shadow-lg">Before</div>
                </div>
              </div>
              <div className="bg-teal-50 rounded-3xl p-4 shadow-sm border border-teal-100 group">
                <div className="relative aspect-video rounded-2xl overflow-hidden mb-4">
                  <Image src="https://images.unsplash.com/photo-1590623354394-04141d65ab40?w=800&q=80" alt="Teeth Whitening After" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 right-4 bg-teal-600/90 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase shadow-lg">After</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-200 to-transparent"></div>
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-teal-600 font-bold uppercase tracking-widest text-sm mb-4">Why Choose Us</h2>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900">Setting the Standard in Dental Care</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              <div className="flex flex-col items-center text-center p-8 rounded-3xl hover:bg-slate-50 transition-colors duration-300 border border-transparent hover:border-slate-100">
                <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-6 shadow-inner text-blue-600">
                  <Accessibility className="w-10 h-10" />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-3">Wheelchair Accessible</h4>
                <p className="text-slate-600 leading-relaxed">Our clinic is fully accessible, ensuring comfortable visits for all our patients.</p>
              </div>
              <div className="flex flex-col items-center text-center p-8 rounded-3xl hover:bg-slate-50 transition-colors duration-300 border border-transparent hover:border-slate-100">
                <div className="w-20 h-20 bg-teal-50 rounded-full flex items-center justify-center mb-6 shadow-inner text-teal-600">
                  <Laptop className="w-10 h-10" />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-3">State-of-the-Art Tech</h4>
                <p className="text-slate-600 leading-relaxed">Equipped with advanced diagnostic and treatment technology for precise care.</p>
              </div>
              <div className="flex flex-col items-center text-center p-8 rounded-3xl hover:bg-slate-50 transition-colors duration-300 border border-transparent hover:border-slate-100">
                <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-6 shadow-inner text-blue-600">
                  <Heart className="w-10 h-10" />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-3">Personalized Care</h4>
                <p className="text-slate-600 leading-relaxed">Every treatment plan is custom-tailored to your unique dental needs and goals.</p>
              </div>
              <div className="flex flex-col items-center text-center p-8 rounded-3xl hover:bg-slate-50 transition-colors duration-300 border border-transparent hover:border-slate-100">
                <div className="w-20 h-20 bg-teal-50 rounded-full flex items-center justify-center mb-6 shadow-inner text-teal-600">
                  <Sparkles className="w-10 h-10" />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-3">Painless Treatments</h4>
                <p className="text-slate-600 leading-relaxed">Modern techniques and gentle hands ensure a comfortable, anxiety-free experience.</p>
              </div>
            </div>
            
            <div className="mt-16 bg-slate-50 border border-slate-200 p-2 pl-6 pr-8 rounded-full max-w-max mx-auto shadow-sm flex items-center space-x-4 hover:shadow-md transition-shadow">
              <div className="bg-white rounded-full p-2 shadow-sm border border-slate-100">
                <span className="text-green-500 font-bold text-xl">✓</span>
              </div>
              <span className="text-slate-700 font-bold text-lg">Accepts Google Pay & Digital Payments</span>
            </div>
          </div>
        </section>

        {/* Clinic Gallery */}
        <section className="py-24 lg:py-32 bg-slate-900 text-white overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-teal-400 font-bold uppercase tracking-widest text-sm mb-4">State-of-the-Art Infrastructure</h2>
              <h3 className="text-4xl md:text-5xl font-black mb-6">Our Clinic Gallery</h3>
              <p className="text-xl text-slate-400">Experience dental care in a modern, hygienic, and relaxing environment.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="relative aspect-square md:aspect-auto md:h-80 rounded-3xl overflow-hidden group">
                <Image src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80" alt="Modern Clinic Interior" fill className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
              </div>
              <div className="relative aspect-square md:aspect-auto md:h-80 rounded-3xl overflow-hidden group">
                <Image src="https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?w=800&q=80" alt="Dental Chair" fill className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
              </div>
              <div className="relative aspect-square md:aspect-auto md:h-80 rounded-3xl overflow-hidden group">
                <Image src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80" alt="Clean Hospital" fill className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 lg:py-32 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-teal-600 font-bold uppercase tracking-widest text-sm mb-4">Patient Reviews</h2>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900">What Our Patients Say</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { name: "Priya Sharma", text: "Dr. Jinal is amazing! I had a root canal done and it was completely painless. The clinic is exceptionally clean and uses modern tech." },
                { name: "Rahul Patel", text: "Best cosmetic dentistry in Valsad. Got my smile makeover done here and my confidence is through the roof. Highly recommend Harini Dental Care." },
                { name: "Sneha Desai", text: "Very empathetic care. I have dental anxiety, but the staff and doctor made me feel so comfortable. Smooth experience from start to finish." }
              ].map((review, idx) => (
                <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative group hover:-translate-y-2 transition-transform duration-300 hover:shadow-xl">
                  <Quote className="w-12 h-12 text-teal-100 absolute top-6 right-6 opacity-50 group-hover:text-teal-200 transition-colors" />
                  <div className="flex items-center space-x-1 mb-6 text-amber-400">
                    <Star className="fill-current w-5 h-5" /><Star className="fill-current w-5 h-5" /><Star className="fill-current w-5 h-5" /><Star className="fill-current w-5 h-5" /><Star className="fill-current w-5 h-5" />
                  </div>
                  <p className="text-slate-600 text-lg leading-relaxed mb-6 italic">"{review.text}"</p>
                  <h4 className="font-bold text-slate-900">- {review.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Smart Appointment Form */}
        <section id="booking-form" className="py-24 lg:py-32 bg-white relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-teal-50/50 via-white to-white pointer-events-none"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto bg-white rounded-[3rem] shadow-2xl border border-slate-100 overflow-hidden flex flex-col md:flex-row">
              <div className="md:w-5/12 bg-teal-600 text-white p-10 lg:p-14 flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-0 right-0 -mt-10 -mr-10 opacity-10">
                  <Calendar className="w-64 h-64" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-black mb-6">Book an Appointment</h3>
                  <p className="text-teal-50 text-lg mb-8 leading-relaxed">Skip the waiting room. Book your consultation instantly via WhatsApp.</p>
                  
                  <div className="bg-teal-700/50 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-teal-500/30">
                    <ul className="space-y-4">
                      <li className="flex items-start text-teal-50">
                        <MapPin className="w-5 h-5 mr-3 text-teal-300 flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">F-105, Center Point Complex, Station Road, Killa Pardi, Valsad</span>
                      </li>
                      <li className="flex items-center text-teal-50">
                        <Phone className="w-5 h-5 mr-3 text-teal-300 flex-shrink-0" />
                        <a href="tel:+919879364544" className="font-bold hover:text-white transition">+91 9879364544</a>
                      </li>
                      <li className="flex items-start text-teal-50">
                        <Clock className="w-5 h-5 mr-3 text-teal-300 flex-shrink-0 mt-0.5" />
                        <div className="flex flex-col">
                          <span>Mon - Sat: 10:00 AM - 7:30 PM</span>
                          <span className="text-teal-200">Sun: 10:00 AM - 1:00 PM</span>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <ul className="space-y-5">
                    <li className="flex items-center space-x-4"><CheckCircle2 className="w-6 h-6 text-teal-300" /><span className="font-medium text-lg">Quick Confirmation</span></li>
                    <li className="flex items-center space-x-4"><CheckCircle2 className="w-6 h-6 text-teal-300" /><span className="font-medium text-lg">Flexible Timings</span></li>
                    <li className="flex items-center space-x-4"><CheckCircle2 className="w-6 h-6 text-teal-300" /><span className="font-medium text-lg">Direct Chat with Clinic</span></li>
                  </ul>
                </div>
              </div>
              <div className="md:w-7/12 p-10 lg:p-14">
                <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Full Name *</label>
                    <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all bg-slate-50 focus:bg-white" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number *</label>
                    <input required type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all bg-slate-50 focus:bg-white" placeholder="+91 9876543210" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Preferred Date *</label>
                    <input required type="date" value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all bg-slate-50 focus:bg-white" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Message (Optional)</label>
                    <textarea rows={3} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all bg-slate-50 focus:bg-white" placeholder="Tell us about your dental issue..."></textarea>
                  </div>
                  <button type="submit" className="w-full bg-slate-900 text-white font-bold text-lg py-4 rounded-xl hover:bg-teal-600 hover:shadow-lg hover:shadow-teal-500/30 transition-all duration-300 transform hover:-translate-y-1 flex justify-center items-center mt-4">
                    <WhatsAppIcon className="w-6 h-6 mr-3 text-white" />
                    Book via WhatsApp
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-slate-900 text-slate-300 pt-20 pb-10 border-t-8 border-teal-600 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
            
            {/* Contact Info */}
            <div className="lg:col-span-5">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  H
                </div>
                <h3 className="text-3xl font-black text-white">Harini Dental Care</h3>
              </div>
              <ul className="space-y-6 text-lg">
                <li className="flex items-start">
                  <MapPin className="w-7 h-7 text-teal-500 mr-4 flex-shrink-0 mt-1" />
                  <span className="leading-relaxed text-slate-300">
                    F-105, First Floor, Center Point Complex,<br />
                    Station Road, Killa Pardi,<br />
                    Valsad, Gujarat - 396125
                  </span>
                </li>
                <li className="flex items-center bg-slate-800/50 p-3 rounded-xl border border-slate-700 w-max">
                  <Phone className="w-6 h-6 text-teal-400 mr-4 flex-shrink-0" />
                  <a href="tel:+919879364544" className="text-xl font-bold text-white hover:text-teal-400 transition">
                    +91 9879364544
                  </a>
                </li>
                <li className="flex items-start text-teal-400 font-medium">
                  <Clock className="w-6 h-6 mr-4 flex-shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <span>Mon - Sat: 10:00 AM - 7:30 PM</span>
                    <span className="text-teal-600">Sun: 10:00 AM - 1:00 PM</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Quick Links & Social */}
            <div className="lg:col-span-3 lg:pl-8">
              <h4 className="text-xl font-bold text-white mb-8 border-b border-slate-700 pb-4">Connect & Explore</h4>
              
              <a 
                href="https://instagram.com/harinidentalcare" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white px-6 py-3.5 rounded-xl font-bold hover:scale-105 transition-transform mb-10 shadow-lg"
              >
                <InstagramIcon className="w-6 h-6" />
                <span>Follow on Instagram</span>
              </a>
              
              <ul className="space-y-4 font-medium text-lg">
                <li><Link href="#home" className="hover:text-teal-400 transition flex items-center space-x-2"><span>→</span> <span>Home</span></Link></li>
                <li><Link href="#services" className="hover:text-teal-400 transition flex items-center space-x-2"><span>→</span> <span>Our Services</span></Link></li>
                <li><Link href="#about" className="hover:text-teal-400 transition flex items-center space-x-2"><span>→</span> <span>Meet Dr. Jinal Lad</span></Link></li>
              </ul>
            </div>

            {/* Map */}
            <div className="lg:col-span-4">
              <h4 className="text-xl font-bold text-white mb-8 border-b border-slate-700 pb-4">Locate Us</h4>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29895.316180301244!2d72.92759788476566!3d20.509730012405317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0c51477cc9501%3A0x9d31e0744c86c5ea!2sHarini%20Dental%20Care%20%26%20Implant%20Center!5e0!3m2!1sen!2sin!4v1780898246817!5m2!1sen!2sin" 
                className="w-full h-64 md:h-72 rounded-xl border-0 shadow-md" 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="pt-8 border-t border-slate-800 text-center text-slate-500 flex flex-col md:flex-row justify-between items-center font-medium">
            <p>&copy; {new Date().getFullYear()} Harini Dental Care & Implant Center. All rights reserved.</p>
            <p className="mt-4 md:mt-0 flex items-center bg-slate-800 px-4 py-2 rounded-full text-sm">
              Crafted with <Heart className="w-4 h-4 text-red-500 mx-2 animate-pulse" /> for a brighter smile.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/919879364544" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 z-50 group flex items-center justify-center"
      >
        <span className="absolute w-full h-full rounded-full bg-[#25D366] opacity-50 animate-ping"></span>
        <WhatsAppIcon className="w-8 h-8 relative z-10 text-white" />
      </a>
    </div>
  );
}
