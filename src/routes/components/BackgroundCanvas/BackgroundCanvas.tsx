import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';

const BackgroundCanvas = component$(() => {
  const canvas = useSignal<HTMLCanvasElement>();
  const canvasWidth = useSignal(0);
  const canvasHeight = useSignal(0);
  useVisibleTask$(({ track }) => {
    track(() => canvas.value);
    const width = window.innerWidth * 2;
    const height = window.innerHeight * 2 + 200;
    canvasWidth.value = width;
    canvasHeight.value = height;
    const ctx = canvas.value?.getContext('2d');
    if (!ctx) return;
    const canvasSize = width + height;
    const stars: {
      size: number;
      x: number;
      y: number;
      speedX: number;
      speedY: number;
    }[] = [];
    const numStars = canvasSize / 25;

    // 별의 초기 위치와 속도 설정
    for (let i = 0; i < numStars; i++) {
      const size = Math.random() > 0.3 ? 1 : 2;
      stars.push({
        size,
        x: Math.random() * width,
        y: Math.random() * height,
        speedX: (Math.random() - 0.5) * 2,
        speedY: (Math.random() - 0.5) * 2,
      });
    }

    function draw() {
      ctx!.clearRect(0, 0, width, height);
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        ctx!.fillStyle = 'white';
        ctx!.fillRect(star.x, star.y, star.size, star.size);

        // 별 이동
        star.x += star.speedX;
        star.y += star.speedY;

        // 화면 경계 체크 (반대편으로 나타나게 함)
        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;
        if (star.y < 0) star.y = height;
        if (star.y > height) star.y = 0;
      }
      requestAnimationFrame(draw);
    }
    draw();
  });
  if (canvasWidth.value <= 0) {
    return null;
  }
  return (
    <canvas
      ref={canvas}
      width={canvasWidth.value}
      height={canvasHeight.value}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: canvasWidth.value / 2,
        height: canvasHeight.value / 2,
        pointerEvents: 'none',
      }}
    />
  );
});

export default BackgroundCanvas;
