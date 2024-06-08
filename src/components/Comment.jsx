import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import Avatar from './Avatar';
import { useState } from 'react';

export function Comment({content, onDeleteComment}) {
    const [likeCount, setLikeCount] = useState(0);

    function handleLikeComment() {
        setLikeCount((prevState) => 
            prevState + 1
        );
    }

    function handleDeleteComment() {
        onDeleteComment();
    }
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

                    <button title="Deletar comentário" onClick={handleDeleteComment}>
                        <Trash size={24}/>
                    </button>
                </header>

                <p>{content}</p>
            </div>

            <footer>
                <button onClick={handleLikeComment}>
                    <ThumbsUp size={20}/>

                    Aplaudir <span>{likeCount}</span>
                </button>
            </footer>
        </div>
    </div>
   </>
  )
}
