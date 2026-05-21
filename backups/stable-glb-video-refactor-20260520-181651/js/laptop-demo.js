/* ══════════════════════════════════════════
   VIDEO DEMO — MACBOOK CINEMA
   Telescope entry + scroll-driven video + chapters
══════════════════════════════════════════ */
(function () {
function initVideoScroll() {
  const outer      = document.getElementById('video-demo');
  const video      = document.getElementById('demo-video');
  if (!outer || !video) return;

  const modelStage = document.getElementById('vd-model-stage');
  const modelCanvas = document.getElementById('vd-model-canvas');
  const topbarFill  = document.getElementById('vd-topbar-fill');
  const lineFill    = document.getElementById('vd-line-fill');
  const laptopWrap  = document.getElementById('vd-laptop-wrap');
  const orbTeal     = outer.querySelector('.vd-orb-teal');
  const orbOrange   = outer.querySelector('.vd-orb-orange');
  const steps       = Array.from(outer.querySelectorAll('.vd-step'));
  const badges      = Array.from(outer.querySelectorAll('.vd-step-badge'));
  const pill        = document.getElementById('vd-step-pill');
  const counter     = document.getElementById('vd-step-counter');

  const VIDEO_DEMO_CONFIG = Object.freeze({
    endCloseProgress: 0.92,
    openScrollProgress: 0.80,
    chapterStart: 0.14,
    chapterSpan: 0.62,
    screenPlaneWidthScale: 1.015,
    videoTextureOverscan: 1.16,
    modelScaleTarget: 4.6,
    modelXOffset: 0.75,
    modelYOffset: -0.16,
    modelLift: 0.05,
    cameraTransition: 0.20,
    cameraStartY: 4.2,
    cameraEndY: 0.78,
    cameraEndZ: 3.95,
    cameraZoomY: 1.05,
    cameraZoomZ: 2.0,
    zoomInStart: 0.32,
    zoomInEnd: 0.48,
    zoomOutStart: 0.74,
    zoomOutEnd: 0.80,
  });

  const STEPS = [
    { orange: false },
    { orange: false },
    { orange: false },
    { orange: true  },
  ];

  let activeIdx = -1;
  let laptopScene = null;
  let latestDriverProgress = 0;
  let shouldCloseAtEnd = false;
  const END_CLOSE_PROGRESS = VIDEO_DEMO_CONFIG.endCloseProgress;
  const OPEN_SCROLL_PROGRESS = VIDEO_DEMO_CONFIG.openScrollProgress;

  function setStep(idx) {
    if (idx === activeIdx) return;
    const prevIdx = activeIdx;
    activeIdx = idx;

    if (!steps[idx]) return;

    /* Fade out previous step */
    if (prevIdx >= 0 && steps[prevIdx]) {
      gsap.killTweensOf(steps[prevIdx]);
      gsap.to(steps[prevIdx], {
        opacity: 0, duration: 0.2, ease: 'power2.in',
        onComplete: () => steps[prevIdx].classList.remove('is-active')
      });
    }

    /* Fade in new step */
    steps[idx].classList.add('is-active');
    gsap.killTweensOf(steps[idx]);
    gsap.fromTo(steps[idx],
      { opacity: 0 },
      { opacity: 1, duration: 0.35, ease: 'power2.out', delay: 0.15 }
    );

    /* Update badge active states */
    badges.forEach((b, i) => b.classList.toggle('is-active', i === idx));

    /* Update counter */
    if (counter) {
      const num = String(idx + 1).padStart(2, '0');
      const sep = counter.querySelector('.vd-step-counter-sep');
      counter.firstChild.textContent = num + ' ';
      if (sep) sep.nextSibling.textContent = ' 04';
    }

    /* Arc animation: pill moves from old badge to new badge */
    if (pill && badges[idx]) {
      const indicators = document.getElementById('vd-step-indicators');
      const containerLeft = indicators ? indicators.getBoundingClientRect().left : 0;
      const badgeRect = badges[idx].getBoundingClientRect();
      const toX = badgeRect.left - containerLeft;

      gsap.killTweensOf(pill);
      gsap.to(pill, { x: toX, duration: 0.45, ease: 'none' });
      gsap.to(pill, { y: -28, duration: 0.22, ease: 'power2.out',
        onComplete: () => gsap.to(pill, { y: 0, duration: 0.22, ease: 'power2.in' })
      });
    }

    const warm = STEPS[idx] ? STEPS[idx].orange : false;
    gsap.to(orbTeal,   { opacity: warm ? 0.4 : 1, duration: 1.4, ease: 'power2.inOut' });
    gsap.to(orbOrange, { opacity: warm ? 1   : 0, duration: 1.4, ease: 'power2.inOut' });

    const glow = warm
      ? 'drop-shadow(0 40px 100px rgba(0,0,0,0.75)) drop-shadow(0 0 80px rgba(255,122,24,0.12))'
      : 'drop-shadow(0 40px 100px rgba(0,0,0,0.75)) drop-shadow(0 0 80px rgba(52,209,191,0.10))';
    gsap.to(laptopWrap, { filter: glow, duration: 1.4, ease: 'power2.inOut' });
  }

  async function initLaptopScene() {
    if (!modelStage || !modelCanvas) return null;

    const modelSrc = modelStage.dataset.modelSrc;
    const videoSrc = modelStage.dataset.videoSrc;
    if (videoSrc && video.getAttribute('src') !== videoSrc) video.setAttribute('src', videoSrc);

    try {
      const [THREE, { GLTFLoader }] = await Promise.all([
        import('three'),
        import('three/addons/loaders/GLTFLoader.js'),
      ]);

      const renderer = new THREE.WebGLRenderer({
        canvas: modelCanvas,
        alpha: true,
        antialias: true,
        preserveDrawingBuffer: true,
        powerPreference: 'high-performance',
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 0.82;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
      camera.position.set(0, 0.78, 3.95);

      scene.add(new THREE.HemisphereLight(0xbfd7ff, 0x03070b, 0.72));

      const keyLight = new THREE.DirectionalLight(0xffffff, 0.52);
      keyLight.position.set(2.8, 3.8, 4.5);
      scene.add(keyLight);

      const fillLight = new THREE.DirectionalLight(0x8fb6d9, 0.24);
      fillLight.position.set(-3.4, 1.6, -2.2);
      scene.add(fillLight);

      const videoTexture = new THREE.VideoTexture(video);
      videoTexture.colorSpace = THREE.SRGBColorSpace;
      videoTexture.minFilter = THREE.LinearFilter;
      videoTexture.magFilter = THREE.LinearFilter;
      video.addEventListener('seeked', () => {
        videoTexture.needsUpdate = true;
      });

      const loader = new GLTFLoader();
      const gltf = await loader.loadAsync(modelSrc);
      const model = gltf.scene;
      model.rotation.set(0.08, -0.32, 0.02);

      const screenMaterial = new THREE.MeshBasicMaterial({
        map: videoTexture,
        toneMapped: false,
        depthTest: false,
        side: THREE.FrontSide,
      });

      let screenMesh = null;
      function normalizeLaptopMaterial(material) {
        if (!material) return material;
        const normalized = material.clone();
        if (material.name === 'KeyPBR') {
          normalized.color.set(0x05070b);
          normalized.metalness = 0;
          normalized.roughness = 0.78;
        } else if (material.name === 'AluPBR') {
          normalized.color.set(0x010304);
          normalized.metalness = 0.02;
          normalized.roughness = 0.94;
        } else if (material.name === 'PrtPBR') {
          normalized.color.set(0x05080c);
          normalized.metalness = 0.35;
          normalized.roughness = 0.8;
        } else if (material.name === 'RubPBR' || material.name === 'TrackPBR' || material.name === 'SpkPBR') {
          normalized.color.set(0x020304);
          normalized.metalness = 0;
          normalized.roughness = 0.9;
        } else if (material.name === 'HngPBR') {
          normalized.color.set(0x111820);
          normalized.metalness = 0.5;
          normalized.roughness = 0.42;
        }
        return normalized;
      }

      model.traverse((child) => {
        if (!child.isMesh) return;
        child.frustumCulled = false;
        const materials = Array.isArray(child.material) ? child.material : [child.material];
        if (materials.some((material) => material && material.name === 'ScreenCinematic')) {
          screenMesh = child;
          const softenedMaterials = materials.map((material) => {
            const softened = material.clone();
            softened.transparent = true;
            softened.opacity = 0;
            softened.depthWrite = false;
            return softened;
          });
          child.material = Array.isArray(child.material) ? softenedMaterials : softenedMaterials[0];
        } else {
          const normalizedMaterials = materials.map(normalizeLaptopMaterial);
          child.material = Array.isArray(child.material) ? normalizedMaterials : normalizedMaterials[0];
        }
      });

      if (!screenMesh) {
        modelStage.classList.add('is-fallback');
        return null;
      }

      screenMesh.geometry.computeBoundingBox();
      const screenBox = screenMesh.geometry.boundingBox;
      const screenCenter = screenBox.getCenter(new THREE.Vector3());
      const screenSize = screenBox.getSize(new THREE.Vector3());
      const videoAspect = (video.videoWidth && video.videoHeight) ? video.videoWidth / video.videoHeight : 16 / 9;
      const VIDEO_TEXTURE_OVERSCAN = VIDEO_DEMO_CONFIG.videoTextureOverscan;
      const screenPlaneWidth = screenSize.x * VIDEO_DEMO_CONFIG.screenPlaneWidthScale;
      const screenPlaneHeight = screenPlaneWidth / videoAspect;
      function fitVideoTextureToScreen() {
        const screenAspect = screenPlaneWidth / screenPlaneHeight;
        const videoAspect = (video.videoWidth && video.videoHeight) ? video.videoWidth / video.videoHeight : 16 / 9;
        if (videoAspect > screenAspect) {
          videoTexture.repeat.set(screenAspect / videoAspect, 1);
          videoTexture.offset.set((1 - videoTexture.repeat.x) / 2, 0);
        } else {
          videoTexture.repeat.set(1, videoAspect / screenAspect);
          videoTexture.offset.set(0, (1 - videoTexture.repeat.y) / 2);
        }
        videoTexture.repeat.set(videoTexture.repeat.x / VIDEO_TEXTURE_OVERSCAN, videoTexture.repeat.y / VIDEO_TEXTURE_OVERSCAN);
        videoTexture.offset.set((1 - videoTexture.repeat.x) / 2, (1 - videoTexture.repeat.y) / 2);
        videoTexture.needsUpdate = true;
      }
      fitVideoTextureToScreen();
      video.addEventListener('loadedmetadata', fitVideoTextureToScreen);
      const videoPlane = new THREE.Mesh(
        new THREE.PlaneGeometry(screenPlaneWidth, screenPlaneHeight),
        screenMaterial
      );
      videoPlane.name = 'OpenCodieVideoTextureScreen';
      videoPlane.position.set(screenCenter.x, screenBox.max.y + 0.12, screenCenter.z);
      videoPlane.rotation.x = Math.PI / 2;
      videoPlane.renderOrder = 20;
      videoPlane.visible = false;
      screenMesh.add(videoPlane);

      scene.add(model);

      const bounds = new THREE.Box3().setFromObject(model);
      const center = bounds.getCenter(new THREE.Vector3());
      const size = bounds.getSize(new THREE.Vector3());
      const scale = VIDEO_DEMO_CONFIG.modelScaleTarget / Math.max(size.x, size.y, size.z);
      model.scale.setScalar(scale);
      const modelBasePosition = new THREE.Vector3(
        (-center.x * scale) + VIDEO_DEMO_CONFIG.modelXOffset,
        VIDEO_DEMO_CONFIG.modelYOffset,
        -center.z * scale
      );
      model.position.copy(modelBasePosition);

      const mixer = new THREE.AnimationMixer(model);
      const actions = gltf.animations.map((clip) => mixer.clipAction(clip));
      actions.forEach((action) => {
        action.loop = THREE.LoopOnce;
        action.clampWhenFinished = true;
        action.play();
      });
      const animationDuration = Math.max(1, ...gltf.animations.map((clip) => clip.duration || 0));

      const CAM_TRANSITION = VIDEO_DEMO_CONFIG.cameraTransition;
      const camStartPos  = new THREE.Vector3(modelBasePosition.x, VIDEO_DEMO_CONFIG.cameraStartY, modelBasePosition.z);
      const camEndPos    = new THREE.Vector3(0, VIDEO_DEMO_CONFIG.cameraEndY, VIDEO_DEMO_CONFIG.cameraEndZ);
      const camZoomPos   = new THREE.Vector3(0, VIDEO_DEMO_CONFIG.cameraZoomY, VIDEO_DEMO_CONFIG.cameraZoomZ);
      const camStartQuat = new THREE.Quaternion().setFromEuler(new THREE.Euler(-Math.PI / 2, 0, 0));
      const camEndQuat   = new THREE.Quaternion();
      const ZOOM_IN_S = VIDEO_DEMO_CONFIG.zoomInStart, ZOOM_IN_E = VIDEO_DEMO_CONFIG.zoomInEnd;
      const ZOOM_OUT_S = VIDEO_DEMO_CONFIG.zoomOutStart, ZOOM_OUT_E = VIDEO_DEMO_CONFIG.zoomOutEnd;

      const clock = new THREE.Clock();
      let scrollProgress = 0;
      let closedOverride = false;
      let overrideProgress = 0; // used when closedOverride=true, tweens smoothly to 0
      let returnTween = null;
      let renderRequested = true;
      let idleTime = animationDuration * 0.25;
      let lastVideoTarget = -1;
      let videoPlaybackWanted = false;
      let frameHandle = null;

      function releaseOverride() {
        if (returnTween) {
          returnTween.kill();
          returnTween = null;
        }
        closedOverride = false;
        overrideProgress = 0;
        renderRequested = true;
        requestRender();
      }

      function updateVideoPlayback(lidT) {
        const shouldPlay = lidT > 0.18 && !closedOverride;
        if (shouldPlay === videoPlaybackWanted) return;
        videoPlaybackWanted = shouldPlay;
        if (shouldPlay) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      }

      function resize() {
        const rect = modelStage.getBoundingClientRect();
        const width = Math.max(1, Math.floor(rect.width));
        const height = Math.max(1, Math.floor(rect.height));
        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderRequested = true;
        requestRender();
      }

      function requestRender() {
        if (frameHandle !== null) return;
        frameHandle = requestAnimationFrame(render);
      }

      function render() {
        frameHandle = null;
        renderRequested = false;
        const delta = clock.getDelta();
        idleTime += delta;

        const displayProgress = Math.min(scrollProgress, OPEN_SCROLL_PROGRESS);
        const dp = closedOverride ? overrideProgress : displayProgress;
        const camT = Math.min(1, dp / CAM_TRANSITION);

        const camEase = camT * camT * (3 - 2 * camT);
        camera.position.lerpVectors(camStartPos, camEndPos, camEase);
        camera.quaternion.slerpQuaternions(camStartQuat, camEndQuat, camEase);

        // Zoom in to screen during video playback, zoom out before lid closes
        if (camT >= 1 && !closedOverride) {
          let zoomT = 0;
          if (dp >= ZOOM_IN_S && dp < ZOOM_IN_E) {
            zoomT = (dp - ZOOM_IN_S) / (ZOOM_IN_E - ZOOM_IN_S);
          } else if (dp >= ZOOM_IN_E && dp <= ZOOM_OUT_S) {
            zoomT = 1;
          } else if (dp > ZOOM_OUT_S && dp <= ZOOM_OUT_E) {
            zoomT = 1 - (dp - ZOOM_OUT_S) / (ZOOM_OUT_E - ZOOM_OUT_S);
          }
          zoomT = zoomT * zoomT * (3 - 2 * zoomT);
          camera.position.lerpVectors(camEndPos, camZoomPos, zoomT);
        }

        const lidT = Math.max(0, Math.min(1, (dp - CAM_TRANSITION) / (OPEN_SCROLL_PROGRESS - CAM_TRANSITION)));
        const scrubTime = Math.max(0, Math.min(animationDuration, lidT * animationDuration));
        actions.forEach(a => { a.paused = false; a.time = scrubTime; });
        mixer.update(0);
        actions.forEach(a => { a.paused = true; });

        // X tilt snaps in as lid opens (first 30% of lid travel)
        const tiltT = Math.min(1, lidT / 0.3);
        const tiltEase = tiltT * tiltT * (3 - 2 * tiltT);
        const endStraightenT = closedOverride ? Math.max(0, Math.min(1, (overrideProgress - OPEN_SCROLL_PROGRESS) / (1 - OPEN_SCROLL_PROGRESS))) : 0;
        camera.position.lerp(camStartPos, endStraightenT);
        camera.quaternion.slerp(camStartQuat, endStraightenT);
        model.rotation.y = 0;
        model.rotation.x = 0.28 * tiltEase * (1 - endStraightenT);
        model.rotation.z = 0;
        model.position.set(
          modelBasePosition.x,
          modelBasePosition.y + VIDEO_DEMO_CONFIG.modelLift,
          modelBasePosition.z
        );

        videoPlane.visible = lidT > 0.18;
        updateVideoPlayback(lidT);
        videoTexture.needsUpdate = true;
        renderer.render(scene, camera);
        if (videoPlaybackWanted || returnTween || renderRequested) requestRender();
      }

      resize();
      new ResizeObserver(resize).observe(modelStage);
      requestRender();

      video.loop = true;

      return {
        setProgress(progress) {
          if (closedOverride) {
            scrollProgress = gsap.utils.clamp(0, 1, progress);
            renderRequested = true;
            requestRender();
            return;
          }
          scrollProgress = gsap.utils.clamp(0, 1, progress);
          const videoProgress = Math.min(scrollProgress, OPEN_SCROLL_PROGRESS);
          const lidT = Math.max(0, Math.min(1, (videoProgress - CAM_TRANSITION) / (OPEN_SCROLL_PROGRESS - CAM_TRANSITION)));
          if (video.duration && isFinite(video.duration) && !video.seeking) {
            const targetTime = Math.min(video.duration - 0.05, lidT * video.duration);
            const seekableEnd = video.seekable.length ? video.seekable.end(video.seekable.length - 1) : 0;
            if (seekableEnd >= targetTime && Math.abs(lastVideoTarget - targetTime) > 0.18) {
              video.currentTime = targetTime;
              lastVideoTarget = targetTime;
            }
          }
          renderRequested = true;
          requestRender();
        },
        getScrollProgress() { return scrollProgress; },
        isOverrideActive() { return closedOverride; },
        releaseOverride,
        setOverride(v) {
          if (!v) {
            releaseOverride();
            return;
          }
          if (returnTween) {
            returnTween.kill();
            returnTween = null;
          }
          closedOverride = v;
          overrideProgress = scrollProgress;
          renderRequested = true;
          requestRender();
        },
        tweenToStart() {
          if (closedOverride) return;
          if (returnTween) returnTween.kill();
          closedOverride = true;
          overrideProgress = OPEN_SCROLL_PROGRESS;
          const proxy = { p: OPEN_SCROLL_PROGRESS };
          returnTween = gsap.to(proxy, {
            p: 1,
            duration: 0.9,
            ease: 'power2.inOut',
            onUpdate() { overrideProgress = proxy.p; renderRequested = true; requestRender(); },
            onComplete() { overrideProgress = 1; returnTween = null; renderRequested = true; requestRender(); },
          });
          requestRender();
        },
      };
    } catch (error) {
      console.error('Could not load 3D laptop demo', error);
      modelStage.classList.add('is-fallback');
      return null;
    }
  }

  initLaptopScene().then((sceneController) => {
    laptopScene = sceneController;
    if (!laptopScene) return;
    laptopScene.setProgress(latestDriverProgress);
    if (shouldCloseAtEnd) laptopScene.tweenToStart();
  });

  /* Entrance — laptop drifts in as section scrolls into view.
     y starts at 48 so the initial layout position is the baseline (y:0). */
  gsap.set(laptopWrap, { y: 0 });
  gsap.fromTo(laptopWrap,
    { opacity: 0, y: 48, scale: 0.94 },
    { opacity: 1, y: 0,  scale: 1, ease: 'power2.out',
      scrollTrigger: { trigger: outer, start: 'top 80%', end: 'top 15%', scrub: 1 }
    }
  );

  /* Initialize pill on badge 0 */
  if (pill && badges[0]) {
    badges[0].classList.add('is-active');
    gsap.set(pill, { x: 0, y: 0 });
  }
  setStep(0);

  function attachDriver() {
    const duration = video.duration;
    if (!duration || !isFinite(duration)) {
      video.addEventListener('loadedmetadata', attachDriver, { once: true });
      return;
    }
    ScrollTrigger.create({
      trigger: outer,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.6,
      onUpdate(self) {
        const p = gsap.utils.clamp(0, 1, (window.scrollY - self.start) / (self.end - self.start));
        const scrubbedP = self.progress;
        const scrollingBack = self.direction < 0;
        latestDriverProgress = p;
        shouldCloseAtEnd = p >= END_CLOSE_PROGRESS;
        if (laptopScene) {
          if (p >= END_CLOSE_PROGRESS && !scrollingBack) {
            laptopScene.tweenToStart();
          } else {
            if (laptopScene.isOverrideActive()) laptopScene.releaseOverride();
            laptopScene.setProgress(p);
          }
        }
        if (topbarFill) topbarFill.style.width = (p * 100) + '%';
        if (lineFill) lineFill.style.height = (p * 100) + '%';
        const contentP = Math.max(0, Math.min(1, (scrubbedP - VIDEO_DEMO_CONFIG.chapterStart) / VIDEO_DEMO_CONFIG.chapterSpan));
        setStep(Math.min(3, Math.floor(contentP * 4)));
      },
      onLeaveBack() {
        shouldCloseAtEnd = false;
        latestDriverProgress = 0;
        if (laptopScene) { laptopScene.releaseOverride(); laptopScene.setProgress(0); }
        if (topbarFill) topbarFill.style.width = '0%';
        setStep(0);
      },
      onEnterBack(self) {
        shouldCloseAtEnd = false;
        latestDriverProgress = self.progress;
        if (laptopScene) { laptopScene.releaseOverride(); laptopScene.setProgress(self.progress); }
      },
      onLeave() {
        shouldCloseAtEnd = true;
        latestDriverProgress = 1;
        if (laptopScene) laptopScene.tweenToStart();
        if (topbarFill) topbarFill.style.width = '0%';
        setStep(0);
      }
    });
  }

  if (video.readyState >= 1) {
    attachDriver();
  } else {
    video.addEventListener('loadedmetadata', attachDriver, { once: true });
  }
}

window.OpenCodieLaptopDemo = Object.freeze({ initVideoScroll });
})();
