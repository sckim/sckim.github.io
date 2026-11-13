# sckim.github.io

Soochan Kim's homepage (GitHub Pages / Jekyll). 내용은 `_data/` 의 YAML 파일만 고치면 됩니다. HTML은 건드릴 필요가 없습니다.

## 내용 수정 방법 (GitHub 웹에서도 가능: 파일 열기 → 연필 아이콘 → Commit)

| 바꾸고 싶은 것 | 파일 |
|---|---|
| 소개·연락처·연구 관심사·링크 | `_data/profile.yml` |
| 경력 / 수상 / 학회·학술활동 | `_data/career.yml`, `awards.yml`, `societies.yml` |
| 학생·졸업생 | `_data/students.yml` |
| 강의 / 과제 / 장비 / 논문 / 기술 | `_data/lectures.yml`, `projects.yml`, `instruments.yml`, `publications.yml`, `skills.yml` |
| 메뉴 이름·순서, 사이트 제목 | `_config.yml` |
| 공통 헤더·푸터 | `_layouts/default.html` |
| 색상·글꼴 | `assets/css/style.css` (맨 위 `:root` 변수) |
| 사진 | `img/` 에 올린 뒤 yml에서 `/img/파일명` 으로 참조 |

각 yml 파일 상단 주석에 항목 형식 예시가 있습니다. 한 블록을 복사해 추가하면 됩니다.
예) 논문 추가:
```yaml
- { year: 2026, type: journal, authors: "S. Kim, ...", title: "Title", venue: "Journal 12(3)", url: "" }
```
YAML 주의: 들여쓰기는 공백, 값에 `:` 가 들어가면 큰따옴표로 감싸세요.

## 로컬 미리보기 (선택)
Ruby 설치 후 `gem install jekyll` → `jekyll serve` → http://localhost:4000. 설치하지 않아도 push 하면 GitHub Pages가 빌드합니다.

## 참고
- 이메일은 `profile.yml` 의 `email_user` / `email_domain` 으로 분리 저장되어 스팸 수집을 줄입니다.
- 비어 있는 페이지(Lectures 등)는 데이터가 채워지면 자동으로 목록이 표시됩니다.
