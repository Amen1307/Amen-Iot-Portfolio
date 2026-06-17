/* ==========================================================================
   CORE PORTFOLIO INTERACTIVITY CONTROL
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // Responsive Mobile Hamburger Overlay Linkage [cite: 87]
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenu.classList.toggle('menu-active');
        });
    }

    // App Component Trigger Binding [cite: 89]
    const calcBtn = document.getElementById('calculate-btn');
    if (calcBtn) {
        calcBtn.addEventListener('click', executeDiagnostics);
    }
});

function executeDiagnostics() {
    const weightValue = parseFloat(document.getElementById('weight').value);
    const heightValue = parseFloat(document.getElementById('height').value);
    const resultBox = document.getElementById('bmi-result');
    const scoreDisplay = document.getElementById('diagnostic-readout');
    const statusDisplay = document.getElementById('bmi-status');

    if (!weightValue || !heightValue || weightValue <= 0 || heightValue <= 0) {
        alert('ERROR: Input parameters contain invalid mathematical matrices.');
        return;
    }

    const physicalHeightMeters = heightValue / 100;
    const standardIndexScore = (weightValue / (physicalHeightMeters * physicalHeightMeters)).toFixed(1);

    scoreDisplay.innerText = standardIndexScore;
    resultBox.style.display = 'block';

    // Algorithmic diagnostics outcome mapping [cite: 89]
    if (standardIndexScore < 18.5) {
        statusDisplay.innerText = "OUTCOME: LOWER NODE MASS CRITICAL RANGE";
        statusDisplay.style.color = "#ffc107";
    } else if (standardIndexScore >= 18.5 && standardIndexScore <= 24.9) {
        statusDisplay.innerText = "OUTCOME: OPTIMAL STABILIZED MASS SYSTEM";
        statusDisplay.style.color = "#00f2fe";
    } else if (standardIndexScore >= 25 && standardIndexScore <= 29.9) {
        statusDisplay.innerText = "OUTCOME: SURPLUS LOAD PROFILE SPECIFICATION";
        statusDisplay.style.color = "#ff9f43";
    } else {
        statusDisplay.innerText = "OUTCOME: EXTREME SCALE ATTRIBUTE EMERGENCY ALERT";
        statusDisplay.style.color = "#ff007f";
    }
}