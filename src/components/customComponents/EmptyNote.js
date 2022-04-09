import { Card, CardContent, CardActions, Typography, IconButton, TextField } from "@mui/material";
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import PushPinIcon from '@mui/icons-material/PushPin';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import { NotelyTheme } from '../../styles';
import { useNote } from '../../contexts/note-context';
import { ColorPallete } from "./ColorPallete";
import { AddTag } from "./AddTag";
import { useState } from "react";

export function EmptyNote() {
    const {note , setNote} = useNote();
    const [showColorPallete, setShowColorPallete] = useState(false);
    const [showAddTags , setShowAddTags] = useState(false);
    return (<>
            <Card variant="outlined" sx={{...NotelyTheme.card.containerStyle , bgcolor: `${note.color}`}}>
                <div style={{...NotelyTheme.editableCard.titleContainerStyle}}>   
                    <TextField variant="standard" InputProps={{disableUnderline: true}} placeholder="Title" value={note.title} onChange={(event) => setNote({...note, title: event.target.value})}/>
                    <IconButton aria-label="pin note" sx={{...NotelyTheme.card.actionStyle}} onClick={() => setNote({...note, pinned: !note.pinned})}>
                        {note.pinned ? <PushPinIcon/> : <PushPinOutlinedIcon/> }
                    </IconButton>
                </div>  
                <CardContent sx={{ textAlign: 'start'}}>
                    <Typography variant="body2" color="text.secondary">
                        <TextField multiline fullWidth variant="standard" InputProps={{disableUnderline: true, style: {...NotelyTheme.card.textAreaStyle}}} placeholder="Take a note..." value={note.content} onChange={(event) => setNote({...note, content: event.target.value})}/>
                    </Typography>
                </CardContent>
                <CardActions>
                    { note.tags.map( tag => <Typography variant="body2" color="text.secondary">{tag}</Typography>)}
                    <IconButton aria-label="change color" sx={{...NotelyTheme.card.actionStyle}} onClick={() => setShowColorPallete(true)}>
                        <ColorLensOutlinedIcon/>
                    </IconButton>
                    <IconButton aria-label="tag" onClick={() => setShowAddTags(true)}>
                        <LabelOutlinedIcon/>
                    </IconButton>
                    <IconButton aria-label="archive">
                        <ArchiveOutlinedIcon/>
                    </IconButton>
                    <IconButton aria-label="delete">
                        <DeleteOutlinedIcon/>
                    </IconButton>
                </CardActions>
            </Card>
            {showAddTags && <AddTag setShowAddTags={setShowAddTags}/>}
            {showColorPallete && <ColorPallete setShowColorPallete={setShowColorPallete}/>}
        </>
    );
  }