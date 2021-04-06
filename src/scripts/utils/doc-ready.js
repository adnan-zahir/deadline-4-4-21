const docReady = (fn) => {
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(fn, 1);
  } else {
    document.addEventlistener('DOMContentLoaded', fn);
  }
};

export default docReady;
