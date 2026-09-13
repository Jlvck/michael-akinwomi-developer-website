/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Mail,
  MapPin,
  ShieldCheck,
  Copy,
  Check,
  ExternalLink,
  Smartphone,
  FileText,
  Globe,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Code2,
  Lock,
  Sparkles,
  Info
} from 'lucide-react';

export default function App() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [copiedPolicyUrl, setCopiedPolicyUrl] = useState(false);
  const [activeTab, setActiveTab] = useState<'profile' | 'apps' | 'privacy' | 'terms'>('profile');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const developerInfo = {
    name: 'Micheal Akinwonmi',
    role: 'Android & Mobile Software Developer',
    email: 'michealakinwonmi@gmail.com',
    address: '13 Mati Olayiwola street, lagos, egbeda - 234001 Nigeria',
    street: '13 Mati Olayiwola street',
    city: 'Egbeda, Lagos',
    postalCode: '234001',
    country: 'Nigeria',
    consoleStatus: 'Registered Google Console Developer',
  };

  const copyToClipboard = (text: string, type: 'email' | 'address' | 'policy') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else if (type === 'address') {
      setCopiedAddress(true);
      setTimeout(() => setCopiedAddress(false), 2000);
    } else if (type === 'policy') {
      setCopiedPolicyUrl(true);
      setTimeout(() => setCopiedPolicyUrl(false), 2000);
    }
  };

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans antialiased flex flex-col selection:bg-amber-100 selection:text-amber-900">
      {/* Top Simple Navigation */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-stone-900 text-white flex items-center justify-center font-bold text-base shadow-sm">
              MA
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-semibold text-stone-900 tracking-tight text-base sm:text-lg">
                  {developerInfo.name}
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                  Verified
                </span>
              </div>
              <p className="text-xs text-stone-500 hidden sm:block">
                Google Play Console Developer
              </p>
            </div>
          </div>

          <nav className="flex items-center gap-1 sm:gap-2">
            <button
              id="nav-profile-btn"
              onClick={() => setActiveTab('profile')}
              className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-colors ${
                activeTab === 'profile'
                  ? 'bg-stone-900 text-white'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
              }`}
            >
              Developer Info
            </button>
            <button
              id="nav-apps-btn"
              onClick={() => setActiveTab('apps')}
              className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-colors ${
                activeTab === 'apps'
                  ? 'bg-stone-900 text-white'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
              }`}
            >
              Applications
            </button>
            <button
              id="nav-privacy-btn"
              onClick={() => setActiveTab('privacy')}
              className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-colors ${
                activeTab === 'privacy'
                  ? 'bg-stone-900 text-white'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
              }`}
            >
              Privacy Policy
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Verification Notice Banner for Google Reviewers */}
        <div className="mb-8 p-4 rounded-xl bg-amber-50/80 border border-amber-200/80 text-amber-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs sm:text-sm">
          <div className="flex items-start sm:items-center gap-2.5">
            <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5 sm:mt-0" />
            <div>
              <span className="font-semibold text-amber-900">Google Play Console Verification Notice:</span> This official website confirms developer identity, public contact credentials, and data safety compliance for <strong>{developerInfo.name}</strong>.
            </div>
          </div>
          <button
            id="copy-compliance-url-btn"
            onClick={() => copyToClipboard(window.location.href, 'policy')}
            className="shrink-0 flex items-center gap-1.5 px-3 py-1 rounded-md bg-white text-amber-900 border border-amber-300 hover:bg-amber-100/50 text-xs font-medium transition-colors"
          >
            {copiedPolicyUrl ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>URL Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-amber-700" />
                <span>Copy Site Link</span>
              </>
            )}
          </button>
        </div>

        {/* TAB 1: DEVELOPER PROFILE & CONTACT INFO */}
        {activeTab === 'profile' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Developer Overview Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-stone-100">
                <div className="space-y-1.5">
                  <span className="text-xs uppercase tracking-wider font-semibold text-stone-500">
                    Official Developer Record
                  </span>
                  <h1 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
                    {developerInfo.name}
                  </h1>
                  <p className="text-sm sm:text-base text-stone-600">
                    {developerInfo.role} • Google Play Console Account
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <a
                    id="contact-email-btn"
                    href={`mailto:${developerInfo.email}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-900 text-white hover:bg-stone-800 text-sm font-medium transition-colors shadow-sm"
                  >
                    <Mail className="w-4 h-4" />
                    Send Email
                  </a>
                  <button
                    id="quick-copy-email-btn"
                    onClick={() => copyToClipboard(developerInfo.email, 'email')}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-sm font-medium transition-colors"
                    title="Copy email address"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                    <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>

              {/* Developer Official Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                {/* Contact Email Box */}
                <div className="p-4 sm:p-5 rounded-xl bg-stone-50 border border-stone-200/70 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-stone-700 font-medium text-xs sm:text-sm uppercase tracking-wider">
                      <Mail className="w-4 h-4 text-stone-600" />
                      Contact Email
                    </div>
                    <button
                      id="box-copy-email"
                      onClick={() => copyToClipboard(developerInfo.email, 'email')}
                      className="text-xs text-stone-500 hover:text-stone-900 flex items-center gap-1 transition-colors"
                    >
                      {copiedEmail ? (
                        <span className="text-emerald-600 flex items-center gap-0.5">
                          <Check className="w-3.5 h-3.5" /> Copied
                        </span>
                      ) : (
                        <span className="flex items-center gap-0.5">
                          <Copy className="w-3.5 h-3.5" /> Copy
                        </span>
                      )}
                    </button>
                  </div>
                  <a
                    href={`mailto:${developerInfo.email}`}
                    className="block text-base sm:text-lg font-mono font-medium text-stone-900 hover:underline break-all"
                  >
                    {developerInfo.email}
                  </a>
                  <p className="text-xs text-stone-500">
                    Primary contact for user support, inquiries, and Google Console correspondence.
                  </p>
                </div>

                {/* Physical Developer Address Box */}
                <div className="p-4 sm:p-5 rounded-xl bg-stone-50 border border-stone-200/70 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-stone-700 font-medium text-xs sm:text-sm uppercase tracking-wider">
                      <MapPin className="w-4 h-4 text-stone-600" />
                      Physical Address
                    </div>
                    <button
                      id="box-copy-address"
                      onClick={() => copyToClipboard(developerInfo.address, 'address')}
                      className="text-xs text-stone-500 hover:text-stone-900 flex items-center gap-1 transition-colors"
                    >
                      {copiedAddress ? (
                        <span className="text-emerald-600 flex items-center gap-0.5">
                          <Check className="w-3.5 h-3.5" /> Copied
                        </span>
                      ) : (
                        <span className="flex items-center gap-0.5">
                          <Copy className="w-3.5 h-3.5" /> Copy
                        </span>
                      )}
                    </button>
                  </div>
                  <p className="text-sm sm:text-base font-medium text-stone-900 leading-snug">
                    {developerInfo.address}
                  </p>
                  <p className="text-xs text-stone-500">
                    Egbeda, Lagos State, Nigeria • Postal Code: 234001
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Developer Standards & Commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white p-5 rounded-xl border border-stone-200 space-y-1.5 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-stone-100 flex items-center justify-center text-stone-800 mb-3">
                  <Lock className="w-4 h-4" />
                </div>
                <h3 className="font-semibold text-stone-900 text-sm">Data Privacy First</h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Strict adherence to Google Play data safety regulations, no unauthorized data harvesting.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-stone-200 space-y-1.5 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-stone-100 flex items-center justify-center text-stone-800 mb-3">
                  <Smartphone className="w-4 h-4" />
                </div>
                <h3 className="font-semibold text-stone-900 text-sm">Native Android Quality</h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Fast, lightweight, and battery-efficient applications following modern Material Design principles.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-stone-200 space-y-1.5 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-stone-100 flex items-center justify-center text-stone-800 mb-3">
                  <Mail className="w-4 h-4" />
                </div>
                <h3 className="font-semibold text-stone-900 text-sm">Direct Developer Support</h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Prompt communication and support responses for bug reports and user feedback.
                </p>
              </div>
            </div>

            {/* Google Console Information Summary */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 space-y-5">
              <h2 className="text-lg font-bold text-stone-900 flex items-center gap-2">
                <Code2 className="w-5 h-5 text-stone-700" />
                Google Play Console Registration Summary
              </h2>
              <p className="text-sm text-stone-600 leading-relaxed">
                This website serves as the authoritative public landing page and policy declaration for applications published under the developer account of <strong>{developerInfo.name}</strong> on Google Play.
              </p>

              <div className="border border-stone-200 rounded-xl overflow-hidden divide-y divide-stone-100 text-xs sm:text-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 bg-stone-50/60">
                  <span className="font-medium text-stone-500">Developer / Publisher Name</span>
                  <span className="font-semibold text-stone-900 mt-1 sm:mt-0">{developerInfo.name}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5">
                  <span className="font-medium text-stone-500">Official Contact Email</span>
                  <span className="font-mono text-stone-900 mt-1 sm:mt-0">{developerInfo.email}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 bg-stone-50/60">
                  <span className="font-medium text-stone-500">Registered Address</span>
                  <span className="text-stone-900 mt-1 sm:mt-0 text-right">{developerInfo.address}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5">
                  <span className="font-medium text-stone-500">Account Type</span>
                  <span className="text-stone-900 mt-1 sm:mt-0">Google Play Developer Console</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 bg-stone-50/60">
                  <span className="font-medium text-stone-500">Jurisdiction & Compliance</span>
                  <span className="text-stone-900 mt-1 sm:mt-0">Nigeria • International Google Play Developer Policies</span>
                </div>
              </div>
            </div>

            {/* Quick Contact Form or Direct Mail */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 space-y-4">
              <h2 className="text-lg font-bold text-stone-900">Need to get in touch?</h2>
              <p className="text-sm text-stone-600">
                For inquiries regarding application support, user data questions, or business collaboration, please reach out directly:
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  id="direct-mailto-link"
                  href={`mailto:${developerInfo.email}?subject=Google%20Play%20Inquiry%20-%20Miceal%20Akinwonmi`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-stone-900 text-white text-sm font-medium hover:bg-stone-800 transition-colors shadow-sm"
                >
                  <Mail className="w-4 h-4" />
                  Email {developerInfo.email}
                </a>
                <span className="text-xs text-stone-500">
                  Average response time: 24 to 48 business hours
                </span>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: APPLICATIONS & PORTFOLIO */}
        {activeTab === 'apps' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-100">
                <div>
                  <h2 className="text-xl font-bold text-stone-900">Published Applications</h2>
                  <p className="text-xs sm:text-sm text-stone-500">
                    Software products published and maintained by Miceal Akinwonmi on Google Play
                  </p>
                </div>
                <span className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 text-stone-700 text-xs font-medium">
                  <Smartphone className="w-3.5 h-3.5 text-stone-600" />
                  Android Ecosystem
                </span>
              </div>

              {/* Sample / Live App Slot */}
              <div className="p-5 rounded-xl border border-stone-200 bg-stone-50/50 hover:bg-stone-50 transition-colors space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-stone-800 to-stone-600 text-white flex items-center justify-center font-bold text-lg shadow-sm">
                      <Smartphone className="w-6 h-6 text-stone-200" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-stone-900 text-base">Mobile Utility & Lifestyle Apps</h3>
                      <p className="text-xs text-stone-500">Developer: Miceal Akinwonmi</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                    In Development / Active
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Focused on building clean, distraction-free Android tools designed to improve daily task management and productivity while maintaining complete user privacy.
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-stone-500">
                  <span>Platform: <strong>Android (Google Play)</strong></span>
                  <span>Target API: <strong>Android 14+ (API 34+)</strong></span>
                  <span>Data Protection: <strong>Strict Privacy Standard</strong></span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-stone-100/70 border border-stone-200 text-center space-y-1">
                <p className="text-xs sm:text-sm text-stone-600">
                  Looking for a specific app privacy policy or support document?
                </p>
                <button
                  id="tab-switch-privacy"
                  onClick={() => setActiveTab('privacy')}
                  className="text-xs font-semibold text-stone-900 hover:underline inline-flex items-center gap-1"
                >
                  View full Privacy Policy & Data Handling details <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: PRIVACY POLICY (MANDATORY FOR GOOGLE PLAY CONSOLE) */}
        {activeTab === 'privacy' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 space-y-6">
              <div className="pb-4 border-b border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                    Google Play Compliance Document
                  </span>
                  <h1 className="text-2xl font-bold text-stone-900">Privacy Policy</h1>
                  <p className="text-xs text-stone-500 mt-1">
                    Last Updated: September 2025 • Effective immediately for all applications by Miceal Akinwonmi
                  </p>
                </div>
                <button
                  id="privacy-copy-link-btn"
                  onClick={() => copyToClipboard(window.location.href, 'policy')}
                  className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-medium transition-colors"
                >
                  {copiedPolicyUrl ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedPolicyUrl ? 'URL Copied' : 'Copy Policy Link'}</span>
                </button>
              </div>

              {/* Policy Body */}
              <div className="prose prose-stone max-w-none text-xs sm:text-sm text-stone-700 space-y-5 leading-relaxed">
                <section className="space-y-2">
                  <h3 className="text-sm sm:text-base font-bold text-stone-900">1. Introduction & Developer Identity</h3>
                  <p>
                    This Privacy Policy applies to all mobile applications, tools, and services provided by developer <strong>Miceal Akinwonmi</strong> (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), residing at <strong>13 Mati Olayiwola street, lagos, egbeda - 234001 Nigeria</strong>.
                  </p>
                  <p>
                    We value your privacy and are committed to protecting any information collected through our software published on the Google Play Store. We do not sell, trade, or distribute your personal data to third parties.
                  </p>
                </section>

                <section className="space-y-2">
                  <h3 className="text-sm sm:text-base font-bold text-stone-900">2. Information Collection and Use</h3>
                  <p>
                    Our applications are designed with privacy by default. We only collect the minimal information necessary to deliver core application functionality:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-stone-600">
                    <li><strong>Device & Diagnostics Information:</strong> Non-personally identifiable technical telemetry (e.g. Android operating system version, device model, crash logs) to maintain performance and diagnose stability.</li>
                    <li><strong>User-Created Content:</strong> Any notes, preferences, or tasks created within our apps remain locally stored on your device unless explicit cloud backup is chosen by the user.</li>
                    <li><strong>No Hidden Tracking:</strong> We do not track users across other applications or websites.</li>
                  </ul>
                </section>

                <section className="space-y-2">
                  <h3 className="text-sm sm:text-base font-bold text-stone-900">3. Android App Permissions</h3>
                  <p>
                    When our applications require Android runtime permissions (such as Storage, Network Access, or Notifications), they are requested strictly in-context and solely used to perform requested operations. You have full control to revoke any permission at any time through your Android device settings.
                  </p>
                </section>

                <section className="space-y-2">
                  <h3 className="text-sm sm:text-base font-bold text-stone-900">4. Third-Party Services</h3>
                  <p>
                    Our applications may integrate standard, Google-certified libraries such as Google Play Services, Firebase Crashlytics, or Google Play In-App Billing for functionality and crash monitoring. These third-party services operate under Google&apos;s Privacy Policy (https://policies.google.com/privacy).
                  </p>
                </section>

                <section className="space-y-2">
                  <h3 className="text-sm sm:text-base font-bold text-stone-900">5. Children&apos;s Privacy</h3>
                  <p>
                    Our applications do not knowingly collect personal identifiable information from children under the age of 13. If you believe your child has provided us with personal information, please contact us at <strong>michealakinwonmi@gmail.com</strong> so we can immediately delete such records.
                  </p>
                </section>

                <section className="space-y-2">
                  <h3 className="text-sm sm:text-base font-bold text-stone-900">6. Data Retention and Deletion</h3>
                  <p>
                    Users have the right to request deletion of any telemetry or communication logs associated with their support interactions. To request data deletion, email our developer support line at <strong>michealakinwonmi@gmail.com</strong> with your request.
                  </p>
                </section>

                <section className="space-y-2 p-4 rounded-xl bg-stone-50 border border-stone-200">
                  <h3 className="text-sm sm:text-base font-bold text-stone-900">7. Developer Contact Information</h3>
                  <p className="text-stone-700">
                    If you have questions, comments, or data protection inquiries regarding this policy, please reach out directly:
                  </p>
                  <div className="pt-2 space-y-1 font-mono text-xs">
                    <div><strong>Developer:</strong> Miceal Akinwonmi</div>
                    <div><strong>Email:</strong> <a href={`mailto:${developerInfo.email}`} className="text-stone-900 underline">{developerInfo.email}</a></div>
                    <div><strong>Address:</strong> 13 Mati Olayiwola street, lagos, egbeda - 234001 Nigeria</div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        )}

        {/* FAQ Section */}
        <div className="mt-8 bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 space-y-4">
          <h2 className="text-base sm:text-lg font-bold text-stone-900">
            Frequently Asked Questions
          </h2>
          <div className="divide-y divide-stone-200">
            {[
              {
                q: 'How can I report a bug or request support for an app?',
                a: `You can reach out directly to Miceal Akinwonmi via email at michealakinwonmi@gmail.com. Please include the application name, device model, Android version, and a brief description of the issue.`
              },
              {
                q: 'Where can I locate the official privacy policy for Google Play Console?',
                a: `The full Privacy Policy is available on this website under the "Privacy Policy" tab and is kept updated to comply with Google Play Developer Program Policies.`
              },
              {
                q: 'How is user data handled in applications published by Miceal Akinwonmi?',
                a: `All applications adhere to strict data minimization. User data is processed locally on the user's device whenever possible, and any network communication uses encrypted HTTPS protocols.`
              }
            ].map((item, idx) => (
              <div key={idx} className="py-3">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left flex items-center justify-between text-xs sm:text-sm font-semibold text-stone-900 hover:text-stone-700"
                >
                  <span>{item.q}</span>
                  {expandedFaq === idx ? (
                    <ChevronUp className="w-4 h-4 text-stone-500 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-stone-500 shrink-0" />
                  )}
                </button>
                {expandedFaq === idx && (
                  <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed pr-4">
                    {item.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Clean Minimalist Footer */}
      <footer className="mt-auto border-t border-stone-200 bg-white py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} <strong>{developerInfo.name}</strong>. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => setActiveTab('profile')}
              className="hover:text-stone-900 transition-colors"
            >
              Developer Profile
            </button>
            <span>•</span>
            <button
              onClick={() => setActiveTab('privacy')}
              className="hover:text-stone-900 transition-colors"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <a
              href={`mailto:${developerInfo.email}`}
              className="hover:text-stone-900 transition-colors"
            >
              Contact Support
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
