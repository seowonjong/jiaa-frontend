import React from 'react';
import { MainLayout } from '../../components/MainLayout/MainLayout';
import './roadmap-list.css';

interface RoadmapItem {
    id: string;
    title: string;
    progress: number;
    tasksCount: number;
    completedTasks: number;
    statusLabel: string;
    dueDate: string;
}

const RoadmapListView: React.FC = () => {
    const inProgressRoadmaps: RoadmapItem[] = [
        {
            id: '1',
            title: 'Frontend Architecture Refactoring',
            progress: 65,
            tasksCount: 12,
            completedTasks: 8,
            statusLabel: '진행 중',
            dueDate: '2025.12.31'
        },
        {
            id: '2',
            title: 'AI Avatar Emotion Sync',
            progress: 30,
            tasksCount: 10,
            completedTasks: 3,
            statusLabel: '진행 중',
            dueDate: '2026.01.15'
        }
    ];

    const completedRoadmaps: RoadmapItem[] = [
        {
            id: '3',
            title: 'Initial Project Setup',
            progress: 100,
            tasksCount: 5,
            completedTasks: 5,
            statusLabel: '완료',
            dueDate: '2025.12.10'
        }
    ];

    const handleRoadmapClick = (id: string) => {
        // In a real app, we'd pass the ID. For now, we navigate to the single detail page.
        window.location.href = '../roadmap-detail/detail.html';
    };

    const renderRoadmapCard = (item: RoadmapItem) => (
        <div key={item.id} className="roadmap-card" onClick={() => handleRoadmapClick(item.id)}>
            <div className="card-header">
                <span className={`status-badge ${item.progress === 100 ? 'completed' : 'in-progress'}`}>
                    {item.statusLabel}
                </span>
                <span className="due-date">{item.dueDate} 완료 예정</span>
            </div>
            <h3 className="roadmap-item-title">{item.title}</h3>
            <div className="progress-container">
                <div className="progress-info">
                    <span className="progress-text">{item.progress}% 완료</span>
                    <span className="task-count">{item.completedTasks}/{item.tasksCount} 태스크</span>
                </div>
                <div className="progress-bar-bg">
                    <div
                        className="progress-bar-fill"
                        style={{ width: `${item.progress}%` }}
                    ></div>
                </div>
            </div>
        </div>
    );

    return (
        <MainLayout activeTab="roadmap">
            <div className="roadmap-list-container">
                <header className="roadmap-list-header">
                    <button className="back-btn" onClick={() => window.location.href = '../dashboard/dashboard.html'}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M19 12H5M12 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <h1 className="main-title">
                        <span className="brace">{'{'}</span>
                        <span className="title-text">Roadmaps</span>
                        <span className="brace">{'}'}</span>
                    </h1>
                </header>

                <main className="roadmap-list-content">
                    <section className="list-section">
                        <h2 className="section-label">진행 중인 로드맵</h2>
                        <div className="roadmap-grid">
                            {inProgressRoadmaps.map(renderRoadmapCard)}
                        </div>
                    </section>

                    <section className="list-section">
                        <h2 className="section-label">완료된 로드맵</h2>
                        <div className="roadmap-grid">
                            {completedRoadmaps.map(renderRoadmapCard)}
                        </div>
                    </section>
                </main>
            </div>
        </MainLayout>
    );
};

export default RoadmapListView;
