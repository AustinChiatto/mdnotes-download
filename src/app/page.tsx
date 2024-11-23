import DownloadContent from './components/DownloadContent';
import NotesClient from './components/NotesClient';
import VersionHistory from './components/VersionHistory';

interface Note {
  id: number;
  title: string;
  desc?: string;
  content: string | React.ReactNode;
}

export default function Home() {
  const notes: Note[] = [
    {
      id: 1,
      title: 'Markintosh for Apple Notes',
      desc: 'Markdown formatting in Apple Notes with one app.',
      content: <DownloadContent />
    },
    { id: 2, title: 'Version History', desc: 'Enabled app to run on older versions of macOS (11.5+)', content: <VersionHistory /> }
  ];

  return <NotesClient initialNotes={notes} />;
}
