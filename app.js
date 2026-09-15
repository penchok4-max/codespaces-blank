const destinations = [
  { name: "🇫🇷 프랑스 파리", desc: "에펠탑과 로맨틱한 거리 산책" },
  { name: "🇯🇵 일본 도쿄", desc: "화려한 야경과 맛있는 식도락 여행" },
  { name: "🇺🇸 미국 하와이", desc: "푸른 바다와 여유로운 휴양" },
  { name: "🇮🇹 이탈리아 로마", desc: "고대 역사 유적과 맛있는 파스타" },
  { name: "🇪🇸 스페인 바르셀로나", desc: "가우디 건축물과 활기찬 해변" },
  { name: "🇨🇭 스위스 인터라켄", desc: "웅장한 알프스 산맥의 자연 경관" },
  { name: "🇹🇭 태국 방콕", desc: "화려한 사원과 신나는 야시장" },
  { name: "🇦🇺 호주 시드니", desc: "오페라 하우스와 아름다운 항구도시" }
];

function throwDart() {
  const pin = document.getElementById('dartPin');
  const card = document.getElementById('resultCard');
  const destName = document.getElementById('destName');
  const destDesc = document.getElementById('destDesc');

  pin.classList.remove('active');
  card.classList.remove('show');

  const radius = 120;
  const angle = Math.random() * Math.PI * 2;
  const distance = Math.random() * radius;

  const x = 150 + distance * Math.cos(angle);
  const y = 150 + distance * Math.sin(angle);

  setTimeout(() => {
    pin.style.left = `${x}px`;
    pin.style.top = `${y}px`;
    pin.classList.add('active');

    const randomIndex = Math.floor(Math.random() * destinations.length);
    const selected = destinations[randomIndex];

    destName.textContent = selected.name;
    destDesc.textContent = selected.desc;
    card.classList.add('show');
  }, 200);
}