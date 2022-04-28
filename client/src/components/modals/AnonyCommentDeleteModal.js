import React, { useRef } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector } from 'react-redux';
import { useMutation } from 'react-query';
import axios from 'axios';
import { TextField } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'primary.light',
  border: '2px solid #000',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
};

export default function AnonyCommentDeleteModal({uuid}) {
  const accessToken = useSelector((state) => state.user.accessToken);
  const passwordRef = useRef();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      commentUuid: uuid,
      commentPassword: passwordRef.current.value,
    }
    commentDeleteMutation.mutate(data);
    handleClose();
  }

  const commentDeleteMutation = useMutation(((data) => {
    return axios({
      method: "post",
      url: '/api/comment/deleteNonMemberComment',
      data: data,
      headers: {
        "Content-Type": 'application/json'
      }
    })
    }), {
      onSuccess: (data) => {
        alert("😄 The comment has been successfully deleted");
      },
      onError: (error) => {
        alert(`
        ❗️ Something Wrong! Please try again

        (${error})
        `);
      },
    }
  );

  return (
    <>
      <Tooltip title="Delete" placement='top'>
        <IconButton aria-label="report" onClick={handleOpen}>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography component="h1" variant="h5">
            🤔 Delete the post
          </Typography>
          <Typography>
            Please enter the password.
          </Typography>
          <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              sx={{ mb: 2 }}
              inputRef={passwordRef}
            />
          <Box noValidate sx={{ mt: 1, display: 'flex' }}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              DELETE
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}