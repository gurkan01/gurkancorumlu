/* ==========================================================================
   GÜRKAN ÇORUMLU PORTFOLIO - ADMIN PANEL LOGIC (panel.js)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // Check global availability of DB controller
    if (!window.db) {
        console.error("Database controller (db.js) was not loaded!");
        return;
    }

    const db = window.db;

    // Elements
    const loginContainer = document.getElementById('login-container');
    const dashboardContainer = document.getElementById('dashboard-container');
    const loginForm = document.getElementById('admin-login-form');
    const loginCard = document.querySelector('.login-card');
    const loginError = document.getElementById('login-error-msg');
    
    const logoutBtn = document.getElementById('logout-btn');
    const tabButtons = document.querySelectorAll('.admin-tab-btn[data-target]');
    const tabPanes = document.querySelectorAll('.admin-tab-pane');

    // --------------------------------------------------
    // AUTHENTICATION SYSTEM
    // --------------------------------------------------
    const checkAuth = () => {
        const isLoggedIn = sessionStorage.getItem('isAdminLoggedIn') === 'true';
        if (isLoggedIn) {
            loginContainer.style.display = 'none';
            dashboardContainer.style.display = 'block';
            renderAssetsTable();
            renderJourneyTable();
        } else {
            loginContainer.style.display = 'flex';
            dashboardContainer.style.display = 'none';
        }
    };

    // Login Form Submit
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const usernameInput = document.getElementById('username').value.trim();
        const passwordInput = document.getElementById('password').value.trim();

        // Admin Credentials
        if (usernameInput === 'admin' && passwordInput === 'gurkan3d') {
            sessionStorage.setItem('isAdminLoggedIn', 'true');
            loginError.style.display = 'none';
            checkAuth();
        } else {
            // Shake card & show error on failure
            loginError.style.display = 'block';
            loginCard.classList.add('shake');
            setTimeout(() => {
                loginCard.classList.remove('shake');
            }, 500);
        }
    });

    // Logout
    logoutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        sessionStorage.removeItem('isAdminLoggedIn');
        window.location.reload();
    });

    // Run Auth Check on page load
    checkAuth();

    // --------------------------------------------------
    // TAB NAVIGATION
    // --------------------------------------------------
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetPaneId = btn.getAttribute('data-target');
            
            // Remove active states
            tabButtons.forEach(b => b.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));

            // Set active states
            btn.classList.add('active');
            const targetPane = document.getElementById(targetPaneId);
            if (targetPane) targetPane.classList.add('active');
        });
    });

    // --------------------------------------------------
    // MODAL OPEN/CLOSE CONTROLLERS
    // --------------------------------------------------
    const assetModal = document.getElementById('asset-modal');
    const assetForm = document.getElementById('asset-edit-form');
    const assetModalTitle = document.getElementById('asset-modal-title');
    const assetModalClose = document.getElementById('asset-modal-close');
    const assetModalCancel = document.getElementById('asset-modal-cancel');
    const addAssetBtn = document.getElementById('add-asset-btn');

    const journeyModal = document.getElementById('journey-modal');
    const journeyForm = document.getElementById('journey-edit-form');
    const journeyModalTitle = document.getElementById('journey-modal-title');
    const journeyModalClose = document.getElementById('journey-modal-close');
    const journeyModalCancel = document.getElementById('journey-modal-cancel');
    const addJourneyBtn = document.getElementById('add-journey-btn');

    // Close Modals
    const closeAllModals = () => {
        assetModal.style.display = 'none';
        journeyModal.style.display = 'none';
        assetForm.reset();
        journeyForm.reset();
    };

    [assetModalClose, assetModalCancel, journeyModalClose, journeyModalCancel].forEach(btn => {
        if (btn) btn.addEventListener('click', closeAllModals);
    });

    // Open Modals for Addition
    addAssetBtn.addEventListener('click', () => {
        closeAllModals();
        document.getElementById('asset-form-mode').value = 'create';
        document.getElementById('asset-slug-id').disabled = false;
        assetModalTitle.textContent = 'Yeni Varlık Paketi Ekle';
        assetModal.style.display = 'flex';
    });

    addJourneyBtn.addEventListener('click', () => {
        closeAllModals();
        document.getElementById('journey-form-mode').value = 'create';
        journeyModalTitle.textContent = 'Yeni Kariyer Kaydı Ekle';
        journeyModal.style.display = 'flex';
    });

    // --------------------------------------------------
    // RENDER TABLES (READ)
    // --------------------------------------------------
    
    // 1. Assets Table
    function renderAssetsTable() {
        const tableBody = document.getElementById('assets-table-body');
        tableBody.innerHTML = '';
        const assets = db.getAssets();

        assets.forEach(asset => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><img src="${asset.image}" alt="thumb" class="admin-thumb"></td>
                <td><strong>${asset.title}</strong></td>
                <td><span class="badge-item" style="padding: 2px 8px; font-size: 11px;">${asset.category.toUpperCase()}</span></td>
                <td><span style="font-size: 11px; color: var(--text-muted);">${asset.edition}</span></td>
                <td>
                    <div class="admin-actions-cell">
                        <button class="btn btn-card btn-action-edit" onclick="editAsset('${asset.id}')"><i class="fa-solid fa-pen"></i> Düzenle</button>
                        <button class="btn btn-card btn-action-delete" onclick="deleteAsset('${asset.id}')"><i class="fa-solid fa-trash"></i> Sil</button>
                    </div>
                </td>
            `;
            tableBody.appendChild(tr);
        });
    }

    // 2. Journey Table
    function renderJourneyTable() {
        const tableBody = document.getElementById('journey-table-body');
        tableBody.innerHTML = '';
        const journey = db.getJourney();

        journey.forEach(item => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><strong>${item.years}</strong></td>
                <td>
                    <div style="font-weight:600;">${item.roleTR}</div>
                    <div style="font-size:11px; color: var(--text-muted);">${item.roleEN}</div>
                </td>
                <td>${item.companyTR}</td>
                <td>
                    <div class="admin-actions-cell">
                        <button class="btn btn-card btn-action-edit" onclick="editJourney('${item.id}')"><i class="fa-solid fa-pen"></i> Düzenle</button>
                        <button class="btn btn-card btn-action-delete" onclick="deleteJourney('${item.id}')"><i class="fa-solid fa-trash"></i> Sil</button>
                    </div>
                </td>
            `;
            tableBody.appendChild(tr);
        });
    }

    // --------------------------------------------------
    // CRUD OPERATIONS (CREATE / UPDATE / DELETE)
    // --------------------------------------------------

    // 1. Asset Delete
    window.deleteAsset = (id) => {
        if (confirm("Bu varlık paketini silmek istediğinizden emin misiniz?")) {
            db.deleteAsset(id);
            renderAssetsTable();
        }
    };

    // 2. Journey Delete
    window.deleteJourney = (id) => {
        if (confirm("Bu kronoloji kaydını silmek istediğinizden emin misiniz?")) {
            db.deleteJourneyItem(id);
            renderJourneyTable();
        }
    };

    // 3. Asset Edit (Open Modal & Populate)
    window.editAsset = (id) => {
        closeAllModals();
        const asset = db.getAssets().find(a => a.id === id);
        if (!asset) return;

        document.getElementById('asset-form-mode').value = 'edit';
        document.getElementById('asset-form-target-id').value = id;
        
        // Populate inputs
        document.getElementById('asset-title').value = asset.title;
        document.getElementById('asset-slug-id').value = asset.id;
        document.getElementById('asset-slug-id').disabled = true; // cannot change id of existing asset
        document.getElementById('asset-category').value = asset.category;
        document.getElementById('asset-edition').value = asset.edition;
        document.getElementById('asset-image').value = asset.image;

        document.getElementById('asset-desc-tr').value = asset.descTR;
        document.getElementById('asset-desc-en').value = asset.descEN;
        document.getElementById('asset-details-tr').value = asset.detailsTR;
        document.getElementById('asset-details-en').value = asset.detailsEN;

        // Comma separated listings
        document.getElementById('asset-features-tr').value = asset.featuresTR.join(', ');
        document.getElementById('asset-features-en').value = asset.featuresEN.join(', ');

        // Specs
        document.getElementById('asset-spec-poly-tr').value = asset.specsTR["Poligon Sayısı"] || '';
        document.getElementById('asset-spec-poly-en').value = asset.specsEN["Poly Count"] || '';
        
        document.getElementById('asset-spec-tex-tr').value = asset.specsTR["Kaplamalar (Textures)"] || '';
        document.getElementById('asset-spec-tex-en').value = asset.specsEN["Textures"] || '';
        
        document.getElementById('asset-spec-uv-tr').value = asset.specsTR["UV Düzeni"] || '';
        document.getElementById('asset-spec-uv-en').value = asset.specsEN["UV Layout"] || '';

        document.getElementById('asset-spec-format-tr').value = asset.specsTR["Formatlar"] || '';
        document.getElementById('asset-spec-format-en').value = asset.specsEN["Formats"] || '';

        document.getElementById('asset-spec-collider-tr').value = asset.specsTR["Collider Türü"] || '';
        document.getElementById('asset-spec-collider-en').value = asset.specsEN["Collider Type"] || '';

        document.getElementById('asset-fab-link').value = asset.fabLink || '';
        document.getElementById('asset-unity-link').value = asset.unityLink || '';

        document.getElementById('asset-anims-tr').value = asset.animationsTR ? asset.animationsTR.join(', ') : '';
        document.getElementById('asset-anims-en').value = asset.animationsEN ? asset.animationsEN.join(', ') : '';

        assetModalTitle.textContent = 'Paket Detaylarını Düzenle';
        assetModal.style.display = 'flex';
    };

    // 4. Journey Edit (Open Modal & Populate)
    window.editJourney = (id) => {
        closeAllModals();
        const item = db.getJourney().find(j => j.id === id);
        if (!item) return;

        document.getElementById('journey-form-mode').value = 'edit';
        document.getElementById('journey-form-target-id').value = id;

        document.getElementById('journey-years').value = item.years;
        document.getElementById('journey-role-tr').value = item.roleTR;
        document.getElementById('journey-role-en').value = item.roleEN;
        document.getElementById('journey-company-tr').value = item.companyTR;
        document.getElementById('journey-company-en').value = item.companyEN;
        document.getElementById('journey-desc-tr').value = item.descTR;
        document.getElementById('journey-desc-en').value = item.descEN;

        journeyModalTitle.textContent = 'Kariyer Detaylarını Düzenle';
        journeyModal.style.display = 'flex';
    };

    // 5. Asset Submit (Create or Update)
    assetForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const mode = document.getElementById('asset-form-mode').value;
        const id = document.getElementById('asset-slug-id').value.trim();
        
        const categoryVal = document.getElementById('asset-category').value;
        let categoryTR = "Modelleme";
        let categoryEN = "3D Modeling";
        if (categoryVal === 'rigging') {
            categoryTR = "Rigleme";
            categoryEN = "Rigging";
        } else if (categoryVal === 'animation') {
            categoryTR = "Rig & Animasyon";
            categoryEN = "Rig & Animation";
        }

        const tagClassMapping = {
            "STANDARD EDITION": "",
            "DELUXE EDITION": "gold",
            "COMPLETE EDITION": "red"
        };
        const editionVal = document.getElementById('asset-edition').value;
        const tagClass = tagClassMapping[editionVal] || "";

        // Features arrays
        const featuresTR = document.getElementById('asset-features-tr').value.split(',').map(s => s.trim()).filter(Boolean);
        const featuresEN = document.getElementById('asset-features-en').value.split(',').map(s => s.trim()).filter(Boolean);

        // Animations arrays
        const animsTRInput = document.getElementById('asset-anims-tr').value;
        const animsENInput = document.getElementById('asset-anims-en').value;
        const animationsTR = animsTRInput ? animsTRInput.split(',').map(s => s.trim()).filter(Boolean) : [];
        const animationsEN = animsENInput ? animsENInput.split(',').map(s => s.trim()).filter(Boolean) : [];

        // Specs Objects
        const specsTR = {
            "Poligon Sayısı": document.getElementById('asset-spec-poly-tr').value.trim(),
            "Kaplamalar (Textures)": document.getElementById('asset-spec-tex-tr').value.trim(),
            "UV Düzeni": document.getElementById('asset-spec-uv-tr').value.trim(),
            "Formatlar": document.getElementById('asset-spec-format-tr').value.trim(),
            "Collider Türü": document.getElementById('asset-spec-collider-tr').value.trim()
        };

        const specsEN = {
            "Poly Count": document.getElementById('asset-spec-poly-en').value.trim(),
            "Textures": document.getElementById('asset-spec-tex-en').value.trim(),
            "UV Layout": document.getElementById('asset-spec-uv-en').value.trim(),
            "Formats": document.getElementById('asset-spec-format-en').value.trim(),
            "Collider Type": document.getElementById('asset-spec-collider-en').value.trim()
        };

        const assetData = {
            id: id,
            title: document.getElementById('asset-title').value.trim(),
            edition: editionVal,
            tagClass: tagClass,
            image: document.getElementById('asset-image').value.trim() || "assets/images/project_preview.png",
            category: categoryVal,
            categoryTR: categoryTR,
            categoryEN: categoryEN,
            descTR: document.getElementById('asset-desc-tr').value.trim(),
            descEN: document.getElementById('asset-desc-en').value.trim(),
            detailsTR: document.getElementById('asset-details-tr').value.trim(),
            detailsEN: document.getElementById('asset-details-en').value.trim(),
            featuresTR: featuresTR,
            featuresEN: featuresEN,
            specsTR: specsTR,
            specsEN: specsEN,
            fabLink: document.getElementById('asset-fab-link').value.trim(),
            unityLink: document.getElementById('asset-unity-link').value.trim(),
            animationsTR: animationsTR,
            animationsEN: animationsEN
        };

        if (mode === 'create') {
            // Check for duplicate ID
            const exists = db.getAssets().some(a => a.id === id);
            if (exists) {
                alert("Bu Slug ID zaten kullanılıyor! Lütfen benzersiz bir ID belirleyin.");
                return;
            }
            db.addAsset(assetData);
        } else {
            const targetId = document.getElementById('asset-form-target-id').value;
            db.updateAsset(targetId, assetData);
        }

        closeAllModals();
        renderAssetsTable();
    });

    // 6. Journey Submit (Create or Update)
    journeyForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const mode = document.getElementById('journey-form-mode').value;
        const years = document.getElementById('journey-years').value.trim();
        
        const journeyData = {
            years: years,
            roleTR: document.getElementById('journey-role-tr').value.trim(),
            roleEN: document.getElementById('journey-role-en').value.trim(),
            companyTR: document.getElementById('journey-company-tr').value.trim(),
            companyEN: document.getElementById('journey-company-en').value.trim(),
            descTR: document.getElementById('journey-desc-tr').value.trim(),
            descEN: document.getElementById('journey-desc-en').value.trim()
        };

        if (mode === 'create') {
            // Generate a random ID
            journeyData.id = 'journey-' + Date.now();
            db.addJourneyItem(journeyData);
        } else {
            const targetId = document.getElementById('journey-form-target-id').value;
            journeyData.id = targetId;
            db.updateJourneyItem(targetId, journeyData);
        }

        closeAllModals();
        renderJourneyTable();
    });
});
