import './index.css';
import { renderNavbar, initNavbar } from './sections/Navbar.js';
import { renderFooter, initFooter } from './sections/Footer.js';

function renderTermsContent() {
  return `
    <main class="w-full">
      
      <!-- Terms Header -->
      <section class="relative bg-white border-b border-gray-200 w-full overflow-hidden" style="padding-top: 4.5rem; padding-bottom: 4.5rem;">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 border-x border-gray-200/80">
          <div class="max-w-3xl">
            <h1 class="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              <span class="text-[#1D2E9D]">Terms</span> <span class="text-[#EE5A31]">& Conditions</span>
            </h1>
            <p class="mt-4 text-sm sm:text-base text-gray-500 font-medium flex items-center gap-2">
              <span>January 1, 2021</span>
              <span>•</span>
              <span>by <a href="https://schoolpilot.online/termsandconditions.html#" class="text-[#1D2E9D] hover:underline font-semibold">Paragon MicroData Ltd</a></span>
            </p>
          </div>
        </div>
      </section>

      <!-- Terms Body -->
      <section class="bg-[#FAFAFA] border-b border-gray-200 w-full overflow-hidden" style="padding-top: 4rem; padding-bottom: 6.5rem;">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 border-x border-gray-200/80">
          
          <div class="bg-white rounded-2xl p-6 sm:p-10 lg:p-12 border border-gray-200/90 shadow-2xs space-y-10 text-gray-700 leading-relaxed font-normal text-base">
            
            <!-- Preamble -->
            <div class="text-gray-700 leading-relaxed">
              <p>
                Welcome to School Pilot [<a href="http://schoolpilot.online/" class="text-[#1D2E9D] hover:underline font-medium">schoolpilot.online</a>]. At School Pilot, your privacy is one of our main priorities. This Privacy Policy document contains types of information that is collected and recorded by School Pilot and how we use it.
              </p>
            </div>

            <hr class="border-gray-100" />

            <!-- Section 1 -->
            <div>
              <h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-4 tracking-tight flex items-center gap-2.5">
                <span class="text-[#1D2E9D]">1.</span> Information We Collect
              </h2>
              <p class="mb-4 text-gray-600">We collect the following types of information:</p>
              <ul class="space-y-3 pl-5 list-disc text-gray-600">
                <li><strong class="text-gray-900">Personal Information:</strong> When you register on our platform, we may collect personal information such as names, email addresses, phone numbers, and other relevant details.</li>
                <li><strong class="text-gray-900">Payment Information:</strong> For processing school fees and staff salaries, we collect payment details.</li>
                <li><strong class="text-gray-900">Content:</strong> Any content obtained from the service.</li>
                <li><strong class="text-gray-900">Student and Staff Information:</strong> This includes student attendance, grades, disciplinary records, and staff attendance and payroll information.</li>
                <li><strong class="text-gray-900">Usage Data:</strong> We collect information on how the service is accessed and used, such as the type of device, browser, and operating system.</li>
              </ul>
            </div>

            <hr class="border-gray-100" />

            <!-- Section 2 -->
            <div>
              <h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-4 tracking-tight flex items-center gap-2.5">
                <span class="text-[#1D2E9D]">2.</span> How We Use Your Information
              </h2>
              <p class="mb-4 text-gray-600">We use the collected information for various purposes, including:</p>
              <ul class="space-y-2.5 pl-5 list-disc text-gray-600">
                <li>To provide, operate, and maintain our web app.</li>
                <li>To improve, personalize, and expand our web app.</li>
                <li>To understand and analyze how you use our web app.</li>
                <li>To process transactions and send related information, including purchase confirmations and invoices.</li>
                <li>To send you technical notices, updates, security alerts, and support and administrative messages.</li>
                <li>To monitor and prevent fraud, and to ensure compliance with our terms.</li>
              </ul>
            </div>

            <hr class="border-gray-100" />

            <!-- Section 3 -->
            <div>
              <h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-4 tracking-tight flex items-center gap-2.5">
                <span class="text-[#1D2E9D]">3.</span> Sharing Your Information
              </h2>
              <p class="mb-4 text-gray-600">We do not share your personal information with third parties except in the following circumstances:</p>
              <ul class="space-y-2.5 pl-5 list-disc text-gray-600">
                <li>With your consent.</li>
                <li>For external processing with trusted service providers who assist us in operating our web app, conducting our business, or serving our users.</li>
                <li>To comply with legal obligations or in response to legal processes.</li>
                <li>To protect the rights, property, or safety of School Pilot, our users, or others.</li>
              </ul>
            </div>

            <hr class="border-gray-100" />

            <!-- Section 4 -->
            <div>
              <h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-4 tracking-tight flex items-center gap-2.5">
                <span class="text-[#1D2E9D]">4.</span> Security of Your Information
              </h2>
              <p class="text-gray-600 leading-relaxed">
                We use administrative, technical, and physical security measures to protect your personal information. Despite these measures, please be aware that no data transmission over the Internet can be guaranteed to be entirely secure.
              </p>
            </div>

            <hr class="border-gray-100" />

            <!-- Section 5 -->
            <div>
              <h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-4 tracking-tight flex items-center gap-2.5">
                <span class="text-[#1D2E9D]">5.</span> Your Data Protection Rights
              </h2>
              <p class="mb-4 text-gray-600">You have the following data protection rights:</p>
              <ul class="space-y-3 pl-5 list-disc text-gray-600">
                <li><strong class="text-gray-900">Access:</strong> You have the right to request copies of your personal data.</li>
                <li><strong class="text-gray-900">Rectification:</strong> You have the right to request that we correct any information you believe is inaccurate.</li>
                <li><strong class="text-gray-900">Erasure:</strong> You have the right to request that we erase your personal data, under certain conditions.</li>
                <li><strong class="text-gray-900">Restrict Processing:</strong> You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
                <li><strong class="text-gray-900">Object to Processing:</strong> You have the right to object to our processing of your personal data, under certain conditions. If you object to the processing, we will stop processing the personal data unless we can demonstrate compelling legitimate grounds for the processing which override your interests, rights, and freedoms, or for the establishment, exercise, or defense of legal claims.</li>
              </ul>
            </div>

            <hr class="border-gray-100" />

            <!-- Section 6 -->
            <div>
              <h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-4 tracking-tight flex items-center gap-2.5">
                <span class="text-[#1D2E9D]">6.</span> Cookies and Tracking Technologies
              </h2>
              <p class="text-gray-600 leading-relaxed">
                School Pilot uses cookies and similar tracking technologies to track activity on our service and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
            </div>

            <hr class="border-gray-100" />

            <!-- Section 7 -->
            <div>
              <h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-4 tracking-tight flex items-center gap-2.5">
                <span class="text-[#1D2E9D]">7.</span> Changes to This Privacy Policy
              </h2>
              <p class="text-gray-600 leading-relaxed">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </div>

            <hr class="border-gray-100" />

            <!-- Section 8 -->
            <div>
              <h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-4 tracking-tight flex items-center gap-2.5">
                <span class="text-[#1D2E9D]">8.</span> Contact Us
              </h2>
              <p class="text-gray-600 leading-relaxed mb-3">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div class="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-gray-700">
                <div class="flex items-center gap-2">
                  <span class="font-bold text-gray-900">Email:</span>
                  <a href="mailto:Info@schoolpilot.online" class="text-[#1D2E9D] hover:underline font-semibold">Info@schoolpilot.online</a>
                </div>
                <span class="hidden sm:inline text-gray-300">•</span>
                <div class="flex items-center gap-2">
                  <span class="font-bold text-gray-900">Tel:</span>
                  <a href="tel:+2349033221927" class="text-[#1D2E9D] hover:underline font-semibold">+234 903 322 1927</a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

    </main>
  `;
}

const app = document.getElementById('app');

function renderApp() {
  app.innerHTML = `
    ${renderNavbar()}
    ${renderTermsContent()}
    ${renderFooter()}
  `;

  initNavbar();
  initFooter();
}

renderApp();
