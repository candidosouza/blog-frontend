import { Box, Typography } from '@mui/material';
import { useAppSelector } from '../../app/hooks';
import { selectCommentsByPostId } from './CommentsSlice';
import { CommentForm } from './components/CommentForm';


type commentProps = {
  postId: number
}

export default function Comments({ postId }: commentProps) {

  const comments = useAppSelector((state) => selectCommentsByPostId(state, postId));

  const commentsList = comments.map((comment) => (
    <Box sx={{ mb: 4 }}>
      <Typography variant="caption" component="h3" sx={{ mb: 1 }}>
        {comment.author} <br />
        {new Date(comment.created_at).toLocaleDateString('pt-BR')}
      </Typography>
      <Typography variant="body1" color="text.primary" sx={{ mb: 2 }}>
        {comment.comment}
      </Typography>
    </Box>
  ));

  return (
    <>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h3" color="text.secondary" sx={{ mb: 4 }}>
          Deixe seu comentário
        </Typography>

        <CommentForm />

      </Box>
      <Box>

        <Typography variant="h4" component="h3" color="text.secondary" sx={{ mb: 4 }}>
          Comentários
        </Typography>

        {commentsList}
      </Box>
    </>
  )
}
