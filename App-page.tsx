export default function GreatLakesOutdoorCareSite() {
  const phones = ["517-994-8516", "616-902-8941", "989-640-5579"];
  const pricing = [
    ["Lawn Mowing", "$110-$160/month (subject to change)", "Includes weekly mowing, clean line trimming, weed whacking, and blowing off hard surfaces for a sharp finished look."],
    ["Leaf Removal", "$150-$275/month (subject to change)", "Fast seasonal cleanup for yards and walkways to keep the property clean and prevent buildup."],
    ["Snow Removal", "$90-$150/month (subject to change)", "Reliable winter clearing with walkway attention and consistent service after snowfall."],
  ];

  const packages = [
    {
      title: "Lawn + Spring Cleanup",
      price: "$140–$190/month",
      badge: "Most Popular",
      items: ["Weekly mowing", "Trimming", "Weed whacking", "Blowing off driveway", "Spring cleanup service"],
    },
    {
      title: "Lawn + Leaf/Snow Removal",
      price: "$170–$230/month",
      badge: "$40 more than Basic",
      items: ["Weekly mowing", "Leaf removal during fall", "Snow removal during winter", "Driveway and walkway clearing"],
    },
    {
      title: "Full Year-Round Subscription",
      price: "$210–$290/month",
      badge: "Best Value",
      items: ["Weekly lawn mowing", "Spring cleanup", "Leaf removal", "Snow removal", "Driveway and walkway clearing", "Year-round seasonal property care"],
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <section className="bg-gradient-to-br from-green-950 via-emerald-900 to-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="uppercase tracking-[0.22em] text-base md:text-lg font-bold text-emerald-100 mb-4">
              Great Lakes Outdoor Care
            </p>
            <h1 className="text-5xl md:text-6xl font-black leading-tight">
              Dependable Year-Round Lawn & Property Care
            </h1>
            <p className="mt-6 text-lg text-slate-200 max-w-xl">
              Professional mowing, seasonal cleanups, and winter snow service designed to keep your property clean, sharp, and well-maintained in every season. Built for homeowners across Michigan who want reliable service, clear pricing, and results they can count on. Proudly serving Ionia County with dependable local property care.
            </p>
          </div>

          <div>
            <div className="mb-5 rounded-2xl bg-emerald-400/15 border border-emerald-300/20 px-6 py-4 text-base md:text-lg font-bold text-emerald-100 text-center">
              Located in Michigan • Proudly Serving Ionia County
            </div>
            <div className="bg-white/10 backdrop-blur rounded-3xl p-8 border border-white/10 shadow-2xl">
              <h2 className="text-2xl font-bold mb-4">Why Great Lakes Outdoor Care</h2>
              <ul className="space-y-3 text-slate-100">
                <li>✔ Reliable weekly service</li>
                <li>✔ Premium professional presentation that builds trust</li>
                <li>✔ Straightforward monthly pricing</li>
                <li>✔ Year-round subscriptions that keep clients locked in</li>
                <li>✔ Fast phone response and local trust</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-black mb-8">Core Services & Pricing</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {pricing.map(([title, price, details]) => (
            <div key={title} className="rounded-3xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-2xl font-bold">{title}</h3>
              <p className="mt-4 text-slate-700 leading-7">{price}</p>
              <p className="mt-3 text-slate-500 leading-7">{details}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-4xl font-black mb-8">Monthly Packages</h2>
          <div className="grid lg:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div key={pkg.title} className="rounded-3xl bg-white p-8 shadow-lg border border-slate-200">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-2xl font-bold">{pkg.title}</h3>
                  <span className="text-xs font-bold uppercase bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full">
                    {pkg.badge}
                  </span>
                </div>
                <p className="mt-3 text-xl font-semibold text-emerald-700">{pkg.price}</p>
                <ul className="mt-5 space-y-2 text-slate-700">
                  {pkg.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="rounded-3xl bg-gradient-to-r from-emerald-700 to-green-900 text-white p-10 shadow-xl">
          <h2 className="text-4xl font-black mb-4">Simple, Reliable Service That Keeps Clients Coming Back</h2>
          <p className="text-lg text-emerald-50 max-w-3xl">
            Our plans are built to make property maintenance easy for homeowners who want a clean lawn, clear leaves, and dependable snow service without the hassle of chasing contractors every season.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="rounded-3xl border border-emerald-300 bg-emerald-50 p-8 shadow-sm mb-10 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700 mb-2">Book Now</p>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3">Reserve Your Summer Lawn Care Plan</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">Summer lawn care plans are filling quickly across Ionia County as homeowners lock in recurring mowing, trimming, weed whacking, and cleanup service for the season. Request your free estimate today to reserve one of the remaining summer route openings before the schedule is full.</p>
        </div>

        <div className="rounded-3xl bg-slate-900 text-white p-8 shadow-xl text-center">
          <h2 className="text-4xl font-black mb-3">Get Your Free Estimate Today</h2>
          <p className="text-lg text-slate-300">Fast local response for homeowners across Ionia County.</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-black mb-8">Contact Numbers</h2>
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
          <div className="grid md:grid-cols-3 gap-6">
            {phones.map((p) => (
              <div key={p} className="text-center">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500 mb-2">Phone</p>
                <p className="text-2xl font-black text-slate-900">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-black mb-8">Service Areas Across Ionia County</h2>
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-slate-600 mb-6">Proudly serving homeowners throughout Ionia County, including the major cities, villages, and nearby communities.</p>
          <div className="flex flex-wrap gap-3">
            {["Ionia", "Belding", "Portland", "Clarksville", "Hubbardston", "Lake Odessa", "Lyons", "Muir", "Pewamo", "Saranac", "Palo"].map((town) => (
              <span key={town} className="px-4 py-2 rounded-full bg-emerald-50 text-emerald-800 font-semibold border border-emerald-100">
                {town}
              </span>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 text-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white">Great Lakes Outdoor Care</h3>
            <p className="mt-3 text-slate-400">
              Professional lawn mowing, leaf cleanup, and snow removal subscriptions designed to keep your property clean in every season.
            </p>
          </div>
          <div className="md:text-right">
            <p className="font-semibold text-white">Business Email</p>
            <p className="text-slate-300">greatlakesoutdoorcare@gmail.com</p>
            <p className="mt-4 text-sm text-slate-500">
              Located in Michigan and proudly serving Ionia County with dependable monthly lawn, leaf, and snow service plans.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
