import { Asset, Position } from '@al-engine/core';
import GameObject, { GameObjectParams } from '@al-engine/game_object';

type OnLoading = () => void;

export class Loading<Params extends GameObjectParams> extends GameObject<
  Params
> {
  animationIndex = 0;
  timer = 0;
  assets: Asset<any>;
  onLoading: OnLoading;

  constructor(position: Position, assets: Asset<any>, onLoading: OnLoading) {
    super();
    this.position = position;
    this.assets = assets;
    this.onLoading = onLoading;
  }

  update = (params: Params) => {
    if (!this.assets.isLoading()) {
      this.onLoading();
    }
    this.timer += params.delta;
    if (this.timer > 100) {
      this.timer = 0;
      this.animationIndex += 1;
      if (this.animationIndex > 3) {
        this.animationIndex = 0;
      }
    }
  };

  draw = (params: Params) => {
    params.pixels.setPixel(0, 0, this._calculateColor(0));
    params.pixels.setPixel(2, 0, this._calculateColor(1));
    params.pixels.setPixel(4, 0, this._calculateColor(2));
  };

  private _calculateColor = (index: number) => {
    if (index === this.animationIndex) {
      return 0x000000;
    } else if (index + 1 === this.animationIndex) {
      return 0xff0000;
    } else if (
      index + 2 === this.animationIndex ||
      index - 2 === this.animationIndex
    ) {
      return 0x00ff00;
    } else {
      return 0x0000ff;
    }
  };
}
