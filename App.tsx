
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';
import Gallery from './components/Gallery';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        
        {/* Call to Action Section */}
        <section className="py-20 bg-[#1A1A1A] text-white relative overflow-hidden">
          <div className="container mx-auto px-6 text-center relative z-10">
            <h3 className="text-3xl md:text-4xl font-serif font-bold mb-8">Ready for your transformation?</h3>
            <p className="text-gray-400 max-w-2xl mx-auto mb-10">
              Book your complimentary consultation today and discover why we are Plano's premier choice for luxury hair artistry.
            </p>
            <button className="bg-rose-gold hover:bg-white hover:text-rose-gold text-white px-12 py-4 rounded-sm font-bold tracking-[0.2em] transition-all transform hover:scale-105 shadow-2xl uppercase">
              Book Appointment Now
            </button>
          </div>
          {/* Decorative gradients */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-rose-gold/10 blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-rose-gold/10 blur-[100px] translate-x-1/2 translate-y-1/2"></div>
        </section>

        <Team />
        <Gallery />
        <Products />

        {/* Reviews Section */}
        <section id="reviews" className="py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <div className="flex justify-center space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-rose-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6">Client Love</h3>
              <p className="text-gray-500 uppercase tracking-widest text-sm font-bold">340+ Google Reviews & Counting</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12">
              {[
                { name: "Jessica L.", text: "The best balayage I've ever had! Maya is a true artist and the salon atmosphere is so luxury." },
                { name: "Michael R.", text: "Homa always gets my cut perfect. Efficient, professional, and friendly staff." },
                { name: "Sarah K.", text: "I tried the Magic Sleek treatment and my hair has never been easier to style. Life changing!" }
              ].map((rev, i) => (
                <div key={i} className="bg-cream p-10 rounded-sm relative shadow-sm hover:shadow-lg transition-shadow">
                   <div className="text-6xl text-rose-gold/10 font-serif absolute top-4 left-4 leading-none">“</div>
                   <p className="text-gray-600 mb-8 relative z-10 italic">
                     {rev.text}
                   </p>
                   <p className="font-bold tracking-widest uppercase text-xs text-[#1A1A1A]">— {rev.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />

      {/* Persistent CTA on Mobile */}
      <div className="fixed bottom-0 left-0 w-full p-4 lg:hidden z-50 pointer-events-none">
        <button className="w-full bg-rose-gold text-white py-4 font-bold tracking-[0.2em] uppercase shadow-2xl pointer-events-auto rounded-sm transform active:scale-95 transition-all">
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default App;
