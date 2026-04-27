"use client";

import * as React from "react";

const PRODUCT_NAME = "30-Day Home Workout Guide";
const PURCHASE_VALUE = 5;
const PURCHASE_CURRENCY = "USD";

export function trackEvent(name, params = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return false;
  window.gtag("event", name, params);
  return true;
}

export function TrackedCheckoutForm({ label = "Get Instant Access", location }) {
  const formRef = React.useRef(null);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  function submitForm() {
    formRef.current?.submit();
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);

    if (typeof window.gtag !== "function") {
      submitForm();
      return;
    }

    let submitted = false;
    const submitOnce = () => {
      if (submitted) return;
      submitted = true;
      submitForm();
    };

    window.gtag("event", "begin_checkout", {
      currency: PURCHASE_CURRENCY,
      value: PURCHASE_VALUE,
      items: [{ item_name: PRODUCT_NAME, price: PURCHASE_VALUE, quantity: 1 }],
      location,
      event_callback: submitOnce,
      event_timeout: 700
    });

    window.setTimeout(submitOnce, 800);
  }

  return (
    <form action="/api/checkout" method="POST" onSubmit={handleSubmit} ref={formRef}>
      <button className="button" disabled={isSubmitting} type="submit">
        {isSubmitting ? "Opening Checkout..." : label}
      </button>
    </form>
  );
}

export function PurchaseTracker({ sessionId }) {
  React.useEffect(() => {
    if (!sessionId) return;

    const storageKey = `homeWorkoutGuide:analytics:purchase:${sessionId}`;
    if (window.localStorage.getItem(storageKey) === "tracked") return;

    let attempts = 0;
    const maxAttempts = 15;
    const interval = window.setInterval(() => {
      attempts += 1;
      const sent = trackEvent("purchase", {
        transaction_id: sessionId,
        currency: PURCHASE_CURRENCY,
        value: PURCHASE_VALUE,
        items: [{ item_name: PRODUCT_NAME, price: PURCHASE_VALUE, quantity: 1 }]
      });

      if (sent) {
        window.localStorage.setItem(storageKey, "tracked");
      }

      if (sent || attempts >= maxAttempts) {
        window.clearInterval(interval);
      }
    }, 200);

    return () => window.clearInterval(interval);
  }, [sessionId]);

  return null;
}

export function LandingSectionTracker() {
  React.useEffect(() => {
    const sections = Array.from(document.querySelectorAll("[data-analytics-section]"));
    if (!sections.length || typeof IntersectionObserver === "undefined") return;

    const seenSections = new Set();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const sectionName = entry.target.getAttribute("data-analytics-section");
          if (!sectionName || seenSections.has(sectionName)) return;

          seenSections.add(sectionName);
          trackEvent("lp_section_view", { section: sectionName });
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.45 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return null;
}
