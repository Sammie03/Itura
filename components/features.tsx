export default function Features() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">What we offer</h2>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <circle className="fill-current text-purple-600" cx="32" cy="32" r="32" /> 
                <rect className="fill-current text-purple-100" x="28" y="20" width="8" height="24" /> 
                <rect className="fill-current text-purple-100" x="20" y="28" width="24" height="8" /> 
              </svg>
              <h4 className="h4 mb-2">Health Care Services</h4>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <circle className="fill-current text-purple-600" cx="32" cy="32" r="32" />
                <rect className="fill-current text-purple-100" x="18" y="16" width="28" height="32" rx="2" ry="2" />
                <rect className="fill-current text-purple-600" x="22" y="20" width="20" height="4" rx="1" ry="1" />
                <circle className="fill-current text-purple-600" cx="26" cy="28" r="2" />
                <circle className="fill-current text-purple-600" cx="32" cy="28" r="2" />
                <circle className="fill-current text-purple-600" cx="38" cy="28" r="2" />
                <circle className="fill-current text-purple-600" cx="26" cy="34" r="2" />
                <circle className="fill-current text-purple-600" cx="32" cy="34" r="2" />
                <circle className="fill-current text-purple-600" cx="38" cy="34" r="2" />
                <circle className="fill-current text-purple-600" cx="26" cy="40" r="2" />
                <circle className="fill-current text-purple-600" cx="32" cy="40" r="2" />
                <circle className="fill-current text-purple-600" cx="38" cy="40" r="2" />
                <circle className="fill-current text-purple-600" cx="26" cy="46" r="2" />
                <circle className="fill-current text-purple-600" cx="32" cy="46" r="2" />
                <circle className="fill-current text-purple-600" cx="38" cy="46" r="2" />
              </svg>
              <h4 className="h4 mb-2">Diet Tracker</h4>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <circle className="fill-current text-purple-600" cx="32" cy="32" r="32" />
                <circle className="fill-current text-purple-100" cx="32" cy="24" r="4" />
                <path className="fill-current text-purple-100" d="M32 30 c-5 0 -8 3 -8 8 v4 h16 v-4 c0 -5 -3 -8 -8 -8 z" />
                <circle className="fill-current text-purple-100" cx="22" cy="32" r="4" />
                <path className="fill-current text-purple-100" d="M22 38 c-4 0 -7 3 -7 7 v4 h14 v-4 c0 -4 -3 -7 -7 -7 z" />
                <circle className="fill-current text-purple-100" cx="42" cy="32" r="4" />
                <path className="fill-current text-purple-100" d="M42 38 c-4 0 -7 3 -7 7 v4 h14 v-4 c0 -4 -3 -7 -7 -7 z" />
              </svg>
              <h4 className="h4 mb-2">Community Portal</h4>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
