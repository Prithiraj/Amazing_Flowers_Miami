(() => {
  const root = document.documentElement;
  const header = document.querySelector('[data-header]');
  const menuToggle = document.querySelector('[data-menu-toggle]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!reduceMotion) root.classList.add('motion-ready');

  const setHeaderState = () => {
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 8);
  };

  setHeaderState();
  window.addEventListener('scroll', setHeaderState, { passive: true });

  const closeMenu = (returnFocus = false) => {
    if (!menuToggle || !mobileMenu) return;
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open menu');
    mobileMenu.hidden = true;
    document.body.classList.remove('menu-open');
    if (returnFocus) menuToggle.focus();
  };

  const openMenu = () => {
    if (!menuToggle || !mobileMenu) return;
    menuToggle.setAttribute('aria-expanded', 'true');
    menuToggle.setAttribute('aria-label', 'Close menu');
    mobileMenu.hidden = false;
    document.body.classList.add('menu-open');
    requestAnimationFrame(() => {
      const firstLink = mobileMenu.querySelector('a');
      if (firstLink) firstLink.focus();
    });
  };

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
      isOpen ? closeMenu() : openMenu();
    });

    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => closeMenu());
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
        closeMenu(true);
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 820 && menuToggle.getAttribute('aria-expanded') === 'true') closeMenu();
    });
  }

  if (!reduceMotion && 'IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.13, rootMargin: '0px 0px -5% 0px' });

    document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));
  } else {
    document.querySelectorAll('.reveal').forEach((element) => element.classList.add('is-visible'));
  }

  if (reduceMotion) return;

  const canvas = document.querySelector('[data-petal-canvas]');
  const hero = canvas?.closest('.hero');
  if (!canvas || !hero) return;

  let heroInView = true;
  let pageVisible = !document.hidden;

  if ('IntersectionObserver' in window) {
    const heroObserver = new IntersectionObserver(([entry]) => {
      heroInView = entry.isIntersecting;
    }, { threshold: 0.02 });
    heroObserver.observe(hero);
  }

  document.addEventListener('visibilitychange', () => {
    pageVisible = !document.hidden;
  });

  import('https://cdn.jsdelivr.net/npm/three@0.165.0/build/three.module.js')
    .then((THREE) => initPetals(THREE))
    .catch(() => {
      canvas.style.display = 'none';
    });

  function initPetals(THREE) {
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'low-power' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 100);
    camera.position.z = 10;

    const textureCanvas = document.createElement('canvas');
    textureCanvas.width = 128;
    textureCanvas.height = 128;
    const ctx = textureCanvas.getContext('2d');
    const gradient = ctx.createRadialGradient(54, 42, 10, 64, 64, 58);
    gradient.addColorStop(0, 'rgba(255,255,255,0.96)');
    gradient.addColorStop(0.45, 'rgba(226,151,128,0.68)');
    gradient.addColorStop(1, 'rgba(195,94,76,0)');
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.moveTo(64, 8);
    ctx.bezierCurveTo(101, 31, 105, 72, 64, 118);
    ctx.bezierCurveTo(23, 72, 27, 31, 64, 8);
    ctx.closePath();
    ctx.fill();

    const texture = new THREE.CanvasTexture(textureCanvas);
    texture.colorSpace = THREE.SRGBColorSpace;

    const petals = [];
    const petalCount = window.innerWidth < 700 ? 11 : 19;
    const palette = [0xdb8069, 0xe7a187, 0xd9b4aa, 0xc4d1b9];

    for (let i = 0; i < petalCount; i += 1) {
      const material = new THREE.SpriteMaterial({
        map: texture,
        color: palette[i % palette.length],
        transparent: true,
        opacity: 0.12 + Math.random() * 0.13,
        depthWrite: false,
      });
      const sprite = new THREE.Sprite(material);
      const size = 0.28 + Math.random() * 0.55;
      sprite.scale.set(size * 0.67, size, 1);
      resetPetal(sprite, true);
      sprite.userData.speed = 0.0015 + Math.random() * 0.003;
      sprite.userData.sway = 0.2 + Math.random() * 0.4;
      sprite.userData.phase = Math.random() * Math.PI * 2;
      scene.add(sprite);
      petals.push(sprite);
    }

    const pointer = { x: 0, y: 0 };
    hero.addEventListener('pointermove', (event) => {
      const rect = hero.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width - 0.5) * 0.45;
      pointer.y = ((event.clientY - rect.top) / rect.height - 0.5) * 0.28;
    }, { passive: true });
    hero.addEventListener('pointerleave', () => {
      pointer.x = 0;
      pointer.y = 0;
    });

    const resize = () => {
      const rect = hero.getBoundingClientRect();
      const width = Math.max(1, rect.width);
      const height = Math.max(1, rect.height);
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(hero);
    resize();

    let last = performance.now();
    const animate = (now) => {
      requestAnimationFrame(animate);
      if (!heroInView || !pageVisible) {
        last = now;
        return;
      }

      const delta = Math.min(34, now - last);
      last = now;
      const t = now * 0.001;

      camera.position.x += (pointer.x - camera.position.x) * 0.018;
      camera.position.y += (-pointer.y - camera.position.y) * 0.018;

      petals.forEach((petal, index) => {
        petal.position.y -= petal.userData.speed * delta;
        petal.position.x += Math.sin(t * 0.7 + petal.userData.phase + index) * 0.0007 * petal.userData.sway * delta;
        petal.material.rotation += (index % 2 ? 1 : -1) * 0.00035 * delta;
        if (petal.position.y < -4.8) resetPetal(petal, false);
      });

      renderer.render(scene, camera);
    };

    requestAnimationFrame(animate);

    function resetPetal(petal, initial) {
      petal.position.x = -6.3 + Math.random() * 12.6;
      petal.position.y = initial ? -4.2 + Math.random() * 8.7 : 4.4 + Math.random() * 1.8;
      petal.position.z = -1.5 + Math.random() * 3;
      petal.material.rotation = Math.random() * Math.PI * 2;
    }
  }
})();
