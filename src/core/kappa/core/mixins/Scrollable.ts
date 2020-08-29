type Constructor<T = {}> = new (...args: any[]) => T;

/**
 * Scrollable
 *
 * Specifies if component has scroll
 */
function Scrollable<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    public scroll: boolean = false;

    /**
     * Set scroll
     * @param {boolean} enabled - check if scroll is enabled
     */
    public setScroll(enabled: boolean = false): this {
      this.scroll = enabled;
      return this;
    }
  };
}

export default Scrollable;
