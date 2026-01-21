import React, { useEffect, useState, useRef } from "react";

const SplashPage = ({ onFinish }) => {
  const [isExiting, setIsExiting] = useState(false);
  const [progress, setProgress] = useState(0);
  const mountRef = useRef(null);
  const sceneRef = useRef({});

  // Function to trigger animation
  const playAnimation = (animationName) => {
    const { mixer, actions, activeAction } = sceneRef.current;

    if (!mixer || !actions[animationName]) return;

    const newAction = actions[animationName];

    if (activeAction) {
      activeAction.fadeOut(0.3);
    }

    newAction
      .reset()
      .setEffectiveTimeScale(1)
      .setEffectiveWeight(1)
      .fadeIn(0.3)
      .play();

    sceneRef.current.activeAction = newAction;
  };

  // Initialize 3D scene
  useEffect(() => {
    const initThree = async () => {
      const THREE = await import("three");
      const { GLTFLoader } =
        await import("three/examples/jsm/loaders/GLTFLoader.js");

      if (!mountRef.current) return;

      // Clear any existing children
      while (mountRef.current.firstChild) {
        mountRef.current.removeChild(mountRef.current.firstChild);
      }

      let renderer,
        scene,
        camera,
        model,
        mixer,
        activeAction,
        previousAction,
        clock;
      const actions = {};

      // Scene setup
      scene = new THREE.Scene();
      scene.background = new THREE.Color(0xe0e0e0);
      scene.fog = new THREE.Fog(0xe0e0e0, 20, 100);

      camera = new THREE.PerspectiveCamera(
        45,
        mountRef.current.clientWidth / mountRef.current.clientHeight,
        0.25,
        100,
      );
      camera.position.set(-5, 3, 10);
      camera.lookAt(0, 2, 0);

      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: false,
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(
        mountRef.current.clientWidth,
        mountRef.current.clientHeight,
      );
      mountRef.current.appendChild(renderer.domElement);

      clock = new THREE.Clock();

      // Lights
      const hemiLight = new THREE.HemisphereLight(0xffffff, 0x8d8d8d, 3);
      hemiLight.position.set(0, 20, 0);
      scene.add(hemiLight);

      const dirLight = new THREE.DirectionalLight(0xffffff, 3);
      dirLight.position.set(0, 20, 10);
      scene.add(dirLight);

      // Ground
      const mesh = new THREE.Mesh(
        new THREE.PlaneGeometry(2000, 2000),
        new THREE.MeshPhongMaterial({ color: 0xcbcbcb, depthWrite: false }),
      );
      mesh.rotation.x = -Math.PI / 2;
      scene.add(mesh);

      const grid = new THREE.GridHelper(200, 40, 0x000000, 0x000000);
      grid.material.opacity = 0.2;
      grid.material.transparent = true;
      scene.add(grid);

      // Load model with animations
      const loader = new GLTFLoader();
      let modelLoaded = false;

      loader.load(
        "models/RobotExpressive.glb",
        function (gltf) {
          modelLoaded = true;
          model = gltf.scene;
          scene.add(model);

          // Setup animation mixer
          mixer = new THREE.AnimationMixer(model);

          // Create action map for all animations
          for (let i = 0; i < gltf.animations.length; i++) {
            const clip = gltf.animations[i];
            const action = mixer.clipAction(clip);
            actions[clip.name] = action;

            // Setup looping and clamping for specific animations
            const emotes = ["Jump", "Yes", "No", "Wave", "Punch", "ThumbsUp"];
            const states = [
              "Idle",
              "Walking",
              "Running",
              "Dance",
              "Death",
              "Sitting",
              "Standing",
            ];

            if (
              emotes.indexOf(clip.name) >= 0 ||
              states.indexOf(clip.name) >= 4
            ) {
              action.clampWhenFinished = true;
              action.loop = THREE.LoopOnce;
            }
          }

          // Start with Running animation
          if (actions["Running"]) {
            activeAction = actions["Running"];
            activeAction.play();
          } else if (gltf.animations.length > 0) {
            activeAction = mixer.clipAction(gltf.animations[0]);
            activeAction.play();
          }

          console.log("Model loaded successfully");
        },
        undefined,
        function (error) {
          console.error("Failed to load model:", error);
          // Fallback to colored cube if model fails to load
          const geometry = new THREE.BoxGeometry(3, 3, 3);
          const material = new THREE.MeshPhongMaterial({
            color: 0x4f46e5,
            shininess: 100,
          });
          model = new THREE.Mesh(geometry, material);
          scene.add(model);
        },
      );

      // Mouse tracking for model movement
      let mouseX = 0;
      let mouseY = 0;
      let targetX = 0;
      let targetY = 0;

      const handleMouseMove = (event) => {
        mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
        targetX = mouseX * 5; // Adjust multiplier to control movement range
        targetY = mouseY * 2;
      };

      window.addEventListener("mousemove", handleMouseMove);

      // Animation loop
      let animationFrameId;
      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        const dt = clock.getDelta();

        // Smooth model movement following cursor
        if (model) {
          model.position.x += (targetX - model.position.x) * 0.1;
          model.position.y += (targetY - model.position.y) * 0.05;
        }

        if (mixer) {
          mixer.update(dt);
        } else if (model && !modelLoaded) {
          // Fallback cube rotation
          model.rotation.x += 0.005;
          model.rotation.y += 0.007;
        }

        renderer.render(scene, camera);
      };
      animate();

      // Handle window resize
      const handleResize = () => {
        if (!mountRef.current) return;
        const width = mountRef.current.clientWidth;
        const height = mountRef.current.clientHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
        window.removeEventListener("mousemove", handleMouseMove);
        cancelAnimationFrame(animationFrameId);
        renderer.dispose();
      };
    };

    const cleanup = initThree();

    return () => {
      cleanup.then((cleanupFn) => {
        if (cleanupFn) cleanupFn();
      });
    };
  }, []);

  // Progress and timer
  useEffect(() => {
    const startTime = Date.now();
    const duration = 500; // 10 seconds

    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const currentProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(currentProgress);

      if (currentProgress >= 100) {
        clearInterval(progressInterval);
        setIsExiting(true);
        setTimeout(() => {
          onFinish();
        }, 900);
      }
    }, 50);

    return () => clearInterval(progressInterval);
  }, []);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 z-50 transition-all duration-700 ${
        isExiting ? "translate-y-[-100%]" : "translate-y-0"
      }`}
    >
      {/* 3D Canvas */}
      <div
        ref={mountRef}
        className="absolute inset-0"
        style={{ width: "100%", height: "100%" }}
      ></div>

      {/* Animated background elements */}

      {/* Content Overlay */}
      <div className="relative z-10 text-center px-8 flex flex-col items-center justify-center h-full">
        {/* Logo/Title Animation */}
        <div
          className="mb-30 w-full text-center"
          style={{
            animation: "slideInDown 0.8s ease-out forwards",
          }}
        >
          <h1 className="text-2xl sm:text-7xl md:text-5xl font-bold text-white">
            <span
              className="text-[#120c08d2] font-extrabold block"
              style={{ fontFamily: "'BBH Bartle', sans-serif" }}
            >
              ABDULLAH
            </span>
            <span
              className="font-[BBH Bartle] text-[#D89E41] block"
              style={{ fontFamily: "'BBH Bartle', sans-serif" }}
            >
              PORTFOLIO
            </span>
          </h1>
        </div>

        {/* Subtitle Animation */}

        {/* Loading Bar */}
        <div
          className="w-64 md:w-80 mt-63"
          style={{
            animation: "slideInUp 0.8s ease-out 0.4s forwards",
            opacity: 0,
          }}
        >
          <div className="flex items-center justify-between ">
            <span className="text-black text-sm font-medium">Loading..</span>
            <span className="text-black text-sm font-medium">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="w-full h-5 bg-transparent border-2 border-gray-300  rounded-full overflow-hidden">
            <div
              className="h-full bg-[#d89e41d8]  transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Loading Text */}
        <div
          className="text-black text-sm font-light mt-2"
          style={{
            animation: "slideInUp 0.8s ease-out 0.6s forwards",
            opacity: 0,
          }}
        >
          Initializing...
        </div>
      </div>

      <style>{`
        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default SplashPage;
