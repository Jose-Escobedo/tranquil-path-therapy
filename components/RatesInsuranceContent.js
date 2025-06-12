export default function RatesInsuranceContent() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 text-gray-900">
      {/* Left Side - Insurance */}
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6">INSURANCE</h2>
        <p className="mb-4">
          Golden Scales Family Counseling is happy to announce that we are now in-network with <strong>Optum Insurance</strong>!
        </p>
        <p className="mb-4">
          Otherwise, Golden Scales is primarily private-pay; however, your sessions may still be covered if you have a PPO insurance plan. At the end of each session, the client pays the full session fee, and at the end of each month, a document will be created with all of the necessary information for the client to submit to their insurance company for reimbursement.
        </p>
        <p className="mb-4">
          It is advised to contact insurance carriers prior to treatment for questions about the extent of reimbursement for an “Out of Network Provider.” You can also use the tool below to check your Out of Network coverage.
        </p>
        <p className="mb-4 font-semibold">
          Golden Scales Family Counseling DOES NOT submit this bill to insurance companies for you and cannot guarantee reimbursement.
        </p>
        <p>
          Unfortunately, Golden Scales does not accept Medi-Cal or Medicare Insurance plans.
        </p>
      </div>

      {/* Right Side - Rates & Payment */}
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6">RATES</h2>
        <p className="mb-4 uppercase font-semibold tracking-wide text-gray-700">
          RATES DIFFER DEPENDING ON THE THERAPIST’S EXPERIENCE. RATES FOR EACH THERAPIST CAN BE FOUND IN THEIR BIO.
        </p>

        <h3 className="text-xl font-semibold mb-2">RATES FOR ASSOCIATE MARRIAGE & FAMILY THERAPISTS RANGE FROM:</h3>
        <ul className="list-disc list-inside mb-6 space-y-1 text-gray-800">
          <li>$145-$165 – per 45 minute session for an individual client</li>
          <li>$175-$195 – per 60 minute session for an individual, couple, or family</li>
          <li>$210-$230 – per 75 minute session for an individual, couple, or family</li>
          <li>$250-$270 – per 90 minute session for a couple or family</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">RATES FOR LICENSED MARRIAGE & FAMILY THERAPISTS RANGE FROM:</h3>
        <ul className="list-disc list-inside mb-6 space-y-1 text-gray-800">
          <li>$185-$250 – per 45 minute session for an individual client</li>
          <li>$200-$300 – per 60 minute session for an individual, couple, or family</li>
          <li>$250-$350 – per 75 minute session for an individual, couple or family</li>
          <li>$300-$400 – per 90 minute session for a couple or family</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">PAYMENT</h3>
        <p>
          Cash, checks, and credit cards are accepted for payment and are due in full at the end of each session. There will be a $30 charge for any returned checks.
        </p>
      </div>
    </section>
  );
}
