import MainLayout from "../../layouts/MainLayout";

// Image assets from Figma
const heroImage = "/assets/images/hero-image.jpg";
const collectionWorkWearImage = "../assets/images/collection-work-wear.jpg";
const collectionFormalWearImage = "../assets/images/collection-formal-wear.jpg";
const collectionAccessoriesImage = "../assets/images/collection-accessories.jpg";
const collectionHealthcareImage = "../assets/images/collection-healthcare.jpg";
const deliveryImg1 = "../assets/images/delivery-1.jpg";
const deliveryImg2 = "../assets/images/delivery-2.jpg";
const deliveryImg3 = "../assets/images/delivery-3.jpg";

// Icons
const consistentQualityIcon = "../assets/icons/consistent-quality.svg";
const bulkProductionIcon = "../assets/icons/bulk-production.svg";
const customBrandingIcon = "../assets/icons/custom-branding.svg";
const reliableDeliveryIcon = "../assets/icons/reliable-delivery.svg";

const Home = () => {
  return (
    <MainLayout>
      <div className="w-full bg-white">
        {/* HERO SECTION */}
        <section className="bg-[#f4f4f4] py-[70px] px-4 lg:px-8">
          <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="flex flex-col gap-10">
                <div>
                  <h1 className="text-5xl lg:text-6xl font-black uppercase tracking-[-2.4px] mb-6 leading-[1.2] font-['Inter']">
                    <span className="text-black block">Performance</span>
                    <span className="text-[#e1811f]">Meets Style</span>
                    <span className="text-black block">In Every Stitch</span>
                  </h1>
                  <p className="text-[20px] text-black leading-[1.6] font-['Lexend'] mt-6">
                    Discover premium-quality apparel and professional uniform crafted for comfort, durability, and impact. From team kits to workplace uniforms, we deliver solutions that match your standards.
                  </p>
                </div>

                <button className="bg-[#e1811f] text-white px-10 py-5 rounded-[14px] font-semibold hover:bg-[#d07018] transition w-fit text-[18px] font-['Inter']">
                  Request custom order
                </button>
              </div>

              {/* Right Image */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[450px]">
                  <img
                    src={heroImage}
                    alt="Premium Apparel"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STATS SECTION */}
        <section className="bg-[#f4f4f4] py-16 px-4 lg:px-8 border-b border-[rgba(53,53,53,0.2)]">
          <div className="max-w-[1280px] mx-auto">
            <div className="flex justify-around items-center gap-8">
              <div className="text-center">
                <p className="text-5xl font-black text-black mb-3 tracking-[-2px]">18+</p>
                <p className="text-base font-medium text-black uppercase tracking-[3.2px] font-['Inter']">Years<br/>Crafting</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-black text-black mb-3 tracking-[-2px]">156k+</p>
                <p className="text-base font-medium text-black uppercase tracking-[3.2px] font-['Inter']">Units<br/>Shipped</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-black text-black mb-3 tracking-[-2px]">100%</p>
                <p className="text-base font-medium text-black uppercase tracking-[3.2px] font-['Inter']">Custom<br/>Built</p>
              </div>
            </div>
          </div>
        </section>

        {/* COLLECTIONS SECTION */}
        <section className="bg-white py-24 px-4 lg:px-8">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-20">
              <p className="text-[#e1811f] text-base font-medium uppercase tracking-[1.6px] mb-6 font-['Inter']">Categories section a estimonial...</p>
              <h2 className="text-5xl font-black uppercase tracking-[-2.4px] text-black font-['Inter']">Our Diverse Collection</h2>
            </div>

            {/* Collection Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Work Wear */}
              <div className="bg-[#f4f4f4] rounded-[12px] p-8 flex gap-6">
                <div className="flex-1">
                  <h3 className="text-[18px] font-bold uppercase text-black mb-3 font-['Inter']">Work Wear</h3>
                  <p className="text-[#9e9e9e] text-[16px] leading-[1.5] font-['Lexend']">
                    Global logistics network ensuring your team is geared up on time.
                  </p>
                </div>
                <div className="w-[168px] h-[214px] flex-shrink-0 rounded-[14px] overflow-hidden">
                  <img src={collectionWorkWearImage} alt="Work Wear" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Formal Wear */}
              <div className="bg-[#f4f4f4] rounded-[12px] p-8 flex gap-6">
                <div className="flex-1">
                  <h3 className="text-[18px] font-bold uppercase text-black mb-3 font-['Inter']">Formal Wear</h3>
                  <p className="text-[#9e9e9e] text-[16px] leading-[1.5] font-['Lexend']">
                    Global logistics network ensuring your team is geared up on time.
                  </p>
                </div>
                <div className="w-[168px] h-[214px] flex-shrink-0 rounded-[14px] overflow-hidden">
                  <img src={collectionFormalWearImage} alt="Formal Wear" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Accessories */}
              <div className="bg-[#f4f4f4] rounded-[12px] p-8 flex gap-6">
                <div className="flex-1">
                  <h3 className="text-[18px] font-bold uppercase text-black mb-3 font-['Inter']">Accessories</h3>
                  <p className="text-[#9e9e9e] text-[16px] leading-[1.5] font-['Lexend']">
                    Global logistics network ensuring your team is geared up on time.
                  </p>
                </div>
                <div className="w-[168px] h-[214px] flex-shrink-0 rounded-[14px] overflow-hidden">
                  <img src={collectionAccessoriesImage} alt="Accessories" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Healthcare */}
              <div className="bg-[#f4f4f4] rounded-[12px] p-8 flex gap-6">
                <div className="flex-1">
                  <h3 className="text-[18px] font-bold uppercase text-black mb-3 font-['Inter']">Healthcare</h3>
                  <p className="text-[#9e9e9e] text-[16px] leading-[1.5] font-['Lexend']">
                    Global logistics network ensuring your team is geared up on time.
                  </p>
                </div>
                <div className="w-[168px] h-[215px] flex-shrink-0 rounded-[14px] overflow-hidden">
                  <img src={collectionHealthcareImage} alt="Healthcare" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COMPLETE SOLUTIONS SECTION */}
        <section className="bg-[#f3eeea] py-24 px-4 lg:px-8">
          <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Content */}
              <div className="flex flex-col gap-10">
                <h2 className="text-5xl font-black uppercase tracking-[-2.4px] text-black font-['Inter'] leading-[1.2]">
                  We Deliver<br/>
                  <span className="text-[#e1811f]">Complete Apparel Solutions</span>
                </h2>

                <div>
                  <p className="text-[24px] text-black leading-[1.5] font-['Lexend:Light'] mb-6">
                    We deliver complete apparel solutions across sportswear, formal clothing, and industrial uniforms.
                  </p>

                  <ul className="text-[24px] text-black font-['Lexend:Light'] space-y-2">
                    <li className="flex items-start">
                      <span className="mr-3">•</span>
                      <span>With a strong focus on fabric quality,</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3">•</span>
                      <span>precision tailoring, and custom production,</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3">•</span>
                      <span>we help brands and teams stand out with confidence.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Images Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-1 row-span-2 rounded-[7px] overflow-hidden h-[439px]">
                  <img src={deliveryImg1} alt="Apparel" className="w-full h-full object-cover" />
                </div>
                <div className="col-span-1 rounded-[7px] overflow-hidden h-[212px]">
                  <img src={deliveryImg2} alt="Apparel" className="w-full h-full object-cover" />
                </div>
                <div className="col-span-1 rounded-[7px] overflow-hidden h-[212px]">
                  <img src={deliveryImg3} alt="Apparel" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US SECTION */}
        <section className="bg-white py-24 px-4 lg:px-8">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black uppercase tracking-[-2.4px] text-black mb-6 font-['Inter']">Why Choose Us</h2>
              <p className="text-[#e1811f] text-base font-medium uppercase tracking-[1.6px] font-['Inter']">Our strength lies in our roster of key features</p>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Consistent Quality */}
              <div className="bg-[#f4f4f4] p-8 rounded-[8px]">
                <div className="bg-[rgba(225,129,31,0.1)] w-12 h-12 rounded-[6px] flex items-center justify-center mb-6">
                  <img src={consistentQualityIcon} alt="Quality" className="w-6 h-6" />
                </div>
                <h3 className="text-[18px] font-bold uppercase text-black mb-3 font-['Inter']">Consistent Quality</h3>
                <p className="text-[#9e9e9e] text-[16px] leading-[1.5] font-['Lexend']">
                  Sourcing the world's most resilient textiles for extreme performance.
                </p>
              </div>

              {/* Bulk Production */}
              <div className="bg-[#f4f4f4] p-8 rounded-[8px]">
                <div className="bg-[rgba(225,129,31,0.1)] w-12 h-12 rounded-[6px] flex items-center justify-center mb-6">
                  <img src={bulkProductionIcon} alt="Production" className="w-6 h-6" />
                </div>
                <h3 className="text-[18px] font-bold uppercase text-black mb-3 font-['Inter']">Bulk Production</h3>
                <p className="text-[#9e9e9e] text-[16px] leading-[1.5] font-['Lexend']">
                  Streamlined manufacturing pipelines for high-volume enterprise orders.
                </p>
              </div>

              {/* Custom Branding */}
              <div className="bg-[#f4f4f4] p-8 rounded-[8px]">
                <div className="bg-[rgba(225,129,31,0.1)] w-12 h-12 rounded-[6px] flex items-center justify-center mb-6">
                  <img src={customBrandingIcon} alt="Branding" className="w-6 h-6" />
                </div>
                <h3 className="text-[18px] font-bold uppercase text-black mb-3 font-['Inter']">Custom Branding</h3>
                <p className="text-[#9e9e9e] text-[16px] leading-[1.5] font-['Lexend']">
                  In-house studio for precision logo application and custom trims.
                </p>
              </div>

              {/* Reliable Delivery */}
              <div className="bg-[#f4f4f4] p-8 rounded-[8px]">
                <div className="bg-[rgba(225,129,31,0.1)] w-12 h-12 rounded-[6px] flex items-center justify-center mb-6">
                  <img src={reliableDeliveryIcon} alt="Delivery" className="w-6 h-6" />
                </div>
                <h3 className="text-[18px] font-bold uppercase text-black mb-3 font-['Inter']">Reliable Delivery</h3>
                <p className="text-[#9e9e9e] text-[16px] leading-[1.5] font-['Lexend']">
                  Global logistics network ensuring your team is geared up on time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA SECTION */}
        <section className="bg-white py-24 px-4 lg:px-8">
          <div className="max-w-[1280px] mx-auto text-center">
            <h2 className="text-5xl font-black uppercase tracking-[-2.4px] text-black mb-8 font-['Inter'] leading-[1.2]">
              Need custom uniforms or bulk apparel solutions?<br/>
              <span className="text-[#e1811f]">Let's create something tailored for your brand</span>
            </h2>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="bg-[#e1811f] text-white px-12 py-5 rounded-[14px] font-semibold hover:bg-[#d07018] transition text-[18px] font-['Inter']">
                Get in touch
              </button>
              <button className="border-2 border-black text-black px-12 py-5 rounded-[14px] font-semibold hover:bg-black hover:text-white transition text-[18px] font-['Inter']">
                Start your order
              </button>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default Home;
