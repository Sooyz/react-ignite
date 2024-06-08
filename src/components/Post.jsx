import { useState } from 'react';
import Avatar from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export function Post({author, content, publishedAt}) {
    const [comments, setComments] = useState([
        'Post dahora fera!'
    ]);

    const [newCommentText, setNewCommentText] = useState('');

    const publishedDateFromatted = format(new Date(publishedAt), 'dd MMM yyyy',{
        locale: ptBR
    });

    const publishedDateRelativeToNow = formatDistanceToNow(new Date(publishedAt), {
        locale: ptBR,
        addSuffix: true
    });

    function handleCreateNewComment() {
        event.preventDefault();
        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }

    function handleNewCommentText(event) {
        setNewCommentText(event.target.value);
    }
    
    function onDeleteComment(comment) {
        // Remove o comentário da lista de comentários
        setComments(comments.filter(comments => comments !== comment));
    }

    function handleNewCommentInvalid() {
        alert('O comentário não pode ser vazio');
    }

    const isNewCommentEmpty = newCommentText.length == 0;

    return (
    <>
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFromatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
            </header>

            <div className={styles.postContent}>
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>
                    }

                    if (line.type === 'link') {
                        return <p key={line.content}>
                            <a href={line.content}>{line.content}</a>
                        </p>
                    }

                    return null;
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixei seu feedback</strong>

                <textarea
                    name="comment"
                    placeholder="Deixe um comentário"
                    value={newCommentText}
                    onChange={handleNewCommentText}
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                <footer>
                    <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {
                    comments.map(comment => (
                        <Comment 
                            key={comment} 
                            content={comment}
                            onDeleteComment={() => onDeleteComment(comment)}
                        />
                    ))
                }
            </div>
        </article>
    </>
    )
}
