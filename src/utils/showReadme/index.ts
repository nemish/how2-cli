import showFileContent from '../showFileContent';

type Args = {
  full?: boolean;
};

const showReadme = async (options?: Args) => {
  await showFileContent({
    name: 'README.md',
    full: options?.full,
  });
};

export default showReadme;
