import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import List from '@mui/material/List';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import TaskHeader from '../../molecules/TaskHeader';
import TaskInfoItem from '../../molecules/TaskInfoItem';

export default function TaskCard({
  description,
  responsible,
  computer,
  createdAt,
}) {
  const date = new Date(createdAt);
  const formattedDate = date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  return (
    <Card variant="outlined" sx={{ borderRadius: 3 }} className="task-card">
      <TaskHeader description={description} />

      <CardContent sx={{ padding: 0 }} className="task-card__content">
        <List className="task-card__list" disablePadding>
          <TaskInfoItem
            icon={<PermIdentityOutlinedIcon sx={{ fontSize: 24 }} />}
            text={responsible}
          />
          <TaskInfoItem
            icon={<DesktopWindowsOutlinedIcon sx={{ fontSize: 24 }} />}
            text={computer}
          />
          <TaskInfoItem
            icon={
              <DateRangeOutlinedIcon sx={{ fontSize: 24, color: '#808080' }} />
            }
            text={createdAt ? formattedDate : 'Sem informaç̧ão'}
            className="--date"
          />
        </List>
      </CardContent>
    </Card>
  );
}
