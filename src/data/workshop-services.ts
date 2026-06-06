export type WorkshopServiceSlug =
  | "service"
  | "bromsar"
  | "diagnostik"
  | "chassi-styrning"
  | "dack-hjul"
  | "elsystem"
  | "avgas-ljud"
  | "custombyggen";

export type WorkshopService = {
  slug: WorkshopServiceSlug;
  title: string;
  eyebrow: string;
  heroTitle: string;
  heroLead: string;
  intro: string;
  overview: string;
  checks: string[];
  included: Array<{ title: string; text: string; icon: string }>;
  benefits: Array<{ title: string; text: string; icon: string }>;
  intervalsTitle: string;
  intervals: Array<{ service: string; interval: string }>;
  process: Array<{ title: string; text: string; icon: string }>;
  ctaTitle: string;
  ctaText: string;
  image: string;
  imageAlt: string;
};

export const workshopServices: WorkshopService[] = [
  {
    slug: "service",
    title: "Service",
    eyebrow: "Scheduled maintenance",
    heroTitle: "Service",
    heroLead: "Keep your truck safe, strong, and ready for every mile.",
    intro:
      "Regular service is the foundation for reliability, performance, and long vehicle life. We service American pickups and 4x4s with the right fluids, filters, and inspection routines.",
    overview:
      "Our maintenance service catches small issues before they become expensive problems. We inspect key systems, document the work, and help you plan the next step for your truck.",
    checks: [
      "Oil and filter change",
      "Multi-point inspection",
      "Fluid levels and top-up",
      "Tire pressure and visual tire check",
      "Brake inspection",
      "Battery test",
      "Belts and hoses",
      "Service reminder and notes",
    ],
    included: [
      { title: "Oil & filter", text: "Premium oil and filters selected for your engine and use case.", icon: "oil" },
      { title: "Multi-point inspection", text: "We check important systems and components step by step.", icon: "search" },
      { title: "Fluids", text: "Levels are checked and topped up for reliable operation.", icon: "droplet" },
      { title: "Tire pressure", text: "Correct pressure improves safety, comfort, and tire life.", icon: "disc" },
      { title: "Brake inspection", text: "Pads, rotors, and brake components are visually inspected.", icon: "brake" },
      { title: "Battery test", text: "We test battery health and charging-system performance.", icon: "battery" },
      { title: "Belts & hoses", text: "Cracks, wear, and tension are checked carefully.", icon: "settings" },
      { title: "Service reset", text: "Service reminders and maintenance notes are updated.", icon: "clipboard" },
    ],
    benefits: [
      { title: "Better reliability", text: "Your truck is ready when you need it.", icon: "shield" },
      { title: "Optimal performance", text: "Proper service helps the vehicle run smoothly and strongly.", icon: "gauge" },
      { title: "Save long term", text: "Preventive maintenance lowers the risk of costly failures.", icon: "dollar" },
      { title: "Peace of mind", text: "You know what has been done and what is coming next.", icon: "check" },
    ],
    intervalsTitle: "Recommended service intervals",
    intervals: [
      { service: "Oil & filter", interval: "Every 8,000–10,000 km" },
      { service: "Tire rotation", interval: "Every 10,000 km" },
      { service: "Brake inspection", interval: "Every 15,000 km" },
      { service: "Fluid inspection", interval: "Every 15,000 km" },
      { service: "Battery test", interval: "Every 20,000 km" },
      { service: "Full inspection", interval: "Every 30,000 km" },
    ],
    process: [
      { title: "Book your service", text: "Tell us how the truck is used and what you want checked.", icon: "calendar" },
      { title: "We inspect", text: "The truck is checked and any issues are documented.", icon: "clipboard" },
      { title: "We service", text: "The work is completed with the right parts, fluids, and tools.", icon: "wrench" },
      { title: "Quality check", text: "We double-check the work and walk you through the result.", icon: "check" },
      { title: "Back on the road", text: "You leave with a truck that is ready for the next drive.", icon: "truck" },
    ],
    ctaTitle: "Ready to keep your truck in top shape?",
    ctaText: "Book your service today and let our team take care of your American truck.",
    image: "/dodge5.png",
    imageAlt: "American pickup receiving maintenance in a workshop",
  },
  {
    slug: "bromsar",
    title: "Brakes",
    eyebrow: "Safe stopping power",
    heroTitle: "Brakes",
    heroLead: "Confident brake feel for heavy trucks, daily driving, and towing.",
    intro:
      "Your brakes need to match the vehicle weight, load, and driving style. We inspect, repair, and replace brake components with safety and pedal feel as the priority.",
    overview:
      "We troubleshoot noise, vibration, uneven braking, and warning lights. After the inspection you receive a clear recommendation for what needs attention.",
    checks: ["Brake pads", "Brake rotors", "Calipers and slide pins", "Brake hoses", "Brake fluid", "Parking brake", "ABS warnings", "Road test"],
    included: [
      { title: "Pads", text: "Wear and contact are checked for safe braking performance.", icon: "brake" },
      { title: "Rotors", text: "We measure and assess rotors when vibration or corrosion appears.", icon: "disc" },
      { title: "Calipers", text: "Calipers are checked to make sure they move and release correctly.", icon: "settings" },
      { title: "Brake fluid", text: "Fluid condition and leaks are checked for stable pedal feel.", icon: "droplet" },
      { title: "ABS", text: "Sensors and fault codes are diagnosed when warning lights appear.", icon: "gauge" },
      { title: "Hoses", text: "Hoses and lines are inspected for damage and corrosion.", icon: "search" },
      { title: "Parking brake", text: "Function and adjustment are checked when needed.", icon: "shield" },
      { title: "Road test", text: "We verify feel, noise, and function after the work.", icon: "truck" },
    ],
    benefits: [
      { title: "Shorter stops", text: "Correct brakes give control when it matters.", icon: "shield" },
      { title: "Less noise", text: "We address squeal, scraping, and vibration.", icon: "check" },
      { title: "Built for load", text: "The brake setup is matched to how the truck is used.", icon: "truck" },
      { title: "Clear decisions", text: "You know what is urgent and what can wait.", icon: "clipboard" },
    ],
    intervalsTitle: "When should brakes be checked?",
    intervals: [
      { service: "Visual brake inspection", interval: "Every 15,000 km" },
      { service: "Brake fluid", interval: "Every two years" },
      { service: "Noise or vibration", interval: "Immediately when symptoms appear" },
      { service: "Heavy towing", interval: "Before the season" },
      { service: "ABS light", interval: "Book diagnostics as soon as possible" },
    ],
    process: [
      { title: "Symptom review", text: "We listen for when the sound, feel, or warning appears.", icon: "clipboard" },
      { title: "Inspection", text: "Pads, rotors, calipers, and fluid are checked.", icon: "search" },
      { title: "Repair", text: "We replace or repair parts after your approval.", icon: "wrench" },
      { title: "Test", text: "Brake force and pedal response are verified.", icon: "check" },
      { title: "Delivery", text: "You get a clear walkthrough of the completed work.", icon: "truck" },
    ],
    ctaTitle: "Do the brakes feel wrong?",
    ctaText: "Book a brake inspection and we will make sure your truck stops with confidence.",
    image: "/car5.png",
    imageAlt: "Brake service for an American pickup",
  },
  {
    slug: "diagnostik",
    title: "Diagnostics",
    eyebrow: "Precision troubleshooting",
    heroTitle: "Diagnostics",
    heroLead: "We find the cause behind warning lights, noises, and performance issues.",
    intro:
      "Modern diagnostics is more than reading fault codes. We combine scan tools, measurement, and American vehicle experience to identify the actual cause.",
    overview:
      "We work methodically from symptom to verified diagnosis. You receive a clear report and a practical repair recommendation before work begins.",
    checks: ["Fault-code scan", "Engine management", "Drivetrain", "Electrical system", "Sensor values", "Leaks and vacuum", "Road test", "Action report"],
    included: [
      { title: "Fault codes", text: "We read codes and interpret them in the correct context.", icon: "gauge" },
      { title: "Live data", text: "Sensor values are analyzed under the right conditions.", icon: "search" },
      { title: "Electrical checks", text: "Circuits, voltage, and ground points are inspected.", icon: "battery" },
      { title: "Engine", text: "Ignition, fuel, and airflow are checked methodically.", icon: "settings" },
      { title: "Drivetrain", text: "Transmission and four-wheel-drive systems are checked when symptoms point there.", icon: "truck" },
      { title: "Road test", text: "We reproduce the issue when needed.", icon: "calendar" },
      { title: "Report", text: "You receive clear information about the cause and next step.", icon: "clipboard" },
      { title: "Plan", text: "Actions are prioritized by safety and value.", icon: "check" },
    ],
    benefits: [
      { title: "The right repair", text: "Less guessing and fewer unnecessary parts.", icon: "check" },
      { title: "Faster decisions", text: "You get a clear path forward.", icon: "gauge" },
      { title: "Protect the truck", text: "Early fault detection reduces secondary damage.", icon: "shield" },
      { title: "Expert knowledge", text: "Experience with American systems and control modules.", icon: "settings" },
    ],
    intervalsTitle: "Common diagnostic cases",
    intervals: [
      { service: "Check engine light", interval: "Immediately when the light appears" },
      { service: "Rough running", interval: "At the first symptom" },
      { service: "Transmission issue", interval: "Book a check soon" },
      { service: "Electrical fault", interval: "When the issue returns" },
      { service: "Pre-purchase check", interval: "Before the decision" },
    ],
    process: [
      { title: "Describe the issue", text: "We collect symptoms, history, and when the issue appears.", icon: "clipboard" },
      { title: "Measure", text: "Diagnostic tools and tests are used on the right systems.", icon: "gauge" },
      { title: "Verify", text: "We confirm the cause before replacing parts.", icon: "search" },
      { title: "Proposal", text: "You receive pricing and the recommended fix.", icon: "check" },
      { title: "Repair", text: "After approval, we schedule the work.", icon: "wrench" },
    ],
    ctaTitle: "Need to know what is wrong?",
    ctaText: "Book diagnostics and get a clear answer before repairing.",
    image: "/dodge4.png",
    imageAlt: "Diagnostics on an American truck",
  },
  {
    slug: "chassi-styrning",
    title: "Chassis & Steering",
    eyebrow: "Stability and control",
    heroTitle: "Chassis & steering",
    heroLead: "Remove vibration, play, and uncertain road feel.",
    intro:
      "Chassis and steering components affect comfort, safety, and how the truck feels on the road. We help with joints, bushings, shocks, and steering parts.",
    overview:
      "We inspect wear items, road-test the vehicle, and recommend the right repairs for stability, control, and durability.",
    checks: ["Tie rods", "Ball joints", "Bushings", "Shock absorbers", "Suspension", "Wheel bearings", "Vibration", "Alignment needs"],
    included: [
      { title: "Tie rods", text: "Play and wear are checked carefully.", icon: "settings" },
      { title: "Bushings", text: "Dry or cracked bushings are identified.", icon: "search" },
      { title: "Shocks", text: "Leaks and function are checked for comfort and grip.", icon: "shield" },
      { title: "Suspension", text: "We assess springs, mounts, and ride height.", icon: "truck" },
      { title: "Wheel bearings", text: "Noise and play are checked when symptoms appear.", icon: "disc" },
      { title: "Vibration", text: "We troubleshoot chassis, wheel, and drivetrain causes.", icon: "gauge" },
      { title: "Lift kits", text: "Upgrade checks and installation are available when needed.", icon: "wrench" },
      { title: "Road test", text: "Feel and stability are verified on the road.", icon: "calendar" },
    ],
    benefits: [
      { title: "Better control", text: "The truck feels straighter, calmer, and safer.", icon: "shield" },
      { title: "Less vibration", text: "The right repair reduces irritating shake.", icon: "gauge" },
      { title: "Protect tires", text: "A healthy chassis reduces abnormal tire wear.", icon: "disc" },
      { title: "Ready for load", text: "The solution is matched to how you use the truck.", icon: "truck" },
    ],
    intervalsTitle: "When should chassis be checked?",
    intervals: [
      { service: "Chassis inspection", interval: "Every 20,000 km" },
      { service: "After lift/modification", interval: "Immediately after installation" },
      { service: "Vibration", interval: "When symptoms appear" },
      { service: "Before inspection", interval: "In good time before testing" },
      { service: "Off-road use", interval: "After hard driving" },
    ],
    process: [
      { title: "Road test", text: "We feel for vibration, play, and steering response.", icon: "truck" },
      { title: "Lift inspection", text: "Chassis and steering are checked under the vehicle.", icon: "search" },
      { title: "Proposal", text: "You receive clear prioritization of worn parts.", icon: "clipboard" },
      { title: "Repair", text: "Parts are replaced or adjusted with the right tools.", icon: "wrench" },
      { title: "Verification", text: "We make sure the truck feels right again.", icon: "check" },
    ],
    ctaTitle: "Does the truck feel loose or unsettled?",
    ctaText: "Book a chassis and steering inspection so we can find the cause.",
    image: "/ford1.png",
    imageAlt: "Chassis and steering work on a pickup",
  },
  {
    slug: "dack-hjul",
    title: "Tires & Wheels",
    eyebrow: "Grip, comfort, and stance",
    heroTitle: "Tires & wheels",
    heroLead: "Mounting, balancing, and wheel guidance for American trucks.",
    intro:
      "The right tires and wheels make a major difference to safety, comfort, and appearance. We help you select, mount, and inspect wheels for daily driving, off-road use, and towing.",
    overview:
      "We handle tire changes, balancing, rotation, and tire-wear checks. When needed, we also guide you on dimensions, wheels, and load ratings.",
    checks: ["Tire change", "Balancing", "Tire rotation", "Air pressure", "Wear pattern", "TPMS", "Wheel inspection", "Dimension and load rating"],
    included: [
      { title: "Mounting", text: "Tires are mounted correctly on the wheel and vehicle.", icon: "disc" },
      { title: "Balancing", text: "We reduce vibration and improve ride comfort.", icon: "gauge" },
      { title: "Rotation", text: "Rotating wheels helps even out tire wear.", icon: "settings" },
      { title: "Tire pressure", text: "Pressure is matched to the tire, load, and use case.", icon: "droplet" },
      { title: "TPMS", text: "Sensors and warnings are checked when needed.", icon: "battery" },
      { title: "Wear", text: "We read the wear pattern and identify the underlying cause.", icon: "search" },
      { title: "Wheels", text: "Damage, fitment, and bolt pattern are checked.", icon: "shield" },
      { title: "Guidance", text: "We help you choose the right look and function.", icon: "clipboard" },
    ],
    benefits: [
      { title: "Better grip", text: "Correct tires make driving safer year-round.", icon: "shield" },
      { title: "Less vibration", text: "Balanced wheels make the truck calmer.", icon: "gauge" },
      { title: "Longer life", text: "Rotation and pressure help protect your tires.", icon: "dollar" },
      { title: "Right appearance", text: "We match function with the truck's style.", icon: "truck" },
    ],
    intervalsTitle: "Tire and wheel routines",
    intervals: [
      { service: "Tire rotation", interval: "Every 10,000 km" },
      { service: "Balancing", interval: "When vibration appears or tires are changed" },
      { service: "Air pressure", interval: "Monthly" },
      { service: "Wear check", interval: "Every season" },
      { service: "TPMS check", interval: "When a warning appears" },
    ],
    process: [
      { title: "Needs review", text: "We review driving style, load, and desired look.", icon: "clipboard" },
      { title: "Selection", text: "Tires and dimensions are chosen for the vehicle.", icon: "disc" },
      { title: "Mounting", text: "We mount and balance the wheels.", icon: "wrench" },
      { title: "Control", text: "Pressure, fitment, and warnings are checked.", icon: "check" },
      { title: "Delivery", text: "You receive advice on pressure and rotation.", icon: "truck" },
    ],
    ctaTitle: "Need new tires or wheels?",
    ctaText: "Contact us and we will help your truck get the right grip and look.",
    image: "/dodge2.png",
    imageAlt: "Tires and wheels for an American pickup",
  },
  {
    slug: "elsystem",
    title: "Electrical System",
    eyebrow: "Power, control, and accessories",
    heroTitle: "Electrical system",
    heroLead: "From battery trouble to advanced electrical diagnostics.",
    intro:
      "The electrical system powers everything from starting and charging to lighting, sensors, and accessories. We troubleshoot and repair electrical faults with structured testing.",
    overview:
      "We check the battery, alternator, wiring, ground points, and control signals. For custom trucks, we also help with safe accessory installations.",
    checks: ["Battery test", "Charging system", "Starter", "Ground points", "Wiring", "Fuses and relays", "Lighting", "Accessories"],
    included: [
      { title: "Battery", text: "Health, capacity, and connections are tested.", icon: "battery" },
      { title: "Charging", text: "Alternator output and charging voltage are checked.", icon: "gauge" },
      { title: "Starting", text: "Starter and power supply are checked for starting issues.", icon: "settings" },
      { title: "Wiring", text: "Damage, loose connections, and corrosion are located.", icon: "search" },
      { title: "Grounds", text: "Ground points are measured for stable function.", icon: "shield" },
      { title: "Lighting", text: "Lighting and auxiliary lights can be checked or installed.", icon: "wrench" },
      { title: "Accessories", text: "Equipment is installed with proper fusing and routing.", icon: "clipboard" },
      { title: "Verification", text: "The system is tested after repair or installation.", icon: "check" },
    ],
    benefits: [
      { title: "Reliable starts", text: "Lower risk of being stranded.", icon: "battery" },
      { title: "Stable function", text: "Correct voltage reduces strange faults.", icon: "check" },
      { title: "Safe installs", text: "Accessories are installed with the right protection.", icon: "shield" },
      { title: "Less guesswork", text: "Methodical testing finds the root cause.", icon: "search" },
    ],
    intervalsTitle: "When electrical systems should be checked",
    intervals: [
      { service: "Battery test", interval: "Before winter and seasonal use" },
      { service: "Charging system", interval: "When starting issues appear" },
      { service: "Lighting check", interval: "Every service" },
      { service: "Accessory installation", interval: "Before use" },
      { service: "Repeated blown fuse", interval: "Book troubleshooting" },
    ],
    process: [
      { title: "Symptoms", text: "We map the fault, timing, and previous installations.", icon: "clipboard" },
      { title: "Testing", text: "Voltage, load, and circuits are tested.", icon: "gauge" },
      { title: "Locate", text: "The fault is isolated before repair.", icon: "search" },
      { title: "Repair", text: "Wiring, components, or installations are fixed.", icon: "wrench" },
      { title: "Test", text: "The system is verified under load.", icon: "check" },
    ],
    ctaTitle: "Electrical fault or starting problem?",
    ctaText: "Book electrical diagnostics and we will find the cause safely.",
    image: "/dodge3.png",
    imageAlt: "Electrical system and battery check on a pickup",
  },
  {
    slug: "avgas-ljud",
    title: "Exhaust & Sound",
    eyebrow: "Flow and character",
    heroTitle: "Exhaust & sound",
    heroLead: "The right tone, sealed systems, and reliable function.",
    intro:
      "The exhaust system affects sound, performance, and comfort. We help with leaks, corrosion, hangers, and upgrades for American V8 and truck systems.",
    overview:
      "We inspect the system from manifold to tailpipe, locate leaks, and help you choose a solution that fits the truck and how you use it.",
    checks: ["Exhaust leaks", "Rust and damage", "Hangers", "Catalytic converter", "Oxygen sensors", "Mufflers", "Tailpipes", "Custom solutions"],
    included: [
      { title: "Leaks", text: "We find leaks that cause noise, smell, or fault codes.", icon: "search" },
      { title: "Corrosion", text: "Damaged parts are assessed for repair or replacement.", icon: "shield" },
      { title: "Hangers", text: "Mounts and rubber hangers are checked for vibration.", icon: "settings" },
      { title: "Sensors", text: "Oxygen sensors and exhaust-related codes are diagnosed.", icon: "gauge" },
      { title: "Mufflers", text: "We help find the right balance between tone and comfort.", icon: "disc" },
      { title: "Tailpipes", text: "Finish and placement are matched to the truck's style.", icon: "truck" },
      { title: "Custom", text: "Upgrades are planned around fitment and function.", icon: "wrench" },
      { title: "Control", text: "The system is tested for sealing and sound character.", icon: "check" },
    ],
    benefits: [
      { title: "The right sound", text: "More character without unnecessary annoyance.", icon: "check" },
      { title: "Sealed system", text: "Less smell, noise, and fault-code risk.", icon: "shield" },
      { title: "Better flow", text: "The system is chosen for the vehicle and goal.", icon: "gauge" },
      { title: "Clean finish", text: "Tailpipes and details match the truck.", icon: "truck" },
    ],
    intervalsTitle: "Common exhaust jobs",
    intervals: [
      { service: "Exhaust leak", interval: "Immediately when noise or smell appears" },
      { service: "Rust inspection", interval: "Every service" },
      { service: "Hangers", interval: "When vibration appears" },
      { service: "Sensor fault", interval: "When the engine light appears" },
      { service: "Custom sound", interval: "Based on the desired level" },
    ],
    process: [
      { title: "Listen", text: "We review the desired sound or symptom.", icon: "clipboard" },
      { title: "Inspection", text: "The system is inspected on a lift.", icon: "search" },
      { title: "Proposal", text: "You receive repair or upgrade options.", icon: "check" },
      { title: "Installation", text: "Parts are installed with fitment and sealing in focus.", icon: "wrench" },
      { title: "Test", text: "Sound and sealing are verified.", icon: "truck" },
    ],
    ctaTitle: "Want to fix a leak or get the right sound?",
    ctaText: "Book an exhaust inspection and we will create a solution for your truck.",
    image: "/car4.png",
    imageAlt: "Exhaust and sound upgrade on a pickup",
  },
  {
    slug: "custombyggen",
    title: "Custom Builds",
    eyebrow: "Build your own style",
    heroTitle: "Custom builds",
    heroLead: "Lift kits, lighting, accessories, and details that make the truck yours.",
    intro:
      "A custom build should look right and work in real life. We help you plan and install upgrades for style, function, and durability.",
    overview:
      "From subtle details to larger builds, we create a plan, choose the right components, and install everything with safety and finish in focus.",
    checks: ["Lift kits", "Auxiliary lights", "Bull bars", "Bed solutions", "Wheels and tires", "Exhaust", "Electrical safety", "Inspection considerations"],
    included: [
      { title: "Planning", text: "We match the idea, budget, and how the truck is used.", icon: "clipboard" },
      { title: "Lift kits", text: "Lift setups are planned around geometry and function.", icon: "truck" },
      { title: "Lighting", text: "Auxiliary lights and light bars are installed safely.", icon: "battery" },
      { title: "Tires & wheels", text: "Dimensions are chosen for stance, grip, and fitment.", icon: "disc" },
      { title: "Exhaust", text: "Sound and finish can be tailored to the character you want.", icon: "settings" },
      { title: "Accessories", text: "Bars, bed covers, and practical details are installed.", icon: "wrench" },
      { title: "Safety", text: "Electrical work, mounting points, and function are checked.", icon: "shield" },
      { title: "Finish", text: "We review the full build before delivery.", icon: "check" },
    ],
    benefits: [
      { title: "Personal truck", text: "Built around your taste and everyday use.", icon: "truck" },
      { title: "Complete package", text: "Parts are chosen to work together.", icon: "check" },
      { title: "Safe installation", text: "Accessories are installed correctly and durably.", icon: "shield" },
      { title: "Stronger presence", text: "The truck gets the look and attitude you want.", icon: "gauge" },
    ],
    intervalsTitle: "Popular custom areas",
    intervals: [
      { service: "Lift kit", interval: "Planned around usage" },
      { service: "Auxiliary lighting", interval: "Before the dark season" },
      { service: "Wheel package", interval: "When changing look or tires" },
      { service: "Exhaust sound", interval: "Based on the desired level" },
      { service: "Bed accessories", interval: "Based on work needs" },
    ],
    process: [
      { title: "Idea", text: "We review goals, reference photos, and practical needs.", icon: "clipboard" },
      { title: "Plan", text: "Components, timing, and cost are prepared.", icon: "calendar" },
      { title: "Build", text: "Parts are installed by the team with the right tools.", icon: "wrench" },
      { title: "Quality check", text: "Fitment, electrical work, and function are verified.", icon: "check" },
      { title: "Delivery", text: "You get your personal truck ready for the road.", icon: "truck" },
    ],
    ctaTitle: "Have an idea for your truck?",
    ctaText: "Tell us what you want to build and we will help you do it right.",
    image: "/dodge1.png",
    imageAlt: "Custom-built American pickup",
  },
];

export const workshopServiceSlugs = workshopServices.map((service) => service.slug);

export function getWorkshopService(slug: string) {
  return workshopServices.find((service) => service.slug === slug);
}