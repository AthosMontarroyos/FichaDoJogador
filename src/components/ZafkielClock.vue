<template>
  <div class="clock-root">
    <div class="clock-glow" />
    <svg
      class="clock-svg"
      viewBox="0 0 320 320"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <!-- Face escura com gradiente radial -->
        <radialGradient id="zaf-face" cx="50%" cy="38%" r="65%">
          <stop offset="0%"   stop-color="#1e1a10" />
          <stop offset="60%"  stop-color="#0d0b06" />
          <stop offset="100%" stop-color="#050403" />
        </radialGradient>

        <!-- Anel dourado -->
        <linearGradient id="zaf-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stop-color="#f5e070" />
          <stop offset="25%"  stop-color="#d29f22" />
          <stop offset="55%"  stop-color="#8c6510" />
          <stop offset="80%"  stop-color="#d29f22" />
          <stop offset="100%" stop-color="#f5e070" />
        </linearGradient>

        <!-- Ponteiro longo — mosquete (minutos) -->
        <linearGradient id="zaf-min" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stop-color="#f5e070" />
          <stop offset="40%"  stop-color="#d29f22" />
          <stop offset="100%" stop-color="#6a4a08" />
        </linearGradient>

        <!-- Ponteiro curto — flintlock (horas) -->
        <linearGradient id="zaf-hour" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stop-color="#d29f22" />
          <stop offset="100%" stop-color="#4a3206" />
        </linearGradient>

        <!-- Brilho suave -->
        <filter id="zaf-glow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="2" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>

        <!-- Brilho forte (numeral ativo) -->
        <filter id="zaf-glow-strong" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="4.5" result="b"/>
          <feMerge>
            <feMergeNode in="b"/>
            <feMergeNode in="b"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>

        <!-- Brilho vermelho para marcações seladas -->
        <filter id="zaf-red-glow" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="3" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      <!-- ═══ ANÉIS EXTERNOS DECORATIVOS ═══ -->
      <circle cx="160" cy="160" r="158" fill="none" stroke="url(#zaf-gold)" stroke-width="0.5" opacity="0.25"/>
      <circle cx="160" cy="160" r="154" fill="none" stroke="url(#zaf-gold)" stroke-width="0.5" opacity="0.15"/>

      <!-- PÉTALAS DECORATIVAS NOS QUARTOS (estilo relógio francês) -->
      <g opacity="0.5" fill="none" stroke="url(#zaf-gold)" stroke-width="0.8">
        <path d="M160 6 Q170 30 160 48 Q150 30 160 6Z"/>
        <path d="M314 160 Q290 170 272 160 Q290 150 314 160Z"/>
        <path d="M160 314 Q150 290 160 272 Q170 290 160 314Z"/>
        <path d="M6 160 Q30 150 48 160 Q30 170 6 160Z"/>
      </g>

      <!-- DIAMANTES NOS QUARTOS -->
      <g fill="#d29f22" opacity="0.6">
        <polygon points="160,4  163,10 160,16 157,10"/>
        <polygon points="316,160 310,163 304,160 310,157"/>
        <polygon points="160,316 157,310 160,304 163,310"/>
        <polygon points="4,160  10,157 16,160 10,163"/>
      </g>

      <!-- ANEL PRINCIPAL -->
      <circle cx="160" cy="160" r="148" fill="url(#zaf-face)"/>

      <!-- ANEL DE BORDA DOURADO GROSSO -->
      <circle cx="160" cy="160" r="148" fill="none" stroke="url(#zaf-gold)" stroke-width="7" filter="url(#zaf-glow)"/>

      <!-- ANEL INTERNO DOURADO FINO -->
      <circle cx="160" cy="160" r="140" fill="none" stroke="#d29f22" stroke-width="0.8" opacity="0.4"/>

      <!-- ═══ MARCAÇÕES DE MINUTO ═══ -->
      <g id="zaf-ticks"/>

      <!-- ═══ ARCO INDICADOR DA BALA ATIVA ═══ -->
      <!-- Gira no sentido anti-horário (como o olho da Kurumi) -->
      <circle
        id="zaf-arc"
        cx="160" cy="160" r="134"
        fill="none"
        stroke="#d29f22"
        stroke-width="3.5"
        stroke-linecap="round"
        opacity="0.7"
        filter="url(#zaf-glow)"
        :stroke-dasharray="arcDash"
        stroke-dashoffset="0"
        :style="{
          transformOrigin: '160px 160px',
          transform: 'rotate(-90deg)',
          transition: 'stroke-dasharray 0.65s cubic-bezier(0.34,1.56,0.64,1)'
        }"
      />

      <!-- ═══ NUMERAIS ROMANOS ═══ -->
      <g
        v-for="(roman, idx) in romans"
        :key="'r'+idx"
        :filter="isActive(idx) ? 'url(#zaf-glow-strong)' : ''"
      >
        <!-- Halo atrás do numeral ativo -->
        <circle
          v-if="isActive(idx)"
          :cx="numX(idx)"
          :cy="numY(idx)"
          r="14"
          fill="#d29f22"
          opacity="0.12"
        />
        <text
          :x="numX(idx)"
          :y="numY(idx) + 5"
          text-anchor="middle"
          dominant-baseline="middle"
          :font-size="isActive(idx) ? '15' : '11'"
          font-family="'Cormorant Garamond', Georgia, serif"
          font-weight="700"
          :fill="isActive(idx) ? '#f5e070' : '#6a5020'"
          :opacity="isActive(idx) ? 1 : 0.75"
          style="transition: all 0.4s ease;"
        >{{ roman }}</text>
      </g>

      <!-- ═══ ORNAMENTOS INTERNOS (estilo relógio de bolso) ═══ -->
      <!-- Anel ornamental interno -->
      <circle cx="160" cy="160" r="52" fill="none" stroke="#d29f22" stroke-width="0.8" opacity="0.3"/>
      <circle cx="160" cy="160" r="46" fill="none" stroke="#d29f22" stroke-width="0.4" opacity="0.2"/>

      <!-- Flor central ornamental -->
      <g opacity="0.25" fill="#d29f22">
        <ellipse cx="160" cy="148" rx="3" ry="7"/>
        <ellipse cx="160" cy="172" rx="3" ry="7"/>
        <ellipse cx="148" cy="160" rx="7" ry="3"/>
        <ellipse cx="172" cy="160" rx="7" ry="3"/>
        <ellipse cx="151" cy="151" rx="2.5" ry="6" transform="rotate(-45 151 151)"/>
        <ellipse cx="169" cy="169" rx="2.5" ry="6" transform="rotate(-45 169 169)"/>
        <ellipse cx="169" cy="151" rx="2.5" ry="6" transform="rotate(45 169 151)"/>
        <ellipse cx="151" cy="169" rx="2.5" ry="6" transform="rotate(45 151 169)"/>
      </g>

      <!-- ═══ PONTEIRO LONGO — MOSQUETE (minutos) ═══ -->
      <!-- Design de mosquete: cano longo, coronha larga -->
      <g
        :style="{
          transform: `rotate(${minuteAngle}deg)`,
          transformOrigin: '160px 160px',
          transition: 'transform 0.65s cubic-bezier(0.34,1.56,0.64,1)'
        }"
        filter="url(#zaf-glow)"
      >
        <!-- Sombra -->
        <line x1="160" y1="168" x2="160" y2="58" stroke="#000" stroke-width="4" opacity="0.3" stroke-linecap="round"/>
        <!-- Cano -->
        <rect x="158.5" y="62" width="3" height="76" rx="1.5" fill="url(#zaf-min)"/>
        <!-- Bocal -->
        <rect x="157.5" y="58" width="5" height="8" rx="2" fill="#f5e070" opacity="0.9"/>
        <!-- Guarda-mão -->
        <rect x="155" y="124" width="10" height="4" rx="1" fill="#d29f22" opacity="0.8"/>
        <!-- Coronha -->
        <path d="M156 128 Q151 138 153 148 Q157 150 160 148 Q163 150 167 148 Q169 138 164 128 Z"
              fill="url(#zaf-hour)" opacity="0.9"/>
        <!-- Cabo -->
        <rect x="158.5" y="148" width="3" height="14" rx="1.5" fill="#6a4a08" opacity="0.7"/>
      </g>

      <!-- ═══ PONTEIRO CURTO — FLINTLOCK (horas) ═══ -->
      <!-- Design de pistola flintlock: mais curta e larga -->
      <g
        :style="{
          transform: `rotate(${hourAngle}deg)`,
          transformOrigin: '160px 160px',
          transition: 'transform 0.65s cubic-bezier(0.34,1.56,0.64,1)'
        }"
        filter="url(#zaf-glow)"
      >
        <!-- Sombra -->
        <line x1="160" y1="168" x2="160" y2="82" stroke="#000" stroke-width="5" opacity="0.3" stroke-linecap="round"/>
        <!-- Cano curto e mais grosso -->
        <rect x="157.5" y="86" width="5" height="52" rx="2" fill="url(#zaf-hour)"/>
        <!-- Bocal flintlock -->
        <rect x="156" y="82" width="8" height="9" rx="2.5" fill="#d29f22" opacity="0.9"/>
        <!-- Mecanismo de pederneira (detalhe lateral) -->
        <rect x="163" y="106" width="7" height="5" rx="1" fill="#a07010" opacity="0.8"/>
        <rect x="163" y="104" width="5" height="3" rx="0.5" fill="#c08818" opacity="0.7"/>
        <!-- Guarda-mão ornamentado -->
        <path d="M154 138 Q151 142 153 146 Q157 148 163 146 Q165 142 162 138 Z"
              fill="#d29f22" opacity="0.85"/>
        <!-- Coronha larga -->
        <path d="M155 138 Q148 148 150 158 Q155 162 160 160 Q165 162 170 158 Q172 148 165 138 Z"
              fill="url(#zaf-hour)" opacity="0.9"/>
        <!-- Cabo da coronha -->
        <rect x="157.5" y="158" width="5" height="12" rx="2" fill="#4a3206" opacity="0.8"/>
      </g>

      <!-- ═══ CENTRO ═══ -->
      <!-- Anel central decorativo -->
      <circle cx="160" cy="160" r="12" fill="#d29f22" filter="url(#zaf-glow)"/>
      <circle cx="160" cy="160" r="10" fill="#0e0b06"/>
      <circle cx="160" cy="160" r="7"  fill="#d29f22" opacity="0.8"/>
      <circle cx="160" cy="160" r="4"  fill="#0e0b06"/>
      <circle cx="160" cy="160" r="2"  fill="#f5e070"/>

      <!-- ═══ LABEL INFERIOR ═══ -->
      <text
        x="160" y="230"
        text-anchor="middle"
        font-family="'Cormorant Garamond', Georgia, serif"
        font-size="10"
        letter-spacing="3"
        fill="#6a5020"
        opacity="0.7"
      >BALA</text>
      <text
        :key="'lbl-' + activeBullet"
        x="160" y="248"
        text-anchor="middle"
        font-family="'Cormorant Garamond', Georgia, serif"
        font-size="14"
        font-weight="700"
        fill="#d29f22"
        filter="url(#zaf-glow)"
        opacity="0.9"
      >{{ bulletName }}</text>

    </svg>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'

const props = defineProps<{
  activeBullet?: number
  bulletName?: string
}>()

const romans = ['XII','I','II','III','IV','V','VI','VII','VIII','IX','X','XI']
const CX = 160, CY = 160, R_NUMS = 108
const CIRC = 2 * Math.PI * 134

const bullet = computed(() => props.activeBullet ?? 1)

const bulletPos = computed(() => bullet.value === 12 ? 0 : bullet.value)

const hourAngle = computed(() => bulletPos.value * 30)

const minuteAngle = computed(() => (bulletPos.value * 30 + 180) % 360)

const arcDash = computed(() => {
  const frac = bullet.value / 12
  return `${frac * CIRC} ${CIRC}`
})

function numX(idx: number) {
  return CX + R_NUMS * Math.sin((idx / 12) * Math.PI * 2)
}
function numY(idx: number) {
  return CY - R_NUMS * Math.cos((idx / 12) * Math.PI * 2)
}
function isActive(idx: number) {
  const b = props.activeBullet ?? 1
  if (b === 12) return idx === 0
  return idx === b
}

// Constrói os ticks via JS após mount (não reativo, são estáticos)
onMounted(() => {
  const g = document.getElementById('zaf-ticks')
  if (!g) return
  const R_OUT = 134, ns = 'http://www.w3.org/2000/svg'
  for (let i = 0; i < 60; i++) {
    const a = (i / 60) * Math.PI * 2
    const isMajor: boolean = i % 5 === 0
    const isQuarter: boolean = i % 15 === 0
    const rIn: number = isQuarter ? 118 : isMajor ? 120 : 127
    const sw: number = isQuarter ? 2 : isMajor ? 1.5 : 0.6
    const op: number = isQuarter ? 0.9 : isMajor ? 0.7 : 0.35
    const line: SVGLineElement = document.createElementNS(ns, 'line') as SVGLineElement
    line.setAttribute('x1', String(CX + R_OUT * Math.sin(a)))
    line.setAttribute('y1', String(CY - R_OUT * Math.cos(a)))
    line.setAttribute('x2', String(CX + rIn  * Math.sin(a)))
    line.setAttribute('y2', String(CY - rIn  * Math.cos(a)))
    line.setAttribute('stroke', isQuarter ? '#f5e070' : '#d29f22')
    line.setAttribute('stroke-width', String(sw))
    line.setAttribute('opacity', String(op))
    g.appendChild(line)

    // Diamante nos quartos
    if (isQuarter) {
      const qx = CX + 115 * Math.sin(a)
      const qy = CY - 115 * Math.cos(a)
      const r: SVGCircleElement = document.createElementNS(ns, 'circle') as SVGCircleElement
      r.setAttribute('cx', String(qx))
      r.setAttribute('cy', String(qy))
      r.setAttribute('r', '3.5')
      r.setAttribute('fill', '#d29f22')
      r.setAttribute('opacity', '0.6')
      g.appendChild(r)
    }
  }
})
</script>

<style scoped>
.clock-root {
  position: relative;
  width: 100%;
  max-width: 320px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.clock-glow {
  position: absolute;
  inset: 15%;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(210,159,34,0.10) 0%, transparent 70%);
  pointer-events: none;
  animation: zaf-pulse 3.5s ease-in-out infinite;
}

.clock-svg {
  width: 100%;
  height: auto;
  filter: drop-shadow(0 0 24px rgba(210,159,34,0.18))
          drop-shadow(0 0 6px rgba(210,159,34,0.10));
}

@keyframes zaf-pulse {
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50%       { opacity: 1;   transform: scale(1.06); }
}
</style>
