class FooterComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="tj-footer-section" id="footer-section">
        
        <section id="footer-cta-section" class="tj-cta-section">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div id="footer-cta-area" class="cta-area">
                  <div class="cta-content">
                    <span class="sub-title"><i class="tji-box"></i> InterConnecta • Enterprise Partner</span>
                    <h2 class="title">Discover how to create sustainable value across your <span>operation.</span></h2>
                    <div class="cta-btn">
                      <a id="footer-cta-btn" class="tj-primary-btn" href="/contact/">
                        <span class="btn-text"><span>Talk to a specialist</span></span>
                        <span class="btn-icon"><i class="tji-arrow-right-long"></i></span>
                      </a>
                    </div>
                  </div>
                  <div class="cta-img">
                    <img src="/assets/images/footer/cta-bg.webp" alt="InterConnecta Enterprise Partner">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div class="container" id="footer-main">
          <div class="row">

            <!-- LOGO -->
            <div class="col-lg-3 col-md-6" id="footer-col-logo">
              <div class="footer-logo mb-3">
                <img src="/assets/images/logo-inter-blanco.svg" alt="InterConnecta Logo" style="max-width:140px;">
              </div>
              <div class="footer-awards mt-2">
                <img src="/assets/images/logos/footer-partner-csl.png" alt="Zoho Premium Partner" height="38">
              </div>
            </div>

            <!-- AI INSIGHTS -->
            <div class="col-lg-3 col-md-6" id="footer-col-industries">
              <h4 class="title">AI • Insights &amp; Articles</h4>
              <ul id="footer-ai-links">
                <li>
                  <a target="_blank" rel="noopener noreferrer"
                     href="https://blog.interconnecta.ai/zia-agents-ic-agents-the-synergy-that-transforms-operational-and-strategic-intelligence/">
                    ZIA Agents + IC Agents: the synergy that transforms intelligence
                  </a>
                </li>
                <li><a target="_blank" href="https://blog.interconnecta.ai/ai-in-healthcare-from-administrative-optimization-to-better-patient-care/">How AI Agents redefine healthcare operations</a></li>
                <li><a target="_blank"href="https://blog.interconnecta.ai/ai-for-b2b-from-the-first-lead-to-customer-expansion/">AI for B2B: From the first lead to expansion</a></li>
                <li><a target="_blank" href="https://blog.interconnecta.ai/construction-5-0-how-ai-agents-will-optimize-your-projects-costs-and-timelines/">Construction 5.0: AI optimizing projects &amp; costs</a></li>
                <li><a target="_blank" href="https://blog.interconnecta.ai/smart-renewable-energy-how-ai-accelerates-your-sustainable-impact/">Smart renewable energy with AI</a></li>
              </ul>
              <a class="footer-cta" target="_blank" rel="noopener noreferrer" href="https://blog.interconnecta.ai/">
                See all AI insights →
              </a>
            </div>

            <!-- ZOHO IMPLEMENTATIONS -->
            <div class="col-lg-3 col-md-6">
              <h4 class="title">Zoho • Implementations &amp; Cases</h4>
              <ul id="footer-zoho-links">
                <li>
                  <a target="_blank" rel="noopener noreferrer"
                     href="https://interconnecta.com/insights/implementation-of-the-month-whatsapp-ai-automation-zoho-transforming-the-customer-experience-in-the-solar-sector/">
                    WhatsApp AI Automation + Zoho — Solar Sector
                  </a>
                </li>
                <li>
                  <a target="_blank" rel="noopener noreferrer"
                     href="https://interconnecta.com/insights/automating-document-reading-with-zoho-ocr/">
                    Automating document reading with Zoho OCR
                  </a>
                </li>
                <li>
                  <a target="_blank" rel="noopener noreferrer"
                     href="https://interconnecta.com/insights/digital-transformation-of-the-student-lifecycle-comprehensive-automation-with-zoho-at-a-university/">
                    Student lifecycle automation
                  </a>
                </li>
                <li>
                  <a target="_blank" rel="noopener noreferrer"
                     href="https://interconnecta.com/insights/from-call-to-click-how-an-ai-agent-can-reduce-manual-inquiries-by-70-in-the-solar-industry/">
                    AI Agent reducing manual inquiries by 70%
                  </a>
                </li>
                <li>
                  <a target="_blank" rel="noopener noreferrer"
                     href="https://interconnecta.com/insights/implementation-of-the-month-zoho-inventory-for-an-engineering-and-construction-company-with-8-warehouses-and-3000-skus/">
                    Zoho Inventory — 8 warehouses &amp; 3,000 SKUs
                  </a>
                </li>
              </ul>
              <a class="footer-cta" target="_blank" rel="noopener noreferrer" href="https://interconnecta.com/insights/">
                See all implementations →
              </a>
            </div>

            <!-- SUPPORT + IC ACADEMY -->
            <div class="col-lg-3 col-md-6" id="footer-col-support">
              <h4 class="title">Support &amp; Resources</h4>
              <ul id="footer-support-links">
                <li><a target="_blank" rel="noopener noreferrer" href="https://portal.interconnecta.com/">Support Center</a></li>
                <li><a href="/zoho-free-trial/">Zoho Free Trial</a></li>
                <li>
                  <a href="/ic-academy/">
                    <img id="ic-academy-iso" src="/assets/images/logoFavicon-interconnecta.png" alt="IC">
                    IC Academy
                  </a>
                </li>
                <li><a href="/privacy-policy/">Privacy Policy</a></li>
                <li><a href="/terms-and-conditions/">Terms &amp; Conditions</a></li>
              </ul>
            </div>

          </div>
        </div>

        <!-- CONTACT -->
        <div id="footer-bottom">
          <div class="container">
            <div id="footer-contact-group">
              <div class="pill"><span class="icon"><i class="fa-solid fa-phone"></i></span><a href="tel:+13053301400">+1 (305) 330-1400</a></div>
              <div class="pill"><span class="icon"><i class="fa-solid fa-envelope"></i></span><a href="mailto:info@interconnecta.com">info@interconnecta.com</a></div>
            </div>

            <div id="footer-social">
              <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/InterConnecta"><i class="fa-brands fa-facebook-f"></i></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/interconnecta/"><i class="fa-brands fa-instagram"></i></a>
              <a target="_blank" rel="noopener noreferrer" href="https://x.com/InterConnecta/status/1902082529395708070"><i class="fa-brands fa-x-twitter"></i></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/interconnecta"><i class="fa-brands fa-linkedin-in"></i></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@InterConnectacom"><i class="fa-brands fa-youtube"></i></a>
            </div>
          </div>
        </div>

        <!-- LOCATIONS -->
        <div id="footer-locations">
          <div class="container">
            <div id="footer-locations-grid">

              <div>
                <div class="region"><img src="/assets/images/footer/eeuu-flag.svg" alt="USA" class="flag" />North America</div>
                <p>United States (New York) — +1-646-760-4090</p>
              </div>

              <div>
                <div class="region"><img src="/assets/images/footer/panama-flag.svg" alt="Panama" class="flag" />Central America</div>
                <p>Panama (Panama City) — +507-836-0436</p>
              </div>

              <div>
                <div class="region"><img src="/assets/images/footer/puerto-rico-flag.svg" alt="Puerto Rico" class="flag" />Caribbean</div>
                <p>Puerto Rico (Ponce) — +1-787-719-7072</p>
              </div>

              <div>
                <div class="region"><img src="/assets/images/footer/peru-flag.svg" alt="Peru" class="flag" />South America</div>
                <p>Peru (Lima, Miraflores) — +51-1-644-9084</p>
              </div>

            </div>
          </div>
        </div>

        <!-- signature -->
        <div id="footer-signature">
          © <span id="footer-year"></span> <span>InterConnecta</span> — All rights reserved.
        </div>

      </footer>
    `;

    // Año dinámico (única “lógica” mínima)
    const yearEl = this.querySelector("#footer-year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  }
}

customElements.define("componente-footer", FooterComponent);
