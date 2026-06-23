let showingSocials = true;

const btn = document.getElementById("toggleBtn");
const btnText = document.getElementById("btnText");

const social = document.getElementById("social-links");
const support = document.getElementById("support-links");

const base = document.getElementById("pfpBase");

/* GIFS */
const gifs = {
    tiktok: document.getElementById("pfpHover"),
    discord: document.getElementById("pfpDiscordHover"),
    instagram: document.getElementById("pfpInstagramHover"),
    youtube: document.getElementById("pfpYoutubeHover"),
    spotify: document.getElementById("pfpSpotifyHover"),
    amazon: document.getElementById("pfpAmazonHover"),
    paypal: document.getElementById("pfpPaypalHover")
};

function resetAll() {
    Object.values(gifs).forEach(g => {
        g.style.transition = "opacity 0.75s ease";
        g.style.opacity = "0";
    });

    base.style.transition = "opacity 0.75s ease";
    base.style.opacity = "1";
}

/* TOGGLE BUTTON */
btn.addEventListener("click", () => {

    btn.disabled = true;

    setTimeout(() => {

        showingSocials = !showingSocials;

        if (showingSocials) {
            social.style.display = "block";
            support.style.display = "none";
            btnText.textContent = "Go to Support Links";
        } else {
            social.style.display = "none";
            support.style.display = "block";
            btnText.textContent = "Go to Social Links";
        }

        resetAll();
        btn.disabled = false;

    }, 400);
});

/* HOVER SYSTEM */
function bindHover(key, isSupport = false) {

    const gif = gifs[key];

    const buttons = document.querySelectorAll(
        `[data-platform="${key}"], [data-support="${key}"]`
    );

    buttons.forEach(b => {

        b.addEventListener("mouseenter", () => {

            if (isSupport && showingSocials) return;
            if (!isSupport && !showingSocials) return;

            resetAll();

            base.style.opacity = "0";
            gif.style.opacity = "1";
        });

        b.addEventListener("mouseleave", resetAll);
    });
}

/* SOCIAL */
["tiktok","discord","instagram","youtube","spotify"]
.forEach(k => bindHover(k, false));

/* SUPPORT */
["amazon","paypal"]
.forEach(k => bindHover(k, true));



(function setGlowEffectRx() {
  const glowEffects = document.querySelectorAll('.glow-btn');
  
  glowEffects.forEach(element => {
    const rx = getComputedStyle(element).borderRadius;
    const rects = element.querySelectorAll('rect');
    rects.forEach(r => r.setAttribute('rx', rx));
  });
})();


