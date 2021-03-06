## 📖 Sobre
ILikeToMoveIt é uma aplicação que possui uma simples interface de desafios, a qual traz a técnica de pomodoro para um painel interativo. À medida em que os desafios ― exercícios físicos ou de relaxamento ― são completados, fornecem experiência em um sistema de level-up simplificado.

Foi desenvolvido durante a semana **NLW04**, na trilha **ReactJS** da **Rocketseat Education**, em que foi visto e desenvolvido:
Components, Context API, Modal e Notification API, em um ambiente com Next.js e Typescript, caracterizado por SSR e SSG

## 🔨 Funcionalidades
Além do conteúdo passado na semana (move.it 1.0), este projeto foi incrementado com:

→ Styled Components

→ React Modal Library

→ Mais estilização nos botões e no Modal

→ Login OAuth2 no Github utilizando [**NextAuth.js**](https://next-auth.js.org)

→ Persistência dos dados no [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

→ Persistência em sessão jwt de dados estáticos (nome, url da imagem de perfil, email, username)

→ Leaderboard

→ Responsividade - 🚧 em desenvolvimento 🚧

→ Compartilhar level no Twitter (imagem é gerada no momento do clique) - 🚧 em desenvolvimento 🚧

## 🚀 Tecnologias e Ferramentas
→ [**Next.JS**](https://nextjs.org/)

→ [**ReactJS**](https://reactjs.org/)

→ [**TypeScript**](https://www.typescriptlang.org/)

→ [**MongoDB**](https://www.mongodb.com/cloud/atlas)

→ [**NextAuth.js**](https://next-auth.js.org)

## 🖌️ Layout de Referência
→ [**move.it 2.0**](https://www.figma.com/file/vRbW1u0CEZuG2zE6bU5qLg/Move.it-2.0/duplicate)

→ [**move.it 1.0**](https://www.figma.com/file/ge20pu3ofMOKoliUyKx1Nl/Move.it-1.0/duplicate)

-----
## Repositório
GitHub: [`https://github.com/luizwhite/iliketomoveit-nextjs-nlw04`](https://github.com/luizwhite/iliketomoveit-nextjs-nlw04)

## Deploy
Vercel: [`https://iliketomoveit-two.vercel.app`](https://iliketomoveit-two.vercel.app)

## Instalação
```bash
# Abra um terminal e clone este repositório
$ git clone https://github.com/luizwhite/iliketomoveit-nextjs-nlw04.git

# Crie um arquivo .env.local e inclua as váriáveis de ambiente
# baseado no arquivo .env.example na raiz do projeto

# Instale as dependências
$ yarn

# Inicie a aplicação
$ yarn start

```

### Bugs - NextAuth
Conforme essa [issue](https://github.com/nextauthjs/next-auth/issues/829), em produção (build) o NextAuth.js cria uma collection `userUsers` ao invés de `users`, então se estiver em desenvolvimento local utilize a collection `users` para persistir os dados (em `./src/pages/api/[...nextauth].js` e na rota api `challenges.ts`, é onde encontrará o nome da collection)
