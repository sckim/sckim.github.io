# sckim.github.io

Soochan Kim's homepage (GitHub Pages / Jekyll). 내용은 `_data/` 의 YAML 파일만 고치면 됩니다. HTML은 건드릴 필요가 없습니다.

## 내용 수정 방법 (GitHub 웹에서도 가능: 파일 열기 → 연필 아이콘 → Commit)

| 바꾸고 싶은 것 | 파일 |
|---|---|
| 소개·연락처·연구 관심사·링크 | `_data/profile.yml` |
| 경력 / 수상 / 학회·학술활동 | `_data/career.yml`, `awards.yml`, `societies.yml` |
| 학생·졸업생 | `_data/students.yml` |
| 강의 / 과제 / 장비 / 논문 / 기술 | `_data/lectures.yml`, `projects.yml`, `instruments.yml`, `publications.yml`, `skills.yml` |
| 메뉴 이름·순서, 화면 문구(영문/한글 각각) | `_data/i18n.yml` |
| 한글판 본문(프로필·경력·수상·학회·학생 졸업생·과제·장비·기술) | `_data/ko/*.yml` (영문판과 같은 순서·같은 항목 수로 유지) |
| 사이트 기본 설정, 내 이름 표기 | `_config.yml` |
| 공통 헤더·푸터 | `_layouts/default.html` |
| 색상·글꼴 | `assets/css/style.css` (맨 위 `:root` 변수) |
| 사진 | `img/` 에 올린 뒤 yml에서 `/img/파일명` 으로 참조 |

각 yml 파일 상단 주석에 항목 형식 예시가 있습니다. 한 블록을 복사해 추가하면 됩니다.
예) 논문 추가:
```yaml
- { year: 2026, type: journal, authors: "S. Kim, ...", title: "Title", venue: "Journal 12(3)", url: "" }
```
YAML 주의: 들여쓰기는 공백, 값에 `:` 가 들어가면 큰따옴표로 감싸세요.

## 한글판 / 영문판
- 영문판은 기존 주소(`/`, `/students/` …), 한글판은 `/ko/`, `/ko/students/` … 이다. 각 페이지 우측 상단 `한국어` / `English` 버튼으로 전환하며, 선택은 브라우저에 기억되어 영문 홈(`/`)으로 들어와도 한글 홈으로 이동한다.
- 페이지 본문 템플릿은 `_includes/pages/` 에 하나만 있고, 영문(`*.html`)·한글(`ko/*.html`) 페이지가 같이 쓴다. 레이아웃을 고칠 때는 이 한 곳만 고치면 된다.
- 논문·특허(`publications.yml`), 강의(`lectures.yml`), 학부 연구생 명단, 사진·이메일·링크(`profile.yml`)는 두 언어가 공유한다.
- 새 항목을 추가할 때는 영문 데이터를 추가한 뒤, 한글 데이터가 있는 파일(`_data/ko/`)에도 같은 위치에 한 줄 추가한다. 한글 항목이 없으면 한글판에는 표시되지 않는다.

## 로컬 미리보기 (선택)
Ruby 설치 후 `gem install jekyll` → `jekyll serve` → http://localhost:4000. 설치하지 않아도 push 하면 GitHub Pages가 빌드합니다.

## 참고
- 이메일은 `profile.yml` 의 `email_user` / `email_domain` 으로 분리 저장되어 스팸 수집을 줄입니다.
- 비어 있는 페이지(Lectures 등)는 데이터가 채워지면 자동으로 목록이 표시됩니다.
