# Instruções — CosmicSMP Site (Vue.js) · Versão Final

## Stack
- Vue 3 (Composition API — `<script setup>`)
- Vue Router 4
- Google Fonts: **Cormorant Garamond** + **DM Sans**
- CSS puro com variáveis (paleta abaixo)
- Sem Tailwind, sem UI libs externas

---

## Google Fonts — `index.html`

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet">
```

---

## Paleta — `src/style.css`

```css
*, *::before, *::after { box-sizing: border-box; }

:root {
  --bg:           #19171b;
  --bg-surface:   #221f22;
  --bg-card:      #2a2628;
  --text:         #c9b8a8;
  --text-h:       #f0e6d3;
  --text-muted:   #7a6e65;
  --gold:         #d29f22;
  --gold-dim:     rgba(210,159,34,0.12);
  --gold-border:  rgba(210,159,34,0.35);
  --red:          #5d0018;
  --red-bright:   #8f0b13;
  --red-dim:      rgba(93,0,24,0.3);
  --red-border:   rgba(143,11,19,0.5);
  --border:       rgba(210,159,34,0.13);
  --shadow:       0 8px 32px rgba(0,0,0,0.6), 0 2px 8px rgba(0,0,0,0.4);
  --font-display: 'Cormorant Garamond', Georgia, serif;
  --font-body:    'DM Sans', system-ui, sans-serif;
}

body {
  margin: 0;
  background: var(--bg);
  color: var(--text);
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.7;
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3 { font-family: var(--font-display); color: var(--text-h); font-weight: 600; margin: 0; }
p { margin: 0; }
a { color: var(--gold); text-decoration: none; }
a:hover { opacity: 0.8; }

::-webkit-scrollbar { width: 5px; }
::-webkit-scrollbar-track { background: var(--bg); }
::-webkit-scrollbar-thumb { background: var(--red); border-radius: 3px; }
```

---

## Estrutura de Arquivos

```
src/
├── assets/kurumi/
│   └── profile.jpg               ← foto principal da Kurumi
├── components/
│   └── ZafkielClock.vue          ← relógio (arquivo entregue separado)
├── router/index.js
├── views/
│   ├── HomeView.vue
│   └── KurumiView.vue
├── App.vue
├── main.js
└── style.css
```

> As imagens das balas foram substituídas pelo relógio animado.
> Não é necessário nenhum arquivo de imagem para o Zafkiel.

---

## `src/router/index.js`

```js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView  from '../views/HomeView.vue'
import KurumiView from '../views/KurumiView.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/',       component: HomeView },
    { path: '/kurumi', component: KurumiView },
  ],
})
```

---

## `src/App.vue`

```vue
<template><RouterView /></template>
<script setup>
import { RouterView } from 'vue-router'
</script>
```

---

## `src/main.js`

```js
import { createApp } from 'vue'
import App    from './App.vue'
import router from './router'
import './style.css'

createApp(App).use(router).mount('#app')
```

---

## `src/views/HomeView.vue`

```vue
<template>
  <div class="home">

    <div class="top-bar">
      <span class="bar-line"/>
      <span class="bar-label">CosmicSMP · Ficha de Jogador</span>
      <span class="bar-line"/>
    </div>

    <!-- PERFIL -->
    <section class="profile">
      <div class="profile-avatar">YK</div>
      <div class="profile-info">
        <p class="profile-tag">Jogador</p>
        <h1 class="profile-nick">ykurutta</h1>
        <div class="profile-meta">
          <span class="meta-item">
            <span class="meta-label">Discord</span>
            <span class="meta-value">ykurutta</span>
          </span>
          <span class="meta-div">·</span>
          <span class="meta-item">
            <span class="meta-label">Minecraft</span>
            <span class="meta-value">ykurutta</span>
          </span>
          <span class="meta-div">·</span>
          <span class="meta-item">
            <span class="meta-label">Idade</span>
            <span class="meta-value">18 anos</span>
          </span>
        </div>
      </div>
    </section>

    <!-- FICHA DO JOGADOR -->
    <section class="ficha">
      <div class="section-header">
        <span class="section-line"/>
        <h2>Ficha do Jogador</h2>
        <span class="section-line"/>
      </div>

      <div class="ficha-grid">

        <div class="ficha-item">
          <span class="ficha-q">Possui gatilhos?</span>
          <p class="ficha-a">Não.</p>
        </div>

        <div class="ficha-item">
          <span class="ficha-q">O que é Metagaming?</span>
          <p class="ficha-a">
            Usar o conhecimento que eu, como jogador, tenho para favorecer o personagem.
            O que o personagem sabe não é a mesma coisa que a pessoa interpretando sabe.
          </p>
        </div>

        <div class="ficha-item">
          <span class="ficha-q">O que é Anti-RP?</span>
          <p class="ficha-a">
            Agir com comportamentos que quebram a imersão — ignorar regras, agir como se
            tivesse conhecimentos que o personagem não deveria ter, ou ter comportamentos
            impossíveis de acordo com o contexto.
          </p>
        </div>

        <div class="ficha-item">
          <span class="ficha-q">ON-RP vs OFF-RP</span>
          <p class="ficha-a">
            <strong>ON-RP:</strong> agir de acordo com o contexto interpretando somente o personagem.<br>
            <strong>OFF-RP:</strong> agir livremente como você mesmo, sem interpretar nada.
            Em resumo — ON você está dentro, OFF você está fora.
          </p>
        </div>

        <div class="ficha-item full">
          <span class="ficha-q">Regras mais importantes</span>
          <div class="rules-list">
            <div class="rule">
              <span class="rule-num">01</span>
              <div>
                <strong>Panelinhas</strong>
                <p>Quebram a interação do servidor. O grupo se divide em subgrupos que excluem outros membros, prejudicando a comunidade.</p>
              </div>
            </div>
            <div class="rule">
              <span class="rule-num">02</span>
              <div>
                <strong>Preconceito & Bullying</strong>
                <p>Não se limita a aparência — abrange zoações de personalidade como um todo, ferindo a confiança do indivíduo.</p>
              </div>
            </div>
            <div class="rule">
              <span class="rule-num">03</span>
              <div>
                <strong>Conteúdo Extremista e Discriminatório</strong>
                <p>Apologia a nazismo ou qualquer ideologia extremista — incluindo religiosa — não tem espaço.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="ficha-item">
          <span class="ficha-q">Por que entrou no SMP?</span>
          <p class="ficha-a">Para interagir e enturmar com novas pessoas.</p>
        </div>

        <div class="ficha-item">
          <span class="ficha-q">Como conheceu o servidor?</span>
          <p class="ficha-a">Por menções da dona do servidor e de um administrador.</p>
        </div>

        <div class="ficha-item">
          <span class="ficha-q">Intenção no SMP</span>
          <p class="ficha-a">Se divertir e conhecer novas pessoas.</p>
        </div>

        <div class="ficha-item">
          <span class="ficha-q">Participou de outros SMPs?</span>
          <p class="ficha-a">Não.</p>
        </div>

        <div class="ficha-item">
          <span class="ficha-q">Já foi expulso ou saiu de algum SMP?</span>
          <p class="ficha-a">Não.</p>
        </div>

        <div class="ficha-item">
          <span class="ficha-q">Sobre conteúdos sensíveis</span>
          <p class="ficha-a">
            A história fica mais realista abordando temas sensíveis. Não tenho problema
            com esses temas e até me interesso por eles.
          </p>
        </div>

        <div class="ficha-item">
          <span class="ficha-q">Sobre morte do personagem</span>
          <p class="ficha-a">Óbvio — entendido e aceito.</p>
        </div>

      </div>
    </section>

    <!-- PERSONAGENS -->
    <section class="characters">
      <div class="section-header">
        <span class="section-line"/>
        <h2>Personagens</h2>
        <span class="section-line"/>
      </div>
      <div class="character-grid">
        <RouterLink to="/kurumi" class="character-card">
          <div class="card-img-wrap">
            <img src="@/assets/kurumi/profile.jpg" alt="Kurumi"/>
            <div class="card-overlay">Ver Ficha →</div>
          </div>
          <div class="card-info">
            <span class="card-name">Kurumi</span>
            <span class="card-type">Entidade · Anjo da Destruição</span>
          </div>
        </RouterLink>
      </div>
    </section>

    <div class="footer-line"/>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.home { max-width:1100px; margin:0 auto; padding:0 32px 80px; }

.top-bar { display:flex; align-items:center; gap:16px; padding:24px 0 48px;
  color:var(--text-muted); font-size:11px; letter-spacing:2px; text-transform:uppercase; }
.bar-line  { flex:1; height:1px; background:var(--border); }
.bar-label { white-space:nowrap; color:var(--gold); }

.profile { display:flex; align-items:center; gap:32px; padding-bottom:64px;
  border-bottom:1px solid var(--border); margin-bottom:64px; }
.profile-avatar { width:80px; height:80px; border-radius:50%; background:var(--red-dim);
  border:2px solid var(--gold-border); display:flex; align-items:center; justify-content:center;
  font-family:var(--font-display); font-size:28px; font-weight:700; color:var(--gold); flex-shrink:0; }
.profile-tag  { font-size:11px; letter-spacing:3px; text-transform:uppercase; color:var(--gold); margin-bottom:8px; }
.profile-nick { font-size:52px; letter-spacing:-1px; line-height:1; margin-bottom:16px; }
.profile-meta { display:flex; align-items:center; gap:12px; flex-wrap:wrap; }
.meta-item    { display:flex; flex-direction:column; gap:2px; }
.meta-label   { font-size:10px; text-transform:uppercase; letter-spacing:1.5px; color:var(--text-muted); }
.meta-value   { font-size:14px; color:var(--text-h); font-weight:500; }
.meta-div     { color:var(--gold-border); font-size:20px; align-self:center; }

.section-header { display:flex; align-items:center; gap:20px; margin-bottom:40px; }
.section-header h2 { font-size:28px; white-space:nowrap; }
.section-line { flex:1; height:1px; background:var(--border); }

.ficha { margin-bottom:64px; }
.ficha-grid { display:grid; grid-template-columns:1fr 1fr; gap:2px;
  background:var(--border); border:1px solid var(--border); border-radius:12px; overflow:hidden; }
.ficha-item     { background:var(--bg-surface); padding:24px 28px; }
.ficha-item.full{ grid-column:1/-1; }
.ficha-q { display:block; font-size:11px; text-transform:uppercase; letter-spacing:1.5px;
  color:var(--gold); margin-bottom:10px; }
.ficha-a { font-size:15px; color:var(--text); line-height:1.6; }
.ficha-a strong { color:var(--text-h); }

.rules-list { display:flex; flex-direction:column; gap:20px; }
.rule { display:flex; gap:20px; align-items:flex-start; }
.rule-num { font-family:var(--font-display); font-size:32px; font-weight:700;
  color:var(--gold-border); line-height:1; flex-shrink:0; width:40px; }
.rule strong { display:block; font-size:15px; color:var(--text-h); margin-bottom:4px; }
.rule p { font-size:14px; color:var(--text); line-height:1.6; margin:0; }

.characters { margin-bottom:64px; }
.character-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(180px,1fr));
  gap:20px; max-width:600px; }
.character-card { display:block; border-radius:10px; overflow:hidden;
  border:1px solid var(--border); background:var(--bg-card);
  transition:border-color .3s, transform .2s; text-decoration:none; }
.character-card:hover { border-color:var(--gold-border); transform:translateY(-4px); }
.card-img-wrap { position:relative; aspect-ratio:3/4; overflow:hidden; }
.card-img-wrap img { width:100%; height:100%; object-fit:cover; display:block; transition:transform .4s; }
.character-card:hover .card-img-wrap img { transform:scale(1.04); }
.card-overlay { position:absolute; inset:0; background:rgba(25,23,27,.7);
  display:flex; align-items:center; justify-content:center;
  opacity:0; transition:opacity .3s; font-size:14px; color:var(--gold); letter-spacing:1px; }
.character-card:hover .card-overlay { opacity:1; }
.card-info { padding:14px 16px; display:flex; flex-direction:column; gap:4px; }
.card-name { font-family:var(--font-display); font-size:20px; color:var(--text-h); }
.card-type { font-size:11px; color:var(--gold); letter-spacing:.5px; }

.footer-line { height:1px; background:var(--border); }

@media(max-width:768px){
  .home { padding:0 20px 60px; }
  .profile { flex-direction:column; align-items:flex-start; gap:20px; }
  .profile-nick { font-size:36px; }
  .ficha-grid { grid-template-columns:1fr; }
  .ficha-item.full { grid-column:1; }
}
</style>
```

---

## `src/views/KurumiView.vue`

```vue
<template>
  <div class="kp">

    <!-- HERO -->
    <section class="hero">
      <div class="hero-img-wrap">
        <img src="@/assets/kurumi/profile.jpg" alt="Kurumi"/>
        <div class="hero-img-fade"/>
      </div>
      <div class="hero-content">
        <p class="hero-tag">Entidade · Anjo do Deus da Destruição</p>
        <h1 class="hero-name">Kurumi</h1>
        <div class="hero-stats">
          <div class="stat">
            <span class="stat-label">Idade Real</span>
            <span class="stat-value">40 anos</span>
          </div>
          <div class="stat-sep"/>
          <div class="stat">
            <span class="stat-label">Aparência</span>
            <span class="stat-value">19 anos</span>
          </div>
          <div class="stat-sep"/>
          <div class="stat">
            <span class="stat-label">Elemento</span>
            <span class="stat-value gold">Destruição</span>
          </div>
          <div class="stat-sep"/>
          <div class="stat">
            <span class="stat-label">Deus Regente</span>
            <span class="stat-value">Kyan</span>
          </div>
        </div>
      </div>
    </section>

    <!-- NAV -->
    <nav class="anav">
      <a href="#personalidade">Personalidade</a>
      <a href="#dados">Dados</a>
      <a href="#lore">Lore</a>
      <a href="#zafkiel">Zafkiel</a>
      <a href="#clones">Clones</a>
    </nav>

    <!-- 01 PERSONALIDADE -->
    <section id="personalidade" class="block">
      <div class="bh"><span class="bn">01</span><h2>Personalidade</h2></div>
      <div class="two-col">
        <div class="icard">
          <h3>Lado Visível</h3>
          <p>Age de forma charmosa, flertando e sorrindo com um tom levemente brincalhão.
          Usa máscaras de garota inocente com frieza calculada para conseguir o que deseja.
          Manipuladora e prática, planeja cada passo com antecedência.</p>
        </div>
        <div class="icard">
          <h3>Lado Oculto</h3>
          <p>Profundamente triste e solitária. Carrega um ódio latente pela humanidade, mas não
          age por crueldade pura — possui um código moral próprio e distorcido. Por baixo de tudo,
          existe um lado que ainda quer redenção, expresso no carinho que sente por animais,
          especialmente gatos.</p>
        </div>
      </div>
    </section>

    <!-- 02 DADOS -->
    <section id="dados" class="block">
      <div class="bh"><span class="bn">02</span><h2>Dados do Personagem</h2></div>
      <div class="data-grid">

        <div class="dtable">
          <div class="dth">Gostos</div>
          <div class="dr"><span class="dk">Black Forest Cake</span><span class="dv">Comida favorita oficial</span></div>
          <div class="dr"><span class="dk">Sobremesas doces</span><span class="dv">Gosta de doces em geral</span></div>
          <div class="dr"><span class="dk">Gatos & animais pequenos</span><span class="dv">Afinidade especial — interage frequentemente com eles</span></div>
          <div class="dr"><span class="dk">Armas & armamento</span><span class="dv">Um de seus hobbies principais</span></div>
        </div>

        <div class="dtable">
          <div class="dth">Desgostos</div>
          <div class="dr"><span class="dk">Humanidade (em geral)</span><span class="dv">Ódio latente desenvolvido ao longo dos anos</span></div>
          <div class="dr"><span class="dk">Ser chamada de "boa pessoa"</span><span class="dv">Reação hostil imediata — não se considera uma pessoa boa</span></div>
        </div>

        <div class="dtable">
          <div class="dth">Medos</div>
          <div class="dr"><span class="dk">Perder a humanidade</span><span class="dv">Teme se tornar um monstro sem esperança de redenção</span></div>
          <div class="dr"><span class="dk">Herança chunibyo</span><span class="dv">Sente vergonha dos hábitos de delírios de grandeza do passado</span></div>
          <div class="dr"><span class="dk">Perder o controle dos clones</span><span class="dv">Os clones possuem livre-arbítrio — teme que desobedeçam</span></div>
        </div>

        <div class="dtable">
          <div class="dth">Traumas</div>
          <div class="dr"><span class="dk">Sawa</span><span class="dv">Manipulada por uma deusa a matar sua melhor amiga. O evento fraturou sua personalidade e é a raiz de tudo que ela é hoje.</span></div>
        </div>

        <div class="dtable full">
          <div class="dth">Hobbies</div>
          <div class="dr"><span class="dk">Armas & armamento</span><span class="dv">Estudo e coleção</span></div>
          <div class="dr"><span class="dk">Sobremesas</span><span class="dv">Preparo e degustação de doces</span></div>
          <div class="dr"><span class="dk">Cuidar de gatos</span><span class="dv">Interação com felinos e pequenos animais</span></div>
        </div>

      </div>
    </section>

    <!-- 03 LORE -->
    <section id="lore" class="block">
      <div class="bh"><span class="bn">03</span><h2>Lore</h2></div>
      <div class="timeline">

        <div class="te">
          <div class="tm"><span class="md"/><span class="ml"/></div>
          <div class="tb">
            <h3>O Início</h3>
            <p>Kurumi cresceu sendo o tipo de pessoa difícil de ignorar. Não pela beleza —
            embora soubesse usar isso — mas por algo mais sutil, uma presença que fazia as
            pessoas quererem se aproximar sem entender bem o porquê. Filha de uma família
            abastada, aprendeu cedo a ler ambientes e pessoas antes de se expor a eles.</p>
            <p>A única pessoa que nunca precisou ser lida era Sawa. Com ela não havia cálculo,
            não havia performance. Era a única amizade que Kurumi tinha que não precisava de
            manutenção — e exatamente por isso, foi a que a deusa escolheu usar contra ela.</p>
          </div>
        </div>

        <div class="te">
          <div class="tm"><span class="md"/><span class="ml"/></div>
          <div class="tb">
            <h3>O Dom</h3>
            <p>A entidade se apresentou de forma quase banal. Uma guardiã, disse ela — alguém
            que a havia observado e reconhecido como especial entre os comuns. Ofereceu a ela
            o <em>Zafkiel</em>, um anjo nascido do próprio tecido do tempo, capaz de manipulá-lo
            através de balas disparadas por um relógio que se tornava arma.</p>
            <p>O custo era direto: usar as balas consumia sua própria força vital. Para compensar,
            ela precisaria absorver o tempo de vida de outros. Kurumi aceitou. A deusa apontou
            alvos. Ela caçou sem questionar, porque confiava em quem a havia escolhido.
            Esse foi o erro.</p>
          </div>
        </div>

        <div class="te">
          <div class="tm"><span class="md red"/><span class="ml"/></div>
          <div class="tb">
            <h3>Sawa</h3>
            <p>Kurumi nunca soube exatamente como a deusa fez. Memórias distorcidas, percepções
            reescritas, uma urgência fabricada que não deixou espaço para pensar. Quando a névoa
            passou, Sawa estava no chão.</p>
            <p>Ela havia puxado o gatilho.</p>
            <p>A deusa desapareceu sem explicação, sem rastro. E Kurumi ficou sozinha com o
            Zafkiel nas mãos e um buraco no peito que nenhuma bala do relógio conseguia alcançar.
            A garota que existia antes de tudo isso não morreu. Pior: ficou presa lá dentro,
            olhando para fora através de um sorriso que aprendeu a nunca vacilar.</p>
          </div>
        </div>

        <div class="te">
          <div class="tm"><span class="md"/><span class="ml"/></div>
          <div class="tb">
            <h3>O Sistema</h3>
            <p>Com o tempo — décadas, embora seu rosto não mostre — Kurumi desenvolveu um método.
            Ela consome o tempo de vida de pessoas que julga ruins. Não é justiça, ela sabe disso.
            É combustível. O Zafkiel precisa de tempo para operar, e ela precisa do Zafkiel para
            um dia chegar até o momento em que Sawa morreu e desfazê-lo.</p>
            <p>O objetivo central permanece: encontrar a deusa. E para isso, ela sabe que vai
            precisar de algo além do Zafkiel — um poder capaz de localizar qualquer coisa em
            qualquer ponto do Cosmos. Esse poder existe. Ela ainda não tem. Mas é apenas uma
            questão de tempo.</p>
          </div>
        </div>

        <div class="te">
          <div class="tm"><span class="md gold"/><span class="ml"/></div>
          <div class="tb">
            <h3>Atlas & Kyan</h3>
            <p>Em meio às investigações, um dos clones cruzou com um portal que não estava
            nos planos. Kurumi entrou pessoalmente — qualquer convergência de energia cósmica
            é um dado relevante, e Atlas era exatamente isso.</p>
            <p>Ela não sofreu os jogos do Deus do Caos da forma que a maioria sofreu. Enquanto
            outros reagiam, ela observava. Os clones mapeavam o território enquanto o corpo
            principal permanecia seguro nas margens. Foi nesse silêncio calculado que
            <strong>Kyan</strong> a notou — e a titulou <em>Anjo do Deus da Destruição</em>.</p>
            <p>Kurumi aceitou na hora. O título é uma ferramenta. Acesso, peso, liberdade de
            movimento. Ela é pragmática demais para recusar algo útil por questão de princípio.</p>
          </div>
        </div>

        <div class="te last">
          <div class="tm"><span class="md gold"/></div>
          <div class="tb">
            <h3>Agora</h3>
            <p>Ela está no novo mundo. Sem aliados reais, sem vínculos que não possam ser
            cortados se necessário. Os clones circulam, investigam, mapeiam. O sorriso está
            no lugar certo.</p>
            <p>Em algum lugar, a deusa que destruiu tudo que importava ainda existe.
            E Kurumi tem tempo. Literalmente.</p>
          </div>
        </div>

      </div>
    </section>

    <!-- 04 ZAFKIEL -->
    <section id="zafkiel" class="block">
      <div class="bh"><span class="bn">04</span><h2>Zafkiel — O Anjo do Tempo</h2></div>

      <p class="zdesc">
        Anjo nascido do tecido do tempo. Se manifesta como um relógio gigante acompanhado de
        dois revólveres antigos — um mosquete (ponteiro dos minutos) e uma pistola flintlock
        (ponteiro das horas), com formato de armas do século XIX. Cada bala carregada de um
        número do relógio possui um efeito diferente sobre o tempo. O custo de uso é sempre
        o mesmo: força vital de Kurumi, representada pelo relógio em seu olho esquerdo
        girando no sentido horário.
      </p>

      <!-- LAYOUT RELÓGIO + INFO -->
      <div class="zaflayout">

        <!-- RELÓGIO -->
        <div class="zclock-col">
          <ZafkielClock
            :active-bullet="current + 1"
            :bullet-name="bullets[current].name"
          />
        </div>

        <!-- INFO DA BALA -->
        <div class="zinfo-col">
          <div class="znav">
            <button class="zbtn" @click="prev">←</button>
            <span class="zcounter">{{ String(current+1).padStart(2,'0') }} / 12</span>
            <button class="zbtn" @click="next">→</button>
          </div>

          <transition :name="dir" mode="out-in">
            <div class="zbullet" :key="current">
              <div class="zbmeta">
                <span class="zbnum">{{ String(bullets[current].number).padStart(2,'0') }}</span>
                <span class="zbhb">{{ bullets[current].hebrew }}</span>
              </div>
              <h3 class="zbname">{{ bullets[current].name }}</h3>
              <p class="zbeffect">{{ bullets[current].effect }}</p>
              <div v-if="bullets[current].note" class="zbnote">⚠ {{ bullets[current].note }}</div>
            </div>
          </transition>

          <div class="dots">
            <button
              v-for="(_,i) in bullets" :key="i"
              class="dot" :class="{ active: i===current }"
              @click="goTo(i)"
            />
          </div>
        </div>
      </div>

      <!-- LISTA RÁPIDA -->
      <div class="qlist">
        <button
          v-for="(b,i) in bullets" :key="i"
          class="qbtn" :class="{ active: i===current }"
          @click="goTo(i)"
        >
          <span class="qnum">{{ String(b.number).padStart(2,'0') }}</span>
          <span class="qname">{{ b.name }}</span>
        </button>
      </div>
    </section>

    <!-- 05 CLONES -->
    <section id="clones" class="block">
      <div class="bh"><span class="bn">05</span><h2>Clones</h2></div>
      <div class="icard">
        <p>Cópias de Kurumi geradas pelo Zafkiel via 9ª Bala (Tet). Cada clone possui mente
        e vontade próprias — não são extensões dela, são ela, existindo em múltiplos lugares
        ao mesmo tempo, cada uma com suas próprias experiências acumuladas de forma independente.</p>
        <p>Utilizados primariamente para investigação e coleta de informações sem exposição direta.
        Quando necessário, também atuam em combate ou como sacrifício — cada clone pode usar o
        Zafkiel independentemente, e o custo de força vital recai sobre <strong>o clone que
        dispara a bala</strong>, não sobre a Kurumi original.</p>
        <p>Quando um clone morre, essa versão simplesmente deixa de existir com tudo que viveu
        e aprendeu. Por possuírem livre-arbítrio parcial, Kurumi teme que eventualmente um clone
        escolha desobedecer — e não hesitaria em eliminá-lo se isso acontecesse.</p>
      </div>
    </section>

    <!-- OBJETIVO -->
    <section class="block obj-block">
      <div class="obj-inner">
        <p class="obj-label">Objetivo Central</p>
        <p class="obj-text">
          Encontrar a deusa que a manipulou e destruiu tudo que importava.
          Para isso, precisará de um poder além do Zafkiel — capaz de localizar
          qualquer ser em qualquer ponto do Cosmos.
        </p>
        <span class="obj-tag">Em desenvolvimento no RP</span>
      </div>
    </section>

    <div class="back-wrap">
      <RouterLink to="/" class="back-link">← Voltar</RouterLink>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import ZafkielClock from '@/components/ZafkielClock.vue'

const current = ref(0)
const dir     = ref('sl')

const bullets = [
  { number:1,  name:'Aleph',     hebrew:'一の弾アレフ',           effect:'Acelera o tempo externo do alvo. Usada frequentemente por Kurumi para aumentar sua própria velocidade em combate.' },
  { number:2,  name:'Bet',       hebrew:'二の弾ベート',           effect:'Desacelera o tempo externo do alvo. Alternativa à Zayin quando Kurumi quer conservar força vital.' },
  { number:3,  name:'Gimmel',    hebrew:'三の弾ギメル',           effect:'Acelera o tempo interno do alvo, causando envelhecimento acelerado do organismo.' },
  { number:4,  name:'Dalet',     hebrew:'四の弾ダレット',          effect:'Reverte o tempo de um alvo, restaurando ferimentos físicos. Não é capaz de ressuscitar os já mortos.' },
  { number:5,  name:'Hei',       hebrew:'五の弾ヘイ',             effect:'Permite ver um vislumbre do futuro. O uso excessivo sobrecarrega a mente pela quantidade de visões simultâneas.' },
  { number:6,  name:'Vav',       hebrew:'六の弾ヴァヴ',           effect:'Envia a consciência do alvo para o corpo de uma versão passada de si mesmo. Limitado a alguns dias no passado.' },
  { number:7,  name:'Zayin',     hebrew:'七の弾ザイン',           effect:'Congela o tempo do alvo completamente, imobilizando-o.' },
  { number:8,  name:'Het',       hebrew:'八の弾へット',            effect:'Permite ver o passado de qualquer objeto ou ser atingido pela bala.' },
  { number:9,  name:'Tet',       hebrew:'九の弾テット',           effect:'Invoca versões passadas de Kurumi como clones com mente própria e livre-arbítrio parcial, capazes de agir de forma completamente independente.' },
  { number:10, name:'Yod',       hebrew:'十の弾ユッド',           effect:'Drena o tempo de vida do alvo e transfere para Kurumi, reabastecendo sua força vital.' },
  { number:11, name:'Yod Aleph', hebrew:'十一の弾ユッド・アレフ',  effect:'Cria uma zona de devoração temporal que absorve a força vital de todos dentro da área, transferindo-a para Kurumi.' },
  { number:12, name:'Yod Bet',   hebrew:'十二の弾ユッド・ベート',  effect:'A bala mais poderosa. Envia a consciência para qualquer ponto do passado. O custo recai sobre o clone que a dispara — a Kurumi original permanece intacta.', note:'Kurumi ainda não acumulou força vital suficiente. Objetivo de longo prazo no RP.' },
]

function prev()  { dir.value='sr'; current.value=(current.value-1+12)%12 }
function next()  { dir.value='sl'; current.value=(current.value+1)%12 }
function goTo(i) { dir.value=i>current.value?'sl':'sr'; current.value=i }
</script>

<style scoped>
.kp { max-width:1100px; margin:0 auto; padding:0 32px 80px; }

/* HERO */
.hero { display:grid; grid-template-columns:300px 1fr; min-height:440px;
  margin:0 -32px 64px; border-bottom:1px solid var(--border); }
.hero-img-wrap { position:relative; overflow:hidden; }
.hero-img-wrap img { width:100%; height:100%; object-fit:cover; object-position:top; display:block; }
.hero-img-fade { position:absolute; inset:0;
  background:linear-gradient(to right,transparent 55%, var(--bg) 100%); }
.hero-content { display:flex; flex-direction:column; justify-content:flex-end;
  padding:48px 48px 48px 28px; }
.hero-tag  { font-size:11px; letter-spacing:3px; text-transform:uppercase;
  color:var(--gold); margin-bottom:12px; }
.hero-name { font-size:88px; letter-spacing:-3px; line-height:.9; margin-bottom:28px; }
.hero-stats { display:flex; align-items:center; gap:18px; flex-wrap:wrap; }
.stat { display:flex; flex-direction:column; gap:3px; }
.stat-label { font-size:10px; text-transform:uppercase; letter-spacing:1.5px; color:var(--text-muted); }
.stat-value { font-size:16px; color:var(--text-h); font-weight:500; }
.stat-value.gold { color:var(--gold); }
.stat-sep { width:1px; height:30px; background:var(--border); }

/* NAV */
.anav { display:flex; border:1px solid var(--border); border-radius:8px;
  overflow:hidden; margin-bottom:64px; }
.anav a { flex:1; text-align:center; padding:12px 6px; font-size:11px; letter-spacing:1px;
  text-transform:uppercase; color:var(--text-muted); border-right:1px solid var(--border);
  transition:background .2s,color .2s; }
.anav a:last-child { border-right:none; }
.anav a:hover { background:var(--gold-dim); color:var(--gold); }

/* BLOCOS */
.block { margin-bottom:72px; padding-bottom:72px; border-bottom:1px solid var(--border); }
.bh { display:flex; align-items:baseline; gap:16px; margin-bottom:40px; }
.bn { font-family:var(--font-display); font-size:48px; font-weight:700;
  color:var(--gold-border); line-height:1; }
.bh h2 { font-size:32px; letter-spacing:-.5px; }

/* ICARD */
.icard { background:var(--bg-surface); border:1px solid var(--border);
  border-radius:10px; padding:28px 32px; display:flex; flex-direction:column; gap:14px; }
.icard h3 { font-size:13px; text-transform:uppercase; letter-spacing:1.5px;
  color:var(--gold); margin-bottom:6px; }
.icard p { font-size:15px; color:var(--text); line-height:1.7; }
.icard strong { color:var(--text-h); }
.two-col { display:grid; grid-template-columns:1fr 1fr; gap:16px; }

/* DATA */
.data-grid { display:grid; grid-template-columns:1fr 1fr; gap:16px; }
.dtable { background:var(--bg-surface); border:1px solid var(--border);
  border-radius:10px; overflow:hidden; }
.dtable.full { grid-column:1/-1; }
.dth { background:var(--gold-dim); border-bottom:1px solid var(--gold-border);
  padding:12px 20px; font-size:11px; text-transform:uppercase; letter-spacing:2px; color:var(--gold); }
.dr { display:flex; gap:16px; padding:14px 20px;
  border-bottom:1px solid var(--border); align-items:flex-start; }
.dr:last-child { border-bottom:none; }
.dk { font-size:14px; color:var(--text-h); font-weight:500; min-width:160px; flex-shrink:0; }
.dv { font-size:14px; color:var(--text); line-height:1.5; }

/* TIMELINE */
.timeline { display:flex; flex-direction:column; }
.te { display:flex; gap:24px; }
.tm { display:flex; flex-direction:column; align-items:center; flex-shrink:0; padding-top:4px; }
.md { width:12px; height:12px; border-radius:50%; background:var(--text-muted);
  border:2px solid var(--bg); flex-shrink:0; z-index:1; }
.md.red  { background:var(--red-bright); }
.md.gold { background:var(--gold); }
.ml { width:1px; flex:1; background:var(--border); margin-top:4px; min-height:40px; }
.tb { padding-bottom:40px; flex:1; }
.te.last .tb { padding-bottom:0; }
.tb h3 { font-size:22px; color:var(--text-h); margin-bottom:14px; letter-spacing:-.3px; }
.tb p  { font-size:15px; color:var(--text); line-height:1.75; margin-bottom:10px; }
.tb p:last-child { margin-bottom:0; }
.tb em { color:var(--gold); font-style:italic; }
.tb strong { color:var(--text-h); }

/* ZAFKIEL */
.zdesc { font-size:15px; color:var(--text); line-height:1.7; margin-bottom:32px; max-width:720px; }
.zaflayout { display:grid; grid-template-columns:300px 1fr; gap:48px;
  align-items:center; margin-bottom:32px; }
.zclock-col { position:sticky; top:24px; }
.zinfo-col  { display:flex; flex-direction:column; gap:20px; }
.znav { display:flex; align-items:center; gap:16px; }
.zcounter { font-family:var(--font-display); font-size:20px; color:var(--text-muted);
  letter-spacing:2px; min-width:60px; text-align:center; }
.zbtn { background:var(--bg-surface); border:1px solid var(--border); color:var(--gold);
  width:40px; height:40px; border-radius:50%; cursor:pointer; font-size:16px;
  display:flex; align-items:center; justify-content:center; transition:border-color .2s,background .2s; }
.zbtn:hover { border-color:var(--gold-border); background:var(--gold-dim); }
.zbullet { background:var(--bg-surface); border:1px solid var(--border);
  border-radius:12px; padding:32px; display:flex; flex-direction:column; gap:12px; }
.zbmeta { display:flex; align-items:center; gap:14px; }
.zbnum  { font-family:var(--font-display); font-size:44px; font-weight:700;
  color:var(--gold-border); line-height:1; }
.zbhb   { font-size:12px; color:var(--text-muted); font-family:monospace; }
.zbname { font-family:var(--font-display); font-size:40px; color:var(--text-h);
  letter-spacing:-1px; margin:0; }
.zbeffect { font-size:15px; color:var(--text); line-height:1.7; }
.zbnote { font-size:13px; color:var(--gold); background:var(--gold-dim);
  border:1px solid var(--gold-border); border-radius:6px; padding:12px 16px; }

.dots { display:flex; justify-content:center; gap:6px; }
.dot  { width:6px; height:6px; border-radius:50%; background:var(--text-muted);
  border:none; cursor:pointer; transition:background .2s,transform .2s; padding:0; }
.dot.active { background:var(--gold); transform:scale(1.4); }

.qlist { display:grid; grid-template-columns:repeat(6,1fr); gap:4px; }
.qbtn  { background:var(--bg-surface); border:1px solid var(--border); border-radius:6px;
  padding:8px 10px; cursor:pointer; text-align:left;
  transition:border-color .2s,background .2s; display:flex; flex-direction:column; gap:2px; }
.qbtn:hover, .qbtn.active { border-color:var(--gold-border); background:var(--gold-dim); }
.qnum  { font-size:10px; color:var(--gold); font-family:monospace; }
.qname { font-size:12px; color:var(--text-h); font-weight:500; }

/* OBJETIVO */
.obj-block { border:none; padding-bottom:0; }
.obj-inner { background:linear-gradient(135deg,var(--red-dim),var(--gold-dim));
  border:1px solid var(--gold-border); border-radius:12px; padding:40px 48px; text-align:center; }
.obj-label { font-size:11px; text-transform:uppercase; letter-spacing:3px;
  color:var(--gold); margin-bottom:16px; }
.obj-text  { font-family:var(--font-display); font-size:22px; color:var(--text-h);
  line-height:1.5; max-width:600px; margin:0 auto 20px; }
.obj-tag   { font-size:12px; color:var(--text-muted); background:var(--bg-surface);
  border:1px solid var(--border); border-radius:20px; padding:4px 14px; display:inline-block; }

.back-wrap { padding-top:16px; }
.back-link { font-size:14px; color:var(--text-muted); transition:color .2s; }
.back-link:hover { color:var(--gold); }

/* TRANSIÇÕES DO CARROSSEL */
.sl-enter-active,.sl-leave-active,.sr-enter-active,.sr-leave-active {
  transition:all .28s ease; }
.sl-enter-from { transform:translateX(28px); opacity:0; }
.sl-leave-to   { transform:translateX(-28px); opacity:0; }
.sr-enter-from { transform:translateX(-28px); opacity:0; }
.sr-leave-to   { transform:translateX(28px); opacity:0; }

/* RESPONSIVO */
@media(max-width:900px){
  .hero { grid-template-columns:1fr; min-height:auto; margin:0 0 48px; }
  .hero-img-wrap { height:280px; }
  .hero-img-fade { background:linear-gradient(to bottom,transparent 50%,var(--bg) 100%); }
  .hero-content { padding:24px; }
  .hero-name { font-size:56px; }
  .two-col { grid-template-columns:1fr; }
  .data-grid { grid-template-columns:1fr; }
  .dtable.full { grid-column:1; }
  .zaflayout { grid-template-columns:1fr; }
  .zclock-col { position:static; max-width:260px; margin:0 auto; }
  .qlist { grid-template-columns:repeat(4,1fr); }
  .anav a { font-size:10px; padding:10px 4px; }
}
@media(max-width:600px){
  .kp { padding:0 16px 60px; }
  .qlist { grid-template-columns:repeat(3,1fr); }
  .obj-inner { padding:28px 20px; }
}
</style>
```

---

## `src/components/ZafkielClock.vue`

> Arquivo entregue separadamente (`ZafkielClock.vue`). Salvar em `src/components/`.

---

## Notas para o IA local

### Relógio — como funciona
| Elemento | Comportamento |
|---|---|
| Ponteiro curto (flintlock/horas) | Aponta para o numeral romano da bala ativa |
| Ponteiro longo (mosquete/minutos) | Fica 180° oposto — tensão visual |
| Arco dourado na borda | Cresce de 1/12 a 12/12 conforme a bala |
| Numeral romano ativo | Maior, dourado brilhante, com halo |
| Animação de troca | `cubic-bezier(0.34,1.56,0.64,1)` — overshoot suave, como um relógio mecânico real |
| Ticks dos quartos | Círculos dourados em III, VI, IX, XII |

### Design do relógio
- Ponteiro longo = mosquete: cano fino, bocal, coronha alargada
- Ponteiro curto = flintlock: cano curto e grosso, mecanismo de pederneira lateral, coronha larga
- Face escura com gradiente radial do centro
- Pétalas decorativas nos quartos (estilo relógio ornamental)
- Ticks construídos via `onMounted` — não reativos, pois são estáticos

### Props do ZafkielClock
```ts
activeBullet: Number // 1 a 12 — qual bala está selecionada
bulletName:   String // Nome da bala exibido no interior do relógio
```

### Imagens necessárias
Apenas `src/assets/kurumi/profile.jpg` — foto da Kurumi para o hero e o card.
Nenhuma imagem de bala é necessária — substituídas pelo relógio animado.

### Rasiel
Deliberadamente omitido — será desenvolvido como arco futuro no RP.