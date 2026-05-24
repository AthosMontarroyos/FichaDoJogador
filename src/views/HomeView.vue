<template>
  <div class="home">

    <div class="top-bar">
      <span class="bar-line" />
      <span class="bar-label">CosmicSMP · Ficha de Jogador</span>
      <span class="bar-line" />
    </div>

    <!-- PERFIL -->
    <section class="profile">
      <div class="profile-avatar">
        <img src="@/assets/discord.jpg" alt="Avatar" />
      </div>
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
        <span class="section-line" />
        <h2>Ficha do Jogador</h2>
        <span class="section-line" />
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
            <strong>ON-RP:</strong> agir de acordo com o contexto interpretando somente o personagem.<br />
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
        <span class="section-line" />
        <h2>Personagens</h2>
        <span class="section-line" />
      </div>
      <div class="character-grid">
        <RouterLink to="/kurumi" class="character-card">
          <div class="card-img-wrap">
            <img src="@/assets/kurumi/profile.jpg" alt="Kurumi" />
            <div class="card-overlay">Ver Ficha →</div>
          </div>
          <div class="card-info">
            <span class="card-name">Kurumi</span>
            <span class="card-type">Entidade · Anjo da Destruição</span>
          </div>
        </RouterLink>
      </div>
    </section>

    <div class="footer-line" />
  </div>
</template>

<script setup lang="ts">
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
.profile-avatar { width:80px; height:80px; border-radius:50%; border:2px solid var(--gold-border);
  overflow:hidden; flex-shrink:0; }
.profile-avatar img { width:100%; height:100%; object-fit:cover; display:block; }
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
