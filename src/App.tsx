import { useState } from 'react';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import { GenreResponseProps } from './components/SideBar';

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
        <header>
          <span className="category">
            Categoria:<span> {selectedGenre.title}</span>
          </span>
        </header>

        <Content
          selectedGenreId={selectedGenreId}
          onGenreFound={setSelectedGenre}
        />
      </div>
    </div>
  );
}
