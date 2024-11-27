import { ArrowRight } from 'lucide-react';

export default function VersionHistory() {
  const versions = [
    {
      number: '1.0.2',
      changes: [
        'Greatly increased reliability of markdown triggers',
        'Added backspace detection so users can correct mistakes without having to delete the entire line.'
      ]
    },
    {
      number: '1.0.1',
      changes: [
        'Fixed an issue where moving to a new line did not clear the trigger',
        'Changed application name from MdNotes to Markintosh',
        'Enabled app to run on older versions of macOS (11.5+)',
        'Removed redundant secondary permissions alert'
      ]
    },
    {
      number: '1.0',
      changes: [
        'Added trigger for heading styles',
        'Added trigger to create a checklist item',
        'Added trigger for monostyled blocks',
        'Added block quote trigger',
        'Added menubar icon, which allows user to quit the application',
        'Added custom app icon'
      ]
    }
  ];

  return (
    <>
      <p className="text-[#98989F]">
        Less notable changes can be found in the{' '}
        <a
          href="https://github.com/AustinChiatto/Markintosh"
          className="hover:underline"
        >
          Markintosh repo
        </a>
        .
      </p>
      <ul className="flex flex-col gap-6 mt-6">
        {versions.map((version) => (
          <li key={version.number}>
            <h3 className="font-semibold mb-1">Version {version.number}</h3>
            <ul>
              {version.changes.map((change, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 py-1"
                >
                  <ArrowRight className="w-4 h-4 text-[#FFCC00]" />
                  {change}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
}
