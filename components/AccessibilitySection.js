export default function AccessibilityContent() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16 space-y-10 text-gray-900">
      <h1 className="text-4xl font-bold mb-8 text-center">Accessibility Statement</h1>

      <p>
        Golden Scales is committed to ensuring digital accessibility for all users, including individuals with disabilities. We strive to provide an inclusive experience for everyone who visits our website.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Measures to support accessibility</h2>
      <p>
        We employ best practices and follow Web Content Accessibility Guidelines (WCAG) 2.1 to make our site easier to use for people with disabilities. This includes using semantic HTML, sufficient color contrast, keyboard navigation, and screen reader compatibility.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Limitations and alternatives</h2>
      <p>
        While we strive to make this website accessible, some content or features may not be fully accessible at this time. We are continuously working to improve the accessibility of our website.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Contact for accessibility support</h2>
      <p>
        If you experience any difficulties using this website or have questions about accessibility, please contact:
      </p>

      <div className="bg-gray-50 p-4 rounded-md max-w-md mx-auto my-4 text-center">
        <p><strong>Golden Scales Family Counseling</strong></p>
        <p>Phone: (555) 123-4567</p>
        <p>Email: <a href="mailto:support@therapysitestudio.com" className="text-[var(--gold)] hover:underline">support@therapysitestudio.com</a></p>
      </div>

      <p className="mt-6 italic text-sm text-gray-600 text-center">
        Website developed by <a href="https://therapysitestudio.com" target="_blank" rel="noopener noreferrer" className="text-[var(--gold)] hover:underline">TherapySiteStudio</a>.
      </p>
    </section>
  );
}
