Logo color : eb7400

Stormy: #494E6B
Cloud : #98878F
Sunset: #985E6D
Evening: #192231

Animations for everything
Sroll for more: blue line expands when hovered
loading bars
social media icons when hovered
Smooth scrolling
scroll up button



/// CIRCE ANIMATION
.rings {
  display: flex;
  flex-direction: row;
  margin-left: 490px;
}

.percent1, .percent2, svg, circle {
  width: 200px;
  height: 200px;
}

circle {
  position: absolute;
  fill: none;
  stroke-width: 10;
  transform: translate(10px, 10px);
  stroke-dasharray: 440;
  stroke-linecap: round;
}

circle:nth-child(1) {
  stroke-dashoffset: 0;
  stroke: #424242;
}

.percent1 circle:nth-child(2) {
  stroke-dashoffset: calc(440 - (440 * 75) / 100);
  stroke: gold;
  animation: percent 1.5s linear;
  animation-delay: 1s;
}

.percent2 circle:nth-child(2) {
  stroke-dashoffset: calc(440 - (440 * 33) / 100);
  stroke: salmon;
  animation: percent 1.8s linear;
  animation-delay: 1.2s;
}

.number {
  position: relative;
  bottom: 190px;
  right: -50px;
  color: #fff;
}

h2 {
  font-size: 48px;
}

span {
  font-size: 24px;
  opacity: .7;
}

.percent1 span {
  color: gold;
}

.percent2 span {
  color: salmon;
}

@keyframes percent {
  0% {
    stroke-dashoffset: 0;
    stroke-width: 0;
  }
}



        <div class="rings">
            <div class="percent1">
                <svg>
                  <circle cx="70" cy="70" r="70"></circle>
                  <circle cx="70" cy="70" r="70"></circle>
                </svg>
                <div class="number">
                  <h2>75<span>%</span></h2>
                </div>
          </div>
            <div class="percent2">
                <svg>
                  <circle cx="70" cy="70" r="70"></circle>
                  <circle cx="70" cy="70" r="70"></circle>
                </svg>
                <div class="number">
                  <h2>33<span>%</span></h2>
                </div>
            </div>
    </section>
///