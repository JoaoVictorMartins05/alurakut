import MainGrid from '../src/components/MainGrid/'
import Box from '../src/components/Box/'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/alurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSidebar(propriedades) {
  return (
    <Box>
      <img src={`https://github.com/${propriedades.githubUser}.png`} style={{ borderRadius: '8px' }}></img>
    </Box>
  )
}


export default function Home() {

  const user = 'JoaoVictorMartins05';
  const pessoasFavoritas = [
    'juunegreiros',
    'omariosouto',
    'peas',
    'rafaballerini',
    'marcobrunodev',
    'KauanZika'
  ]


  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar githubUser={user} />
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box >
            <h1 className="title">
              Bem Vindo
              <OrkutNostalgicIconSet />
            </h1>
          </Box>
        </div>
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          <ProfileRelationsBoxWrapper>
            <Box>
              <h2 className="smallTitle">
                Pessoas da comunidade ({pessoasFavoritas.length})
              </h2>
              <ul>
                {pessoasFavoritas.map((itemAtual) => {
                  return (
                    <li>
                      <a href={`/users/${itemAtual}`} key={itemAtual}>
                        <img src={`https://github.com/${itemAtual}.png`} />
                        <span>{itemAtual}</span>
                      </a>
                    </li>
                  )
                })}
              </ul>
            </Box>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  )
}
