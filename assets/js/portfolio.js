/**
 * ==========================================================================
 * PORTFOLIO.JS - Portfolio Filtering & Interactive Project Details Modal
 * Portfolio for Creative Media Student
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* --------------------------------------------------------------------------
   * 1. PORTFOLIO DATA REPOSITORY
   * -------------------------------------------------------------------------- */
  const projectsData = {
    1: {
      title: 'LUMINA: 3D Motion Graphic & Brand Identity',
      category: 'Motion Graphic / 3D Art',
      image: 'assets/images/project-1.svg',
      year: '2026',
      client: 'Creative Media Showcase (Academic Project)',
      description: 'โปรเจกต์การสร้างอัตลักษณ์แบรนด์ยุคใหม่ผ่านภาพเคลื่อนไหว 3D Motion Graphic ด้วยแนวคิด Iridescent Future ผสมผสานรูปทรงเรขาคณิตแบบไดนามิกเข้ากับแสงสะท้อนและอนุภาคแสง (Photonic Particles) เพื่อสร้างประสบการณ์การรับรู้ที่โดดเด่นและน่าจดจำสำหรับงานนิทรรศการสื่อนฤมิต',
      tools: ['Blender', 'Cinema 4D', 'After Effects', 'Octane Render', 'Illustrator'],
      highlights: [
        'ออกแบบโมเดลและพื้นผิวแบบ Procedural Shaders',
        'จำลองแสงและเงาแบบ Real-time Photorealistic',
        'สร้าง Motion Loop และ Sound Design ประกอบคลิปนำเสนอ',
        'จัดทำคู่มือ Brand Guidelines ฉบับ Motion System'
      ],
      link: '#',
      demoText: 'ดูตัวอย่างวิดีโอ (Demo Reel)'
    },
    2: {
      title: 'NEXUS: Smart Campus Life Mobile App',
      category: 'UI/UX Design & Prototyping',
      image: 'assets/images/project-2.svg',
      year: '2025 - 2026',
      client: 'University Tech Innovation Award',
      description: 'แอปพลิเคชันสำหรับนักศึกษายุคดิจิทัลเพื่อการจัดการชีวิตในรั้วมหาวิทยาลัยแบบ All-in-one ออกแบบ User Journey และ Design System ตามหลัก Human-Centered Design เน้น Glassmorphism ที่สบายตา การเข้าถึงตารางเรียน กิจกรรม และระบบ Smart Wallet ได้อย่างสะดวก รวดเร็ว',
      tools: ['Figma', 'Adobe XD', 'Protopie', 'User Testing', 'Design System'],
      highlights: [
        'ออกแบบ Wireframe, User Flow และ Interactive Prototype',
        'ทำ Usability Testing กับกลุ่มผู้ใช้งานจริงจำนวน 40 คน',
        'สร้าง UI Kit และ Components ครอบคลุมทั้ง Light / Dark Mode',
        'ได้รับรางวัลชนะเลิศ UX/UI Design Challenge ประจำปี'
      ],
      link: '#',
      demoText: 'ทดลองใช้งาน Interactive Prototype'
    },
    3: {
      title: 'Chroma: Interactive Web Experience',
      category: 'Web Design & Front-End Development',
      image: 'assets/images/project-3.svg',
      year: '2026',
      client: 'Digital Media Arts Festival',
      description: 'เว็บไซต์แสดงผลงานนิทรรศการศิลปะดิจิทัลที่ผู้ใช้สามารถมีปฏิสัมพันธ์ได้แบบเรียลไทม์ พัฒนาด้วยเทคโนโลยี WebGL, Three.js และ CSS Shader Animations รองรับ Responsive Design ทุกขนาดหน้าจอ พร้อมระบบเสียงแบบ Spatial Audio เพื่อยกระดับประสบการณ์การเสพผลงานศิลปะบนเว็บเบราว์เซอร์',
      tools: ['HTML5', 'CSS3 / SASS', 'JavaScript (ES6+)', 'Three.js', 'Bootstrap 5'],
      highlights: [
        'พัฒนา 3D Interactive Canvas ด้วย WebGL',
        'ปรับแต่งประสิทธิภาพความเร็ว Core Web Vitals คะแนน 98+',
        'ระบบรองรับ Touch Gestures บนแท็บเล็ตและสมาร์ตโฟน',
        'ได้รับเลือกแสดงบนแพลตฟอร์ม Web Design Inspiration'
      ],
      link: '#',
      demoText: 'เปิดเว็บไซต์จริง (Live Demo)'
    },
    4: {
      title: 'Echoes of Bangkok: Short Documentary & Color Grading',
      category: 'Video Editing & Production',
      image: 'assets/images/project-4.svg',
      year: '2025',
      client: 'Independent Short Film',
      description: 'ภาพยนตร์สารคดีสั้นบอกเล่าเสน่ห์และเรื่องราวของกรุงเทพมหานครในยามค่ำคืน ถ่ายทำด้วยกล้อง Cinema Camera ระบบ 10-Bit LOG และทำการตัดต่อเรียงลำดับเรื่องราวพร้อมย้อมสี (Color Grading) สไตล์ Neo-Noir Cyberpunk ผสานเพลงประกอบแนว Ambient Synthwave',
      tools: ['Premiere Pro', 'DaVinci Resolve', 'Logic Pro X', 'Sony FX3', 'DJI Ronin'],
      highlights: [
        'บันทึกภาพความละเอียด 4K DCI Anamorphic 24 FPS',
        'ออกแบบ LUT เฉพาะตัวเพื่อคุม Mood & Tone สไตล์ Cyber Blue & Gold',
        'การมิกซ์เสียงรอบทิศทาง Dolby 5.1 Sound Design',
        'ฉายรอบปฐมทัศน์ในงานเทศกาลภาพยนตร์นักศึกษา'
      ],
      link: '#',
      demoText: 'รับชมภาพยนตร์เต็มเรื่อง'
    },
    5: {
      title: 'Urban Perspectives: Architecture Photography',
      category: 'Photography & Digital Retouching',
      image: 'assets/images/project-5.svg',
      year: '2025',
      client: 'Architecture & Design Magazine Feature',
      description: 'ชุดภาพถ่ายสถาปัตยกรรมและโครงสร้างอาคารโมเดิร์นที่สะท้อนการเล่นกับแสง เงา และรูปทรงเรขาคณิต โดยใช้เทคนิค Long Exposure ในช่วง Golden Hour และ Blue Hour พร้อมการแต่งภาพแบบ High Dynamic Range ที่คงความเป็นธรรมชาติและรายละเอียดครบถ้วน',
      tools: ['Sony A7R IV', 'Canon L-Series Lenses', 'Lightroom Classic', 'Photoshop'],
      highlights: [
        'ถ่ายทอดความสมมาตรและ Perspective มุมมองของโครงสร้างอาคาร',
        'การจัดแสงธรรมชาติและเงาสะท้อนในน้ำและกระจก',
        'การ Retouch ระดับ Commercial Print 300 DPI',
        'ได้รับรางวัลภาพถ่ายยอดเยี่ยมประเภทสถาปัตยกรรม'
      ],
      link: '#',
      demoText: 'ดูอัลบั้มภาพความละเอียดสูง'
    },
    6: {
      title: 'Synthetica: Generative AI Art & Spatial Media',
      category: 'AI Tools & Creative Technology',
      image: 'assets/images/project-6.svg',
      year: '2026',
      client: 'Creative Media Experimental Lab',
      description: 'การทดลองสร้างสรรค์สื่อศิลปะเชิงนวัตกรรมด้วยการผสมผสาน Generative AI Prompt Engineering เข้ากับเทคนิค Spatial Audio และ Motion Graphic เพื่อจำลองโลกทัศน์ในอนาคต เป็นการสำรวจพรมแดนใหม่ระหว่างจินตนาการของมนุษย์และอัลกอริทึมปัญญาประดิษฐ์',
      tools: ['Midjourney v6', 'Stable Diffusion', 'ComfyUI', 'Runway Gen-2', 'Topaz Video AI'],
      highlights: [
        'สร้าง Custom Workflow ใน ComfyUI เพื่อควบคุมภาพและสไตล์เฉพาะ',
        'Upscale และ Interpolate เฟรมภาพสู่ความละเอียด 4K 60fps',
        'การประสานภาพและเสียงแบบ Dynamic Generative',
        'จัดแสดงในรูปแบบ Digital Installation Projection'
      ],
      link: '#',
      demoText: 'ดูนิทรรศการผลงาน AI Art'
    }
  };

  /* --------------------------------------------------------------------------
   * 2. CATEGORY FILTER TABS
   * -------------------------------------------------------------------------- */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle active filter button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      portfolioItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');

        if (filterValue === 'all' || itemCategory === filterValue) {
          item.classList.remove('is-hidden');
          // Add re-reveal effect
          item.style.opacity = '0';
          item.style.transform = 'scale(0.95)';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
          }, 50);
        } else {
          item.classList.add('is-hidden');
        }
      });
    });
  });

  /* --------------------------------------------------------------------------
   * 3. PROJECT DETAIL MODAL INJECTOR
   * -------------------------------------------------------------------------- */
  const projectModalElement = document.getElementById('projectModal');
  const viewButtons = document.querySelectorAll('.btn-view-work, .overlay-action-btn');

  if (projectModalElement && typeof bootstrap !== 'undefined') {
    const projectModal = new bootstrap.Modal(projectModalElement);

    const modalTitle = document.getElementById('modalProjectTitle');
    const modalCategory = document.getElementById('modalProjectCategory');
    const modalImage = document.getElementById('modalProjectImage');
    const modalClient = document.getElementById('modalProjectClient');
    const modalYear = document.getElementById('modalProjectYear');
    const modalDesc = document.getElementById('modalProjectDesc');
    const modalToolsContainer = document.getElementById('modalProjectTools');
    const modalHighlightsContainer = document.getElementById('modalProjectHighlights');
    const modalDemoBtn = document.getElementById('modalProjectDemoBtn');

    viewButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const projectId = btn.getAttribute('data-project-id');
        const data = projectsData[projectId];

        if (data) {
          modalTitle.textContent = data.title;
          modalCategory.textContent = data.category;
          modalImage.src = data.image;
          modalImage.alt = data.title;
          modalClient.textContent = data.client;
          modalYear.textContent = data.year;
          modalDesc.textContent = data.description;

          // Populate Tools Tags
          modalToolsContainer.innerHTML = '';
          data.tools.forEach(tool => {
            const tag = document.createElement('span');
            tag.className = 'modal-tech-tag';
            tag.innerHTML = `<i class="fa-solid fa-code text-primary-blue me-1"></i> ${tool}`;
            modalToolsContainer.appendChild(tag);
          });

          // Populate Key Highlights
          modalHighlightsContainer.innerHTML = '';
          data.highlights.forEach(hl => {
            const li = document.createElement('li');
            li.className = 'mb-2 text-muted';
            li.innerHTML = `<i class="fa-solid fa-circle-check text-warning me-2"></i> ${hl}`;
            modalHighlightsContainer.appendChild(li);
          });

          // Update demo button
          if (modalDemoBtn) {
            modalDemoBtn.innerHTML = `<i class="fa-solid fa-arrow-up-right-from-square me-2"></i> ${data.demoText}`;
            modalDemoBtn.href = data.link;
          }

          projectModal.show();
        }
      });
    });
  }
});
