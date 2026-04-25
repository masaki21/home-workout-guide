import Link from "next/link";

const supportEmail = process.env.NEXT_PUBLIC_SUPPORT_EMAIL || "support@example.com";

const price = "$5";

const whatYouGet = [
  "30 days of beginner home workouts",
  "Clear daily exercises, reps, sets, and rest",
  "Upper body, lower body, back, and core rotation",
  "Simple nutrition basics without calorie tracking",
  "Progress checkpoints and final trial days",
  "GIF exercise guide with beginner cues",
  "Anime companion coach notes for consistency",
  "Mobile-friendly online guide layout"
];

const heroProofPoints = [
  "$5 one-time purchase",
  "Instant access after purchase",
  "Works on your phone",
  "GIF exercise guide included"
];

const missionSteps = [
  {
    label: "Week 1 Mission",
    title: "Learn the flow",
    copy: "Get used to the training rhythm without trying to do too much."
  },
  {
    label: "Week 2 Mission",
    title: "Build consistency",
    copy: "Repeat the structure and make each session easier to start."
  },
  {
    label: "Week 3 Mission",
    title: "Add control",
    copy: "Keep the movements clean as the work becomes slightly harder."
  },
  {
    label: "Week 4 Mission",
    title: "Finish strong",
    copy: "Stay steady, complete the plan, and prepare for the final trial."
  },
  {
    label: "Final Trial",
    title: "Check your progress",
    copy: "Repeat the first upper and lower body sessions and compare how they feel."
  }
];

const faqs = [
  {
    question: "Is this for complete beginners?",
    answer:
      "Yes. It is built for beginner men who want a clear plan, not complicated fitness theory."
  },
  {
    question: "Do I need equipment?",
    answer:
      "No gym is required. The plan uses bodyweight exercises and enough floor space to move."
  },
  {
    question: "Will I dramatically transform in 30 days?",
    answer:
      "No dramatic transformation is promised. The goal is consistency, better movement, and a stronger foundation."
  },
  {
    question: "How do I access the guide after purchase?",
    answer:
      "After checkout, you will be sent to an access page with a button, the guide URL, and a copy link option."
  },
  {
    question: "Is this a downloadable PDF?",
    answer:
      "The main product is an online mobile-friendly guide. It is designed to be opened on your phone, not printed as a PDF."
  },
  {
    question: "Can I use it on my phone?",
    answer:
      "Yes. The guide is designed mobile-first so you can open the right section and follow the workout from your phone."
  },
  {
    question: "Are GIF guides included?",
    answer:
      "Yes. The online guide includes live GIF exercise examples with simple beginner cues."
  },
  {
    question: "Is the anime coach part of the product?",
    answer:
      "Yes. The companion coach appears in mission pages, checkpoints, tips, and completion moments to support follow-through."
  },
  {
    question: "Can I use it if I failed before?",
    answer:
      "Yes. The plan is designed for people who have tried random home workouts but need a clear next step."
  },
  {
    question: "What if I lose the guide link?",
    answer:
      "Use the support email on the access page. In v1 there is no login, so save or bookmark the guide link after purchase."
  }
];

function CheckoutButton({ label = "Get Instant Access" }) {
  return (
    <form action="/api/checkout" method="POST">
      <button className="button" type="submit">
        {label}
      </button>
    </form>
  );
}

function CoachImage({ name, alt, className = "" }) {
  return (
    <img className={`coach-image ${className}`} src={`/character/${name}.png`} alt={alt} />
  );
}

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="hero__copy">
          <p className="eyebrow">30-Day Mission · Instant Access Guide</p>
          <h1>Stop Guessing Your Home Workouts</h1>
          <p className="hero__lead">
            Get instant access to a mobile-friendly 30-day home workout guide.
            Follow it on your phone, one day at a time, with clear reps, clear
            rest, and no guesswork.
          </p>
          <div className="hero__badges" aria-label="Product highlights">
            <span>Instant access</span>
            <span>Mobile-friendly</span>
            <span>Clear rest</span>
            <span>Clear reps</span>
            <span>Beginner-friendly</span>
          </div>
          <div className="hero__actions">
            <CheckoutButton />
            <p className="price-note">{price} one-time payment · Open after purchase</p>
          </div>
          <div className="hero__purchase-points" aria-label="Purchase details">
            {heroProofPoints.map((point) => (
              <span key={point}>{point}</span>
            ))}
          </div>
        </div>

        <aside className="hero__visual" aria-label="Product preview">
          <div className="coach-frame coach-frame--hero">
            <CoachImage name="natural" alt="Anime companion coach standing ready" />
          </div>
          <div className="phone-preview">
            <p>ONLINE GUIDE</p>
            <h2>30-Day Home Workout Guide</h2>
            <ul>
              <li>Day-by-day structure</li>
              <li>GIF exercise guide</li>
              <li>Mission checkpoints</li>
            </ul>
            <div className="mini-checks">
              <span>[ ] Done</span>
              <span>[ ] Light</span>
              <span>[ ] Skipped</span>
            </div>
          </div>
        </aside>
      </section>

      <section className="section trust-origin">
        <p className="eyebrow">Why This Guide Exists</p>
        <h2>Built for real beginner friction, not generic fitness theory.</h2>
        <p>
          This guide is made for people who save home workout videos but still
          hesitate because the next step is unclear. It focuses on the repeated
          problems beginners run into: random routines, inconsistent reps,
          unclear rest, and no simple structure to follow.
        </p>
      </section>

      <section className="section problem">
        <p className="eyebrow">The Problem</p>
        <h2>Workout videos are useful. Random workouts are not a plan.</h2>
        <div className="card-grid">
          <article>
            <h3>You save videos but still hesitate</h3>
            <p>You have options, but you still do not know which workout to do today.</p>
          </article>
          <article>
            <h3>Your reps and rest are unclear</h3>
            <p>Some days are too easy. Some days are too hard. Nothing feels repeatable.</p>
          </article>
          <article>
            <h3>You stop before it becomes normal</h3>
            <p>Without a simple structure, motivation has to do all the work.</p>
          </article>
        </div>
      </section>

      <section className="section promise">
        <div className="coach-frame coach-frame--inline">
          <CoachImage name="guide" alt="Anime companion coach giving guidance" />
        </div>
        <div>
          <p className="eyebrow">The Promise</p>
          <h2>This is not more fitness information. It is a 30-day structure to follow.</h2>
          <p>
            The plan removes the daily decision-making: exercises, reps, sets,
            rest, weekly flow, and checkpoints are already decided. You open the
            day, follow the page, check it off, and continue.
          </p>
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">What You Get</p>
        <h2>Everything needed to start without building your own routine.</h2>
        <div className="feature-grid">
          {whatYouGet.map((item) => (
            <article className="feature-card" key={item}>
              <span aria-hidden="true">✓</span>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section mission">
        <div className="section-head">
          <p className="eyebrow">Mission Progression</p>
          <h2>A guided 30-day journey, not a random workout bundle.</h2>
          <p>
            The anime companion coach supports the structure: weekly missions,
            checkpoints, and a final trial. The theme is there to help you keep
            going, not to distract from the workouts.
          </p>
        </div>
        <div className="mission-layout">
          <div className="coach-frame coach-frame--mission">
            <CoachImage name="mission" alt="Anime companion coach presenting the mission" />
          </div>
          <div className="mission-list">
            {missionSteps.map((step) => (
              <article key={step.label}>
                <span>{step.label}</span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section fit">
        <div className="fit-card">
          <h2>This is for you if...</h2>
          <ul>
            <li>You are a beginner training at home</li>
            <li>You look slim and want to look a bit stronger</li>
            <li>You save workout videos but still lack structure</li>
            <li>You want reps, order, and rest decided for you</li>
          </ul>
        </div>
        <div className="fit-card fit-card--muted">
          <h2>This is not for you if...</h2>
          <ul>
            <li>You want an advanced bodybuilding program</li>
            <li>You expect a dramatic 30-day transformation</li>
            <li>You want detailed calorie and macro coaching</li>
            <li>You already follow a structured training plan</li>
          </ul>
        </div>
      </section>

      <section className="section preview">
        <p className="eyebrow">Product Preview</p>
          <h2>See what the guide actually feels like.</h2>
        <div className="preview-grid">
          <article className="sample-card">
            <span>Daily Page Sample</span>
            <h3>Day 1 · Upper Body</h3>
            <ul>
              <li>Knee Push-Up · 8 reps × 2</li>
              <li>Pike Push-Up · 5 reps × 2</li>
              <li>Diamond Push-Up · 4 reps × 2</li>
              <li>Crunch · 12 reps × 2</li>
            </ul>
            <p>Rest: 60 sec between sets.</p>
          </article>
          <article className="sample-card sample-card--image">
            <span>GIF Guide Sample</span>
            <img src="/gif/DiamondPushUp.gif" alt="Diamond push-up GIF sample" />
            <h3>Diamond Push-Up</h3>
            <p>Simple movement cues, not technical overload.</p>
          </article>
          <article className="sample-card">
            <span>Checkpoint Sample</span>
            <h3>End of Week Review</h3>
            <ul>
              <li>[ ] I completed the mission pages</li>
              <li>[ ] I know where to continue</li>
              <li>[ ] My form feels more stable</li>
            </ul>
          </article>
          <article className="sample-card sample-card--accent">
            <span>Final Trial</span>
            <h3>Day 29 + Day 30</h3>
            <p>
              Repeat the first upper and lower body sessions to compare control,
              confidence, and consistency.
            </p>
          </article>
        </div>
      </section>

      <section className="section price-section">
        <div className="price-card">
          <div className="coach-frame coach-frame--cta">
            <CoachImage name="thumbsUp" alt="Anime companion coach giving thumbs up" />
          </div>
          <p className="eyebrow">Get Instant Access</p>
          <h2>30-Day Home Workout Plan for Beginners</h2>
          <p className="price">{price}</p>
          <p>One-time payment. Open the mobile guide immediately after purchase.</p>
          <CheckoutButton />
        </div>
      </section>

      <section className="section faq">
        <p className="eyebrow">FAQ</p>
        <h2>Before you start</h2>
        <div className="faq-list">
          {faqs.map((faq) => (
            <article key={faq.question}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section policy-section">
        <div className="policy-card">
          <p className="eyebrow">Support And Policies</p>
          <h2>Clear purchase terms before checkout.</h2>
          <div className="policy-grid">
            <article>
              <h3>Delivery</h3>
              <p>
                This is a one-time purchase digital guide. After successful payment,
                customers receive instant online access through the success page and guide link.
              </p>
            </article>
            <article>
              <h3>Refunds</h3>
              <p>
                Refund requests are reviewed case by case. If access fails after a completed payment,
                contact support first so we can restore access or review the order.
              </p>
            </article>
            <article>
              <h3>Support</h3>
              <p>
                Support contact: <a href={`mailto:${supportEmail}`}>{supportEmail}</a>
              </p>
            </article>
          </div>
          <div className="policy-links" aria-label="Policy links">
            <Link href="/refund-policy">Refund Policy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/commercial-disclosure">Commercial Disclosure</Link>
          </div>
        </div>
      </section>

      <section className="section final-cta">
        <div>
          <p className="eyebrow">Ready to start?</p>
          <h2>Follow the next 30 days without guessing.</h2>
          <p>
            If random workouts have not worked, start with a simple structure you
            can open on your phone and follow day by day.
          </p>
          <CheckoutButton />
          <p className="support">{price} · Instant access after purchase · Support: {supportEmail}</p>
        </div>
        <div className="coach-frame coach-frame--final">
          <CoachImage name="victory" alt="Anime companion coach celebrating completion" />
        </div>
      </section>

      <footer className="site-footer">
        <div>
          <strong>Home Workout Guide</strong>
          <p>Support: <a href={`mailto:${supportEmail}`}>{supportEmail}</a></p>
        </div>
        <nav aria-label="Footer links">
          <Link href="/refund-policy">Refund Policy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/commercial-disclosure">Commercial Disclosure</Link>
        </nav>
      </footer>

      <div className="mobile-sticky-cta">
        <span>{price} Guide</span>
        <CheckoutButton />
      </div>
    </main>
  );
}
