<template>
  <div class="clock-root">
    <div class="clock-glow" />
    <svg
      class="clock-svg"
      viewBox="0 0 320 320"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="zaf-face" cx="50%" cy="38%" r="65%">
          <stop offset="0%"   stop-color="#1e1a10" />
          <stop offset="60%"  stop-color="#0d0b06" />
          <stop offset="100%" stop-color="#050403" />
        </radialGradient>
        <linearGradient id="zaf-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stop-color="#f5e070" />
          <stop offset="25%"  stop-color="#d29f22" />
          <stop offset="55%"  stop-color="#8c6510" />
          <stop offset="80%"  stop-color="#d29f22" />
          <stop offset="100%" stop-color="#f5e070" />
        </linearGradient>
        <linearGradient id="zaf-min" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stop-color="#f5e070" />
          <stop offset="40%"  stop-color="#d29f22" />
          <stop offset="100%" stop-color="#6a4a08" />
        </linearGradient>
        <linearGradient id="zaf-hour" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stop-color="#d29f22" />
          <stop offset="100%" stop-color="#4a3206" />
        </linearGradient>
        <filter id="zaf-glow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="2" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="zaf-glow-strong" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="4.5" result="b"/>
          <feMerge>
            <feMergeNode in="b"/>
            <feMergeNode in="b"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      <circle cx="160" cy="160" r="158" fill="none" stroke="url(#zaf-gold)" stroke-width="0.5" opacity="0.25"/>
      <circle cx="160" cy="160" r="154" fill="none" stroke="url(#zaf-gold)" stroke-width="0.5" opacity="0.15"/>

      <g opacity="0.45" fill="none" stroke="url(#zaf-gold)" stroke-width="0.8">
        <path d="M160 6 Q170 30 160 48 Q150 30 160 6Z"/>
        <path d="M314 160 Q290 170 272 160 Q290 150 314 160Z"/>
        <path d="M160 314 Q150 290 160 272 Q170 290 160 314Z"/>
        <path d="M6 160 Q30 150 48 160 Q30 170 6 160Z"/>
      </g>

      <g fill="#d29f22" opacity="0.55">
        <polygon points="160,4  163,10 160,16 157,10"/>
        <polygon points="316,160 310,163 304,160 310,157"/>
        <polygon points="160,316 157,310 160,304 163,310"/>
        <polygon points="4,160  10,157 16,160 10,163"/>
      </g>

      <circle cx="160" cy="160" r="148" fill="url(#zaf-face)"/>
      <circle cx="160" cy="160" r="148" fill="none" stroke="url(#zaf-gold)" stroke-width="7" filter="url(#zaf-glow)"/>
      <circle cx="160" cy="160" r="140" fill="none" stroke="#d29f22" stroke-width="0.8" opacity="0.35"/>

      <g id="zaf-ticks"/>

      <circle
        cx="160" cy="160" r="134"
        fill="none"
        stroke="#d29f22"
        stroke-width="3.5"
        stroke-linecap="round"
        opacity="0.65"
        filter="url(#zaf-glow)"
        :stroke-dasharray="arcDash"
        stroke-dashoffset="0"
        :style="{
          transformOrigin: '160px 160px',
          transform: 'rotate(-90deg)',
          transition: 'stroke-dasharray 0.65s cubic-bezier(0.34,1.56,0.64,1)'
        }"
      />

      <g
        v-for="(roman, idx) in romans"
        :key="'r'+idx"
        :filter="isActive(idx) ? 'url(#zaf-glow-strong)' : ''"
      >
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

      <circle cx="160" cy="160" r="52" fill="none" stroke="#d29f22" stroke-width="0.8" opacity="0.28"/>
      <circle cx="160" cy="160" r="46" fill="none" stroke="#d29f22" stroke-width="0.4" opacity="0.18"/>
      <g opacity="0.2" fill="#d29f22">
        <ellipse cx="160" cy="148" rx="3"   ry="7"/>
        <ellipse cx="160" cy="172" rx="3"   ry="7"/>
        <ellipse cx="148" cy="160" rx="7"   ry="3"/>
        <ellipse cx="172" cy="160" rx="7"   ry="3"/>
        <ellipse cx="151" cy="151" rx="2.5" ry="6" transform="rotate(-45 151 151)"/>
        <ellipse cx="169" cy="169" rx="2.5" ry="6" transform="rotate(-45 169 169)"/>
        <ellipse cx="169" cy="151" rx="2.5" ry="6" transform="rotate(45 169 151)"/>
        <ellipse cx="151" cy="169" rx="2.5" ry="6" transform="rotate(45 151 169)"/>
      </g>

      <!-- PONTEIRO LONGO — MOSQUETE -->
      <g
        :style="{
          transform: `rotate(${handAngle}deg)`,
          transformOrigin: '160px 160px',
          transition: 'transform 0.65s cubic-bezier(0.34,1.56,0.64,1)'
        }"
        filter="url(#zaf-glow)"
      >
        <line x1="160" y1="168" x2="160" y2="56" stroke="#000" stroke-width="4" opacity="0.3" stroke-linecap="round"/>
        <rect x="158.8" y="60" width="2.4" height="78" rx="1.2" fill="url(#zaf-min)"/>
        <rect x="157.5" y="56" width="5" height="8" rx="2" fill="#f5e070" opacity="0.9"/>
        <rect x="155.5" y="124" width="9" height="3.5" rx="1" fill="#d29f22" opacity="0.8"/>
        <path d="M156.5 127.5 Q152 137 154 146 Q157.5 149 160 147 Q162.5 149 166 146 Q168 137 163.5 127.5 Z"
              fill="url(#zaf-hour)" opacity="0.9"/>
        <rect x="158.8" y="147" width="2.4" height="14" rx="1.2" fill="#6a4a08" opacity="0.7"/>
      </g>

      <!-- PONTEIRO CURTO — FLINTLOCK -->
      <g
        :style="{
          transform: `rotate(${handAngle}deg)`,
          transformOrigin: '160px 160px',
          transition: 'transform 0.65s cubic-bezier(0.34,1.56,0.64,1)'
        }"
        filter="url(#zaf-glow)"
      >
        <line x1="160" y1="168" x2="160" y2="86" stroke="#000" stroke-width="6" opacity="0.25" stroke-linecap="round"/>
        <rect x="157" y="90" width="6" height="48" rx="2.5" fill="url(#zaf-hour)"/>
        <rect x="155.5" y="85" width="9" height="9" rx="3" fill="#d29f22" opacity="0.9"/>
        <rect x="164" y="106" width="7" height="5"   rx="1"   fill="#a07010" opacity="0.8"/>
        <rect x="164" y="103" width="5" height="3.5" rx="0.5" fill="#c08818" opacity="0.7"/>
        <path d="M154.5 138 Q151 143 153 148 Q157 150 163 148 Q165 143 161.5 138 Z"
              fill="#d29f22" opacity="0.8"/>
        <path d="M155 138 Q148 149 150 159 Q155 163 160 161 Q165 163 170 159 Q172 149 165 138 Z"
              fill="url(#zaf-hour)" opacity="0.9"/>
        <rect x="157.5" y="159" width="5" height="11" rx="2" fill="#4a3206" opacity="0.8"/>
      </g>

      <circle cx="160" cy="160" r="12" fill="#d29f22" filter="url(#zaf-glow)"/>
      <circle cx="160" cy="160" r="10" fill="#0e0b06"/>
      <circle cx="160" cy="160" r="7"  fill="#d29f22" opacity="0.8"/>
      <circle cx="160" cy="160" r="4"  fill="#0e0b06"/>
      <circle cx="160" cy="160" r="2"  fill="#f5e070"/>

      <text x="160" y="228" text-anchor="middle"
        font-family="'Cormorant Garamond', Georgia, serif"
        font-size="10" letter-spacing="3" fill="#6a5020" opacity="0.7">BALA</text>
      <text x="160" y="246" text-anchor="middle"
        font-family="'Cormorant Garamond', Georgia, serif"
        font-size="14" font-weight="700" fill="#d29f22"
        filter="url(#zaf-glow)" opacity="0.9">{{ bulletName }}</text>
    </svg>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'

const props = defineProps({
  activeBullet: { type: Number, default: 1 },
  bulletName:   { type: String, default: 'Aleph' },
})

const romans = ['XII','I','II','III','IV','V','VI','VII','VIII','IX','X','XI']
const CX = 160, CY = 160, R_NUMS = 108
const CIRC = 2 * Math.PI * 134

const handAngle = computed(() => {
  const pos = props.activeBullet === 12 ? 0 : props.activeBullet
  return pos * 30
})

const arcDash = computed(() => {
  const frac = props.activeBullet / 12
  return `${frac * CIRC} ${CIRC}`
})

function numX(idx) { return CX + R_NUMS * Math.sin((idx / 12) * Math.PI * 2) }
function numY(idx) { return CY - R_NUMS * Math.cos((idx / 12) * Math.PI * 2) }
function isActive(idx) {
  if (props.activeBullet === 12) return idx === 0
  return idx === props.activeBullet
}

onMounted(() => {
  const g = document.getElementById('zaf-ticks')
  if (!g) return
  const R_OUT = 134, ns = 'http://www.w3.org/2000/svg'
  for (let i = 0; i < 60; i++) {
    const a = (i / 60) * Math.PI * 2
    const isQuarter = i % 15 === 0
    const isMajor   = i % 5  === 0
    const rIn = isQuarter ? 118 : isMajor ? 120 : 127
    const sw  = isQuarter ? 2   : isMajor ? 1.5 : 0.6
    const op  = isQuarter ? 0.9 : isMajor ? 0.7 : 0.35
    const line = document.createElementNS(ns, 'line')
    line.setAttribute('x1', CX + R_OUT * Math.sin(a))
    line.setAttribute('y1', CY - R_OUT * Math.cos(a))
    line.setAttribute('x2', CX + rIn  * Math.sin(a))
    line.setAttribute('y2', CY - rIn  * Math.cos(a))
    line.setAttribute('stroke', isQuarter ? '#f5e070' : '#d29f22')
    line.setAttribute('stroke-width', sw)
    line.setAttribute('opacity', op)
    g.appendChild(line)
    if (isQuarter) {
      const c = document.createElementNS(ns, 'circle')
      c.setAttribute('cx', CX + 115 * Math.sin(a))
      c.setAttribute('cy', CY - 115 * Math.cos(a))
      c.setAttribute('r', '3.5')
      c.setAttribute('fill', '#d29f22')
      c.setAttribute('opacity', '0.55')
      g.appendChild(c)
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