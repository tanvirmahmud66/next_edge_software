// Ultra-early intervention - Fixed for both List and Form views
(function() {
    'use strict';
    
    const PREMIUM_WORKSPACE = 'Next Edge';
    const PREMIUM_WORKSPACE_LOWER = 'next_edge';
    const OUR_DOCTYPES = ['Website Lead', 'Home Page', 'Services', 'Feature', 'Development Process', 'Web Application Page', 'Web Application Type', 'Website Templates', 'About Page', 'Contact Us', 'Website Theme Color'];
    
    let isFixing = false;
    let observerStarted = false;
    
    // Function to check if current route is our doctype
    function isOurDoctype() {
        const route = frappe.get_route();
        return (route[0] === 'List' || route[0] === 'Form') && OUR_DOCTYPES.includes(route[1]);
    }
    
    // Function to initialize overrides once frappe is ready
    function initializeOverrides() {
        if (typeof frappe === 'undefined' || !frappe.ui || !frappe.ui.Sidebar) {
            setTimeout(initializeOverrides, 50);
            return;
        }
        
        const originalSetup = frappe.ui.Sidebar.prototype.setup;
        const originalSetWorkspace = frappe.ui.Sidebar.prototype.set_workspace_sidebar;
        
        // Main override - handles both List and Form views
        frappe.ui.Sidebar.prototype.set_workspace_sidebar = function(router) {
            const route = frappe.get_route();
            
            // Check for both List and Form views
            if ((route[0] === 'List' || route[0] === 'Form') && OUR_DOCTYPES.includes(route[1])) {
                if (this.sidebar_title !== PREMIUM_WORKSPACE) {
                    this.sidebar_title = PREMIUM_WORKSPACE;
                    this.workspace_title = PREMIUM_WORKSPACE_LOWER;
                    
                    // Update storage for this doctype
                    const map = JSON.parse(localStorage.getItem("sidebar_item_map") || "{}");
                    map[route[1]] = [PREMIUM_WORKSPACE];
                    localStorage.setItem("sidebar_item_map", JSON.stringify(map));
                    
                    if (!isFixing) {
                        isFixing = true;
                        originalSetup.call(this, PREMIUM_WORKSPACE);
                        isFixing = false;
                    }
                    return;
                }
            }
            
            originalSetWorkspace.call(this, router);
        };
    }
    
    // Start initialization
    initializeOverrides();
    
    // DOM Observer for flash prevention
    const observer = new MutationObserver(function(mutations) {
        if (isFixing) return;
        
        const sidebar = document.querySelector('.body-sidebar');
        
        if (sidebar && isOurDoctype()) {
            const title = sidebar.getAttribute('data-title');
            
            if (title !== PREMIUM_WORKSPACE) {
                // Hide wrong sidebar immediately
                sidebar.style.visibility = 'hidden';
                sidebar.style.opacity = '0';
                
                // Fix it
                if (frappe.app.sidebar) {
                    isFixing = true;
                    frappe.app.sidebar.sidebar_title = PREMIUM_WORKSPACE;
                    frappe.app.sidebar.workspace_title = PREMIUM_WORKSPACE_LOWER;
                    
                    // Call setup with our workspace
                    if (frappe.ui.Sidebar.prototype.setup) {
                        frappe.ui.Sidebar.prototype.setup.call(frappe.app.sidebar, PREMIUM_WORKSPACE);
                    }
                    
                    setTimeout(() => {
                        sidebar.style.visibility = 'visible';
                        sidebar.style.opacity = '1';
                        isFixing = false;
                    }, 100);
                }
            } else {
                sidebar.style.visibility = 'visible';
                sidebar.style.opacity = '1';
            }
        }
    });
    
    // Start observing when DOM is ready
    function startObserver() {
        if (observerStarted) return;
        
        if (document.body) {
            observer.observe(document.body, {
                childList: true,
                subtree: true,
                attributes: true,
                attributeFilter: ['data-title']
            });
            observerStarted = true;
        } else {
            setTimeout(startObserver, 50);
        }
    }
    
    startObserver();
    
    // Clean up
    window.addEventListener('beforeunload', function() {
        observer.disconnect();
        observerStarted = false;
    });
    
    // Set localStorage early and handle single doctype navigation
    $(document).ready(function() {
        const route = frappe.get_route();
        
        // Handle both List and Form views
        if ((route[0] === 'List' || route[0] === 'Form') && OUR_DOCTYPES.includes(route[1])) {
            const map = JSON.parse(localStorage.getItem("sidebar_item_map") || "{}");
            map[route[1]] = [PREMIUM_WORKSPACE];
            localStorage.setItem("sidebar_item_map", JSON.stringify(map));
        }
    });
    
    // Listen for route changes to handle navigation between pages
    frappe.router.on('change', function() {
        setTimeout(() => {
            const route = frappe.get_route();
            
            if ((route[0] === 'List' || route[0] === 'Form') && OUR_DOCTYPES.includes(route[1])) {
                // Update localStorage
                const map = JSON.parse(localStorage.getItem("sidebar_item_map") || "{}");
                map[route[1]] = [PREMIUM_WORKSPACE];
                localStorage.setItem("sidebar_item_map", JSON.stringify(map));
                
                // Force sidebar update
                if (frappe.app.sidebar && frappe.app.sidebar.sidebar_title !== PREMIUM_WORKSPACE) {
                    if (!isFixing) {
                        isFixing = true;
                        frappe.app.sidebar.sidebar_title = PREMIUM_WORKSPACE;
                        frappe.app.sidebar.workspace_title = PREMIUM_WORKSPACE_LOWER;
                        
                        if (frappe.ui.Sidebar.prototype.setup) {
                            frappe.ui.Sidebar.prototype.setup.call(frappe.app.sidebar, PREMIUM_WORKSPACE);
                        }
                        
                        // Show sidebar after update
                        const sidebar = document.querySelector('.body-sidebar');
                        if (sidebar) {
                            sidebar.style.visibility = 'visible';
                            sidebar.style.opacity = '1';
                        }
                        
                        isFixing = false;
                    }
                }
            }
        }, 100);
    });
    
})();