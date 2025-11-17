import { useState } from 'react';
import './App.css';
function App() {
  const [selectedTab, setSelectedTab] = useState('dashboard');
const menuItems = [
    { id: 'dashboard', label: '대시보드' },
    { id: 'services',  label: '서비스 상태' },
    { id: 'deploy',    label: '배포 이력' },
    { id: 'settings',  label: '환경 설정' },
  ];
const cards = [
    {
      title: 'ECR 이미지',
      value: 'v1.0.3',
      desc: '마지막 푸시: 5분 전',
    },
    {
      title: 'EC2 컨테이너',
      value: '2 / 3',
      desc: '정상 실행 중 / 전체',
    },
    {
      title: '요청 처리량',
      value: '1,248 req/min',
      desc: '지난 5분 평균',
    },
  ];
const deployHistory = [
    { version: 'v1.0.3', time: '2025-11-16 14:32', author: 'maru', result: '성공' },
    { version: 'v1.0.2', time: '2025-11-16 09:15', author: 'ci-bot', result: '성공' },
    { version: 'v1.0.1', time: '2025-11-15 20:01', author: 'maru', result: '롤백' },
  ];
return (
    <div className="app-root">
      <aside className="sidebar">
        <div className="logo">
          <span className="logo-mark">⚙</span>
          <span className="logo-text">Node ECR Console</span>
        </div>
        <nav className="menu">
          {menuItems.map((item) => (
            <button
              key={item.id}
              className={`menu-item ${selectedTab === item.id ? 'active' : ''}`}
              onClick={() => setSelectedTab(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
        <div className="sidebar-footer">
          <div className="user-info">
            <div className="avatar">J</div>
            <div>
              <div className="user-name">주일사마님</div>
              <div className="user-role">AWS · Azure Trainer</div>
            </div>
          </div>
        </div>
      </aside>
<main className="main">
        <header className="main-header">
          <div>
            <h1>멀티클라우드 웹 앱 모니터링111111</h1>
            <p>Node.js 20 · Docker · AWS ECR · EC2 환경 데모 대시보드</p>
          </div>
          <div className="header-actions">
            <button className="btn secondary">문서 보기</button>
            <button className="btn primary">새 배포 트리거</button>
          </div>
        </header>
<section className="cards">
          {cards.map((card) => (
            <div key={card.title} className="card">
              <div className="card-title">{card.title}</div>
              <div className="card-value">{card.value}</div>
              <div className="card-desc">{card.desc}</div>
            </div>
          ))}
        </section>
{selectedTab === 'dashboard' && (
          <section className="panel">
            <h2>실시간 트래픽</h2>
            <p className="panel-desc">
              실제 환경에서는 이 영역에 차트 라이브러리(예: Recharts, Chart.js)를 연결해
              CloudWatch / OpenSearch에서 가져온 메트릭을 시각화할 수 있습니다.
            </p>
            <div className="fake-chart">
              <div className="fake-chart-bar" style={{ height: '40%' }} />
              <div className="fake-chart-bar" style={{ height: '70%' }} />
              <div className="fake-chart-bar" style={{ height: '55%' }} />
              <div className="fake-chart-bar" style={{ height: '90%' }} />
              <div className="fake-chart-bar" style={{ height: '60%' }} />
              <div className="fake-chart-bar" style={{ height: '30%' }} />
            </div>
          </section>
        )}
{selectedTab === 'services' && (
          <section className="panel">
            <h2>서비스 상태</h2>
            <ul className="status-list">
              <li>
                <span>프론트엔드 컨테이너 (EC2)</span>
                <span className="status status-ok">정상</span>
              </li>
              <li>
                <span>백엔드 API (EC2 / ECS)</span>
                <span className="status status-ok">정상</span>
              </li>
              <li>
                <span>RDS MySQL</span>
                <span className="status status-ok">정상</span>
              </li>
              <li>
                <span>Azure DR 앱 서비스</span>
                <span className="status status-warn">지연</span>
              </li>
            </ul>
          </section>
        )}
{selectedTab === 'deploy' && (
          <section className="panel">
            <h2>배포 이력</h2>
            <table className="deploy-table">
              <thead>
                <tr>
                  <th>버전</th>
                  <th>시간</th>
                  <th>작성자</th>
                  <th>결과</th>
                </tr>
              </thead>
              <tbody>
                {deployHistory.map((d) => (
                  <tr key={d.version}>
                    <td>{d.version}</td>
                    <td>{d.time}</td>
                    <td>{d.author}</td>
                    <td>
                      <span
                        className={
                          d.result === '성공' ? 'status status-ok' : 'status status-error'
                        }
                      >
                        {d.result}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}
{selectedTab === 'settings' && (
          <section className="panel">
            <h2>환경 설정</h2>
            <div className="settings-grid">
              <div>
                <label>기본 리전</label>
                <select defaultValue="ap-northeast-2">
                  <option value="ap-northeast-2">ap-northeast-2 (Seoul)</option>
                  <option value="ap-southeast-1">ap-southeast-1 (Singapore)</option>
                  <option value="us-east-1">us-east-1 (N. Virginia)</option>
                </select>
              </div>
              <div>
                <label>자동 롤백</label>
                <select defaultValue="on">
                  <option value="on">활성화</option>
                  <option value="off">비활성화</option>
                </select>
              </div>
              <div>
                <label>알림 채널</label>
                <select defaultValue="slack">
                  <option value="slack">Slack</option>
                  <option value="email">Email</option>
                  <option value="teams">Teams</option>
                </select>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
export default App;

