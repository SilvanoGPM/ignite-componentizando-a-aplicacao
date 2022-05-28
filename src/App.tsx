import { useState } from 'react';

import { SideBar, GenreResponseProps } from './components/SideBar';
import { Content } from './components/Content';
import { Header } from './components/Header';

import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>(
    {} as GenreResponseProps
  );

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar
        onSelectGenre={handleClickButton}
        selectedGenreId={selectedGenreId}
      />

      <div className="container">
        <Header title={selectedGenre.title} />

        <Content
          selectedGenreId={selectedGenreId}
          onGenreFound={setSelectedGenre}
        />
      </div>
    </div>
  );
}
