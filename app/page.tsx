'use client';

import Image from 'next/image';
import { useState } from 'react';
import { 
  Building2, 
  Banknote, 
  MapPin, 
  FileText, 
  Users, 
  Award, 
  Zap, 
  Heart,
  Phone,
  ArrowRight,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Check,
  ChevronDown,
  Linkedin,
  Twitter,
  Mail,
  ShieldCheck,
  Briefcase,
  Cpu,
  Menu
} from 'lucide-react';
import { CardSpotlight } from '@/components/ui/card-spotlight';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-slate-50 text-slate-900 overflow-x-hidden font-sans">
      {/* Navigation */}
      <header className="fixed top-0 w-full z-50 glass-header">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-2xl font-bold tracking-tight text-primary">
            <span className="text-[#E3584D]">SET</span>KORP
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#services" className="hover:text-[#E3584D] transition-colors">Services</a>
            <a href="#expertise" className="hover:text-[#E3584D] transition-colors">Expertise</a>
            <a href="#how-it-works" className="hover:text-[#E3584D] transition-colors">Process</a>
            <a href="#faq" className="hover:text-[#E3584D] transition-colors">FAQ</a>
          </div>

          <div className="flex items-center gap-4">
            <a href="tel:+123456789" className="hidden sm:flex text-sm font-semibold hover:text-[#E3584D] items-center gap-2">
              <Phone className="w-4 h-4" /> Support
            </a>
            <a href="#contact" className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-800 transition-all shadow-lg shadow-primary/20">
              Book Strategy Call
            </a>
            <button className="md:hidden">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden hero-gradient">
          <div className="container mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E3584D]/10 text-[#E3584D] text-sm font-bold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E3584D] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E3584D]"></span>
              </span>
              Trusted by 150+ international businesses
            </div>
            <h1 className="text-4xl md:text-7xl font-extrabold text-primary max-w-5xl mx-auto leading-[1.1] mb-8">
              Launch Your Dubai Business <span className="text-[#E3584D]">in 14 Days</span>
              <span className="block text-2xl md:text-3xl font-medium text-slate-500 mt-4 italic">Without the Legal Maze or Banking Headaches</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-12">
              From company registration and corporate banking to real estate and accounting—Setkorp delivers A to Z business solutions for freezone and mainland setups in UAE. Expert guidance. Your success, guaranteed.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <a href="#contact" className="w-full sm:w-auto bg-[#E3584D] text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-[#D94841] transition-all shadow-xl shadow-[#E3584D]/30 flex items-center justify-center gap-2">
                Book Your Free Strategy Call
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#calculator" className="w-full sm:w-auto bg-white text-primary border border-slate-200 px-8 py-4 rounded-xl text-lg font-bold hover:bg-slate-50 transition-all flex items-center justify-center">
                Calculate Setup Costs Now
              </a>
            </div>

            {/* Hero Image */}
            <div className="relative max-w-5xl mx-auto">
              <div className="aspect-video w-full rounded-3xl bg-slate-200 shadow-2xl overflow-hidden border-8 border-white relative">
                <Image 
                  src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop" 
                  alt="Dubai Skyline" 
                  fill
                  className="object-cover opacity-90"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Bar */}
        <section className="py-12 bg-white border-y border-slate-100">
          <div className="container mx-auto px-6">
            <p className="text-center text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">Trusted by Global Industry Leaders</p>
            <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex items-center gap-2 font-bold text-xl"><ShieldCheck className="w-6 h-6" /> TECHCORE</div>
              <div className="flex items-center gap-2 font-bold text-xl"><Zap className="w-6 h-6" /> ENERGY PLUS</div>
              <div className="flex items-center gap-2 font-bold text-xl"><Briefcase className="w-6 h-6" /> GLOBAL ADVISORS</div>
              <div className="flex items-center gap-2 font-bold text-xl"><Cpu className="w-6 h-6" /> SMART ASSETS</div>
            </div>
          </div>
        </section>

        {/* Problem / Solution Section */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">Setting Up in Dubai Shouldn&apos;t Feel Like Navigating a Maze</h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto">Stop wasting time with bureaucratic hurdles. Here&apos;s how Setkorp changes the equation.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Without Setkorp */}
              <CardSpotlight className="bg-white p-8 md:p-12 rounded-3xl border border-red-100">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center">
                    <XCircle className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-red-900">Without Setkorp</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-slate-600">
                    <AlertCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <span>Confused by 40+ freezone options and complex regulations</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <AlertCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <span>Spending weeks chasing bank account approvals</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <AlertCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <span>Overpaying for services you don&apos;t need</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <AlertCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <span>Missing critical compliance deadlines</span>
                  </li>
                </ul>
              </CardSpotlight>

              {/* With Setkorp */}
              <CardSpotlight className="bg-blue-50 p-8 md:p-12 rounded-3xl border-2 border-blue-100 shadow-xl shadow-blue-500/5">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900">With Setkorp</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-slate-700 font-medium">
                    <Check className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Clear roadmap: We match you to the perfect freezone or mainland structure</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700 font-medium">
                    <Check className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Banking relationships secured within 7 business days</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700 font-medium">
                    <Check className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Transparent, all-inclusive pricing—no hidden fees</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700 font-medium">
                    <Check className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Compliance calendar and dedicated account manager</span>
                  </li>
                </ul>
              </CardSpotlight>
            </div>
          </div>
        </section>

        {/* Value Propositions */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">Where Challenges Meet Their Best Solutions</h2>
              <p className="text-xl text-slate-500">Setkorp isn&apos;t just a setup service. We&apos;re your prosperity partners, transforming business goals into accomplished milestones.</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100">
                <Users className="w-10 h-10 text-[#E3584D] mb-6" />
                <h3 className="text-xl font-bold mb-4">Clarity Meets Trust</h3>
                <p className="text-slate-600">No jargon. No surprises. Our transparency builds long-term partnerships from day one.</p>
              </div>
              <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100">
                <Award className="w-10 h-10 text-[#E3584D] mb-6" />
                <h3 className="text-xl font-bold mb-4">Expertise Forge Excellence</h3>
                <p className="text-slate-600">15+ years of UAE expertise helping businesses across holding, tech, and energy sectors.</p>
              </div>
              <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100">
                <Zap className="w-10 h-10 text-[#E3584D] mb-6" />
                <h3 className="text-xl font-bold mb-4">Launch Faster</h3>
                <p className="text-slate-600">Streamlined 14-day process saving you months of back-and-forth and hidden fees.</p>
              </div>
              <div className="p-8 bg-[#E3584D] text-white rounded-2xl shadow-xl shadow-[#E3584D]/20">
                <Heart className="w-10 h-10 text-white mb-6" />
                <h3 className="text-xl font-bold mb-4">Foundation to Build On</h3>
                <p className="text-blue-50">We provide honest advice and responsive support from day one to year ten of your journey.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-slate-900 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#E3584D]/10 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F59E0B]/5 blur-[120px] rounded-full"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Services Beyond Expectations</h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">Transform your business vision into reality with seamlessly integrated solutions.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Service Cards */}
              {[
                {
                  icon: Building2,
                  title: "Business Incorporation & Licensing",
                  description: "Freezone vs. mainland analysis, license application, visa allocation planning, and legal documentation (MOA).",
                  features: ["Legal required navigation", "Government approvals"]
                },
                {
                  icon: Banknote,
                  title: "Corporate Banking Made Simple",
                  description: "Securing corporate accounts within 7 business days through our elite UAE banking relationships.",
                  features: ["Application support", "Multi-currency accounts"]
                },
                {
                  icon: MapPin,
                  title: "Office Spaces & Corporate Real Estate",
                  description: "From flexi-desks to executive suites, we connect you with vetted agents and negotiate best terms.",
                  features: ["Office sourcing", "Ejari registration"]
                },
                {
                  icon: FileText,
                  title: "Accounting, VAT & Audit Services",
                  description: "Stay compliant with UAE laws while we handle bookkeeping, VAT, and corporate tax advisory.",
                  features: ["Monthly bookkeeping", "VAT & Tax filing"]
                }
              ].map((service, index) => (
                <div key={index} className="group flex flex-col md:flex-row gap-8 bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-[#E3584D]/40 transition-all card-hover">
                  <div className="w-16 h-16 bg-[#E3584D]/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-8 h-8 text-[#E3584D]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-slate-400 mb-6">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                          <Check className="w-4 h-4 text-[#E3584D]" /> {feature}
                        </li>
                      ))}
                    </ul>
                    <a href="#contact" className="text-[#E3584D] font-bold hover:underline inline-flex items-center gap-1">
                      Explore Options <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-24 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">Your Questions, Answered</h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {[
                {
                  question: "Which structure is best for tax optimization?",
                  answer: "Dubai offers freezone companies (100% foreign ownership, 0% corporate tax on qualifying income) and mainland companies (broader market access). For pure tax optimization, freezone structures like IFZA or DMCC are ideal."
                },
                {
                  question: "What's the approximate cost of setup?",
                  answer: "Freezone packages: AED 12,000 - 35,000/year. Mainland setups: AED 25,000 - 60,000."
                },
                {
                  question: "What documents are required for company incorporation?",
                  answer: "Standard requirements: Passport copies, proof of address (utility bill/bank statement), business plan, and company name reservation. We provide a personalized checklist once you book a strategy call."
                },
                {
                  question: "How long does the entire process take?",
                  answer: "14 days on average for freezone companies. Mainland setups take 21-28 days. Corporate banking adds 7-10 days post-license issuance."
                }
              ].map((faq, index) => (
                <details 
                  key={index} 
                  className="group bg-white rounded-2xl border border-slate-100 p-6 cursor-pointer"
                  open={openFaq === index}
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <summary className="flex items-center justify-between font-bold text-lg text-primary list-none">
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-[#E3584D] transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                  </summary>
                  <p className="mt-4 text-slate-600 leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-slate-900 overflow-hidden relative">
          <div className="container mx-auto px-6">
            <div className="bg-white rounded-[40px] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
              {/* Info Side */}
              <div className="lg:w-1/2 p-8 md:p-16 bg-primary text-white">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Write Your Dubai Success Story?</h2>
                <p className="text-lg text-slate-300 mb-12">Experience transparency and strategic support from day one—book a free 30-minute strategy call today.</p>
                
                <div className="space-y-6">
                  {["No obligation, no sales pressure", "Free cost breakdown & timeline estimate", "Speak with a UAE specialist"].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-[#E3584D]">
                        <Check className="w-5 h-5" />
                      </div>
                      <span className="text-slate-200">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-16 pt-16 border-t border-white/10">
                  <p className="text-sm uppercase tracking-widest text-[#E3584D] font-bold mb-4">Urgent Inquiry?</p>
                  <a href="tel:+12345678" className="text-3xl font-bold hover:text-[#E3584D] transition-colors">+971 4 XXX XXXX</a>
                </div>
              </div>

              {/* Form Side */}
              <div className="lg:w-1/2 p-8 md:p-16 bg-white">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-primary">Full Name</label>
                      <input type="text" placeholder="John Doe" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E3584D]/20 focus:border-[#E3584D]" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-primary">Email Address</label>
                      <input type="email" placeholder="john@example.com" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E3584D]/20 focus:border-[#E3584D]" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary">Company / Industry</label>
                    <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E3584D]/20 focus:border-[#E3584D]">
                      <option>Tech Startup</option>
                      <option>E-commerce</option>
                      <option>Holding Company</option>
                      <option>Consulting</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary">Message / Goals</label>
                    <textarea rows={4} placeholder="How can we help you launch?" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E3584D]/20 focus:border-[#E3584D]"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-[#E3584D] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#D94841] transition-all shadow-xl shadow-[#E3584D]/20">
                    Send My Request
                  </button>
                  <p className="text-center text-xs text-slate-400">By submitting, you agree to our privacy policy. We&apos;ll never spam you.</p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white py-20 px-6 border-t border-white/5">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="text-2xl font-bold mb-6 text-white"><span className="text-[#E3584D]">SET</span>KORP</div>
              <p className="text-slate-400 max-w-sm mb-8">Expert business incorporation, banking, real estate & accounting for freezone and mainland setups in Dubai and UAE.</p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#E3584D] transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#E3584D] transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li><a href="#services" className="hover:text-[#E3584D]">Services</a></li>
                <li><a href="#expertise" className="hover:text-[#E3584D]">Industry Expertise</a></li>
                <li><a href="#how-it-works" className="hover:text-[#E3584D]">Process</a></li>
                <li><a href="#faq" className="hover:text-[#E3584D]">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">UAE Office</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#E3584D] shrink-0" /> 
                  123 Business Bay, Premium Tower, Dubai, UAE
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#E3584D] shrink-0" /> 
                  contact@setkorp.ae
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500">
            <p>&copy; 2024 Setkorp Business Consultancy. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
