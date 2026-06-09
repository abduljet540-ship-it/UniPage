/* ============================================================
   BASE APP — TaskFlow University Landing Page
   ============================================================ */

/* ============================================================
   MEMBER 15 — Search Functionality
   ============================================================ */
// Member 15 adds search logic here

/* ============================================================
   MEMBER 16 — Dark Mode Toggle Logic
   ============================================================ */
// Member 16 adds dark mode toggle logic here
   const toggleBtn = document.createElement("button");
toggleBtn.textContent = "Dark Mode";
document.getElementById("theme-toggle").appendChild(toggleBtn);

toggleBtn.addEventListener("click", function () {
 document.body.classList.toggle("dark-mode");
 toggleBtn.textContent = document.body.classList.contains("dark-mode")
 ? "Light Mode"
 : "Dark Mode";
});
/* ============================================================
   MEMBER 17 — Back to Top Button Logic
   ============================================================ */
// Member 17 adds back-to-top scroll logic here

/* ============================================================
   MEMBER 19 — Smooth Scroll for Nav Links
   ============================================================ */
// Member 19 adds smooth scroll logic here

/* ============================================================
   MEMBER 20 — Current Year in Footer
   ============================================================ */
// Member 20 adds dynamic year logic here
