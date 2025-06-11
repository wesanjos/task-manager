import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import TaskHeader from '../../molecules/TaskHeader';
import TaskInfoItem from '../../molecules/TaskInfoItem';

export default function TaskCard() {
  return (
    <Card variant="outlined" sx={{ borderRadius: 3 }} className="task-card">
      <TaskHeader title="Tarefa" onEdit={() => {}} onDelete={() => {}} />

      <CardContent sx={{ padding: 0 }} className="task-card__content">
        <List className="task-card__list" disablePadding>
          <TaskInfoItem
            icon={<PermIdentityOutlinedIcon sx={{ fontSize: 24 }} />}
            text="Wesley Anjos"
          />
          <TaskInfoItem
            icon={<DesktopWindowsOutlinedIcon sx={{ fontSize: 24 }} />}
            text="Windows"
          />
          <TaskInfoItem
            icon={
              <DateRangeOutlinedIcon sx={{ fontSize: 24, color: '#808080' }} />
            }
            text="XX de Junho, 2025"
            className="--date"
          />
        </List>
      </CardContent>
    </Card>
  );
}
