import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import Avatar from './Avatar';

export function Comment({content}) {
  return (
   <>
    <div className={styles.comment}>
        <Avatar hasBorder={false} src="http://github.com/diego3g.png" />
        <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Diegão</strong>
                        <time title="7 de Junho as 10:13" dateTime="2024-06-07 10:13:00">Cerca de 10h atrás</time>
                    </div>

                    <button title="Deletar comentário">
                        <Trash size={24}/>
                    </button>
                </header>

                <p>{content}</p>
            </div>

            <footer>
                <button>
                    <ThumbsUp size={20}/>

                    Aplaudir <span>20</span>
                </button>
            </footer>
        </div>
    </div>
   </>
  )
}
