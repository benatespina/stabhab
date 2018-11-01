import React, {Fragment, PureComponent} from 'react';
import Draggable from 'react-draggable';
import {handleReset} from './../Root/Root';
import {setFakeRequestTime, setPaused, setPauseNewRequests, setProgressHandler} from './../../../api/fakeFetcher';
import './Debugger.css';

class Debugger extends PureComponent {
  state = {
    iteration: 0,
    strategy: 'async',
    requestTime: 1,
    showDebugger: true,
    pauseNewRequests: false,
    waitTime: 0,
    requests: {},
  };

  componentDidMount() {
    setFakeRequestTime(this.state.requestTime * 1000);
    setProgressHandler(this.handleProgress);
    window.addEventListener('keydown', e => {
      if (e.key.toLowerCase() === '/') {
        this.setState(state => ({showDebugger: !state.showDebugger}));
      } else if (e.key.toLowerCase() === 'p') {
        this.togglePauseRequests();
      }
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.requestTime !== this.state.requestTime) {
      setFakeRequestTime(this.state.requestTime * 1000);
    }
  }

  handleReset = () => {
    this.setState(state => ({requests: {}}));
    handleReset();
  };

  handleProgress = (url, progress, isPaused) => {
    this.setState(state => ({
      requests: {
        ...state.requests,
        [url]: {url, progress, isPaused},
      },
    }));
  };

  moveLatency = event => {
    event.stopPropagation();
    this.setState({requestTime: parseFloat(event.target.value)});
  };

  togglePauseRequests = () => {
    this.setState(
      prevState => {
        return {pauseNewRequests: !prevState.pauseNewRequests};
      },
      () => {
        setPauseNewRequests(this.state.pauseNewRequests);
      },
    );
  };

  render() {
    if (!this.state.showDebugger) {
      return null;
    }

    return (
      <Draggable cancel="input">
        <div className="debugger">
          <div>
            Latency: {this.state.requestTime} second
            {this.state.requestTime !== 1 ? 's' : ''}{' '}
            <input
              className="debugger__latency-bar"
              type="range"
              min="0"
              max="5"
              step="0.5"
              value={this.state.requestTime}
              onChange={this.moveLatency}
            />
          </div>
          <label>
            <input type="checkbox" checked={this.state.pauseNewRequests} onChange={this.togglePauseRequests} />
            Pause new requests
          </label>
          <br />
          <br />
          {Object.values(this.state.requests).filter(x => x.progress !== 100).length > 0 ? (
            <div className="debugger__title">Loading</div>
          ) : (
            <Fragment>
              <div className="debugger__title">Loading</div>
              <small className="debugger__title-detail">(None)</small>
            </Fragment>
          )}
          {Object.keys(this.state.requests)
            .reverse()
            .map(url => {
              const {progress, isPaused} = this.state.requests[url];
              if (progress === 100) {
                return null;
              }

              return (
                <div className="debugger__request" key={url} onClick={event => setPaused(url, !isPaused)}>
                  <div
                    className={
                      isPaused
                        ? 'debugger__request-progress debugger__request-progress--paused'
                        : 'debugger__request-progress'
                    }
                    style={{width: `${progress}%`}}
                  />
                  {url}
                </div>
              );
            })}
          {Object.values(this.state.requests).filter(x => x.progress === 100).length > 0 ? (
            <Fragment>
              <br />
              <div className="debugger__title">
                Finished{' '}
                <button className="debugger__bin" onClick={this.handleReset}>
                  🗑
                </button>
              </div>
            </Fragment>
          ) : (
            <Fragment>
              <br />
              <div className="debugger__title">Finished</div>
              <small className="debugger__title-detail">(None)</small>
            </Fragment>
          )}
          {Object.keys(this.state.requests)
            .reverse()
            .map(url => {
              const {progress} = this.state.requests[url];
              if (progress !== 100) {
                return null;
              }

              return (
                <div className="debugger__request" key={url}>
                  <div
                    className={
                      progress === 100
                        ? 'debugger__request-progress debugger__request-progress--finished'
                        : 'debugger__request-progress'
                    }
                    style={{width: `${progress}%`}}
                  />
                  {url}
                </div>
              );
            })}
        </div>
      </Draggable>
    );
  }
}

export default Debugger;
