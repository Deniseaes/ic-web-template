class HeaderComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    // ==========================================
    // 1. ESTRUCTURA HTML
    // ==========================================
    this.innerHTML = `
    <!-- back to top start -->
    <div id="tj-back-to-top"><span id="tj-back-to-top-percentage"></span></div>
    <!-- back to top end -->

    <!-- start: Search Popup -->
    <div class="search-popup-overlay"></div>
    <!-- end: Search Popup -->

    <!-- start: Offcanvas Menu -->
    <div class="tj-offcanvas-area d-none d-lg-block">
      <div class="hamburger_bg"></div>
      <div class="hamburger_wrapper">
        <div class="hamburger_inner">
          <div class="hamburger_top d-flex align-items-center justify-content-between">
            <div class="hamburger_logo">
              <a href="index.html" class="mobile_logo">
                <img src="" alt="Logo">
              </a>
            </div>
            <div class="hamburger_close">
              <button class="hamburger_close_btn"><i class="fa-thin fa-times"></i></button>
            </div>
          </div>
          <div class="offcanvas-text">
            <p>Developing personalize our customer journeys to increase satisfaction & loyalty of our expansion recognized
              by industry leaders.</p>
          </div>
          <div class="hamburger-search-area">
            <h5 class="hamburger-title">Search Now!</h5>
            <div class="hamburger_search">
              <form method="get" action="index.html">
                <button type="submit"><i class="tji-search"></i></button>
                <input type="search" autocomplete="off" name="s" value="" placeholder="Search here...">
              </form>
            </div>
          </div>
          <div class="hamburger-infos">
            <h5 class="hamburger-title">Contact Info</h5>
            <div class="contact-info">
              <div class="contact-item">
                <span class="subtitle">Phone</span>
                <a class="contact-link" href="tel:10095447818">+1 (009) 544-7818</a>
              </div>
              <div class="contact-item">
                <span class="subtitle">Email</span>
                <a class="contact-link" href="mailto:info@bexon.com">info@bexon.com</a>
              </div>
              <div class="contact-item">
                <span class="subtitle">Location</span>
                <span class="contact-link">993 Renner Burg, West Rond, MT 94251-030</span>
              </div>
            </div>
          </div>
        </div>
        <div class="hamburger-socials">
          <h5 class="hamburger-title">Follow Us</h5>
          <div class="social-links style-3">
            <ul>
              <li><a href="https://www.facebook.com/" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
              </li>
              <li><a href="https://www.instagram.com/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
              </li>
              <li><a href="https://x.com/" target="_blank"><i class="fa-brands fa-x-twitter"></i></a></li>
              <li><a href="https://www.linkedin.com/" target="_blank"><i class="fa-brands fa-linkedin-in"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- end: Offcanvas Menu -->

    <!-- start: Hamburger Menu -->
    <div class="hamburger-area d-xl-none">
      <div class="hamburger_bg"></div>
      <div class="hamburger_wrapper">
        <div class="hamburger_inner">
          <div
            class="hamburger_top d-flex align-items-center justify-content-between"
          >
            <div class="hamburger_logo">
              <a href="/index.html" class="mobile_logo">
                <img id="logo-interconnecta-ic-header-mobile" src="/assets/images/logo-inter.svg" alt="Logo" />
              </a>
            </div>
            <div class="hamburger_close">
              <button class="hamburger_close_btn">
                <i class="fa-thin fa-times"></i>
              </button>
            </div>
          </div>
          <div class="hamburger_menu">
            <div class="mobile_menu">
            </div>
          </div>
          <div class="hamburger-infos">
            <div class="contact-info">
              <div class="header-button">
                <a class="tj-primary-btn-modificado" href="contact.html">
                  <span class="btn-text"><span>Login</span></span>
                  <span class="btn-icon"
                    ><i class="tji-arrow-right-long"></i
                  ></span>
                </a>
              </div>  
              <div class="language-select-container">
                
              </div>  
            </div>
          </div>
        </div>
        <div class="hamburger-socials">
          <h5 class="hamburger-title">Follow Us</h5>
          <div class="social-links style-3">
            <ul>
              <li>
                <a href="https://www.facebook.com/" target="_blank"
                  ><i class="fa-brands fa-facebook-f"></i
                ></a>
              </li>
              <li>
                <a href="https://www.instagram.com/" target="_blank"
                  ><i class="fa-brands fa-instagram"></i
                ></a>
              </li>
              <li>
                <a href="https://x.com/" target="_blank"
                  ><i class="fa-brands fa-x-twitter"></i
                ></a>
              </li>
              <li>
                <a href="https://www.linkedin.com/" target="_blank"
                  ><i class="fa-brands fa-linkedin-in"></i
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- end: Hamburger Menu -->

    <!-- start: Header Area -->
    <header class="header-area header-1 header-absolute section-gap-x">
      <div class="header-global-use-zoho">
          <span id="header-global-use-zoho-link" style="color:#ffffff;">
            Register us as your <strong>ZOHO</strong> partner using the code <strong>INTCUSA</strong> | Learn how to do it <strong><u><a href="https://store.zoho.com/html/store/tagyourpartner.html" target="_blank" rel="noopener noreferrer" style="color:#ffffff; text-decoration:underline;">here</a></u></strong>
          </span>
      </div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="header-wrapper">
              <!-- site logo -->
              <div class="site_logo">
                <a class="logo" href="/index.html"
                  ><img id="logo-interconnecta-ic-header" src="/assets/images/logo-inter.svg" alt=""
                /></a>
              </div>

              <!-- navigation -->
              <div class="menu-area d-none d-xl-inline-flex align-items-center">
                <nav id="mobile-menu" class="mainmenu">
                  <ul>
                    <li><a href="/">Home</a></li>
                    <li class="has-dropdown">
                      <a >About Us</a>
                      <ul class="sub-menu">
                        <li><a href="/about-us/">Who we are</a></li>
                        <li><a href="/careers/">Careers</a></li>
                        <li>
                          <a href="/partners-certifications/">Partners & Certifications</a>
                        </li>
                        <li><a href="/sustainability-esg/">Sustainability & ESG</a></li>
                      </ul>
                    </li>
                    <li class="has-dropdown">                    
                      <a id="header-service-item"><img id="img-zoho-header-service" src="/assets/images/hero/logo-zoho.svg" alt=""> Services</a>                
                      <ul
                        class="sub-menu header__mega-menu mega-menu mega-menu-pages"
                      >
                        <li>
                          <div class="mega-menu-wrapper">
                              <div class="mega-menu-pages-single">
                              <div class="mega-menu-pages-single-inner">
                                <h6 class="mega-menu-title">Industry Solutions</h6>
                                <div class="mega-menu-list">
                                  <a href="/zoho-services/zoho-crm/index.html">Business Services</a>
                                  <a href="/zoho-services/zoho-crm/index.html">Financial Services</a>
                                  <a href="#">Manufacturing</a>
                                  <a href="#">Energy & Renewables</a>
                                  <a href="#">Technology Companies</a>
                                  <a href="#">Healthcare</a>
                                  <a href="#">Distribution & Logistics</a>
                                  <a href="#">Inventory Management</a>
                                  <a href="#">Education & Training</a>
                                </div>
                              </div>
                            </div>                            
                            <div class="mega-menu-pages-single">
                              <div class="mega-menu-pages-single-inner">
                                <h6 class="mega-menu-title">Zoho Ecosystem Services</h6>
                                <div class="mega-menu-list">
                                  <a href="/zoho-services/solutionsdesign/">Solution Design</a>
                                  <a href="/zoho-services/supportandmaintenance/">Support & Maintenance</a>
                                  <a href="#">Customer Apps & Integrations</a>
                                  <a href="/zoho-services/zoho-process-automation/">Process Automation</a>                        
                                 <a id="header-academy-item" href="/ic-academy/"><img id="img-academy-header" src="/assets/images/logoFavicon-interconnecta.png" alt=""> <Strong>Academy & Training</Strong></a>
                                </div>
                              </div>
                            </div>
                            <div class="mega-menu-pages-single">
                              <div class="mega-menu-pages-single-inner">
                                <h6 class="mega-menu-title">ZOHO Business Apps</h6>
                                <div class="mega-menu-list">
                                  <a href="/zoho-services/zoho-one/"><strong>Zoho One (ERP) &#8226 </strong>Unified business platform</a>
                                  <a href="/zoho-services/zoho-crm/"><strong>Zoho CRM &#8226 </strong>Sales & customer management</a>
                                  <a href="/zoho-services/zoho-analytics/"><strong>Zoho Analytics &#8226 </strong>Data insights & reporting</a>
                                  <a href="/zoho-services/zoho-books/"><strong>Zoho Books &#8226 </strong>Finance & Accounting</a>
                                  <!--<a href="/zoho-services/zoho-books-peru/"><strong>Zoho Books Peru &#8226 </strong>SUNAT Ready</a>-->
                                  <a href="/zoho-services/zoho-desk/"><strong>Zoho Desk &#8226 </strong>Customer support</a>
                                  <a href="/zoho-services/zoho-inventory/"><strong>Zoho Inventory &#8226 </strong>Inventory control</a>
                                  <a href="/zoho-services/zoho-creator/"><strong>Zoho Creator &#8226 </strong>Custom apps</a>
                                </div>
                              </div>
                            </div>  
                            <div></div> 
                                                                      
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li class="has-dropdown">             
                      <a id="header-soluciones-item"><img id="img-ai-header-soluciones" src="/assets/images/logos/icon-ai.svg" alt=""> AI Solutions</a>               
                      <ul
                        class="sub-menu header__mega-menu mega-menu mega-menu-pages"
                      >
                        <li>
                          <div class="mega-menu-wrapper">
                            <div class="mega-menu-pages-single">                              
                               <div class="mega-menu-pages-single-inner">
                                <h6 class="mega-menu-title">AI - Automation</h6>
                                <div class="mega-menu-list">
                                  <a class="link-menu-header" href="/ai-tools/">AI Tools</a>
                                  <a class="link-menu-header" href="#">IC • MediFlow <span class="btn-icon"><i class="tji-arrow-right-long"></i></span></a>
                                  <a class="link-menu-header" href="#">Commission tools <span class="btn-icon"><i class="tji-arrow-right-long"></i></span></a>
                                  <a class="link-menu-header" href="#"> InterRetail <span class="btn-icon"><i class="tji-arrow-right-long"></i></span></a>
                                  <a class="link-menu-header" href="#">Sales portal <span class="btn-icon"><i class="tji-arrow-right-long"></i></span></a>
                                  <a class="link-menu-header" href="#">Dispatch App <span class="btn-icon"><i class="tji-arrow-right-long"></i></span></a>
                                  <a class="link-menu-header" href="#">Checking Apps <span class="btn-icon"><i class="tji-arrow-right-long"></i></span></a>
                                  <a class="link-menu-header" href="#">InterBot <span class="btn-icon"><i class="tji-arrow-right-long"></i></span></a>
                                </div>
                              </div>
                            </div>
                            <div class="mega-menu-pages-single">
                              <div class="mega-menu-pages-single-inner">
                                <h6 class="mega-menu-title">AI Services</h6>
                                <div class="mega-menu-list">
                                  <a href="/ai-matrix/">Intelligent Decision Engine</a>
                                  <a href="/data-iq/">Advanced Analytics & Predictive BI</a>
                                  <a href="/ic-academy-360/"><img id="img-ai-header-products" src="/assets/images/logoFavicon-interconnecta.png" alt=""> Academy 360º</a>
                                  <a href="https://www.interconnecta.ai/mcp/EN/">AI Insights Blog</a>
                                </div>
                              </div>
                            </div>
                            <div class="mega-menu-pages-single">
                              <div class="mega-menu-pages-single-inner">
                                <h6 class="mega-menu-title">AI - Agents</h6>
                                <div class="mega-menu-list">
                                  <a class="link-menu-header" href="https://www.interconnecta.ai/agent/mia/EN/"
                                    >Sales & Marketing <span class="btn-icon"><i class="tji-arrow-right-long"></i></span>
                                  </a>
                                  <a class="link-menu-header" href="https://www.interconnecta.ai/agent/manny/EN/">Project Management <span class="btn-icon"><i class="tji-arrow-right-long"></i></span></a>
                                  <a class="link-menu-header" href="https://www.interconnecta.ai/agent/caly/EN/">Finance & Accounting <span class="btn-icon"><i class="tji-arrow-right-long"></i></span></a>
                                  <a class="link-menu-header" href="https://www.interconnecta.ai/agent/ari/EN/"
                                    >Human Resources Training <span class="btn-icon"><i class="tji-arrow-right-long"></i></span>
                                  </a>
                                  <a class="link-menu-header" href="https://www.interconnecta.ai/agent/devon/EN/"
                                    >Development Code <span class="btn-icon"><i class="tji-arrow-right-long"></i></span></a>
                                  <a class="link-menu-header" href="https://www.interconnecta.ai/agent/tami/EN/">Bussines Intelligence <span class="btn-icon"><i class="tji-arrow-right-long"></i></span></a>
                                </div>
                              </div>
                            </div>
                            <div></div> 
                                              
                          </div>
                        </li>
                      </ul>
                    </li>  
                    
                   <!-- <li><a href="https://appshub.interconnecta.com/">Customer Apps Hub</a></li>-->

                    <li class="has-dropdown">
                      <a >Insights</a>
                      <ul class="sub-menu">
                        <li><a href="https://interconnecta.com/insights">Blog &#8226 Zoho & Business</a></li>
                        <li><a href="https://blog.interconnecta.ai">Blog &#8226 AI Solutions</a></li>
                        <li><a href="/insights/case-study/">Case Studies</a></li>
                        <li>
                          <a href="/zoho-free-trail/"
                            >Free Zoho Trial</a
                          >
                        </li>
                      </ul>
                    </li>
                    <li><a href="/contact/index.html">Contact</a></li>     
                  </ul>
                </nav>
              </div>


              
              <!-- header right info -->
            
              <div class="menu-area d-none d-lg-inline-flex align-items-center">
              <nav class="mainmenu">
                <ul>
                  <li>
                    <div class="header-button">
                      <a class="tj-primary-btn-modificado" href="contact.html">
                        <span class="btn-text"><span>Login</span></span>
                        <span class="btn-icon"
                          ><i class="tji-arrow-right-long"></i
                        ></span>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div class="language-select-container"></div>
                  </li>
                  </ul>
              </nav>

                <!--
                <div class="header-search">
                  <button class="search">
                    <i class="tji-search"></i>
                  </button>
                  <button type="button" class="search_close_btn">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17 1L1 17"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M1 1L17 17"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div class="header-button">
                  <a class="tj-primary-btn" href="contact.html">
                    <span class="btn-text"><span>Let’s Talk</span></span>
                    <span class="btn-icon"
                      ><i class="tji-arrow-right-long"></i
                    ></span>
                  </a>
                </div>   
              -->     
              </div>
              <!-- menu bar -->
              <div class="menu_bar mobile_menu_bar d-xl-none">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Search Popup -->
      <div class="search_popup">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-8">
              <div class="tj_search_wrapper">
                <div class="search_form">
                  <form action="#">
                    <div class="search_input">
                      <div class="search-box">
                        <input
                          class="search-form-input"
                          type="text"
                          placeholder="Type Words and Hit Enter"
                          required
                        />
                        <button type="submit">
                          <i class="tji-search"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- end: Header Area -->
    `;

    // ==========================================
    // 2. INICIALIZAR LÓGICA
    // ==========================================
    
    // 2.1 Cargar Plugin MeanMenu (Definición de la librería)
    this.registerMeanMenuLibrary();

    // 2.2 Ejecutar Plugin MeanMenu
    // Usamos setTimeout para asegurar que jQuery ha procesado el DOM
    setTimeout(() => {
        this.initMeanMenuExecution();
    }, 50);

    // 2.3 Ejecutar resto de lógica (Sticky, Search, etc.)
    this.initBackToTop();
    this.initStickyHeader();
    this.initSearchPopup();
    this.initOffcanvasAndMobileTrigger();
    this.cambiarLenguaje();
  }


  // ==========================================
  // 3. INTEGRACIÓN DE MEANMENU (LIBRERÍA)
  // ==========================================
  registerMeanMenuLibrary() {
    // Verificamos que jQuery exista
    if (typeof jQuery === 'undefined') {
        console.error("HeaderComponent: jQuery no está cargado. MeanMenu no funcionará.");
        return;
    }

    // AQUI ESTÁ EL CÓDIGO EXACTO QUE ME PASASTE
    (function ($) {
        "use strict";
        $.fn.meanmenu = function (options) {
            var defaults = {
                meanMenuTarget: jQuery(this),
                meanMenuContainer: 'body', 
                meanMenuClose: "X",
                meanMenuCloseSize: "18px",
                meanMenuOpen: "<span /><span /><span />",
                meanRevealPosition: "right",
                meanRevealPositionDistance: "0",
                meanRevealColour: "",
                meanScreenWidth: "480",
                meanNavPush: "",
                meanShowChildren: true,
                meanExpandableChildren: true,
                meanRemoveAttrs: false,
                onePage: false,
                meanDisplay: "block",
                removeElements: ""
            };
            options = $.extend(defaults, options);
            var currentWidth = window.innerWidth || document.documentElement.clientWidth;

            return this.each(function () {
                var meanMenu = options.meanMenuTarget;
                var meanContainer = options.meanMenuContainer;
                var meanMenuClose = options.meanMenuClose;
                var meanMenuCloseSize = options.meanMenuCloseSize;
                var meanMenuOpen = options.meanMenuOpen;
                var meanRevealPosition = options.meanRevealPosition;
                var meanRevealPositionDistance = options.meanRevealPositionDistance;
                var meanRevealColour = options.meanRevealColour;
                var meanScreenWidth = options.meanScreenWidth;
                var meanNavPush = options.meanNavPush;
                var meanRevealClass = ".meanmenu-reveal";
                var meanShowChildren = options.meanShowChildren;
                var meanExpandableChildren = options.meanExpandableChildren;
                var meanExpand = options.meanExpand;
                var meanRemoveAttrs = options.meanRemoveAttrs;
                var onePage = options.onePage;
                var meanDisplay = options.meanDisplay;
                var removeElements = options.removeElements;
                var isMobile = false;
                if ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i)) || (navigator.userAgent.match(/Android/i)) || (navigator.userAgent.match(/Blackberry/i)) || (navigator.userAgent.match(/Windows Phone/i))) {
                    isMobile = true;
                }
                if ((navigator.userAgent.match(/MSIE 8/i)) || (navigator.userAgent.match(/MSIE 7/i))) {
                    jQuery('html').css("overflow-y", "scroll");
                }
                var meanRevealPos = "";
                var meanCentered = function () {
                    if (meanRevealPosition === "center") {
                        var newWidth = window.innerWidth || document.documentElement.clientWidth;
                        var meanCenter = ((newWidth / 2) - 22) + "px";
                        meanRevealPos = "left:" + meanCenter + ";right:auto;";
                        if (!isMobile) {
                            jQuery('.meanmenu-reveal').css("left", meanCenter);
                        } else {
                            jQuery('.meanmenu-reveal').animate({ left: meanCenter });
                        }
                    }
                };
                var menuOn = false;
                var meanMenuExist = false;
                if (meanRevealPosition === "right") {
                    meanRevealPos = "right:" + meanRevealPositionDistance + ";left:auto;";
                }
                if (meanRevealPosition === "left") {
                    meanRevealPos = "left:" + meanRevealPositionDistance + ";right:auto;";
                }
                meanCentered();
                var $navreveal = "";
                var meanInner = function () {
                    if (jQuery($navreveal).is(".meanmenu-reveal.meanclose")) {
                        $navreveal.html(meanMenuClose);
                    } else {
                        $navreveal.html(meanMenuOpen);
                    }
                };
                var meanOriginal = function () {
                    jQuery('.mean-bar,.mean-push').remove();
                    jQuery(meanContainer).removeClass("mean-container");
                    jQuery(meanMenu).css('display', meanDisplay);
                    menuOn = false;
                    meanMenuExist = false;
                    jQuery(removeElements).removeClass('mean-remove');
                };
                var showMeanMenu = function () {
                    var meanStyles = "background:" + meanRevealColour + ";color:" + meanRevealColour + ";" + meanRevealPos;
                    if (currentWidth <= meanScreenWidth) {
                        jQuery(removeElements).addClass('mean-remove');
                        meanMenuExist = true;
                        jQuery(meanContainer).addClass("mean-container");
                        jQuery('.mean-container').prepend('<div class="mean-bar"><a href="#nav" class="meanmenu-reveal" style="' + meanStyles + '">Show Navigation</a><nav class="mean-nav"></nav></div>');
                        var meanMenuContents = jQuery(meanMenu).html();
                        jQuery('.mean-nav').html(meanMenuContents);
                        if (meanRemoveAttrs) {
                            jQuery('nav.mean-nav ul, nav.mean-nav ul *').each(function () {
                                if (jQuery(this).is('.mean-remove')) {
                                    jQuery(this).attr('class', 'mean-remove');
                                } else {
                                    jQuery(this).removeAttr("class");
                                }
                                jQuery(this).removeAttr("id");
                            });
                        }
                        jQuery(meanMenu).before('<div class="mean-push" />');
                        jQuery('.mean-push').css("margin-top", meanNavPush);
                        jQuery(meanMenu).hide();
                        jQuery(".meanmenu-reveal").show();
                        jQuery(meanRevealClass).html(meanMenuOpen);
                        $navreveal = jQuery(meanRevealClass);
                        jQuery('.mean-nav ul').hide();
                        if (meanShowChildren) {
                            if (meanExpandableChildren) {
                                jQuery('.mean-nav ul ul').each(function () {
                                    if (jQuery(this).children().length) {
                                        jQuery(this, 'li:first').parent().append('<a class="mean-expand" href="#" style="font-size: ' + meanMenuCloseSize + '">' + meanExpand + '</a>');
                                    }
                                });
                                jQuery('.mean-expand').on("click", function (e) {
                                    e.preventDefault();
                                    if (jQuery(this).hasClass("mean-clicked")) {
                                        jQuery(this).prev('ul').slideUp(300, function () { });
                                        jQuery(this).parent().removeClass('dropdown-opened');
                                    } else {
                                        jQuery(this).prev('ul').slideDown(300, function () { });
                                        jQuery(this).parent().addClass('dropdown-opened');
                                    }
                                    jQuery(this).toggleClass("mean-clicked");
                                });
                            } else {
                                jQuery('.mean-nav ul ul').show();
                            }
                        } else {
                            jQuery('.mean-nav ul ul').hide();
                        }
                        jQuery('.mean-nav ul li').last().addClass('mean-last');
                        $navreveal.removeClass("meanclose");
                        jQuery($navreveal).click(function (e) {
                            e.preventDefault();
                            if (menuOn === false) {
                                $navreveal.css("text-align", "center");
                                $navreveal.css("text-indent", "0");
                                $navreveal.css("font-size", meanMenuCloseSize);
                                jQuery('.mean-nav ul:first').slideDown();
                                menuOn = true;
                            } else {
                                jQuery('.mean-nav ul:first').slideUp();
                                menuOn = false;
                            }
                            $navreveal.toggleClass("meanclose");
                            meanInner();
                            jQuery(removeElements).addClass('mean-remove');
                        });
                        if (onePage) {
                            jQuery('.mean-nav ul > li > a:first-child').on("click", function () {
                                jQuery('.mean-nav ul:first').slideUp();
                                menuOn = false;
                                jQuery($navreveal).toggleClass("meanclose").html(meanMenuOpen);
                            });
                        }
                    } else {
                        meanOriginal();
                    }
                };
                if (!isMobile) {
                    jQuery(window).resize(function () {
                        currentWidth = window.innerWidth || document.documentElement.clientWidth;
                        if (currentWidth > meanScreenWidth) {
                            meanOriginal();
                        } else {
                            meanOriginal();
                        }
                        if (currentWidth <= meanScreenWidth) {
                            showMeanMenu();
                            meanCentered();
                        } else {
                            meanOriginal();
                        }
                    });
                }
                jQuery(window).resize(function () {
                    currentWidth = window.innerWidth || document.documentElement.clientWidth;
                    if (!isMobile) {
                        meanOriginal();
                        if (currentWidth <= meanScreenWidth) {
                            showMeanMenu();
                            meanCentered();
                        }
                    } else {
                        meanCentered();
                        if (currentWidth <= meanScreenWidth) {
                            if (meanMenuExist === false) {
                                showMeanMenu();
                            }
                        } else {
                            meanOriginal();
                        }
                    }
                });
                showMeanMenu();
            });
        };
    })(jQuery);
  }

  initMeanMenuExecution() {
    // Aquí es donde configuramos el plugin para tu estructura específica
    const $mobileMenu = jQuery(this.querySelector("#mobile-menu"));
    
    if ($mobileMenu.length) {
        $mobileMenu.meanmenu({
            meanMenuContainer: ".mobile_menu", // IMPORTANTE: Aquí decimos dónde poner el menú clonado
            meanScreenWidth: "991",          // Tu breakpoint
            meanExpand: ['<i class="tji-arrow-down"></i>'], // Tu icono de flecha
        });
        console.log("MeanMenu (Interno) Activado.");
    }
  }


  // ==========================================
  // 4. RESTO DE FUNCIONES (STICKY, ETC)
  // ==========================================
  
  // Back To Top
  initBackToTop() {
    const scrollBtn = this.querySelector("#tj-back-to-top");
    const percentSpan = this.querySelector("#tj-back-to-top-percentage");
    if (scrollBtn) {
      const scrollAction = () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = Math.round((scrollTop / docHeight) * 100);
        scrollBtn.style.background = `conic-gradient( var(--tj-color-theme-primary) ${scrollPercent}%, var(--tj-color-common-white) ${scrollPercent}%)`;
        if (scrollTop > 100) scrollBtn.classList.add("active");
        else scrollBtn.classList.remove("active");
        if (scrollPercent < 98) percentSpan.textContent = `${scrollPercent}%`;
        else percentSpan.innerHTML = '<i class="tji-arrow-up-long"></i>';
      };
      window.addEventListener("scroll", scrollAction);
      scrollBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    }
  }

  // Sticky Header
  initStickyHeader() {
    const header = this.querySelector(".header-area");
    let lastScrollTop = 0;
    if (header) {
      window.addEventListener("scroll", () => {
        const st = window.scrollY;
        if (st > 500) {
          if (st > lastScrollTop) header.classList.remove("sticky");
          else header.classList.add("sticky");
        } else header.classList.remove("sticky");
        lastScrollTop = st <= 0 ? 0 : st;
      });
    }
  }

  // Search Popup
  initSearchPopup() {
    const searchBtn = this.querySelector(".header-search .search") || this.querySelector(".search-trigger-btn");
    const popup = this.querySelector(".search_popup");
    const closeBtn = this.querySelector(".search_close_btn");
    const overlay = this.querySelector(".search-popup-overlay");
    const openSearch = (e) => {
        if(e) e.preventDefault();
        if(popup) popup.classList.add("search-opened");
        if(overlay) overlay.classList.add("search-popup-overlay-open");
        if(closeBtn) closeBtn.classList.add("close-show");
    };
    const closeSearch = () => {
        if(popup) popup.classList.remove("search-opened");
        if(overlay) overlay.classList.remove("search-popup-overlay-open");
        if(closeBtn) closeBtn.classList.remove("close-show");
    };
    if (searchBtn) searchBtn.addEventListener("click", openSearch);
    if (closeBtn) closeBtn.addEventListener("click", closeSearch);
    if (overlay) overlay.addEventListener("click", closeSearch);
  }

  // Offcanvas / Mobile Trigger
  initOffcanvasAndMobileTrigger() {
    const menuBar = this.querySelector(".mobile_menu_bar");
    const offcanvas = this.querySelector(".tj-offcanvas-area");
    const mobileMenuArea = this.querySelector(".hamburger-area");
    const closeBtns = this.querySelectorAll(".hamburger_close_btn");
    const bgOverlays = this.querySelectorAll(".hamburger_bg");

    if (menuBar) {
      menuBar.addEventListener("click", () => {
        menuBar.classList.toggle("on");
        // Si es mobile (<1200), abrimos el hamburger-area
        if (window.innerWidth < 1200 && mobileMenuArea) {
             mobileMenuArea.classList.add("opened");
        } else if (offcanvas) {
             offcanvas.classList.add("opened");
        }
        document.body.classList.add("overflow-hidden");
      });
    }

    const closeAll = () => {
      if(offcanvas) offcanvas.classList.remove("opened");
      if(mobileMenuArea) mobileMenuArea.classList.remove("opened");
      if(menuBar) menuBar.classList.remove("on");
      document.body.classList.remove("overflow-hidden");
    };

    closeBtns.forEach(btn => btn.addEventListener("click", closeAll));
    bgOverlays.forEach(bg => bg.addEventListener("click", closeAll));
  }


  cambiarLenguaje(){
    
    // --- 1. CÁLCULO DE DATOS (Se hace una sola vez) ---
    const currentPath = window.location.pathname;
    const isSpanish = /\/ES(\/|$)/i.test(currentPath); // Detecta /es/ o /ES/

    let targetUrl = '';
    let targetText = '';

    if (isSpanish) {
        // --- Estamos en ESPAÑOL, queremos ir a INGLÉS ---
        targetText = 'ENG';
        targetUrl = currentPath.replace(/\/ES/i, '');
        if (targetUrl === '') targetUrl = '/'; // Corrección para la raíz

    } else {
        // --- Estamos en INGLÉS, queremos ir a ESPAÑOL ---
        targetText = 'ESP';
        
        if (currentPath === '/') {
            targetUrl = '/ES/';
        } else {
            const lastSlashIndex = currentPath.lastIndexOf('/');
            const pathPrefix = currentPath.substring(0, lastSlashIndex); 
            const fileName = currentPath.substring(lastSlashIndex);     
            targetUrl = pathPrefix + '/ES' + fileName;
        }
    }

    // --- 2. BUSCAR TODOS LOS CONTENEDORES ---
    // En lugar de querySelector, usamos querySelectorAll
    const containers = document.querySelectorAll('.language-select-container');

    if (containers.length === 0) {
        console.warn('No se encontró ningún .language-select-container');
        return;
    }

    // --- 3. RECORRER CADA CONTENEDOR Y CREAR SU BOTÓN ---
    // Iteramos sobre la lista de contenedores (el del header y el del off-canvas)
    containers.forEach(container => {
        
        // Creamos un botón NUEVO para cada contenedor
        const linkButton = document.createElement('a');
        linkButton.href = targetUrl;
        linkButton.textContent = targetText;
        linkButton.className = 'language-switch-button'; // La misma clase para ambos

        // Limpiamos el contenedor específico y le añadimos su botón
        container.innerHTML = ''; 
        container.appendChild(linkButton);
    });
}

}

customElements.define("componente-header", HeaderComponent);
/*

### Requisitos Finales (¡Muy Importante!)

Para que esto funcione, en tu `index.html` debes asegurarte de lo siguiente:

1.  **jQuery debe estar cargado antes que el componente.**
    ```html
    <!-- Primero jQuery -->
    <script src="assets/js/jquery.min.js"></script> 
    
    <!-- NO cargues meanmenu.js externo si ya lo pusimos dentro del componente, 
         pero si lo dejas cargado no pasa nada, se sobrescribe. -->
         
    <!-- Al final tu componente -->
    <script src="js/HeaderComponent.js"></script>

    */