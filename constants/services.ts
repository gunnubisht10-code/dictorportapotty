import { Service } from '../types';
import { images } from '../assets/images';

export const services: Service[] = [
  {
    slug: 'standard-porta-potty',
    title: 'Standard Porta Potty',
    description: 'The ideal, cost-effective solution for construction sites, informal events, and any location needing basic, reliable sanitation.',
    image: images.standardPortaPotty,
    altText: 'Clean standard porta potty unit ready for rental at a construction site in Decatur, TX.',
    content: {
      features: ['Durable construction', 'Non-flushing toilet & urinal', 'Fully stocked toilet paper dispenser', 'Well-ventilated design', 'Anti-slip flooring'],
      useCases: ['Construction Sites', 'Public Parks', 'Small Outdoor Gatherings', 'Sporting Events', 'Agricultural Use'],
    },
    faqs: [
        { q: 'How often are standard units serviced?', a: 'Our standard service is weekly, which includes pumping, cleaning, and restocking. We can customize a more frequent schedule based on your project\'s needs.' },
        { q: 'Do standard units include hand sanitizer?', a: 'Yes, for optimal hygiene, hand sanitizer dispensers are included in all our standard units at no extra charge.' },
    ],
    relatedServices: ['deluxe-porta-potty', 'construction-site-portable-toilets', 'porta-john-rental']
  },
  {
    slug: 'deluxe-porta-potty',
    title: 'Deluxe Porta Potty',
    description: 'A more spacious and comfortable option featuring a flushing toilet and internal sink, perfect for special events.',
    image: images.deluxePortaPotty,
    altText: 'Interior of a deluxe porta potty with a flushing toilet and freshwater sink for rent in Decatur.',
    content: {
      features: ['Foot-pump operated flushing toilet', 'Internal sink with fresh water', 'Soap and paper towel dispensers', 'Interior mirror and convenience shelf', 'Slightly larger interior for more comfort'],
      useCases: ['Weddings', 'Corporate Events', 'Parties', 'Family Reunions', 'Festivals'],
    },
    faqs: [
        { q: 'What is the water capacity of the deluxe unit sink?', a: 'Our deluxe units feature a generous freshwater sink, typically holding 10-15 gallons, sufficient for many uses before needing a refill during your event.' },
        { q: 'Is the flushing system fresh water?', a: 'Yes, our deluxe flushing toilets use a fresh water system, providing a more pleasant and sanitary experience for your guests.' },
    ],
    relatedServices: ['standard-porta-potty', 'restroom-trailer-rental', 'event-porta-potty-rental']
  },
  {
    slug: 'ada-accessible-porta-potty',
    title: 'ADA Accessible Porta Potty',
    description: 'Spacious, wheelchair-accessible units compliant with all ADA regulations, ensuring comfort and accessibility for all users.',
    image: images.adaPortaPotty,
    altText: 'Large, ADA-compliant wheelchair accessible porta potty unit available in Decatur, TX.',
    content: {
      features: ['Extra-large interior for full wheelchair turning radius', 'Flat-floor design for easy wheelchair entry', 'Interior grab bars for safety and support', 'Spacious enough for a wheelchair and a caregiver', 'Reinforced, durable construction'],
      useCases: ['Public Events', 'Community Centers', 'Construction Sites requiring ADA compliance', 'Schools and Parks'],
    },
    faqs: [
        { q: 'Does this unit meet all Texas ADA requirements?', a: 'Absolutely. Our ADA accessible units are fully compliant with all state and federal Americans with Disabilities Act (ADA) regulations for portable toilets.' },
        { q: 'How much space is needed for placement?', a: 'Due to their larger size, these units require a flat, stable surface of at least 7 feet by 7 feet for proper placement and to ensure clear access.' },
    ],
    relatedServices: ['deluxe-porta-potty', 'event-porta-potty-rental', 'handwashing-station-rental']
  },
  {
    slug: 'restroom-trailer-rental',
    title: 'Restroom Trailer Rental',
    description: 'The ultimate in portable comfort, offering a luxury, climate-controlled experience for upscale events and VIP guests.',
    image: images.luxuryTrailer,
    altText: 'Luxury restroom trailer with multiple stalls, sinks, and high-end finishes for rent.',
    content: {
      features: ['Multiple private stalls with flushing toilets', 'Full climate control (Air Conditioning & Heating)', 'Hot and cold running water sinks', 'Vanity mirrors, countertops, and high-end lighting', 'Stereo system for ambient music'],
      useCases: ['VIP areas at events', 'High-end Weddings', 'Corporate Retreats', 'Film and TV production sets', 'Extended outdoor events'],
    },
    faqs: [
        { q: 'Do restroom trailers require power and water hookups?', a: 'For full functionality, our trailers require standard electrical and water hookups. For remote locations, we offer fully self-contained units with onboard generators and water tanks.' },
        { q: 'How many people can a restroom trailer accommodate?', a: 'Our trailers come in various sizes. A standard 2-stall trailer can typically accommodate events of up to 150 guests over an 8-hour period comfortably.' },
    ],
    relatedServices: ['luxury-portable-restrooms', 'deluxe-porta-potty', 'event-porta-potty-rental']
  },
  {
    slug: 'construction-site-portable-toilets',
    title: 'Construction Site Portable Toilets',
    description: 'Durable and reliable OSHA-compliant units designed to withstand the rigors of any Decatur job site.',
    image: images.constructionSite,
    altText: 'Row of durable porta potties at a Decatur construction site.',
    content: {
      features: ['Heavy-duty polyethylene construction', 'Optional crane-lift hooks for high-rise projects', 'High-visibility colors for on-site safety', 'Consistent weekly cleaning and restocking included', 'Meets all OSHA requirements for job site sanitation'],
      useCases: ['Residential and Commercial Construction', 'Roadwork and Infrastructure Projects', 'Demolition Sites', 'Long-term development projects'],
    },
    faqs: [
        { q: 'How many toilets do I need for my construction crew?', a: 'OSHA guidelines recommend one toilet for every 10 workers for a standard 40-hour work week. We can help you calculate the exact number needed to keep your site compliant.' },
        { q: 'Can you service toilets on a high-rise construction site?', a: 'Yes, we offer units with heavy-duty crane-lift kits and have the trained personnel and equipment to safely service toilets on multi-story construction projects.' },
    ],
    relatedServices: ['standard-porta-potty', 'long-term-short-term-rentals', 'handwashing-station-rental']
  },
  {
    slug: 'event-porta-potty-rental',
    title: 'Event Porta Potty Rental',
    description: 'Clean, modern, and well-stocked portable toilets delivered on-time for events of any size in the Decatur area.',
    image: images.eventPortaPotty,
    altText: 'Clean, modern portable toilets ready for an outdoor event in Wise County.',
    content: {
      features: ['Newer, well-maintained units for a positive guest experience', 'Guaranteed clean and sanitized upon delivery', 'Fully stocked with ample toilet paper and hand sanitizer', 'Options for standalone handwashing stations', 'Prompt delivery and pickup to match your event schedule'],
      useCases: ['Outdoor weddings', 'Music festivals', 'Sporting tournaments', 'Community fairs', 'Corporate picnics'],
    },
    faqs: [
        { q: 'How far in advance should I book for a large event?', a: 'For large events or during peak season (spring and fall), we recommend booking at least 3-4 weeks in advance to ensure availability of the quantity and type of units you need.' },
        { q: 'Do you offer on-site attendants for events?', a: 'Yes, for large or upscale events, we can provide professional on-site attendants to keep the restrooms clean, stocked, and pleasant for your guests throughout the event.' },
    ],
    relatedServices: ['deluxe-porta-potty', 'ada-accessible-porta-potty', 'restroom-trailer-rental']
  },
  {
    slug: 'luxury-portable-restrooms',
    title: 'Luxury Portable Restrooms',
    description: 'Elevate your event with our high-end restroom trailers, offering superior comfort, style, and amenities.',
    image: images.luxuryTrailer,
    altText: 'Elegant interior of a luxury portable restroom trailer with a vanity and mirror.',
    content: {
      features: ['Porcelain flushable toilets and waterless urinals', 'Hot and cold running water sinks with vanities', 'Full interior and exterior lighting', 'Efficient air conditioning and heating', 'Spacious interiors with elegant decor and wood-grain flooring'],
      useCases: ['Elegant weddings', 'VIP sections', 'Corporate functions', 'Private parties', 'Fundraisers'],
    },
    faqs: [
        { q: 'What is the difference between a luxury restroom and a restroom trailer?', a: 'The terms are often used interchangeably, but "Luxury Portable Restrooms" refers to our most premium trailer options with the highest level of finishes, amenities, and decor, perfect for black-tie events.' },
        { q: 'Can the decor be customized?', a: 'While the core finishes are fixed, we can often add small decorative touches like floral arrangements or custom soaps to match your event\'s theme. Please discuss your needs with our event specialists.' },
    ],
    relatedServices: ['restroom-trailer-rental', 'deluxe-porta-potty', 'event-porta-potty-rental']
  },
  {
    slug: 'porta-john-rental',
    title: 'Porta John Rental',
    description: 'Simple, effective, and affordable porta johns for all your basic sanitation needs. The workhorse of our fleet.',
    image: images.standardPortaPotty,
    altText: 'A standard porta john unit ready for quick rental in Decatur, TX.',
    content: {
      features: ['Lightweight and easy to place on any site', 'Lockable door for privacy', 'Translucent roof for natural light', 'Anti-slip flooring for safety', 'Reliable, regularly scheduled maintenance'],
      useCases: ['Job sites', 'Agricultural fields', 'Emergency response sites', 'Temporary parking lots'],
    },
     faqs: [
        { q: 'Is "Porta John" the same as "Porta Potty"?', a: 'Yes, the terms are often used interchangeably. "Porta John" typically refers to the basic, standard model of a portable toilet, perfect for no-frills sanitation.' },
        { q: 'What is included in the porta john rental price?', a: 'Our standard rental price includes delivery, pickup, weekly cleaning, and complete restocking of all necessary supplies.' },
    ],
    relatedServices: ['standard-porta-potty', 'construction-site-portable-toilets', 'long-term-short-term-rentals']
  },
  {
    slug: 'temporary-restroom-rental',
    title: 'Temporary Restroom Rental',
    description: 'Comprehensive temporary restroom solutions for any situation or duration, including emergencies and renovations.',
    image: images.quickDelivery,
    altText: 'A service truck delivering temporary restrooms for an emergency situation.',
    content: {
      features: ['Wide range of unit types available', 'Flexible rental periods (daily, weekly, monthly)', 'Ideal for office remodels or plumbing emergencies', 'Scalable for any number of users', 'Includes all necessary servicing and maintenance'],
      useCases: ['Home or business renovations', 'Disaster relief efforts', 'Long-term industrial projects', 'Seasonal business needs (e.g., pumpkin patches)'],
    },
    faqs: [
        { q: 'Can I rent a single unit for a weekend?', a: 'Absolutely. We offer short-term and weekend rentals perfect for parties, home projects, or any temporary need you may have.' },
        // Fix: Corrected typo in object property from 'q:g' to 'q'.
        { q: 'What happens in a plumbing emergency?', a: 'We offer expedited, same-day delivery for emergency situations to minimize disruption to your home or business. Call us immediately for the fastest response.' },
    ],
    relatedServices: ['long-term-short-term-rentals', 'standard-porta-potty', 'deluxe-porta-potty']
  },
  {
    slug: 'handwashing-station-rental',
    title: 'Portable Handwashing Stations',
    description: 'Promote hygiene and health at your event or job site with our standalone portable handwashing stations.',
    image: images.handwashingStation,
    altText: 'A dual-sink portable handwashing station with soap and paper towels.',
    content: {
      features: ['Two or four sink stations available', 'Foot-pump operated for hands-free use', 'Includes soap and paper towel dispensers', 'Self-contained fresh and grey water tanks', 'Complies with health and safety regulations'],
      useCases: ['Food festivals and outdoor dining', 'Events requiring enhanced hygiene', 'Construction sites', 'Schools and outdoor classrooms', 'RV parks and campgrounds'],
    },
    faqs: [
        { q: 'How many handwashing stations do I need?', a: 'A good rule of thumb is one station per four portable toilets, and at least one near any food service area. We can advise on the best ratio for your specific event or site.' },
        { q: 'Are the stations refilled during the rental?', a: 'Yes, as part of our service for longer-term rentals or large multi-day events, we will refill the fresh water and soap, and service the grey water tank.' },
    ],
    relatedServices: ['event-porta-potty-rental', 'construction-site-portable-toilets', 'ada-accessible-porta-potty']
  },
  {
    slug: 'outdoor-event-toilet-rental',
    title: 'Outdoor Event Toilet Rental',
    description: 'Specialized toilet rentals to ensure guest comfort and proper sanitation at any outdoor gathering in the Decatur area.',
    image: images.festival,
    altText: 'A line of clean portable toilets at an outdoor festival in Texas.',
    content: {
      features: ['Strategic placement planning for optimal traffic flow', 'High-traffic servicing plans available', 'Clean, modern, and presentable units', 'A variety of options from basic to luxury trailers', 'Weather-resistant and stable designs'],
      useCases: ['Music concerts', 'Marathons and 5K runs', 'County fairs', 'Outdoor markets', 'Large-scale sporting events'],
    },
    faqs: [
        { q: 'How do you determine the best placement for toilets at a large venue?', a: 'Our experienced team conducts a site assessment to plan the most convenient and efficient placement, considering guest flow, accessibility, vendor locations, and service vehicle access.' },
        { q: 'Can units be serviced during my multi-day event?', a: 'Yes, we specialize in servicing units overnight or during off-peak hours for multi-day festivals and events to ensure they are fresh and fully stocked for your guests each day.' },
    ],
    relatedServices: ['event-porta-potty-rental', 'deluxe-porta-potty', 'handwashing-station-rental']
  },
  {
    slug: 'long-term-short-term-rentals',
    title: 'Long & Short-Term Rentals',
    description: 'Flexible and affordable rental plans tailored to your specific project timeline, from a single day to over a year.',
    image: images.cleaningTruck,
    altText: 'Porta potty service truck representing long-term rental service contracts.',
    content: {
      features: ['Competitive pricing for long-term and monthly contracts', 'Reliable, scheduled weekly servicing included', 'Ability to easily add or remove units as project needs change', 'Weekend and single-day rentals available', 'No hidden fees, just clear and simple billing'],
      useCases: ['Year-long construction projects', 'Seasonal agricultural work', 'Weekend home renovation', 'One-day party or event'],
    },
    faqs: [
        { q: 'Are there discounts for long-term rentals?', a: 'Yes, we offer significantly discounted monthly rates for long-term rentals compared to our daily or weekly rates, providing excellent value for ongoing projects.' },
        { q: 'What is the minimum rental period?', a: 'Our minimum rental period is one day. We offer convenient packages for weekend rentals covering Friday through Monday.' },
    ],
    relatedServices: ['construction-site-portable-toilets', 'porta-john-rental', 'temporary-restroom-rental']
  }
];