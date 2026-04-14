(function () {
  const search = new URLSearchParams(window.location.search);
  const stripeOverride = search.get("stripe");
  if (!stripeOverride) return;

  [
    "stripe-nav-link",
    "stripe-hero-link",
    "stripe-mid-link",
    "stripe-final-link",
  ].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.href = stripeOverride;
  });
})();
