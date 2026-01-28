# m-hooks

React 커스텀 훅 컬렉션

## 설치

```bash
npm install github:Mineru98/m-hooks
```

## 훅 목록

### useRemoveUnicornWatermark

Unicorn Studio 임베드의 워터마크 링크를 자동으로 제거합니다.

```tsx
import { useRemoveUnicornWatermark } from 'm-hooks';

function MyComponent() {
  useRemoveUnicornWatermark();

  return (
    <div data-us-project="your-project-id" style={{ width: '100%', height: '500px' }} />
  );
}
```

## 개발

```bash
# 의존성 설치
npm install

# 빌드
npm run build
```

## 라이선스

MIT
