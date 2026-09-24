/**
 * ==========================================================================
 * CONTACT.JS - Contact Form Validation & Simulated Interactive Dispatch
 * Portfolio for Creative Media Student
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const contactForm = document.getElementById('portfolioContactForm');
  const formFeedback = document.getElementById('formFeedback');
  const submitBtn = document.getElementById('submitMessageBtn');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Retrieve form values
      const nameInput = document.getElementById('senderName');
      const emailInput = document.getElementById('senderEmail');
      const subjectInput = document.getElementById('senderSubject');
      const messageInput = document.getElementById('senderMessage');

      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const subject = subjectInput.value.trim();
      const message = messageInput.value.trim();

      // Simple email validation regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!name || !email || !subject || !message) {
        showFeedback('กรุณากรอกข้อมูลให้ครบถ้วนทุกช่อง', 'error');
        return;
      }

      if (!emailRegex.test(email)) {
        showFeedback('กรุณาระบุอีเมลให้ถูกต้องตามรูปแบบ', 'error');
        return;
      }

      // Simulate sending state
      if (submitBtn) {
        submitBtn.disabled = true;
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin me-2"></i> กำลังส่งข้อความ...';

        setTimeout(() => {
          // Success simulated response
          showFeedback('ขอบคุณสำหรับข้อความ! เราได้รับข้อความของคุณแล้วและจะติดต่อกลับโดยเร็วที่สุด', 'success');
          contactForm.reset();
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;

          // Hide message after 6 seconds
          setTimeout(() => {
            if (formFeedback) {
              formFeedback.style.display = 'none';
              formFeedback.className = 'form-feedback';
            }
          }, 6000);
        }, 1200);
      }
    });
  }

  function showFeedback(text, type) {
    if (!formFeedback) return;
    formFeedback.textContent = text;
    formFeedback.className = `form-feedback ${type}`;
    formFeedback.style.display = 'block';
    formFeedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
});
