(function game() {
  const gameStartEl = document.getElementById('game-start');
  const gameScoreValueEl = document.getElementById('score-value');
  const gameAreaEl = document.getElementById('game-area');
  const gameOverEl = document.getElementById('game-over');
  const wizardEl = document.getElementById('wizard');

  const pressedKeys = new Set();

  const config = {
    speed: 2,
    wizardMovingMultyplier: 4,
    fireballMovingMultyplier: 5,
    fireInterval: 1000,
    cloudSpanInterval: 3000 + 20000 * Math.random(),
    bugSpanInterval: 1000,
    bugKillScore: 2000,
  };

  const utils = {
    pxToNumber(val) {
      return +val.replace('px', '');
    },
    nuberToPx(val) {
      return `${val}px`;
    },
    randomNumberBetween(min, max) {
      return Math.floor(Math.random() * max) + min;
    },
    hasCollision(x, y) {
      const xRect = x.getBoundingClientRect();
      const yRect = y.getBoundingClientRect();

      return !(
        xRect.top > yRect.bottom ||
        xRect.bottom < yRect.top ||
        xRect.right < yRect.left ||
        xRect.left > yRect.right
      );
    },
  };

  const scene = {
    get fireballs() {
      return Array.from(document.querySelectorAll('.fire-ball'));
    },
    get clouds() {
      return Array.from(document.querySelectorAll('.cloud'));
    },
    get bugs() {
      return Array.from(document.querySelectorAll('.bug'));
    },
  };

  const wizardCoordinates = {
    wizardEl,
    get x() {
      return utils.pxToNumber(this.wizardEl.style.left);
    },
    set x(newX) {
      if (newX < 0) {
        newX = 0;
      } else if (newX + wizardEl.offsetWidth > gameAreaEl.offsetWidth) {
        newX = gameAreaEl.offsetWidth - wizardEl.offsetWidth;
      }
      this.wizardEl.style.left = utils.nuberToPx(newX);
    },
    get y() {
      return utils.pxToNumber(this.wizardEl.style.top);
    },
    set y(newY) {
      if (newY < 0) {
        newY = 0;
      } else if (newY + wizardEl.offsetHeight > gameAreaEl.offsetHeight) {
        newY = gameAreaEl.offsetHeight - wizardEl.offsetHeight;
      }
      this.wizardEl.style.top = utils.nuberToPx(newY);
    },
  };

  function createGameplay() {
    return {
      loopId: null,
      nextRenderQueue: [],
      lastFireBallTimestamp: 0,
      lastCloudTimestamp: 0,
      lastBugTimestamp: 0,
    };
  }

  let gameplay;

  function init() {
    gameplay = createGameplay();
    gameScoreValueEl.textContent = 0;
    wizardCoordinates.x = 200;
    wizardCoordinates.y = 200;
    wizardEl.classList.remove('hidden');
    gameOverEl.classList.add('hidden');

    gameLoop(0);
  }

  function gameOver() {
    window.cancelAnimationFrame(gameplay.loopId);
    gameOverEl.classList.remove('hidden');
    gameStartEl.classList.remove('hidden');
  }

  function addGameElementFactory(className) {
    return function addElement(x, y) {
      const e = document.createElement('div');
      e.classList.add(className);
      e.style.top = utils.nuberToPx(y);
      e.style.left = utils.nuberToPx(x);
      gameAreaEl.appendChild(e);
    };
  }

  const addFireBall = addGameElementFactory('fire-ball');
  const addCloud = addGameElementFactory('cloud');
  const addBug = addGameElementFactory('bug');

  const pressedKeyActionMap = {
    ArrowUp() {
      wizardCoordinates.y -= config.speed * config.wizardMovingMultyplier;
    },
    ArrowDown() {
      wizardCoordinates.y += config.speed * config.wizardMovingMultyplier;
    },
    ArrowLeft() {
      wizardCoordinates.x -= config.speed * config.wizardMovingMultyplier;
    },
    ArrowRight() {
      wizardCoordinates.x += config.speed * config.wizardMovingMultyplier;
    },
    Space(timestamp) {
      if (
        wizardEl.classList.contains('wizard-fire') ||
        timestamp - createGameplay.lastFireBallTimestamp < config.fireInterval
      ) {
        return;
      }
      addFireBall(
        wizardCoordinates.x + wizardEl.offsetHeight - 10,
        wizardCoordinates.y
      );
      createGameplay.lastFireBallTimestamp = timestamp;
      wizardEl.classList.add('wizard-fire');
      gameplay.nextRenderQueue = gameplay.nextRenderQueue.concat(
        function clearWizardFire() {
          if (pressedKeys.has('Space')) {
            return false;
          }
          wizardEl.classList.remove('wizard-fire');
          return true;
        }
      );
    },
  };

  function processFireBalls() {
    scene.fireballs.forEach((x) => {
      const newX =
        config.speed * config.fireballMovingMultyplier +
        utils.pxToNumber(x.style.left);
      if (newX + x.offsetWidth >= gameAreaEl.offsetWidth) {
        x.remove();
        return;
      }
      x.style.left = utils.nuberToPx(newX);
    });
  }

  function processNextRenderQueue() {
    gameplay.nextRenderQueue = gameplay.nextRenderQueue.reduce((x, y) => {
      if (y()) {
        return x;
      }
      return x.concat(y);
    }, []);
  }

  function processPressedKeys(timestamp) {
    pressedKeys.forEach((x) => {
      const handler = pressedKeyActionMap[x];
      if (!handler) {
        return;
      }
      handler(timestamp);
    });
  }

  function processElementFactory(
    addFn,
    elementWidth,
    gameplayTimestampName,
    sceneName,
    configInterval,
    additionalElementProcessor
  ) {
    return function (timestamp) {
      if (
        timestamp - gameplay[gameplayTimestampName] >
        config[configInterval]
      ) {
        const x = gameAreaEl.offsetWidth;
        const y = utils.randomNumberBetween(
          0,
          gameAreaEl.offsetHeight - elementWidth
        );
        addFn(x, y);
        gameplay[gameplayTimestampName] = timestamp;
      }
      scene[sceneName].forEach((x) => {
        const newX = utils.pxToNumber(x.style.left) - config.speed;
        if (additionalElementProcessor && additionalElementProcessor(x)) {
          return;
        }
        if (newX + elementWidth < 0) {
          x.remove();
          return;
        }
        x.style.left = utils.nuberToPx(newX);
      });
    };
  }

  const processClouds = processElementFactory(
    addCloud,
    200,
    'lastCloudTimestamp',
    'clouds',
    'cloudSpanInterval'
  );

  function bugElementProcessor(bugEl) {
    const fireball = scene.fireballs.find((x) => utils.hasCollision(x, bugEl));
    if (fireball) {
      fireball.remove();
      bugEl.remove();
      gameScoreValueEl.textContent =
        config.bugKillScore + +gameScoreValueEl.textContent;
      return true;
    }
    if (utils.hasCollision(wizardEl, bugEl)) {
      gameOver();
      return true;
    }
    return false;
  }

  const processBugs = processElementFactory(
    addBug,
    60,
    'lastBugTimestamp',
    'bugs',
    'bugSpanInterval',
    bugElementProcessor
  );

  function applyGravity() {
    const isInAir =
      wizardCoordinates.y + wizardEl.offsetHeight !== gameAreaEl.offsetHeight;
    if (isInAir) {
      wizardCoordinates.y += config.speed;
    }
  }

  function gameLoop(timestamp) {
    gameplay.loopId = window.requestAnimationFrame(gameLoop);
    processPressedKeys(timestamp);
    applyGravity(timestamp);
    processNextRenderQueue(timestamp);
    processFireBalls(timestamp);
    processClouds(timestamp);
    processBugs(timestamp);

    gameScoreValueEl.textContent++;
  }

  gameStartEl.addEventListener('click', function gameStartHandler() {
    gameStartEl.classList.add('hidden');
    init();
  });

  document.addEventListener('keyup', function keyupHandler(x) {
    pressedKeys.delete(x.code);
  });
  document.addEventListener('keydown', function keydownHandler(x) {
    pressedKeys.add(x.code);
  });
})();
