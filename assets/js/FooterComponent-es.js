class FooterComponentES extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="tj-footer-section" id="footer-section">

        <!-- CTA SUPERIOR -->
        <section id="footer-cta-section" class="tj-cta-section">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div id="footer-cta-area" class="cta-area">
                  <div class="cta-content">
                    <span class="sub-title"><i class="tji-box"></i> InterConnecta • Socio Empresarial</span>
                    <h2 class="title">Descubre cómo crear valor sostenible en toda tu <span>operación.</span></h2>
                    <div class="cta-btn">
                      <a id="footer-cta-btn" class="tj-primary-btn" href="/contact/ES/">
                        <span class="btn-text"><span>Habla con un especialista</span></span>
                        <span class="btn-icon"><i class="tji-arrow-right-long"></i></span>
                      </a>
                    </div>
                  </div>
                  <div class="cta-img">
                    <img src="/assets/images/footer/cta-bg.webp" alt="InterConnecta Socio Empresarial">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- CONTENIDO -->
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

            <!-- IA INSIGHTS -->
            <div class="col-lg-3 col-md-6" id="footer-col-industries">
              <h4 class="title">IA • Ideas y Artículos</h4>
              <ul id="footer-ai-links">
                <li>
                  <a target="_blank" rel="noopener noreferrer"
                    href="https://blog.interconnecta.ai/es/zia-agents-ic-agents-la-sinergia-que-transforma-la-inteligencia-operativa-y-estrategica/">
                    ZIA Agents + IC Agents: la sinergia que transforma la inteligencia
                  </a>
                </li>
                <li><a target="_blank" href="https://blog.interconnecta.ai/es/ia-en-salud-de-la-optimizacion-administrativa-a-la-mejora-del-cuidado-al-paciente/">Cómo los Agentes de IA redefinen las operaciones de salud</a></li>
                <li><a target="_blank" href="https://blog.interconnecta.ai/es/ai-for-b2b-from-the-first-lead-to-customer-expansion/">IA para B2B: desde el primer lead hasta la expansión</a></li>
                <li><a target="_blank" href="https://blog.interconnecta.ai/es/construction-5-0-how-ai-agents-will-optimize-your-projects-costs-and-timelines/">Construcción 5.0: IA optimizando proyectos y costos</a></li>
                <li><a target="_blank" href="https://blog.interconnecta.ai/es/smart-renewable-energy-how-ai-accelerates-your-sustainable-impact/">Energía renovable inteligente con IA</a></li>
              </ul>
              <a class="footer-cta" target="_blank" rel="noopener noreferrer" href="https://blog.interconnecta.ai/es/">
                Ver todos los insights de IA →
              </a>
            </div>

            <!-- ZOHO -->
            <div class="col-lg-3 col-md-6">
              <h4 class="title">Zoho • Implementaciones y Casos</h4>
              <ul id="footer-zoho-links">
                <li>
                  <a target="_blank" rel="noopener noreferrer"
                    href="https://interconnecta.com/es/insights/implementation-of-the-month-whatsapp-ai-automation-zoho-transforming-the-customer-experience-in-the-solar-sector/">
                    Automatización por WhatsApp + Zoho — Sector Solar
                  </a>
                </li>
                <li>
                  <a target="_blank" rel="noopener noreferrer"
                    href="https://interconnecta.com/es/insights/automating-document-reading-with-zoho-ocr/">
                    Lectura de documentos automatizada con Zoho OCR
                  </a>
                </li>
                <li>
                  <a target="_blank" rel="noopener noreferrer"
                    href="https://interconnecta.com/es/insights/transformacion-digital-del-ciclo-de-vida-del-estudiante-automatizacion-integral-con-zoho-en-una-universidad/">
                    Automatización del ciclo de vida estudiantil
                  </a>
                </li>
                <li>
                  <a target="_blank" rel="noopener noreferrer"
                    href="https://interconnecta.com/es/insights/from-call-to-click-how-an-ai-agent-can-reduce-manual-inquiries-by-70-in-the-solar-industry/">
                    Agente de IA reduciendo consultas manuales en un 70%
                  </a>
                </li>
                <li>
                  <a target="_blank" rel="noopener noreferrer"
                    href="https://interconnecta.com/es/insights/implementation-of-the-month-zoho-inventory-for-an-engineering-and-construction-company-with-8-warehouses-and-3000-skus/">
                    Zoho Inventory — 8 almacenes y 3.000 SKUs
                  </a>
                </li>
              </ul>
              <a class="footer-cta" target="_blank" rel="noopener noreferrer" href="https://interconnecta.com/es/insights/">
                Ver todas las implementaciones →
              </a>
            </div>

            <!-- SOPORTE -->
            <div class="col-lg-3 col-md-6" id="footer-col-support">
              <h4 class="title">Soporte y Recursos</h4>
              <ul id="footer-support-links">
                <li><a target="_blank" rel="noopener noreferrer" href="https://portal.interconnecta.com/">Centro de Soporte</a></li>
                <li><a href="/zoho-free-trial/ES/">Zoho Prueba Gratuita</a></li>
                <li>
                  <a href="/ic-academy/ES/">
                    <img id="ic-academy-iso" src="/assets/images/logoFavicon-interconnecta.png" alt="IC">
                    IC Academy
                  </a>
                </li>
                <li><a href="/privacy-policy/ES/">Política de Privacidad</a></li>
                <li><a href="/terms-and-conditions/ES/">Términos y Condiciones</a></li>
              </ul>
            </div>

          </div>
        </div>

        <!-- CONTACTO -->
        <div id="footer-bottom">
          <div class="container">
            <div id="footer-contact-group">
              <div class="pill"><span class="icon"><i class="fa-solid fa-phone"></i></span><a href="tel:+13053301400">+1 (305) 330-1400</a></div>
              <div class="pill"><span class="icon"><i class="fa-solid fa-envelope"></i></span><a href="mailto:info@interconnecta.com">info@interconnecta.com</a></div>
            </div>

            <div id="footer-social">
              <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/InterConnecta"><i class="fa-brands fa-facebook-f"></i></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/interconnecta/"><i class="fa-brands fa-instagram"></i></a>
              <a target="_blank" rel="noopener noreferrer" href="https://x.com/InterConnecta"><i class="fa-brands fa-x-twitter"></i></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/interconnecta"><i class="fa-brands fa-linkedin-in"></i></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@InterConnectacom"><i class="fa-brands fa-youtube"></i></a>
            </div>
          </div>
        </div>

        <!-- UBICACIONES -->
        <div id="footer-locations">
          <div class="container">
            <div id="footer-locations-grid">
              <div>
                <div class="region"><img src="/assets/images/footer/eeuu-flag.svg" class="flag" alt="USA" />Norte América</div>
                <p>Estados Unidos (Nueva York) — +1-646-760-4090</p>
              </div>
              <div>
                <div class="region"><img src="/assets/images/footer/panama-flag.svg" class="flag" alt="Panamá" />Centro América</div>
                <p>Panamá (Ciudad de Panamá) — +507-836-0436</p>
              </div>
              <div>
                <div class="region"><img src="/assets/images/footer/puerto-rico-flag.svg" class="flag" alt="Puerto Rico" />Caribe</div>
                <p>Puerto Rico (Ponce) — +1-787-719-7072</p>
              </div>
              <div>
                <div class="region"><img src="/assets/images/footer/peru-flag.svg" class="flag" alt="Perú" />Sudamérica</div>
                <p>Perú (Lima, Miraflores) — +51-1-644-9084</p>
              </div>
            </div>
          </div>
        </div>

        <!-- FIRMA -->
        <div id="footer-signature">
          © <span id="footer-year"></span> <span>InterConnecta</span> — Todos los derechos reservados.
        </div>

      </footer>
    `;

    // Año dinámico
    const yearEl = this.querySelector("#footer-year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  }
}

customElements.define("componente-footer-es", FooterComponentES);
