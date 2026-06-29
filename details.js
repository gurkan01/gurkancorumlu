/* ==========================================================================
   GÜRKAN ÇORUMLU PORTFOLIO - DYNAMIC DETAILS SCRIPT
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // Helper function to extract query parameters
    const getQueryParam = (name) => {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    };

    const assetId = getQueryParam('id');

    // Redirect to assets page if no ID is specified
    if (!assetId) {
        window.location.href = 'assets.html';
        return;
    }

    // Lookup the asset in our assetsData array
    const asset = assetsData.find(a => a.id === assetId);

    // Redirect if asset doesn't exist
    if (!asset) {
        window.location.href = 'assets.html';
        return;
    }

    // 1. UPDATE BASICS
    document.title = `${asset.title} | Gürkan Çorumlu Details`;
    
    const titleElement = document.getElementById('details-title');
    titleElement.textContent = asset.title;

    // Edition Tag
    const editionTag = document.getElementById('details-edition');
    editionTag.textContent = asset.edition;
    editionTag.className = 'project-edition-tag'; // reset
    if (asset.tagClass) {
        editionTag.classList.add(asset.tagClass);
    }

    // Main Image
    const mainImg = document.getElementById('details-image');
    mainImg.src = asset.image;
    mainImg.alt = asset.title;

    // Category Badge
    const categoryBadge = document.getElementById('details-category-badge');
    categoryBadge.innerHTML = `
        <span class="tr-text">${asset.categoryTR}</span>
        <span class="en-text">${asset.categoryEN}</span>
    `;

    // Short & Long Descriptions
    const shortDesc = document.getElementById('details-desc-short');
    shortDesc.innerHTML = `
        <span class="tr-text">${asset.descTR}</span>
        <span class="en-text">${asset.descEN}</span>
    `;

    const longDesc = document.getElementById('details-long-desc');
    longDesc.innerHTML = `
        <span class="tr-text">${asset.detailsTR}</span>
        <span class="en-text">${asset.detailsEN}</span>
    `;

    // 2. RENDER TECHNICAL SPECIFICATIONS
    const specsContainer = document.getElementById('details-specs-list');
    specsContainer.innerHTML = '';

    const keysTR = Object.keys(asset.specsTR);
    const keysEN = Object.keys(asset.specsEN);

    keysTR.forEach((keyTR, index) => {
        const valTR = asset.specsTR[keyTR];
        const keyEN = keysEN[index];
        const valEN = asset.specsEN[keyEN];

        const specItem = document.createElement('div');
        specItem.className = 'spec-item';
        specItem.innerHTML = `
            <span class="spec-label tr-text">${keyTR}</span>
            <span class="spec-label en-text">${keyEN}</span>
            <span class="spec-value tr-text">${valTR}</span>
            <span class="spec-value en-text">${valEN}</span>
        `;
        specsContainer.appendChild(specItem);
    });

    // 3. RENDER ANIMATIONS LIST (IF APPLICABLE)
    const animSection = document.getElementById('details-animations-section');
    const animList = document.getElementById('details-animations-list');

    if (asset.animationsTR && asset.animationsTR.length > 0) {
        animSection.style.display = 'block';
        animList.innerHTML = '';

        asset.animationsTR.forEach((animTR, index) => {
            const animEN = asset.animationsEN[index];
            const li = document.createElement('li');
            li.innerHTML = `
                <i class="fa-solid fa-play"></i>
                <span class="tr-text">${animTR}</span>
                <span class="en-text">${animEN}</span>
            `;
            animList.appendChild(li);
        });
    } else {
        animSection.style.display = 'none';
    }

    // 4. SETUP SHOP BUTTON LINKS
    const fabLink = document.getElementById('details-fab-link');
    const unityLink = document.getElementById('details-unity-link');

    fabLink.href = asset.fabLink || '#';
    unityLink.href = asset.unityLink || '#';
});
