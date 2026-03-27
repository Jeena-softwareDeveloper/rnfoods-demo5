import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Smartphone, 
  User, 
  ShoppingCart, 
  Star, 
  ChevronDown,
  ShoppingBag,
  Bell,
  Menu,
  Heart,
  MapPin,
  RotateCcw
} from 'lucide-react';

const AddressBar = () => (
  <div className="bg-transparent w-full px-4 md:px-8 py-1 nd:py-3 z-40 relative">
     <div className="max-w-[1280px] mx-auto w-full flex items-center justify-between gap-2 text-[12px] md:text-sm text-white/90 font-medium border border-white/20 rounded px-2 py-1 bg-white/5">
        <div className="flex items-center gap-1 overflow-hidden">
          <span className="truncate max-w-[300px] md:max-w-[500px]">Deliver to Jeenora, Chennai, Tamil Nadu</span>
          <ChevronDown size={14} className="opacity-70 flex-shrink-0" />
        </div>
     </div>
  </div>
);

const SearchBar = () => (
  <div className="bg-transparent md:hidden w-full px-4 pb-3">
    <div className="bg-white flex items-center rounded-lg px-3 h-11 shadow-sm overflow-hidden">
      <Search className="w-5 h-5 text-gray-400" />
      <input 
        type="text" 
        placeholder="Search grains, spices, organic oils..." 
        className="flex-grow bg-transparent border-none outline-none px-3 text-sm text-gray-700 placeholder-gray-400"
      />
    </div>
  </div>
);

const MobileTopRow = ({ scrolled }) => (
   <div className="md:hidden flex items-center justify-between px-4 h-[60px] bg-transparent">
      <div className="flex items-center h-full">
         <h1 className="text-[28px] font-black italic text-[#c2185b] tracking-tighter leading-none drop-shadow-sm">rnfoods</h1>
      </div>
      <div className={`flex items-center gap-4 text-white transition-opacity duration-300 pr-12 h-full ${scrolled ? 'opacity-0' : 'opacity-100'}`}>
        <Heart size={24} strokeWidth={2.5} />
      </div>
   </div>
);

const Header = ({ onHomeClick }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
       if (window.scrollY > 20) {
         setScrolled(true);
       } else {
         setScrolled(false);
       }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="bg-gradient-to-b from-[#ff8ebb] to-[#e91e63] sticky top-0 z-50 shadow-md transition-all duration-500 will-change-transform transform-gpu overflow-visible">
      {/* Top Content (Logo & Address) */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4, 0, 0.2, 1)] transform-gpu relative ${scrolled ? 'h-0 opacity-0 pointer-events-none' : 'h-[102px] opacity-100'}`}
      >
        <MobileTopRow scrolled={scrolled} />
        <AddressBar />
      </div>

      {/* Main Sticky Row (Search) */}
      <div className="max-w-[1280px] mx-auto px-4 py-3 flex items-center relative h-[64px]">
        <div className={`flex-grow transition-all duration-700 ${scrolled ? 'pr-12' : 'pr-0'}`}>
          <div className="bg-white flex items-center rounded-lg px-3 h-11 shadow-sm border border-pink-100/20">
            <Search className="w-4 h-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search spices, rnfoods..." 
              className="flex-grow bg-transparent border-none outline-none px-3 text-[14px] text-gray-700 font-medium" 
            />
          </div>
        </div>
      </div>

      {/* GLOBAL PERSISTENT SMART CART - Stays visible throughout the leap */}
      <div 
        className={`md:hidden absolute text-white transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] transform-gpu z-[60] right-4 ${scrolled ? 'top-[32px] -translate-y-1/2 scale-95' : 'top-[18px] scale-100'}`}
      >
        <div className="relative">
          <ShoppingCart size={24} strokeWidth={2.5} />
          <span className="absolute -top-1.5 -right-1.5 bg-yellow-400 text-black text-[9px] font-black rounded-full w-4.5 h-4.5 flex items-center justify-center border border-pink-500 shadow-sm">2</span>
        </div>
      </div>

      {/* Desktop View */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 h-12 md:h-20 hidden md:flex items-center justify-between gap-6 text-white">
        <div className="flex items-center gap-10 flex-grow">
          <h1 onClick={onHomeClick} className="text-white text-3xl font-black tracking-tighter cursor-pointer italic">rnfoods</h1>
          <div className="hidden md:flex items-center bg-white border border-gray-100 rounded-md px-4 h-11 flex-grow max-w-[400px]">
            <Search className="w-5 h-5 text-gray-400" />
            <input type="text" placeholder="Search items..." className="flex-grow bg-transparent border-none outline-none px-3 text-sm text-gray-700" />
          </div>
        </div>
        <div className="hidden lg:flex items-center gap-6"><User size={22} /><ShoppingCart size={22} /></div>
      </div>
    </header>
  );
};

const HeroBanner = () => {
  const banners = [
    { 
      title: "Harvest Sale", 
      subtitle: "Pure Organic Grains", 
      price: "From ₹199", 
      tagline: "Farm fresh, direct to you!", 
      bank: "Use Code RNF10 — 10% Off on First Order",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtU3-_rhsTCksNFF99TWdHh_BhsfcVQleNqXQMrWA3u1iDyPN4XUwMLUBwBPS5E6sV6ID0dssNw448enMUP9rMV5uR_FAl3fvCKDwItR6EKDm1zZ-YrZmQc21OOXOz0dShsXAy7xJYCRr48c1QnnEH8qmaSQTXzkzq97IWP3cWY8YVVpPsEpS1BFA4F0St-vNcS2kvAinzRSgZ0B1EJB6QSXqLgqGO7K-SF-ty8Zu_RqY9jiSdwZ2k12tDZMw_rM3dHmV5b9hXFA9x",
      bg: "bg-[#fde047]"
    },
    { 
      title: "Combo Deals", 
      subtitle: "Premium Spice Packs", 
      price: "Starting ₹149", 
      tagline: "100% Natural & Pure", 
      bank: "Free Delivery on Orders Above ₹499",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGyOJfIwDyEBbMIFdx0wm9fsKgt3ma_9Q_cnTJeQ0NoAZqB_t5S2CMJpwcXavgUSyDEZtsmX3lb21ypEZ_Q3WVWv8TIMbxMv1BNuCYnIKSsdnUtwxYqCnVB5UXH7A2gSGQdLawWHvZqWhR0OLAQ3Zy7paW4ZNHVFdSMcAGNmhdlBwGSEM6lMMrb3I6D2cr8usVvpO7H_DsDniaCsSJZ7kug42N_ksYmu94kLOSvQ75DufBz2ChLL05lrAvBbF0sEWSjfwsTNrAh4Zk",
      bg: "bg-[#bbf7d0]"
    }
  ];

  return (
  <div className="max-w-[1280px] mx-auto px-2 md:px-8 mt-4 relative overflow-visible">
    <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-3 px-1">
      {banners.map((b, idx) => (
        <div key={idx} className={`flex-none w-full snap-center relative overflow-hidden rounded-xl shadow-sm border border-black/5 ${b.bg} h-[200px] md:h-[400px]`}>
           {/* Split Content Layer */}
           <div className="flex h-full w-full">
              {/* Left Side: Marketing Text */}
              <div className="w-[55%] p-4 md:p-12 flex flex-col justify-center gap-1">
                 <div className="bg-[#1e40af] text-white w-fit px-2 py-0.5 rounded text-[10px] md:text-sm font-bold uppercase tracking-wider mb-2">
                    {b.title}
                 </div>
                 <h2 className="text-gray-900 font-black text-xl md:text-5xl leading-tight">{b.subtitle}</h2>
                 <p className="text-gray-900 font-extrabold text-2xl md:text-6xl">{b.price}</p>
                 <p className="text-gray-700 text-[11px] md:text-xl font-medium">{b.tagline}</p>
              </div>

              {/* Right Side: Product Image with extra containment */}
              <div className="w-[45%] relative flex items-center justify-center p-2">
                 <div className="w-full h-[85%] bg-white/20 rounded-lg p-1 border border-white/30 overflow-hidden">
                    <img src={b.img} alt={b.subtitle} className="w-full h-full object-cover rounded shadow-lg" />
                 </div>
              </div>
           </div>

           {/* Bank Offer Bar */}
           <div className="absolute bottom-0 left-0 w-full bg-white/95 px-4 py-1 flex items-center gap-2 border-t border-gray-200/50">
              <div className="w-3 h-3 md:w-5 md:h-5 bg-[#1e40af] rounded-sm flex items-center justify-center text-[6px] md:text-[10px] text-white font-bold">H</div>
              <span className="text-[10px] md:text-sm font-bold text-gray-800 tracking-tight">{b.bank}</span>
           </div>
        </div>
      ))}
    </div>
    
    {/* Navigation Dots */}
    <div className="mt-3 flex justify-center gap-1.5 opacity-40">
       <div className="w-5 h-1 bg-black rounded-full"></div>
       <div className="w-1.5 h-1 bg-black/30 rounded-full"></div>
       <div className="w-1.5 h-1 bg-black/30 rounded-full"></div>
    </div>
  </div>
  );
};

const TopCategoriesRow = () => {
   const cats = [
     { name: "Grains", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtU3-_rhsTCksNFF99TWdHh_BhsfcVQleNqXQMrWA3u1iDyPN4XUwMLUBwBPS5E6sV6ID0dssNw448enMUP9rMV5uR_FAl3fvCKDwItR6EKDm1zZ-YrZmQc21OOXOz0dShsXAy7xJYCRr48c1QnnEH8qmaSQTXzkzq97IWP3cWY8YVVpPsEpS1BFA4F0St-vNcS2kvAinzRSgZ0B1EJB6QSXqLgqGO7K-SF-ty8Zu_RqY9jiSdwZ2k12tDZMw_rM3dHmV5b9hXFA9x" },
     { name: "Spices", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCd9sIzJLiqwcoM6PGl2DBlXy6k7WbfxPd8REFSZpKNDRYnJi-gz98KyjP-bpO_CCz1L1xDBIJwnZwuVH5SZTzvGsvCeq4pTV72UYxc2xzpVg0JF398vOMr4hSZZb1_qijel4D3Jiu70q5CfRcwTM0D1iRPHxfsqVnccCHWTWneJrEe-LwEwAhbzAkdyB5f25SXBStLkYmKe2zyEt64oZyPfAEyMOU7VnX854peuV137nOwcByR48Uk_aIt-rcFNotV4iOym7ULrlBQ" },
     { name: "Organic Oils", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAY0kVQz8tnd4pIczDoHW4PqICXgppNTF7EVJQMdNwY-UkdXSNNhvN4fKLKVETx8Dg3coGJ2SRLi9DWQdKEUyC03Pb-9UvCAuML19hwrKfH4siz9jM43-FJUMc9zmWYWcGSQkKULyOgWxi57GP5AEHzW_2ZlRFjCvBSgUD9NsDOtQxO5EHRKYYhipqYo3vdZoE-rZqJGaBvb9f1m-D4SmwrUREKvkrlBsZWZcLl8_9i3nCzq8CeogwDn4-rpaoWTf2GuPxywns7yvTe" },
     { name: "Dry Fruits", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGyOJfIwDyEBbMIFdx0wm9fsKgt3ma_9Q_cnTJeQ0NoAZqB_t5S2CMJpwcXavgUSyDEZtsmX3lb21ypEZ_Q3WVWv8TIMbxMv1BNuCYnIKSsdnUtwxYqCnVB5UXH7A2gSGQdLawWHvZqWhR0OLAQ3Zy7paW4ZNHVFdSMcAGNmhdlBwGSEM6lMMrb3I6D2cr8usVvpO7H_DsDniaCsSJZ7kug42N_ksYmu94kLOSvQ75DufBz2ChLL05lrAvBbF0sEWSjfwsTNrAh4Zk" },
     { name: "Honey", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfozOejP8HE02IBTGhDbgy83AnAIDQwfRQvXJuXXKOG7Trs0Puo5yhj5sQEZD6W8YrTkQdQn2OvZSVn2YupuSiqpZMXn65WqdIFOikZwq_qaLuZ2G4QIgeH8ix-KURp4c3PY3YiwcKKDWcYOnorsy98C52NCrnoyTrQKAHuOEhtxFKbj-Y96FgufishFFDU-2g8ccUeVjSB_IJ4MQLpvJd6beP6phrRYec9Uurw4L4m5AS-v0EYpOFP7lzk7BlgtIEytA4RV4n0seM" }
   ];

   return (
     <div className="bg-white px-2 py-5 border-b border-gray-100 mb-2">
        <div className="flex overflow-x-auto gap-6 md:gap-14 px-4 scrollbar-hide py-1">
           {cats.map((c, i) => (
             <div key={i} className="flex flex-col items-center gap-2 cursor-pointer flex-none w-[75px]">
               <div className="w-[64px] h-[64px] md:w-[80px] md:h-[80px] rounded-full overflow-hidden shadow-sm bg-pink-50 flex items-center justify-center border-2 border-pink-500/20 active:scale-95 transition-transform">
                 <img src={c.img} alt={c.name} className="w-full h-full object-cover" />
               </div>
               <span className="text-gray-800 text-[13px] font-bold text-center leading-tight tracking-tight uppercase px-1">{c.name}</span>
             </div>
           ))}
        </div>
     </div>
   );
};

const StillLookingSection = ({ products, onProductClick }) => (
  <div className="mx-4 my-2 bg-gradient-to-b from-[#e1f5fe]/80 to-[#fff] rounded-xl p-4 shadow-sm">
     <h3 className="text-[17px] font-bold text-gray-800 mb-4">Still looking for these?</h3>
     <div className="flex overflow-x-auto gap-4 scrollbar-hide">
        {products.slice(0, 4).map((p, i) => (
          <div 
            key={i} 
            onClick={() => onProductClick(p)}
            className="flex-none w-[120px] bg-white rounded-lg p-2 flex flex-col items-center border border-gray-100 shadow-sm cursor-pointer"
          >
             <div className="w-full aspect-square mb-2 bg-gray-50 rounded overflow-hidden">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
             </div>
             <span className="text-[11px] font-medium text-center line-clamp-2">{p.name}</span>
          </div>
        ))}
     </div>
  </div>
);



const ProductDetail = ({ product, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen">
       {/* Mobile Top Header for Details */}
       <div className="sticky top-0 bg-white z-50 flex items-center justify-between px-4 h-14 border-b border-gray-100">
          <button onClick={onBack} className="p-2 -ml-2">
             <ChevronDown className="rotate-90 text-gray-800" size={24} />
          </button>
          <div className="flex items-center gap-4">
             <Search size={22} className="text-gray-600" />
             <ShoppingCart size={22} className="text-gray-600" />
          </div>
       </div>

       {/* Product Image Area */}
       <div className="w-full aspect-square bg-[#f9f9f9] relative">
          <img src={product.img} alt={product.name} className="w-full h-full object-contain p-4" />
          <div className="absolute top-4 right-4 flex flex-col gap-3">
             <div className="bg-white/80 p-2 rounded-full shadow-sm">
                <Heart size={20} className="text-gray-400" />
             </div>
             <div className="bg-white/80 p-2 rounded-full shadow-sm">
                <RotateCcw size={20} className="text-gray-400" />
             </div>
          </div>
       </div>

       {/* Content Content */}
       <div className="p-4 pb-24">
          <div className="mb-4">
             <h1 className="text-lg font-bold text-gray-800 mb-1">{product.name}</h1>
             <p className="text-gray-500 text-sm">🌿 100% Natural · Chemical Free</p>
          </div>

          <div className="flex items-center gap-3 mb-6">
             <span className="text-3xl font-black text-gray-900">₹{product.price}</span>
             <span className="text-gray-400 text-lg line-through decoration-1">₹{Math.floor(product.price * 1.5)}</span>
             <span className="text-[#038d63] font-bold text-base">33% off</span>
          </div>

          <div className="flex items-center gap-2 mb-8">
             <div className="bg-[#038d63] text-white flex items-center gap-1 px-2 py-0.5 rounded text-sm font-bold">
                {product.rating} <Star className="w-3.5 h-3.5 fill-current" />
             </div>
             <span className="text-gray-500 text-sm font-medium">{product.reviews} Ratings & Reviews</span>
          </div>

          <div className="border-t border-gray-100 pt-6">
             <h3 className="font-bold text-gray-800 mb-4">Product Details</h3>
             <div className="space-y-3">
                <div className="flex text-sm">
                   <span className="w-28 text-gray-500">Brand</span>
                   <span className="text-gray-800 font-medium">R.N. Foods</span>
                </div>
                <div className="flex text-sm">
                   <span className="w-28 text-gray-500">Net Weight</span>
                   <span className="text-gray-800 font-medium">500 g</span>
                </div>
                <div className="flex text-sm">
                   <span className="w-28 text-gray-500">Food Type</span>
                   <span className="text-gray-800 font-medium">Organic, Chemical-Free</span>
                </div>
                <div className="flex text-sm">
                   <span className="w-28 text-gray-500">Origin</span>
                   <span className="text-gray-800 font-medium">Chennai, Tamil Nadu</span>
                </div>
                <div className="flex text-sm">
                   <span className="w-28 text-gray-500">Shelf Life</span>
                   <span className="text-gray-800 font-medium">12 Months</span>
                </div>
             </div>
          </div>
       </div>

       {/* Fixed Bottom Bar */}
       <div className="fixed bottom-0 left-0 w-full bg-white h-16 flex border-t border-gray-100 z-50">
          <button className="flex-1 font-bold text-gray-800 flex items-center justify-center border-r border-gray-100 uppercase tracking-tight">
             Add to Cart
          </button>
          <button className="flex-1 bg-[#ff3f6c] text-white font-black flex items-center justify-center uppercase tracking-tight">
             Buy Now
          </button>
       </div>
    </div>
  );
};

const ProductGrid = ({ onProductClick }) => {
  const products = [
    { name: "Bio-Active Red Quinoa", price: "480", rating: "4.7", reviews: "258", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtU3-_rhsTCksNFF99TWdHh_BhsfcVQleNqXQMrWA3u1iDyPN4XUwMLUBwBPS5E6sV6ID0dssNw448enMUP9rMV5uR_FAl3fvCKDwItR6EKDm1zZ-YrZmQc21OOXOz0dShsXAy7xJYCRr48c1QnnEH8qmaSQTXzkzq97IWP3cWY8YVVpPsEpS1BFA4F0St-vNcS2kvAinzRSgZ0B1EJB6QSXqLgqGO7K-SF-ty8Zu_RqY9jiSdwZ2k12tDZMw_rM3dHmV5b9hXFA9x" },
    { name: "Organic Black Rice", price: "283", rating: "4.9", reviews: "6025", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGyOJfIwDyEBbMIFdx0wm9fsKgt3ma_9Q_cnTJeQ0NoAZqB_t5S2CMJpwcXavgUSyDEZtsmX3lb21ypEZ_Q3WVWv8TIMbxMv1BNuCYnIKSsdnUtwxYqCnVB5UXH7A2gSGQdLawWHvZqWhR0OLAQ3Zy7paW4ZNHVFdSMcAGNmhdlBwGSEM6lMMrb3I6D2cr8usVvpO7H_DsDniaCsSJZ7kug42N_ksYmu94kLOSvQ75DufBz2ChLL05lrAvBbF0sEWSjfwsTNrAh4Zk" },
    { name: "Raw Yellow Millet", price: "399", rating: "4.0", reviews: "85", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA2SEphSl0RAY0gzgJ9vMpP6h56PTgWCJI3IECvAFlL3l5L-AVGB1mZR5hz8qBHI06cb4DqkafD_dzpzvh7CVrQdizB7NA4nSP494eU_uhCH5O_GrRvQMe0gIQPxCssGXrTWEmZyIVoyfi69jiKVmdWqKNricmQUyAfQB7hpLqlkWPHRqZaETbrV1O3Gcn92vMFVINKMR_X1qoHLFB1KSMndFREWY2bExwiLXUwOqwUwaF7RifaAAE4pSorBLC9pZMTzUSzx1-Hd_yu" },
    { name: "Ancient Spelt Grains", price: "450", rating: "4.2", reviews: "1250", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfozOejP8HE02IBTGhDbgy83AnAIDQwfRQvXJuXXKOG7Trs0Puo5yhj5sQEZD6W8YrTkQdQn2OvZSVn2YupuSiqpZMXn65WqdIFOikZwq_qaLuZ2G4QIgeH8ix-KURp4c3PY3YiwcKKDWcYOnorsy98C52NCrnoyTrQKAHuOEhtxFKbj-Y96FgufishFFDU-2g8ccUeVjSB_IJ4MQLpvJd6beP6phrRYec9Uurw4L4m5AS-v0EYpOFP7lzk7BlgtIEytA4RV4n0seM" },
    { name: "High-Protein Lentils", price: "185", rating: "4.1", reviews: "24", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAhyV_MtgSBLzj4iAc5venYCo80kXAPDvfgsJxNVvPUJn-GjuV2DnB5cCsotoEgEEfUachVa-itIup3mi7UsvKk06itiqpIJxsubvqCJzU9BQlBh20vUiUCGoQNm1CrcKqypc3baanWZ-P1tMSHalPgxeLzHgfduKY9ioxqLfngDTXXlwcFIzJJsIZsUkH3SMn4xnAKKie0PWCka9tgxzNXuqABMelJGd1FYRMM3DjrHDI9rRTw9SqCPvuiuE8mrNHQ5OV4G-d8m124" },
    { name: "Heritage Durum Wheat", price: "219", rating: "3.8", reviews: "450", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCd9sIzJLiqwcoM6PGl2DBlXy6k7WbfxPd8REFSZpKNDRYnJi-gz98KyjP-bpO_CCz1L1xDBIJwnZwuVH5SZTzvGsvCeq4pTV72UYxc2xzpVg0JF398vOMr4hSZZb1_qijel4D3Jiu70q5CfRcwTM0D1iRPHxfsqVnccCHWTWneJrEe-LwEwAhbzAkdyB5f25SXBStLkYmKe2zyEt64oZyPfAEyMOU7VnX854peuV137nOwcByR48Uk_aIt-rcFNotV4iOym7ULrlBQ" },
    { name: "Premium Mixed Seeds", price: "199", rating: "4.5", reviews: "112", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC51tG6GUNY-yhBNi3zD9s5wYzbcHJilMzwOLWX7AG-Lw83gvVrYRyvM7Oasz6djaFyusSOjqRnzEpV7afvhXK_VSUucbuC2SqfxX4yy0NBzpOE0QyGYNOlM7_XHSXZwPO7L2B7lCxZE8RI5PDJ9uxoCllG2zroIDaI8rWA1dfVticD1YSiE1W_vicSpBEtS5sTgHOBZ2Jie-IhZTBjhUULuAIguZXFwR_41_b1z63sVwzJQFJ1N0iZ5Az5D5zmIEuIBQ-OcTapvOyA" },
    { name: "Cold-Pressed Mustard Oil", price: "599", rating: "4.8", reviews: "899", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAY0kVQz8tnd4pIczDoHW4PqICXgppNTF7EVJQMdNwY-UkdXSNNhvN4fKLKVETx8Dg3coGJ2SRLi9DWQdKEUyC03Pb-9UvCAuML19hwrKfH4siz9jM43-FJUMc9zmWYWcGSQkKULyOgWxi57GP5AEHzW_2ZlRFjCvBSgUD9NsDOtQxO5EHRKYYhipqYo3vdZoE-rZqJGaBvb9f1m-D4SmwrUREKvkrlBsZWZcLl8_9i3nCzq8CeogwDn4-rpaoWTf2GuPxywns7yvTe" }
  ];

  return (
    <div className="max-w-[1280px] mx-auto px-4 md:px-8 pt-4 pb-10">
      <h2 className="text-xl md:text-3xl font-bold mb-4 md:mb-8 text-gray-800 text-left">Products For You</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 pb-20 md:pb-0">
        {products.map((p, idx) => (
          <div 
            key={idx} 
            onClick={() => onProductClick(p)}
            className="bg-white border border-gray-200 rounded-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer flex flex-col items-start p-3 md:p-4 text-left group"
          >
            <div className="relative w-full aspect-[3/4] mb-4 bg-gray-50 flex items-center justify-center overflow-hidden rounded">
              <img src={p.img} alt={p.name} className="h-full object-cover" />
            </div>
            
            <h3 className="text-[15px] font-medium text-gray-500 mb-1 line-clamp-1 w-full">{p.name}</h3>
            
            <div className="flex items-center gap-2 mb-2 w-full">
              <span className="text-xl md:text-2xl font-bold text-gray-800">₹{p.price}</span>
              <span className="text-gray-400 text-sm font-medium line-through decoration-1">₹{Math.floor(p.price * 1.3)}</span>
              <span className="text-[#038d63] font-bold text-[13px]">{Math.floor(Math.random() * 20 + 10)}% off</span>
            </div>

            <div className="bg-[#f8f8ff] text-gray-600 text-[11px] md:text-[13px] font-medium px-2 py-1 rounded-full mb-3 flex items-center gap-1 leading-none">
              Free Delivery
            </div>

            <div className="flex items-center gap-2 mt-auto">
              <div className="bg-[#038d63] text-white flex items-center gap-1 px-1.5 md:px-2 py-0.5 rounded text-[13px] font-bold">
                {p.rating} <Star className="w-3 h-3 fill-current" />
              </div>
              <span className="text-gray-500 text-xs font-medium">{p.reviews} Reviews</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};



const main_products = [
    { name: "Bio-Active Red Quinoa", price: "480", rating: "4.7", reviews: "258", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtU3-_rhsTCksNFF99TWdHh_BhsfcVQleNqXQMrWA3u1iDyPN4XUwMLUBwBPS5E6sV6ID0dssNw448enMUP9rMV5uR_FAl3fvCKDwItR6EKDm1zZ-YrZmQc21OOXOz0dShsXAy7xJYCRr48c1QnnEH8qmaSQTXzkzq97IWP3cWY8YVVpPsEpS1BFA4F0St-vNcS2kvAinzRSgZ0B1EJB6QSXqLgqGO7K-SF-ty8Zu_RqY9jiSdwZ2k12tDZMw_rM3dHmV5b9hXFA9x" },
    { name: "Organic Black Rice", price: "283", rating: "4.9", reviews: "6025", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGyOJfIwDyEBbMIFdx0wm9fsKgt3ma_9Q_cnTJeQ0NoAZqB_t5S2CMJpwcXavgUSyDEZtsmX3lb21ypEZ_Q3WVWv8TIMbxMv1BNuCYnIKSsdnUtwxYqCnVB5UXH7A2gSGQdLawWHvZqWhR0OLAQ3Zy7paW4ZNHVFdSMcAGNmhdlBwGSEM6lMMrb3I6D2cr8usVvpO7H_DsDniaCsSJZ7kug42N_ksYmu94kLOSvQ75DufBz2ChLL05lrAvBbF0sEWSjfwsTNrAh4Zk" },
    { name: "Raw Yellow Millet", price: "399", rating: "4.0", reviews: "85", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA2SEphSl0RAY0gzgJ9vMpP6h56PTgWCJI3IECvAFlL3l5L-AVGB1mZR5hz8qBHI06cb4DqkafD_dzpzvh7CVrQdizB7NA4nSP494eU_uhCH5O_GrRvQMe0gIQPxCssGXrTWEmZyIVoyfi69jiKVmdWqKNricmQUyAfQB7hpLqlkWPHRqZaETbrV1O3Gcn92vMFVINKMR_X1qoHLFB1KSMndFREWY2bExwiLXUwOqwUwaF7RifaAAE4pSorBLC9pZMTzUSzx1-Hd_yu" },
    { name: "Ancient Grains", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfozOejP8HE02IBTGhDbgy83AnAIDQwfRQvXJuXXKOG7Trs0Puo5yhj5sQEZD6W8YrTkQdQn2OvZSVn2YupuSiqpZMXn65WqdIFOikZwq_qaLuZ2G4QIgeH8ix-KURp4c3PY3YiwcKKDWcYOnorsy98C52NCrnoyTrQKAHuOEhtxFKbj-Y96FgufishFFDU-2g8ccUeVjSB_IJ4MQLpvJd6beP6phrRYec9Uurw4L4m5AS-v0EYpOFP7lzk7BlgtIEytA4RV4n0seM" }
];

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  if (selectedProduct) {
    return <ProductDetail product={selectedProduct} onBack={() => setSelectedProduct(null)} />;
  }

  return (
    <div className="bg-gray-100 min-h-screen text-gray-800 font-sans selection:bg-meesho selection:text-white">
      <Header onHomeClick={() => setSelectedProduct(null)} />
      <TopCategoriesRow />
      <HeroBanner />
      <StillLookingSection products={main_products} onProductClick={setSelectedProduct} />
      <ProductGrid onProductClick={setSelectedProduct} />
    </div>
  );
}

export default App;
