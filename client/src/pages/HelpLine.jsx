import React from 'react';

export default function HelpLine() {
    
  return (
    <div className="min-h-screen bg-white px-4 py-10 md:px-20 lg:px-40">
      <div className="bg-green-50 p-8 rounded-xl shadow-lg text-gray-800">
        <h1 className="text-3xl font-bold text-green-700 mb-6">📞 Emergency & Support Helplines</h1>
        
        <p className="mb-6 text-lg text-gray-700">
          If you or someone you know is experiencing abuse, violence, or trafficking, please don’t hesitate to reach out using the helplines below.
          All reports are handled with <span className="font-semibold text-green-700">confidentiality</span> and <span className="font-semibold text-green-700">urgency</span>.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold mb-2 text-green-800">General Emergency</h2>
            <ul className="space-y-1">
              <li><strong>Police (24/7):</strong> 100</li>
              <li><strong>Ambulance:</strong> 102</li>
              <li><strong>Disaster Management:</strong> 108</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-green-800">Child Protection</h2>
            <ul className="space-y-1">
              <li><strong>Child Helpline (1098):</strong> Free & confidential help for children in distress</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-green-800">Women’s Safety</h2>
            <ul className="space-y-1">
              <li><strong>Women Helpline:</strong> 1091</li>
              <li><strong>National Commission for Women:</strong> 7827-170-170</li>
              <li><strong>Domestic Violence Support:</strong> 181</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-green-800">Anti-Trafficking</h2>
            <ul className="space-y-1">
              <li><strong>Human Trafficking (NATIP):</strong> 155260</li>
              <li><strong>Rescue & Legal Support:</strong> Through local NGOs and state authorities</li>
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-2 text-green-800">💬 Contact Us</h2>
          <ul className="space-y-1">
            <li><strong>Email Support:</strong> <a href="mailto:help@yourwebsite.org" className="text-blue-600 hover:underline">help@yourwebsite.org</a></li>
            <li><strong>WhatsApp:</strong> <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">+91-98955-48906</a></li>
          </ul>
        </div>

        <p className="mt-6 text-sm text-gray-600">
          ⛔ Misuse of helpline services is punishable by law. Use these resources responsibly.
        </p>
      </div>
    </div>
  );
}
