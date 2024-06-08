import Avatar from './Avatar';
import styles from './Sidebar.module.css';
import { PencilLine } from 'phosphor-react';

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
        <img 
            className={styles.cover}
            src="https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&h=800&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <div className={styles.profile}>
            <Avatar src="https://github.com/Sooyz.png" />
            <strong>Léozada</strong>
            <span>Software Engineer</span>
        </div>

        <footer>
            <a href="#">
                <PencilLine size={20}/>
                Editar seu perfil
            </a>
        </footer>
    </aside>
  );
}
