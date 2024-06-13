# Nestjs ?

NestJS는 Node.js 환경에서 server-side application 을 구축하기 위한 FrameWork로, Express를 default HTTP server FrameWork로 사용합니다. NestJS는 JavaScript를 사용하며, TypeScript를 완벽하게 지원하여 더 안전하고 유지보수 가능한 코드를 작성할 수 있도록 도와줍니다.

Express와 달리, NestJS는 구조화된 architecture를 제공하여 팀 단위로 일관성 있는 코드 작성이 가능하도록 돕습니다. 이는 Angular에서 영감을 받아 modules, decorator, 의존성 주입(DI;Dependency Injection) 등의 개념을 도입한 덕분입니다.

NestJS의 주요 특징으로는 다음과 같습니다:

- 모듈화: 기능 단위로 모듈을 분리하여 재사용성과 관리 용이성을 높입니다.
  데코레이터: 클래스와 메소드 위에 데코레이터를 사용하여 메타데이터를 추가하고, 이를 통해 라우팅, 미들웨어 등을 간편하게 설정할 수 있습니다.

- 의존성 주입: DI 컨테이너를 통해 객체 간의 의존성을 자동으로 관리하여 테스트 용이성과 코드의 유연성을 향상시킵니다.

- 미들웨어와 가드: 요청의 흐름을 제어하거나 특정 조건에서만 접근을 허용하는 등의 로직을 쉽게 구현할 수 있습니다.
  이러한 특징 덕분에 NestJS는 대규모 애플리케이션에서도 유지보수가 쉽고 확장 가능한 코드를 작성하는 데 유리합니다.

## Controllers & Routing

- 컨트롤러는 들어오는 요청을 처리 하고 클라이언트에 응답을 반환하는 일을 담당합니다 .

- 라우팅은 @Controller() decorator를 사용합니다.
