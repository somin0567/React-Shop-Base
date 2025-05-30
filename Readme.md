# React Shop

## 디렉토리 구조

src
├── assets
├── components
│   ├── carts
│   │   ├── CartList.tsx
│   │   └── CartView.tsx
│   ├── common
│   │   ├── Breadcrumb.tsx
│   │   ├── Confirm.tsx
│   │   ├── DarkMode.tsx # 달(해) 버튼을 눌렀을 때 다크모드 토글 로직
│   │   ├── Drawer.tsx
│   │   ├── ItemList.tsx # 홈 화면과 각 카테고리의 페이지에서 아이템 리스트 출력 로직, 홈 화면에서는 모바일 화면에서 가로 스크롤이 가능하고, 카테고리 페이지에서는 가로 스크롤 기능이 없음
│   │   ├── Rating.tsx
│   │   ├── Search.tsx # 제품명을 타이핑할 때마다 검색하는 제품 결과 목록을 출력하는 로직
│   │   └── Slider.tsx
│   ├── footer # footer의 view
│   ├── nav # nav의 view
│   └── products
│      ├── ProductsList.tsx # 제품 상세 페이지로 데이터를 가져오는 파일, AddToCart 핸들러 포함
│      ├── ProductsLoad.tsx
│      ├── ProductsView.tsx # 제품 상세 페이지 UI
│      └── ProductsViewLoad.tsx
├── constants
├── helpers
├── router
├── store
│   ├── cart.ts
│   ├── index.ts
│   ├── products.ts
│   └── productsSlice.ts #products.ts 대신 redux 사용하여 API 통신하는 파일
└── views # 각 페이지의 view 컴포넌트 파일

## Cart

Cart 기능을 구현하면서 기록한 내용을 남깁니다.

Cart.ts
CartList.tsx
CartView.tsx

## Vercel

### 배포 단계

-

### 배포 주소
