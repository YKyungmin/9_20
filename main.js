//이미지를 동적으로 200 개 생성
//이미지 소스 로딩이 될때가 에러가  발생하는 시스템 이벤트 설정
//브라우저에서 마우스 움직일때마다 마우스 좌표값 구하기
//특정 수치값을 백분율화 하는 로직 처리
//이미지소스가 모두 로딩되는 상태를 백분율로 변환

//img 노드 생성
//속성 노드 생성
//src 속성 노드에 value = img/pic0100.jpg
//위의 100번을 반복을 돌리면서
//append로 이미지 요소 반복 추가

const section = document.querySelector('section');

for (let ret = 0; ret <= 200; ret++) {
	const img = document.createElement('img');
	const src = document.createAttribute('src');

	src.value = `img/pic${ret}.jpg`;

	img.setAttributeNode(src);

	section.append(img);
}
