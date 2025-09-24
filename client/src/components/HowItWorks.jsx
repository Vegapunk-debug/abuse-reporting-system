import React from 'react';

function HowItWorks() {
    return (
        <section className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
            <h1 className="text-4xl font-bold mb-8 text-center">🛡️ How It Works</h1>

            <div className="space-y-10">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">1. Choose the Type of Report</h2>
                    <p className="text-lg text-gray-700">
                        Whether it's <strong>child abuse</strong>, <strong>women abuse</strong>, 
                        <strong> drug activity</strong>, or <strong>criminal behavior</strong>, just select the 
                        category that best fits the situation you're reporting.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-2">2. Stay Anonymous</h2>
                    <p className="text-lg text-gray-700">
                        We <strong>do not collect</strong> your name, phone number, IP address, or any personal information.
                        <ul className="list-disc list-inside mt-2">
                            <li>No login required</li>
                            <li>No tracking</li>
                            <li>100% confidential</li>
                        </ul>
                        Your identity is <strong>completely protected</strong> at every step.
                    </p>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold mb-2">3. Provide the Details</h2>
                    <p className="text-lg text-gray-700">
                        Tell us what happened:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mt-2">
                        <li>What you witnessed</li>
                        <li>When and where it occurred</li>
                        <li>Who was involved (if known)</li>
                        <li>Any photos or evidence (optional)</li>
                    </ul>
                    <p className="text-lg text-gray-700 mt-2">
                        The more specific you are, the better we can help.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-2">4. We Send It to the Right Authorities</h2>
                    <p className="text-lg text-gray-700">
                        Once submitted, your report is securely routed to <strong>trusted local authorities</strong>,
                        <strong> law enforcement</strong>, or <strong>social service agencies</strong> trained to handle these
                        cases with care and urgency.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-2">5. No Follow-Up Required</h2>
                    <p className="text-lg text-gray-700">
                        You are <strong>not required</strong> to follow up or get involved further unless you choose to. 
                        We fully respect your decision to remain anonymous.
                    </p>
                </div>

                <div className="mt-12 p-6 bg-blue-50 border-l-4 border-blue-500 rounded-lg">
                    <h2 className="text-2xl font-semibold text-blue-800 mb-2">💙 Why It Matters</h2>
                    <p className="text-lg text-blue-700">
                        By reporting, you could:
                    </p>
                    <ul className="list-disc list-inside text-blue-700 mt-2">
                        <li>Help protect a child from abuse</li>
                        <li>Save a woman from a dangerous situation</li>
                        <li>Stop drug activity in your neighborhood</li>
                        <li>Prevent future crimes</li>
                    </ul>
                    <p className="text-lg text-blue-700 mt-4 font-medium">
                        Your voice makes a difference — <strong>even if it’s anonymous</strong>.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default HowItWorks;
